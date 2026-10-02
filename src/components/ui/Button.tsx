import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
}

export function Button({
  children,
  href,
  onClick,
  type = 'button',
  className,
}: ButtonProps) {
  if (href) {
    return (
      <a className={`btn ${className ?? ''}`.trim()} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={`btn ${className ?? ''}`.trim()} onClick={onClick}>
      {children}
    </button>
  )
}
