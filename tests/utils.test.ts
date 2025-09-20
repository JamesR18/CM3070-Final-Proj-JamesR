import { describe, it, expect } from 'vitest'
import { cn } from '../lib/utils'

describe('utils', () => {
    describe('cn function', () => {
        it('should merge class names correctly', () => {
            const result = cn('bg-red-500', 'text-white')
            expect(result).toBe('bg-red-500 text-white')
        })

        it('should handle conflicting tailwind classes', () => {
            const result = cn('bg-red-500', 'bg-blue-500')
            expect(result).toBe('bg-blue-500')
        })

        it('should handle conditional classes', () => {
            const isActive = true
            const result = cn('base-class', isActive && 'active-class')
            expect(result).toBe('base-class active-class')
        })

        it('should handle falsy values', () => {
            const result = cn('base-class', false, null, undefined, '')
            expect(result).toBe('base-class')
        })

        it('should handle empty input', () => {
            const result = cn()
            expect(result).toBe('')
        })
    })
})
