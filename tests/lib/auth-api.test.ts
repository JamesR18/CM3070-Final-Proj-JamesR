import { describe, it, expect, vi, beforeEach } from 'vitest'
import { authApi, AuthApiError } from '@/lib/auth-api'

// Mock fetch globally
const mockFetch = vi.fn()
global.fetch = mockFetch

describe('Auth API', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    describe('login', () => {
        it('should login successfully with valid credentials', async () => {
            const mockResponse = {
                ok: true,
                json: vi.fn().mockResolvedValue({
                    message: 'Login successful',
                    user: { id: 1, email: 'test@example.com', isAdmin: false }
                })
            }
            mockFetch.mockResolvedValue(mockResponse)

            const credentials = { email: 'test@example.com', password: 'password123' }
            const result = await authApi.login(credentials)

            expect(mockFetch).toHaveBeenCalledWith('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(credentials)
            })
            expect(result.message).toBe('Login successful')
            expect(result.user?.email).toBe('test@example.com')
        })

        it('should throw AuthApiError on invalid credentials', async () => {
            const mockResponse = {
                ok: false,
                status: 401,
                json: vi.fn().mockResolvedValue({
                    error: 'Invalid credentials'
                })
            }
            mockFetch.mockResolvedValue(mockResponse)

            const credentials = { email: 'test@example.com', password: 'wrongpassword' }

            await expect(authApi.login(credentials)).rejects.toThrow(AuthApiError)
            await expect(authApi.login(credentials)).rejects.toThrow('Invalid credentials')
        })
    })

    describe('register', () => {
        it('should register successfully with valid data', async () => {
            const mockResponse = {
                ok: true,
                json: vi.fn().mockResolvedValue({
                    message: 'Registration successful',
                    user: { id: 1, email: 'newuser@example.com', isAdmin: false }
                })
            }
            mockFetch.mockResolvedValue(mockResponse)

            const userData = { email: 'newuser@example.com', password: 'password123' }
            const result = await authApi.register(userData)

            expect(mockFetch).toHaveBeenCalledWith('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(userData)
            })
            expect(result.message).toBe('Registration successful')
            expect(result.user?.email).toBe('newuser@example.com')
        })

        it('should throw AuthApiError when email already exists', async () => {
            const mockResponse = {
                ok: false,
                status: 400,
                json: vi.fn().mockResolvedValue({
                    error: 'Email already exists'
                })
            }
            mockFetch.mockResolvedValue(mockResponse)

            const userData = { email: 'existing@example.com', password: 'password123' }

            await expect(authApi.register(userData)).rejects.toThrow(AuthApiError)
            await expect(authApi.register(userData)).rejects.toThrow('Email already exists')
        })
    })

    describe('logout', () => {
        it('should logout successfully', async () => {
            const mockResponse = {
                ok: true,
                json: vi.fn().mockResolvedValue({
                    message: 'Logout successful'
                })
            }
            mockFetch.mockResolvedValue(mockResponse)

            const result = await authApi.logout()

            expect(mockFetch).toHaveBeenCalledWith('/api/auth/logout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            })
            expect(result.message).toBe('Logout successful')
        })
    })

    describe('getProfile', () => {
        it('should get user profile successfully', async () => {
            const mockResponse = {
                ok: true,
                json: vi.fn().mockResolvedValue({
                    user: { id: 1, email: 'test@example.com', isAdmin: false }
                })
            }
            mockFetch.mockResolvedValue(mockResponse)

            const result = await authApi.getProfile()

            expect(mockFetch).toHaveBeenCalledWith('/api/auth/me', {
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            })
            expect(result.user?.email).toBe('test@example.com')
        })

        it('should throw AuthApiError when not authenticated', async () => {
            const mockResponse = {
                ok: false,
                status: 401,
                json: vi.fn().mockResolvedValue({
                    error: 'Not authenticated'
                })
            }
            mockFetch.mockResolvedValue(mockResponse)

            await expect(authApi.getProfile()).rejects.toThrow(AuthApiError)
            await expect(authApi.getProfile()).rejects.toThrow('Not authenticated')
        })
    })

    describe('AuthApiError', () => {
        it('should create error with correct properties', () => {
            const error = new AuthApiError('Test error', 400, { detail: 'error detail' })

            expect(error.message).toBe('Test error')
            expect(error.status).toBe(400)
            expect(error.response).toEqual({ detail: 'error detail' })
            expect(error.name).toBe('AuthApiError')
        })
    })
})
