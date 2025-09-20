interface LoginData {
    email: string;
    password: string;
}

interface RegisterData {
    email: string;
    password: string;
}

interface User {
    id: number;
    email: string;
    isAdmin: boolean;
    createdAt?: string;
    updatedAt?: string;
}

interface ApiResponse<T = any> {
    message?: string;
    user?: User;
    error?: string;
}

class AuthApiError extends Error {
    constructor(
        message: string,
        public status: number,
        public response?: any
    ) {
        super(message);
        this.name = "AuthApiError";
    }
}

async function apiCall<T = any>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> {
    const url = `/api/auth${endpoint}`;

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
        throw new AuthApiError(
            data.error || "An error occurred",
            response.status,
            data
        );
    }

    return data;
}

export const authApi = {
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
};

export { AuthApiError };
export type { User, LoginData, RegisterData, ApiResponse }; 