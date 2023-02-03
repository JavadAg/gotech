import React from 'react'
import cn from 'clsx'

interface Props {
  label?: string
  type?: string
  value?: string
  placeholder?: string
  className?: string
  labelClass?: string
  inputClass?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  isDisabled?: boolean
}

const Input: React.FC<Props> = ({
  label,
  type = 'text',
  value,
  placeholder,
  className,
  labelClass,
  inputClass,
  onChange,
  isDisabled = false
}) => {
  return (
    <div className={cn('relative', className)}>
      {label && (
        <label
          htmlFor={label}
          className={cn(labelClass)}
        >
          {label}
        </label>
      )}
      <input
        id={label}
        disabled={isDisabled}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(`border-none outline-none w-full`, inputClass)}
      />
    </div>
  )
}

export default Input
