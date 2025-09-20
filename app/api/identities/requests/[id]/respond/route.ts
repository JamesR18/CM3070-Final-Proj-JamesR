import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { validateSessionToken } from "@/lib/lucia";

// POST /api/identities/requests/[id]/respond - Respond to identity request
export async function POST(
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
        const requestId = parseInt(resolvedParams.id);

        if (isNaN(requestId)) {
            return NextResponse.json(
                { error: "Invalid request ID" },
                { status: 400 }
            );
        }

        const { action, identityId, expiresAt } = await request.json();

        if (!action || !['approve', 'reject'].includes(action)) {
            return NextResponse.json(
                { error: "Action must be 'approve' or 'reject'" },
                { status: 400 }
            );
        }

        // Find the request and verify ownership
        const identityRequest = await prisma.identityRequest.findFirst({
            where: {
                id: requestId,
                targetId: user.id, // User must be the target of the request
                status: 'PENDING'
            },
            include: {
                requester: {
                    select: {
                        email: true
                    }
                }
            }
        });

        if (!identityRequest) {
            return NextResponse.json(
                { error: "Request not found or already processed" },
                { status: 404 }
            );
        }

        const response = await prisma.$transaction(async (tx) => {
            // Update the request status
            const updatedRequest = await tx.identityRequest.update({
                where: { id: requestId },
                data: {
                    status: action === 'approve' ? 'APPROVED' : 'REJECTED',
                    respondedAt: new Date()
                }
            });

            // If approved, create or update sharing relationship
            if (action === 'approve') {
                let targetIdentityId = identityId || identityRequest.identityId;

                // If no specific identity provided, find user's default identity
                if (!targetIdentityId) {
                    const defaultIdentity = await tx.identity.findFirst({
                        where: {
                            userId: user.id,
                            isDefault: true,
                            isActive: true
                        }
                    });

                    if (defaultIdentity) {
                        targetIdentityId = defaultIdentity.id;
                    }
                }

                if (targetIdentityId) {
                    // Verify the identity exists and belongs to the user
                    const identity = await tx.identity.findFirst({
                        where: {
                            id: targetIdentityId,
                            userId: user.id,
                            isActive: true
                        }
                    });

                    if (identity) {
                        // Create or update sharing relationship
                        await tx.sharedIdentity.upsert({
                            where: {
                                ownerId_viewerId_identityId_context: {
                                    ownerId: user.id,
                                    viewerId: identityRequest.requesterId,
                                    identityId: targetIdentityId,
                                    context: identityRequest.context
                                }
                            },
                            update: {
                                canView: true,
                                canRequest: true,
                                expiresAt: expiresAt ? new Date(expiresAt) : null
                            },
                            create: {
                                ownerId: user.id,
                                viewerId: identityRequest.requesterId,
                                identityId: targetIdentityId,
                                context: identityRequest.context,
                                canView: true,
                                canRequest: true,
                                expiresAt: expiresAt ? new Date(expiresAt) : null
                            }
                        });
                    }
                }
            }

            return updatedRequest;
        });

        return NextResponse.json({
            message: `Request ${action}d successfully`,
            request: {
                ...response,
                requester: identityRequest.requester
            }
        });
    } catch (error) {
        console.error("Respond to identity request error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
} 