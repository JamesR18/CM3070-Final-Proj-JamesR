import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { validateSessionToken } from "@/lib/lucia";

// GET /api/identities - List user's identities
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

        const identities = await prisma.identity.findMany({
            where: { userId: user.id },
            include: {
                attributes: {
                    orderBy: { key: 'asc' }
                },
                _count: {
                    select: {
                        sharedWith: true,
                        requests: true
                    }
                }
            },
            orderBy: [
                { isDefault: 'desc' },
                { createdAt: 'asc' }
            ]
        });

        return NextResponse.json({ identities });
    } catch (error) {
        console.error("Get identities error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

// POST /api/identities - Create new identity
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

        const { name, description, isDefault, attributes } = await request.json();

        if (!name || typeof name !== 'string' || name.trim().length === 0) {
            return NextResponse.json(
                { error: "Identity name is required" },
                { status: 400 }
            );
        }

        // Check if identity name already exists for this user
        const existingIdentity = await prisma.identity.findUnique({
            where: {
                userId_name: {
                    userId: user.id,
                    name: name.trim()
                }
            }
        });

        if (existingIdentity) {
            return NextResponse.json(
                { error: "Identity with this name already exists" },
                { status: 409 }
            );
        }

        // If this is set as default, unset other defaults
        if (isDefault) {
            await prisma.identity.updateMany({
                where: { userId: user.id },
                data: { isDefault: false }
            });
        }

        // Create identity with attributes in a transaction
        const identity = await prisma.$transaction(async (tx) => {
            const newIdentity = await tx.identity.create({
                data: {
                    userId: user.id,
                    name: name.trim(),
                    description: description || null,
                    isDefault: isDefault || false,
                }
            });

            // Add attributes if provided
            if (attributes && Array.isArray(attributes)) {
                const validAttributes = attributes.filter(attr =>
                    attr.key && typeof attr.key === 'string' &&
                    attr.value && typeof attr.value === 'string'
                );

                if (validAttributes.length > 0) {
                    await tx.identityAttribute.createMany({
                        data: validAttributes.map(attr => ({
                            identityId: newIdentity.id,
                            key: attr.key.trim(),
                            value: attr.value.trim(),
                            isPublic: attr.isPublic || false,
                            isVisible: attr.isVisible !== false
                        }))
                    });
                }
            }

            return tx.identity.findUnique({
                where: { id: newIdentity.id },
                include: {
                    attributes: {
                        orderBy: { key: 'asc' }
                    }
                }
            });
        });

        return NextResponse.json(
            {
                message: "Identity created successfully",
                identity
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Create identity error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
} 