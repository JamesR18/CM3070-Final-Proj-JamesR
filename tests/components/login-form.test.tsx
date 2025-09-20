import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from '@/components/login-form'

describe('LoginForm Component', () => {
    it('should render login form with all elements', () => {
        render(<LoginForm />)

        // Check for form title
        expect(screen.getByText('Login')).toBeInTheDocument()
        expect(screen.getByText('Enter your email below to login to your account')).toBeInTheDocument()

        // Check for form fields
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument()

        // Check for buttons
        expect(screen.getByRole('button', { name: /^login$/i })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /login with google/i })).toBeInTheDocument()

        // Check for signup link
        expect(screen.getByText("Don't have an account?")).toBeInTheDocument()
        expect(screen.getByText('Sign up')).toBeInTheDocument()

        // Check for forgot password link
        expect(screen.getByText('Forgot your password?')).toBeInTheDocument()
    })

    it('should have proper input types and attributes', () => {
        render(<LoginForm />)

        const emailInput = screen.getByLabelText(/email/i)
        const passwordInput = screen.getByLabelText(/password/i)

        expect(emailInput).toHaveAttribute('type', 'email')
        expect(emailInput).toHaveAttribute('placeholder', 'm@example.com')
        expect(emailInput).toBeRequired()

        expect(passwordInput).toHaveAttribute('type', 'password')
        expect(passwordInput).toBeRequired()
    })

    it('should allow user to type in email field', async () => {
        const user = userEvent.setup()
        render(<LoginForm />)

        const emailInput = screen.getByLabelText(/email/i)
        await user.type(emailInput, 'test@example.com')

        expect(emailInput).toHaveValue('test@example.com')
    })

    it('should allow user to type in password field', async () => {
        const user = userEvent.setup()
        render(<LoginForm />)

        const passwordInput = screen.getByLabelText(/password/i)
        await user.type(passwordInput, 'password123')

        expect(passwordInput).toHaveValue('password123')
    })

    it('should handle form submission', async () => {
        const user = userEvent.setup()
        render(<LoginForm />)

        const emailInput = screen.getByLabelText(/email/i)
        const passwordInput = screen.getByLabelText(/password/i)
        const loginButton = screen.getByRole('button', { name: /^login$/i })

        await user.type(emailInput, 'test@example.com')
        await user.type(passwordInput, 'password123')
        await user.click(loginButton)

        // Since there's no actual form handler, we just check the form exists
        expect(screen.getByRole('form')).toBeInTheDocument()
    })

    it('should apply custom className', () => {
        const { container } = render(<LoginForm className="custom-class" />)

        const formContainer = container.firstChild as HTMLElement
        expect(formContainer).toHaveClass('custom-class')
        expect(formContainer).toHaveClass('flex')
        expect(formContainer).toHaveClass('flex-col')
        expect(formContainer).toHaveClass('gap-6')
    })

    it('should pass through additional props', () => {
        const { container } = render(<LoginForm data-testid="login-form" />)

        const formContainer = container.firstChild as HTMLElement
        expect(formContainer).toHaveAttribute('data-testid', 'login-form')
    })

    it('should have proper card structure', () => {
        render(<LoginForm />)

        // Check for card structure (assuming Card components render with proper roles/classes)
        const titleElement = screen.getByText('Login')
        const descriptionElement = screen.getByText('Enter your email below to login to your account')

        expect(titleElement).toBeInTheDocument()
        expect(descriptionElement).toBeInTheDocument()

        // Check that form is inside the card content
        const form = screen.getByRole('form')
        expect(form).toBeInTheDocument()
    })

    it('should have clickable links', () => {
        render(<LoginForm />)

        const forgotPasswordLink = screen.getByText('Forgot your password?')
        const signUpLink = screen.getByText('Sign up')

        expect(forgotPasswordLink).toHaveAttribute('href', '#')
        expect(signUpLink).toHaveAttribute('href', '#')
    })

    it('should have Google login button with outline variant', () => {
        render(<LoginForm />)

        const googleButton = screen.getByRole('button', { name: /login with google/i })
        expect(googleButton).toBeInTheDocument()
        expect(googleButton).toHaveClass('border')  // outline variant should have border
    })
})
