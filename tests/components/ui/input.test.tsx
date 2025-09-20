import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from '@/components/ui/input'

describe('Input Component', () => {
    it('should render input field', () => {
        render(<Input placeholder="Enter text" />)

        const input = screen.getByPlaceholderText('Enter text')
        expect(input).toBeInTheDocument()
    })

    it('should handle text input', async () => {
        const user = userEvent.setup()
        render(<Input placeholder="Enter text" />)

        const input = screen.getByPlaceholderText('Enter text')
        await user.type(input, 'Hello World')

        expect(input).toHaveValue('Hello World')
    })

    it('should handle onChange events', async () => {
        const user = userEvent.setup()
        const handleChange = vi.fn()

        render(<Input placeholder="Enter text" onChange={handleChange} />)

        const input = screen.getByPlaceholderText('Enter text')
        await user.type(input, 'test')

        expect(handleChange).toHaveBeenCalled()
    })

    it('should apply different input types', () => {
        const { rerender } = render(<Input type="email" data-testid="email-input" />)
        expect(screen.getByTestId('email-input')).toHaveAttribute('type', 'email')

        rerender(<Input type="password" data-testid="password-input" />)
        expect(screen.getByTestId('password-input')).toHaveAttribute('type', 'password')

        rerender(<Input type="number" data-testid="number-input" />)
        expect(screen.getByTestId('number-input')).toHaveAttribute('type', 'number')
    })

    it('should be disabled when disabled prop is true', () => {
        render(<Input disabled placeholder="Disabled input" />)

        const input = screen.getByPlaceholderText('Disabled input')
        expect(input).toBeDisabled()
    })

    it('should be required when required prop is true', () => {
        render(<Input required placeholder="Required input" />)

        const input = screen.getByPlaceholderText('Required input')
        expect(input).toBeRequired()
    })

    it('should apply custom className', () => {
        render(<Input className="custom-class" data-testid="custom-input" />)

        const input = screen.getByTestId('custom-input')
        expect(input).toHaveClass('custom-class')
    })

    it('should handle controlled input', async () => {
        const user = userEvent.setup()
        const handleChange = vi.fn()

        const ControlledInput = () => {
            const [value, setValue] = React.useState('')
            return (
                <Input
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                        handleChange(e)
                    }}
                    placeholder="Controlled input"
                />
            )
        }

        render(<ControlledInput />)

        const input = screen.getByPlaceholderText('Controlled input')
        await user.type(input, 'controlled')

        expect(input).toHaveValue('controlled')
        expect(handleChange).toHaveBeenCalled()
    })

    it('should handle focus and blur events', async () => {
        const user = userEvent.setup()
        const handleFocus = vi.fn()
        const handleBlur = vi.fn()

        render(
            <Input
                placeholder="Focus test"
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        )

        const input = screen.getByPlaceholderText('Focus test')

        await user.click(input)
        expect(handleFocus).toHaveBeenCalled()

        await user.tab()
        expect(handleBlur).toHaveBeenCalled()
    })

    it('should have default styling classes', () => {
        render(<Input data-testid="styled-input" />)

        const input = screen.getByTestId('styled-input')
        expect(input).toHaveClass('flex')
        expect(input).toHaveClass('h-9')
        expect(input).toHaveClass('w-full')
        expect(input).toHaveClass('rounded-md')
        expect(input).toHaveClass('border')
        expect(input).toHaveClass('bg-transparent')
        expect(input).toHaveClass('px-3')
        expect(input).toHaveClass('py-1')
    })

    it('should forward ref correctly', () => {
        const ref = React.createRef<HTMLInputElement>()
        render(<Input ref={ref} data-testid="ref-input" />)

        expect(ref.current).toBeInstanceOf(HTMLInputElement)
        expect(ref.current).toBe(screen.getByTestId('ref-input'))
    })
})
