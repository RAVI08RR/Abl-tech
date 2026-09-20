'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  ShoppingCart,
  HeartPulse,
  BadgeDollarSign,
  GraduationCap,
  Clapperboard,
  Factory,
  Truck,
  Rocket,
  Building2,
  Sparkles,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/MotionSection'
import type { Industry } from '@/types'

interface IndustriesGridProps {
  heading?: string
  description?: string
  industries?: Industry[]
}

const industryIconMap: Record<string, React.ElementType> = {
  'retail-ecommerce': ShoppingCart,
  healthcare: HeartPulse,
  'financial-services': BadgeDollarSign,
  education: GraduationCap,
  'media-entertainment': Clapperboard,
  manufacturing: Factory,
  logistics: Truck,
  startups: Rocket,
}

const iconsByOrder: React.ElementType[] = [
  ShoppingCart,
  HeartPulse,
  BadgeDollarSign,
  GraduationCap,
  Clapperboard,
  Factory,
  Truck,
  Rocket,
]

const defaultIndustries = [
  { _id: '1', name: 'Retail & E-commerce', description: 'Personalized commerce platforms driving conversion and retention.', icon: '🛍️', slug: { current: 'retail-ecommerce' }, featured: true },
  { _id: '2', name: 'Healthcare & Life Sciences', description: 'Secure, compliant platforms for patient care and clinical operations.', icon: '🏥', slug: { current: 'healthcare' }, featured: true },
  { _id: '3', name: 'Financial Services', description: 'Fintech solutions, core digital banking, and regulatory platforms.', icon: '💰', slug: { current: 'financial-services' }, featured: true },
  { _id: '4', name: 'Education & EdTech', description: 'Interactive learning systems scaling from startup to enterprise.', icon: '🎓', slug: { current: 'education' }, featured: true },
  { _id: '5', name: 'Media & Entertainment', description: 'Content distribution, high-bandwidth streaming, and engagement engines.', icon: '🎬', slug: { current: 'media-entertainment' }, featured: true },
  { _id: '6', name: 'Manufacturing & Industry 4.0', description: 'Smart IoT integration, supply chain intelligence, and automation.', icon: '🏭', slug: { current: 'manufacturing' }, featured: true },
  { _id: '7', name: 'Logistics & Supply Chain', description: 'Real-time telemetry, routing optimization, and fleet operations.', icon: '🚚', slug: { current: 'logistics' }, featured: true },
  { _id: '8', name: 'Startups & Scale-ups', description: 'Rapid MVP engineering with cloud-native scalability built-in.', icon: '🚀', slug: { current: 'startups' }, featured: true },
] as Industry[]

export function IndustriesGrid({ heading, description, industries }: IndustriesGridProps) {
  const displayIndustries = industries?.length ? industries : defaultIndustries
  const displayHeading = heading || 'Domain Expertise Across Key Industries'
  const displayDescription = description || 'We combine deep sector knowledge with engineering expertise to solve complex domain-specific challenges.'

  const shouldReduce = useReducedMotion()

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden" aria-label="Industries we serve">
      {/* ── Background Aesthetics ── */}
      {/* Dot matrix pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Ambient gradient glows */}
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, #ED396D 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, #05A7D4 0%, transparent 70%)' }}
      />

      <Container className="relative z-10">
        {/* ── Section Header ── */}
        <FadeUp className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-semibold text-[#05A7D4] tracking-widest uppercase mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#ED396D]" />
              <span>Industries</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900 text-balance">
              {displayHeading}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal text-pretty">
              {displayDescription}
            </p>
          </div>

          <Button
            href="/industries"
            variant="outline"
            className="shrink-0 self-start lg:self-auto border-slate-200 text-slate-900 hover:bg-slate-50 transition-all duration-300"
          >
            Explore All Industries <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
          </Button>
        </FadeUp>

        {/* ── Industry Cards Grid ── */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayIndustries.slice(0, 8).map((industry, index) => {
            const IconComponent =
              industryIconMap[industry.slug.current] ||
              iconsByOrder[index] ||
              Building2

            return (
              <StaggerItem key={industry._id}>
                <motion.div
                  whileHover={shouldReduce ? {} : { y: -6, transition: { type: 'spring', stiffness: 350, damping: 25 } }}
                  className="group relative h-full rounded-2xl bg-white border border-slate-200/80 p-6 hover:border-[#05A7D4]/30 hover:shadow-xl hover:shadow-[#05A7D4]/5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle top hover gradient line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ED396D] to-[#05A7D4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <Link
                    href={`/industries/${industry.slug.current}`}
                    className="flex flex-col h-full justify-between"
                    aria-label={`${industry.name} industry solutions`}
                  >
                    <div>
                      {/* Icon container */}
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#ED396D]/8 to-[#05A7D4]/12 border border-slate-200/60 group-hover:border-[#05A7D4]/30 transition-all duration-300 mb-5 group-hover:scale-105">
                        <IconComponent
                          className="w-6 h-6 text-[#05A7D4] group-hover:text-[#ED396D] transition-colors duration-300"
                          aria-hidden="true"
                        />
                      </div>

                      {/* Content */}
                      <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#05A7D4] transition-colors duration-200">
                        {industry.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                        {industry.description}
                      </p>
                    </div>

                    {/* CTA Link */}
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#05A7D4] pt-5 mt-4 border-t border-slate-100 group-hover:text-slate-900 transition-colors duration-200">
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                    </div>
                  </Link>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </Container>
    </section>
  )
}


