import { describe, it, expect, vi, beforeEach } from 'vitest'
import { identityApi, IdentityApiError } from '@/lib/identity-api'

// Mock fetch globally
const mockFetch = vi.fn()
global.fetch = mockFetch

describe('Identity API', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    const mockIdentity = {
        id: 1,
        name: 'Test Identity',
        description: 'Test description',
        isDefault: false,
        isActive: true,
        userId: 1,
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z',
        attributes: []
    }

    describe('getIdentities', () => {
        it('should fetch identities successfully', async () => {
            const mockResponse = {
                ok: true,
                json: vi.fn().mockResolvedValue({
                    identities: [mockIdentity],
                    total: 1
                })
            }
            mockFetch.mockResolvedValue(mockResponse)

            const result = await identityApi.getIdentities()

            expect(mockFetch).toHaveBeenCalledWith('/api/identities', {
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            })
            expect(result.identities).toHaveLength(1)
            expect(result.identities[0].name).toBe('Test Identity')
        })

        it('should handle error when fetching identities', async () => {
            const mockResponse = {
                ok: false,
                status: 401,
                json: vi.fn().mockResolvedValue({
                    error: 'Unauthorized'
                })
            }
            mockFetch.mockResolvedValue(mockResponse)

            await expect(identityApi.getIdentities()).rejects.toThrow(IdentityApiError)
            await expect(identityApi.getIdentities()).rejects.toThrow('Unauthorized')
        })
    })

    describe('createIdentity', () => {
        it('should create identity successfully', async () => {
            const identityData = {
                name: 'New Identity',
                description: 'New description',
                isDefault: false,
                isActive: true,
                attributes: [{ key: 'email', value: 'test@example.com', isPublic: true, isVisible: true }]
            }

            const mockResponse = {
                ok: true,
                json: vi.fn().mockResolvedValue({
                    identity: { ...mockIdentity, ...identityData }
                })
            }
            mockFetch.mockResolvedValue(mockResponse)

            const result = await identityApi.createIdentity(identityData)

            expect(mockFetch).toHaveBeenCalledWith('/api/identities', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(identityData)
            })
            expect(result.identity?.name).toBe('New Identity')
        })

        it('should handle validation errors when creating identity', async () => {
            const mockResponse = {
                ok: false,
                status: 400,
                json: vi.fn().mockResolvedValue({
                    error: 'Name is required'
                })
            }
            mockFetch.mockResolvedValue(mockResponse)

            const invalidData = { name: '', description: '', isDefault: false, isActive: true, attributes: [] }

            await expect(identityApi.createIdentity(invalidData)).rejects.toThrow(IdentityApiError)
            await expect(identityApi.createIdentity(invalidData)).rejects.toThrow('Name is required')
        })
    })

    describe('getIdentity', () => {
        it('should get identity by id successfully', async () => {
            const mockResponse = {
                ok: true,
                json: vi.fn().mockResolvedValue({
                    identity: mockIdentity
                })
            }
            mockFetch.mockResolvedValue(mockResponse)

            const result = await identityApi.getIdentity(1)

            expect(mockFetch).toHaveBeenCalledWith('/api/identities/1', {
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            })
            expect(result.identity?.id).toBe(1)
            expect(result.identity?.name).toBe('Test Identity')
        })

        it('should handle not found error', async () => {
            const mockResponse = {
                ok: false,
                status: 404,
                json: vi.fn().mockResolvedValue({
                    error: 'Identity not found'
                })
            }
            mockFetch.mockResolvedValue(mockResponse)

            await expect(identityApi.getIdentity(999)).rejects.toThrow(IdentityApiError)
            await expect(identityApi.getIdentity(999)).rejects.toThrow('Identity not found')
        })
    })

    describe('updateIdentity', () => {
        it('should update identity successfully', async () => {
            const updateData = {
                name: 'Updated Identity',
                description: 'Updated description'
            }

            const mockResponse = {
                ok: true,
                json: vi.fn().mockResolvedValue({
                    identity: { ...mockIdentity, ...updateData }
                })
            }
            mockFetch.mockResolvedValue(mockResponse)

            const result = await identityApi.updateIdentity(1, updateData)

            expect(mockFetch).toHaveBeenCalledWith('/api/identities/1', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(updateData)
            })
            expect(result.identity?.name).toBe('Updated Identity')
        })
    })

    describe('deleteIdentity', () => {
        it('should delete identity successfully', async () => {
            const mockResponse = {
                ok: true,
                json: vi.fn().mockResolvedValue({
                    message: 'Identity deleted successfully'
                })
            }
            mockFetch.mockResolvedValue(mockResponse)

            const result = await identityApi.deleteIdentity(1)

            expect(mockFetch).toHaveBeenCalledWith('/api/identities/1', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            })
            expect(result.message).toBe('Identity deleted successfully')
        })

        it('should handle error when deleting default identity', async () => {
            const mockResponse = {
                ok: false,
                status: 400,
                json: vi.fn().mockResolvedValue({
                    error: 'Cannot delete default identity'
                })
            }
            mockFetch.mockResolvedValue(mockResponse)

            await expect(identityApi.deleteIdentity(1)).rejects.toThrow(IdentityApiError)
            await expect(identityApi.deleteIdentity(1)).rejects.toThrow('Cannot delete default identity')
        })
    })

    describe('shareIdentity', () => {
        it('should share identity successfully', async () => {
            const shareData = {
                viewerEmail: 'viewer@example.com',
                context: 'business',
                canView: true,
                canRequest: true,
                expiresAt: '2024-12-31T23:59:59Z'
            }

            const mockResponse = {
                ok: true,
                json: vi.fn().mockResolvedValue({
                    message: 'Identity shared successfully',
                    sharedIdentity: { id: 1, ...shareData }
                })
            }
            mockFetch.mockResolvedValue(mockResponse)

            const result = await identityApi.shareIdentity({ identityId: 1, ...shareData })

            expect(mockFetch).toHaveBeenCalledWith('/api/identities/share', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ identityId: 1, ...shareData })
            })
            expect(result.message).toBe('Identity shared successfully')
        })
    })

    describe('IdentityApiError', () => {
        it('should create error with correct properties', () => {
            const error = new IdentityApiError('Identity error', 400, { detail: 'validation failed' })

            expect(error.message).toBe('Identity error')
            expect(error.status).toBe(400)
            expect(error.response).toEqual({ detail: 'validation failed' })
            expect(error.name).toBe('IdentityApiError')
        })
    })
})
