'use client'

import { Container } from '@/components/ui/Container'
import { AnimatedNumber } from '@/components/ui/AnimatedNumber'
import { Trophy, Rocket, Globe, Heart } from 'lucide-react'
import type { Statistic } from '@/types'

interface StatsProps {
  heading?: string
  statistics?: Statistic[]
}

const statIcons = [Trophy, Rocket, Globe, Heart]

const statAccents = [
  { from: '#E3164F', to: '#FF6B9D' },
  { from: '#008BCB', to: '#00C4FF' },
  { from: '#7C3AED', to: '#A78BFA' },
  { from: '#E3164F', to: '#008BCB' },
]

const defaultStats: Statistic[] = [
  { _id: '1', value: '12+', label: 'Years of Excellence', description: 'Delivering technology solutions since 2014', icon: '🏆', order: 1 },
  { _id: '2', value: '200+', label: 'Projects Delivered', description: 'Across 20+ industries worldwide', icon: '🚀', order: 2 },
  { _id: '3', value: '40+', label: 'Industries Served', description: 'From healthcare to financial services', icon: '🌐', order: 3 },
  { _id: '4', value: '95%', label: 'Client Retention Rate', description: 'Our clients keep coming back', icon: '❤️', order: 4 },
]

export function Stats({ heading, statistics }: StatsProps) {
  const displayStats = statistics?.length ? statistics : defaultStats

  return (
    <section
      className="relative overflow-hidden bg-white"
      aria-label="Company statistics"
    >
      {/* Subtle Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.02) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Subtle brand glow effects */}
      <div
        className="pointer-events-none absolute -top-24 left-1/4 w-80 h-80 rounded-full blur-[100px] opacity-30"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, rgba(227,22,79,0.08) 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 right-1/4 w-80 h-80 rounded-full blur-[100px] opacity-30"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, rgba(0,139,203,0.08) 0%, transparent 70%)' }}
      />

      {/* Top / bottom accent lines */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-px"
        aria-hidden="true"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(227,22,79,0.1), rgba(0,139,203,0.1), transparent)' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px"
        aria-hidden="true"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,139,203,0.1), rgba(227,22,79,0.1), transparent)' }}
      />

      <Container className="relative z-10 py-24 lg:py-28">
        {heading && (
          <h2 className="text-center text-gray-800 text-2xl font-bold mb-14">{heading}</h2>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {displayStats.map((stat, index) => {
            const IconComponent = statIcons[index % statIcons.length]
            const accent = statAccents[index % statAccents.length]

            return (
              <div
                key={stat._id}
                className="group relative flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(0,0,0,0.05)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = `${accent.from}30`
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = `0 20px 40px rgba(0,0,0,0.03), 0 4px 12px rgba(0,0,0,0.02)`
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(0,0,0,0.05)'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.02)'
                }}
              >
                {/* Icon wrapper */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300"
                  style={{ background: `linear-gradient(135deg, ${accent.from}10, ${accent.to}18)` }}
                >
                  <IconComponent
                    className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: accent.from }}
                    aria-hidden="true"
                  />
                </div>

                {/* Animated value count */}
                <div
                  className="stat-value counter-number mb-2 font-black"
                  aria-label={`${stat.value} ${stat.label}`}
                >
                  <AnimatedNumber
                    value={stat.value}
                    className="font-black"
                    style={{
                      background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    } as React.CSSProperties}
                  />
                </div>

                <p className="text-sm font-bold text-gray-800 mb-1.5 leading-snug">{stat.label}</p>
                {stat.description && (
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">{stat.description}</p>
                )}
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
