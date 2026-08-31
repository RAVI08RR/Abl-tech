'use client'

import { useRef, useEffect, useState } from 'react'
import { Trophy, Rocket, Globe, Heart } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import type { Statistic } from '@/types'

interface StatsProps {
  heading?: string
  statistics?: Statistic[]
}

const statConfig = [
  { icon: Trophy,  color: '#D9005B', bg: '#D9005B12' },
  { icon: Rocket,  color: '#8B5CF6', bg: '#8B5CF612' },
  { icon: Globe,   color: '#00AEEF', bg: '#00AEEF12' },
  { icon: Heart,   color: '#D9005B', bg: '#D9005B12' },
]

const defaultStats: Statistic[] = [
  { _id: '1', value: '12+',  label: 'Years of Excellence',   description: 'Delivering technology solutions since 2014', icon: '', order: 1 },
  { _id: '2', value: '200+', label: 'Projects Delivered',    description: 'Across 20+ industries worldwide',            icon: '', order: 2 },
  { _id: '3', value: '40+',  label: 'Industries Served',     description: 'From healthcare to financial services',       icon: '', order: 3 },
  { _id: '4', value: '95%',  label: 'Client Retention Rate', description: 'Our clients keep coming back',               icon: '', order: 4 },
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

  return (
    <div className="group flex flex-col items-center text-center p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110" style={{ background: cfg.bg }}>
        <Icon className="w-7 h-7" style={{ color: cfg.color }} strokeWidth={1.75} />
      </div>

      {/* Counter */}
      <p
        className="text-4xl font-bold leading-none mb-2 tabular-nums"
        style={{
          background: `linear-gradient(135deg, ${cfg.color} 0%, ${cfg.color}99 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {count}
      </p>

      <p className="text-sm font-semibold text-gray-800 mb-1">{stat.label}</p>
      {stat.description && (
        <p className="text-xs text-gray-400 leading-relaxed">{stat.description}</p>
      )}
    </div>
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
      className="py-20 lg:py-24 bg-white border-y border-slate-100"
      aria-label="Company statistics"
    >
      <Container>
        {heading && (
          <h2 className="text-center text-2xl font-semibold text-gray-800 mb-12">{heading}</h2>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
