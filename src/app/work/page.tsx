import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { getCaseStudies, getWorkPage } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Explore our portfolio of case studies — real projects, measurable outcomes, and transformative technology solutions.',
}

const defaultWork = [
  { _id: '1', title: 'AI-Powered E-Commerce Platform', slug: { current: 'ai-ecommerce-platform' }, client: 'RetailVision Inc.', shortDescription: 'AI-driven commerce engine with personalization and real-time inventory.', featured: true, publishedAt: '2025-07-01', industry: { name: 'Retail', slug: { current: 'retail' } }, service: { title: 'AI & ML', slug: { current: 'ai-machine-learning' } }, metrics: [{ value: '42%', metric: 'Conversion Increase' }] },
  { _id: '2', title: 'Enterprise Digital Banking Suite', slug: { current: 'enterprise-digital-banking' }, client: 'FinEdge Capital', shortDescription: 'Modernized legacy core banking with real-time payments and fraud detection AI.', featured: true, publishedAt: '2025-06-01', industry: { name: 'Finance', slug: { current: 'financial-services' } }, service: { title: 'Digital Transformation', slug: { current: 'digital-transformation' } }, metrics: [{ value: '60%', metric: 'Cost Reduction' }] },
  { _id: '3', title: 'Smart Healthcare Data Platform', slug: { current: 'smart-healthcare-platform' }, client: 'HealthBridge Systems', shortDescription: 'Unified patient data across 12 hospitals with HIPAA-compliant cloud.', featured: true, publishedAt: '2025-05-01', industry: { name: 'Healthcare', slug: { current: 'healthcare' } }, service: { title: 'Cloud Solutions', slug: { current: 'cloud-solutions' } }, metrics: [{ value: '85%', metric: 'Faster Diagnosis' }] },
  { _id: '4', title: 'Supply Chain Visibility Platform', slug: { current: 'supply-chain-visibility' }, client: 'LogiTrack Africa', shortDescription: 'Real-time tracking and route optimization for 500+ delivery vehicles.', featured: false, publishedAt: '2025-04-01', industry: { name: 'Logistics', slug: { current: 'logistics' } }, service: { title: 'Software Development', slug: { current: 'software-development' } }, metrics: [{ value: '32%', metric: 'Cost Savings' }] },
  { _id: '5', title: 'EdTech Learning Management System', slug: { current: 'edtech-lms' }, client: 'EduTech Pro', shortDescription: 'Scalable LMS serving 200,000+ students with live classes and AI tutoring.', featured: false, publishedAt: '2025-03-01', industry: { name: 'Education', slug: { current: 'education' } }, service: { title: 'Web Development', slug: { current: 'web-development' } }, metrics: [{ value: '3x', metric: 'Engagement Increase' }] },
  { _id: '6', title: 'Manufacturing IoT Dashboard', slug: { current: 'manufacturing-iot' }, client: 'IndustriaTech', shortDescription: 'Real-time IoT data visualization and predictive maintenance for factory floors.', featured: false, publishedAt: '2025-02-01', industry: { name: 'Manufacturing', slug: { current: 'manufacturing' } }, service: { title: 'Cloud Solutions', slug: { current: 'cloud-solutions' } }, metrics: [{ value: '40%', metric: 'Downtime Reduction' }] },
]

const cardThemes = [
  { bg: 'linear-gradient(145deg, #130820 0%, #1E0A2E 100%)', accent: '#E3164F', accentTo: '#FF6B9D' },
  { bg: 'linear-gradient(145deg, #061525 0%, #0A1F35 100%)', accent: '#008BCB', accentTo: '#00C4FF' },
  { bg: 'linear-gradient(145deg, #061A12 0%, #0A2518 100%)', accent: '#059669', accentTo: '#34D399' },
  { bg: 'linear-gradient(145deg, #1A130A 0%, #291C0E 100%)', accent: '#D97706', accentTo: '#FCD34D' },
  { bg: 'linear-gradient(145deg, #120A20 0%, #201035 100%)', accent: '#7C3AED', accentTo: '#A78BFA' },
  { bg: 'linear-gradient(145deg, #081720 0%, #0C2432 100%)', accent: '#0891B2', accentTo: '#67E8F9' },
]

export default async function WorkPage() {
  let pageData = null
  let work: any = []
  try {
    ;[pageData, work] = await Promise.all([
      getWorkPage(),
      getCaseStudies(),
    ])
  } catch {}

  const displayWork = work?.length ? work : defaultWork

  const eyebrow = pageData?.eyebrow || 'Our Work'
  const headline = pageData?.headline || 'Real Problems. Measurable Outcomes.'
  const subheadline = pageData?.subheadline || 'We partner with businesses across industries to solve complex technology challenges. Every engagement delivers tangible, measurable results.'
  const ctaHeading = pageData?.cta?.heading || 'Ready to Start Your Project?'
  const ctaDesc = pageData?.cta?.description || 'Join 100+ businesses that have partnered with ABL BusinessTech to transform their digital operations.'
  const ctaLabel = pageData?.cta?.buttonLabel || 'Start a Conversation'
  const ctaHref = pageData?.cta?.buttonHref || '/contact'

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #060D1A 0%, #0A1628 50%, #0D0520 100%)' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(0,139,203,0.12) 0%, transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(227,22,79,0.10) 0%, transparent 70%)' }}
        />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#E3164F]" />
              <span
                className="text-xs font-bold tracking-[0.18em] uppercase"
                style={{
                  background: 'linear-gradient(90deg, #E3164F, #008BCB)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {eyebrow}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-6">
              {headline}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl font-medium">
              {subheadline}
            </p>
          </div>
        </Container>
      </section>

      {/* Case studies Grid */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.02) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayWork.map((study: any, index: number) => {
              const theme = cardThemes[index % cardThemes.length]

              return (
                <Link
                  key={study._id}
                  href={`/work/${study.slug.current}`}
                  className="group relative rounded-3xl overflow-hidden flex flex-col justify-between min-h-[420px] p-8 hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[0_20px_50px_var(--shadow-color)]"
                  style={{
                    background: theme.bg,
                    ['--shadow-color' as any]: `${theme.accent}22`,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                  }}
                  aria-label={`Case study: ${study.title}`}
                >
                  {/* Accent glint overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.12] pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 30% 70%, ${theme.accent}, transparent 60%)` }}
                    aria-hidden="true"
                  />

                  {/* Top gradient border */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl"
                    style={{ background: `linear-gradient(90deg, ${theme.accent}, ${theme.accentTo})` }}
                    aria-hidden="true"
                  />

                  {/* Content block */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div>
                        {study.industry && (
                          <span
                            className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3"
                            style={{ background: `${theme.accent}20`, color: theme.accentTo }}
                          >
                            {study.industry.name}
                          </span>
                        )}
                        <h2 className="text-xl font-bold text-white leading-tight group-hover:text-[#FF3D6E] transition-colors duration-200">
                          {study.title}
                        </h2>
                        {study.client && <p className="text-xs text-gray-400 mt-1 font-semibold">{study.client}</p>}
                      </div>
                      <ExternalLink
                        className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-200 shrink-0 mt-1"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed font-medium">{study.shortDescription}</p>
                  </div>

                  {/* Metric footer */}
                  <div className="relative z-10">
                    {study.metrics && study.metrics.length > 0 && (
                      <div className="mt-6 pt-5 border-t border-white/10 flex flex-col gap-0.5">
                        <p className="text-3xl font-black" style={{ color: theme.accentTo }}>{study.metrics[0].value}</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">{study.metrics[0].metric}</p>
                      </div>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #060D1A 0%, #0A1628 50%, #0D0520 100%)' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <Container className="relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">{ctaHeading}</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto font-medium text-sm leading-relaxed">{ctaDesc}</p>
          <Button href={ctaHref} variant="primary" size="lg" style={{ background: 'linear-gradient(135deg, #E3164F, #FF3D6E)', border: 'none' }}>
            {ctaLabel} <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </Container>
      </section>
    </>
  )
}
