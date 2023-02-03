import React from 'react'
import cn from 'clsx'

type Props = {
  level: 1 | 2 | 3 | 4 | 5
  children: React.ReactNode
  variant?: 'font-bold' | 'font-normal' | 'font-semibold'
  className?: string
}

const Heading: React.FC<Props> = ({
  level,
  children,
  variant = 'regular',
  className
}) => {
  switch (level) {
    case 1:
      return (
        <h1 className={cn(variant, 'text-[2.875rem]', className)}>
          {children}
        </h1>
      )
    case 2:
      return (
        <h2 className={cn(variant, 'text-[2.25rem]', className)}>{children}</h2>
      )
    case 3:
      return (
        <h3 className={cn(variant, 'text-[1.5rem]', className)}>{children}</h3>
      )
    case 4:
      return (
        <h4 className={cn(variant, 'text-[1.125rem]', className)}>
          {children}
        </h4>
      )
    case 5:
      return (
        <h5 className={cn(variant, 'text-[1rem]', className)}>{children}</h5>
      )
    default:
      return null
  }
}

export default Heading
