import { vi } from 'vitest'

// Mock data generators
export const mockUser = {
    id: 1,
    email: 'test@example.com',
    isAdmin: false,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
}

export const mockAdminUser = {
    ...mockUser,
    id: 2,
    email: 'admin@example.com',
    isAdmin: true
}

export const mockIdentity = {
    id: 1,
    name: 'Test Identity',
    description: 'Test description',
    isDefault: false,
    isActive: true,
    userId: 1,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    attributes: [
        {
            id: 1,
            identityId: 1,
            key: 'email',
            value: 'test@example.com',
            isPublic: true,
            isVisible: true,
            createdAt: '2024-01-01T00:00:00Z',
            updatedAt: '2024-01-01T00:00:00Z'
        }
    ]
}

export const mockSharedIdentity = {
    id: 1,
    ownerId: 1,
    viewerId: 2,
    identityId: 1,
    context: 'business',
    canView: true,
    canRequest: false,
    sharedAt: '2024-01-01T00:00:00Z',
    expiresAt: null,
    identity: {
        name: 'Test Identity',
        description: 'Test description',
        user: {
            email: 'owner@example.com'
        },
        attributes: mockIdentity.attributes
    }
}

export const mockSharedLink = {
    id: 'test-link-id',
    identityId: 1,
    createdBy: 1,
    accessLevel: 'view' as const,
    expiresAt: '2024-12-31T23:59:59Z',
    maxUses: 10,
    currentUses: 0,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
}

// Mock API response generators
export const createMockResponse = (data: any, status = 200) => ({
    ok: status >= 200 && status < 300,
    status,
    json: vi.fn().mockResolvedValue(data),
    headers: new Headers(),
    text: vi.fn().mockResolvedValue(JSON.stringify(data)),
    blob: vi.fn(),
    arrayBuffer: vi.fn(),
    formData: vi.fn()
})

export const createSuccessResponse = (data: any) => createMockResponse(data, 200)

export const createErrorResponse = (error: string, status = 400) =>
    createMockResponse({ error }, status)

// Test utility functions
export const waitFor = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const createMockFetch = () => {
    const mockFetch = vi.fn()
    global.fetch = mockFetch
    return mockFetch
}

// Mock implementations for common scenarios
export const mockSuccessfulAuth = () => {
    const mockFetch = createMockFetch()
    mockFetch.mockResolvedValue(createSuccessResponse({
        message: 'Login successful',
        user: mockUser
    }))
    return mockFetch
}

export const mockFailedAuth = (error = 'Invalid credentials') => {
    const mockFetch = createMockFetch()
    mockFetch.mockResolvedValue(createErrorResponse(error, 401))
    return mockFetch
}

export const mockIdentityOperations = () => {
    const mockFetch = createMockFetch()

    // Setup different responses for different endpoints
    mockFetch.mockImplementation((url: string, options: any) => {
        const method = options?.method || 'GET'

        if (url.includes('/api/identities') && method === 'GET') {
            return Promise.resolve(createSuccessResponse({
                identities: [mockIdentity],
                total: 1
            }))
        }

        if (url.includes('/api/identities') && method === 'POST') {
            return Promise.resolve(createSuccessResponse({
                identity: mockIdentity
            }))
        }

        if (url.includes('/api/identities/1') && method === 'PUT') {
            return Promise.resolve(createSuccessResponse({
                identity: { ...mockIdentity, name: 'Updated Identity' }
            }))
        }

        if (url.includes('/api/identities/1') && method === 'DELETE') {
            return Promise.resolve(createSuccessResponse({
                message: 'Identity deleted successfully'
            }))
        }

        return Promise.resolve(createErrorResponse('Not found', 404))
    })

    return mockFetch
}

// Database operation mocks
export const createMockPrisma = () => ({
    user: {
        findUnique: vi.fn(),
        findMany: vi.fn(),
        create: vi.fn(),
        update: vi.fn(),
        delete: vi.fn()
    },
    identity: {
        findUnique: vi.fn(),
        findMany: vi.fn(),
        create: vi.fn(),
        update: vi.fn(),
        delete: vi.fn()
    },
    identityAttribute: {
        findMany: vi.fn(),
        create: vi.fn(),
        update: vi.fn(),
        delete: vi.fn()
    },
    sharedIdentity: {
        findMany: vi.fn(),
        create: vi.fn(),
        update: vi.fn(),
        delete: vi.fn()
    },
    sharedLink: {
        findUnique: vi.fn(),
        findMany: vi.fn(),
        create: vi.fn(),
        update: vi.fn(),
        delete: vi.fn()
    },
    session: {
        findUnique: vi.fn(),
        create: vi.fn(),
        delete: vi.fn()
    },
    identityRequest: {
        findMany: vi.fn(),
        create: vi.fn(),
        update: vi.fn()
    },
    $executeRaw: vi.fn()
})

// Lucia auth mocks
export const createMockLucia = () => ({
    generateSessionToken: vi.fn(() => 'mock-session-token'),
    createSession: vi.fn(() => Promise.resolve({ id: 'session-id' })),
    validateSessionToken: vi.fn(() => Promise.resolve({
        session: { id: 'session-id', userId: 1 },
        user: mockUser
    })),
    invalidateSession: vi.fn(() => Promise.resolve())
})

// Component testing helpers
export const mockNextRouter = () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn()
})

// Environment setup helpers
export const setupTestEnvironment = () => {
    // Set test environment variables
    // process.env.NODE_ENV = 'test'
    process.env.DATABASE_URL = 'file:./test.db'

    // Clear all mocks
    vi.clearAllMocks()
}

// Custom matchers for assertions
export const expectApiCall = (mockFetch: any, endpoint: string, options?: any) => {
    expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining(endpoint),
        expect.objectContaining(options || {})
    )
}

export const expectSuccessResponse = (response: any, expectedData?: any) => {
    expect(response.status).toBeLessThan(400)
    if (expectedData) {
        expect(response).toMatchObject(expectedData)
    }
}

export const expectErrorResponse = (response: any, expectedStatus?: number) => {
    if (expectedStatus) {
        expect(response.status).toBe(expectedStatus)
    } else {
        expect(response.status).toBeGreaterThanOrEqual(400)
    }
}

// Mock data for complex scenarios
export const createMockIdentityWithShares = (shareCount = 2, requestCount = 1) => ({
    ...mockIdentity,
    _count: {
        sharedWith: shareCount,
        requests: requestCount
    },
    sharedWith: Array(shareCount).fill(null).map((_, index) => ({
        ...mockSharedIdentity,
        id: index + 1,
        viewerId: index + 2
    }))
})

export const createMockIdentityRequest = (status: 'pending' | 'approved' | 'rejected' = 'pending') => ({
    id: 1,
    requesterId: 2,
    ownerId: 1,
    identityId: 1,
    message: 'Need access for project collaboration',
    status,
    createdAt: '2024-01-01T00:00:00Z',
    respondedAt: status !== 'pending' ? '2024-01-01T01:00:00Z' : null,
    requester: {
        email: 'requester@example.com'
    },
    identity: {
        name: 'Test Identity'
    }
})
