"use client"

import { TrendingUp, TrendingDown } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

interface WeeklyData {
    day: string
    accesses: number
}

interface WeeklyAccessChartProps {
    data: WeeklyData[]
    title?: string
    description?: string
    isLoading?: boolean
    trend?: {
        value: number
        isPositive: boolean
    }
}

const chartConfig = {
    accesses: {
        label: "Accesses",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export function WeeklyAccessChart({
    data,
    title = "Weekly Access Overview",
    description = "Identity accesses over the past 7 days",
    isLoading = false,
    trend
}: WeeklyAccessChartProps) {
    if (isLoading) {
        return (
            <Card>
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{title}</CardTitle>
                    <CardDescription className="text-sm">{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-center h-[300px]">
                        <div className="text-sm text-muted-foreground">Loading chart...</div>
                    </div>
                </CardContent>
            </Card>
        )
    }

    if (!data || data.length === 0) {
        return (
            <Card>
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{title}</CardTitle>
                    <CardDescription className="text-sm">{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-center h-[300px]">
                        <div className="text-sm text-muted-foreground">No data available</div>
                    </div>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card>
            <CardHeader className="pb-3">
                <CardTitle className="text-lg">{title}</CardTitle>
                <CardDescription className="text-sm">{description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
                <ChartContainer config={chartConfig} className="h-[240px] w-full">
                    <BarChart accessibilityLayer data={data} margin={{ top: 10, bottom: 10 }}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            tickMargin={8}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                            fontSize={12}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={6}
                            fontSize={12}
                            tickFormatter={(value) => Math.round(value).toString()}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar
                            dataKey="accesses"
                            fill="var(--color-accesses)"
                            radius={6}
                            name="Accesses"
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            {trend && (
                <CardFooter className="flex-col items-start gap-1 text-sm pt-2">
                    <div className="flex gap-2 leading-none font-medium">
                        {trend.isPositive ? (
                            <>
                                Trending up by {Math.abs(trend.value)}% this week{" "}
                                <TrendingUp className="h-4 w-4" />
                            </>
                        ) : (
                            <>
                                Trending down by {Math.abs(trend.value)}% this week{" "}
                                <TrendingDown className="h-4 w-4" />
                            </>
                        )}
                    </div>
                    <div className="text-muted-foreground leading-none text-xs">
                        Compared to the previous 7-day period
                    </div>
                </CardFooter>
            )}
        </Card>
    )
}
