import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/utils'

describe('Utils', () => {
    describe('cn function', () => {
        it('should merge class names correctly', () => {
            const result = cn('text-red-500', 'bg-blue-500')
            expect(result).toBe('text-red-500 bg-blue-500')
        })

        it('should handle conditional classes', () => {
            const result = cn('base-class', true && 'conditional-class', false && 'hidden-class')
            expect(result).toBe('base-class conditional-class')
        })

        it('should handle overlapping tailwind classes', () => {
            const result = cn('text-red-500', 'text-blue-500')
            expect(result).toBe('text-blue-500')
        })

        it('should handle undefined and null values', () => {
            const result = cn('base-class', undefined, null, 'another-class')
            expect(result).toBe('base-class another-class')
        })

        it('should handle empty strings', () => {
            const result = cn('base-class', '', 'another-class')
            expect(result).toBe('base-class another-class')
        })

        it('should handle array of classes', () => {
            const result = cn(['class1', 'class2'], 'class3')
            expect(result).toBe('class1 class2 class3')
        })

        it('should handle objects with boolean values', () => {
            const result = cn({
                'active': true,
                'inactive': false,
                'visible': true
            })
            expect(result).toBe('active visible')
        })
    })
})
