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
  Sparkles,
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

const defaultServices = [
  { _id: '1', title: 'Software Development', shortDescription: 'Custom enterprise software engineered for scale, reliability, and peak performance.', icon: '💻', slug: { current: 'software-development' }, featured: true, order: 1 },
  { _id: '2', title: 'AI & Machine Learning', shortDescription: 'Intelligent automation and data-driven models that transform decision making.', icon: '🤖', slug: { current: 'ai-machine-learning' }, featured: true, order: 2 },
  { _id: '3', title: 'Digital Transformation', shortDescription: 'End-to-end modernization strategies that digitize operations and unlock growth.', icon: '🔄', slug: { current: 'digital-transformation' }, featured: true, order: 3 },
  { _id: '4', title: 'Web Development', shortDescription: 'High-performance web applications built with modern frameworks and best practices.', icon: '🌐', slug: { current: 'web-development' }, featured: true, order: 4 },
  { _id: '5', title: 'Mobile Development', shortDescription: 'Native and cross-platform mobile apps that deliver exceptional user experiences.', icon: '📱', slug: { current: 'mobile-app-development' }, featured: true, order: 5 },
  { _id: '6', title: 'Cloud Engineering', shortDescription: 'Scalable cloud architecture on AWS, Azure, and GCP for mission-critical workloads.', icon: '☁️', slug: { current: 'cloud-solutions' }, featured: true, order: 6 },
  { _id: '7', title: 'Product Engineering', shortDescription: 'Full-lifecycle digital product development from ideation through scale.', icon: '⚙️', slug: { current: 'product-engineering' }, featured: true, order: 7 },
  { _id: '8', title: 'UI/UX Design', shortDescription: 'User-centered design systems balancing modern aesthetics with conversion performance.', icon: '🎨', slug: { current: 'ui-ux-design' }, featured: true, order: 8 },
] as Service[]

export function ServicesGrid({ heading, description, services }: ServicesGridProps) {
  const shouldReduce = useReducedMotion()
  const displayServices = services?.length ? services : defaultServices
  const displayDescription = description || 'We bring deep technical expertise across the full software stack — from strategy and design to cloud engineering and deployment.'

  return (
    <section className="relative py-24 lg:py-32 bg-[#090D16] overflow-hidden text-white" aria-label="Our services">
      {/* ── Background Aesthetics ── */}
      {/* Micro Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Soft Ambient Light Blobs */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, #ED396D 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, #05A7D4 0%, transparent 70%)' }}
      />

      <Container className="relative z-10">
        {/* ── Section Header ── */}
        <FadeUp className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-[#05A7D4] tracking-widest uppercase mb-4 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#ED396D]" />
              <span>What We Do</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white text-balance">
              {heading ? (
                heading
              ) : (
                <>
                  Technology Expertise That{' '}
                  <span className="bg-gradient-to-r from-[#ED396D] via-[#05A7D4] to-[#037C9E] bg-clip-text text-transparent">
                    Drives Business Growth
                  </span>
                </>
              )}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300/90 leading-relaxed text-pretty font-normal">
              {displayDescription}
            </p>
          </div>

          <Button
            href="/services"
            variant="outline"
            className="shrink-0 self-start lg:self-auto border-white/15 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            View All Services <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
          </Button>
        </FadeUp>

        {/* ── Services Grid ── */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayServices.slice(0, 8).map((service, index) => {
            const IconComponent = serviceIcons[service.slug.current] || iconsByOrder[index] || Wrench

            return (
              <StaggerItem key={service._id}>
                <motion.div
                  whileHover={shouldReduce ? {} : { y: -6, transition: { type: 'spring', stiffness: 350, damping: 25 } }}
                  className="group relative h-full rounded-2xl bg-slate-900/50 border border-white/[0.08] hover:border-[#05A7D4]/40 hover:bg-slate-900/80 backdrop-blur-sm p-6 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#05A7D4]/5 overflow-hidden"
                >
                  {/* Subtle hover gradient bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ED396D] to-[#05A7D4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Watermark Number */}
                  <span
                    className="absolute top-4 right-5 text-5xl font-extrabold leading-none pointer-events-none select-none text-white/[0.04] group-hover:text-white/[0.08] transition-colors duration-300"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <Link
                    href={`/services/${service.slug.current}`}
                    className="flex flex-col h-full justify-between"
                    aria-label={`Learn about ${service.title}`}
                  >
                    <div>
                      {/* Icon Container */}
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 group-hover:border-[#05A7D4]/30 group-hover:from-[#ED396D]/10 group-hover:to-[#05A7D4]/10 transition-all duration-300 mb-5">
                        <IconComponent
                          className="w-6 h-6 text-[#05A7D4] group-hover:text-[#ED396D] group-hover:scale-110 transition-all duration-300"
                          aria-hidden="true"
                        />
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#05A7D4] transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed font-normal">
                        {service.shortDescription}
                      </p>
                    </div>

                    {/* CTA Link */}
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#05A7D4] pt-5 mt-4 border-t border-white/[0.05] group-hover:text-white transition-colors duration-200">
                      <span>Explore Service</span>
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


