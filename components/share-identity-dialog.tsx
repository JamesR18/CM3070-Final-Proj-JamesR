"use client";

import { useState } from "react";
import { Share2, Calendar, Copy, CheckCircle, Link as LinkIcon, Eye, Shield } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { identityApi, IdentityApiError, type CreateSharedLinkData, type Identity } from "@/lib/identity-api";

interface ShareIdentityDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    identity: Identity;
    onSuccess: () => void;
}

const COMMON_CONTEXTS = [
    { value: "professional", label: "Professional" },
    { value: "social", label: "Social Media" },
    { value: "dating", label: "Dating Apps" },
    { value: "academic", label: "Academic" },
    { value: "family", label: "Family" },
    { value: "community", label: "Community" },
    { value: "religious", label: "Religious" },
    { value: "hobby", label: "Hobby/Interest" },
];

const EXPIRY_OPTIONS = [
    { value: "never", label: "Never expires" },
    { value: "1", label: "1 hour" },
    { value: "24", label: "1 day" },
    { value: "72", label: "3 days" },
    { value: "168", label: "1 week" },
    { value: "720", label: "1 month" },
];

const ACCESS_LIMIT_OPTIONS = [
    { value: "unlimited", label: "Unlimited access" },
    { value: "1", label: "1 view" },
    { value: "5", label: "5 views" },
    { value: "10", label: "10 views" },
    { value: "25", label: "25 views" },
    { value: "50", label: "50 views" },
    { value: "100", label: "100 views" },
];

export function ShareIdentityDialog({ open, onOpenChange, identity, onSuccess }: ShareIdentityDialogProps) {
    const [formData, setFormData] = useState({
        context: "",
        name: "",
        expiryHours: "never",
        accessLimit: "unlimited",
        requireAuth: false,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [generatedLink, setGeneratedLink] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (error) setError(null);
    }

    function resetForm() {
        setFormData({
            context: "",
            name: "",
            expiryHours: "never",
            accessLimit: "unlimited",
            requireAuth: false,
        });
        setError(null);
        setGeneratedLink(null);
        setCopied(false);
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            if (!formData.context.trim()) {
                throw new Error("Context is required");
            }

            let expiresAt: string | undefined;
            if (formData.expiryHours !== "never") {
                const hoursFromNow = parseInt(formData.expiryHours);
                const expiryDate = new Date(Date.now() + hoursFromNow * 60 * 60 * 1000);
                expiresAt = expiryDate.toISOString();
            }

            const linkData: CreateSharedLinkData = {
                identityId: identity.id,
                context: formData.context.trim(),
                name: formData.name.trim() || undefined,
                expiresAt,
                accessLimit: formData.accessLimit !== "unlimited" ? parseInt(formData.accessLimit) : undefined,
                requireAuth: formData.requireAuth,
            };

            const response = await identityApi.createSharedLink(linkData);

            if (response.shareUrl) {
                setGeneratedLink(response.shareUrl);
            }
        } catch (err) {
            if (err instanceof IdentityApiError) {
                setError(err.message);
            } else if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unexpected error occurred");
            }
        } finally {
            setIsLoading(false);
        }
    }

    async function handleCopyLink() {
        if (generatedLink) {
            try {
                await navigator.clipboard.writeText(generatedLink);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = generatedLink;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
        }
    }

    function handleSuccess() {
        resetForm();
        onSuccess();
        onOpenChange(false);
    }

    function handleOpenChange(newOpen: boolean) {
        if (!newOpen && !isLoading) {
            resetForm();
        }
        onOpenChange(newOpen);
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Share2 className="h-5 w-5" />
                        Share Identity: {identity.name}
                    </DialogTitle>
                    <DialogDescription>
                        Create a shareable link for this identity. Anyone with the link can view it according to your settings.
                    </DialogDescription>
                </DialogHeader>

                {!generatedLink ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                                {error}
                            </div>
                        )}

                        {/* Basic Settings */}
                        <div className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="context">Context *</Label>
                                <Select
                                    value={COMMON_CONTEXTS.some(ctx => ctx.value === formData.context) ? formData.context : ""}
                                    onValueChange={(value) =>
                                        setFormData(prev => ({ ...prev, context: value }))
                                    }
                                    disabled={isLoading}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select sharing context..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {COMMON_CONTEXTS.map((ctx) => (
                                            <SelectItem key={ctx.value} value={ctx.value}>
                                                {ctx.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <p className="text-xs text-gray-500">
                                    Or type a custom context below
                                </p>
                                <Input
                                    placeholder="Custom context (e.g., networking event)"
                                    value={formData.context}
                                    onChange={(e) =>
                                        setFormData(prev => ({ ...prev, context: e.target.value }))
                                    }
                                    disabled={isLoading}
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="name">Link Name (Optional)</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="e.g., LinkedIn networking"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    disabled={isLoading}
                                />
                                <p className="text-xs text-gray-500">
                                    A friendly name to help you identify this link
                                </p>
                            </div>
                        </div>

                        {/* Access Controls */}
                        <div className="space-y-4">
                            <Label>Access Controls</Label>

                            <div className="grid gap-3">
                                <div className="grid gap-2">
                                    <Label htmlFor="expiryHours" className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        Expires After
                                    </Label>
                                    <Select
                                        value={formData.expiryHours}
                                        onValueChange={(value) =>
                                            setFormData(prev => ({ ...prev, expiryHours: value }))
                                        }
                                        disabled={isLoading}
                                    >
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {EXPIRY_OPTIONS.map((option) => (
                                                <SelectItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="accessLimit" className="flex items-center gap-2">
                                        <Eye className="h-4 w-4" />
                                        Access Limit
                                    </Label>
                                    <Select
                                        value={formData.accessLimit}
                                        onValueChange={(value) =>
                                            setFormData(prev => ({ ...prev, accessLimit: value }))
                                        }
                                        disabled={isLoading}
                                    >
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {ACCESS_LIMIT_OPTIONS.map((option) => (
                                                <SelectItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="requireAuth"
                                        checked={formData.requireAuth}
                                        onCheckedChange={(checked: boolean) =>
                                            setFormData(prev => ({ ...prev, requireAuth: checked }))
                                        }
                                        disabled={isLoading}
                                    />
                                    <Label htmlFor="requireAuth" className="text-sm flex items-center gap-1">
                                        <Shield className="h-4 w-4" />
                                        Require authentication to view
                                    </Label>
                                </div>
                            </div>
                        </div>

                        {/* Preview */}
                        <div className="p-3 bg-gray-50 rounded-md border">
                            <h4 className="text-sm font-medium mb-2">Sharing Preview</h4>
                            <div className="text-xs text-gray-600 space-y-1">
                                <p><strong>Identity:</strong> {identity.name}</p>
                                <p><strong>Attributes:</strong> {identity.attributes.length} total</p>
                                <p><strong>Visible Attributes:</strong> {identity.attributes.filter(attr => attr.isVisible).length}</p>
                                <p><strong>Public Attributes:</strong> {identity.attributes.filter(attr => attr.isPublic).length}</p>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-end space-x-2 pt-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => handleOpenChange(false)}
                                disabled={isLoading}
                            >
                                Cancel
                            </Button>
                            <Button type="submit" disabled={isLoading}>
                                {isLoading ? "Creating Link..." : "Create Share Link"}
                            </Button>
                        </div>
                    </form>
                ) : (
                    <div className="space-y-6">
                        {/* Success Message */}
                        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                            <div className="flex items-center gap-2 text-green-800 mb-2">
                                <CheckCircle className="h-5 w-5" />
                                <span className="font-medium">Share Link Created!</span>
                            </div>
                            <p className="text-sm text-green-700">
                                Your shareable link has been generated. Copy it and share with anyone you want to give access to this identity.
                            </p>
                        </div>

                        {/* Generated Link */}
                        <div className="space-y-3">
                            <Label className="flex items-center gap-2">
                                <LinkIcon className="h-4 w-4" />
                                Your Share Link
                            </Label>
                            <div className="flex gap-2">
                                <Input
                                    value={generatedLink}
                                    readOnly
                                    className="font-mono text-sm"
                                />
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={handleCopyLink}
                                    className="flex items-center gap-1"
                                >
                                    {copied ? (
                                        <>
                                            <CheckCircle className="h-4 w-4" />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="h-4 w-4" />
                                            Copy
                                        </>
                                    )}
                                </Button>
                            </div>
                            <p className="text-xs text-gray-500">
                                This link will work according to the access controls you set. You can manage or revoke it later from the Shared tab.
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-end space-x-2 pt-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setGeneratedLink(null)}
                            >
                                Create Another
                            </Button>
                            <Button onClick={handleSuccess}>
                                Done
                            </Button>
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
} 