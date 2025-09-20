import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { validateSessionToken } from "@/lib/lucia";

// GET /api/identities/[id] - Get specific identity
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
        const identityId = parseInt(resolvedParams.id);
        if (isNaN(identityId)) {
            return NextResponse.json(
                { error: "Invalid identity ID" },
                { status: 400 }
            );
        }

        const identity = await prisma.identity.findFirst({
            where: {
                id: identityId,
                userId: user.id
            },
            include: {
                attributes: {
                    orderBy: { key: 'asc' }
                },
                sharedWith: {
                    select: {
                        id: true,
                        viewerId: true,
                        context: true,
                        canView: true,
                        canRequest: true,
                        sharedAt: true,
                        expiresAt: true
                    }
                },
                _count: {
                    select: {
                        sharedWith: true,
                        requests: true
                    }
                }
            }
        });

        if (!identity) {
            return NextResponse.json(
                { error: "Identity not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ identity });
    } catch (error) {
        console.error("Get identity error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

// PUT /api/identities/[id] - Update identity
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
        const identityId = parseInt(resolvedParams.id);
        if (isNaN(identityId)) {
            return NextResponse.json(
                { error: "Invalid identity ID" },
                { status: 400 }
            );
        }

        const { name, description, isDefault, isActive, attributes } = await request.json();

        // Verify ownership
        const existingIdentity = await prisma.identity.findFirst({
            where: {
                id: identityId,
                userId: user.id
            }
        });

        if (!existingIdentity) {
            return NextResponse.json(
                { error: "Identity not found" },
                { status: 404 }
            );
        }

        // Check for name conflicts if name is being changed
        if (name && name !== existingIdentity.name) {
            const nameConflict = await prisma.identity.findUnique({
                where: {
                    userId_name: {
                        userId: user.id,
                        name: name.trim()
                    }
                }
            });

            if (nameConflict) {
                return NextResponse.json(
                    { error: "Identity with this name already exists" },
                    { status: 409 }
                );
            }
        }

        // Update identity in transaction
        const updatedIdentity = await prisma.$transaction(async (tx) => {
            // If setting as default, unset other defaults
            if (isDefault) {
                await tx.identity.updateMany({
                    where: {
                        userId: user.id,
                        id: { not: identityId }
                    },
                    data: { isDefault: false }
                });
            }

            // Update the identity
            const _updated = await tx.identity.update({
                where: { id: identityId },
                data: {
                    ...(name !== undefined && { name: name.trim() }),
                    ...(description !== undefined && { description }),
                    ...(isDefault !== undefined && { isDefault }),
                    ...(isActive !== undefined && { isActive }),
                }
            });

            // Update attributes if provided
            if (attributes && Array.isArray(attributes)) {
                // Delete existing attributes
                await tx.identityAttribute.deleteMany({
                    where: { identityId }
                });

                // Add new attributes
                const validAttributes = attributes.filter(attr =>
                    attr.key && typeof attr.key === 'string' &&
                    attr.value && typeof attr.value === 'string'
                );

                if (validAttributes.length > 0) {
                    await tx.identityAttribute.createMany({
                        data: validAttributes.map(attr => ({
                            identityId,
                            key: attr.key.trim(),
                            value: attr.value.trim(),
                            isPublic: attr.isPublic || false,
                            isVisible: attr.isVisible !== false
                        }))
                    });
                }
            }

            return tx.identity.findUnique({
                where: { id: identityId },
                include: {
                    attributes: {
                        orderBy: { key: 'asc' }
                    }
                }
            });
        });

        return NextResponse.json({
            message: "Identity updated successfully",
            identity: updatedIdentity
        });
    } catch (error) {
        console.error("Update identity error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

// DELETE /api/identities/[id] - Delete identity
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
        const identityId = parseInt(resolvedParams.id);
        if (isNaN(identityId)) {
            return NextResponse.json(
                { error: "Invalid identity ID" },
                { status: 400 }
            );
        }

        // Verify ownership and existence
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

        // Check if this is the default identity
        if (identity.isDefault) {
            const otherIdentities = await prisma.identity.count({
                where: {
                    userId: user.id,
                    id: { not: identityId }
                }
            });

            if (otherIdentities > 0) {
                return NextResponse.json(
                    { error: "Cannot delete the default identity. Set another identity as default first." },
                    { status: 400 }
                );
            }
        }

        // Delete the identity (cascade will handle related records)
        await prisma.identity.delete({
            where: { id: identityId }
        });

        return NextResponse.json({
            message: "Identity deleted successfully"
        });
    } catch (error) {
        console.error("Delete identity error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
} 