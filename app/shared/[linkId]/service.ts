import { prisma } from "@/lib/db";
import { SharedIdentityData } from "./types";

export interface SharedIdentityResult {
    data: SharedIdentityData | null;
    error: string | null;
    status: number;
}

export async function getSharedIdentityData(linkId: string, clientInfo?: {
    ip?: string;
    userAgent?: string;
    skipAccessTracking?: boolean;
}): Promise<SharedIdentityResult> {
    console.log(`[Service] Starting getSharedIdentityData for linkId: ${linkId}`);
    console.log(`[Service] Client info:`, clientInfo);

    try {
        console.log(`[Service] Attempting to query database for shared link`);

        // Find the shared link
        const sharedLink = await prisma.sharedLink.findFirst({
            where: {
                id: linkId,
                isActive: true
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
                },
                owner: {
                    select: {
                        email: true
                    }
                }
            }
        });

        console.log(`[Service] Database query completed. Found shared link:`, !!sharedLink);

        if (!sharedLink) {
            console.log(`[Service] Shared link not found or inactive`);
            return {
                data: null,
                error: "Shared link not found or inactive",
                status: 404
            };
        }

        console.log(`[Service] Shared link found:`, {
            id: sharedLink.id,
            context: sharedLink.context,
            isActive: sharedLink.isActive,
            expiresAt: sharedLink.expiresAt,
            accessCount: sharedLink.accessCount,
            accessLimit: sharedLink.accessLimit
        });

        // Check if link has expired
        if (sharedLink.expiresAt && new Date() > sharedLink.expiresAt) {
            console.log(`[Service] Shared link has expired`);
            return {
                data: null,
                error: "Shared link has expired",
                status: 410
            };
        }

        // Check access limit
        if (sharedLink.accessLimit && sharedLink.accessCount >= sharedLink.accessLimit) {
            console.log(`[Service] Shared link has reached access limit`);
            return {
                data: null,
                error: "Shared link has reached its access limit",
                status: 410
            };
        }

        console.log(`[Service] Validation passed. Processing access tracking...`);

        // Record the access and increment counter (only if not skipped)
        if (!clientInfo?.skipAccessTracking) {
            console.log(`[Service] Recording access...`);
            try {
                await prisma.$transaction([
                    prisma.sharedLinkAccess.create({
                        data: {
                            sharedLinkId: sharedLink.id,
                            viewerIp: clientInfo?.ip || 'unknown',
                            viewerAgent: clientInfo?.userAgent || 'unknown'
                        }
                    }),
                    prisma.sharedLink.update({
                        where: { id: sharedLink.id },
                        data: {
                            accessCount: {
                                increment: 1
                            }
                        }
                    })
                ]);
                console.log(`[Service] Access recorded successfully`);
            } catch (accessError) {
                console.error(`[Service] Failed to record access for sharedLinkId=${sharedLink.id}:`, accessError);
                return {
                    data: null,
                    error: 'Failed to record access for audit log',
                    status: 500
                };
            }
        } else {
            console.log(`[Service] Skipping access tracking as requested`);
        }

        // Filter attributes based on sharing context and visibility
        const filteredAttributes = sharedLink.identity.attributes.filter(attr => {
            return attr.isVisible && (attr.isPublic || true);
        }).map(attr => ({
            id: attr.id,
            identityId: attr.identityId,
            key: attr.key,
            value: attr.value,
            isPublic: attr.isPublic,
            isVisible: attr.isVisible,
            createdAt: attr.createdAt.toISOString(),
            updatedAt: attr.updatedAt.toISOString()
        }));

        console.log(`[Service] Filtered attributes count:`, filteredAttributes.length);

        // Return the shared identity data
        const data: SharedIdentityData = {
            identity: {
                id: sharedLink.identity.id,
                name: sharedLink.identity.name,
                description: sharedLink.identity.description || undefined,
                attributes: filteredAttributes
            },
            sharedBy: sharedLink.owner.email,
            context: sharedLink.context,
            linkName: sharedLink.name || undefined,
            accessCount: sharedLink.accessCount + (clientInfo?.skipAccessTracking ? 0 : 1),
            accessLimit: sharedLink.accessLimit || undefined,
            expiresAt: sharedLink.expiresAt?.toISOString() || null,
            createdAt: sharedLink.createdAt.toISOString()
        };

        console.log(`[Service] Successfully prepared data:`, {
            identityId: data.identity.id,
            identityName: data.identity.name,
            context: data.context,
            attributesCount: data.identity.attributes.length
        });

        return {
            data,
            error: null,
            status: 200
        };
    } catch (error) {
        console.error("[Service] Error in getSharedIdentityData:", error);
        console.error("[Service] Error stack:", error instanceof Error ? error.stack : 'No stack trace');

        return {
            data: null,
            error: error instanceof Error ? error.message : "Internal server error",
            status: 500
        };
    }
} 