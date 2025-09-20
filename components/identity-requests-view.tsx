"use client";

import { useState, useEffect } from "react";
import { Mail, Clock, Check, X, Users, Send } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    identityApi,
    IdentityApiError,
    type IdentityRequest,
    type CreateRequestData,
    type RespondToRequestData
} from "@/lib/identity-api";

export function IdentityRequestsView() {
    const [requests, setRequests] = useState<{
        sent: IdentityRequest[];
        received: IdentityRequest[];
    }>({ sent: [], received: [] });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [responseLoading, setResponseLoading] = useState<number | null>(null);
    const [showCreateRequest, setShowCreateRequest] = useState(false);

    // Create request form
    const [createRequestData, setCreateRequestData] = useState({
        targetEmail: "",
        context: "",
        message: "",
    });

    useEffect(() => {
        loadRequests();
    }, []);

    async function loadRequests() {
        try {
            setIsLoading(true);
            setError(null);
            const response = await identityApi.getRequests();
            setRequests({
                sent: response.sentRequests || [],
                received: response.receivedRequests || [],
            });
        } catch (err) {
            if (err instanceof IdentityApiError) {
                setError(err.message);
            } else {
                setError("Failed to load requests");
            }
        } finally {
            setIsLoading(false);
        }
    }

    async function handleRespondToRequest(requestId: number, action: 'approve' | 'reject') {
        try {
            setResponseLoading(requestId);

            const responseData: RespondToRequestData = {
                action,
            };

            await identityApi.respondToRequest(requestId, responseData);
            await loadRequests(); // Reload to get updated status
        } catch (err) {
            if (err instanceof IdentityApiError) {
                alert(`Error: ${err.message}`);
            } else {
                alert(`Failed to ${action} request`);
            }
        } finally {
            setResponseLoading(null);
        }
    }

    console.log(requests);


    async function handleCreateRequest(e: React.FormEvent) {
        e.preventDefault();
        try {
            setIsLoading(true);

            if (!createRequestData.targetEmail || !createRequestData.context) {
                throw new Error("Target email and context are required");
            }

            const requestData: CreateRequestData = {
                targetEmail: createRequestData.targetEmail,
                context: createRequestData.context,
                message: createRequestData.message || undefined,
            };

            await identityApi.createRequest(requestData);

            // Reset form
            setCreateRequestData({
                targetEmail: "",
                context: "",
                message: "",
            });
            setShowCreateRequest(false);

            await loadRequests();
        } catch (err) {
            if (err instanceof IdentityApiError) {
                alert(`Error: ${err.message}`);
            } else if (err instanceof Error) {
                alert(`Error: ${err.message}`);
            } else {
                alert("Failed to create request");
            }
        } finally {
            setIsLoading(false);
        }
    }

    function getStatusBadge(status: string) {
        switch (status) {
            case 'PENDING':
                return <Badge variant="outline" className="text-yellow-600"><Clock className="h-3 w-3 mr-1" />Pending</Badge>;
            case 'APPROVED':
                return <Badge variant="outline" className="text-green-600"><Check className="h-3 w-3 mr-1" />Approved</Badge>;
            case 'REJECTED':
                return <Badge variant="outline" className="text-red-600"><X className="h-3 w-3 mr-1" />Rejected</Badge>;
            case 'EXPIRED':
                return <Badge variant="outline" className="text-gray-600">Expired</Badge>;
            default:
                return <Badge variant="outline">{status}</Badge>;
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

    if (isLoading && !showCreateRequest) {
        return (
            <Card>
                <CardContent className="flex items-center justify-center py-12">
                    <div className="text-lg">Loading requests...</div>
                </CardContent>
            </Card>
        );
    }

    if (error && !showCreateRequest) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle className="text-red-600">Error</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-gray-600 mb-4">{error}</p>
                    <Button onClick={loadRequests} className="w-full">
                        Retry
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold">Identity Requests</h2>
                    <p className="text-gray-600">
                        Manage requests for identity access
                    </p>
                </div>
                <Button
                    onClick={() => setShowCreateRequest(!showCreateRequest)}
                    className="flex items-center gap-2"
                >
                    <Send className="h-4 w-4" />
                    {showCreateRequest ? 'Cancel' : 'Create Request'}
                </Button>
            </div>

            {/* Create Request Form */}
            {showCreateRequest && (
                <Card>
                    <CardHeader>
                        <CardTitle>Request Identity Access</CardTitle>
                        <CardDescription>
                            Request access to someone's identity in a specific context
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleCreateRequest} className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="targetEmail">Target User Email *</Label>
                                <Input
                                    id="targetEmail"
                                    type="email"
                                    placeholder="user@example.com"
                                    value={createRequestData.targetEmail}
                                    onChange={(e) => setCreateRequestData(prev => ({
                                        ...prev,
                                        targetEmail: e.target.value
                                    }))}
                                    required
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="context">Context *</Label>
                                <Select
                                    value={createRequestData.context}
                                    onValueChange={(value) => setCreateRequestData(prev => ({
                                        ...prev,
                                        context: value
                                    }))}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select context..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="professional">Professional</SelectItem>
                                        <SelectItem value="social">Social Media</SelectItem>
                                        <SelectItem value="dating">Dating Apps</SelectItem>
                                        <SelectItem value="academic">Academic</SelectItem>
                                        <SelectItem value="family">Family</SelectItem>
                                        <SelectItem value="community">Community</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="message">Message (Optional)</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Explain why you need access to their identity..."
                                    value={createRequestData.message}
                                    onChange={(e) => setCreateRequestData(prev => ({
                                        ...prev,
                                        message: e.target.value
                                    }))}
                                    rows={3}
                                />
                            </div>

                            <div className="flex gap-2">
                                <Button type="submit" disabled={isLoading}>
                                    {isLoading ? "Creating..." : "Send Request"}
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setShowCreateRequest(false)}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            )}

            {/* Requests Tabs */}
            <Tabs defaultValue="received" className="space-y-4">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="received" className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Received ({requests.received.length})
                    </TabsTrigger>
                    <TabsTrigger value="sent" className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Sent ({requests.sent.length})
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="received" className="space-y-4">
                    {requests.received.length === 0 ? (
                        <Card>
                            <CardContent className="flex flex-col items-center justify-center py-12">
                                <Mail className="h-12 w-12 text-gray-400 mb-4" />
                                <h3 className="text-lg font-medium mb-2">No requests received</h3>
                                <p className="text-gray-600 text-center">
                                    When others request access to your identities, they'll appear here.
                                </p>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="space-y-4">
                            {requests.received.map((request) => (
                                <Card key={request.id}>
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <CardTitle className="flex items-center gap-2">
                                                    <Users className="h-5 w-5" />
                                                    Request from {request.requester?.email}
                                                </CardTitle>
                                                <CardDescription>
                                                    Context: {request.context}
                                                    {request.identity && ` • Identity: ${request.identity.name}`}
                                                </CardDescription>
                                            </div>
                                            {getStatusBadge(request.status)}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {request.message && (
                                            <div>
                                                <p className="text-sm font-medium mb-1">Message:</p>
                                                <p className="text-sm text-gray-600">{request.message}</p>
                                            </div>
                                        )}

                                        <div className="text-xs text-gray-500">
                                            Requested: {formatDate(request.createdAt)}
                                            {request.respondedAt && (
                                                <span> • Responded: {formatDate(request.respondedAt)}</span>
                                            )}
                                        </div>

                                        {request.status === 'PENDING' && (
                                            <div className="flex gap-2">
                                                <Button
                                                    size="sm"
                                                    onClick={() => handleRespondToRequest(request.id, 'approve')}
                                                    disabled={responseLoading === request.id}
                                                >
                                                    <Check className="h-4 w-4 mr-1" />
                                                    {responseLoading === request.id ? 'Processing...' : 'Approve'}
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() => handleRespondToRequest(request.id, 'reject')}
                                                    disabled={responseLoading === request.id}
                                                >
                                                    <X className="h-4 w-4 mr-1" />
                                                    Reject
                                                </Button>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </TabsContent>

                <TabsContent value="sent" className="space-y-4">
                    {requests.sent.length === 0 ? (
                        <Card>
                            <CardContent className="flex flex-col items-center justify-center py-12">
                                <Send className="h-12 w-12 text-gray-400 mb-4" />
                                <h3 className="text-lg font-medium mb-2">No requests sent</h3>
                                <p className="text-gray-600 text-center">
                                    Requests you send to access others' identities will appear here.
                                </p>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="space-y-4">
                            {requests.sent.map((request) => (
                                <Card key={request.id}>
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <CardTitle className="flex items-center gap-2">
                                                    <Send className="h-5 w-5" />
                                                    Request to {request.targetEmail || request.requester?.email}
                                                </CardTitle>
                                                <CardDescription>
                                                    Context: {request.context}
                                                    {request.identity && ` • Identity: ${request.identity.name}`}
                                                </CardDescription>
                                            </div>
                                            {getStatusBadge(request.status)}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {request.message && (
                                            <div>
                                                <p className="text-sm font-medium mb-1">Your message:</p>
                                                <p className="text-sm text-gray-600">{request.message}</p>
                                            </div>
                                        )}

                                        <div className="text-xs text-gray-500">
                                            Sent: {formatDate(request.createdAt)}
                                            {request.respondedAt && (
                                                <span> • Responded: {formatDate(request.respondedAt)}</span>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </TabsContent>
            </Tabs>
        </div>
    );
} 