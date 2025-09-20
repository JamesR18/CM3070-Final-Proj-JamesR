import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { createAdminProtectedHandler } from "@/lib/admin-auth";

// GET /api/admin/users - List all users (admin only)
export const GET = createAdminProtectedHandler(async (request: NextRequest) => {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                isAdmin: true,
                createdAt: true,
                updatedAt: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json({
            users,
            count: users.length,
        });
    } catch (error) {
        console.error("Admin users list error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}); 