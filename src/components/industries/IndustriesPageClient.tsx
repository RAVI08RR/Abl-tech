'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ShoppingCart,
  HeartPulse,
  Landmark,
  GraduationCap,
  Clapperboard,
  Factory,
  Truck,
  Plane,
  Briefcase,
  Rocket,
  ArrowRight,
  Check,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Building2,
  ShieldCheck,
  Zap,
  ChevronLeft,
  Database,
  Workflow,
  Lock
} from 'lucide-react'

export function IndustriesPageClient() {
  // Active industry category filter
  const [activeCategory, setActiveCategory] = useState<string>('all')

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // Testimonial State
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  // Contact Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: 'Financial Services',
    budget: '$25,000–$50,000',
    details: '',
    agreeTerms: false,
  })

  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
      if (checked && formErrors[name]) {
        setFormErrors(prev => {
          const updated = { ...prev }
          delete updated[name]
          return updated
        })
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
      if (formErrors[name]) {
        setFormErrors(prev => {
          const updated = { ...prev }
          delete updated[name]
          return updated
        })
      }
    }
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}
    if (!formData.firstName.trim()) errors.firstName = 'First name is required'
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      errors.email = 'Business email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }
    if (!formData.phone.trim()) errors.phone = 'Phone number is required'
    if (!formData.company.trim()) errors.company = 'Company name is required'
    if (!formData.details.trim()) errors.details = 'Project details are required'
    if (!formData.agreeTerms) errors.agreeTerms = 'You must agree to the privacy policy'
    return errors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }
    setFormErrors({})
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1200)
  }

  const industriesList = [
    {
      id: 'financial-services',
      category: 'finance',
      name: 'Financial Services & Banking',
      tagline: 'FinTech, Core Banking & Compliance Automation',
      description: 'Architecting ultra-secure digital banking apps, real-time payment gateways, AI fraud detection engines, and SOC2/PCI-DSS compliant cloud infrastructure.',
      icon: Landmark,
      slug: 'financial-services',
      stats: '99.999% Uptime SLA',
      highlights: ['Real-Time Open Banking APIs', 'AI Microsecond Fraud Detection', 'Automated Regulatory Compliance'],
      badge: 'High Security',
    },
    {
      id: 'healthcare',
      category: 'health',
      name: 'Healthcare & Life Sciences',
      tagline: 'HIPAA-Compliant Patient Portals & Telehealth',
      description: 'Building secure EHR integrations, patient mobile portals, AI diagnostic tools, and HIPAA-compliant data vaults for hospitals and healthtech providers.',
      icon: HeartPulse,
      slug: 'healthcare',
      stats: '100% HIPAA Compliant',
      highlights: ['HL7 & FHIR Interoperability', 'Telehealth & Remote Monitoring', 'Patient Portal Automation'],
      badge: 'HIPAA Ready',
    },
    {
      id: 'retail-ecommerce',
      category: 'commerce',
      name: 'Retail & E-commerce',
      tagline: 'Headless Commerce & AI Recommendation Engines',
      description: 'Delivering lightning-fast Next.js PWA storefronts, multi-channel inventory sync engines, and AI personalization that drives 3x higher cart conversions.',
      icon: ShoppingCart,
      slug: 'retail-ecommerce',
      stats: '3x Conversion Rate',
      highlights: ['Headless Shopify & Commerce', 'AI Personalization Engine', 'Real-Time Inventory Sync'],
      badge: 'High Conversion',
    },
    {
      id: 'manufacturing',
      category: 'enterprise',
      name: 'Manufacturing & Industry 4.0',
      tagline: 'Smart Factory IoT & Predictive Maintenance',
      description: 'Integrating IoT sensor pipelines, custom ERP modules, supply chain visibility, and predictive AI maintenance to prevent factory floor downtime.',
      icon: Factory,
      slug: 'manufacturing',
      stats: '99.9% Stock Precision',
      highlights: ['IoT Edge Telemetry', 'Predictive Maintenance AI', 'Supply Chain ERP Integration'],
      badge: 'Industry 4.0',
    },
    {
      id: 'logistics',
      category: 'enterprise',
      name: 'Logistics & Freight Tech',
      tagline: 'Real-Time Route Optimization & Fleet Systems',
      description: 'Engineered fleet management systems, automated dispatcher portals, IoT GPS telemetry streams, and warehouse management software.',
      icon: Truck,
      slug: 'logistics',
      stats: '35% Route Savings',
      highlights: ['GPS Fleet Telemetry', 'Automated Dispatch Engines', 'Warehouse WMS Systems'],
      badge: 'Fleet Ops',
    },
    {
      id: 'startups',
      category: 'growth',
      name: 'Startups & High-Growth Scaleups',
      tagline: 'Speed-to-Market MVP & Scalable Cloud',
      description: 'Deploying dedicated agile pods to build production-ready MVPs in 8 weeks, scaling cloud architecture from day one for venture-backed founders.',
      icon: Rocket,
      slug: 'startups',
      stats: '8-Week MVP Launch',
      highlights: ['Agile 2-Week Sprints', 'Cloud-Native Architecture', 'Investor-Ready Technical Code'],
      badge: 'Rapid Scale',
    },
    {
      id: 'education',
      category: 'growth',
      name: 'Education & EdTech Platforms',
      tagline: 'Scalable LMS, Virtual Classrooms & AI Tutors',
      description: 'Designing interactive Learning Management Systems (LMS), student mobile apps, automated grading portals, and AI-assisted tutoring engines.',
      icon: GraduationCap,
      slug: 'education',
      stats: '1M+ Concurrent Users',
      highlights: ['Interactive Video Classrooms', 'AI Student Progress Tracking', 'SCORM & LMS Connectors'],
      badge: 'EdTech Scale',
    },
    {
      id: 'media-entertainment',
      category: 'commerce',
      name: 'Media & Entertainment',
      tagline: 'Low-Latency Video Streaming & DRM Security',
      description: 'Constructing high-bitrate video streaming platforms, digital asset management (DAM) repositories, and audience engagement portals.',
      icon: Clapperboard,
      slug: 'media-entertainment',
      stats: '<200ms Stream Latency',
      highlights: ['HLS/DASH Video Streaming', 'DRM Content Encryption', 'Custom OTT Apps'],
      badge: 'High Bitrate',
    },
    {
      id: 'travel-hospitality',
      category: 'commerce',
      name: 'Travel & Hospitality',
      tagline: 'Booking Engine Middleware & Loyalty Apps',
      description: 'Building multi-currency booking engines, hotel PMS integrations, customer loyalty mobile portals, and real-time room reservation software.',
      icon: Plane,
      slug: 'travel-hospitality',
      stats: 'Sub-Second Bookings',
      highlights: ['GDS & Hotel PMS Integration', 'Mobile Guest Keyless Check-In', 'Dynamic Pricing Engine'],
      badge: 'Guest UX',
    },
    {
      id: 'professional-services',
      category: 'enterprise',
      name: 'Professional Services & B2B',
      tagline: 'Client Portals, Billing & Project Automation',
      description: 'Developing secure B2B client collaboration portals, automated time tracking, subscription billing engines, and enterprise document vaults.',
      icon: Briefcase,
      slug: 'professional-services',
      stats: '100% Billing Accuracy',
      highlights: ['Secure B2B Client Portals', 'Automated Invoice Generation', 'Role-Based Document Vaults'],
      badge: 'Enterprise B2B',
    },
  ]

  const filteredIndustries = activeCategory === 'all'
    ? industriesList
    : industriesList.filter(item => item.category === activeCategory)

  const testimonials = [
    {
      quote: "“ABL Tech transformed our core banking platform with zero disruption to daily customer transactions. Their understanding of financial regulatory compliance is unparalleled.”",
      name: "Arthur Pendelton",
      role: "Chief Technology Officer",
      company: "Vanguard Financial Global",
      avatar: "AP",
    },
    {
      quote: "“The HIPAA-compliant telehealth platform built by ABL Tech handled over 250,000 patient consultations during peak volume with zero security flaws.”",
      name: "Dr. Katelyn Ross",
      role: "VP of Digital Health",
      company: "HealthCare Scale Systems",
      avatar: "KR",
    },
    {
      quote: "“Our e-commerce conversion rate jumped by 140% after ABL Tech deployed a custom headless Next.js PWA with real-time AI product recommendations.”",
      name: "Marcus Sterling",
      role: "Head of Digital Commerce",
      company: "Apex Retail Direct",
      avatar: "MS",
    },
  ]

  const faqs = [
    {
      question: 'How does ABL Tech tailor software solutions to specific industry regulations?',
      answer: 'Our software architects design industry-specific compliance into the core system architecture—including HIPAA/FDA guidelines for healthcare, SOC2/PCI-DSS for fintech, and WCAG AA for accessibility—ensuring pre-audited security and legal compliance from Day 1.',
    },
    {
      question: 'Can you integrate custom software with our existing legacy industry systems?',
      answer: 'Yes. We build secure API middleware and Enterprise Service Bus (ESB) adapters allowing new cloud applications, AI agents, and mobile portals to push and pull data seamlessly from legacy SAP, Oracle, core banking mainframes, or hospital EHR systems.',
    },
    {
      question: 'How quickly can your engineering pods start an industry project?',
      answer: 'Our domain-specialized engineering pods can complete discovery and onboard into your project within 1 to 2 weeks following initial architecture alignment.',
    },
    {
      question: 'Do you offer post-launch SLA maintenance for mission-critical industry platforms?',
      answer: 'Yes. We provide 24/7 SLA-backed Site Reliability Engineering (SRE) support, continuous database backups, real-time threat monitoring, and automated scaling.',
    },
    {
      question: 'Can we build custom modules incrementally for our industry platform?',
      answer: 'Absolutely. We specialize in modular enterprise architecture. You can launch high-impact core modules first and systematically expand features as user adoption scales.',
    },
    {
      question: 'Who legally owns the source code and intellectual property (IP)?',
      answer: 'You own 100% of all intellectual property, source code, data pipelines, and design assets upon project delivery with full legal assignment.',
    },
  ]

  return (
    <main id="main-content" className="bg-[#FFFFFF] text-[#0B1220] selection:bg-[#E3164F] selection:text-white">

      {/* ─────────────────────────────────────────────────────────
          1. HERO SECTION (Matching Homepage Light Theme Backdrop)
          ───────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#FFFFFF] to-[#F1F5F9]/30 border-b border-slate-200/60">

        {/* Abstract Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <Image
            src="/client-rotate.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Ambient Glow Blobs */}
        <div
          className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-60 z-0"
          style={{ background: 'radial-gradient(circle, rgba(5,167,212,0.06) 0%, transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-60 z-0"
          style={{ background: 'radial-gradient(circle, rgba(227,22,79,0.05) 0%, transparent 70%)' }}
        />

        <div className="container-xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* HERO LEFT SIDE */}
            <div className="lg:col-span-7 space-y-6 text-left">

              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-slate-200/60 shadow-sm backdrop-blur-sm w-fit">
                <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#E3164F]" />
                <span
                  className="text-xs font-bold tracking-[0.18em] uppercase"
                  style={{
                    background: 'linear-gradient(90deg, #E3164F, #05A7D4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  INDUSTRIES WE TRANSFORM
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1220] leading-[1.12] tracking-tight text-pretty">
                Deep Domain Expertise.{' '}
                <span
                  style={{
                    background: 'linear-gradient(90deg, #E3164F, #05A7D4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Engineered for Your Sector.
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed font-normal text-pretty">
                Generic software fails when faced with strict industry compliance, legacy mainframes, and complex operational flows. We engineer custom technology solutions tailored specifically to the regulations, scale, and performance needs of your industry.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-white bg-[#E3164F] hover:bg-[#B00E3A] transition-all shadow-lg shadow-[#E3164F]/25 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Consult an Industry Architect
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#industry-grid"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold text-[#0B1220] bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm transition-all hover:-translate-y-0.5"
                >
                  Explore Industry Sectors
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm font-semibold text-slate-600 border-t border-slate-200/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E3164F]" />
                  <span>20+ Industry Sectors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#05A7D4]" />
                  <span>SOC2 & HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E3164F]" />
                  <span>Legacy Mainframe Middleware</span>
                </div>
              </div>

            </div>

            {/* HERO RIGHT SIDE — Interactive Core Graphic */}
            <div className="lg:col-span-5 relative flex justify-center items-center w-full">

              <div className="relative w-full max-w-lg aspect-square rounded-3xl bg-white border border-slate-200/90 shadow-2xl p-6 backdrop-blur-xl flex flex-col justify-between group overflow-hidden">
                
                {/* Glowing Canvas Backdrop */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,167,212,0.06)_0%,rgba(227,22,79,0.04)_50%,transparent_100%)] pointer-events-none" />

                {/* Central Industry Core Component */}
                <div className="relative z-10 my-auto flex flex-col items-center justify-center space-y-5">

                  {/* Outer Ring */}
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#E3164F]/15 via-[#05A7D4]/15 to-[#E3164F]/15 p-1 animate-spin-slow">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-inner">
                      <Building2 className="w-12 h-12 sm:w-16 sm:h-16 text-[#E3164F]" />
                    </div>
                    <span className="absolute -top-1 left-1/2 w-4 h-4 rounded-full bg-[#E3164F] shadow-md shadow-[#E3164F]" />
                    <span className="absolute bottom-2 right-2 w-3.5 h-3.5 rounded-full bg-[#05A7D4] shadow-md shadow-[#05A7D4]" />
                  </div>

                  <div className="text-center space-y-1">
                    <div className="text-xs font-extrabold uppercase tracking-widest text-[#E3164F]">
                      ABL INDUSTRY DOMAIN CORE
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#0B1220]">
                      Tailored Platforms for Enterprise Operations
                    </div>
                  </div>
                </div>

                {/* Floating Card 1: FinTech */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-xl">
                  <div className="w-8 h-8 rounded-xl bg-[#E3164F]/10 text-[#E3164F] flex items-center justify-center font-bold shrink-0">
                    <Landmark className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0B1220]">FinTech & Banking</p>
                    <p className="text-[10px] text-slate-500 font-medium">SOC2 & Open APIs</p>
                  </div>
                </div>

                {/* Floating Card 2: Healthcare */}
                <div className="absolute top-8 right-4 z-20 flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-xl">
                  <div className="w-8 h-8 rounded-xl bg-[#05A7D4]/10 text-[#05A7D4] flex items-center justify-center font-bold shrink-0">
                    <HeartPulse className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0B1220]">Healthcare Systems</p>
                    <p className="text-[10px] text-slate-500 font-medium">HIPAA & EHR Interop</p>
                  </div>
                </div>

                {/* Floating Card 3: Commerce */}
                <div className="absolute bottom-10 left-4 z-20 flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-xl">
                  <div className="w-8 h-8 rounded-xl bg-[#05A7D4]/10 text-[#05A7D4] flex items-center justify-center font-bold shrink-0">
                    <ShoppingCart className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0B1220]">Headless Commerce</p>
                    <p className="text-[10px] text-slate-500 font-medium">AI Personalization</p>
                  </div>
                </div>

                {/* Floating Card 4: Industry 4.0 */}
                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-xl">
                  <div className="w-8 h-8 rounded-xl bg-[#E3164F]/10 text-[#E3164F] flex items-center justify-center font-bold shrink-0">
                    <Factory className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0B1220]">Manufacturing & IoT</p>
                    <p className="text-[10px] text-slate-500 font-medium">Predictive Factory AI</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. STATS STRIP
          ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#FFFFFF] border-b border-slate-200/60">
        <div className="container-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="text-center lg:text-left lg:pl-8 lg:first:pl-0 lg:border-l lg:first:border-l-0 border-slate-200/60">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#E3164F] tracking-tight">
                20+
              </div>
              <p className="text-sm font-bold text-[#0B1220] mt-2">Specialized Industry Domains</p>
              <p className="text-xs text-slate-500 mt-0.5">Tailored operational logic</p>
            </div>

            <div className="text-center lg:text-left lg:pl-8 lg:border-l border-slate-200/60">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#05A7D4] tracking-tight">
                100%
              </div>
              <p className="text-sm font-bold text-[#0B1220] mt-2">Regulatory Compliance</p>
              <p className="text-xs text-slate-500 mt-0.5">HIPAA, SOC2, PCI-DSS & GDPR</p>
            </div>

            <div className="text-center lg:text-left lg:pl-8 lg:border-l border-slate-200/60">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#E3164F] tracking-tight">
                99.999%
              </div>
              <p className="text-sm font-bold text-[#0B1220] mt-2">Mission-Critical Uptime</p>
              <p className="text-xs text-slate-500 mt-0.5">High-availability cloud panels</p>
            </div>

            <div className="text-center lg:text-left lg:pl-8 lg:border-l border-slate-200/60">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#05A7D4] tracking-tight">
                Zero
              </div>
              <p className="text-sm font-bold text-[#0B1220] mt-2">Legacy Lock-In Risk</p>
              <p className="text-xs text-slate-500 mt-0.5">100% IP & source code ownership</p>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          3. CATEGORY FILTER TABS & INDUSTRY GRID
          ───────────────────────────────────────────────────────── */}
      <section id="industry-grid" className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200/60">
        <div className="container-xl">

          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E3164F]">
              DOMAINS WE SERVE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B1220]">
              Technology Built Around Your Industry&apos;s Scale.
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Explore our domain-specific engineering solutions designed to solve real operational challenges.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex overflow-x-auto lg:flex-wrap items-center lg:justify-center gap-3 mb-12 pb-4 lg:pb-0 scrollbar-none px-4 lg:px-0 w-full">
            {[
              { id: 'all', label: 'All Industries' },
              { id: 'finance', label: 'FinTech & Banking' },
              { id: 'health', label: 'Healthcare & Biotech' },
              { id: 'commerce', label: 'Retail & Commerce' },
              { id: 'enterprise', label: 'Manufacturing & B2B' },
              { id: 'growth', label: 'Startups & EdTech' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer shrink-0 ${activeCategory === tab.id
                  ? 'bg-[#05A7D4] text-white border-[#05A7D4] shadow-md shadow-[#05A7D4]/25'
                  : 'bg-[#F8F9FA] text-gray-700 hover:bg-gray-100 border-gray-200/80'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 3-Column Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIndustries.map((ind) => {
              const IconComp = ind.icon
              return (
                <div
                  key={ind.id}
                  className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:border-[#05A7D4]/40 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#E3164F]/10 text-[#E3164F] flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#05A7D4]/10 text-[#05A7D4]">
                        {ind.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#0B1220] group-hover:text-[#E3164F] transition-colors mb-1">
                        {ind.name}
                      </h3>
                      <p className="text-xs font-bold text-[#05A7D4]">{ind.tagline}</p>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {ind.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {ind.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#0B1220]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#E3164F]" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#05A7D4]">{ind.stats}</span>
                    <Link
                      href={`/industries/${ind.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E3164F] hover:text-[#B00E3A] group-hover:translate-x-1 transition-transform"
                    >
                      Explore Solutions →
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          4. SPOTLIGHT SECTIONS
          ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF]">
        <div className="container-xl space-y-24">

          {/* Spotlight 1: Financial Services */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E3164F]">
                INDUSTRY SPOTLIGHT
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1220]">
                Financial Services & FinTech Engineering
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                In financial services, security and sub-second latency are non-negotiable. We engineer core banking digital portals, real-time payment gateway adapters, and AI-driven fraud detection engines that process microsecond transactions safely.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'PCI-DSS Level 1 & SOC2 Type II pre-audited security compliance',
                  'Sub-millisecond AI fraud anomaly detection during transaction clearing',
                  'Open Banking PSD2 & OAuth 2.0 API gateway integration',
                  'Multi-currency automated billing, ledger reconciliation & reporting',
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-medium text-[#0B1220]">
                    <div className="w-5 h-5 rounded-full bg-[#E3164F]/10 text-[#E3164F] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white bg-[#E3164F] hover:bg-[#B00E3A] transition-all shadow-md shadow-[#E3164F]/25"
                >
                  Consult FinTech Architects
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl p-8 bg-slate-50 border border-slate-200/80 shadow-xl space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                  <div className="flex items-center gap-3">
                    <Landmark className="w-6 h-6 text-[#E3164F]" />
                    <span className="font-bold text-[#0B1220]">FinTech Payment Core</span>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-[#E3164F]/10 text-[#E3164F] font-bold">99.999% SLA</span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                    <Lock className="w-5 h-5 text-[#05A7D4] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#0B1220]">Zero-Trust OAuth2 Auth Engine</p>
                      <p className="text-xs text-slate-500 font-normal">Encrypted session tokens with biometric MFA mobile integration.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                    <Zap className="w-5 h-5 text-[#E3164F] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#0B1220]">Microsecond AI Fraud Scoring</p>
                      <p className="text-xs text-slate-500 font-normal">Evaluates user behavior velocity and flags anomalous card charges instantly.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                    <Database className="w-5 h-5 text-[#05A7D4] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#0B1220]">ACID Ledger Reconciliation</p>
                      <p className="text-xs text-slate-500 font-normal">Immutable transaction audit logging with automated bank statement sync.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Spotlight 2: Healthcare */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#05A7D4]">
                HEALTHCARE INNOVATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1220]">
                Healthcare & Life Sciences Platforms
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Connect patient care, clinical operations, and health data vaults. We build HIPAA-compliant mobile telehealth portals, HL7/FHIR record integration middleware, and AI diagnostic workflows.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  '100% HIPAA, HITECH & GDPR compliant encrypted data storage',
                  'Seamless HL7 / FHIR interoperability with Epic & Cerner EHRs',
                  'HD WebRTC video telehealth portals with e-prescribing sync',
                  'Granular Role-Based Access Control (RBAC) protecting sensitive PHI',
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-medium text-[#0B1220]">
                    <div className="w-5 h-5 rounded-full bg-[#05A7D4]/10 text-[#05A7D4] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white bg-[#05A7D4] hover:bg-[#037C9E] transition-all shadow-md shadow-[#05A7D4]/25"
                >
                  Consult HealthTech Leads
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1">
              <div className="rounded-3xl p-8 bg-slate-50 border border-slate-200/80 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                  <div className="flex items-center gap-3">
                    <HeartPulse className="w-6 h-6 text-[#05A7D4]" />
                    <span className="font-bold text-[#0B1220]">HIPAA Healthcare Gateway</span>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-[#05A7D4]/10 text-[#05A7D4] font-bold">FHIR Ready</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center space-y-2">
                    <ShieldCheck className="w-6 h-6 text-[#05A7D4] mx-auto" />
                    <p className="text-xs font-bold text-[#0B1220]">PHI Data Encryption</p>
                    <p className="text-[10px] text-slate-500 font-normal">AES-256 Vault</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center space-y-2">
                    <Workflow className="w-6 h-6 text-[#E3164F] mx-auto" />
                    <p className="text-xs font-bold text-[#0B1220]">EHR Integration</p>
                    <p className="text-[10px] text-slate-500 font-normal">Epic & Cerner Sync</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center">
                  <p className="text-xs font-semibold text-[#0B1220]">Patient Mobile Portal → HL7 FHIR Pipeline → Encrypted EHR Vault</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          5. WHY CHOOSE ABL TECH
          ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200/60">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E3164F]">
                THE ABL ADVANTAGE
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B1220] leading-tight">
                Why Enterprise Leaders Trust ABL Tech.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                We combine deep technical capabilities in AI, cloud, and microservices with thorough knowledge of industry compliance, legacy mainframes, and specific business workflows.
              </p>

              <div className="pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-white bg-[#E3164F] hover:bg-[#B00E3A] transition-all shadow-lg shadow-[#E3164F]/25"
                >
                  Schedule Industry Audit
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 space-y-3 hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#E3164F]/10 text-[#E3164F] flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">Domain Precision</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Software architected strictly around your industry&apos;s exact operational logic and user expectations.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 space-y-3 hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#05A7D4]/10 text-[#05A7D4] flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">Pre-Audited Security</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Built-in HIPAA, SOC2 Type II, PCI-DSS, and GDPR security compliance guardrails.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 space-y-3 hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#05A7D4]/10 text-[#05A7D4] flex items-center justify-center font-bold">
                  03
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">Legacy Mainframe Sync</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  API middleware connectors linking legacy mainframes, SAP/Oracle with modern web portals.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 space-y-3 hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#E3164F]/10 text-[#E3164F] flex items-center justify-center font-bold">
                  04
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">100% Legal IP Transfer</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Full legal assignment and ownership of all source code, schemas, and design assets.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          6. TESTIMONIAL SECTION
          ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#E3164F]/5 via-white to-[#05A7D4]/5">
        <div className="container-xl max-w-4xl mx-auto">

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-2xl space-y-8 relative overflow-hidden">

            <div className="flex items-center justify-between border-b border-slate-100 pb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E3164F]">
                EXECUTIVE TESTIMONIAL
              </span>
              <div className="flex items-center gap-1 text-[#E3164F]">
                {[...Array(5)].map((_, i) => (
                  <Sparkles key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            <p className="text-xl sm:text-2xl font-medium text-[#0B1220] leading-relaxed italic">
              {testimonials[activeTestimonial].quote}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E3164F] text-white flex items-center justify-center font-bold text-sm shadow-md">
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0B1220]">{testimonials[activeTestimonial].name}</p>
                  <p className="text-xs text-slate-500 font-normal">{testimonials[activeTestimonial].role} — {testimonials[activeTestimonial].company}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="p-2.5 rounded-full border border-slate-200 hover:bg-slate-100 transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-[#0B1220]" />
                </button>
                <button
                  onClick={() => setActiveTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                  className="p-2.5 rounded-full border border-slate-200 hover:bg-slate-100 transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-[#0B1220]" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          7. FAQ SECTION
          ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF]">
        <div className="container-xl max-w-4xl mx-auto">

          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E3164F]">
              GOT QUESTIONS?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1220]">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-slate-600 font-normal">
              Everything you need to know about partnering with ABL Tech for industry-specific engineering.
            </p>
          </div>

          <div className="divide-y divide-slate-100 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div key={idx} className="py-6 first:pt-0 last:pb-0">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#0B1220] hover:text-[#E3164F] transition-colors py-2"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#E3164F]' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="pb-4 pr-10 text-sm text-slate-500 leading-relaxed pt-2 font-normal">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          8. CONTACT FORM SECTION
          ───────────────────────────────────────────────────────── */}
      <section id="contact-form" className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-slate-200/60">
        <div className="container-xl">

          <div className="rounded-3xl bg-gradient-to-br from-pink-50/60 via-slate-50 to-cyan-50/60 border border-slate-200/80 p-6 sm:p-12 lg:p-16 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* LEFT SIDE */}
              <div className="lg:col-span-6 space-y-8">

                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#E3164F]">
                    DISCUSS YOUR INDUSTRY PROJECT
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B1220] leading-tight">
                    Ready to Build Technology Tailored to Your Sector?
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                    Speak with our senior industry software architects to audit your existing domain systems, ensure regulatory compliance, and blueprint your custom software solution.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-5 h-5 text-[#E3164F]" />
                    <span>Free industry software architecture consultation</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-5 h-5 text-[#05A7D4]" />
                    <span>Pre-audited SOC2, HIPAA & PCI-DSS compliance roadmap</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-5 h-5 text-[#E3164F]" />
                    <span>100% full IP & source code ownership transfer</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200/80 space-y-3">
                  <p className="text-xs font-bold uppercase text-slate-500 tracking-wider">Direct Reachout</p>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm font-medium text-[#0B1220]">
                    <a href="mailto:hello@abbusinesstech.com" className="hover:text-[#E3164F] transition-colors">
                      ✉️ hello@abbusinesstech.com
                    </a>
                    <a href="tel:+917416743434" className="hover:text-[#E3164F] transition-colors">
                      📞 +91 7416 743 434
                    </a>
                  </div>
                </div>

              </div>

              {/* RIGHT SIDE */}
              <div className="lg:col-span-6">
                <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-200/90 relative">

                  {isSubmitted ? (
                    <div className="py-12 text-center space-y-6">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-lg">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#0B1220]">Thank you!</h3>
                      <p className="text-sm text-slate-600 max-w-md mx-auto">
                        Our industry engineering team will contact you shortly to schedule your consultation.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-bold text-[#E3164F] bg-[#E3164F]/10 hover:bg-[#E3164F]/20 transition-colors"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#0B1220] uppercase mb-1">
                            First Name*
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="John"
                            className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50 focus:bg-white focus:outline-none transition-all ${formErrors.firstName ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 focus:border-[#E3164F]'
                              }`}
                          />
                          {formErrors.firstName && (
                            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {formErrors.firstName}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#0B1220] uppercase mb-1">
                            Last Name*
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Doe"
                            className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50 focus:bg-white focus:outline-none transition-all ${formErrors.lastName ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 focus:border-[#E3164F]'
                              }`}
                          />
                          {formErrors.lastName && (
                            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {formErrors.lastName}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#0B1220] uppercase mb-1">
                            Business Email*
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@company.com"
                            className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50 focus:bg-white focus:outline-none transition-all ${formErrors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 focus:border-[#E3164F]'
                              }`}
                          />
                          {formErrors.email && (
                            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {formErrors.email}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#0B1220] uppercase mb-1">
                            Phone Number*
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 98765 43210"
                            className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50 focus:bg-white focus:outline-none transition-all ${formErrors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 focus:border-[#E3164F]'
                              }`}
                          />
                          {formErrors.phone && (
                            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {formErrors.phone}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#0B1220] uppercase mb-1">
                            Company Name*
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Acme Corp"
                            className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50 focus:bg-white focus:outline-none transition-all ${formErrors.company ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 focus:border-[#E3164F]'
                              }`}
                          />
                          {formErrors.company && (
                            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {formErrors.company}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#0B1220] uppercase mb-1">
                            Industry Sector*
                          </label>
                          <select
                            name="industry"
                            value={formData.industry}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:border-[#E3164F] transition-all"
                          >
                            <option value="Financial Services">Financial Services & Banking</option>
                            <option value="Healthcare">Healthcare & Life Sciences</option>
                            <option value="Retail & E-commerce">Retail & E-commerce</option>
                            <option value="Manufacturing">Manufacturing & Industry 4.0</option>
                            <option value="Logistics">Logistics & Freight Tech</option>
                            <option value="Startups">Startups & Scaleups</option>
                            <option value="EdTech">Education & EdTech</option>
                            <option value="Media & Entertainment">Media & Streaming</option>
                            <option value="Travel & Hospitality">Travel & Hospitality</option>
                            <option value="Professional Services">Professional Services & B2B</option>
                            <option value="Other">Other Sector</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0B1220] uppercase mb-1">
                          Project Budget
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:border-[#E3164F] transition-all"
                        >
                          <option value="Under $10,000">Under $10,000</option>
                          <option value="$10,000–$25,000">$10,000–$25,000</option>
                          <option value="$25,000–$50,000">$25,000–$50,000</option>
                          <option value="$50,000+">$50,000+</option>
                          <option value="Let's Discuss">Let&apos;s Discuss</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0B1220] uppercase mb-1">
                          Project Details*
                        </label>
                        <textarea
                          name="details"
                          rows={4}
                          value={formData.details}
                          onChange={handleInputChange}
                          placeholder="Tell us about your industry software goals, compliance requirements, and target timeline..."
                          className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50 focus:bg-white focus:outline-none transition-all ${formErrors.details ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 focus:border-[#E3164F]'
                            }`}
                        />
                        {formErrors.details && (
                          <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {formErrors.details}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="flex items-start gap-2.5 cursor-pointer">
                          <input
                            type="checkbox"
                            name="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleInputChange}
                            className="mt-1 rounded border-slate-300 text-[#E3164F] focus:ring-[#E3164F]"
                          />
                          <span className="text-xs text-slate-500">
                            I agree to the Privacy Policy and allow ABL Tech to contact me regarding my inquiry.
                          </span>
                        </label>
                        {formErrors.agreeTerms && (
                          <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {formErrors.agreeTerms}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-full font-bold text-white bg-[#E3164F] hover:bg-[#B00E3A] transition-all shadow-xl shadow-[#E3164F]/20 hover:shadow-2xl flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <span>Processing Request...</span>
                        ) : (
                          <>
                            <span>Request a Free Consultation</span>
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </button>

                    </form>
                  )}

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </main>
  )
}
