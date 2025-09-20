import { AdminRegisterForm } from "@/components/admin-register-form";

export default function AdminRegisterPage() {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <AdminRegisterForm />
            </div>
        </div>
    );
} 