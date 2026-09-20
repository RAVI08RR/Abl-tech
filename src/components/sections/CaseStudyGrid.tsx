'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/MotionSection'
import type { CaseStudy } from '@/types'

interface CaseStudyGridProps {
  heading?: string
  description?: string
  caseStudies?: CaseStudy[]
}

const defaultCaseStudies: CaseStudy[] = [
  {
    _id: '1',
    title: 'AI-Powered E-Commerce Platform',
    slug: { current: 'ai-ecommerce-platform' },
    client: 'RetailVision Enterprise',
    shortDescription: 'Built a scalable AI-driven commerce engine with personalization, real-time inventory, and multi-channel management.',
    featured: true,
    industry: { _id: 'i1', name: 'Retail & E-commerce', slug: { current: 'retail-ecommerce' } },
    service: { _id: 's1', title: 'AI & Machine Learning', slug: { current: 'ai-machine-learning' } },
    metrics: [
      { value: '42%', metric: 'Increase in Conversion', description: 'Year-over-year' },
      { value: '3x', metric: 'Faster Processing', description: 'Order processing speed' },
    ],
    bannerImage: '/E-Commerce-banner.png',
  },
  {
    _id: '2',
    title: 'Enterprise Digital Banking Suite',
    slug: { current: 'enterprise-digital-banking' },
    client: 'FinEdge Capital',
    shortDescription: 'Modernized a legacy core banking system with real-time payments, fraud detection AI, and mobile-first UX.',
    featured: true,
    industry: { _id: 'i2', name: 'Financial Services', slug: { current: 'financial-services' } },
    service: { _id: 's2', title: 'Digital Transformation', slug: { current: 'digital-transformation' } },
    metrics: [
      { value: '60%', metric: 'Reduction in Ops Cost', description: 'Automated workflows' },
      { value: '99.9%', metric: 'Uptime SLA', description: 'Maintained since launch' },
    ],
    bannerImage: '/Digital-Banking.png',
  },
  {
    _id: '3',
    title: 'Smart Healthcare Data Platform',
    slug: { current: 'smart-healthcare-platform' },
    client: 'HealthBridge Systems',
    shortDescription: 'Unified fragmented patient data across 12 hospitals with HIPAA-compliant cloud infrastructure and ML diagnostics.',
    featured: true,
    industry: { _id: 'i3', name: 'Healthcare', slug: { current: 'healthcare' } },
    service: { _id: 's3', title: 'Cloud Solutions', slug: { current: 'cloud-solutions' } },
    metrics: [
      { value: '85%', metric: 'Faster Diagnosis', description: 'AI-assisted imaging' },
      { value: '12', metric: 'Hospitals Connected', description: 'Seamless data sharing' },
    ],
    bannerImage: '/Healthcare-ab.png',
  },
] as (CaseStudy & { bannerImage?: string })[]

export function CaseStudyGrid({ heading, description, caseStudies }: CaseStudyGridProps) {
  const displayStudies = caseStudies?.length ? caseStudies : defaultCaseStudies
  const displayHeading = heading || 'Real Problems. Measurable Outcomes.'
  const displayDescription = description || 'We partner with ambitious businesses to solve complex technology challenges and deliver transformational digital results.'

  const shouldReduce = useReducedMotion()

  return (
    <section className="relative py-24 lg:py-32 bg-slate-950 text-white overflow-hidden" aria-label="Featured case studies">
      {/* ── Background Aesthetics ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div
        className="pointer-events-none absolute top-1/3 -left-40 w-96 h-96 rounded-full blur-[140px] opacity-20"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, #05A7D4 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 right-0 w-96 h-96 rounded-full blur-[140px] opacity-20"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, #ED396D 0%, transparent 70%)' }}
      />

      <Container className="relative z-10">
        {/* ── Section Header ── */}
        <FadeUp className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-[#05A7D4] tracking-widest uppercase mb-4 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#ED396D]" />
              <span>Our Work</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white text-balance">
              {displayHeading}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300/90 leading-relaxed text-pretty font-normal">
              {displayDescription}
            </p>
          </div>

          <Button
            href="/work"
            variant="outline"
            className="shrink-0 self-start lg:self-auto border-white/15 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            View All Work <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
          </Button>
        </FadeUp>

        {/* ── Case Study Cards ── */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {displayStudies.slice(0, 3).map((study) => {
            const bannerImage = (study as any).bannerImage as string | undefined

            return (
              <StaggerItem key={study._id}>
                <motion.div
                  className="group relative h-full rounded-2xl bg-slate-900/60 border border-white/10 hover:border-[#05A7D4]/40 overflow-hidden flex flex-col justify-between transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#05A7D4]/10"
                  whileHover={shouldReduce ? {} : {
                    y: -6,
                    transition: { type: 'spring', stiffness: 350, damping: 25 },
                  }}
                >
                  <Link
                    href={`/work/${study.slug.current}`}
                    className="flex flex-col h-full justify-between p-7 relative z-10"
                    aria-label={`Case study: ${study.title}`}
                  >
                    {/* Background Banner Image with Smooth Overlay */}
                    {bannerImage ? (
                      <div className="absolute inset-0 z-0 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                          style={{ backgroundImage: `url('${bannerImage}')` }}
                          aria-hidden="true"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/60 transition-opacity duration-300 group-hover:opacity-90"
                          aria-hidden="true"
                        />
                      </div>
                    ) : (
                      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 to-slate-950" />
                    )}

                    {/* Top Content */}
                    <div className="relative z-10">
                      {/* Industry pill & Link Icon */}
                      <div className="flex items-center justify-between gap-3 mb-6">
                        {study.industry ? (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md text-white border border-white/15">
                            {study.industry.name}
                          </span>
                        ) : (
                          <span />
                        )}
                        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#05A7D4] group-hover:border-[#05A7D4] transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white leading-snug mb-2 group-hover:text-[#05A7D4] transition-colors duration-200">
                        {study.title}
                      </h3>

                      {study.client && (
                        <p className="text-xs font-medium text-slate-400 mb-3 tracking-wide">
                          Client: {study.client}
                        </p>
                      )}

                      <p className="text-sm text-slate-300/90 leading-relaxed font-normal line-clamp-3">
                        {study.shortDescription}
                      </p>
                    </div>

                    {/* Bottom Metrics & Meta */}
                    <div className="relative z-10 mt-8">
                      {study.metrics && study.metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-4 pt-5 border-t border-white/15">
                          {study.metrics.slice(0, 2).map((metric) => (
                            <div key={metric.metric}>
                              <p className="text-2xl font-black bg-gradient-to-r from-[#ED396D] to-[#05A7D4] bg-clip-text text-transparent">
                                {metric.value}
                              </p>
                              <p className="text-xs text-slate-400 font-medium mt-0.5 leading-snug">
                                {metric.metric}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {study.service && (
                        <div className="flex items-center gap-2 mt-4 text-xs text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#05A7D4]" />
                          <span>{study.service.title}</span>
                        </div>
                      )}
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


