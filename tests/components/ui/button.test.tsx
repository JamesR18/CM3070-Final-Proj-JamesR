import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '@/components/ui/button'

describe('Button Component', () => {
    it('should render button with text', () => {
        render(<Button>Click me</Button>)

        const button = screen.getByRole('button', { name: /click me/i })
        expect(button).toBeInTheDocument()
    })

    it('should handle click events', async () => {
        const user = userEvent.setup()
        const handleClick = vi.fn()

        render(<Button onClick={handleClick}>Click me</Button>)

        const button = screen.getByRole('button', { name: /click me/i })
        await user.click(button)

        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('should apply default variant classes', () => {
        render(<Button>Default Button</Button>)

        const button = screen.getByRole('button')
        expect(button).toHaveClass('bg-primary')
        expect(button).toHaveClass('text-primary-foreground')
    })

    it('should apply destructive variant classes', () => {
        render(<Button variant="destructive">Delete</Button>)

        const button = screen.getByRole('button')
        expect(button).toHaveClass('bg-destructive')
        expect(button).toHaveClass('text-destructive-foreground')
    })

    it('should apply outline variant classes', () => {
        render(<Button variant="outline">Outline Button</Button>)

        const button = screen.getByRole('button')
        expect(button).toHaveClass('border')
        expect(button).toHaveClass('border-input')
        expect(button).toHaveClass('bg-background')
    })

    it('should apply secondary variant classes', () => {
        render(<Button variant="secondary">Secondary</Button>)

        const button = screen.getByRole('button')
        expect(button).toHaveClass('bg-secondary')
        expect(button).toHaveClass('text-secondary-foreground')
    })

    it('should apply ghost variant classes', () => {
        render(<Button variant="ghost">Ghost</Button>)

        const button = screen.getByRole('button')
        expect(button).toHaveClass('hover:bg-accent')
        expect(button).toHaveClass('hover:text-accent-foreground')
    })

    it('should apply link variant classes', () => {
        render(<Button variant="link">Link Button</Button>)

        const button = screen.getByRole('button')
        expect(button).toHaveClass('text-primary')
        expect(button).toHaveClass('underline-offset-4')
    })

    it('should apply default size classes', () => {
        render(<Button>Default Size</Button>)

        const button = screen.getByRole('button')
        expect(button).toHaveClass('h-9')
        expect(button).toHaveClass('px-4')
        expect(button).toHaveClass('py-2')
    })

    it('should apply small size classes', () => {
        render(<Button size="sm">Small Button</Button>)

        const button = screen.getByRole('button')
        expect(button).toHaveClass('h-8')
        expect(button).toHaveClass('px-3')
        expect(button).toHaveClass('text-xs')
    })

    it('should apply large size classes', () => {
        render(<Button size="lg">Large Button</Button>)

        const button = screen.getByRole('button')
        expect(button).toHaveClass('h-10')
        expect(button).toHaveClass('px-8')
    })

    it('should apply icon size classes', () => {
        render(<Button size="icon">🔍</Button>)

        const button = screen.getByRole('button')
        expect(button).toHaveClass('h-9')
        expect(button).toHaveClass('w-9')
    })

    it('should be disabled when disabled prop is true', () => {
        render(<Button disabled>Disabled Button</Button>)

        const button = screen.getByRole('button')
        expect(button).toBeDisabled()
        expect(button).toHaveClass('disabled:pointer-events-none')
        expect(button).toHaveClass('disabled:opacity-50')
    })

    it('should apply custom className', () => {
        render(<Button className="custom-class">Custom Button</Button>)

        const button = screen.getByRole('button')
        expect(button).toHaveClass('custom-class')
    })

    it('should render as child component when asChild is true', () => {
        render(
            <Button asChild>
                <a href="/test">Link Button</a>
            </Button>
        )

        const link = screen.getByRole('link')
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', '/test')
        expect(link).toHaveClass('bg-primary') // Should still have button classes
    })

    it('should handle type attribute for form submission', () => {
        render(<Button type="submit">Submit</Button>)

        const button = screen.getByRole('button')
        expect(button).toHaveAttribute('type', 'submit')
    })

    it('should have correct display name', () => {
        expect(Button.displayName).toBe('Button')
    })
})
