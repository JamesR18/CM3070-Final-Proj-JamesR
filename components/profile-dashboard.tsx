"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { authApi, AuthApiError, type User } from "@/lib/auth-api";

export function ProfileDashboard() {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadProfile();
    }, []);

    async function loadProfile() {
        try {
            setIsLoading(true);
            setError(null);

            const response = await authApi.getProfile();
            setUser(response.user || null);
        } catch (err) {
            if (err instanceof AuthApiError) {
                if (err.status === 401) {
                    // Redirect to login if not authenticated
                    router.push("/login");
                    return;
                }
                setError(err.message);
            } else {
                setError("Failed to load profile");
            }
        } finally {
            setIsLoading(false);
        }
    }

    async function handleLogout() {
        try {
            await authApi.logout();
            router.push("/");
        } catch (err) {
            console.error("Logout error:", err);
            // Force redirect even if logout fails
            router.push("/");
        }
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-lg">Loading profile...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle className="text-red-600">Error</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-600 mb-4">{error}</p>
                        <div className="space-y-2">
                            <Button onClick={loadProfile} className="w-full">
                                Retry
                            </Button>
                            <Button
                                onClick={() => router.push("/")}
                                variant="outline"
                                className="w-full"
                            >
                                Go Home
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle>Not Logged In</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-600 mb-4">
                            Please log in to view your profile.
                        </p>
                        <Button onClick={() => router.push("/login")} className="w-full">
                            Go to Login
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
                    <h1 className="text-3xl font-bold">My Profile</h1>
                    <p className="text-gray-600">
                        Manage your account information
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    {user.isAdmin && (
                        <Button
                            onClick={() => router.push("/admin")}
                            variant="default"
                        >
                            Admin Dashboard
                        </Button>
                    )}
                    {!user.isAdmin && (
                        <Button
                            onClick={() => router.push("/dashboard")}
                            variant="default"
                        >
                            Dashboard
                        </Button>
                    )}
                    <Button onClick={handleLogout} variant="outline">
                        Logout
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Profile Information Card */}
                <Card>
                    <CardHeader>
                        <CardTitle>Profile Information</CardTitle>
                        <CardDescription>Your account details</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <span className="font-medium text-sm text-gray-600">Email:</span>
                            <div className="text-lg">{user.email}</div>
                        </div>

                        <div>
                            <span className="font-medium text-sm text-gray-600">User ID:</span>
                            <div className="text-lg">{user.id}</div>
                        </div>

                        <div>
                            <span className="font-medium text-sm text-gray-600">Account Type:</span>
                            <div className="text-lg">
                                {user.isAdmin ? (
                                    <span className="inline-flex items-center px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                                        Admin
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">
                                        User
                                    </span>
                                )}
                            </div>
                        </div>

                        {user.createdAt && (
                            <div>
                                <span className="font-medium text-sm text-gray-600">Member Since:</span>
                                <div className="text-lg">
                                    {new Date(user.createdAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Account Actions Card */}
                <Card>
                    <CardHeader>
                        <CardTitle>Account Actions</CardTitle>
                        <CardDescription>Manage your account</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Button
                                onClick={() => router.push("/dashboard")}
                                className="w-full"
                                variant="outline"
                            >
                                {user.isAdmin ? "Go to Admin Dashboard" : "Go to Dashboard"}
                            </Button>

                            <Button
                                onClick={() => router.push("/")}
                                className="w-full"
                                variant="outline"
                            >
                                Go to Home Page
                            </Button>

                            <Button
                                onClick={handleLogout}
                                className="w-full"
                                variant="destructive"
                            >
                                Sign Out
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Additional Information */}
            {user.isAdmin && (
                <Card>
                    <CardHeader>
                        <CardTitle>Admin Privileges</CardTitle>
                        <CardDescription>Your administrative capabilities</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="p-4 border rounded-lg">
                                <h3 className="font-medium mb-2">User Management</h3>
                                <p className="text-sm text-gray-600">
                                    View and manage all users in the system
                                </p>
                            </div>

                            <div className="p-4 border rounded-lg">
                                <h3 className="font-medium mb-2">Admin Creation</h3>
                                <p className="text-sm text-gray-600">
                                    Create new administrator accounts
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
} 