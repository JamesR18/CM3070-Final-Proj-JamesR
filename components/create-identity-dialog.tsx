"use client";

import { useState } from "react";
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
import { identityApi, IdentityApiError, type CreateIdentityData } from "@/lib/identity-api";

interface CreateIdentityDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSuccess: () => void;
}

interface Attribute {
    key: string;
    value: string;
    isPublic: boolean;
    isVisible: boolean;
}

export function CreateIdentityDialog({ open, onOpenChange, onSuccess }: CreateIdentityDialogProps) {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        isDefault: false,
    });
    const [attributes, setAttributes] = useState<Attribute[]>([
        { key: "", value: "", isPublic: false, isVisible: true }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

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

    function resetForm() {
        setFormData({
            name: "",
            description: "",
            isDefault: false,
        });
        setAttributes([
            { key: "", value: "", isPublic: false, isVisible: true }
        ]);
        setError(null);
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

            const createData: CreateIdentityData = {
                name: formData.name.trim(),
                description: formData.description.trim() || undefined,
                isDefault: formData.isDefault,
                attributes: validAttributes.length > 0 ? validAttributes : undefined,
            };

            await identityApi.createIdentity(createData);

            resetForm();
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

    function handleOpenChange(newOpen: boolean) {
        if (!newOpen && !isLoading) {
            resetForm();
        }
        onOpenChange(newOpen);
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Create New Identity</DialogTitle>
                    <DialogDescription>
                        Create a new identity persona for different contexts like professional, social, or personal use.
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
                            Add attributes like display name, pronouns, bio, job title, etc.
                            Public attributes can be seen by anyone, visible attributes appear in shared identities.
                        </p>
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
                            {isLoading ? "Creating..." : "Create Identity"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
} 