'use client'

import { motion, useReducedMotion } from 'framer-motion'
import React from 'react'

interface FadeUpProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  as?: React.ElementType
  amount?: number
  style?: React.CSSProperties
}

/**
 * FadeUp — reusable scroll-triggered fade+translate reveal.
 * Respects prefers-reduced-motion: when active, renders children instantly with no animation.
 */
export function FadeUp({
  children,
  delay = 0,
  duration = 0.55,
  className,
  as: Tag = 'div',
  amount = 0.2,
  style,
}: FadeUpProps) {
  const shouldReduce = useReducedMotion()
  const MotionTag = motion(Tag as any)

  if (shouldReduce) {
    return <Tag className={className} style={style}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] as const }}
    >
      {children}
    </MotionTag>
  )
}


/**
 * StaggerContainer — wrapper that orchestrates child stagger via Framer Motion variants.
 * Children should use StaggerItem.
 */
interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  stagger?: number
  delayChildren?: number
  amount?: number
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0,
  amount = 0.1,
}: StaggerContainerProps) {
  const shouldReduce = useReducedMotion()

  if (shouldReduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

/**
 * StaggerItem — individual child item inside a StaggerContainer.
 */
interface StaggerItemProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function StaggerItem({ children, className, as: Tag = 'div' }: StaggerItemProps) {
  const shouldReduce = useReducedMotion()
  const MotionTag = motion(Tag as any)

  if (shouldReduce) {
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
      }}
    >
      {children}
    </MotionTag>
  )
}
