import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { createSession, generateSessionToken } from "@/lib/lucia";
import { createHash } from "crypto";

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required" },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Invalid email format" },
                { status: 400 }
            );
        }

        // Validate password strength
        if (password.length < 8) {
            return NextResponse.json(
                { error: "Password must be at least 8 characters long" },
                { status: 400 }
            );
        }

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email: email.toLowerCase() },
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "User with this email already exists" },
                { status: 409 }
            );
        }

        // Hash password
        const passwordHash = createHash("sha256").update(password).digest("hex");

        // Create regular user (not admin)
        const user = await prisma.user.create({
            data: {
                email: email.toLowerCase(),
                passwordHash,
                isAdmin: false,
            },
        });

        // Create session and set cookie
        const sessionToken = generateSessionToken();
        const session = await createSession(sessionToken, user.id);

        const response = NextResponse.json(
            {
                message: "Account created successfully",
                user: {
                    id: user.id,
                    email: user.email,
                    isAdmin: user.isAdmin,
                },
            },
            { status: 201 }
        );

        response.cookies.set("session", sessionToken, {
            path: "/",
            secure: process.env.NODE_ENV === "production",
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 30, // 30 days
            sameSite: "lax",
        });

        return response;
    } catch (error) {
        console.error("User registration error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
} 