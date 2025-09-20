import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock dependencies before importing anything
const mockPrisma = {
    user: {
        findUnique: vi.fn()
    }
}

const mockLucia = {
    generateSessionToken: vi.fn(),
    createSession: vi.fn()
}

vi.mock('@/lib/db', () => ({
    prisma: mockPrisma
}))

vi.mock('@/lib/lucia', () => mockLucia)

vi.mock('crypto', () => ({
    createHash: vi.fn(() => ({
        update: vi.fn(() => ({
            digest: vi.fn(() => 'hashedpassword123')
        }))
    }))
}))

// Import after mocking
import { POST } from '@/app/api/auth/login/route'
import { NextRequest } from 'next/server'

describe('/api/auth/login', () => {
    beforeEach(() => {
        vi.clearAllMocks()
        mockLucia.generateSessionToken.mockReturnValue('session-token-123')
        mockLucia.createSession.mockResolvedValue({ id: 'session-id' })
    })

    it('should login successfully with valid credentials', async () => {
        const mockUser = {
            id: 1,
            email: 'test@example.com',
            passwordHash: 'hashedpassword123',
            isAdmin: false
        }

        mockPrisma.user.findUnique.mockResolvedValue(mockUser)

        const requestBody = {
            email: 'test@example.com',
            password: 'password123'
        }

        const request = new NextRequest('http://localhost:3000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const response = await POST(request)

        expect(response.status).toBe(200)

        const data = await response.json()
        expect(data).toEqual({
            message: 'Login successful',
            user: {
                id: 1,
                email: 'test@example.com',
                isAdmin: false
            }
        })

        expect(mockPrisma.user.findUnique).toHaveBeenCalledWith({
            where: { email: 'test@example.com' }
        })
        expect(mockLucia.generateSessionToken).toHaveBeenCalled()
        expect(mockLucia.createSession).toHaveBeenCalledWith('session-token-123', 1)
    })

    it('should return 400 for missing email', async () => {
        const requestBody = {
            password: 'password123'
        }

        const request = new NextRequest('http://localhost:3000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const response = await POST(request)

        expect(response.status).toBe(400)

        const data = await response.json()
        expect(data).toEqual({
            error: 'Email and password are required'
        })
    })

    it('should return 400 for missing password', async () => {
        const requestBody = {
            email: 'test@example.com'
        }

        const request = new NextRequest('http://localhost:3000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const response = await POST(request)

        expect(response.status).toBe(400)

        const data = await response.json()
        expect(data).toEqual({
            error: 'Email and password are required'
        })
    })

    it('should return 401 for non-existent user', async () => {
        mockPrisma.user.findUnique.mockResolvedValue(null)

        const requestBody = {
            email: 'nonexistent@example.com',
            password: 'password123'
        }

        const request = new NextRequest('http://localhost:3000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const response = await POST(request)

        expect(response.status).toBe(401)

        const data = await response.json()
        expect(data).toEqual({
            error: 'Invalid credentials'
        })

        expect(mockPrisma.user.findUnique).toHaveBeenCalledWith({
            where: { email: 'nonexistent@example.com' }
        })
    })

    it('should return 401 for incorrect password', async () => {
        const mockUser = {
            id: 1,
            email: 'test@example.com',
            passwordHash: 'differenthash',
            isAdmin: false
        }

        mockPrisma.user.findUnique.mockResolvedValue(mockUser)

        const requestBody = {
            email: 'test@example.com',
            password: 'wrongpassword'
        }

        const request = new NextRequest('http://localhost:3000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const response = await POST(request)

        expect(response.status).toBe(401)

        const data = await response.json()
        expect(data).toEqual({
            error: 'Invalid credentials'
        })
    })

    it('should normalize email to lowercase', async () => {
        const mockUser = {
            id: 1,
            email: 'test@example.com',
            passwordHash: 'hashedpassword123',
            isAdmin: false
        }

        mockPrisma.user.findUnique.mockResolvedValue(mockUser)

        const requestBody = {
            email: 'TEST@EXAMPLE.COM',
            password: 'password123'
        }

        const request = new NextRequest('http://localhost:3000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        await POST(request)

        expect(mockPrisma.user.findUnique).toHaveBeenCalledWith({
            where: { email: 'test@example.com' }
        })
    })

    it('should handle database errors', async () => {
        mockPrisma.user.findUnique.mockRejectedValue(new Error('Database error'))

        const requestBody = {
            email: 'test@example.com',
            password: 'password123'
        }

        const request = new NextRequest('http://localhost:3000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const response = await POST(request)

        expect(response.status).toBe(500)

        const data = await response.json()
        expect(data).toEqual({
            error: 'Internal server error'
        })
    })

    it('should set session cookie on successful login', async () => {
        const mockUser = {
            id: 1,
            email: 'test@example.com',
            passwordHash: 'hashedpassword123',
            isAdmin: false
        }

        mockPrisma.user.findUnique.mockResolvedValue(mockUser)

        const requestBody = {
            email: 'test@example.com',
            password: 'password123'
        }

        const request = new NextRequest('http://localhost:3000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const response = await POST(request)

        expect(response.status).toBe(200)

        // Check that the response has a Set-Cookie header
        const setCookie = response.headers.get('Set-Cookie')
        expect(setCookie).toContain('session=')
        expect(setCookie).toContain('session-token-123')
    })
})
