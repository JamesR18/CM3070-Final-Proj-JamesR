"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { authApi, AuthApiError, type User } from "@/lib/auth-api";
import { Menu, X } from "lucide-react";

export function GlobalNav() {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        checkAuthStatus();
    }, []);

    async function checkAuthStatus() {
        try {
            setIsLoading(true);
            const response = await authApi.getProfile();
            setUser(response.user || null);
        } catch (err) {
            // User is not authenticated
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    }

    async function handleLogout() {
        try {
            await authApi.logout();
            setUser(null);
            router.push("/");
        } catch (err) {
            console.error("Logout error:", err);
            // Force redirect even if logout fails
            setUser(null);
            router.push("/");
        }
    }

    function toggleMobileMenu() {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    if (isLoading) {
        return (
            <nav className="border-b bg-white">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold">
                        MyApp
                    </Link>
                    <div className="text-sm text-gray-500">Loading...</div>
                </div>
            </nav>
        );
    }

    return (
        <nav className="border-b bg-white">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold">
                    MyApp
                </Link>

                {/* Mobile menu button */}
                <button 
                    className="md:hidden"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>

                {/* Desktop navigation */}
                <div className="hidden md:flex items-center space-x-4">
                    {user ? (
                        // Authenticated user navigation
                        <>
                            <span className="text-sm text-gray-600">
                                Welcome, {user.email}
                            </span>

                            {user.isAdmin && (
                                <Link
                                    href="/admin"
                                    className="text-sm hover:text-blue-600 transition-colors"
                                >
                                    Admin Dashboard
                                </Link>
                            )}

                            <Link
                                href="/identities"
                                className="text-sm hover:text-blue-600 transition-colors"
                            >
                                Identities
                            </Link>

                            <Link
                                href="/profile"
                                className="text-sm hover:text-blue-600 transition-colors"
                            >
                                Profile
                            </Link>

                            {!user.isAdmin && (
                                <Link
                                    href="/dashboard"
                                    className="text-sm hover:text-blue-600 transition-colors"
                                >
                                    Dashboard
                                </Link>
                            )}

                            <Button
                                onClick={handleLogout}
                                variant="outline"
                                size="sm"
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        // Unauthenticated user navigation
                        <>
                            <Link
                                href="/login"
                                className="text-sm hover:text-blue-600 transition-colors"
                            >
                                Login
                            </Link>
                            <Link href="/signup">
                                <Button size="sm">
                                    Sign Up
                                </Button>
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {/* Mobile navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden py-3 px-4 border-t">
                    <div className="flex flex-col space-y-3">
                        {user ? (
                            // Authenticated user mobile navigation
                            <>
                                <span className="text-sm text-gray-600 py-2">
                                    Welcome, {user.email}
                                </span>

                                {user.isAdmin && (
                                    <Link
                                        href="/admin"
                                        className="text-sm py-2 hover:text-blue-600 transition-colors"
                                        onClick={toggleMobileMenu}
                                    >
                                        Admin Dashboard
                                    </Link>
                                )}

                                <Link
                                    href="/identities"
                                    className="text-sm py-2 hover:text-blue-600 transition-colors"
                                    onClick={toggleMobileMenu}
                                >
                                    Identities
                                </Link>

                                <Link
                                    href="/profile"
                                    className="text-sm py-2 hover:text-blue-600 transition-colors"
                                    onClick={toggleMobileMenu}
                                >
                                    Profile
                                </Link>

                                {!user.isAdmin && (
                                    <Link
                                        href="/dashboard"
                                        className="text-sm py-2 hover:text-blue-600 transition-colors"
                                        onClick={toggleMobileMenu}
                                    >
                                        Dashboard
                                    </Link>
                                )}

                                <Button
                                    onClick={() => {
                                        toggleMobileMenu();
                                        handleLogout();
                                    }}
                                    variant="outline"
                                    size="sm"
                                    className="w-full justify-center mt-2"
                                >
                                    Logout
                                </Button>
                            </>
                        ) : (
                            // Unauthenticated user mobile navigation
                            <>
                                <Link
                                    href="/login"
                                    className="text-sm py-2 hover:text-blue-600 transition-colors"
                                    onClick={toggleMobileMenu}
                                >
                                    Login
                                </Link>
                                <Link 
                                    href="/signup"
                                    onClick={toggleMobileMenu}
                                >
                                    <Button size="sm" className="w-full justify-center">
                                        Sign Up
                                    </Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}

export function GlobalNavProvider({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <GlobalNav />
            {children}
        </div>
    );
} 