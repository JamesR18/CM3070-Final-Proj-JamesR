import '@testing-library/jest-dom'
import { beforeAll, afterEach, afterAll, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

// Global test setup
beforeAll(() => {
    // Setup that runs before all tests
})

// Cleanup after each test
afterEach(() => {
    cleanup()
    vi.clearAllMocks()
})

// Cleanup after all tests
afterAll(() => {
    // Cleanup that runs after all tests
})

// Mock Next.js router
vi.mock('next/navigation', () => ({
    useRouter: () => ({
        push: vi.fn(),
        replace: vi.fn(),
        prefetch: vi.fn(),
        back: vi.fn(),
        forward: vi.fn(),
        refresh: vi.fn(),
    }),
    useSearchParams: () => new URLSearchParams(),
    usePathname: () => '/',
    notFound: vi.fn(),
    redirect: vi.fn(),
}))

// Mock Next.js server components
vi.mock('next/server', () => ({
    NextRequest: vi.fn(),
    NextResponse: {
        json: vi.fn(),
        redirect: vi.fn(),
    },
}))

// Mock fetch globally
Object.defineProperty(global, 'fetch', {
    value: vi.fn(),
    writable: true,
})

// Mock environment variables
Object.defineProperty(process, 'env', {
    value: {
        ...process.env,
        NODE_ENV: 'test',
        DATABASE_URL: 'file:./test.db',
    },
})

// Mock Prisma client
vi.mock('@/lib/db', () => ({
    prisma: {
        user: {
            findUnique: vi.fn(),
            findMany: vi.fn(),
            create: vi.fn(),
            update: vi.fn(),
            delete: vi.fn(),
        },
        identity: {
            findUnique: vi.fn(),
            findMany: vi.fn(),
            create: vi.fn(),
            update: vi.fn(),
            delete: vi.fn(),
        },
        session: {
            findUnique: vi.fn(),
            create: vi.fn(),
            delete: vi.fn(),
        },
        $executeRaw: vi.fn(),
    },
}))

// Mock lucia auth functions
vi.mock('@/lib/lucia', () => ({
    generateSessionToken: vi.fn(() => 'mock-session-token'),
    createSession: vi.fn(),
    validateSessionToken: vi.fn(),
    invalidateSession: vi.fn(),
}))
