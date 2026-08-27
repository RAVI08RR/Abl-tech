'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
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
    client: 'RetailVision Inc.',
    shortDescription: 'Built a scalable AI-driven commerce engine with personalization, real-time inventory, and multi-channel management.',
    featured: true,
    industry: { _id: 'i1', name: 'Retail & E-commerce', slug: { current: 'retail-ecommerce' } },
    service: { _id: 's1', title: 'AI & Machine Learning', slug: { current: 'ai-machine-learning' } },
    metrics: [
      { value: '42%', metric: 'Increase in Conversion', description: 'Year-over-year' },
      { value: '3x', metric: 'Faster Processing', description: 'Order processing speed' },
    ],
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
  },
]

const cardThemes = [
  { bg: 'linear-gradient(145deg, #061525 0%, #0A1F35 100%)', accent: '#05A7D4', accentTo: '#037C9E' },
  { bg: 'linear-gradient(145deg, #061525 0%, #0A1F35 100%)', accent: '#05A7D4', accentTo: '#037C9E' },
  { bg: 'linear-gradient(145deg, #061525 0%, #0A1F35 100%)', accent: '#05A7D4', accentTo: '#037C9E' },
]

export function CaseStudyGrid({ heading, description, caseStudies }: CaseStudyGridProps) {
  const displayStudies = caseStudies?.length ? caseStudies : defaultCaseStudies
  const displayHeading = heading || 'Real Problems. Measurable Outcomes.'
  const displayDescription = description || 'We partner with ambitious businesses to solve complex technology challenges and deliver results that matter.'

  const shouldReduce = useReducedMotion()

  return (
    <section className="relative section-padding overflow-hidden bg-white" aria-label="Featured case studies">
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-0 w-80 h-80 rounded-full blur-[100px]"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, rgba(5,167,212,0.06) 0%, transparent 70%)' }}
      />

      <Container className="relative z-10">
        {/* Header */}
        <FadeUp className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, #ED396D)' }} />
              <span
                className="text-xs font-bold tracking-[0.18em] uppercase"
                style={{
                  background: 'linear-gradient(90deg, #ED396D, #05A7D4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Our Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-[#111111] text-balance">
              {displayHeading}
            </h2>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed text-pretty">{displayDescription}</p>
          </div>
          <Button href="/work" variant="outline" className="shrink-0 self-start lg:self-auto">
            View All Work <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Button>
        </FadeUp>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {displayStudies.slice(0, 3).map((study, index) => {
            const theme = cardThemes[index % cardThemes.length]
            return (
              <StaggerItem key={study._id}>
                <motion.div
                  className="h-full rounded-3xl overflow-hidden"
                  whileHover={shouldReduce ? {} : {
                    y: -6,
                    boxShadow: `0 30px 70px ${theme.accent}25`,
                    transition: { type: 'spring', stiffness: 400, damping: 25 },
                  }}
                >
                  <Link
                    href={`/work/${study.slug.current}`}
                    className="group relative flex flex-col justify-between min-h-[460px] p-8 h-full transition-all duration-300"
                    style={{ background: theme.bg }}
                    aria-label={`Case study: ${study.title}`}
                  >
                    {/* Background radial accent */}
                    <div
                      className="absolute inset-0 opacity-[0.07] pointer-events-none transition-opacity duration-300 group-hover:opacity-[0.14]"
                      style={{ background: `radial-gradient(ellipse at 30% 70%, ${theme.accent}, transparent 60%)` }}
                      aria-hidden="true"
                    />

                    {/* Top border accent */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl"
                      style={{ background: `linear-gradient(90deg, ${theme.accent}, ${theme.accentTo})` }}
                      aria-hidden="true"
                    />

                    {/* Background hero image */}
                    {study.heroImage?.asset?.url && (
                      <Image
                        src={study.heroImage.asset.url}
                        alt={study.title}
                        fill
                        className="object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                      />
                    )}

                    {/* Top content */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div>
                          {study.industry && (
                            <span
                              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                              style={{ background: `${theme.accent}20`, color: theme.accentTo }}
                            >
                              {study.industry.name}
                            </span>
                          )}
                          <h3 className="text-xl font-bold text-white leading-tight">{study.title}</h3>
                          {study.client && (
                            <p className="text-sm text-gray-400 mt-1">{study.client}</p>
                          )}
                        </div>
                        <ExternalLink
                          className="w-5 h-5 text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-200 shrink-0 mt-1"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">{study.shortDescription}</p>
                    </div>

                    {/* Bottom metrics */}
                    <div className="relative z-10">
                      {study.metrics && study.metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                          {study.metrics.slice(0, 2).map((metric) => (
                            <div key={metric.metric}>
                              <p
                                className="text-2xl font-black"
                                style={{ color: theme.accentTo }}
                              >
                                {metric.value}
                              </p>
                              <p className="text-xs text-gray-400 mt-0.5 leading-snug">{metric.metric}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      {study.service && (
                        <div className="flex items-center gap-2 mt-5">
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: theme.accent }}
                            aria-hidden="true"
                          />
                          <span className="text-xs text-gray-400">
                            Service: <span className="text-gray-200 font-medium">{study.service.title}</span>
                          </span>
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

