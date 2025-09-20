import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { validateSessionToken } from "@/lib/lucia";

// POST /api/identities/requests - Create identity access request
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

        const { targetEmail, context, message, identityId } = await request.json();

        if (!targetEmail || !context) {
            return NextResponse.json(
                { error: "Target email and context are required" },
                { status: 400 }
            );
        }

        // Find the target user
        const targetUser = await prisma.user.findUnique({
            where: { email: targetEmail.toLowerCase() }
        });

        if (!targetUser) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        // Cannot request from yourself
        if (targetUser.id === user.id) {
            return NextResponse.json(
                { error: "Cannot request identity from yourself" },
                { status: 400 }
            );
        }

        // Check if specific identity exists (if provided)
        if (identityId) {
            const identity = await prisma.identity.findFirst({
                where: {
                    id: identityId,
                    userId: targetUser.id,
                    isActive: true
                }
            });

            if (!identity) {
                return NextResponse.json(
                    { error: "Identity not found or not available" },
                    { status: 404 }
                );
            }
        }

        // Create or update the request
        const identityRequest = await prisma.identityRequest.upsert({
            where: {
                requesterId_targetId_context: {
                    requesterId: user.id,
                    targetId: targetUser.id,
                    context: context
                }
            },
            update: {
                identityId: identityId || null,
                message: message || null,
                status: 'PENDING',
                updatedAt: new Date()
            },
            create: {
                requesterId: user.id,
                targetId: targetUser.id,
                identityId: identityId || null,
                context: context,
                message: message || null,
                status: 'PENDING'
            },
            include: {
                requester: {
                    select: {
                        email: true
                    }
                },
                identity: {
                    select: {
                        name: true,
                        description: true
                    }
                }
            }
        });

        return NextResponse.json({
            message: "Identity request created successfully",
            request: identityRequest
        });
    } catch (error) {
        console.error("Create identity request error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

// GET /api/identities/requests - Get identity requests
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
        const type = searchParams.get('type'); // 'sent' or 'received'
        const status = searchParams.get('status'); // 'PENDING', 'APPROVED', 'REJECTED', 'EXPIRED'

        let requests;

        const whereCondition: any = {};
        if (status) {
            whereCondition.status = status;
        }

        if (type === 'sent') {
            // Requests I have sent to others
            const sentRequests = await prisma.identityRequest.findMany({
                where: {
                    requesterId: user.id,
                    ...whereCondition
                },
                include: {
                    identity: {
                        select: {
                            name: true,
                            description: true,
                            user: {
                                select: {
                                    email: true
                                }
                            }
                        }
                    }
                },
                orderBy: { createdAt: 'desc' }
            });

            // Get target email for each request
            const requestsWithTargetEmail = await Promise.all(
                sentRequests.map(async (request) => {
                    const targetUser = await prisma.user.findFirst({
                        where: { id: request.targetId },
                        select: { email: true }
                    });
                    return {
                        ...request,
                        targetEmail: targetUser?.email || null
                    };
                })
            );

            requests = requestsWithTargetEmail;
        } else if (type === 'received') {
            // Requests others have sent to me
            requests = await prisma.identityRequest.findMany({
                where: {
                    targetId: user.id,
                    ...whereCondition
                },
                include: {
                    requester: {
                        select: {
                            email: true
                        }
                    },
                    identity: {
                        select: {
                            name: true,
                            description: true
                        }
                    }
                },
                orderBy: { createdAt: 'desc' }
            });
        } else {
            // Both sent and received
            const [sentRequestsRaw, receivedRequests] = await Promise.all([
                prisma.identityRequest.findMany({
                    where: {
                        requesterId: user.id,
                        ...whereCondition
                    },
                    include: {
                        identity: {
                            select: {
                                name: true,
                                description: true,
                                user: {
                                    select: {
                                        email: true
                                    }
                                }
                            }
                        }
                    },
                    orderBy: { createdAt: 'desc' }
                }),
                prisma.identityRequest.findMany({
                    where: {
                        targetId: user.id,
                        ...whereCondition
                    },
                    include: {
                        requester: {
                            select: {
                                email: true
                            }
                        },
                        identity: {
                            select: {
                                name: true,
                                description: true
                            }
                        }
                    },
                    orderBy: { createdAt: 'desc' }
                })
            ]);

            // Get target email for each sent request
            const sentRequests = await Promise.all(
                sentRequestsRaw.map(async (request) => {
                    const targetUser = await prisma.user.findFirst({
                        where: { id: request.targetId },
                        select: { email: true }
                    });
                    return {
                        ...request,
                        targetEmail: targetUser?.email || null
                    };
                })
            );

            return NextResponse.json({
                sentRequests,
                receivedRequests
            });
        }

        return NextResponse.json({ requests });
    } catch (error) {
        console.error("Get identity requests error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
} 