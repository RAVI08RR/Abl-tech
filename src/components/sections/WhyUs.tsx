'use client'

import {
  Lightbulb,
  Users,
  CloudCog,
  ShieldCheck,
  TrendingUp,
  Handshake,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import type { CompanyValue } from '@/types'

interface WhyUsProps {
  heading?: string
  description?: string
  values?: CompanyValue[]
}

const cardThemes = [
  {
    icon: Lightbulb,
    gradFrom: '#E3164F',
    gradTo: '#FF6B9D',
    glowColor: 'rgba(227, 22, 79, 0.08)',
    borderColor: 'rgba(227, 22, 79, 0.1)',
  },
  {
    icon: Users,
    gradFrom: '#008BCB',
    gradTo: '#00C4FF',
    glowColor: 'rgba(0, 139, 203, 0.08)',
    borderColor: 'rgba(0, 139, 203, 0.1)',
  },
  {
    icon: CloudCog,
    gradFrom: '#7C3AED',
    gradTo: '#A78BFA',
    glowColor: 'rgba(124, 58, 237, 0.08)',
    borderColor: 'rgba(124, 58, 237, 0.1)',
  },
  {
    icon: ShieldCheck,
    gradFrom: '#059669',
    gradTo: '#34D399',
    glowColor: 'rgba(5, 150, 105, 0.08)',
    borderColor: 'rgba(5, 150, 105, 0.1)',
  },
  {
    icon: TrendingUp,
    gradFrom: '#D97706',
    gradTo: '#FCD34D',
    glowColor: 'rgba(217, 119, 6, 0.08)',
    borderColor: 'rgba(217, 119, 6, 0.1)',
  },
  {
    icon: Handshake,
    gradFrom: '#E3164F',
    gradTo: '#008BCB',
    glowColor: 'rgba(0, 139, 203, 0.08)',
    borderColor: 'rgba(0, 139, 203, 0.1)',
  },
]

const defaultValues: CompanyValue[] = [
  {
    _id: '1',
    title: 'Tailored Technology Solutions',
    description:
      'Custom-built solutions designed around your unique business goals — not off-the-shelf compromises.',
    icon: '💡',
    order: 1,
  },
  {
    _id: '2',
    title: 'Expert Development Team',
    description:
      'Senior engineers averaging 8+ years of experience. You get the people you meet — every time.',
    icon: '👨‍💻',
    order: 2,
  },
  {
    _id: '3',
    title: 'Cloud & Digital Innovation',
    description:
      'Future-ready cloud solutions on AWS, Azure, and GCP that improve flexibility and performance.',
    icon: '☁️',
    order: 3,
  },
  {
    _id: '4',
    title: 'Secure & Reliable Solutions',
    description:
      'Technology engineered with security-first architecture, built for performance and long-term stability.',
    icon: '🛡️',
    order: 4,
  },
  {
    _id: '5',
    title: 'Scalable for Growth',
    description:
      'We design for 10× growth from day one — flexible digital solutions that scale alongside your business.',
    icon: '📈',
    order: 5,
  },
  {
    _id: '6',
    title: 'End-to-End Partnership',
    description:
      'From strategy and development to deployment and ongoing support — we are your full-cycle technology partner.',
    icon: '🤝',
    order: 6,
  },
]

export function WhyUs({ heading, description, values }: WhyUsProps) {
  const displayValues = values?.length ? values : defaultValues
  const displayDescription =
    description ||
    'A trusted technology partner helping businesses build, scale, transform, and succeed in the digital world.'

  return (
    <section
      className="relative overflow-hidden bg-white py-24 lg:py-32"
      aria-label="Why choose us"
    >
      {/* ── Background decoration ── */}

      {/* Subtle Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(0,0,0,0.02) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Subtle light brand-colored glows */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full blur-[120px] opacity-40"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, rgba(227,22,79,0.08) 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-[480px] h-[480px] rounded-full blur-[120px] opacity-40"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, rgba(0,139,203,0.08) 0%, transparent 70%)' }}
      />

      {/* Horizontal accent line */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-px"
        aria-hidden="true"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(227,22,79,0.2), rgba(0,139,203,0.2), transparent)' }}
      />

      <Container>
        <div className="relative z-10">

          {/* ── Section Header ── */}
          <div className="text-center mb-20 max-w-3xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-5">
              <span
                className="h-px w-8"
                style={{ background: 'linear-gradient(90deg, transparent, #E3164F)' }}
              />
              <span
                className="text-xs font-bold tracking-[0.18em] uppercase"
                style={{
                  background: 'linear-gradient(90deg, #E3164F, #008BCB)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Why Choose Us
              </span>
              <span
                className="h-px w-8"
                style={{ background: 'linear-gradient(90deg, #008BCB, transparent)' }}
              />
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-[#111111] mb-6">
              Why Businesses Choose{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #E3164F 0%, #008BCB 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                AB BusinessTech
              </span>
            </h2>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div
                className="h-px flex-1 max-w-[80px]"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(227,22,79,0.2))' }}
              />
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: 'linear-gradient(135deg, #E3164F, #008BCB)' }}
              />
              <div
                className="h-px flex-1 max-w-[80px]"
                style={{ background: 'linear-gradient(90deg, rgba(0,139,203,0.2), transparent)' }}
              />
            </div>

            <p className="text-lg text-gray-500 leading-relaxed text-pretty font-medium">
              {displayDescription}
            </p>
          </div>

          {/* ── Feature Cards Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayValues.slice(0, 6).map((value, index) => {
              const theme = cardThemes[index % cardThemes.length]
              const IconComponent = theme.icon

              return (
                <div
                  key={value._id}
                  className="group relative rounded-2xl p-8 cursor-default transition-all duration-300 overflow-hidden"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.border = `1px solid ${theme.gradFrom}40`
                    el.style.transform = 'translateY(-6px)'
                    el.style.boxShadow = `0 20px 40px ${theme.glowColor}, 0 4px 12px rgba(0,0,0,0.03)`
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.background = '#FFFFFF'
                    el.style.border = '1px solid rgba(0, 0, 0, 0.06)'
                    el.style.transform = 'translateY(0)'
                    el.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.02)'
                  }}
                  aria-label={value.title}
                >
                  {/* Top gradient bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, ${theme.gradFrom}, ${theme.gradTo})` }}
                    aria-hidden="true"
                  />

                  {/* Corner number watermark */}
                  <span
                    className="absolute top-4 right-6 text-6xl font-black leading-none select-none pointer-events-none"
                    style={{ color: 'rgba(0,0,0,0.03)' }}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Icon container */}
                  <div className="relative z-10 mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${theme.gradFrom}10, ${theme.gradTo}18)`,
                        border: `1px solid ${theme.gradFrom}20`,
                      }}
                    >
                      <IconComponent
                        className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: theme.gradFrom }}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="relative z-10">
                    <h3
                      className="text-lg font-bold text-[#111111] mb-3 leading-snug transition-colors duration-200 group-hover:text-[#E3164F]"
                    >
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-200">
                      {value.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── Bottom trust stats bar (light themed) ── */}
          <div
            className="mt-16 rounded-2xl px-8 py-6 flex flex-wrap items-center justify-center gap-8 text-center"
            style={{
              background: '#F9FAFB',
              border: '1px solid rgba(0, 0, 0, 0.05)',
            }}
          >
            {[
              { stat: '12+', label: 'Years of Excellence' },
              { stat: '200+', label: 'Projects Delivered' },
              { stat: '40+', label: 'Industries Served' },
              { stat: '95%', label: 'Client Retention Rate' },
            ].map(({ stat, label }) => (
              <div key={label} className="flex flex-col items-center gap-1 min-w-[110px]">
                <span
                  className="text-3xl font-black tracking-tight"
                  style={{
                    background: 'linear-gradient(135deg, #E3164F, #008BCB)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat}
                </span>
                <span className="text-xs text-gray-500 font-semibold">{label}</span>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}
