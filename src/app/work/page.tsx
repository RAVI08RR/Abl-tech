import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { getCaseStudies, getWorkPage } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Our Work — Case Studies & Project Portfolio | ABL BusinessTech',
  description: 'Explore our portfolio of case studies — real projects, measurable outcomes, and transformative technology solutions across fintech, healthcare, retail, and logistics.',
}

const defaultWork = [
  {
    _id: '1',
    title: 'AI-Powered E-Commerce Platform',
    slug: { current: 'ai-ecommerce-platform' },
    client: 'RetailVision Inc.',
    shortDescription: 'AI-driven commerce engine with personalization, real-time inventory sync, and a headless Next.js storefront delivering sub-second page loads.',
    featured: true,
    publishedAt: '2025-07-01',
    industry: { name: 'Retail & E-Commerce', slug: { current: 'retail' } },
    service: { title: 'AI & Machine Learning', slug: { current: 'ai-machine-learning' } },
    metrics: [
      { value: '42%', metric: 'Conversion Increase' },
      { value: '3x', metric: 'Faster Checkout' },
      { value: '68%', metric: 'Page Load Improvement' },
    ],
    // Unsplash – Free commercial use
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80&auto=format&fit=crop',
    imageAlt: 'Software developers collaborating on e-commerce platform',
  },
  {
    _id: '2',
    title: 'Enterprise Digital Banking Suite',
    slug: { current: 'enterprise-digital-banking' },
    client: 'FinEdge Capital',
    shortDescription: 'Modernized a legacy core banking system with real-time open banking APIs, AI fraud detection engine, and a white-label mobile banking app.',
    featured: true,
    publishedAt: '2025-06-01',
    industry: { name: 'Financial Services', slug: { current: 'financial-services' } },
    service: { title: 'Digital Transformation', slug: { current: 'digital-transformation' } },
    metrics: [
      { value: '60%', metric: 'Cost Reduction' },
      { value: '99.99%', metric: 'System Uptime' },
      { value: '$2M', metric: 'Annual Savings' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=80&auto=format&fit=crop',
    imageAlt: 'Digital banking and fintech technology collaboration',
  },
  {
    _id: '3',
    title: 'Smart Healthcare Data Platform',
    slug: { current: 'smart-healthcare-platform' },
    client: 'HealthBridge Systems',
    shortDescription: 'Unified patient data across 12 hospitals with HIPAA-compliant cloud infrastructure, HL7/FHIR interoperability, and real-time clinical dashboards.',
    featured: true,
    publishedAt: '2025-05-01',
    industry: { name: 'Healthcare & Life Sciences', slug: { current: 'healthcare' } },
    service: { title: 'Cloud Solutions', slug: { current: 'cloud-solutions' } },
    metrics: [
      { value: '85%', metric: 'Faster Diagnosis' },
      { value: '12', metric: 'Hospitals Connected' },
      { value: '100%', metric: 'HIPAA Compliant' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80&auto=format&fit=crop',
    imageAlt: 'Healthcare data and technology collaboration team',
  },
  {
    _id: '4',
    title: 'Supply Chain Visibility Platform',
    slug: { current: 'supply-chain-visibility' },
    client: 'LogiTrack Africa',
    shortDescription: 'Real-time GPS tracking and AI route optimization for 500+ delivery vehicles, cutting fuel costs and improving on-time delivery rates across 8 countries.',
    featured: false,
    publishedAt: '2025-04-01',
    industry: { name: 'Logistics & Supply Chain', slug: { current: 'logistics' } },
    service: { title: 'Software Development', slug: { current: 'software-development' } },
    metrics: [
      { value: '32%', metric: 'Cost Savings' },
      { value: '500+', metric: 'Vehicles Tracked' },
      { value: '8', metric: 'Countries Covered' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80&auto=format&fit=crop',
    imageAlt: 'Logistics and supply chain management technology',
  },
  {
    _id: '5',
    title: 'EdTech Learning Management System',
    slug: { current: 'edtech-lms' },
    client: 'EduTech Pro',
    shortDescription: 'Scalable LMS serving 200,000+ students across 40+ countries with live HD video classrooms, AI-assisted tutoring, and automated progress tracking.',
    featured: false,
    publishedAt: '2025-03-01',
    industry: { name: 'Education & EdTech', slug: { current: 'education' } },
    service: { title: 'Web Development', slug: { current: 'web-development' } },
    metrics: [
      { value: '3x', metric: 'Student Engagement' },
      { value: '200K+', metric: 'Active Students' },
      { value: '40+', metric: 'Countries Reached' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80&auto=format&fit=crop',
    imageAlt: 'Students collaborating and learning with digital technology',
  },
  {
    _id: '6',
    title: 'Manufacturing IoT Dashboard',
    slug: { current: 'manufacturing-iot' },
    client: 'IndustriaTech GmbH',
    shortDescription: 'Real-time IoT sensor telemetry with AI predictive maintenance alerts and production line performance dashboards, reducing unplanned downtime by 40%.',
    featured: false,
    publishedAt: '2025-02-01',
    industry: { name: 'Manufacturing & Industry 4.0', slug: { current: 'manufacturing' } },
    service: { title: 'Cloud Solutions', slug: { current: 'cloud-solutions' } },
    metrics: [
      { value: '40%', metric: 'Downtime Reduction' },
      { value: '200+', metric: 'IoT Sensors Live' },
      { value: '99.9%', metric: 'Data Accuracy' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=900&q=80&auto=format&fit=crop',
    imageAlt: 'Modern manufacturing facility with IoT and technology infrastructure',
  },
]

export default async function WorkPage() {
  let pageData = null
  let work: any = []
  try {
    ;[pageData, work] = await Promise.all([getWorkPage(), getCaseStudies()])
  } catch { }

  const displayWork: typeof defaultWork = work?.length ? work : defaultWork

  const eyebrow = pageData?.eyebrow || 'Our Work'
  const headline = pageData?.headline || 'Real Problems. Measurable Outcomes.'
  const subheadline = pageData?.subheadline || 'We partner with businesses across industries to solve complex technology challenges. Every engagement delivers tangible, measurable results.'
  const ctaHeading = pageData?.cta?.heading || 'Ready to Start Your Project?'
  const ctaDesc = pageData?.cta?.description || 'Join 100+ businesses that have partnered with ABL BusinessTech to transform their digital operations.'
  const ctaLabel = pageData?.cta?.buttonLabel || 'Start a Conversation'
  const ctaHref = pageData?.cta?.buttonHref || '/contact'

  const featuredWork = displayWork.slice(0, 3)
  const remainingWork = displayWork.slice(3)

  return (
    <main id="main-content">
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative bg-[#F8FAFC] border-b border-slate-200/70 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#0b1220_1px,transparent_1px),linear-gradient(to_bottom,#0b1220_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#D9005B]/8 to-[#00AEEF]/8 blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#D9005B]/10 border border-[#D9005B]/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9005B]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#D9005B]">
                {eyebrow}
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0B1220] leading-[1.05] tracking-tight mb-6">
              {headline}
            </h1>
            <p className="text-lg sm:text-xl text-[#475569] leading-relaxed max-w-2xl">
              {subheadline}
            </p>
          </div>

          {/* Stats bar */}
          <div className="mt-16 pt-12 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '20+', label: 'Years of Excellence' },
              { value: '40+', label: 'Industries Served' },
              { value: '95%', label: 'Client Retention' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#D9005B] to-[#00AEEF] bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-[#475569] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FEATURED CASE STUDIES (Alternating Large Layout + Spotlight) ─── */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
          <div className="mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">Featured Projects</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B1220] tracking-tight mt-2">
              Landmark Engagements
            </h2>
          </div>

          <div className="space-y-28">
            
            {/* Project 1: Image Left, Content Right */}
            {featuredWork[0] && (() => {
              const study = featuredWork[0]
              const imgSrc = (study as any).imageUrl || `https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80&auto=format&fit=crop`
              const imgAlt = (study as any).imageAlt || study.title
              return (
                <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-20 items-center">
                  
                  {/* Category Pill (Mobile Only: appears above image) */}
                  {study.industry && (
                    <div className="block lg:hidden">
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-[#D9005B]/10 text-[#D9005B]">
                        {study.industry.name}
                      </span>
                    </div>
                  )}

                  <div className="lg:col-span-7">
                    <Link
                      href={`/work/${study.slug.current}`}
                      className="block relative rounded-3xl overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100"
                      style={{ aspectRatio: '16/10' }}
                    >
                      <Image
                        src={imgSrc}
                        alt={imgAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-103"
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-[#0B1220]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Category Pill (Desktop Only) */}
                      <div className="absolute top-6 left-6 hidden lg:block">
                        {study.industry && (
                          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-white/95 text-[#D9005B] shadow-sm">
                            {study.industry.name}
                          </span>
                        )}
                      </div>

                      <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <ArrowRight className="w-5 h-5 text-[#D9005B]" />
                      </div>
                    </Link>
                  </div>

                  <div className="lg:col-span-5 space-y-6">
                    {study.client && (
                      <p className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                        {study.client}
                      </p>
                    )}
                    <h3 className="text-3xl lg:text-4xl font-extrabold text-[#0B1220] leading-snug tracking-tight">
                      {study.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-base font-normal">
                      {study.shortDescription}
                    </p>
                    {study.metrics && study.metrics.length > 0 && (
                      <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100">
                        {study.metrics.slice(0, 3).map((m: any) => (
                          <div key={m.metric}>
                            <p className="text-3xl font-black bg-gradient-to-r from-[#D9005B] to-[#8B5CF6] bg-clip-text text-transparent">
                              {m.value}
                            </p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                              {m.metric}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="pt-2">
                      <Link
                        href={`/work/${study.slug.current}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#D9005B] hover:gap-3 transition-all group/link"
                      >
                        View Full Case Study
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })()}

            {/* Project 2: Content Left, Image Right */}
            {featuredWork[1] && (() => {
              const study = featuredWork[1]
              const imgSrc = (study as any).imageUrl || `https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=80&auto=format&fit=crop`
              const imgAlt = (study as any).imageAlt || study.title
              return (
                <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-20 items-center">
                  
                  {/* Category Pill (Mobile Only: appears above image) */}
                  {study.industry && (
                    <div className="block lg:hidden">
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-[#D9005B]/10 text-[#D9005B]">
                        {study.industry.name}
                      </span>
                    </div>
                  )}

                  <div className="lg:col-span-7 lg:order-2">
                    <Link
                      href={`/work/${study.slug.current}`}
                      className="block relative rounded-3xl overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100"
                      style={{ aspectRatio: '16/10' }}
                    >
                      <Image
                        src={imgSrc}
                        alt={imgAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-103"
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-[#0B1220]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Category Pill (Desktop Only) */}
                      <div className="absolute top-6 left-6 hidden lg:block">
                        {study.industry && (
                          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-white/95 text-[#D9005B] shadow-sm">
                            {study.industry.name}
                          </span>
                        )}
                      </div>

                      <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <ArrowRight className="w-5 h-5 text-[#D9005B]" />
                      </div>
                    </Link>
                  </div>

                  <div className="lg:col-span-5 lg:order-1 space-y-6">
                    {study.client && (
                      <p className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                        {study.client}
                      </p>
                    )}
                    <h3 className="text-3xl lg:text-4xl font-extrabold text-[#0B1220] leading-snug tracking-tight">
                      {study.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-base font-normal">
                      {study.shortDescription}
                    </p>
                    {study.metrics && study.metrics.length > 0 && (
                      <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100">
                        {study.metrics.slice(0, 3).map((m: any) => (
                          <div key={m.metric}>
                            <p className="text-3xl font-black bg-gradient-to-r from-[#D9005B] to-[#8B5CF6] bg-clip-text text-transparent">
                              {m.value}
                            </p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                              {m.metric}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="pt-2">
                      <Link
                        href={`/work/${study.slug.current}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#D9005B] hover:gap-3 transition-all group/link"
                      >
                        View Full Case Study
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })()}

            {/* Project 3: Large Featured Full-Width Spotlight */}
            {featuredWork[2] && (() => {
              const study = featuredWork[2]
              const imgSrc = (study as any).imageUrl || `https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80&auto=format&fit=crop`
              const imgAlt = (study as any).imageAlt || study.title
              return (
                <article className="pt-8">
                  <div className="rounded-[2rem] border border-slate-200/60 overflow-hidden shadow-xl bg-white group hover:shadow-2xl transition-all duration-555 flex flex-col lg:relative lg:block">
                    
                    {/* Category Pill (Mobile Only: appears above image) */}
                    {study.industry && (
                      <div className="block lg:hidden p-6 pb-0">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-[#D9005B]/10 text-[#D9005B]">
                          {study.industry.name}
                        </span>
                      </div>
                    )}

                    {/* Image Area */}
                    <div className="relative w-full aspect-[16/10] lg:aspect-[21/9] overflow-hidden">
                      <Image
                        src={imgSrc}
                        alt={imgAlt}
                        fill
                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-101"
                        sizes="100vw"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent hidden lg:block" />
                      
                      {/* Top industry pill (Desktop Only) */}
                      <div className="absolute top-6 left-6 hidden lg:block">
                        {study.industry && (
                          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-[#D9005B] text-white shadow-sm">
                            {study.industry.name}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Area - Absolute on Desktop, Stacked on Mobile */}
                    <div className="p-6 sm:p-8 lg:p-12 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 text-[#0B1220] lg:text-white space-y-4">
                      {study.client && (
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#D9005B] lg:text-[#FF3D6E]">
                          {study.client} &mdash; Featured Spotlight
                        </p>
                      )}
                      <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight max-w-3xl leading-tight">
                        {study.title}
                      </h3>
                      <p className="text-slate-600 lg:text-slate-200 max-w-2xl text-sm sm:text-base font-normal leading-relaxed line-clamp-2">
                        {study.shortDescription}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-slate-100 lg:border-white/10">
                        {study.metrics && study.metrics.length > 0 && (
                          <div className="flex gap-8 sm:gap-12">
                            {study.metrics.slice(0, 3).map((m: any) => (
                              <div key={m.metric}>
                                <p className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#D9005B] to-[#8B5CF6] bg-clip-text text-transparent lg:bg-none lg:text-white">
                                  {m.value}
                                </p>
                                <p className="text-[10px] font-bold text-slate-400 lg:text-slate-300 uppercase tracking-wider mt-0.5">
                                  {m.metric}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                        <div className="inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-[#D9005B] hover:bg-[#D9005B]/90 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                          Read Case Study
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                  </div>
                </article>
              )
            })()}

          </div>
        </Container>
      </section>

      {/* ── REMAINING PROJECTS GRID ─────────────────── */}
      {remainingWork.length > 0 && (
        <section className="bg-[#F8FAFC] border-t border-slate-100 py-24 lg:py-32">
          <Container>
            <div className="mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">More Projects</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B1220] tracking-tight mt-2">
                Additional Engagements
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {remainingWork.map((study) => {
                const imgSrc = (study as any).imageUrl || `https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80&auto=format&fit=crop`
                const imgAlt = (study as any).imageAlt || study.title

                return (
                  <Link
                    key={study._id}
                    href={`/work/${study.slug.current}`}
                    className="group bg-white rounded-3xl overflow-hidden border border-slate-200/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  >
                    {/* Project Image */}
                    <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                      <Image
                        src={imgSrc}
                        alt={imgAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-103"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {study.industry && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-white/95 text-[#D9005B] shadow-sm">
                            {study.industry.name}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 flex flex-col flex-1 space-y-4">
                      {study.client && (
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#D9005B]">
                          {study.client}
                        </p>
                      )}
                      <h3 className="text-xl font-bold text-[#0B1220] group-hover:text-[#D9005B] transition-colors leading-snug tracking-tight">
                        {study.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 flex-1 font-normal">
                        {study.shortDescription}
                      </p>

                      {/* Key metric */}
                      {study.metrics && study.metrics.length > 0 && (
                        <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                          <div>
                            <p className="text-2xl font-black bg-gradient-to-r from-[#D9005B] to-[#F04A8A] bg-clip-text text-transparent">{study.metrics[0].value}</p>
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">{study.metrics[0].metric}</p>
                          </div>
                          <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#D9005B] transition-colors duration-300 border border-slate-100">
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-all duration-300" />
                          </div>
                        </div>
                      )}
                    </div>
                  </Link>
                )
              })}
            </div>
          </Container>
        </section>
      )}

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden bg-[#0B1220]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D9005B]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00AEEF]/15 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            {ctaHeading}
          </h2>
          <p className="text-[#94A3B8] mb-10 max-w-xl mx-auto leading-relaxed">
            {ctaDesc}
          </p>
          <Button
            href={ctaHref}
            variant="primary"
            size="lg"
            style={{ background: 'linear-gradient(135deg, #D9005B, #F04A8A)', border: 'none' }}
          >
            {ctaLabel} <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </Container>
      </section>
    </main>
  )
}
