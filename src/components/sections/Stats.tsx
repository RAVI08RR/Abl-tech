'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Award, Rocket, Globe2, Users2, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import type { Statistic } from '@/types'

interface StatsProps {
  heading?: string
  statistics?: Statistic[]
}

const statConfig = [
  { icon: Award, color: '#ED396D', bg: 'rgba(237, 57, 109, 0.08)' },
  { icon: Rocket, color: '#05A7D4', bg: 'rgba(5, 167, 212, 0.08)' },
  { icon: Globe2, color: '#037C9E', bg: 'rgba(3, 124, 158, 0.08)' },
  { icon: Users2, color: '#ED396D', bg: 'rgba(237, 57, 109, 0.08)' },
]

const defaultStats: Statistic[] = [
  { _id: '1', value: '12+', label: 'Years of Excellence', description: 'Delivering technology solutions since 2014', icon: '', order: 1 },
  { _id: '2', value: '200+', label: 'Projects Delivered', description: 'Across 20+ industries worldwide', icon: '', order: 2 },
  { _id: '3', value: '40+', label: 'Industries Served', description: 'From healthcare to financial services', icon: '', order: 3 },
  { _id: '4', value: '95%', label: 'Client Retention Rate', description: 'Long-term trusted client partnerships', icon: '', order: 4 },
]

function useCountUp(target: string, active: boolean, duration = 1600) {
  const [display, setDisplay] = useState('0')
  const hasRun = useRef(false)

  useEffect(() => {
    if (!active || hasRun.current) return
    const match = target.match(/^(\d+\.?\d*)(.*)$/)
    if (!match) { setDisplay(target); return }

    const end = parseFloat(match[1])
    const suffix = match[2]
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(ease * end)
      setDisplay(`${current}${suffix}`)
      if (progress < 1) requestAnimationFrame(tick)
    }

    hasRun.current = true
    requestAnimationFrame(tick)
  }, [active, target, duration])

  return display
}

function StatCard({ stat, index, active }: { stat: Statistic; index: number; active: boolean }) {
  const cfg = statConfig[index % statConfig.length]
  const Icon = cfg.icon
  const count = useCountUp(stat.value, active)
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      whileHover={shouldReduce ? {} : { y: -4, transition: { type: 'spring', stiffness: 350, damping: 25 } }}
      className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-slate-200/70 hover:border-[#05A7D4]/30 shadow-xs hover:shadow-xl hover:shadow-[#05A7D4]/5 transition-all duration-300 overflow-hidden"
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ED396D] to-[#05A7D4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: cfg.bg }}
      >
        <Icon className="w-7 h-7" style={{ color: cfg.color }} strokeWidth={1.8} />
      </div>

      {/* Counter */}
      <p className="text-4xl sm:text-5xl font-extrabold leading-none mb-3 tabular-nums tracking-tight bg-gradient-to-r from-[#ED396D] via-[#05A7D4] to-[#037C9E] bg-clip-text text-transparent">
        {count}
      </p>

      {/* Label */}
      <p className="text-base font-bold text-slate-900 mb-1">{stat.label}</p>

      {/* Description */}
      {stat.description && (
        <p className="text-xs text-slate-500 font-normal leading-relaxed">{stat.description}</p>
      )}
    </motion.div>
  )
}

export function Stats({ heading, statistics }: StatsProps) {
  const displayStats = statistics?.length ? statistics : defaultStats
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect() } },
      { threshold: 0.15 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-white border-y border-slate-100 overflow-hidden"
      aria-label="Company statistics"
    >
      {/* Dot Matrix Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <Container className="relative z-10">
        {heading && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-[#ED396D] tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#05A7D4]" />
              <span>Proven Results</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{heading}</h2>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayStats.map((stat, index) => (
            <StatCard
              key={stat._id}
              stat={stat}
              index={index}
              active={active}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

