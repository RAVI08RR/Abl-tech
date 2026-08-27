'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Code2,
  BrainCircuit,
  RefreshCcw,
  Globe,
  Smartphone,
  Cloud,
  Cpu,
  Layers,
  Wrench,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/MotionSection'
import type { Service } from '@/types'

interface ServicesGridProps {
  heading?: string
  description?: string
  services?: Service[]
}

const serviceIcons: Record<string, React.ElementType> = {
  'software-development': Code2,
  'ai-machine-learning': BrainCircuit,
  'digital-transformation': RefreshCcw,
  'web-development': Globe,
  'mobile-app-development': Smartphone,
  'cloud-solutions': Cloud,
  'product-engineering': Cpu,
  'ui-ux-design': Layers,
}

const iconsByOrder: React.ElementType[] = [Code2, BrainCircuit, RefreshCcw, Globe, Smartphone, Cloud, Cpu, Layers]

// Unified card accent using brand pink (#ED396D) and teal (#037C9E) gradient
const cardAccents = [
  { from: '#ED396D', to: '#037C9E' },
  { from: '#ED396D', to: '#037C9E' },
  { from: '#ED396D', to: '#037C9E' },
  { from: '#ED396D', to: '#037C9E' },
  { from: '#ED396D', to: '#037C9E' },
  { from: '#ED396D', to: '#037C9E' },
  { from: '#ED396D', to: '#037C9E' },
  { from: '#ED396D', to: '#037C9E' },
]

const defaultServices = [
  { _id: '1', title: 'Software Development', shortDescription: 'Custom enterprise software engineered for scale, reliability, and performance.', icon: '💻', slug: { current: 'software-development' }, featured: true, order: 1 },
  { _id: '2', title: 'AI & Machine Learning', shortDescription: 'Intelligent automation and data-driven insights that transform decision making.', icon: '🤖', slug: { current: 'ai-machine-learning' }, featured: true, order: 2 },
  { _id: '3', title: 'Digital Transformation', shortDescription: 'End-to-end digitization strategies that modernize operations and unlock growth.', icon: '🔄', slug: { current: 'digital-transformation' }, featured: true, order: 3 },
  { _id: '4', title: 'Web Development', shortDescription: 'High-performance web applications built with modern frameworks and best practices.', icon: '🌐', slug: { current: 'web-development' }, featured: true, order: 4 },
  { _id: '5', title: 'Mobile Development', shortDescription: 'Native and cross-platform mobile apps that deliver exceptional user experiences.', icon: '📱', slug: { current: 'mobile-app-development' }, featured: true, order: 5 },
  { _id: '6', title: 'Cloud Engineering', shortDescription: 'Scalable cloud infrastructure on AWS, Azure, and GCP for modern workloads.', icon: '☁️', slug: { current: 'cloud-solutions' }, featured: true, order: 6 },
  { _id: '7', title: 'Product Engineering', shortDescription: 'Full-lifecycle product development from ideation through launch and scale.', icon: '⚙️', slug: { current: 'product-engineering' }, featured: true, order: 7 },
  { _id: '8', title: 'UI/UX Design', shortDescription: 'User-centered design systems that balance aesthetics with conversion performance.', icon: '🎨', slug: { current: 'ui-ux-design' }, featured: true, order: 8 },
] as Service[]

export function ServicesGrid({ heading, description, services }: ServicesGridProps) {
  const shouldReduce = useReducedMotion()
  const displayServices = services?.length ? services : defaultServices
  const displayDescription = description || 'We bring deep technical expertise across the full software stack — from strategy and design through engineering, delivery, and ongoing optimization.'

  return (
    <section className="relative section-padding overflow-hidden bg-slate-900" aria-label="Our services" style={{ backgroundImage: `url('/Stop-drowning-abl.webp')`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      {/* Subtle grid bg */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Top corner glow */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[100px]"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, rgba(237,57,109,0.06) 0%, transparent 70%)' }}
      />

      <Container className="relative z-10">
        {/* Header */}
        <FadeUp className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, #ED396D)' }} />
              <span
                className="text-xs font-bold tracking-[0.18em] uppercase"
                style={{
                  background: 'linear-gradient(90deg, #ED396D, #037C9E)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                What We Do
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-white text-balance">
              {heading ? (
                heading
              ) : (
                <>
                  Technology Expertise That{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #ED396D 0%, #037C9E 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Creates Business Impact
                  </span>
                </>
              )}
            </h2>
            <p className="mt-4 text-lg text-gray-200 leading-relaxed text-pretty">{displayDescription}</p>
          </div>
          <Button href="/services" variant="white" className="shrink-0 self-start lg:self-auto">
            View All Services <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Button>
        </FadeUp>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayServices.slice(0, 8).map((service, index) => {
            const IconComponent = serviceIcons[service.slug.current] || iconsByOrder[index] || Wrench
            const accent = cardAccents[index % cardAccents.length]

            return (
              <StaggerItem key={service._id}>
                <motion.div
                  whileHover={shouldReduce ? {} : { y: -4, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                  style={{
                    border: '1px solid rgba(0,0,0,0.07)',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  }}
                  className="group relative bg-white rounded-2xl overflow-hidden h-full hover:border-[#037C9E]/30 hover:shadow-lg transition-all duration-300"
                >
                  <Link
                    href={`/services/${service.slug.current}`}
                    className="block p-6 h-full relative"
                    aria-label={`Learn about ${service.title}`}
                  >
                    {/* Number watermark */}
                    <span
                      className="absolute top-3 right-4 text-6xl font-black leading-none select-none pointer-events-none group-hover:opacity-[0.07] transition-opacity duration-300"
                      style={{ color: 'rgba(0,0,0,0.04)' }}
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Icon */}
                    <div className="relative z-10 mb-5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                        style={{ background: `linear-gradient(135deg, ${accent.from}15, ${accent.to}25)` }}
                      >
                        <IconComponent
                          className="w-6 h-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                          style={{ color: accent.from }}
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-base font-bold text-[#111111] mb-2 group-hover:text-[#ED396D] transition-colors duration-200 relative z-10">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed relative z-10">
                      {service.shortDescription}
                    </p>

                    {/* CTA */}
                    <div
                      className="flex items-center gap-1 mt-4 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0 relative z-10"
                      style={{ color: accent.from }}
                    >
                      Learn more <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
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

