import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { getCaseStudyBySlug, getAllCaseStudySlugs } from '@/sanity/lib/queries'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  try { const slugs = await getAllCaseStudySlugs(); return slugs.map((s: { slug: string }) => ({ slug: s.slug })) }
  catch { return [] }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const cs = await getCaseStudyBySlug(slug)
    if (!cs) return { title: 'Case Study Not Found' }
    return { title: cs.seo?.metaTitle || cs.title, description: cs.seo?.metaDescription || cs.shortDescription }
  } catch { return { title: 'Case Study' } }
}

/* ── Banner lookup — driven by bannerImage field on each work item ─ */
const BANNER_MAP: Record<string, string> = {
  'ai-ecommerce-platform':      '/E-Commerce-banner.png',
  'enterprise-digital-banking':  '/Digital-Banking.png',
  'smart-healthcare-platform':   '/Healthcare-ab.png',
}

const VALID_SLUGS = [
  'ai-ecommerce-platform',
  'enterprise-digital-banking',
  'smart-healthcare-platform',
  'supply-chain-visibility',
  'edtech-lms',
  'manufacturing-iot',
]

/* ── Per-slug dummy study content ─────────────────────────────────── */
const STUDY_DATA: Record<string, {
  title: string; client: string; industry: string; shortDescription: string;
  challenge: string; solution: string;
  metrics: { value: string; metric: string; description?: string }[]
}> = {
  'ai-ecommerce-platform': {
    title: 'AI-Powered E-Commerce Platform',
    client: 'RetailVision Enterprise (Dummy Project)',
    industry: 'Retail & E-Commerce',
    shortDescription: 'AI-driven commerce engine with personalization, real-time inventory sync, and a headless Next.js storefront delivering sub-second page loads.',
    challenge: 'The client was struggling with a legacy monolithic commerce platform that could not support real-time personalization, suffered from slow page loads, and required weeks of manual dev work for minor feature updates.',
    solution: 'We architected a composable commerce stack featuring a headless Next.js frontend, a custom AI recommendation microservice, and a cloud-native real-time inventory engine deployed on AWS.',
    metrics: [
      { value: '42%', metric: 'Conversion Rate Increase', description: 'Year-over-year after launch' },
      { value: '3x', metric: 'Faster Checkout Processing', description: 'Order processing speed improvement' },
      { value: '68%', metric: 'Reduced Page Load Time', description: 'Core Web Vitals performance boost' },
    ],
  },
  'enterprise-digital-banking': {
    title: 'Enterprise Digital Banking Suite',
    client: 'FinEdge Capital (Dummy Project)',
    industry: 'Financial Services',
    shortDescription: 'Modernized a legacy core banking system with real-time open banking APIs, AI fraud detection, and a white-label mobile banking app.',
    challenge: 'FinEdge\'s legacy core banking system was built on a 15-year-old stack with no API layer, preventing modern fintech integrations and multi-factor transaction auditing.',
    solution: 'We delivered a modern banking platform with real-time payment microservice architecture, an AI-driven fraud detection engine, and a React Native cross-platform mobile app.',
    metrics: [
      { value: '60%', metric: 'Reduction in Ops Cost', description: 'Through automated cloud workflows' },
      { value: '99.99%', metric: 'System Uptime SLA', description: 'Maintained across all regions' },
      { value: '$2M', metric: 'Annual Savings', description: 'Efficiency and infrastructure gains' },
    ],
  },
  'smart-healthcare-platform': {
    title: 'Smart Healthcare Data Platform',
    client: 'HealthBridge Systems (Dummy Project)',
    industry: 'Healthcare & Life Sciences',
    shortDescription: 'Unified patient data across 12 hospitals with HIPAA-compliant cloud infrastructure, HL7/FHIR interoperability, and real-time clinical dashboards.',
    challenge: 'HealthBridge operated across 12 hospitals with disparate EHR systems, creating siloed data flows that delayed critical clinical diagnostic decisions.',
    solution: 'We built a HIPAA-compliant AWS data lake with an HL7/FHIR interoperability layer, unifying records into real-time clinical dashboards with ML-assisted diagnostic support.',
    metrics: [
      { value: '85%', metric: 'Faster Diagnosis', description: 'AI-assisted imaging and triage' },
      { value: '12', metric: 'Hospitals Connected', description: 'Seamless real-time data exchange' },
      { value: '100%', metric: 'HIPAA Compliant', description: 'End-to-end security verified' },
    ],
  },
  'supply-chain-visibility': {
    title: 'Supply Chain Visibility Platform',
    client: 'LogiTrack Solutions (Dummy Project)',
    industry: 'Logistics & Supply Chain',
    shortDescription: 'Real-time GPS tracking and AI route optimization for 500+ delivery vehicles, cutting fuel costs and improving on-time delivery rates across 8 countries.',
    challenge: 'The logistics operator lacked centralized visibility across cross-border freight routes, resulting in delivery delays and inflated fuel consumption.',
    solution: 'We built a telemetry-driven IoT logistics dashboard with automated AI dispatching, predictive delay notifications, and continuous route optimization.',
    metrics: [
      { value: '32%', metric: 'Fuel Cost Savings', description: 'Via dynamic route optimization' },
      { value: '500+', metric: 'Fleet Vehicles Tracked', description: 'Live telemetry monitoring' },
      { value: '8', metric: 'Countries Covered', description: 'Multi-region delivery visibility' },
    ],
  },
  'edtech-lms': {
    title: 'EdTech Learning Management System',
    client: 'EduTech Global (Dummy Project)',
    industry: 'Education & EdTech',
    shortDescription: 'Scalable LMS serving 200,000+ students across 40+ countries with live HD video classrooms, AI-assisted tutoring, and automated progress tracking.',
    challenge: 'The existing digital classroom infrastructure could not handle concurrent peak loads during exam seasons, causing high latency and audio-video drops.',
    solution: 'We engineered a WebRTC-powered video classroom architecture backed by a distributed cloud microservices system and personalized student analytics.',
    metrics: [
      { value: '3x', metric: 'Student Engagement', description: 'Interactive course completion rate' },
      { value: '200K+', metric: 'Active Students', description: 'Supported simultaneously' },
      { value: '40+', metric: 'Countries Reached', description: 'Low-latency global CDN distribution' },
    ],
  },
  'manufacturing-iot': {
    title: 'Manufacturing IoT Dashboard',
    client: 'IndustriaTech Corp (Dummy Project)',
    industry: 'Manufacturing & Industry 4.0',
    shortDescription: 'Real-time IoT sensor telemetry with AI predictive maintenance alerts and production line performance dashboards, reducing unplanned downtime by 40%.',
    challenge: 'Industrial assembly lines experienced unscheduled halts due to lack of early mechanical wear detection and manual sensor auditing.',
    solution: 'We deployed an edge-to-cloud IoT analytics platform that monitors vibration, temperature, and cycle time with predictive ML anomaly alerts.',
    metrics: [
      { value: '40%', metric: 'Downtime Reduction', description: 'Through predictive maintenance' },
      { value: '200+', metric: 'IoT Sensors Live', description: 'Sub-second telemetry data' },
      { value: '99.9%', metric: 'Data Reliability', description: 'Zero loss in noisy factory floors' },
    ],
  },
}

const defaultStudy = STUDY_DATA['ai-ecommerce-platform']

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  let study = null
  try { study = await getCaseStudyBySlug(slug) } catch {}

  if (!study && !VALID_SLUGS.includes(slug)) {
    notFound()
  }

  const s = study || STUDY_DATA[slug] || defaultStudy
  const bannerImage = (study as any)?.bannerImage || BANNER_MAP[slug] || null

  return (
    <>
      {/* ── HERO — uses bannerImage as full-width background ── */}
      <section
        className="relative overflow-hidden py-24 lg:py-32"
        style={
          bannerImage
            ? {
                backgroundImage: `url('${bannerImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }
            : { background: 'linear-gradient(135deg, #0B1220 0%, #111827 100%)' }
        }
        aria-label={`${s.title} case study hero`}
      >
        {/* Dark gradient overlay — keeps text fully readable over the banner */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(11,18,32,0.90) 0%, rgba(11,18,32,0.65) 60%, rgba(11,18,32,0.40) 100%)' }}
          aria-hidden="true"
        />
        {/* Extra bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B1220] to-transparent" aria-hidden="true" />

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/work" className="hover:text-white transition-colors">Work</Link></li>
              <li>/</li>
              <li className="text-gray-200 truncate max-w-[200px]" aria-current="page">{s.title}</li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-4">
            {/* Industry / category */}
            {(s as any).industry && (
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#05A7D4]/20 border border-[#05A7D4]/30 text-[#05A7D4]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#05A7D4]" aria-hidden="true" />
                {(s as any).industry}
              </span>
            )}

            {/* Client */}
            {s.client && (
              <p className="text-[#05A7D4] text-sm font-bold uppercase tracking-widest">{s.client}</p>
            )}

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.05] tracking-tight">
              {s.title}
            </h1>

            {/* Short description */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
              {s.shortDescription}
            </p>
          </div>
        </Container>
      </section>

      {/* ── METRICS ─────────────────────────────────────────────── */}
      {s.metrics && s.metrics.length > 0 && (
        <section className="py-12 bg-[#0D0D1A]" aria-label="Project results">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:divide-x lg:divide-white/10">
              {s.metrics.map((metric: { value: string; metric: string; description?: string }) => (
                <div key={metric.metric} className="text-center px-6">
                  <p className="text-4xl lg:text-5xl font-black text-[#05A7D4] mb-2">{metric.value}</p>
                  <p className="text-white font-semibold mb-1">{metric.metric}</p>
                  {metric.description && <p className="text-xs text-gray-400">{metric.description}</p>}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── CHALLENGE & SOLUTION ─────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white" aria-label="Challenge and solution">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-px w-8 bg-[#05A7D4]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#05A7D4]">The Challenge</span>
              </div>
              <h2 className="text-2xl font-bold text-[#0B1220] mb-4 leading-snug">What Was Standing in the Way</h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{s.challenge}</p>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-px w-8 bg-[#05A7D4]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#05A7D4]">Our Solution</span>
              </div>
              <h2 className="text-2xl font-bold text-[#0B1220] mb-4 leading-snug">How We Solved It</h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{s.solution}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#F7F8FA] border-t border-slate-100">
        <Container className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-[#05A7D4]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#05A7D4]">Work With Us</span>
            <span className="h-px w-8 bg-[#05A7D4]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1220] mb-3">Want Similar Results?</h2>
          <p className="text-gray-500 mb-8 text-sm sm:text-base leading-relaxed">
            Let&apos;s discuss how we can solve your technology challenges and deliver measurable impact for your business.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" variant="primary" size="md">
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/work" variant="outline" size="md">
              ← Back to All Work
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
