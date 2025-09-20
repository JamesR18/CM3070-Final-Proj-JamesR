import { describe, it, expect, vi, beforeEach } from 'vitest'
import { adminApi, AdminApiError } from '@/lib/admin-api'

// Mock fetch globally
const mockFetch = vi.fn()
global.fetch = mockFetch

describe('Admin API', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    describe('login', () => {
        it('should login admin successfully', async () => {
            const mockResponse = {
                ok: true,
                json: vi.fn().mockResolvedValue({
                    message: 'Admin login successful',
                    user: { id: 1, email: 'admin@example.com', isAdmin: true }
                })
            }
            mockFetch.mockResolvedValue(mockResponse)

            const credentials = { email: 'admin@example.com', password: 'adminpass' }
            const result = await adminApi.login(credentials)

            expect(mockFetch).toHaveBeenCalledWith('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(credentials)
            })
            expect(result.message).toBe('Admin login successful')
            expect(result.user?.isAdmin).toBe(true)
        })

        it('should reject non-admin login', async () => {
            const mockResponse = {
                ok: false,
                status: 403,
                json: vi.fn().mockResolvedValue({
                    error: 'Admin access required'
                })
            }
            mockFetch.mockResolvedValue(mockResponse)

            const credentials = { email: 'user@example.com', password: 'password' }

            await expect(adminApi.login(credentials)).rejects.toThrow(AdminApiError)
            await expect(adminApi.login(credentials)).rejects.toThrow('Admin access required')
        })
    })

    describe('register', () => {
        it('should register admin successfully', async () => {
            const mockResponse = {
                ok: true,
                json: vi.fn().mockResolvedValue({
                    message: 'Admin registration successful',
                    user: { id: 2, email: 'newadmin@example.com', isAdmin: true }
                })
            }
            mockFetch.mockResolvedValue(mockResponse)

            const userData = { email: 'newadmin@example.com', password: 'adminpass123' }
            const result = await adminApi.register(userData)

            expect(mockFetch).toHaveBeenCalledWith('/api/admin/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(userData)
            })
            expect(result.message).toBe('Admin registration successful')
            expect(result.user?.isAdmin).toBe(true)
        })
    })

    describe('logout', () => {
        it('should logout admin successfully', async () => {
            const mockResponse = {
                ok: true,
                json: vi.fn().mockResolvedValue({
                    message: 'Admin logout successful'
                })
            }
            mockFetch.mockResolvedValue(mockResponse)

            const result = await adminApi.logout()

            expect(mockFetch).toHaveBeenCalledWith('/api/admin/logout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            })
            expect(result.message).toBe('Admin logout successful')
        })
    })

    describe('getProfile', () => {
        it('should get admin profile successfully', async () => {
            const mockResponse = {
                ok: true,
                json: vi.fn().mockResolvedValue({
                    user: { id: 1, email: 'admin@example.com', isAdmin: true }
                })
            }
            mockFetch.mockResolvedValue(mockResponse)

            const result = await adminApi.getProfile()

            expect(mockFetch).toHaveBeenCalledWith('/api/admin/me', {
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            })
            expect(result.user?.isAdmin).toBe(true)
        })
    })

    describe('getUsers', () => {
        it('should get all users successfully', async () => {
            const mockUsers = [
                { id: 1, email: 'admin@example.com', isAdmin: true },
                { id: 2, email: 'user@example.com', isAdmin: false }
            ]
            const mockResponse = {
                ok: true,
                json: vi.fn().mockResolvedValue({
                    users: mockUsers,
                    count: 2
                })
            }
            mockFetch.mockResolvedValue(mockResponse)

            const result = await adminApi.getUsers()

            expect(mockFetch).toHaveBeenCalledWith('/api/admin/users', {
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            })
            expect(result.users).toHaveLength(2)
            expect(result.count).toBe(2)
        })

        it('should handle unauthorized access to users list', async () => {
            const mockResponse = {
                ok: false,
                status: 401,
                json: vi.fn().mockResolvedValue({
                    error: 'Unauthorized'
                })
            }
            mockFetch.mockResolvedValue(mockResponse)

            await expect(adminApi.getUsers()).rejects.toThrow(AdminApiError)
            await expect(adminApi.getUsers()).rejects.toThrow('Unauthorized')
        })
    })

    describe('AdminApiError', () => {
        it('should create error with correct properties', () => {
            const error = new AdminApiError('Admin error', 403, { detail: 'access denied' })

            expect(error.message).toBe('Admin error')
            expect(error.status).toBe(403)
            expect(error.response).toEqual({ detail: 'access denied' })
            expect(error.name).toBe('AdminApiError')
        })
    })
})
