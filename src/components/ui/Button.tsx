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
  primary: 'bg-[#E3164F] text-white hover:bg-[#B00E3A] shadow-sm hover:shadow-md',
  secondary: 'bg-[#008BCB] text-white hover:bg-[#006699] shadow-sm hover:shadow-md',
  outline: 'border-2 border-[#E3164F] text-[#E3164F] hover:bg-[#E3164F] hover:text-white',
  ghost: 'text-[#111111] hover:bg-gray-100',
  white: 'bg-white text-[#111111] hover:bg-gray-100 shadow-sm',
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
    'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3164F] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
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
