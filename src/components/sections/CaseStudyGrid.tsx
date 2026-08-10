import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
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

const gradients = [
  'from-[#1A0A1A] to-[#2D1035]',
  'from-[#0A1220] to-[#091525]',
  'from-[#0A1A0A] to-[#102210]',
]

const accentColors = ['#E3164F', '#008BCB', '#10B981']

export function CaseStudyGrid({ heading, description, caseStudies }: CaseStudyGridProps) {
  const displayStudies = caseStudies?.length ? caseStudies : defaultCaseStudies
  const displayHeading = heading || 'Real Problems. Measurable Outcomes.'
  const displayDescription = description || 'We partner with ambitious businesses to solve complex technology challenges and deliver results that matter.'

  return (
    <section className="section-padding bg-[#F7F8FA]" aria-label="Featured case studies">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="Our Work"
            title={displayHeading}
            description={displayDescription}
          />
          <Button href="/work" variant="outline" className="shrink-0 self-start lg:self-auto">
            View All Work <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {displayStudies.slice(0, 3).map((study, index) => (
            <Link
              key={study._id}
              href={`/work/${study.slug.current}`}
              className={`group relative rounded-3xl overflow-hidden bg-gradient-to-br ${gradients[index % 3]} min-h-[460px] flex flex-col justify-between p-8 hover:scale-[1.02] transition-transform duration-300`}
              aria-label={`Case study: ${study.title}`}
            >
              {/* Background hero image from Sanity if uploaded */}
              {study.heroImage?.asset?.url ? (
                <Image
                  src={study.heroImage.asset.url}
                  alt={study.title}
                  fill
                  className="object-cover opacity-20 group-hover:opacity-35 transition-opacity duration-300 pointer-events-none"
                />
              ) : (
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 70%, ${accentColors[index % 3]}40, transparent 60%)`,
                  }}
                  aria-hidden="true"
                />
              )}

              {/* Top */}
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    {study.industry && (
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                        style={{ backgroundColor: `${accentColors[index % 3]}20`, color: accentColors[index % 3] }}
                      >
                        {study.industry.name}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {study.title}
                    </h3>
                    {study.client && (
                      <p className="text-sm text-gray-400 mt-1">{study.client}</p>
                    )}
                  </div>
                  <ExternalLink
                    className="w-5 h-5 text-gray-500 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-200 shrink-0 mt-1"
                    aria-hidden="true"
                  />
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {study.shortDescription}
                </p>
              </div>

              {/* Bottom - Metrics */}
              <div className="relative z-10">
                {study.metrics && study.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10">
                    {study.metrics.slice(0, 2).map((metric) => (
                      <div key={metric.metric}>
                        <p
                          className="text-2xl font-black"
                          style={{ color: accentColors[index % 3] }}
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
                    <span className="text-xs text-gray-500">Service:</span>
                    <span className="text-xs font-medium text-gray-300">{study.service.title}</span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
