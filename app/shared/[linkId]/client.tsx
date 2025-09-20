"use client";

import { Globe, Calendar, Eye, User, Shield, Clock, ExternalLink } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SharedIdentityData } from "./types";

interface SharedIdentityClientProps {
    initialData: SharedIdentityData | null;
    error?: string | null;
}

export default function SharedIdentityClient({ initialData, error: initialError }: SharedIdentityClientProps) {
    const [data] = useState<SharedIdentityData | null>(initialData);
    const [error] = useState<string | null>(initialError || null);

    useEffect(() => {
        console.log('[Client] SharedIdentityClient mounted');
        console.log('[Client] Props received:', {
            hasInitialData: !!initialData,
            initialDataType: typeof initialData,
            initialData: initialData,
            hasError: !!initialError,
            error: initialError
        });

        // Additional validation
        if (initialData) {
            console.log('[Client] Initial data structure:', {
                hasIdentity: !!initialData.identity,
                identityName: initialData.identity?.name,
                attributesCount: initialData.identity?.attributes?.length,
                context: initialData.context,
                sharedBy: initialData.sharedBy
            });
        }
    }, [initialData, initialError]);

    console.log('[Client] Rendering with state:', { hasData: !!data, hasError: !!error });

    function formatDate(dateString: string) {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    }

    function getTimeRemaining(expiresAt: string) {
        const now = new Date();
        const expiry = new Date(expiresAt);
        const diff = expiry.getTime() - now.getTime();

        if (diff <= 0) return 'Expired';

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        if (days > 0) return `${days} day${days > 1 ? 's' : ''} remaining`;
        if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} remaining`;
        return 'Less than 1 hour remaining';
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle className="text-red-600 flex items-center gap-2">
                            <Shield className="h-5 w-5" />
                            Access Denied
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-sm text-gray-600">{error}</p>
                        <div className="space-y-2">
                            <p className="text-xs text-gray-500">
                                This could happen if:
                            </p>
                            <ul className="text-xs text-gray-500 list-disc list-inside space-y-1">
                                <li>The link has expired or been deactivated</li>
                                <li>The link has reached its access limit</li>
                                <li>Authentication is required</li>
                                <li>The link is invalid</li>
                            </ul>
                        </div>
                        <Link href="/">
                            <Button className="w-full mt-4">
                                Go to Homepage
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <Card className="w-full max-w-md">
                    <CardContent className="flex items-center justify-center py-12">
                        <div className="text-lg">No data available</div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Globe className="h-8 w-8 text-blue-600" />
                        <h1 className="text-3xl font-bold">Shared Identity</h1>
                    </div>
                    <p className="text-gray-600">
                        You're viewing a shared identity in the <strong>{data.context}</strong> context
                    </p>
                </div>

                {/* Link Information */}
                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <ExternalLink className="h-5 w-5" />
                            Link Information
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="font-medium text-gray-700">Shared by:</p>
                                <p>{data.sharedBy}</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-700">Context:</p>
                                <Badge variant="outline">{data.context}</Badge>
                            </div>
                            {data.linkName && (
                                <div>
                                    <p className="font-medium text-gray-700">Link name:</p>
                                    <p>{data.linkName}</p>
                                </div>
                            )}
                            <div>
                                <p className="font-medium text-gray-700">Created:</p>
                                <p>{formatDate(data.createdAt)}</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-700">Access count:</p>
                                <p className="flex items-center gap-1">
                                    <Eye className="h-4 w-4" />
                                    {data.accessCount}
                                    {data.accessLimit && ` / ${data.accessLimit}`}
                                </p>
                            </div>
                            {data.expiresAt && (
                                <div>
                                    <p className="font-medium text-gray-700">Expires:</p>
                                    <p className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        {getTimeRemaining(data.expiresAt)}
                                    </p>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* Identity Information */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <User className="h-5 w-5" />
                            {data.identity.name}
                        </CardTitle>
                        {data.identity.description && (
                            <CardDescription>
                                {data.identity.description}
                            </CardDescription>
                        )}
                    </CardHeader>
                    <CardContent>
                        {data.identity.attributes.length > 0 ? (
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Attributes</h3>
                                <div className="grid gap-4">
                                    {data.identity.attributes.map((attr) => (
                                        <div key={attr.id} className="border rounded-lg p-4">
                                            <div className="flex items-start justify-between mb-2">
                                                <h4 className="font-medium text-gray-900 capitalize">
                                                    {attr.key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                                                </h4>
                                                {attr.isPublic && (
                                                    <Badge variant="outline" className="text-xs">
                                                        Public
                                                    </Badge>
                                                )}
                                            </div>
                                            <p className="text-gray-700 whitespace-pre-wrap">
                                                {attr.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No visible attributes</h3>
                                <p className="text-gray-600">
                                    This identity doesn't have any visible attributes in this context.
                                </p>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Footer */}
                <div className="text-center mt-8">
                    <Link href="/">
                        <Button variant="outline">
                            Visit Our Platform
                        </Button>
                    </Link>
                    <p className="text-xs text-gray-500 mt-4">
                        Powered by Contextual Identity Management System
                    </p>
                </div>
            </div>
        </div>
    );
} 