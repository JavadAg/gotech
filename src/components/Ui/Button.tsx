import React, { FC, ReactNode, ButtonHTMLAttributes } from 'react'
import cn from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'outlined'
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  disabled = false,
  onClick,
  type = 'button',
  variant,
  ...rest
}) => {
  return (
    <button
      className={cn(
        className,
        'flex justify-center items-center disabled:opacity-50',
        variant === 'primary' && 'bg-gradient-primary text-white',
        variant === 'secondary' && 'bg-gradient-secondary text-white',
        variant === 'outlined' &&
          'border border-purple-2 bg-white text-purple-2'
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}
