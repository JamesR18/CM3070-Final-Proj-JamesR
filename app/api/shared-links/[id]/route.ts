import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { validateSessionToken } from "@/lib/lucia";

// GET /api/shared-links/[id] - Get specific shared link
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
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

        const resolvedParams = await params;
        const linkId = resolvedParams.id;

        const sharedLink = await prisma.sharedLink.findFirst({
            where: {
                id: linkId,
                ownerId: user.id
            },
            include: {
                identity: {
                    select: {
                        name: true,
                        description: true
                    }
                },
                accesses: {
                    orderBy: { accessedAt: 'desc' },
                    take: 10 // Get last 10 accesses
                },
                _count: {
                    select: {
                        accesses: true
                    }
                }
            }
        });

        if (!sharedLink) {
            return NextResponse.json(
                { error: "Shared link not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            sharedLink,
            shareUrl: `${request.nextUrl.origin}/shared/${sharedLink.id}`
        });
    } catch (error) {
        console.error("Get shared link error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

// PUT /api/shared-links/[id] - Update shared link
export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
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

        const resolvedParams = await params;
        const linkId = resolvedParams.id;

        const { name, isActive, expiresAt, accessLimit, requireAuth } = await request.json();

        // Verify ownership
        const existingLink = await prisma.sharedLink.findFirst({
            where: {
                id: linkId,
                ownerId: user.id
            }
        });

        if (!existingLink) {
            return NextResponse.json(
                { error: "Shared link not found" },
                { status: 404 }
            );
        }

        const updatedLink = await prisma.sharedLink.update({
            where: { id: linkId },
            data: {
                ...(name !== undefined && { name }),
                ...(isActive !== undefined && { isActive }),
                ...(expiresAt !== undefined && { expiresAt: expiresAt ? new Date(expiresAt) : null }),
                ...(accessLimit !== undefined && { accessLimit }),
                ...(requireAuth !== undefined && { requireAuth }),
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
            message: "Shared link updated successfully",
            sharedLink: updatedLink
        });
    } catch (error) {
        console.error("Update shared link error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

// DELETE /api/shared-links/[id] - Delete shared link
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
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

        const resolvedParams = await params;
        const linkId = resolvedParams.id;

        // Verify ownership and existence
        const sharedLink = await prisma.sharedLink.findFirst({
            where: {
                id: linkId,
                ownerId: user.id
            }
        });

        if (!sharedLink) {
            return NextResponse.json(
                { error: "Shared link not found" },
                { status: 404 }
            );
        }

        // Delete the shared link (cascade will handle related records)
        await prisma.sharedLink.delete({
            where: { id: linkId }
        });

        return NextResponse.json({
            message: "Shared link deleted successfully"
        });
    } catch (error) {
        console.error("Delete shared link error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
} 