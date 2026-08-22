import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ShoppingCart,
  HeartPulse,
  BadgeDollarSign,
  GraduationCap,
  Clapperboard,
  Factory,
  Truck,
  Plane,
  Briefcase,
  Rocket,
  Building2
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { getIndustries, getIndustriesPage } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Technology solutions built around the unique challenges of your industry — from retail and healthcare to finance and manufacturing.',
}

const industryIconMap: Record<string, React.ElementType> = {
  'retail-ecommerce': ShoppingCart,
  healthcare: HeartPulse,
  'financial-services': BadgeDollarSign,
  education: GraduationCap,
  'media-entertainment': Clapperboard,
  manufacturing: Factory,
  logistics: Truck,
  'travel-hospitality': Plane,
  'professional-services': Briefcase,
  startups: Rocket,
}

const defaultIcons = [ShoppingCart, HeartPulse, BadgeDollarSign, GraduationCap, Clapperboard, Factory, Truck, Plane, Briefcase, Rocket]

const cardAccents = [
  { from: '#E3164F', to: '#FF6B9D' },
  { from: '#008BCB', to: '#00C4FF' },
  { from: '#7C3AED', to: '#A78BFA' },
  { from: '#059669', to: '#34D399' },
  { from: '#D97706', to: '#FCD34D' },
  { from: '#DC2626', to: '#F87171' },
  { from: '#0891B2', to: '#67E8F9' },
  { from: '#E3164F', to: '#008BCB' },
  { from: '#6366F1', to: '#8B5CF6' },
  { from: '#10B981', to: '#34D399' },
]

const defaultIndustries = [
  { _id: '1', name: 'Retail & E-commerce', description: 'Personalized commerce experiences that drive conversion and loyalty.', icon: '🛍️', slug: { current: 'retail-ecommerce' }, featured: true },
  { _id: '2', name: 'Healthcare & Life Sciences', description: 'Secure, compliant platforms for patient care and clinical operations.', icon: '🏥', slug: { current: 'healthcare' }, featured: true },
  { _id: '3', name: 'Financial Services', description: 'Fintech solutions, digital banking, and regulatory compliance.', icon: '💰', slug: { current: 'financial-services' }, featured: true },
  { _id: '4', name: 'Education & EdTech', description: 'Engaging learning platforms that scale from startup to enterprise.', icon: '🎓', slug: { current: 'education' }, featured: true },
  { _id: '5', name: 'Media & Entertainment', description: 'Content delivery, streaming, and audience engagement platforms.', icon: '🎬', slug: { current: 'media-entertainment' }, featured: true },
  { _id: '6', name: 'Manufacturing & Industry 4.0', description: 'IoT integration, supply chain visibility, and predictive maintenance.', icon: '🏭', slug: { current: 'manufacturing' }, featured: true },
  { _id: '7', name: 'Logistics & Supply Chain', description: 'Real-time tracking, route optimization, and warehouse automation.', icon: '🚚', slug: { current: 'logistics' }, featured: true },
  { _id: '8', name: 'Travel & Hospitality', description: 'Booking systems, customer portals, and loyalty program platforms.', icon: '✈️', slug: { current: 'travel-hospitality' }, featured: false },
  { _id: '9', name: 'Professional Services', description: 'Client portals, project management, and billing automation.', icon: '💼', slug: { current: 'professional-services' }, featured: false },
  { _id: '10', name: 'Startups & Scale-ups', description: 'Speed-to-market engineering with scalable architecture from day one.', icon: '🚀', slug: { current: 'startups' }, featured: true },
]

export default async function IndustriesPage() {
  let pageData = null
  let industries = []
  try {
    ;[pageData, industries] = await Promise.all([
      getIndustriesPage(),
      getIndustries(),
    ])
  } catch {}
  const displayIndustries = industries?.length ? industries : defaultIndustries

  const eyebrow = pageData?.eyebrow || 'Industries'
  const headline = pageData?.headline || 'Technology Built Around Your Industry'
  const subheadline = pageData?.subheadline || 'We bring deep domain expertise across 20+ industries. Our technology solutions are tailored to the specific challenges, regulations, and growth opportunities of your sector.'
  const ctaHeading = pageData?.cta?.heading || "Don't See Your Industry?"
  const ctaDesc = pageData?.cta?.description || "We've worked across many more sectors. Tell us about your business and we'll explain how we can help."
  const ctaLabel = pageData?.cta?.buttonLabel || 'Talk to Our Team'
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
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">{subheadline}</p>
          </div>
        </Container>
      </section>

      {/* Grid of industries */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.02) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayIndustries.map((industry: any, index: number) => {
              const IconComponent = industryIconMap[industry.slug?.current || ''] || defaultIcons[index % defaultIcons.length] || Building2
              const accent = cardAccents[index % cardAccents.length]

              return (
                <Link
                  key={industry._id}
                  href={`/industries/${industry.slug.current}`}
                  className="group relative bg-white rounded-3xl p-8 flex flex-col justify-between min-h-[260px] hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 hover:border-[var(--accent-color)] hover:shadow-[0_20px_45px_var(--accent-glow)]"
                  style={{
                    ['--accent-color' as any]: `${accent.from}30`,
                    ['--accent-glow' as any]: `${accent.from}12`,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.01)',
                  }}
                >
                  <div>
                    {/* Top gradient highlight */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }}
                      aria-hidden="true"
                    />

                    {/* Icon container */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                      style={{ background: `linear-gradient(135deg, ${accent.from}10, ${accent.to}18)` }}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: accent.from }} />
                    </div>

                    <h2 className="text-lg font-bold text-[#111111] mb-2 group-hover:text-[#E3164F] transition-colors leading-snug">
                      {industry.name}
                    </h2>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium mb-6">{industry.description}</p>
                  </div>

                  <div
                    className="flex items-center gap-1 text-xs font-semibold mt-auto"
                    style={{ color: accent.from }}
                  >
                    Explore solutions <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
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
