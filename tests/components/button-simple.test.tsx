import { describe, it, expect } from 'vitest'
import { buttonVariants } from '@/components/ui/button'

describe('Button Variants', () => {
    it('should generate correct default variant classes', () => {
        const classes = buttonVariants()
        expect(classes).toContain('bg-primary')
        expect(classes).toContain('text-primary-foreground')
    })

    it('should generate correct destructive variant classes', () => {
        const classes = buttonVariants({ variant: 'destructive' })
        expect(classes).toContain('bg-destructive')
        expect(classes).toContain('text-destructive-foreground')
    })

    it('should generate correct outline variant classes', () => {
        const classes = buttonVariants({ variant: 'outline' })
        expect(classes).toContain('border')
        expect(classes).toContain('bg-background')
    })

    it('should generate correct secondary variant classes', () => {
        const classes = buttonVariants({ variant: 'secondary' })
        expect(classes).toContain('bg-secondary')
        expect(classes).toContain('text-secondary-foreground')
    })

    it('should generate correct ghost variant classes', () => {
        const classes = buttonVariants({ variant: 'ghost' })
        expect(classes).toContain('hover:bg-accent')
    })

    it('should generate correct link variant classes', () => {
        const classes = buttonVariants({ variant: 'link' })
        expect(classes).toContain('text-primary')
        expect(classes).toContain('underline-offset-4')
    })

    it('should generate correct size classes', () => {
        const defaultSize = buttonVariants()
        expect(defaultSize).toContain('h-9')
        expect(defaultSize).toContain('px-4')

        const smallSize = buttonVariants({ size: 'sm' })
        expect(smallSize).toContain('h-8')
        expect(smallSize).toContain('px-3')

        const largeSize = buttonVariants({ size: 'lg' })
        expect(largeSize).toContain('h-10')
        expect(largeSize).toContain('px-8')

        const iconSize = buttonVariants({ size: 'icon' })
        expect(iconSize).toContain('h-9')
        expect(iconSize).toContain('w-9')
    })

    it('should handle custom className', () => {
        const classes = buttonVariants({ className: 'custom-class' })
        expect(classes).toContain('custom-class')
    })

    it('should combine variant and size correctly', () => {
        const classes = buttonVariants({ variant: 'outline', size: 'lg' })
        expect(classes).toContain('border')
        expect(classes).toContain('h-10')
        expect(classes).toContain('px-8')
    })
})
