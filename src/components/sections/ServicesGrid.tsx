'use client'

import Link from 'next/link'
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

// Per-card gradient accent
const cardAccents = [
  { from: '#E3164F', to: '#FF6B9D' },
  { from: '#008BCB', to: '#00C4FF' },
  { from: '#7C3AED', to: '#A78BFA' },
  { from: '#059669', to: '#34D399' },
  { from: '#D97706', to: '#F59E0B' },
  { from: '#0891B2', to: '#22D3EE' },
  { from: '#E3164F', to: '#008BCB' },
  { from: '#6366F1', to: '#8B5CF6' },
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
  const displayServices = services?.length ? services : defaultServices
  const displayHeading = heading || 'Technology Expertise That Creates Business Impact'
  const displayDescription = description || 'We bring deep technical expertise across the full software stack — from strategy and design through engineering, delivery, and ongoing optimization.'

  return (
    <section className="relative section-padding overflow-hidden bg-white" aria-label="Our services">
      {/* Subtle grid bg */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Top corner glow */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[100px]"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, rgba(227,22,79,0.06) 0%, transparent 70%)' }}
      />

      <Container className="relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, #E3164F)' }} />
              <span
                className="text-xs font-bold tracking-[0.18em] uppercase"
                style={{
                  background: 'linear-gradient(90deg, #E3164F, #008BCB)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                What We Do
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-[#111111] text-balance">
              {displayHeading}
            </h2>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed text-pretty">{displayDescription}</p>
          </div>
          <Button href="/services" variant="outline" className="shrink-0 self-start lg:self-auto">
            View All Services <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayServices.slice(0, 8).map((service, index) => {
            const IconComponent = serviceIcons[service.slug.current] || iconsByOrder[index] || Wrench
            const accent = cardAccents[index % cardAccents.length]

            return (
              <Link
                key={service._id}
                href={`/services/${service.slug.current}`}
                className="group relative bg-white rounded-2xl p-6 overflow-hidden transition-all duration-300"
                style={{
                  border: '1px solid rgba(0,0,0,0.07)',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = `${accent.from}30`
                  el.style.boxShadow = `0 16px 48px ${accent.from}18, 0 2px 8px rgba(0,0,0,0.06)`
                  el.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(0,0,0,0.07)'
                  el.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'
                  el.style.transform = 'translateY(0)'
                }}
                aria-label={`Learn about ${service.title}`}
              >
                {/* Top gradient bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }}
                  aria-hidden="true"
                />

                {/* Number watermark */}
                <span
                  className="absolute top-3 right-4 text-6xl font-black leading-none select-none pointer-events-none transition-colors duration-300"
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
                      className="w-6 h-6 transition-all duration-300"
                      style={{ color: accent.from }}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-[#111111] mb-2 group-hover:text-[#E3164F] transition-colors duration-200 relative z-10">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed relative z-10">
                  {service.shortDescription}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-1 mt-4 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0 relative z-10"
                  style={{ color: accent.from }}
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
