"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { adminApi, AdminApiError, type RegisterData } from "@/lib/admin-api";

interface AdminRegisterFormProps extends React.ComponentPropsWithoutRef<"div"> {
    onRegisterSuccess?: () => void;
}

export function AdminRegisterForm({
    className,
    onRegisterSuccess,
    ...props
}: AdminRegisterFormProps) {
    const router = useRouter();
    const [formData, setFormData] = useState<RegisterData & { confirmPassword: string }>({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear messages when user starts typing
        if (error) setError(null);
        if (success) setSuccess(null);
    }

    function validateForm(): string | null {
        if (!formData.email || !formData.password || !formData.confirmPassword) {
            return "Please fill in all fields";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            return "Please enter a valid email address";
        }

        if (formData.password.length < 8) {
            return "Password must be at least 8 characters long";
        }

        if (formData.password !== formData.confirmPassword) {
            return "Passwords do not match";
        }

        return null;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccess(null);

        try {
            // Client-side validation
            const validationError = validateForm();
            if (validationError) {
                throw new Error(validationError);
            }

            const response = await adminApi.register({
                email: formData.email,
                password: formData.password,
            });

            setSuccess("Admin user created successfully!");

            // Reset form
            setFormData({
                email: "",
                password: "",
                confirmPassword: "",
            });

            // Call success callback if provided
            if (onRegisterSuccess) {
                setTimeout(() => onRegisterSuccess(), 1500);
            } else {
                // Default: redirect to admin dashboard after a short delay
                setTimeout(() => router.push("/admin"), 1500);
            }
        } catch (err) {
            if (err instanceof AdminApiError) {
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
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Create Admin User</CardTitle>
                    <CardDescription>
                        Register a new admin user for the system
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-6">
                            {error && (
                                <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                                    {error}
                                </div>
                            )}

                            {success && (
                                <div className="p-3 text-sm text-green-600 bg-green-50 border border-green-200 rounded-md">
                                    {success}
                                </div>
                            )}

                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="admin@example.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Minimum 8 characters"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="confirmPassword">Confirm Password</Label>
                                <Input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Repeat your password"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                            <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? "Creating Admin..." : "Create Admin User"}
                            </Button>

                            <Button
                                type="button"
                                variant="outline"
                                className="w-full"
                                onClick={() => router.push("/admin")}
                                disabled={isLoading}
                            >
                                Back to Dashboard
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
} 