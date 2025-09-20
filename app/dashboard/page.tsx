import { EnhancedDashboard } from "@/components/enhanced-dashboard";
import { GlobalNavProvider } from "@/components/global-nav";

export default function DashboardPage() {
    return (
        <GlobalNavProvider>
            <EnhancedDashboard />
        </GlobalNavProvider>
    );
} 