import {
    Card,
    CardContent,
} from "@/components/ui/card";

export default function Loading() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <Card className="w-full max-w-md">
                <CardContent className="flex items-center justify-center py-12">
                    <div className="text-lg">Loading shared identity...</div>
                </CardContent>
            </Card>
        </div>
    );
} 