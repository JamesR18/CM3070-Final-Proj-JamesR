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

        // Find user by email
        const user = await prisma.user.findUnique({
            where: { email: email.toLowerCase() },
        });

        if (!user) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        // Check if user is admin
        if (!user.isAdmin) {
            return NextResponse.json(
                { error: "Access denied. Admin privileges required." },
                { status: 403 }
            );
        }

        // Verify password
        const passwordHash = createHash("sha256").update(password).digest("hex");
        if (passwordHash !== user.passwordHash) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        // Create session
        const sessionToken = generateSessionToken();
        const session = await createSession(sessionToken, user.id);

        // Set cookie
        const response = NextResponse.json({
            message: "Login successful",
            user: {
                id: user.id,
                email: user.email,
                isAdmin: user.isAdmin,
            },
        });

        response.cookies.set("session", sessionToken, {
            path: "/",
            secure: process.env.NODE_ENV === "production",
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 30, // 30 days
            sameSite: "lax",
        });

        return response;
    } catch (error) {
        console.error("Admin login error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
} 