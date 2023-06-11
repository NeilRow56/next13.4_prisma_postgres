import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

//In React, forwardRef is a utility function that passes down a ref through a component to one of its children. This is particularly useful when you need to access a DOM element or component instance directly in a parent component, but the desired child element is wrapped by a higher-order component or a component that doesn’t expose the ref by default.

//forwardRef takes a functional component as its argument and returns a new component with a forwarded ref attribute. This allows you to directly access the underlying child DOM node or instance from a parent component using the ref.

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          `
        w-full 
        rounded-full 
        border
        border-transparent
        bg-green-500
        px-3 
        py-3 
        font-bold 
        text-black
        transition
        hover:opacity-75
        disabled:cursor-not-allowed
        disabled:opacity-50
      `,
          disabled && 'cursor-not-allowed opacity-75',
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
