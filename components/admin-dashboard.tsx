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
import { adminApi, AdminApiError, type AdminUser } from "@/lib/admin-api";

export function AdminDashboard() {
    const router = useRouter();
    const [user, setUser] = useState<AdminUser | null>(null);
    const [users, setUsers] = useState<AdminUser[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadDashboardData();
    }, []);

    async function loadDashboardData() {
        try {
            setIsLoading(true);
            setError(null);

            // Load admin profile and users list in parallel
            const [profileResponse, usersResponse] = await Promise.all([
                adminApi.getProfile(),
                adminApi.getUsers(),
            ]);

            setUser(profileResponse.user || null);
            setUsers(usersResponse.users || []);
        } catch (err) {
            if (err instanceof AdminApiError) {
                if (err.status === 401 || err.status === 403) {
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
            await adminApi.logout();
            router.push("/login");
        } catch (err) {
            console.error("Logout error:", err);
            // Even if logout fails, redirect to login
            router.push("/login");
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

    return (
        <div className="container mx-auto p-6 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                    <p className="text-gray-600">
                        Welcome back, {user?.email}
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button
                        onClick={() => router.push("/admin/register")}
                        variant="default"
                    >
                        Create Admin User
                    </Button>
                    <Button onClick={handleLogout} variant="outline">
                        Logout
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Admin Profile Card */}
                <Card>
                    <CardHeader>
                        <CardTitle>Your Profile</CardTitle>
                        <CardDescription>Your admin account information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div>
                            <span className="font-medium">Email:</span> {user?.email}
                        </div>
                        <div>
                            <span className="font-medium">Admin:</span>{" "}
                            {user?.isAdmin ? "Yes" : "No"}
                        </div>
                        <div>
                            <span className="font-medium">User ID:</span> {user?.id}
                        </div>
                        {user?.createdAt && (
                            <div>
                                <span className="font-medium">Created:</span>{" "}
                                {new Date(user.createdAt).toLocaleDateString()}
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Users Overview Card */}
                <Card>
                    <CardHeader>
                        <CardTitle>Users Overview</CardTitle>
                        <CardDescription>Total users in the system</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{users.length}</div>
                        <p className="text-sm text-gray-600">
                            {users.filter((u) => u.isAdmin).length} admin users,{" "}
                            {users.filter((u) => !u.isAdmin).length} regular users
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Users List */}
            <Card>
                <CardHeader>
                    <CardTitle>All Users</CardTitle>
                    <CardDescription>Manage system users</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {users.length === 0 ? (
                            <p className="text-gray-500 text-center py-4">No users found</p>
                        ) : (
                            <div className="space-y-2">
                                {users.map((user) => (
                                    <div
                                        key={user.id}
                                        className="flex items-center justify-between p-3 border rounded-lg"
                                    >
                                        <div>
                                            <div className="font-medium">{user.email}</div>
                                            <div className="text-sm text-gray-500">
                                                ID: {user.id} • {user.isAdmin ? "Admin" : "User"}
                                                {user.createdAt && (
                                                    <span>
                                                        {" "}
                                                        • Created:{" "}
                                                        {new Date(user.createdAt).toLocaleDateString()}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            {user.isAdmin && (
                                                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                                                    Admin
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
} 