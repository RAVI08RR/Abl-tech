'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedNumberProps {
  value: string
  duration?: number
  className?: string
  style?: React.CSSProperties
}

export function AnimatedNumber({ value, duration = 2000, className, style }: AnimatedNumberProps) {
  const [displayed, setDisplayed] = useState('0')
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  // Extract numeric part and suffix
  const numMatch = value.match(/^(\d+(?:\.\d+)?)(.*)$/)
  const numericValue = numMatch ? parseFloat(numMatch[1]) : 0
  const suffix = numMatch ? numMatch[2] : value

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    const start = Date.now()
    const end = start + duration

    const tick = () => {
      const now = Date.now()
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      const current = Math.round(eased * numericValue)
      setDisplayed(current.toString())

      if (now < end) {
        requestAnimationFrame(tick)
      } else {
        setDisplayed(numericValue.toString())
      }
    }

    requestAnimationFrame(tick)
  }, [hasStarted, numericValue, duration])

  return (
    <span ref={ref} className={className} style={style}>
      {displayed}{suffix}
    </span>
  )
}
