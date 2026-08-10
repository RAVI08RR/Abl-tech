import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center' | 'right'
  light?: boolean
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        align === 'right' && 'ml-auto text-right',
        className
      )}
    >
      {eyebrow && (
        <p className="eyebrow mb-3">{eyebrow}</p>
      )}
      <h2
        className={cn(
          'text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-balance',
          light ? 'text-white' : 'text-[#111111]',
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed text-pretty',
            light ? 'text-gray-300' : 'text-gray-600'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
