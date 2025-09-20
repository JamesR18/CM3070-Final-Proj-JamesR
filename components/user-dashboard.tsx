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

export function UserDashboard() {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadDashboardData();
    }, []);

    async function loadDashboardData() {
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
                setError("Failed to load dashboard data");
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
                <div className="text-lg">Loading dashboard...</div>
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
                        <Button onClick={loadDashboardData} className="w-full">
                            Retry
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Redirect admins to admin dashboard
    if (user?.isAdmin) {
        router.push("/admin");
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-lg">Redirecting to admin dashboard...</div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <p className="text-gray-600">
                        Welcome back, {user?.email}
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button
                        onClick={() => router.push("/profile")}
                        variant="default"
                    >
                        View Profile
                    </Button>
                    <Button onClick={handleLogout} variant="outline">
                        Logout
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Welcome Card */}
                <Card>
                    <CardHeader>
                        <CardTitle>Welcome!</CardTitle>
                        <CardDescription>Your account overview</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div>
                            <span className="font-medium">Email:</span> {user?.email}
                        </div>
                        <div>
                            <span className="font-medium">Account Type:</span> Regular User
                        </div>
                        {user?.createdAt && (
                            <div>
                                <span className="font-medium">Member Since:</span>{" "}
                                {new Date(user.createdAt).toLocaleDateString()}
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Quick Actions Card */}
                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>Common tasks</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <Button
                            onClick={() => router.push("/profile")}
                            className="w-full"
                            variant="outline"
                        >
                            Edit Profile
                        </Button>
                        <Button
                            onClick={() => router.push("/")}
                            className="w-full"
                            variant="outline"
                        >
                            Go to Home
                        </Button>
                    </CardContent>
                </Card>

                {/* Account Status Card */}
                <Card>
                    <CardHeader>
                        <CardTitle>Account Status</CardTitle>
                        <CardDescription>Your account information</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Status:</span>
                                <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
                                    Active
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">User ID:</span>
                                <span className="text-sm font-mono">{user?.id}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Account Type:</span>
                                <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">
                                    User
                                </span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Additional Information */}
            <Card>
                <CardHeader>
                    <CardTitle>Getting Started</CardTitle>
                    <CardDescription>Make the most of your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="p-4 border rounded-lg">
                            <h3 className="font-medium mb-2">📋 Profile Management</h3>
                            <p className="text-sm text-gray-600 mb-3">
                                Keep your account information up to date
                            </p>
                            <Button
                                onClick={() => router.push("/profile")}
                                size="sm"
                                variant="outline"
                            >
                                View Profile
                            </Button>
                        </div>

                        <div className="p-4 border rounded-lg">
                            <h3 className="font-medium mb-2">🔒 Account Security</h3>
                            <p className="text-sm text-gray-600 mb-3">
                                Your account is protected with secure authentication
                            </p>
                            <Button
                                onClick={handleLogout}
                                size="sm"
                                variant="outline"
                            >
                                Sign Out
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
} 