"use client"

import { Pie, PieChart, Cell } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

interface ContextData {
    context: string
    count: number
    fill: string
}

interface ContextBreakdownChartProps {
    data: ContextData[]
    title?: string
    description?: string
    isLoading?: boolean
}

const chartConfig = {
    work: {
        label: "Work",
        color: "hsl(var(--chart-1))",
    },
    personal: {
        label: "Personal",
        color: "hsl(var(--chart-2))",
    },
    education: {
        label: "Education",
        color: "hsl(var(--chart-3))",
    },
    healthcare: {
        label: "Healthcare",
        color: "hsl(var(--chart-4))",
    },
    finance: {
        label: "Finance",
        color: "hsl(var(--chart-5))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-6))",
    },
} satisfies ChartConfig

// Color fallback map
const colorFallback: Record<string, string> = {
    work: "#8884d8",
    personal: "#82ca9d",
    education: "#ffc658",
    healthcare: "#ff7c7c",
    finance: "#8dd1e1",
    other: "#d084d0",
}

export function ContextBreakdownChart({
    data,
    title = "Context Distribution",
    description = "Identity access by context type",
    isLoading = false
}: ContextBreakdownChartProps) {
    // Debug logging
    console.log('ContextBreakdownChart received data:', data)
    console.log('Data length:', data?.length)
    console.log('Individual data items:', data?.map(item => ({ context: item.context, count: item.count })))
    if (isLoading) {
        return (
            <Card className="flex flex-col">
                <CardHeader className="items-center pb-0">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pb-0">
                    <div className="flex items-center justify-center h-[300px]">
                        <div className="text-sm text-muted-foreground">Loading chart...</div>
                    </div>
                </CardContent>
            </Card>
        )
    }

    if (!data || data.length === 0) {
        return (
            <Card className="flex flex-col">
                <CardHeader className="items-center pb-0">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pb-0">
                    <div className="flex items-center justify-center h-[300px]">
                        <div className="text-sm text-muted-foreground">No data available</div>
                    </div>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                {/* Debug display */}
                <div className="text-xs text-muted-foreground mb-2">
                    Debug: {data.length} items - {data.map(d => `${d.context}(${d.count})`).join(', ')}
                </div>
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[300px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={data}
                            dataKey="count"
                            nameKey="context"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                        >
                            {data.map((entry, index) => {
                                const color = colorFallback[entry.context] || colorFallback.other
                                console.log(`Color for ${entry.context}:`, color, 'entry:', entry)
                                return (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={color}
                                    />
                                )
                            })}
                        </Pie>
                        <ChartLegend
                            content={<ChartLegendContent nameKey="context" />}
                            className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
