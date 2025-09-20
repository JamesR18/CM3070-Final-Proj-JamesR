"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Plus, Settings, Share2, Eye, Users, UserCheck, ExternalLink, Copy, Trash2, Shield, Calendar, Globe, Monitor, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { identityApi, IdentityApiError, type Identity, type SharedIdentity, type SharedLink, type AuditLogEntry, type AuditLogResponse } from "@/lib/identity-api";
import { authApi, AuthApiError } from "@/lib/auth-api";
import { CreateIdentityDialog } from "@/components/create-identity-dialog";
import { EditIdentityDialog } from "@/components/edit-identity-dialog";
import { ShareIdentityDialog } from "@/components/share-identity-dialog";
import { IdentityRequestsView } from "@/components/identity-requests-view";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function IdentityManager() {
    const router = useRouter();
    const [identities, setIdentities] = useState<Identity[]>([]);
    const [sharedIdentities, setSharedIdentities] = useState<{
        sharedByMe: SharedIdentity[];
        sharedWithMe: SharedIdentity[];
    }>({ sharedByMe: [], sharedWithMe: [] });
    const [sharedLinks, setSharedLinks] = useState<SharedLink[]>([]);
    const [auditLogs, setAuditLogs] = useState<AuditLogResponse | null>(null);
    const [auditLogsLoading, setAuditLogsLoading] = useState(false);
    const [auditFilters, setAuditFilters] = useState({
        page: 1,
        limit: 25,
        linkId: '',
        days: 30
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedIdentity, setSelectedIdentity] = useState<Identity | null>(null);
    const [showCreateDialog, setShowCreateDialog] = useState(false);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showShareDialog, setShowShareDialog] = useState(false);
    const [activeTab, setActiveTab] = useState("identities");

    useEffect(() => {
        checkAuthAndLoad();
    }, []);

    useEffect(() => {
        if (activeTab === "audit") {
            loadAuditLogs();
        }
    }, [activeTab, auditFilters]);

    async function checkAuthAndLoad() {
        try {
            // Check authentication
            await authApi.getProfile();
            await loadData();
        } catch (err) {
            if (err instanceof AuthApiError && err.status === 401) {
                router.push("/login");
            } else {
                setError("Failed to load data");
            }
        }
    }

    async function loadData() {
        try {
            setIsLoading(true);
            setError(null);
            await Promise.all([loadIdentities(), loadSharedData()]);
        } catch (err) {
            if (err instanceof IdentityApiError) {
                setError(err.message);
            } else {
                setError("Failed to load data");
            }
        } finally {
            setIsLoading(false);
        }
    }

    async function loadIdentities() {
        try {
            const response = await identityApi.getIdentities();
            setIdentities(response.identities || []);
        } catch (err) {
            if (err instanceof IdentityApiError) {
                setError(err.message);
            } else {
                setError("Failed to load identities");
            }
        }
    }

    async function loadSharedData() {
        try {
            const [identitiesResponse, sharedLinksResponse] = await Promise.all([
                identityApi.getSharedIdentities(),
                identityApi.getSharedLinks()
            ]);

            setSharedIdentities({
                sharedByMe: identitiesResponse.sharedByMe || [],
                sharedWithMe: identitiesResponse.sharedWithMe || [],
            });
            setSharedLinks(sharedLinksResponse.sharedLinks || []);
        } catch (err) {
            if (err instanceof IdentityApiError) {
                setError(err.message);
            } else {
                setError("Failed to load shared data");
            }
        }
    }

    async function loadAuditLogs() {
        try {
            setAuditLogsLoading(true);
            const filters = {
                page: auditFilters.page,
                limit: auditFilters.limit,
                days: auditFilters.days,
                ...(auditFilters.linkId && { linkId: auditFilters.linkId })
            };
            const response = await identityApi.getAuditLogs(filters);
            setAuditLogs(response);
        } catch (err) {
            if (err instanceof IdentityApiError) {
                setError(err.message);
            } else {
                setError("Failed to load audit logs");
            }
        } finally {
            setAuditLogsLoading(false);
        }
    }

    async function handleDeleteIdentity(identity: Identity) {
        if (!confirm(`Are you sure you want to delete the "${identity.name}" identity?`)) {
            return;
        }

        try {
            await identityApi.deleteIdentity(identity.id);
            await loadData();
        } catch (err) {
            if (err instanceof IdentityApiError) {
                alert(`Error: ${err.message}`);
            } else {
                alert("Failed to delete identity");
            }
        }
    }

    function handleEditIdentity(identity: Identity) {
        setSelectedIdentity(identity);
        setShowEditDialog(true);
    }

    function handleShareIdentity(identity: Identity) {
        setSelectedIdentity(identity);
        setShowShareDialog(true);
    }

    function handleCreateSuccess() {
        setShowCreateDialog(false);
        loadData();
    }

    function handleEditSuccess() {
        setShowEditDialog(false);
        setSelectedIdentity(null);
        loadData();
    }

    function handleShareSuccess() {
        setShowShareDialog(false);
        setSelectedIdentity(null);
        loadData();
    }

    async function handleDeleteSharedLink(linkId: string) {
        if (!confirm("Are you sure you want to delete this shared link? Anyone with the link will lose access.")) {
            return;
        }

        try {
            await identityApi.deleteSharedLink(linkId);
            await loadSharedData();
        } catch (err) {
            if (err instanceof IdentityApiError) {
                alert(`Error: ${err.message}`);
            } else {
                alert("Failed to delete shared link");
            }
        }
    }

    async function handleToggleSharedLink(linkId: string, currentlyActive: boolean) {
        try {
            await identityApi.updateSharedLink(linkId, { isActive: !currentlyActive });
            await loadSharedData();
        } catch (err) {
            if (err instanceof IdentityApiError) {
                alert(`Error: ${err.message}`);
            } else {
                alert("Failed to update shared link");
            }
        }
    }

    function formatDate(dateString: string) {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    }

    function formatDetailedDate(dateString: string) {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short'
        });
    }

    function formatUserAgent(userAgent: string) {
        if (userAgent === 'Unknown' || !userAgent) return 'Unknown';

        // Extract browser and OS info
        const browserMatch = userAgent.match(/(Chrome|Firefox|Safari|Edge|Opera)\/[\d.]+/);
        const osMatch = userAgent.match(/(Windows|Mac OS|Linux|Android|iOS)/);

        const browser = browserMatch ? browserMatch[1] : 'Unknown Browser';
        const os = osMatch ? osMatch[1] : 'Unknown OS';

        return `${browser} on ${os}`;
    }

    function formatIpAddress(ip: string) {
        if (ip === 'Unknown' || !ip || ip === 'unknown') return 'Unknown';
        return ip;
    }

    function handleSuccessfulShare() {
        loadSharedData();
    }

    if (isLoading) {
        return (
            <div className="container mx-auto p-6">
                <div className="flex items-center justify-center min-h-[400px]">
                    <div className="text-lg">Loading identity management...</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto p-6">
                <Card className="max-w-md mx-auto">
                    <CardHeader>
                        <CardTitle className="text-red-600">Error</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-600 mb-4">{error}</p>
                        <Button onClick={loadData} className="w-full">
                            Retry
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Identity Management</h1>
                    <p className="text-gray-600">
                        Manage your different identities and control how you present yourself in various contexts
                    </p>
                </div>
                <Button onClick={() => setShowCreateDialog(true)} className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Create Identity
                </Button>
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="identities" className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        My Identities
                    </TabsTrigger>
                    <TabsTrigger value="shared" className="flex items-center gap-2">
                        <Share2 className="h-4 w-4" />
                        Shared
                    </TabsTrigger>
                    <TabsTrigger value="requests" className="flex items-center gap-2">
                        <UserCheck className="h-4 w-4" />
                        Requests
                    </TabsTrigger>
                    <TabsTrigger value="audit" className="flex items-center gap-2">
                        <Monitor className="h-4 w-4" />
                        Audit Logs
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="identities" className="space-y-6">
                    {identities.length === 0 ? (
                        <Card>
                            <CardContent className="flex flex-col items-center justify-center py-12">
                                <Users className="h-12 w-12 text-gray-400 mb-4" />
                                <h3 className="text-lg font-medium mb-2">No identities yet</h3>
                                <p className="text-gray-600 text-center mb-4">
                                    Create your first identity to start managing how you present yourself in different contexts.
                                </p>
                                <Button onClick={() => setShowCreateDialog(true)} className="flex items-center gap-2">
                                    <Plus className="h-4 w-4" />
                                    Create Your First Identity
                                </Button>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {identities.map((identity) => (
                                <Card key={identity.id} className="relative">
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <CardTitle className="flex items-center gap-2">
                                                    {identity.name}
                                                    {identity.isDefault && (
                                                        <Badge variant="secondary">Default</Badge>
                                                    )}
                                                    {!identity.isActive && (
                                                        <Badge variant="outline">Inactive</Badge>
                                                    )}
                                                </CardTitle>
                                                {identity.description && (
                                                    <CardDescription className="mt-1">
                                                        {identity.description}
                                                    </CardDescription>
                                                )}
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {/* Attributes */}
                                        <div className="space-y-2">
                                            <h4 className="text-sm font-medium">Attributes</h4>
                                            {identity.attributes.length > 0 ? (
                                                <div className="space-y-1">
                                                    {identity.attributes.slice(0, 3).map((attr) => (
                                                        <div key={attr.id} className="flex justify-between text-sm">
                                                            <span className="text-gray-600">{attr.key}:</span>
                                                            <span className="font-medium truncate ml-2">{attr.value}</span>
                                                        </div>
                                                    ))}
                                                    {identity.attributes.length > 3 && (
                                                        <div className="text-xs text-gray-500">
                                                            +{identity.attributes.length - 3} more
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <p className="text-sm text-gray-500">No attributes defined</p>
                                            )}
                                        </div>

                                        {/* Stats */}
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span>Shared: {identity._count?.sharedWith || 0}</span>
                                            <span>Requests: {identity._count?.requests || 0}</span>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex gap-2">
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                onClick={() => handleEditIdentity(identity)}
                                                className="flex-1"
                                            >
                                                <Settings className="h-4 w-4 mr-1" />
                                                Edit
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                onClick={() => handleShareIdentity(identity)}
                                                className="flex-1"
                                            >
                                                <Share2 className="h-4 w-4 mr-1" />
                                                Share
                                            </Button>
                                        </div>

                                        {!identity.isDefault && (
                                            <Button
                                                size="sm"
                                                variant="destructive"
                                                onClick={() => handleDeleteIdentity(identity)}
                                                className="w-full"
                                            >
                                                Delete
                                            </Button>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </TabsContent>

                <TabsContent value="shared" className="space-y-6">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">My Shared Links</h3>
                            {sharedLinks.length === 0 ? (
                                <Card>
                                    <CardContent className="flex flex-col items-center justify-center py-12">
                                        <Share2 className="h-12 w-12 text-gray-400 mb-4" />
                                        <h3 className="text-lg font-medium mb-2">No shared links yet</h3>
                                        <p className="text-gray-600 text-center mb-4">
                                            Create shareable links for your identities to give others access.
                                        </p>
                                    </CardContent>
                                </Card>
                            ) : (
                                <div className="space-y-4">
                                    {sharedLinks.map((link) => (
                                        <Card key={link.id}>
                                            <CardHeader>
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <CardTitle className="flex items-center gap-2">
                                                            <ExternalLink className="h-5 w-5" />
                                                            {link.name || `${link.identity?.name} - ${link.context}`}
                                                        </CardTitle>
                                                        <CardDescription>
                                                            Identity: {link.identity?.name} • Context: {link.context}
                                                        </CardDescription>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Badge variant={link.isActive ? "default" : "secondary"}>
                                                            {link.isActive ? "Active" : "Inactive"}
                                                        </Badge>
                                                        {link.expiresAt && new Date(link.expiresAt) < new Date() && (
                                                            <Badge variant="destructive">Expired</Badge>
                                                        )}
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                    <div>
                                                        <p className="font-medium text-gray-700">Access Count:</p>
                                                        <p className="flex items-center gap-1">
                                                            <Eye className="h-4 w-4" />
                                                            {link.accessCount}
                                                            {link.accessLimit && ` / ${link.accessLimit}`}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-700">Created:</p>
                                                        <p>{formatDate(link.createdAt)}</p>
                                                    </div>
                                                    {link.expiresAt && (
                                                        <div>
                                                            <p className="font-medium text-gray-700">Expires:</p>
                                                            <p>{formatDate(link.expiresAt)}</p>
                                                        </div>
                                                    )}
                                                    {link.requireAuth && (
                                                        <div>
                                                            <p className="font-medium text-gray-700">Security:</p>
                                                            <p className="flex items-center gap-1">
                                                                <Shield className="h-4 w-4" />
                                                                Auth Required
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <Input
                                                        value={`${window.location.origin}/shared/${link.id}`}
                                                        readOnly
                                                        className="font-mono text-xs"
                                                    />
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => {
                                                            navigator.clipboard.writeText(`${window.location.origin}/shared/${link.id}`);
                                                        }}
                                                    >
                                                        <Copy className="h-4 w-4" />
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => handleToggleSharedLink(link.id, link.isActive)}
                                                    >
                                                        {link.isActive ? "Disable" : "Enable"}
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => handleDeleteSharedLink(link.id)}
                                                        className="text-red-600 hover:text-red-700"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Legacy Email Shares</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                These are older email-based shares. New sharing uses links above.
                            </p>
                            {/* ... existing sharedByMe and sharedWithMe code ... */}
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="requests" className="space-y-6">
                    <IdentityRequestsView />
                </TabsContent>

                <TabsContent value="audit" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Monitor className="h-5 w-5" />
                                Audit Logs
                            </CardTitle>
                            <CardDescription>
                                Track access to your shared identity links with detailed logging
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Filters */}
                            <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <Filter className="h-4 w-4 text-gray-600" />
                                    <span className="text-sm font-medium text-gray-700">Filters:</span>
                                </div>
                                <div className="flex flex-col md:flex-row gap-4 flex-1">
                                    <div className="flex-1">
                                        <Select
                                            value={auditFilters.linkId || "all"}
                                            onValueChange={(value) => setAuditFilters(prev => ({ ...prev, linkId: value === "all" ? "" : value, page: 1 }))}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="All shared links" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="all">All shared links</SelectItem>
                                                {sharedLinks.map((link) => (
                                                    <SelectItem key={link.id} value={link.id}>
                                                        {link.name || `${link.identity?.name} - ${link.context}`}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="flex-1">
                                        <Select
                                            value={auditFilters.days.toString()}
                                            onValueChange={(value) => setAuditFilters(prev => ({ ...prev, days: parseInt(value), page: 1 }))}
                                        >
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="7">Last 7 days</SelectItem>
                                                <SelectItem value="30">Last 30 days</SelectItem>
                                                <SelectItem value="90">Last 90 days</SelectItem>
                                                <SelectItem value="365">Last year</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="flex-1">
                                        <Select
                                            value={auditFilters.limit.toString()}
                                            onValueChange={(value) => setAuditFilters(prev => ({ ...prev, limit: parseInt(value), page: 1 }))}
                                        >
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="25">25 per page</SelectItem>
                                                <SelectItem value="50">50 per page</SelectItem>
                                                <SelectItem value="100">100 per page</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>

                            {/* Statistics */}
                            {auditLogs?.stats && (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <Card>
                                        <CardContent className="p-4">
                                            <div className="flex items-center gap-2">
                                                <Eye className="h-5 w-5 text-blue-600" />
                                                <div>
                                                    <p className="text-2xl font-bold">{auditLogs.stats.totalAccesses}</p>
                                                    <p className="text-sm text-gray-600">Total Accesses</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardContent className="p-4">
                                            <div className="flex items-center gap-2">
                                                <Share2 className="h-5 w-5 text-green-600" />
                                                <div>
                                                    <p className="text-2xl font-bold">{auditLogs.stats.uniqueLinks}</p>
                                                    <p className="text-sm text-gray-600">Active Links</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardContent className="p-4">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-5 w-5 text-purple-600" />
                                                <div>
                                                    <p className="text-2xl font-bold">{auditLogs.stats.dateRange}</p>
                                                    <p className="text-sm text-gray-600">Days Range</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            )}

                            {/* Loading State */}
                            {auditLogsLoading && (
                                <div className="flex items-center justify-center py-8">
                                    <div className="text-lg">Loading audit logs...</div>
                                </div>
                            )}

                            {/* Empty State */}
                            {!auditLogsLoading && auditLogs && auditLogs.auditLogs.length === 0 && (
                                <Card>
                                    <CardContent className="flex flex-col items-center justify-center py-12">
                                        <Monitor className="h-12 w-12 text-gray-400 mb-4" />
                                        <h3 className="text-lg font-medium mb-2">No audit logs found</h3>
                                        <p className="text-gray-600 text-center">
                                            No access logs found for the selected time period and filters.
                                        </p>
                                    </CardContent>
                                </Card>
                            )}

                            {/* Audit Logs Table */}
                            {!auditLogsLoading && auditLogs && auditLogs.auditLogs.length > 0 && (
                                <div className="space-y-4">
                                    <div className="border rounded-lg overflow-hidden">
                                        <div className="overflow-x-auto">
                                            <table className="w-full">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Timestamp</th>
                                                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Identity</th>
                                                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Context</th>
                                                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">IP Address</th>
                                                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Device/Browser</th>
                                                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Link</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    {auditLogs.auditLogs.map((log) => (
                                                        <tr key={log.id} className="hover:bg-gray-50">
                                                            <td className="px-4 py-3">
                                                                <div className="flex items-center gap-2">
                                                                    <Calendar className="h-4 w-4 text-gray-400" />
                                                                    <div>
                                                                        <p className="text-sm font-medium">
                                                                            {formatDetailedDate(log.accessedAt)}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="px-4 py-3">
                                                                <div>
                                                                    <p className="text-sm font-medium text-gray-900">
                                                                        {log.sharedLink.identity.name}
                                                                    </p>
                                                                    {log.sharedLink.identity.description && (
                                                                        <p className="text-xs text-gray-500">
                                                                            {log.sharedLink.identity.description}
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            </td>
                                                            <td className="px-4 py-3">
                                                                <Badge variant="outline">
                                                                    {log.sharedLink.context}
                                                                </Badge>
                                                            </td>
                                                            <td className="px-4 py-3">
                                                                <div className="flex items-center gap-2">
                                                                    <Globe className="h-4 w-4 text-gray-400" />
                                                                    <span className="text-sm font-mono">
                                                                        {formatIpAddress(log.viewerIp)}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="px-4 py-3">
                                                                <div className="flex items-center gap-2">
                                                                    <Monitor className="h-4 w-4 text-gray-400" />
                                                                    <span className="text-sm">
                                                                        {formatUserAgent(log.viewerAgent)}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="px-4 py-3">
                                                                <div className="flex items-center gap-2">
                                                                    <Button
                                                                        variant="outline"
                                                                        size="sm"
                                                                        onClick={() => window.open(`/shared/${log.sharedLink.id}`, '_blank')}
                                                                        className="flex items-center gap-1"
                                                                    >
                                                                        <ExternalLink className="h-3 w-3" />
                                                                        Visit Link
                                                                    </Button>
                                                                    {log.sharedLink.name && (
                                                                        <span className="text-xs text-gray-500 truncate">
                                                                            {log.sharedLink.name}
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Pagination */}
                                    {auditLogs.pagination.totalPages > 1 && (
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm text-gray-600">
                                                Showing {((auditLogs.pagination.page - 1) * auditLogs.pagination.limit) + 1} to{' '}
                                                {Math.min(auditLogs.pagination.page * auditLogs.pagination.limit, auditLogs.pagination.totalCount)} of{' '}
                                                {auditLogs.pagination.totalCount} entries
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => setAuditFilters(prev => ({ ...prev, page: prev.page - 1 }))}
                                                    disabled={!auditLogs.pagination.hasPreviousPage}
                                                >
                                                    <ChevronLeft className="h-4 w-4" />
                                                    Previous
                                                </Button>
                                                <span className="text-sm text-gray-600">
                                                    Page {auditLogs.pagination.page} of {auditLogs.pagination.totalPages}
                                                </span>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => setAuditFilters(prev => ({ ...prev, page: prev.page + 1 }))}
                                                    disabled={!auditLogs.pagination.hasNextPage}
                                                >
                                                    Next
                                                    <ChevronRight className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            {/* Dialogs */}
            <CreateIdentityDialog
                open={showCreateDialog}
                onOpenChange={setShowCreateDialog}
                onSuccess={handleCreateSuccess}
            />

            {selectedIdentity && (
                <>
                    <EditIdentityDialog
                        open={showEditDialog}
                        onOpenChange={setShowEditDialog}
                        identity={selectedIdentity}
                        onSuccess={handleEditSuccess}
                    />

                    <ShareIdentityDialog
                        open={showShareDialog}
                        onOpenChange={setShowShareDialog}
                        identity={selectedIdentity}
                        onSuccess={handleShareSuccess}
                    />
                </>
            )}
        </div>
    );
} 