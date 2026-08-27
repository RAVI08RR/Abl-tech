import { cn } from '@/lib/utils'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  openInNewTab?: boolean
}

const variantStyles = {
  primary:
    'bg-[#05A7D4] text-white hover:bg-[#0390B5] shadow-sm hover:shadow-[0_6px_20px_rgba(5,167,212,0.30)] hover:-translate-y-0.5',
  secondary:
    'bg-[#037C9E] text-white hover:bg-[#025E78] shadow-sm hover:shadow-md hover:-translate-y-0.5',
  outline:
    'border-2 border-[#05A7D4] text-[#05A7D4] hover:bg-[#05A7D4] hover:text-white hover:-translate-y-0.5',
  ghost: 'text-[#111111] hover:bg-gray-100',
  white: 'bg-white text-[#111111] hover:bg-gray-100 shadow-sm hover:-translate-y-0.5',
}

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className,
  style,
  onClick,
  type = 'button',
  disabled,
  openInNewTab,
}: ButtonProps) {
  const styles = cn(
    'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#05A7D4] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  if (href) {
    return (
      <Link
        href={href}
        className={styles}
        style={style}
        target={openInNewTab ? '_blank' : undefined}
        rel={openInNewTab ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={styles} style={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
