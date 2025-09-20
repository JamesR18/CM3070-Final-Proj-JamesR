import { describe, it, expect, vi, beforeEach } from 'vitest'
import { GET, POST } from '@/app/api/db/health/route'

// Mock the prisma client
const mockPrisma = {
    $executeRaw: vi.fn()
}

// Mock Prisma before importing the route
vi.mock('@/lib/db', () => ({
    prisma: mockPrisma
}))

describe('/api/db/health', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    describe('GET endpoint', () => {
        it('should return ok status when database is healthy', async () => {
            mockPrisma.$executeRaw.mockResolvedValue(true)

            const request = new Request('http://localhost:3000/api/db/health')
            const response = await GET(request)

            expect(response.status).toBe(200)

            const data = await response.json()
            expect(data).toEqual({ status: 'ok' })
            expect(mockPrisma.$executeRaw).toHaveBeenCalledWith(['SELECT 1'])
        })

        it('should return error status when database query fails', async () => {
            mockPrisma.$executeRaw.mockRejectedValue(new Error('Database connection failed'))

            const request = new Request('http://localhost:3000/api/db/health')
            const response = await GET(request)

            expect(response.status).toBe(500)

            const data = await response.json()
            expect(data).toEqual({ status: 'error' })
            expect(mockPrisma.$executeRaw).toHaveBeenCalledWith(['SELECT 1'])
        })
    })

    describe('POST endpoint', () => {
        it('should return ok status when database is healthy', async () => {
            mockPrisma.$executeRaw.mockResolvedValue(true)

            const request = new Request('http://localhost:3000/api/db/health', {
                method: 'POST'
            })
            const response = await POST(request)

            expect(response.status).toBe(200)

            const data = await response.json()
            expect(data).toEqual({ status: 'ok' })
            expect(mockPrisma.$executeRaw).toHaveBeenCalledWith(['SELECT 1'])
        })

        it('should return error status when database query fails', async () => {
            mockPrisma.$executeRaw.mockRejectedValue(new Error('Database connection failed'))

            const request = new Request('http://localhost:3000/api/db/health', {
                method: 'POST'
            })
            const response = await POST(request)

            expect(response.status).toBe(500)

            const data = await response.json()
            expect(data).toEqual({ status: 'error' })
            expect(mockPrisma.$executeRaw).toHaveBeenCalledWith(['SELECT 1'])
        })
    })
})
