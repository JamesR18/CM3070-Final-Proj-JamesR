import { NextRequest, NextResponse } from "next/server";
import { invalidateSession } from "@/lib/lucia";
import { createHash } from "crypto";

export async function POST(request: NextRequest) {
    try {
        const sessionToken = request.cookies.get("session")?.value;

        if (!sessionToken) {
            return NextResponse.json(
                { error: "No session found" },
                { status: 401 }
            );
        }

        // Invalidate session
        const sessionId = createHash("sha256").update(sessionToken).digest("hex");
        await invalidateSession(sessionId);

        // Clear cookie
        const response = NextResponse.json({
            message: "Logout successful",
        });

        response.cookies.set("session", "", {
            path: "/",
            secure: process.env.NODE_ENV === "production",
            httpOnly: true,
            maxAge: 0,
            sameSite: "lax",
        });

        return response;
    } catch (error) {
        console.error("Admin logout error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
} 