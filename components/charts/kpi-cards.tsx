"use client"

import { TrendingUp, TrendingDown, Eye, Link, Users, Calendar } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface KPIData {
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

interface KPICardsProps {
    data: KPIData | null
    isLoading?: boolean
}

function KPICard({
    title,
    value,
    description,
    icon: Icon,
    trend,
    isLoading = false
}: {
    title: string
    value: string | number
    description: string
    icon: React.ComponentType<{ className?: string }>
    trend?: { value: number; isPositive: boolean }
    isLoading?: boolean
}) {
    if (isLoading) {
        return (
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{title}</CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">--</div>
                    <p className="text-xs text-muted-foreground">{description}</p>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value.toLocaleString()}</div>
                <div className="flex items-center space-x-2">
                    <p className="text-xs text-muted-foreground">{description}</p>
                    {trend && (
                        <div className={`flex items-center text-xs ${trend.isPositive ? 'text-green-600' : 'text-red-600'
                            }`}>
                            {trend.isPositive ? (
                                <TrendingUp className="h-3 w-3 mr-1" />
                            ) : (
                                <TrendingDown className="h-3 w-3 mr-1" />
                            )}
                            {Math.abs(trend.value)}%
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}

export function KPICards({ data, isLoading = false }: KPICardsProps) {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <KPICard
                title="Total Accesses"
                value={data?.totalAccesses || 0}
                description={`Last ${data?.dateRange || 30} days`}
                icon={Eye}
                trend={data?.trends?.accesses}
                isLoading={isLoading}
            />
            <KPICard
                title="Shared Links"
                value={data?.uniqueLinks || 0}
                description="Active sharing links"
                icon={Link}
                trend={data?.trends?.links}
                isLoading={isLoading}
            />
            <KPICard
                title="Active Shares"
                value={data?.activeShares || 0}
                description="Currently shared identities"
                icon={Users}
                trend={data?.trends?.shares}
                isLoading={isLoading}
            />
            <KPICard
                title="Tracking Period"
                value={`${data?.dateRange || 30} days`}
                description="Data collection period"
                icon={Calendar}
                isLoading={isLoading}
            />
        </div>
    )
}
