"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { authApi, AuthApiError, type User } from "@/lib/auth-api"
import { identityApi, type AuditLogResponse, type AuditLogEntry } from "@/lib/identity-api"
import { KPICards } from "@/components/charts/kpi-cards"
import { WeeklyAccessChart } from "@/components/charts/weekly-access-chart"
import { ContextBreakdownChart } from "@/components/charts/context-breakdown-chart"

interface DashboardData {
    kpis: {
        totalAccesses: number
        uniqueLinks: number
        activeShares: number
        dateRange: number
        trends?: {
            accesses: { value: number; isPositive: boolean }
            links: { value: number; isPositive: boolean }
            shares: { value: number; isPositive: boolean }
        }
    }
    weeklyData: { day: string; accesses: number }[]
    contextData: { context: string; count: number; fill: string }[]
    weeklyTrend?: { value: number; isPositive: boolean }
}

// Context types mapping
const knownContexts = ['work', 'personal', 'education', 'healthcare', 'finance', 'other']

function processAuditLogData(auditLogs: AuditLogEntry[], stats: AuditLogResponse['stats']): DashboardData {
    console.log('Processing audit logs:', { count: auditLogs.length, sampleLog: auditLogs[0] })

    // Process weekly data - get last 7 days
    const weeklyMap = new Map<string, number>()
    const today = new Date()
    const last7Days = Array.from({ length: 7 }, (_, i) => {
        const date = new Date(today)
        date.setDate(date.getDate() - (6 - i)) // Start from 6 days ago to today
        return {
            dateObj: date,
            dayName: date.toLocaleDateString('en-US', { weekday: 'long' })
        }
    })

    // Initialize with 0 accesses
    last7Days.forEach(({ dayName }) => weeklyMap.set(dayName, 0))

    // Count accesses by day
    auditLogs.forEach(log => {
        const logDate = new Date(log.accessedAt)
        const dayName = logDate.toLocaleDateString('en-US', { weekday: 'long' })

        // Only count if it's within our 7-day range
        const isWithinRange = last7Days.some(({ dateObj }) => {
            const logDateStr = logDate.toDateString()
            const rangeeDateStr = dateObj.toDateString()
            return logDateStr === rangeeDateStr
        })

        if (isWithinRange) {
            weeklyMap.set(dayName, (weeklyMap.get(dayName) || 0) + 1)
        }
    })

    const weeklyData = last7Days.map(({ dayName }) => ({
        day: dayName,
        accesses: weeklyMap.get(dayName) || 0
    }))

    // Process context data - extract from sharedLink.context
    const contextMap = new Map<string, number>()

    auditLogs.forEach(log => {
        const rawContext = log.sharedLink?.context || 'other'
        const context = rawContext.toLowerCase().trim()
        console.log('Processing context:', { raw: rawContext, processed: context }, 'from log:', log.sharedLink)

        // More flexible context mapping
        let normalizedContext = 'other'
        if (context.includes('work') || context.includes('job') || context.includes('professional')) {
            normalizedContext = 'work'
        } else if (context.includes('personal') || context.includes('private')) {
            normalizedContext = 'personal'
        } else if (context.includes('education') || context.includes('school') || context.includes('university')) {
            normalizedContext = 'education'
        } else if (context.includes('health') || context.includes('medical')) {
            normalizedContext = 'healthcare'
        } else if (context.includes('finance') || context.includes('bank') || context.includes('money')) {
            normalizedContext = 'finance'
        } else if (knownContexts.includes(context)) {
            normalizedContext = context
        }

        contextMap.set(normalizedContext, (contextMap.get(normalizedContext) || 0) + 1)
    })

    const contextData = Array.from(contextMap.entries()).map(([context, count]) => ({
        context,
        count,
        fill: '' // This will be handled by the chart CSS variables
    }))

    console.log('Context data processed:', contextData)

    return {
        kpis: {
            totalAccesses: stats.totalAccesses || auditLogs.length,
            uniqueLinks: stats.uniqueLinks || 0,
            activeShares: contextData.length,
            dateRange: stats.dateRange || 7
        },
        weeklyData,
        contextData,
        weeklyTrend: undefined
    }
}

export function EnhancedDashboard() {
    const router = useRouter()
    const [user, setUser] = useState<User | null>(null)
    const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isDataLoading, setIsDataLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        loadDashboardData()
    }, [])

    async function loadDashboardData() {
        try {
            setIsLoading(true)
            setError(null)

            // Load user profile
            const userResponse = await authApi.getProfile()
            setUser(userResponse.user || null)

            // Load audit log data for charts
            setIsDataLoading(true)
            try {
                console.log('Fetching audit logs...')
                const auditResponse = await identityApi.getAuditLogs({
                    page: 1,
                    limit: 200, // Increased limit to get more data
                    days: 30    // Extended to 30 days for better data
                })

                console.log('Audit logs response:', auditResponse)

                const processedData = processAuditLogData(auditResponse.auditLogs, auditResponse.stats)
                setDashboardData(processedData)
            } catch (auditError) {
                console.warn("Could not load audit data:", auditError)
                // Set minimal default data if audit logs fail
                setDashboardData({
                    kpis: {
                        totalAccesses: 0,
                        uniqueLinks: 0,
                        activeShares: 0,
                        dateRange: 7
                    },
                    weeklyData: [],
                    contextData: []
                })
            }
        } catch (err) {
            if (err instanceof AuthApiError) {
                if (err.status === 401) {
                    router.push("/login")
                    return
                }
                setError(err.message)
            } else {
                setError("Failed to load dashboard data")
            }
        } finally {
            setIsLoading(false)
            setIsDataLoading(false)
        }
    }

    async function handleLogout() {
        try {
            await authApi.logout()
            router.push("/")
        } catch (err) {
            console.error("Logout error:", err)
            router.push("/")
        }
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-lg">Loading dashboard...</div>
            </div>
        )
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
        )
    }

    // Redirect admins to admin dashboard
    if (user?.isAdmin) {
        router.push("/admin")
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-lg">Redirecting to admin dashboard...</div>
            </div>
        )
    }

    return (
        <div className="container mx-auto p-6 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Identity Analytics Dashboard</h1>
                    <p className="text-gray-600">
                        Welcome back, {user?.email}
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button
                        onClick={() => router.push("/identities")}
                        variant="default"
                    >
                        Manage Identities
                    </Button>
                    <Button
                        onClick={() => router.push("/profile")}
                        variant="outline"
                    >
                        Profile
                    </Button>
                    <Button onClick={handleLogout} variant="outline">
                        Logout
                    </Button>
                </div>
            </div>

            {/* KPI Cards */}
            <KPICards data={dashboardData?.kpis || null} isLoading={isDataLoading} />

            <WeeklyAccessChart
                data={dashboardData?.weeklyData || []}
                isLoading={isDataLoading}
                trend={dashboardData?.weeklyTrend}
            />

            {/* Quick Actions Section */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Identity Management Card */}
                <Card>
                    <CardHeader>
                        <CardTitle>Identity Management</CardTitle>
                        <CardDescription>Manage your digital identities</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <Button
                            onClick={() => router.push("/identities")}
                            className="w-full"
                            variant="outline"
                        >
                            View Identities
                        </Button>
                        <Button
                            onClick={() => router.push("/profile")}
                            className="w-full"
                            variant="outline"
                        >
                            Edit Profile
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
                                <span className="text-sm text-gray-600">Member Since:</span>
                                <span className="text-sm">
                                    {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                                </span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Quick Statistics Card */}
                <Card>
                    <CardHeader>
                        <CardTitle>Quick Stats</CardTitle>
                        <CardDescription>Your activity summary</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Total Accesses:</span>
                                <span className="text-sm font-medium">
                                    {dashboardData?.kpis.totalAccesses?.toLocaleString() || '0'}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Shared Links:</span>
                                <span className="text-sm font-medium">
                                    {dashboardData?.kpis.uniqueLinks || '0'}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Data Period:</span>
                                <span className="text-sm font-medium">
                                    {dashboardData?.kpis.dateRange || 7} days
                                </span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
