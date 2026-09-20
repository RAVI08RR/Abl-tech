'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  Lightbulb,
  Users,
  CloudCog,
  ShieldCheck,
  TrendingUp,
  Handshake,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/MotionSection'
import type { CompanyValue } from '@/types'

interface WhyUsProps {
  heading?: string
  description?: string
  values?: CompanyValue[]
}

const valueCards = [
  {
    icon: Lightbulb,
    color: '#ED396D',
    bg: 'rgba(237, 57, 109, 0.08)',
  },
  {
    icon: Users,
    color: '#05A7D4',
    bg: 'rgba(5, 167, 212, 0.08)',
  },
  {
    icon: CloudCog,
    color: '#037C9E',
    bg: 'rgba(3, 124, 158, 0.08)',
  },
  {
    icon: ShieldCheck,
    color: '#ED396D',
    bg: 'rgba(237, 57, 109, 0.08)',
  },
  {
    icon: TrendingUp,
    color: '#05A7D4',
    bg: 'rgba(5, 167, 212, 0.08)',
  },
  {
    icon: Handshake,
    color: '#037C9E',
    bg: 'rgba(3, 124, 158, 0.08)',
  },
]

const defaultValues: CompanyValue[] = [
  {
    _id: '1',
    title: 'Tailored Technology Solutions',
    description:
      'Custom-built solutions engineered around your unique business goals — not off-the-shelf compromises.',
    icon: '💡',
    order: 1,
  },
  {
    _id: '2',
    title: 'Expert Engineering Team',
    description:
      'Senior engineers averaging 8+ years of experience across web, cloud, and AI architectures.',
    icon: '👨‍💻',
    order: 2,
  },
  {
    _id: '3',
    title: 'Cloud & Digital Innovation',
    description:
      'Future-ready cloud solutions on AWS, Azure, and GCP optimizing performance and scalability.',
    icon: '☁️',
    order: 3,
  },
  {
    _id: '4',
    title: 'Security-First Architecture',
    description:
      'Built with enterprise-grade security standards ensuring operational stability and compliance.',
    icon: '🛡️',
    order: 4,
  },
  {
    _id: '5',
    title: 'Designed for 10x Scale',
    description:
      'Architectures built to accommodate high-volume growth and continuous seamless upgrades.',
    icon: '📈',
    order: 5,
  },
  {
    _id: '6',
    title: 'Full Lifecycle Partnership',
    description:
      'From product strategy and design to deployment, maintenance, and long-term optimization.',
    icon: '🤝',
    order: 6,
  },
]

export function WhyUs({ heading, description, values }: WhyUsProps) {
  const displayValues = values?.length ? values : defaultValues
  const displayDescription =
    description ||
    'A trusted technology partner helping ambitious businesses build, scale, and transform in the digital world.'

  const shouldReduce = useReducedMotion()

  return (
    <section
      className="relative py-24 lg:py-32 bg-slate-50/50 overflow-hidden"
      aria-label="Why choose us"
    >
      {/* ── Background Aesthetics ── */}
      {/* Dot matrix pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Ambient gradient glows */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[140px] opacity-25"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, #ED396D 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-[140px] opacity-25"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, #05A7D4 0%, transparent 70%)' }}
      />

      <Container className="relative z-10">
        {/* ── Section Header ── */}
        <FadeUp className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200/80 text-xs font-semibold text-[#ED396D] tracking-widest uppercase mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#05A7D4]" />
            <span>Why Choose Us</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900 mb-5 text-balance">
            {heading ? (
              heading
            ) : (
              <>
                Why Ambitious Brands Partner With{' '}
                <span className="bg-gradient-to-r from-[#ED396D] via-[#05A7D4] to-[#037C9E] bg-clip-text text-transparent">
                  ABL BusinessTech
                </span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal text-pretty">
            {displayDescription}
          </p>
        </FadeUp>

        {/* ── Feature Cards Grid ── */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayValues.slice(0, 6).map((value, index) => {
            const cardCfg = valueCards[index % valueCards.length]
            const IconComponent = cardCfg.icon

            return (
              <StaggerItem key={value._id}>
                <motion.div
                  className="group relative h-full rounded-2xl bg-white border border-slate-200/80 p-7 hover:border-[#05A7D4]/30 hover:shadow-xl hover:shadow-[#05A7D4]/5 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                  whileHover={shouldReduce ? {} : {
                    y: -6,
                    transition: { type: 'spring', stiffness: 350, damping: 25 },
                  }}
                  aria-label={value.title}
                >
                  {/* Subtle top hover gradient line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ED396D] to-[#05A7D4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Watermark Number */}
                  <span
                    className="absolute top-4 right-5 text-5xl font-extrabold leading-none select-none pointer-events-none text-slate-100 group-hover:text-slate-200/60 transition-colors duration-300"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div>
                    {/* Icon Container */}
                    <div
                      className="w-13 h-13 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105"
                      style={{ background: cardCfg.bg }}
                    >
                      <IconComponent
                        className="w-6 h-6 transition-transform duration-300"
                        style={{ color: cardCfg.color }}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2.5 leading-snug group-hover:text-[#05A7D4] transition-colors duration-200">
                      {value.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-normal">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* ── Minimalist Bottom Trust Banner ── */}
        <FadeUp className="mt-14 rounded-2xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#ED396D]/10 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-[#ED396D]" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Proven Technical Excellence & Guarantee</p>
              <p className="text-xs text-slate-500">Delivering enterprise software standards with transparent governance.</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-semibold text-slate-600 shrink-0">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#05A7D4]" /> 100% On-Time Delivery</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#ED396D]" /> Dedicated Agile Team</span>
          </div>
        </FadeUp>
      </Container>
    </section>
  )
}

