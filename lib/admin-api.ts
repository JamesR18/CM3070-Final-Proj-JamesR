interface LoginData {
    email: string;
    password: string;
}

interface RegisterData {
    email: string;
    password: string;
}

interface AdminUser {
    id: number;
    email: string;
    isAdmin: boolean;
    createdAt?: string;
    updatedAt?: string;
}

interface ApiResponse<T = any> {
    message?: string;
    user?: AdminUser;
    users?: AdminUser[];
    count?: number;
    error?: string;
}

class AdminApiError extends Error {
    constructor(
        message: string,
        public status: number,
        public response?: any
    ) {
        super(message);
        this.name = "AdminApiError";
    }
}

async function apiCall<T = any>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> {
    const url = `/api/admin${endpoint}`;

    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
        credentials: "include", // Include cookies
        ...options,
    });

    const data = await response.json();

    if (!response.ok) {
        throw new AdminApiError(
            data.error || "An error occurred",
            response.status,
            data
        );
    }

    return data;
}

export const adminApi = {
    async login(credentials: LoginData): Promise<ApiResponse> {
        return apiCall("/login", {
            method: "POST",
            body: JSON.stringify(credentials),
        });
    },

    async register(userData: RegisterData): Promise<ApiResponse> {
        return apiCall("/register", {
            method: "POST",
            body: JSON.stringify(userData),
        });
    },

    async logout(): Promise<ApiResponse> {
        return apiCall("/logout", {
            method: "POST",
        });
    },

    async getProfile(): Promise<ApiResponse> {
        return apiCall("/me");
    },

    async getUsers(): Promise<ApiResponse> {
        return apiCall("/users");
    },
};

export { AdminApiError };
export type { AdminUser, LoginData, RegisterData, ApiResponse }; 