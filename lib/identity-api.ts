interface Identity {
    id: number;
    name: string;
    description?: string;
    isDefault: boolean;
    isActive: boolean;
    userId: number;
    createdAt: string;
    updatedAt: string;
    attributes: IdentityAttribute[];
    sharedWith?: SharedIdentity[];
    _count?: {
        sharedWith: number;
        requests: number;
    };
}

interface IdentityAttribute {
    id: number;
    identityId: number;
    key: string;
    value: string;
    isPublic: boolean;
    isVisible: boolean;
    createdAt: string;
    updatedAt: string;
}

interface SharedIdentity {
    id: number;
    ownerId: number;
    viewerId: number;
    identityId: number;
    context: string;
    canView: boolean;
    canRequest: boolean;
    sharedAt: string;
    expiresAt?: string;
    identity?: {
        name: string;
        description?: string;
        user?: {
            email: string;
        };
        attributes?: IdentityAttribute[];
    };
}

interface SharedLink {
    id: string;
    ownerId: number;
    identityId: number;
    context: string;
    name?: string;
    isActive: boolean;
    expiresAt?: string;
    accessLimit?: number;
    accessCount: number;
    requireAuth: boolean;
    createdAt: string;
    updatedAt: string;
    identity?: {
        name: string;
        description?: string;
    };
    accesses?: SharedLinkAccess[];
    _count?: {
        accesses: number;
    };
}

interface SharedLinkAccess {
    id: number;
    sharedLinkId: string;
    viewerIp?: string;
    viewerAgent?: string;
    accessedAt: string;
}

interface IdentityRequest {
    id: number;
    requesterId: number;
    targetId: number;
    identityId?: number;
    context: string;
    message?: string;
    status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'EXPIRED';
    createdAt: string;
    updatedAt: string;
    respondedAt?: string;
    requester?: {
        email: string;
    };
    identity?: {
        name: string;
        description?: string;
        user?: {
            email: string;
        };
    };
    targetEmail?: string;
}

interface CreateIdentityData {
    name: string;
    description?: string;
    isDefault?: boolean;
    attributes?: {
        key: string;
        value: string;
        isPublic?: boolean;
        isVisible?: boolean;
    }[];
}

interface UpdateIdentityData {
    name?: string;
    description?: string;
    isDefault?: boolean;
    isActive?: boolean;
    attributes?: {
        key: string;
        value: string;
        isPublic?: boolean;
        isVisible?: boolean;
    }[];
}

interface ShareIdentityData {
    identityId: number;
    viewerEmail: string;
    context: string;
    canView?: boolean;
    canRequest?: boolean;
    expiresAt?: string;
}

interface CreateSharedLinkData {
    identityId: number;
    context: string;
    name?: string;
    expiresAt?: string;
    accessLimit?: number;
    requireAuth?: boolean;
}

interface UpdateSharedLinkData {
    name?: string;
    isActive?: boolean;
    expiresAt?: string;
    accessLimit?: number;
    requireAuth?: boolean;
}

interface CreateRequestData {
    targetEmail: string;
    context: string;
    message?: string;
    identityId?: number;
}

interface RespondToRequestData {
    action: 'approve' | 'reject';
    identityId?: number;
    expiresAt?: string;
}

interface AuditLogEntry {
    id: number;
    accessedAt: string;
    viewerIp: string;
    viewerAgent: string;
    sharedLink: {
        id: string;
        name?: string;
        context: string;
        identity: {
            name: string;
            description?: string;
        };
    };
}

interface AuditLogResponse {
    auditLogs: AuditLogEntry[];
    pagination: {
        page: number;
        limit: number;
        totalCount: number;
        totalPages: number;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
    };
    stats: {
        totalAccesses: number;
        uniqueLinks: number;
        dateRange: number;
    };
}

interface AuditLogFilters {
    page?: number;
    limit?: number;
    linkId?: string;
    days?: number;
}

interface ApiResponse<T = any> {
    message?: string;
    error?: string;
    identities?: T[];
    identity?: T;
    sharedIdentity?: T;
    sharedByMe?: T[];
    sharedWithMe?: T[];
    sharedLink?: T;
    sharedLinks?: T[];
    shareUrl?: string;
    requests?: T[];
    sentRequests?: T[];
    receivedRequests?: T[];
    request?: T;
}

class IdentityApiError extends Error {
    constructor(
        message: string,
        public status: number,
        public response?: any
    ) {
        super(message);
        this.name = "IdentityApiError";
    }
}

async function apiCall<T = any>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> {
    const url = `/api/identities${endpoint}`;

    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
        credentials: "include",
        ...options,
    });

    const data = await response.json();

    if (!response.ok) {
        throw new IdentityApiError(
            data.error || "An error occurred",
            response.status,
            data
        );
    }

    return data;
}

async function sharedLinksApiCall<T = any>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> {
    const url = `/api/shared-links${endpoint}`;

    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
        credentials: "include",
        ...options,
    });

    const data = await response.json();

    if (!response.ok) {
        throw new IdentityApiError(
            data.error || "An error occurred",
            response.status,
            data
        );
    }

    return data;
}

export const identityApi = {
    // Identity Management
    async getIdentities(): Promise<ApiResponse<Identity>> {
        return apiCall("");
    },

    async createIdentity(data: CreateIdentityData): Promise<ApiResponse<Identity>> {
        return apiCall("", {
            method: "POST",
            body: JSON.stringify(data),
        });
    },

    async getIdentity(id: number): Promise<ApiResponse<Identity>> {
        return apiCall(`/${id}`);
    },

    async updateIdentity(id: number, data: UpdateIdentityData): Promise<ApiResponse<Identity>> {
        return apiCall(`/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
        });
    },

    async deleteIdentity(id: number): Promise<ApiResponse> {
        return apiCall(`/${id}`, {
            method: "DELETE",
        });
    },

    // Identity Sharing (Email-based - keeping for backward compatibility)
    async shareIdentity(data: ShareIdentityData): Promise<ApiResponse<SharedIdentity>> {
        return apiCall("/share", {
            method: "POST",
            body: JSON.stringify(data),
        });
    },

    async getSharedIdentities(type?: 'shared-by-me' | 'shared-with-me'): Promise<ApiResponse<SharedIdentity>> {
        const params = type ? `?type=${type}` : '';
        return apiCall(`/share${params}`);
    },

    // Shared Links (URL-based sharing)
    async createSharedLink(data: CreateSharedLinkData): Promise<ApiResponse<SharedLink>> {
        return sharedLinksApiCall("", {
            method: "POST",
            body: JSON.stringify(data),
        });
    },

    async getSharedLinks(): Promise<ApiResponse<SharedLink>> {
        return sharedLinksApiCall("");
    },

    async getSharedLink(id: string): Promise<ApiResponse<SharedLink>> {
        return sharedLinksApiCall(`/${id}`);
    },

    async updateSharedLink(id: string, data: UpdateSharedLinkData): Promise<ApiResponse<SharedLink>> {
        return sharedLinksApiCall(`/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
        });
    },

    async deleteSharedLink(id: string): Promise<ApiResponse> {
        return sharedLinksApiCall(`/${id}`, {
            method: "DELETE",
        });
    },

    // Audit Logs
    async getAuditLogs(filters?: AuditLogFilters): Promise<AuditLogResponse> {
        const params = new URLSearchParams();
        if (filters?.page) params.append('page', filters.page.toString());
        if (filters?.limit) params.append('limit', filters.limit.toString());
        if (filters?.linkId) params.append('linkId', filters.linkId);
        if (filters?.days) params.append('days', filters.days.toString());

        const queryString = params.toString();
        return sharedLinksApiCall(`/audit-logs${queryString ? `?${queryString}` : ''}`);
    },

    // Identity Requests
    async createRequest(data: CreateRequestData): Promise<ApiResponse<IdentityRequest>> {
        return apiCall("/requests", {
            method: "POST",
            body: JSON.stringify(data),
        });
    },

    async getRequests(type?: 'sent' | 'received', status?: string): Promise<ApiResponse<IdentityRequest>> {
        const params = new URLSearchParams();
        if (type) params.append('type', type);
        if (status) params.append('status', status);
        const queryString = params.toString();
        return apiCall(`/requests${queryString ? `?${queryString}` : ''}`);
    },

    async respondToRequest(requestId: number, data: RespondToRequestData): Promise<ApiResponse<IdentityRequest>> {
        return apiCall(`/requests/${requestId}/respond`, {
            method: "POST",
            body: JSON.stringify(data),
        });
    },
};

export { IdentityApiError };
export type {
    Identity,
    IdentityAttribute,
    SharedIdentity,
    SharedLink,
    SharedLinkAccess,
    IdentityRequest,
    AuditLogEntry,
    AuditLogResponse,
    AuditLogFilters,
    CreateIdentityData,
    UpdateIdentityData,
    ShareIdentityData,
    CreateSharedLinkData,
    UpdateSharedLinkData,
    CreateRequestData,
    RespondToRequestData,
    ApiResponse
};