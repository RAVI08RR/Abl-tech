import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Code2,
  BrainCircuit,
  RefreshCcw,
  Globe,
  Smartphone,
  Cloud,
  Layers,
  Cpu,
  Database,
  ShoppingBag,
  HelpCircle,
  Wrench
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { getServices, getServicesPage } from '@/sanity/lib/queries'
import type { Service } from '@/types'

export const metadata: Metadata = {
  title: 'Technology Services',
  description: 'Comprehensive technology services from software development and AI to cloud solutions and digital transformation.',
}

const serviceIcons: Record<string, React.ElementType> = {
  'software-development': Code2,
  'ai-machine-learning': BrainCircuit,
  'digital-transformation': RefreshCcw,
  'web-development': Globe,
  'mobile-app-development': Smartphone,
  'cloud-solutions': Cloud,
  'ui-ux-design': Layers,
  'application-modernization': Cpu,
  'product-engineering': Cpu,
  'data-engineering': Database,
  'ecommerce-development': ShoppingBag,
  'technology-consulting': HelpCircle,
}

const defaultIcons = [Code2, BrainCircuit, RefreshCcw, Globe, Smartphone, Cloud, Layers, Cpu, Cpu, Database, ShoppingBag, HelpCircle]

const cardAccents = [
  { from: '#E3164F', to: '#FF6B9D' },
  { from: '#008BCB', to: '#00C4FF' },
  { from: '#7C3AED', to: '#A78BFA' },
  { from: '#059669', to: '#34D399' },
  { from: '#D97706', to: '#FCD34D' },
  { from: '#0891B2', to: '#67E8F9' },
  { from: '#E3164F', to: '#008BCB' },
  { from: '#6366F1', to: '#8B5CF6' },
  { from: '#10B981', to: '#34D399' },
  { from: '#F59E0B', to: '#FBBF24' },
  { from: '#EC4899', to: '#F472B6' },
  { from: '#3B82F6', to: '#60A5FA' },
]

export default async function ServicesPage() {
  let pageData = null
  let services: Service[] = []
  try {
    ;[pageData, services] = await Promise.all([
      getServicesPage(),
      getServices(),
    ])
  } catch { /* use defaults */ }

  const defaultServices = [
    { _id: '1', title: 'Software Development', shortDescription: 'Custom enterprise software engineered for scale, reliability, and performance.', icon: '💻', slug: { current: 'software-development' }, featured: true, order: 1 },
    { _id: '2', title: 'AI & Machine Learning', shortDescription: 'Intelligent automation and data-driven insights that transform decision making.', icon: '🤖', slug: { current: 'ai-machine-learning' }, featured: true, order: 2 },
    { _id: '3', title: 'Digital Transformation', shortDescription: 'End-to-end digitization strategies that modernize operations and unlock growth.', icon: '🔄', slug: { current: 'digital-transformation' }, featured: true, order: 3 },
    { _id: '4', title: 'Web Development', shortDescription: 'High-performance web applications built with modern frameworks and best practices.', icon: '🌐', slug: { current: 'web-development' }, featured: true, order: 4 },
    { _id: '5', title: 'Mobile App Development', shortDescription: 'Native and cross-platform mobile apps that deliver exceptional user experiences.', icon: '📱', slug: { current: 'mobile-app-development' }, featured: true, order: 5 },
    { _id: '6', title: 'Cloud Solutions', shortDescription: 'Scalable cloud infrastructure on AWS, Azure, and GCP for modern workloads.', icon: '☁️', slug: { current: 'cloud-solutions' }, featured: true, order: 6 },
    { _id: '7', title: 'UI/UX Design', shortDescription: 'User-centered design systems that balance aesthetics with conversion performance.', icon: '🎨', slug: { current: 'ui-ux-design' }, featured: true, order: 7 },
    { _id: '8', title: 'Application Modernization', shortDescription: 'Migrate and modernize legacy systems with minimal risk and maximum business continuity.', icon: '⚡', slug: { current: 'application-modernization' }, featured: true, order: 8 },
    { _id: '9', title: 'Product Engineering', shortDescription: 'Full-lifecycle product development from ideation through launch and scale.', icon: '⚙️', slug: { current: 'product-engineering' }, featured: true, order: 9 },
    { _id: '10', title: 'Data Engineering', shortDescription: 'Data pipelines, warehouses, and analytics infrastructure that unlock business intelligence.', icon: '📊', slug: { current: 'data-engineering' }, featured: true, order: 10 },
    { _id: '11', title: 'E-commerce Development', shortDescription: 'High-converting online stores built for performance, scale, and customer delight.', icon: '🛍️', slug: { current: 'ecommerce-development' }, featured: false, order: 11 },
    { _id: '12', title: 'Technology Consulting', shortDescription: 'Strategic technology advisory to help leadership make confident, informed decisions.', icon: '💡', slug: { current: 'technology-consulting' }, featured: false, order: 12 },
  ] as Service[]

  const displayServices = services.length ? services : defaultServices

  const eyebrow = pageData?.eyebrow || 'What We Do'
  const headline = pageData?.headline || 'Technology Services That Drive Real Results'
  const subheadline = pageData?.subheadline || 'From strategy through execution, we offer a complete suite of technology services designed to help ambitious businesses build, scale, and modernize their digital products.'
  const ctaHeading = pageData?.cta?.heading || 'Not Sure Which Service You Need?'
  const ctaDesc = pageData?.cta?.description || 'Tell us about your business challenge and our consultants will recommend the right approach.'
  const ctaLabel = pageData?.cta?.buttonLabel || 'Book a Free Consultation'
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
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              {subheadline}
            </p>
            <Button href="/contact" variant="primary" size="lg" style={{ background: 'linear-gradient(135deg, #E3164F, #FF3D6E)', border: 'none' }}>
              Discuss Your Project <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Services grid */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.02) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayServices.map((service, index) => {
              const IconComponent = serviceIcons[service.slug?.current || ''] || defaultIcons[index % defaultIcons.length] || Wrench
              const accent = cardAccents[index % cardAccents.length]

              return (
                <Link
                  key={service._id}
                  href={`/services/${service.slug.current}`}
                  className="group relative bg-white rounded-3xl p-8 flex flex-col justify-between min-h-[280px] hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 hover:border-[var(--accent-color)] hover:shadow-[0_20px_45px_var(--accent-glow)]"
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

                    {/* Stage number */}
                    <span
                      className="absolute top-4 right-6 text-5xl font-black select-none pointer-events-none transition-colors duration-300"
                      style={{ color: 'rgba(0,0,0,0.03)' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Icon container */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                      style={{ background: `linear-gradient(135deg, ${accent.from}10, ${accent.to}18)` }}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: accent.from }} />
                    </div>

                    <h2 className="text-lg font-bold text-[#111111] mb-2 group-hover:text-[#E3164F] transition-colors leading-snug">
                      {service.title}
                    </h2>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium mb-6">{service.shortDescription}</p>
                  </div>

                  <div
                    className="flex items-center gap-1 text-xs font-semibold mt-auto"
                    style={{ color: accent.from }}
                  >
                    Learn more <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
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
