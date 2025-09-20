import { IdentityManager } from "@/components/identity-manager";
import { GlobalNavProvider } from "@/components/global-nav";

export default function IdentitiesPage() {
    return (
        <GlobalNavProvider>
            <IdentityManager />
        </GlobalNavProvider>
    );
} 