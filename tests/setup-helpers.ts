import { vi } from 'vitest'

// Test utilities and helpers

/**
 * Mock Next.js router with common methods
 */
export const createMockRouter = (overrides = {}) => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
    pathname: '/',
    query: {},
    asPath: '/',
    ...overrides,
})

/**
 * Mock user for authentication tests
 */
export const createMockUser = (overrides = {}) => ({
    id: 'test-user-id',
    email: 'test@example.com',
    name: 'Test User',
    role: 'USER',
    ...overrides,
})

/**
 * Mock API response
 */
export const createMockApiResponse = (data: any, status = 200) => ({
    ok: status >= 200 && status < 300,
    status,
    json: async () => data,
    text: async () => JSON.stringify(data),
})

/**
 * Mock fetch for API testing
 */
export const mockFetch = (response: any, status = 200) => {
    global.fetch = vi.fn().mockResolvedValue(
        createMockApiResponse(response, status)
    )
}

/**
 * Reset all mocks
 */
export const resetAllMocks = () => {
    vi.clearAllMocks()
    vi.resetAllMocks()
}

/**
 * Wait for a specific amount of time (useful for async tests)
 */
export const wait = (ms: number) =>
    new Promise(resolve => setTimeout(resolve, ms))

/**
 * Mock environment variables
 */
export const mockEnv = (env: Record<string, string>) => {
    const originalEnv = process.env
    process.env = { ...originalEnv, ...env }

    return () => {
        process.env = originalEnv
    }
}
