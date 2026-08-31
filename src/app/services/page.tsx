import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Globe,
  Building2,
  Cloud,
  Database,
  ShieldCheck,
  Users,
  Palette,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { getServices, getServicesPage } from '@/sanity/lib/queries'
import type { Service } from '@/types'

export const metadata: Metadata = {
  title: 'Technology Services — AI, Software & Cloud Engineering | ABL BusinessTech',
  description:
    'From production-ready AI to enterprise software and cloud infrastructure — ABL BusinessTech LLP delivers engineering solutions that drive hard ROI for global enterprises.',
}

// Map slug → Lucide icon component
const serviceIconMap: Record<string, React.ElementType> = {
  'ai-data-engineering': BrainCircuit,
  'software-engineering': Code2,
  'digital-experiences-web-mobile': Globe,
  'enterprise-applications': Building2,
  'cloud-and-devops': Cloud,
  'data-analytics-solutions': Database,
  'quality-assurance-testing': ShieldCheck,
  'staff-augmentation': Users,
  'ui-ux-design': Palette,
  // legacy slugs
  'software-development': Code2,
  'ai-machine-learning': BrainCircuit,
  'web-development': Globe,
  'data-engineering': Database,
}

const fallbackIcons: React.ElementType[] = [
  BrainCircuit, Code2, Globe, Building2, Cloud, Database, ShieldCheck, Users, Palette,
]

const cardAccents = [
  { from: '#E3164F', to: '#FF6B9D', glow: 'rgba(227,22,79,0.12)' },
  { from: '#008BCB', to: '#00C4FF', glow: 'rgba(0,139,203,0.12)' },
  { from: '#7C3AED', to: '#A78BFA', glow: 'rgba(124,58,237,0.12)' },
  { from: '#059669', to: '#34D399', glow: 'rgba(5,150,105,0.12)' },
  { from: '#D97706', to: '#FCD34D', glow: 'rgba(217,119,6,0.12)' },
  { from: '#0891B2', to: '#67E8F9', glow: 'rgba(8,145,178,0.12)' },
  { from: '#7C3AED', to: '#C084FC', glow: 'rgba(124,58,237,0.12)' },
  { from: '#E3164F', to: '#008BCB', glow: 'rgba(227,22,79,0.10)' },
  { from: '#6366F1', to: '#8B5CF6', glow: 'rgba(99,102,241,0.12)' },
]

export default async function ServicesPage() {
  let pageData = null
  let services: Service[] = []
  try {
    ;[pageData, services] = await Promise.all([getServicesPage(), getServices()])
  } catch {
    /* use defaults */
  }

  const defaultServices = [
    {
      _id: '1',
      title: 'AI & Data Engineering',
      shortDescription:
        'Turn AI hype into hard enterprise ROI. We engineer production-ready AI agents, automate data pipelines, and deploy custom ML models that solve real operational bottlenecks—securely and at scale.',
      slug: { current: 'ai-data-engineering' },
      featured: true,
      order: 1,
    },
    {
      _id: '2',
      title: 'Software Engineering',
      shortDescription:
        'Build software that scales, not technical debt. We co-engineer robust enterprise software, high-performance SaaS applications, and custom digital products designed to drive hard ROI.',
      slug: { current: 'software-engineering' },
      featured: true,
      order: 2,
    },
    {
      _id: '3',
      title: 'Digital Experiences',
      shortDescription:
        'Stop losing users to clunky interfaces. We design and engineer high-performance web applications, enterprise portals, and custom mobile apps that drive adoption, engagement, and revenue.',
      slug: { current: 'digital-experiences-web-mobile' },
      featured: true,
      order: 3,
    },
    {
      _id: '4',
      title: 'Enterprise Applications',
      shortDescription:
        'Architected for scale. Engineered for your enterprise. We design and build custom ERPs, CRMs, and enterprise apps that adapt to your exact business operations—not the other way around.',
      slug: { current: 'enterprise-applications' },
      featured: true,
      order: 4,
    },
    {
      _id: '5',
      title: 'Cloud & DevOps',
      shortDescription:
        'Ship code faster. Never go down. We architect scalable cloud solutions, execute zero-downtime migrations, and implement elite DevOps pipelines so your teams can ship secure code in minutes.',
      slug: { current: 'cloud-and-devops' },
      featured: true,
      order: 5,
    },
    {
      _id: '6',
      title: 'Data & Analytics Solutions',
      shortDescription:
        'Stop drowning in data. Start driving revenue. We architect high-speed data pipelines, implement powerful BI platforms, and build custom dashboards that turn raw enterprise data into hard ROI.',
      slug: { current: 'data-analytics-solutions' },
      featured: true,
      order: 6,
    },
    {
      _id: '7',
      title: 'Quality Assurance & Testing',
      shortDescription:
        'Ruthless software testing. Enterprise quality assurance. We deploy senior QA engineering pods to stress-test your architecture, automate release pipelines, and execute rigorous security testing.',
      slug: { current: 'quality-assurance-testing' },
      featured: true,
      order: 7,
    },
    {
      _id: '8',
      title: 'Staff Augmentation',
      shortDescription:
        'Stop losing 6 months to hiring. Instantly inject vetted, top 1% engineers—AI specialists, cloud architects, full-stack developers—directly into your existing teams within 2 weeks.',
      slug: { current: 'staff-augmentation' },
      featured: true,
      order: 8,
    },
    {
      _id: '9',
      title: 'UI/UX Design Services',
      shortDescription:
        'Stop losing conversions to poor design. We execute UX-led design strategies—user research, wireframing, prototyping, and design systems—that turn complex workflows into intuitive user experiences.',
      slug: { current: 'ui-ux-design' },
      featured: false,
      order: 9,
    },
  ] as Service[]

  const displayServices = services.length ? services : defaultServices

  const eyebrow = pageData?.eyebrow || 'Our Capabilities'
  const headline = pageData?.headline || 'Engineering Solutions That Drive Hard ROI'
  const subheadline =
    pageData?.subheadline ||
    'From production-ready AI to cloud infrastructure and custom enterprise software — we deploy dedicated engineering pods that integrate directly into your business and deliver measurable results.'
  const ctaHeading = pageData?.cta?.heading || 'Ready to Build With a Team That Actually Ships?'
  const ctaDesc =
    pageData?.cta?.description ||
    'Stop experimenting. Speak with a senior architect today to evaluate your requirements and build a technical roadmap that drives revenue.'
  const ctaLabel = pageData?.cta?.buttonLabel || 'Book a Technical Consultation'
  const ctaHref = pageData?.cta?.buttonHref || '/contact'

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative py-24 lg:py-36 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #060D1A 0%, #0A1628 50%, #0D0520 100%)' }}
      >
        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Glow blobs */}
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
            <div className="inline-flex items-center gap-2 mb-5">
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

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
              {headline}
            </h1>
            <p className="text-base text-gray-400 leading-relaxed mb-8 max-w-2xl">
              {subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                style={{ background: 'linear-gradient(135deg, #E3164F, #FF3D6E)', border: 'none' }}
              >
                Discuss Your Project <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/solutions" variant="outline" size="lg">
                Our Solutions Overview
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Services Grid ─────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Subtle dot background */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.022) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />

        <Container className="relative z-10">
          {/* Section header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#E3164F]" />
              <span
                className="text-[11px] font-semibold tracking-[0.15em] uppercase"
                style={{ color: '#E3164F' }}
              >
                All Services
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#111111] max-w-md leading-snug">
              Everything You Need to Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {displayServices.map((service, index) => {
              const IconComponent =
                serviceIconMap[service.slug?.current || ''] ||
                fallbackIcons[index % fallbackIcons.length]
              const accent = cardAccents[index % cardAccents.length]

              return (
                <Link
                  key={service._id}
                  href={`/services/${service.slug.current}`}
                  className="group relative bg-white rounded-3xl flex flex-col justify-between transition-all duration-300 border border-gray-100/80 hover:border-transparent overflow-hidden"
                  style={{
                    padding: '2rem',
                    minHeight: '300px',
                    boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
                  }}
                >
                  {/* Hover shadow using gradient */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: `0 20px 50px ${accent.glow}, 0 4px 16px rgba(0,0,0,0.06)`,
                    }}
                  />

                  {/* Top gradient bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }}
                  />

                  {/* Ghosted index number */}
                  <span
                    className="absolute top-5 right-6 text-6xl font-black select-none pointer-events-none leading-none"
                    style={{ color: 'rgba(0,0,0,0.03)' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${accent.from}14, ${accent.to}22)`,
                      }}
                    >
                      <IconComponent
                        className="w-5 h-5 transition-colors duration-300"
                        style={{ color: accent.from }}
                        strokeWidth={1.75}
                      />
                    </div>

                    <h2
                      className="text-[15px] font-semibold text-[#111111] mb-2.5 leading-snug transition-colors"
                      style={{ lineHeight: '1.35' }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-[13px] text-gray-500 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Learn more */}
                  <div
                    className="relative z-10 flex items-center gap-1.5 text-xs font-bold mt-7 transition-all duration-200"
                    style={{ color: accent.from }}
                  >
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                  </div>
                </Link>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
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
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(ellipse, rgba(227,22,79,0.07) 0%, rgba(0,139,203,0.07) 100%)' }}
        />

        <Container className="relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              {ctaHeading}
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
              {ctaDesc}
            </p>
            <Button
              href={ctaHref}
              variant="primary"
              size="lg"
              style={{ background: 'linear-gradient(135deg, #E3164F, #FF3D6E)', border: 'none' }}
            >
              {ctaLabel} <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
