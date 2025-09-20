import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { validateSessionToken } from "@/lib/lucia";

// POST /api/shared-links - Create new shareable link
export async function POST(request: NextRequest) {
    try {
        const sessionToken = request.cookies.get("session")?.value;

        if (!sessionToken) {
            return NextResponse.json(
                { error: "Authentication required" },
                { status: 401 }
            );
        }

        const { session, user } = await validateSessionToken(sessionToken);

        if (!session || !user) {
            return NextResponse.json(
                { error: "Invalid session" },
                { status: 401 }
            );
        }

        const {
            identityId,
            context,
            name,
            expiresAt,
            accessLimit,
            requireAuth
        } = await request.json();

        if (!identityId || !context) {
            return NextResponse.json(
                { error: "Identity ID and context are required" },
                { status: 400 }
            );
        }

        // Verify ownership of the identity
        const identity = await prisma.identity.findFirst({
            where: {
                id: identityId,
                userId: user.id
            }
        });

        if (!identity) {
            return NextResponse.json(
                { error: "Identity not found or access denied" },
                { status: 404 }
            );
        }

        // Create the shared link
        const sharedLink = await prisma.sharedLink.create({
            data: {
                ownerId: user.id,
                identityId,
                context,
                name: name || null,
                expiresAt: expiresAt ? new Date(expiresAt) : null,
                accessLimit: accessLimit || null,
                requireAuth: requireAuth || false,
            },
            include: {
                identity: {
                    select: {
                        name: true,
                        description: true
                    }
                }
            }
        });

        return NextResponse.json({
            message: "Shared link created successfully",
            sharedLink,
            shareUrl: `${request.nextUrl.origin}/shared/${sharedLink.id}`
        });
    } catch (error) {
        console.error("Create shared link error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

// GET /api/shared-links - List user's shared links
export async function GET(request: NextRequest) {
    try {
        const sessionToken = request.cookies.get("session")?.value;

        if (!sessionToken) {
            return NextResponse.json(
                { error: "Authentication required" },
                { status: 401 }
            );
        }

        const { session, user } = await validateSessionToken(sessionToken);

        if (!session || !user) {
            return NextResponse.json(
                { error: "Invalid session" },
                { status: 401 }
            );
        }

        const sharedLinks = await prisma.sharedLink.findMany({
            where: { ownerId: user.id },
            include: {
                identity: {
                    select: {
                        name: true,
                        description: true
                    }
                },
                _count: {
                    select: {
                        accesses: true
                    }
                }
            },
            orderBy: { createdAt: 'desc' }
        });

        return NextResponse.json({ sharedLinks });
    } catch (error) {
        console.error("Get shared links error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
} 