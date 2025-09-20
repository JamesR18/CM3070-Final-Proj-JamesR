export interface SharedIdentityData {
    identity: {
        id: number;
        name: string;
        description?: string;
        attributes: Array<{
            id: number;
            identityId?: number;
            key: string;
            value: string;
            isPublic: boolean;
            isVisible: boolean;
            createdAt?: string;
            updatedAt?: string;
        }>;
    };
    sharedBy: string;
    context: string;
    linkName?: string;
    accessCount: number;
    accessLimit?: number;
    expiresAt?: string | null;
    createdAt: string;
} 