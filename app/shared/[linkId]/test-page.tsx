import { prisma } from "@/lib/db";

interface Props {
    params: Promise<{
        linkId: string;
    }>;
}

export default async function TestPage({ params }: Props) {
    console.log('[Test] Starting database test...');

    const resolvedParams = await params;
    const { linkId } = resolvedParams;

    console.log('[Test] Testing with linkId:', linkId);

    try {
        // Simple database test
        const testResult = await prisma.sharedLink.count();
        console.log('[Test] Database connection successful. Shared links count:', testResult);

        // Try to find the specific shared link
        if (linkId) {
            const specificLink = await prisma.sharedLink.findFirst({
                where: { id: linkId }
            });
            console.log('[Test] Specific link found:', !!specificLink);
        }

        return (
            <div className="p-8">
                <h1 className="text-2xl font-bold mb-4">Database Test</h1>
                <p>Database connection successful!</p>
                <p>Shared links count: {testResult}</p>
                {linkId && (
                    <p>Testing with linkId: {linkId}</p>
                )}
            </div>
        );
    } catch (error) {
        console.error('[Test] Database connection failed:', error);

        return (
            <div className="p-8">
                <h1 className="text-2xl font-bold mb-4">Database Test</h1>
                <p className="text-red-600">Database connection failed!</p>
                <pre className="bg-gray-100 p-4 mt-4">
                    {error instanceof Error ? error.message : 'Unknown error'}
                </pre>
            </div>
        );
    }
} 