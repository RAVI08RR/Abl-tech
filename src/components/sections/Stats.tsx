import { Container } from '@/components/ui/Container'
import { AnimatedNumber } from '@/components/ui/AnimatedNumber'
import type { Statistic } from '@/types'

interface StatsProps {
  heading?: string
  statistics?: Statistic[]
}

const defaultStats: Statistic[] = [
  { _id: '1', value: '10+', label: 'Years of Experience', description: 'Delivering technology solutions since 2014', icon: '🏆', order: 1 },
  { _id: '2', value: '100+', label: 'Projects Delivered', description: 'Across 20+ industries worldwide', icon: '🚀', order: 2 },
  { _id: '3', value: '20+', label: 'Industries Served', description: 'From healthcare to financial services', icon: '🌐', order: 3 },
  { _id: '4', value: '95', label: 'Client Retention Rate', description: 'Our clients keep coming back', icon: '❤️', order: 4 },
]

export function Stats({ heading, statistics }: StatsProps) {
  const displayStats = statistics?.length ? statistics : defaultStats

  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden bg-[#111111]"
      aria-label="Company statistics"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#E3164F]/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#008BCB]/5 rounded-full blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 60px,
              rgba(255,255,255,0.1) 60px,
              rgba(255,255,255,0.1) 61px
            ), repeating-linear-gradient(
              90deg,
              transparent,
              transparent 60px,
              rgba(255,255,255,0.1) 60px,
              rgba(255,255,255,0.1) 61px
            )`,
          }}
        />
      </div>

      <Container className="relative z-10">
        {heading && (
          <h2 className="text-center text-white text-2xl font-bold mb-14 opacity-60">{heading}</h2>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {displayStats.map((stat, index) => (
            <div
              key={stat._id}
              className={`text-center px-6 py-4 ${index > 0 ? 'border-t border-white/10 lg:border-t-0' : ''}`}
            >
              {stat.icon && (
                <div className="text-3xl mb-4" aria-hidden="true">{stat.icon}</div>
              )}
              <div
                className="stat-value counter-number text-white mb-2"
                aria-label={`${stat.value} ${stat.label}`}
              >
                <AnimatedNumber
                  value={stat.value}
                  className="bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent"
                />
              </div>
              <p className="text-base font-semibold text-gray-200 mb-1">{stat.label}</p>
              {stat.description && (
                <p className="text-xs text-gray-500 leading-relaxed">{stat.description}</p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
