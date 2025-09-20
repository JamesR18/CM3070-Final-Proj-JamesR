import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { validateSessionToken } from "@/lib/lucia";

// GET /api/shared-links/audit-logs - Get audit logs for user's shared links
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

        const searchParams = request.nextUrl.searchParams;
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "50");
        const linkId = searchParams.get("linkId"); // Optional filter by specific link
        const days = parseInt(searchParams.get("days") || "30"); // Filter by date range

        const offset = (page - 1) * limit;
        const dateFilter = new Date();
        dateFilter.setDate(dateFilter.getDate() - days);

        // Build the where clause
        const whereClause: any = {
            sharedLink: {
                ownerId: user.id
            },
            accessedAt: {
                gte: dateFilter
            }
        };

        if (linkId) {
            whereClause.sharedLinkId = linkId;
        }

        // Get audit logs with shared link details
        const [auditLogs, totalCount] = await Promise.all([
            prisma.sharedLinkAccess.findMany({
                where: whereClause,
                include: {
                    sharedLink: {
                        include: {
                            identity: {
                                select: {
                                    name: true,
                                    description: true
                                }
                            }
                        }
                    }
                },
                orderBy: { accessedAt: 'desc' },
                skip: offset,
                take: limit
            }),
            prisma.sharedLinkAccess.count({
                where: whereClause
            })
        ]);

        // Get summary statistics
        const stats = await prisma.sharedLinkAccess.groupBy({
            by: ['sharedLinkId'],
            where: {
                sharedLink: {
                    ownerId: user.id
                },
                accessedAt: {
                    gte: dateFilter
                }
            },
            _count: true,
            orderBy: {
                _count: {
                    sharedLinkId: 'desc'
                }
            }
        });

        return NextResponse.json({
            auditLogs: auditLogs.map(log => ({
                id: log.id,
                accessedAt: log.accessedAt.toISOString(),
                viewerIp: log.viewerIp || 'Unknown',
                viewerAgent: log.viewerAgent || 'Unknown',
                sharedLink: {
                    id: log.sharedLink.id,
                    name: log.sharedLink.name,
                    context: log.sharedLink.context,
                    identity: log.sharedLink.identity
                }
            })),
            pagination: {
                page,
                limit,
                totalCount,
                totalPages: Math.ceil(totalCount / limit),
                hasNextPage: page * limit < totalCount,
                hasPreviousPage: page > 1
            },
            stats: {
                totalAccesses: totalCount,
                uniqueLinks: stats.length,
                dateRange: days
            }
        });
    } catch (error) {
        console.error("Get audit logs error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
} 