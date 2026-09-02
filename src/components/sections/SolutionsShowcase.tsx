'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  BrainCircuit,
  Bot,
  Car,
  HeartPulse,
  GraduationCap,
  UtensilsCrossed,
  Truck,
  Wallet,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/MotionSection'

/* ── Solution data shared with the full page ─────────────────── */
export const FEATURED_SOLUTIONS = [
  {
    id: 'ai-workflow',
    icon: BrainCircuit,
    category: 'AI & Automation',
    title: 'AI Workflow Automation',
    short: 'Automate repetitive processes, connect business tools, and build intelligent workflows that improve productivity.',
    tags: ['AI', 'Automation', 'SaaS'],
    color: '#05A7D4',
  },
  {
    id: 'ai-chatbot',
    icon: Bot,
    category: 'AI & Automation',
    title: 'AI Chatbot Development',
    short: 'Build intelligent conversational experiences for customer support, lead qualification, and business communication.',
    tags: ['AI', 'Real-Time', 'Mobile'],
    color: '#05A7D4',
  },
  {
    id: 'mobility',
    icon: Car,
    category: 'Mobility',
    title: 'Mobility & Taxi Platforms',
    short: 'Scalable taxi, ride-sharing, vehicle rental, carpooling, and mobility applications for modern transportation.',
    tags: ['Mobile', 'Real-Time', 'Cloud'],
    color: '#05A7D4',
  },
  {
    id: 'healthcare',
    icon: HeartPulse,
    category: 'Healthcare',
    title: 'Healthcare Software',
    short: 'Connected hospital and healthcare management platforms for smarter operations and better patient experiences.',
    tags: ['Enterprise', 'Cloud', 'Analytics'],
    color: '#05A7D4',
  },
  {
    id: 'education',
    icon: GraduationCap,
    category: 'Education',
    title: 'Education & LMS',
    short: 'School management and digital learning platforms for institutions, training providers, and enterprises.',
    tags: ['SaaS', 'Mobile', 'Cloud'],
    color: '#05A7D4',
  },
  {
    id: 'hospitality',
    icon: UtensilsCrossed,
    category: 'Hospitality',
    title: 'Hospitality & Restaurant',
    short: 'Modern hotel, restaurant, reservation, POS, billing, inventory, and operations management platforms.',
    tags: ['Enterprise', 'Real-Time', 'Analytics'],
    color: '#05A7D4',
  },
  {
    id: 'delivery',
    icon: Truck,
    category: 'Delivery',
    title: 'Delivery & Logistics',
    short: 'Food delivery, courier, fleet, driver tracking, and on-demand delivery solutions built for scale.',
    tags: ['Mobile', 'Real-Time', 'Cloud'],
    color: '#05A7D4',
  },
  {
    id: 'fintech',
    icon: Wallet,
    category: 'Fintech',
    title: 'Fintech & Digital Payments',
    short: 'Secure wallet, payment, transaction, and fintech platforms built for modern digital businesses.',
    tags: ['Payments', 'Security', 'SaaS'],
    color: '#05A7D4',
  },
]

/* ── Individual compact solution card ───────────────────────── */
function SolutionCard({ sol, index }: { sol: typeof FEATURED_SOLUTIONS[0]; index: number }) {
  const shouldReduce = useReducedMotion()
  const Icon = sol.icon

  return (
    <StaggerItem>
      <motion.div
        whileHover={shouldReduce ? {} : { y: -4, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
        className="group relative bg-white rounded-2xl p-5 h-full cursor-pointer hover:border-[#05A7D4]/30 hover:shadow-lg transition-all duration-300"
        style={{ border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
        aria-label={sol.title}
      >
        {/* watermark number */}
        <span
          className="absolute top-3 right-4 text-5xl font-black leading-none select-none pointer-events-none"
          style={{ color: 'rgba(0,0,0,0.03)' }}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* icon */}
        <div className="mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
            style={{ background: 'rgba(5,167,212,0.08)' }}
          >
            <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 text-[#05A7D4]" strokeWidth={1.75} aria-hidden="true" />
          </div>
        </div>

        {/* category pill */}
        <span className="text-[10px] font-bold uppercase tracking-wider mb-1.5 block text-[#05A7D4]">
          {sol.category}
        </span>

        <h3 className="text-sm font-bold text-[#111111] mb-2 leading-snug group-hover:text-[#05A7D4] transition-colors duration-200">
          {sol.title}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{sol.short}</p>

        {/* hover arrow */}
        <div className="flex items-center gap-1 mt-3 text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 text-[#05A7D4]">
          Learn more <ArrowRight className="w-3 h-3" aria-hidden="true" />
        </div>
      </motion.div>
    </StaggerItem>
  )
}

/* ── Home-page compact section ───────────────────────────────── */
export function SolutionsShowcase() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24" aria-label="Business solutions overview">
      {/* top hairline accent */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-px"
        aria-hidden="true"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(5,167,212,0.2), transparent)' }}
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 lg:gap-14">

          {/* ── Left column ── */}
          <FadeUp className="flex flex-col justify-center gap-5">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-8 bg-[#05A7D4]" />
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#05A7D4]">
                Business Solutions
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1] text-[#111111]">
              Custom Solutions for{' '}
              <span className="text-[#05A7D4]">
                Every Business
              </span>
            </h2>

            <p className="text-sm text-gray-500 leading-relaxed">
              Browse innovative AI products, software platforms, mobile applications, and digital solutions tailored to solve real business challenges.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button href="/solutions" variant="primary" size="sm">
                Explore All Solutions <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#111111] hover:text-[#05A7D4] transition-colors duration-200 group"
              >
                Start Your Project
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>

            {/* trust micro-line */}
            <p className="text-xs text-gray-400 pt-1">
              <span className="font-semibold text-gray-600">20+ Digital Solutions</span>
              {' · '}AI · Web · Mobile · Enterprise
            </p>
          </FadeUp>

          {/* ── Right grid ── */}
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {FEATURED_SOLUTIONS.map((sol, i) => (
              <SolutionCard key={sol.id} sol={sol} index={i} />
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  )
}
