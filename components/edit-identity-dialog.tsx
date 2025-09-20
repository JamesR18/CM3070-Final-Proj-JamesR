"use client";

import { useState, useEffect } from "react";
import { Plus, X } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { identityApi, IdentityApiError, type UpdateIdentityData, type Identity } from "@/lib/identity-api";

interface EditIdentityDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    identity: Identity;
    onSuccess: () => void;
}

interface Attribute {
    key: string;
    value: string;
    isPublic: boolean;
    isVisible: boolean;
}

export function EditIdentityDialog({ open, onOpenChange, identity, onSuccess }: EditIdentityDialogProps) {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        isDefault: false,
        isActive: true,
    });
    const [attributes, setAttributes] = useState<Attribute[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Initialize form data when identity changes
    useEffect(() => {
        if (identity) {
            setFormData({
                name: identity.name,
                description: identity.description || "",
                isDefault: identity.isDefault,
                isActive: identity.isActive,
            });

            const attrs = identity.attributes.map(attr => ({
                key: attr.key,
                value: attr.value,
                isPublic: attr.isPublic,
                isVisible: attr.isVisible,
            }));

            setAttributes(attrs.length > 0 ? attrs : [
                { key: "", value: "", isPublic: false, isVisible: true }
            ]);
        }
    }, [identity]);

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (error) setError(null);
    }

    function handleAttributeChange(index: number, field: keyof Attribute, value: string | boolean) {
        setAttributes((prev) => {
            const updated = [...prev];
            updated[index] = { ...updated[index], [field]: value };
            return updated;
        });
        if (error) setError(null);
    }

    function addAttribute() {
        setAttributes((prev) => [
            ...prev,
            { key: "", value: "", isPublic: false, isVisible: true }
        ]);
    }

    function removeAttribute(index: number) {
        if (attributes.length > 1) {
            setAttributes((prev) => prev.filter((_, i) => i !== index));
        }
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            if (!formData.name.trim()) {
                throw new Error("Identity name is required");
            }

            // Filter out empty attributes
            const validAttributes = attributes.filter(attr =>
                attr.key.trim() && attr.value.trim()
            );

            const updateData: UpdateIdentityData = {
                name: formData.name.trim(),
                description: formData.description.trim() || undefined,
                isDefault: formData.isDefault,
                isActive: formData.isActive,
                attributes: validAttributes,
            };

            await identityApi.updateIdentity(identity.id, updateData);
            onSuccess();
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

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Edit Identity: {identity.name}</DialogTitle>
                    <DialogDescription>
                        Update your identity persona and its attributes.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                        <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                            {error}
                        </div>
                    )}

                    {/* Basic Information */}
                    <div className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Identity Name *</Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="e.g., Professional, Social, Dating"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                name="description"
                                placeholder="Describe how this identity is used..."
                                value={formData.description}
                                onChange={handleInputChange}
                                disabled={isLoading}
                                rows={3}
                            />
                        </div>

                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="isDefault"
                                    checked={formData.isDefault}
                                    onCheckedChange={(checked: boolean) =>
                                        setFormData(prev => ({ ...prev, isDefault: checked }))
                                    }
                                    disabled={isLoading}
                                />
                                <Label htmlFor="isDefault">Set as default identity</Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="isActive"
                                    checked={formData.isActive}
                                    onCheckedChange={(checked: boolean) =>
                                        setFormData(prev => ({ ...prev, isActive: checked }))
                                    }
                                    disabled={isLoading}
                                />
                                <Label htmlFor="isActive">Active</Label>
                            </div>
                        </div>
                    </div>

                    {/* Attributes */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <Label>Attributes</Label>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={addAttribute}
                                disabled={isLoading}
                                className="flex items-center gap-1"
                            >
                                <Plus className="h-3 w-3" />
                                Add Attribute
                            </Button>
                        </div>

                        <div className="space-y-3">
                            {attributes.map((attr, index) => (
                                <div key={index} className="grid grid-cols-12 gap-2 items-end">
                                    <div className="col-span-3">
                                        <Input
                                            placeholder="Key (e.g., name)"
                                            value={attr.key}
                                            onChange={(e) => handleAttributeChange(index, 'key', e.target.value)}
                                            disabled={isLoading}
                                        />
                                    </div>
                                    <div className="col-span-4">
                                        <Input
                                            placeholder="Value"
                                            value={attr.value}
                                            onChange={(e) => handleAttributeChange(index, 'value', e.target.value)}
                                            disabled={isLoading}
                                        />
                                    </div>
                                    <div className="col-span-2 flex items-center space-x-1">
                                        <Checkbox
                                            checked={attr.isPublic}
                                            onCheckedChange={(checked: boolean) =>
                                                handleAttributeChange(index, 'isPublic', checked)
                                            }
                                            disabled={isLoading}
                                        />
                                        <span className="text-xs">Public</span>
                                    </div>
                                    <div className="col-span-2 flex items-center space-x-1">
                                        <Checkbox
                                            checked={attr.isVisible}
                                            onCheckedChange={(checked: boolean) =>
                                                handleAttributeChange(index, 'isVisible', checked)
                                            }
                                            disabled={isLoading}
                                        />
                                        <span className="text-xs">Visible</span>
                                    </div>
                                    <div className="col-span-1">
                                        {attributes.length > 1 && (
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => removeAttribute(index)}
                                                disabled={isLoading}
                                                className="p-1 h-8 w-8"
                                            >
                                                <X className="h-3 w-3" />
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-xs text-gray-500">
                            Update attributes like display name, pronouns, bio, job title, etc.
                            Public attributes can be seen by anyone, visible attributes appear in shared identities.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end space-x-2 pt-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                            disabled={isLoading}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? "Updating..." : "Update Identity"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
} 