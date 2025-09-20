import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { validateSessionToken } from "@/lib/lucia";

// POST /api/identities/share - Share identity with another user
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

        const { identityId, viewerEmail, context, canView, canRequest, expiresAt } = await request.json();

        if (!identityId || !viewerEmail || !context) {
            return NextResponse.json(
                { error: "Identity ID, viewer email, and context are required" },
                { status: 400 }
            );
        }

        // Find the viewer user
        const viewer = await prisma.user.findUnique({
            where: { email: viewerEmail.toLowerCase() }
        });

        if (!viewer) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
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
                { error: "Identity not found" },
                { status: 404 }
            );
        }

        // Cannot share with yourself
        if (viewer.id === user.id) {
            return NextResponse.json(
                { error: "Cannot share identity with yourself" },
                { status: 400 }
            );
        }

        // Create or update the sharing relationship
        const sharedIdentity = await prisma.sharedIdentity.upsert({
            where: {
                ownerId_viewerId_identityId_context: {
                    ownerId: user.id,
                    viewerId: viewer.id,
                    identityId: identityId,
                    context: context
                }
            },
            update: {
                canView: canView !== undefined ? canView : true,
                canRequest: canRequest !== undefined ? canRequest : true,
                expiresAt: expiresAt ? new Date(expiresAt) : null,
            },
            create: {
                ownerId: user.id,
                viewerId: viewer.id,
                identityId: identityId,
                context: context,
                canView: canView !== undefined ? canView : true,
                canRequest: canRequest !== undefined ? canRequest : true,
                expiresAt: expiresAt ? new Date(expiresAt) : null,
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
            message: "Identity shared successfully",
            sharedIdentity
        });
    } catch (error) {
        console.error("Share identity error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

// GET /api/identities/share - Get identities shared with/by current user
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

        const { searchParams } = new URL(request.url);
        const type = searchParams.get('type'); // 'shared-by-me' or 'shared-with-me'

        let sharedIdentities;

        if (type === 'shared-by-me') {
            // Identities I have shared with others
            sharedIdentities = await prisma.sharedIdentity.findMany({
                where: { ownerId: user.id },
                include: {
                    identity: {
                        select: {
                            name: true,
                            description: true
                        }
                    }
                },
                orderBy: { sharedAt: 'desc' }
            });
        } else if (type === 'shared-with-me') {
            // Identities others have shared with me
            sharedIdentities = await prisma.sharedIdentity.findMany({
                where: {
                    viewerId: user.id,
                    canView: true,
                    OR: [
                        { expiresAt: null },
                        { expiresAt: { gt: new Date() } }
                    ]
                },
                include: {
                    identity: {
                        include: {
                            attributes: {
                                where: { isVisible: true },
                                orderBy: { key: 'asc' }
                            },
                            user: {
                                select: {
                                    email: true
                                }
                            }
                        }
                    }
                },
                orderBy: { sharedAt: 'desc' }
            });
        } else {
            // Both types
            const [sharedByMe, sharedWithMe] = await Promise.all([
                prisma.sharedIdentity.findMany({
                    where: { ownerId: user.id },
                    include: {
                        identity: {
                            select: {
                                name: true,
                                description: true
                            }
                        }
                    },
                    orderBy: { sharedAt: 'desc' }
                }),
                prisma.sharedIdentity.findMany({
                    where: {
                        viewerId: user.id,
                        canView: true,
                        OR: [
                            { expiresAt: null },
                            { expiresAt: { gt: new Date() } }
                        ]
                    },
                    include: {
                        identity: {
                            include: {
                                attributes: {
                                    where: { isVisible: true },
                                    orderBy: { key: 'asc' }
                                },
                                user: {
                                    select: {
                                        email: true
                                    }
                                }
                            }
                        }
                    },
                    orderBy: { sharedAt: 'desc' }
                })
            ]);

            return NextResponse.json({
                sharedByMe,
                sharedWithMe
            });
        }

        return NextResponse.json({ sharedIdentities });
    } catch (error) {
        console.error("Get shared identities error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
} 