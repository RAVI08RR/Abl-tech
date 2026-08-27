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
  Zap,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/MotionSection'
import type { Industry } from '@/types'

interface IndustriesGridProps {
  heading?: string
  description?: string
  industries?: Industry[]
}

// Gradient pairs for each industry card (index-based)
const cardGradients = [
  { from: '#E3164F', to: '#FF6B9D' },
  { from: '#008BCB', to: '#00C4FF' },
  { from: '#7C3AED', to: '#A78BFA' },
  { from: '#059669', to: '#34D399' },
  { from: '#D97706', to: '#FCD34D' },
  { from: '#DC2626', to: '#F87171' },
  { from: '#0891B2', to: '#67E8F9' },
  { from: '#E3164F', to: '#008BCB' },
]

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
  { _id: '1', name: 'Retail & E-commerce', description: 'Personalized commerce experiences that drive conversion and loyalty.', icon: '🛍️', slug: { current: 'retail-ecommerce' }, featured: true },
  { _id: '2', name: 'Healthcare & Life Sciences', description: 'Secure, compliant platforms for patient care and clinical operations.', icon: '🏥', slug: { current: 'healthcare' }, featured: true },
  { _id: '3', name: 'Financial Services', description: 'Fintech solutions, digital banking, and regulatory compliance systems.', icon: '💰', slug: { current: 'financial-services' }, featured: true },
  { _id: '4', name: 'Education & EdTech', description: 'Engaging learning platforms that scale from startup to enterprise.', icon: '🎓', slug: { current: 'education' }, featured: true },
  { _id: '5', name: 'Media & Entertainment', description: 'Content delivery, streaming, and audience engagement platforms.', icon: '🎬', slug: { current: 'media-entertainment' }, featured: true },
  { _id: '6', name: 'Manufacturing & Industry 4.0', description: 'IoT integration, supply chain visibility, and predictive maintenance.', icon: '🏭', slug: { current: 'manufacturing' }, featured: true },
  { _id: '7', name: 'Logistics & Supply Chain', description: 'Real-time tracking, route optimization, and warehouse automation.', icon: '🚚', slug: { current: 'logistics' }, featured: true },
  { _id: '8', name: 'Startups & Scale-ups', description: 'Speed-to-market engineering with scalable architecture from day one.', icon: '🚀', slug: { current: 'startups' }, featured: true },
] as Industry[]

export function IndustriesGrid({ heading, description, industries }: IndustriesGridProps) {
  const displayIndustries = industries?.length ? industries : defaultIndustries
  const displayHeading = heading || 'Technology Built Around Your Industry'
  const displayDescription = description || 'We bring deep domain knowledge across industries, delivering technology solutions that solve real business challenges.'

  const shouldReduce = useReducedMotion()

  return (
    <section className="relative section-padding overflow-hidden bg-slate-900" aria-label="Industries we serve" style={{ backgroundImage: `url('/industries.png')`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      
      <Container className="relative z-10">
        <FadeUp className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="Industries"
            title={displayHeading}
            description={displayDescription}
            light={true}
          />
          <Button href="/industries" variant="white" className="shrink-0 self-start lg:self-auto">
            All Industries <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Button>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayIndustries.slice(0, 8).map((industry, index) => {
            const IconComponent =
              industryIconMap[industry.slug.current] ||
              iconsByOrder[index] ||
              Building2
            const grad = cardGradients[index % cardGradients.length]

            return (
              <StaggerItem key={industry._id}>
                <motion.div
                  className="h-full rounded-2xl overflow-hidden"
                  whileHover={shouldReduce ? {} : { y: -4, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                >
                  <Link
                    href={`/industries/${industry.slug.current}`}
                    className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-white border border-gray-100 h-full hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    aria-label={`${industry.name} industry solutions`}
                  >
                    {/* Gradient top bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
                      style={{ background: `linear-gradient(90deg, ${grad.from}, ${grad.to})` }}
                      aria-hidden="true"
                    />

                    {/* Icon container */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${grad.from}15, ${grad.to}25)`,
                      }}
                    >
                      <IconComponent
                        className="w-6 h-6 transition-colors duration-300 group-hover:scale-110"
                        style={{ color: grad.from }}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-[#111111] mb-1.5 group-hover:text-[#E3164F] transition-colors leading-snug">
                        {industry.name}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{industry.description}</p>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-1 text-xs font-semibold text-[#E3164F] opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                      Explore <ArrowRight className="w-3 h-3" aria-hidden="true" />
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

