import { NextRequest } from "next/server";
import { validateSessionToken } from "./lucia";

export interface AdminAuthResult {
    isAuthenticated: boolean;
    user?: {
        id: number;
        email: string;
        isAdmin: boolean;
        createdAt: Date;
        updatedAt: Date;
    };
    error?: string;
}

export async function validateAdminSession(
    request: NextRequest
): Promise<AdminAuthResult> {
    try {
        const sessionToken = request.cookies.get("session")?.value;

        if (!sessionToken) {
            return {
                isAuthenticated: false,
                error: "No session found",
            };
        }

        // Validate session
        const { session, user } = await validateSessionToken(sessionToken);

        if (!session || !user) {
            return {
                isAuthenticated: false,
                error: "Invalid session",
            };
        }

        // Check if user is admin
        if (!user.isAdmin) {
            return {
                isAuthenticated: false,
                error: "Access denied. Admin privileges required.",
            };
        }

        return {
            isAuthenticated: true,
            user: {
                id: user.id,
                email: user.email,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            },
        };
    } catch (error) {
        console.error("Admin session validation error:", error);
        return {
            isAuthenticated: false,
            error: "Internal server error",
        };
    }
}

export function createAdminProtectedHandler<T extends any[]>(
    handler: (request: NextRequest, user: AdminAuthResult["user"], ...args: T) => Promise<Response>
) {
    return async (request: NextRequest, ...args: T): Promise<Response> => {
        const authResult = await validateAdminSession(request);

        if (!authResult.isAuthenticated) {
            return new Response(
                JSON.stringify({ error: authResult.error }),
                {
                    status: authResult.error?.includes("Access denied") ? 403 : 401,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        return handler(request, authResult.user!, ...args);
    };
} 