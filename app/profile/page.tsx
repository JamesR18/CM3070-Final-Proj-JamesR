import { ProfileDashboard } from "@/components/profile-dashboard";
import { GlobalNavProvider } from "@/components/global-nav";

export default function ProfilePage() {
    return (
        <GlobalNavProvider>
            <ProfileDashboard />
        </GlobalNavProvider>
    );
} 