'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  BrainCircuit,
  Bot,
  Car,
  HeartPulse,
  GraduationCap,
  UtensilsCrossed,
  Truck,
  Wallet,
  Home,
  Hammer,
  Package,
  Car as CarIcon,
  Users,
  Radio,
  CreditCard,
  Zap,
  Building2,
  ShoppingCart,
  Heart,
  CheckCircle2,
  Workflow,
  Database,
  ShieldCheck,
  TrendingUp,
  Headphones,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/MotionSection'

/* ── All solution data ────────────────────────────────────────── */
const ALL_SOLUTIONS = [
  {
    id: 'ai-workflow',
    icon: BrainCircuit,
    category: 'AI & Automation',
    title: 'AI Workflow Automation',
    subtitle: 'Automate Smarter. Work Faster. Scale Without Limits.',
    short: 'Transform repetitive business processes into intelligent automated workflows connected across your CRM, documents, and enterprise tools.',
    tags: ['AI', 'Automation', 'SaaS', 'Enterprise'],
    featured: true,
    color: '#ED396D',
  },
  {
    id: 'ai-chatbot',
    icon: Bot,
    category: 'AI & Automation',
    title: 'AI Chatbot Development',
    subtitle: 'Intelligent AI Chatbots That Engage, Support & Convert',
    short: 'Build intelligent conversational experiences for customer support, lead qualification, and business communication.',
    tags: ['AI', 'Real-Time', 'Mobile'],
    color: '#037C9E',
  },
  {
    id: 'uber-clone',
    icon: CarIcon,
    category: 'Mobility',
    title: 'Uber Clone Development',
    subtitle: 'Launch a Powerful Ride-Hailing Platform',
    short: 'Production-ready ride-hailing apps with driver & passenger apps, live tracking, payments, and admin dashboard.',
    tags: ['Mobile', 'Real-Time', 'Cloud'],
    color: '#05A7D4',
  },
  {
    id: 'hospital',
    icon: HeartPulse,
    category: 'Healthcare',
    title: 'Hospital Management Software',
    subtitle: 'Simplify Healthcare Operations',
    short: 'Connected hospital and healthcare management platforms for smarter operations and better patient experiences.',
    tags: ['Enterprise', 'Cloud', 'Analytics'],
    color: '#ED396D',
  },
  {
    id: 'hotel',
    icon: Building2,
    category: 'Hospitality',
    title: 'Hotel Management Software',
    subtitle: 'Smart Hotel Management for Better Guest Experiences',
    short: 'Modern hotel management covering reservations, housekeeping, POS, billing, and guest communication.',
    tags: ['Enterprise', 'SaaS', 'Analytics'],
    color: '#037C9E',
  },
  {
    id: 'school',
    icon: GraduationCap,
    category: 'Education',
    title: 'School Management Software',
    subtitle: 'Empower Educational Institutions with Smart Management',
    short: 'End-to-end school management covering admissions, attendance, grades, fees, and parent communication.',
    tags: ['SaaS', 'Mobile', 'Cloud'],
    color: '#05A7D4',
  },
  {
    id: 'lms',
    icon: Radio,
    category: 'Education',
    title: 'Learning Management Software',
    subtitle: 'Modern LMS for Digital Education',
    short: 'Scalable digital learning platforms with course authoring, live classes, assessments, and learner analytics.',
    tags: ['SaaS', 'Mobile', 'Analytics'],
    color: '#ED396D',
  },
  {
    id: 'taxi-app',
    icon: Car,
    category: 'Mobility',
    title: 'Custom Taxi App Development',
    subtitle: 'Build High-Performance Taxi Apps for Modern Transportation',
    short: 'Full-featured taxi booking apps with real-time dispatch, driver management, payments, and tracking.',
    tags: ['Mobile', 'Real-Time', 'Cloud'],
    color: '#037C9E',
  },
  {
    id: 'real-estate',
    icon: Home,
    category: 'Enterprise',
    title: 'Real Estate Management Software',
    subtitle: 'Streamline Property Management with Intelligent Software',
    short: 'Property listing, tenant management, lease tracking, maintenance scheduling, and analytics dashboards.',
    tags: ['Enterprise', 'SaaS', 'Analytics'],
    color: '#05A7D4',
  },
  {
    id: 'handyman',
    icon: Hammer,
    category: 'Enterprise',
    title: 'Handyman Business Software',
    subtitle: 'Simplify Field Service Operations with Smart Software',
    short: 'Booking, scheduling, technician management, invoicing, and customer tracking for field service businesses.',
    tags: ['Mobile', 'SaaS', 'Real-Time'],
    color: '#ED396D',
  },
  {
    id: 'food-delivery',
    icon: Truck,
    category: 'Delivery',
    title: 'Food Delivery App Development',
    subtitle: 'Launch a Scalable Food Delivery Platform',
    short: 'Restaurant, rider, and customer apps with live tracking, order management, and delivery analytics.',
    tags: ['Mobile', 'Real-Time', 'Cloud'],
    color: '#037C9E',
  },
  {
    id: 'vehicle-rental',
    icon: Package,
    category: 'Mobility',
    title: 'Vehicle Rental App Development',
    subtitle: 'Smart Vehicle Rental Solutions for Modern Mobility',
    short: 'Self-service vehicle booking, fleet management, insurance integration, and driver verification.',
    tags: ['Mobile', 'Real-Time', 'Cloud'],
    color: '#05A7D4',
  },
  {
    id: 'carpooling',
    icon: Users,
    category: 'Mobility',
    title: 'Car Pooling App Development',
    subtitle: 'Build Intelligent Carpooling Platforms',
    short: 'Smart carpooling matching, ride scheduling, split payments, and sustainability reporting.',
    tags: ['Mobile', 'AI', 'Real-Time'],
    color: '#ED396D',
  },
  {
    id: 'doordash-clone',
    icon: ShoppingCart,
    category: 'Delivery',
    title: 'DoorDash Clone Development',
    subtitle: 'Build a Scalable Delivery Platform',
    short: 'Multi-vendor marketplace delivery platform with zone management, commission engine, and analytics.',
    tags: ['Mobile', 'SaaS', 'Real-Time'],
    color: '#037C9E',
  },
  {
    id: 'dating-app',
    icon: Heart,
    category: 'Enterprise',
    title: 'Dating App Development',
    subtitle: 'Create Engaging Dating Apps That Build Meaningful Connections',
    short: 'AI-powered matching algorithms, real-time chat, safety features, and subscription monetization.',
    tags: ['Mobile', 'AI', 'Real-Time'],
    color: '#05A7D4',
  },
  {
    id: 'creator-platform',
    icon: Radio,
    category: 'Enterprise',
    title: 'Creator Subscription Platform',
    subtitle: 'Build a Secure Content Subscription Platform',
    short: 'Monetize digital content with subscriptions, pay-per-view, tipping, and creator analytics.',
    tags: ['SaaS', 'Payments', 'Mobile'],
    color: '#ED396D',
  },
  {
    id: 'digital-wallet',
    icon: CreditCard,
    category: 'Fintech',
    title: 'Digital Wallet & Cash App',
    subtitle: 'Develop Secure Digital Wallet & Payment Applications',
    short: 'P2P transfers, bill payments, QR payments, transaction history, and bank integrations.',
    tags: ['Payments', 'Security', 'Mobile'],
    color: '#037C9E',
  },
  {
    id: 'ev-charging',
    icon: Zap,
    category: 'Mobility',
    title: 'EV Charging App Development',
    subtitle: 'Smart EV Charging Solutions for Connected Mobility',
    short: 'Station finder, session management, remote monitoring, billing, and fleet operator dashboards.',
    tags: ['Mobile', 'IoT', 'Cloud'],
    color: '#05A7D4',
  },
  {
    id: 'pickup-drop',
    icon: Truck,
    category: 'Delivery',
    title: 'White Label Pickup & Drop',
    subtitle: 'Ready-to-Launch Pickup & Delivery Platform',
    short: 'Branded, white-label courier and pickup/drop platform with driver app, tracking, and merchant portal.',
    tags: ['Mobile', 'Real-Time', 'SaaS'],
    color: '#ED396D',
  },
  {
    id: 'restaurant',
    icon: UtensilsCrossed,
    category: 'Hospitality',
    title: 'Restaurant Management Software',
    subtitle: 'Simplify Restaurant Operations with Intelligent Software',
    short: 'Table management, POS, kitchen display, inventory, billing, and customer loyalty all in one platform.',
    tags: ['Enterprise', 'Real-Time', 'Analytics'],
    color: '#037C9E',
  },
  {
    id: 'digital-wallet-2',
    icon: Wallet,
    category: 'Fintech',
    title: 'Fintech & Payment Platforms',
    subtitle: 'Secure Fintech Platforms for Modern Businesses',
    short: 'Regulated payment gateways, lending platforms, BNPL, and embedded finance solutions.',
    tags: ['Payments', 'Security', 'SaaS'],
    color: '#05A7D4',
  },
]

const CATEGORIES = ['All', 'AI & Automation', 'Mobility', 'Healthcare', 'Education', 'Hospitality', 'Delivery', 'Fintech', 'Enterprise']

/* ── Card component ─────────────────────────────────────────── */
function SolutionCard({ sol, index }: { sol: typeof ALL_SOLUTIONS[0]; index: number }) {
  const shouldReduce = useReducedMotion()
  const Icon = sol.icon

  return (
    <motion.div
      whileHover={shouldReduce ? {} : { y: -4, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
      className="group relative bg-white rounded-2xl p-6 flex flex-col cursor-pointer hover:shadow-lg transition-all duration-300"
      style={{ border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
    >
      {/* top hover accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${sol.color}, ${sol.color}88)` }}
        aria-hidden="true"
      />

      {/* watermark */}
      <span className="absolute top-3 right-4 text-5xl font-black leading-none select-none pointer-events-none" style={{ color: 'rgba(0,0,0,0.03)' }} aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* category */}
      <span className="text-[10px] font-bold uppercase tracking-wider mb-3 block" style={{ color: sol.color }}>
        {sol.category}
      </span>

      {/* icon */}
      <div className="mb-4">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${sol.color}12` }}>
          <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" style={{ color: sol.color }} strokeWidth={1.75} aria-hidden="true" />
        </div>
      </div>

      {/* content */}
      <h3 className="text-base font-bold text-[#111111] mb-1.5 group-hover:text-[#ED396D] transition-colors duration-200 leading-snug">
        {sol.title}
      </h3>
      <p className="text-xs text-gray-400 font-medium mb-2 leading-snug">{sol.subtitle}</p>
      <p className="text-sm text-gray-500 leading-relaxed flex-1 line-clamp-3">{sol.short}</p>

      {/* tags */}
      <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
        {sol.tags.slice(0, 3).map(tag => (
          <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-50 text-gray-500 border border-slate-100">
            {tag}
          </span>
        ))}
      </div>

      {/* cta */}
      <Link
        href="/contacts"
        className="inline-flex items-center gap-1 text-sm font-semibold transition-all duration-200 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
        style={{ color: sol.color }}
        aria-label={`Learn more about ${sol.title}`}
      >
        Learn More <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
      </Link>
    </motion.div>
  )
}

/* ── Featured AI Automation Block ───────────────────────────── */
function FeaturedAI() {
  const capabilities = [
    { icon: Workflow, label: 'CRM Automation' },
    { icon: Database, label: 'Document Processing' },
    { icon: BrainCircuit, label: 'AI Agents' },
    { icon: TrendingUp, label: 'Workflow Integration' },
    { icon: Building2, label: 'Business Process Automation' },
    { icon: ShieldCheck, label: 'Enterprise Integrations' },
  ]

  return (
    <FadeUp>
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{ border: '1px solid rgba(237,57,109,0.12)', background: 'linear-gradient(135deg, #fff9fb 0%, #f0faff 100%)' }}
      >
        {/* Subtle grid pattern */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-10">
          {/* Left */}
          <div className="flex flex-col justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, #ED396D)' }} />
                <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#ED396D]">Featured Solution</span>
              </div>

              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: '#ED396D14' }}>
                <BrainCircuit className="w-6 h-6 text-[#ED396D]" strokeWidth={1.75} />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mb-3 leading-tight">
                Automate Smarter. Work Faster.<br className="hidden sm:block" /> Scale Without Limits.
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Transform repetitive business processes into intelligent automated workflows. Build connected systems for CRM automation, document processing, workflow integration, and enterprise productivity.
              </p>
            </div>

            <Button href="/contacts" variant="primary" size="sm" className="self-start">
              Discuss Your Automation Project <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>

          {/* Right — capability grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 self-center">
            {capabilities.map(({ icon: CapIcon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 bg-white border border-slate-100"
                style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
              >
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#ED396D10' }}>
                  <CapIcon className="w-3.5 h-3.5 text-[#ED396D]" strokeWidth={1.75} />
                </div>
                <span className="text-xs font-semibold text-gray-700 leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeUp>
  )
}

/* ── Why Us compact strip ───────────────────────────────────── */
function WhyWebBlaze() {
  const items = [
    { icon: BrainCircuit, title: 'AI-Powered Innovation', desc: 'Intelligent solutions that automate workflows and accelerate business growth.', color: '#ED396D' },
    { icon: ShieldCheck, title: 'Security & Compliance', desc: 'Enterprise-grade architecture designed for reliable and protected digital products.', color: '#037C9E' },
    { icon: TrendingUp, title: 'Built for Performance', desc: 'Fast and scalable platforms optimized for speed, reliability, and future growth.', color: '#05A7D4' },
    { icon: Headphones, title: 'Technology Partner', desc: 'Strategy, design, development, deployment and ongoing technical support.', color: '#ED396D' },
  ]

  return (
    <div className="mt-16">
      <FadeUp className="text-center mb-10">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, #ED396D)' }} />
          <span className="text-xs font-bold tracking-[0.18em] uppercase" style={{ background: 'linear-gradient(90deg, #ED396D, #037C9E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Why WebBlaze
          </span>
          <span className="h-px w-8" style={{ background: 'linear-gradient(90deg, #05A7D4, transparent)' }} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] mb-3">
          Built for Performance.{' '}
          <span style={{ background: 'linear-gradient(135deg, #ED396D 0%, #037C9E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Designed for Growth.
          </span>
        </h2>
        <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
          We combine innovation, industry expertise, and modern technology to deliver scalable digital products designed around real business objectives.
        </p>
      </FadeUp>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map(({ icon: Icon, title, desc, color }) => (
          <StaggerItem key={title}>
            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-white" style={{ border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${color}12` }}>
                <Icon className="w-5 h-5" style={{ color }} strokeWidth={1.75} aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#111111] mb-1">{title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  )
}

/* ── Bottom CTA ─────────────────────────────────────────────── */
function BottomCTA() {
  return (
    <FadeUp>
      <div
        className="relative mt-16 rounded-2xl overflow-hidden text-center px-6 py-12"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', border: '1px solid rgba(255,255,255,0.06)' }}
      >
        {/* subtle dot grid */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, #ED396D)' }} />
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#ED396D]">Have an Idea?</span>
            <span className="h-px w-8" style={{ background: 'linear-gradient(90deg, #ED396D, transparent)' }} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Build Your Next Digital Solution?
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-8 max-w-lg mx-auto">
            Whether you&apos;re launching a startup, modernising enterprise operations or creating an AI-powered platform, WebBlaze Softtech — an ABL BusinessTech LLP Company — can turn your idea into a scalable digital product.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href="/contacts" variant="primary" size="md">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              href="https://calendly.com/webblazesofttech-wbs/30min"
              variant="white"
              size="md"
              openInNewTab
            >
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </FadeUp>
  )
}

/* ── Main Page Client Component ─────────────────────────────── */
export function SolutionsPageClient() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? ALL_SOLUTIONS
    : ALL_SOLUTIONS.filter(s => s.category === activeCategory)

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-20 pb-14 lg:pt-28 lg:pb-18"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}
        aria-label="Solutions hero"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.028) 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />
        <div className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] rounded-full blur-[120px]" aria-hidden="true"
          style={{ background: 'radial-gradient(circle,rgba(237,57,109,0.08) 0%,transparent 70%)' }}
        />

        <Container className="relative z-10">
          <FadeUp className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, #ED396D)' }} />
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#ED396D]">Our Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-5">
              Digital Products Built Around{' '}
              <span style={{ background: 'linear-gradient(135deg, #ED396D 0%, #05A7D4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Real Business Challenges
              </span>
            </h1>
            <p className="text-base text-gray-400 leading-relaxed max-w-2xl mb-8">
              From AI-powered automation and enterprise software to mobility platforms, healthcare systems, and on-demand applications — we design scalable digital products around your business model.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: CheckCircle2, label: '20+ Product Categories', color: '#ED396D' },
                { icon: CheckCircle2, label: '500+ Projects Delivered', color: '#05A7D4' },
                { icon: CheckCircle2, label: '40+ Industries Served', color: '#ED396D' },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                  <Icon className="w-4 h-4 shrink-0" style={{ color }} aria-hidden="true" />
                  {label}
                </div>
              ))}
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* ── Main content ────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white" aria-label="Solution categories and listings">
        <Container>

          {/* Featured AI block */}
          <div className="mb-12">
            <FeaturedAI />
          </div>

          {/* Section header */}
          <FadeUp className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, #ED396D)' }} />
                <span className="text-xs font-bold tracking-[0.18em] uppercase" style={{ background: 'linear-gradient(90deg, #ED396D, #037C9E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  All Solutions
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
                Complete Product Ecosystem
              </h2>
            </div>
            <Button href="/contacts" variant="primary" size="sm" className="self-start sm:self-auto">
              Start Your Project <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </FadeUp>

          {/* Filter tabs */}
          <FadeUp className="mb-8">
            <div
              className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide"
              role="tablist"
              aria-label="Filter solutions by category"
            >
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  className="shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED396D] focus-visible:ring-offset-2"
                  style={
                    activeCategory === cat
                      ? { background: 'linear-gradient(135deg, #ED396D, #037C9E)', color: '#fff', boxShadow: '0 2px 8px rgba(237,57,109,0.25)' }
                      : { background: '#f8fafc', color: '#64748b', border: '1px solid rgba(0,0,0,0.07)' }
                  }
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Solution cards grid */}
          <StaggerContainer
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((sol, i) => (
              <StaggerItem key={sol.id}>
                <SolutionCard sol={sol} index={i} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Why WebBlaze */}
          <WhyWebBlaze />

          {/* Bottom CTA */}
          <BottomCTA />

        </Container>
      </section>
    </>
  )
}
