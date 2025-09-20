import { NextRequest, NextResponse } from "next/server";
import { validateSessionToken } from "@/lib/lucia";
import { getSharedIdentityData } from "@/app/shared/[linkId]/service";

// GET /api/shared/[linkId] - Access shared identity via link
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ linkId: string }> }
) {
    try {
        const resolvedParams = await params;
        const { linkId } = resolvedParams;

        console.log(`[API] Accessing shared identity: ${linkId}`);

        // Get visitor information for tracking
        const forwardedFor = request.headers.get('x-forwarded-for');
        const viewerIp = forwardedFor ? forwardedFor.split(',')[0] :
            request.headers.get('x-real-ip') ||
            'unknown';
        const viewerAgent = request.headers.get('user-agent') || 'unknown';

        // Check if authentication is required (we'll need to fetch the shared link first)
        // For now, we'll handle auth in the service if needed

        const result = await getSharedIdentityData(linkId, {
            ip: viewerIp,
            userAgent: viewerAgent,
            skipAccessTracking: false
        });

        console.log(`[API] Service result:`, {
            hasData: !!result.data,
            error: result.error,
            status: result.status
        });

        if (result.error) {
            return NextResponse.json(
                { error: result.error },
                { status: result.status }
            );
        }

        return NextResponse.json(result.data);
    } catch (error) {
        console.error("[API] Access shared identity error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
} 