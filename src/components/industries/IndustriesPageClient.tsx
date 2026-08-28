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
  TrendingUp,
  ChevronLeft,
  Layers,
  Database,
  Workflow,
  Lock,
  Search,
  Sliders
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
      stats: '&lt;200ms Stream Latency',
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
    <main id="main-content" className="bg-[#FFFFFF] text-[#0B1220] selection:bg-[#D9005B] selection:text-white">

      {/* ─────────────────────────────────────────────────────────
          1. HERO SECTION (Light Premium Backdrop with Industry Visual)
          ───────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 lg:pt-36 lg:pb-32 overflow-hidden bg-[#0A0F1C] border-b border-slate-800 text-white">

        {/* Abstract Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <Image
            src="/industries.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Subtle geometric background grid */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

        {/* Decorative soft gradient ambient blobs */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#E3164F]/20 via-[#8B5CF6]/10 to-[#05A7D4]/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
        <div className="absolute -bottom-20 right-10 w-[450px] h-[450px] bg-gradient-to-br from-[#05A7D4]/20 via-[#38BDF8]/10 to-[#E3164F]/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="container-xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* HERO LEFT SIDE */}
            <div className="lg:col-span-7 space-y-6 text-left">

              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#E3164F] animate-ping" />
                <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-white">
                  INDUSTRIES WE TRANSFORM
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Deep Domain Expertise.{' '}
                <span className="bg-gradient-to-r from-[#E3164F] via-[#F04A8A] via-[#8B5CF6] to-[#05A7D4] bg-clip-text text-transparent">
                  Engineered for Your Sector.
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
                Generic software fails when faced with strict industry compliance, legacy mainframes, and complex operational flows. We engineer custom technology solutions tailored specifically to the regulations, scale, and performance needs of your industry.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#E3164F] to-[#F04A8A] hover:opacity-95 transition-all shadow-lg shadow-[#E3164F]/20 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Consult an Industry Architect
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#industry-grid"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-semibold text-white bg-white/10 border border-white/20 shadow-sm hover:bg-white/20 transition-all hover:-translate-y-0.5 backdrop-blur-sm"
                >
                  Explore Industry Sectors
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm font-medium text-slate-300 border-t border-slate-700/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E3164F]" />
                  <span>20+ Industry Sectors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" />
                  <span>SOC2 & HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#05A7D4]" />
                  <span>Legacy Mainframe Middleware</span>
                </div>
              </div>

            </div>

            {/* HERO RIGHT SIDE — 3D Visual & Floating Cards */}
            <div className="lg:col-span-5 relative flex justify-center items-center w-full">

               {/* Main Visual Glass Container */}
               <div className="relative w-full max-w-lg aspect-square rounded-3xl bg-gradient-to-br from-white/90 via-slate-50/80 to-white/90 border border-slate-200 shadow-2xl p-3 sm:p-6 backdrop-blur-xl flex flex-col justify-between group">
                 {/* Visual Image Background with Low Opacity (with its own overflow-hidden wrapper to clip rounded corners) */}
                 <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden opacity-10 group-hover:opacity-15 transition-opacity duration-500">
                   <Image
                     src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format&fit=crop"
                     alt="Corporate infrastructure and tech teams"
                     fill
                     className="object-cover transition-transform duration-700 group-hover:scale-103"
                     unoptimized
                   />
                   {/* Glowing Canvas backdrop */}
                   <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,0,91,0.08)_0%,rgba(0,174,239,0.08)_50%,transparent_100%)] pointer-events-none" />
                 </div>

                 {/* Central Industry Core Component */}
                 <div className="relative z-10 my-auto flex flex-col items-center justify-center space-y-4 sm:space-y-6">

                   {/* Outer Pulsing Glowing Ring */}
                   <div className="relative w-24 h-24 sm:w-36 sm:h-36 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#D9005B]/20 via-[#8B5CF6]/20 to-[#00AEEF]/20 p-1 animate-spin-slow">
                     <div className="w-full h-full rounded-full bg-white flex items-center justify-center border border-slate-200/80 shadow-inner">
                       <Building2 className="w-10 h-10 sm:w-16 sm:h-16 text-[#D9005B] animate-pulse" />
                     </div>
                     <span className="absolute -top-1 left-1/2 w-4 h-4 rounded-full bg-[#D9005B] shadow-lg shadow-[#D9005B]" />
                     <span className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-[#00AEEF] shadow-lg shadow-[#00AEEF]" />
                     <span className="absolute bottom-2 left-2 w-3.5 h-3.5 rounded-full bg-[#8B5CF6] shadow-lg shadow-[#8B5CF6]" />
                   </div>

                   <div className="text-center space-y-1">
                     <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                       ABL INDUSTRY DOMAIN CORE
                     </div>
                     <div className="text-xs sm:text-sm font-semibold text-[#0B1220] max-w-[200px] sm:max-w-none mx-auto leading-tight">
                       Tailored Platforms for Enterprise Operations
                     </div>
                   </div>
                 </div>

                 {/* Floating Card 1: Fintech & Banking */}
                 <div className="absolute top-3 left-2 sm:top-6 sm:-left-4 z-20 flex items-center gap-2 sm:gap-3 px-2.5 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-bounce-slow">
                   <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gradient-to-tr from-[#D9005B] to-[#F04A8A] flex items-center justify-center text-white shadow-md shrink-0">
                     <Landmark className="w-4 h-4 sm:w-5 sm:h-5" />
                   </div>
                   <div>
                     <p className="text-[10px] sm:text-xs font-semibold text-[#0B1220]">FinTech & Banking</p>
                     <p className="text-[8px] sm:text-[10px] text-[#475569]">SOC2 & Real-Time APIs</p>
                   </div>
                 </div>

                 {/* Floating Card 2: Healthcare & Life Sciences */}
                 <div className="absolute top-10 right-2 sm:top-12 sm:-right-4 z-20 flex items-center gap-2 sm:gap-3 px-2.5 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-float-delayed">
                   <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gradient-to-tr from-[#8B5CF6] to-[#A855F7] flex items-center justify-center text-white shadow-md shrink-0">
                     <HeartPulse className="w-4 h-4 sm:w-5 sm:h-5" />
                   </div>
                   <div>
                     <p className="text-[10px] sm:text-xs font-semibold text-[#0B1220]">Healthcare Systems</p>
                     <p className="text-[8px] sm:text-[10px] text-[#475569]">HIPAA & EHR Interop</p>
                   </div>
                 </div>

                 {/* Floating Card 3: Retail & E-Commerce */}
                 <div className="absolute bottom-10 left-2 sm:bottom-10 sm:-left-4 z-20 flex items-center gap-2 sm:gap-3 px-2.5 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-float">
                   <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gradient-to-tr from-[#00AEEF] to-[#38BDF8] flex items-center justify-center text-white shadow-md shrink-0">
                     <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                   </div>
                   <div>
                     <p className="text-[10px] sm:text-xs font-semibold text-[#0B1220]">Headless Commerce</p>
                     <p className="text-[8px] sm:text-[10px] text-[#475569]">AI Personalization Engine</p>
                   </div>
                 </div>

                 {/* Floating Card 4: Industry 4.0 & Supply Chain */}
                 <div className="absolute bottom-3 right-2 sm:bottom-6 sm:-right-4 z-20 flex items-center gap-2 sm:gap-3 px-2.5 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-bounce-slow">
                   <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gradient-to-tr from-[#D9005B] via-[#8B5CF6] to-[#00AEEF] flex items-center justify-center text-white shadow-md shrink-0">
                     <Factory className="w-4 h-4 sm:w-5 sm:h-5" />
                   </div>
                   <div>
                     <p className="text-[10px] sm:text-xs font-semibold text-[#0B1220]">Manufacturing & IoT</p>
                     <p className="text-[8px] sm:text-[10px] text-[#475569]">Predictive Factory AI</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>


          {/* Trusted-By Logo Strip */}
          <div className="mt-20 pt-10 border-t border-slate-200/70">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-[#475569] mb-8">
              Empowering global leaders across finance, healthcare, commerce & manufacturing
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all">
              {['Vanguard Bank', 'HealthScale Inc', 'Apex Logistics', 'OmniCommerce', 'Global Steel', 'Scaleup AI'].map((brand, i) => (
                <div key={i} className="flex items-center gap-2 font-bold text-slate-700 text-lg hover:text-[#D9005B] transition-colors">
                  <div className="w-6 h-6 rounded-md bg-slate-300 flex items-center justify-center text-slate-800 text-xs font-black">
                    {brand[0]}
                  </div>
                  <span>{brand}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. STATS / BUSINESS IMPACT STRIP
          ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#FFFFFF] border-b border-slate-100">
        <div className="container-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

            <div className="text-center lg:text-left lg:pl-8 lg:first:pl-0 lg:border-l lg:first:border-l-0 border-slate-200/60">
              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#D9005B] to-[#F04A8A] bg-clip-text text-transparent tracking-tight">
                20+
              </div>
              <p className="text-sm font-bold text-[#0B1220] mt-3">Specialized Industry Domains</p>
              <p className="text-xs text-slate-400 mt-1">Tailored operational logic</p>
            </div>

            <div className="text-center lg:text-left lg:pl-8 lg:border-l border-slate-200/60">
              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent tracking-tight">
                100%
              </div>
              <p className="text-sm font-bold text-[#0B1220] mt-3">Regulatory Compliance</p>
              <p className="text-xs text-slate-400 mt-1">HIPAA, SOC2, PCI-DSS & GDPR</p>
            </div>

            <div className="text-center lg:text-left lg:pl-8 lg:border-l border-slate-200/60">
              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#00AEEF] to-[#38BDF8] bg-clip-text text-transparent tracking-tight">
                99.999%
              </div>
              <p className="text-sm font-bold text-[#0B1220] mt-3">Mission-Critical Uptime</p>
              <p className="text-xs text-slate-400 mt-1">High-availability cloud panels</p>
            </div>

            <div className="text-center lg:text-left lg:pl-8 lg:border-l border-slate-200/60">
              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#D9005B] via-[#8B5CF6] to-[#00AEEF] bg-clip-text text-transparent tracking-tight">
                Zero
              </div>
              <p className="text-sm font-bold text-[#0B1220] mt-3">Legacy Lock-In Risk</p>
              <p className="text-xs text-slate-400 mt-1">100% IP & source code ownership</p>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          3. CATEGORY FILTER TABS & INDUSTRY GRID
          ───────────────────────────────────────────────────────── */}
      <section id="industry-grid" className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200/70">
        <div className="container-xl">

          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
              DOMAINS WE SERVE
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#0B1220]">
              Technology Built Around Your Industry's Scale.
            </h2>
            <p className="text-base sm:text-lg text-[#475569]">
              Explore our domain-specific engineering solutions designed to solve real operational challenges.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex overflow-x-auto lg:flex-wrap items-center lg:justify-center gap-3 mb-12 pb-4 lg:pb-0 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] px-6 lg:px-0 w-full">
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
                className={`px-6 py-3 rounded-2xl font-semibold text-sm transition-all shrink-0 ${activeCategory === tab.id
                  ? 'bg-gradient-to-r from-[#D9005B] to-[#00AEEF] text-white shadow-lg shadow-[#D9005B]/15'
                  : 'bg-white text-[#475569] hover:bg-slate-100 border border-slate-200'
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
                  className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D9005B] via-[#8B5CF6] to-[#00AEEF] opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#D9005B]/10 via-[#8B5CF6]/10 to-[#00AEEF]/10 text-[#D9005B] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#D9005B]/10 text-[#D9005B]">
                        {ind.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#0B1220] group-hover:text-[#D9005B] transition-colors mb-1">
                        {ind.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#8B5CF6]">{ind.tagline}</p>
                    </div>

                    <p className="text-sm text-[#475569] leading-relaxed">
                      {ind.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {ind.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#0B1220]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D9005B]" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#00AEEF]">{ind.stats}</span>
                    <Link
                      href={`/industries/${ind.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D9005B] group-hover:translate-x-1 transition-transform"
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
          4. FEATURED INDUSTRY SPOTLIGHT (FinTech & Healthcare Deep Dive)
          ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF]">
        <div className="container-xl space-y-24">

          {/* Spotlight 1: Financial Services */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                INDUSTRY SPOTLIGHT
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
                Financial Services & FinTech Engineering
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
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
                    <div className="w-5 h-5 rounded-full bg-[#D9005B]/10 text-[#D9005B] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D9005B] to-[#8B5CF6] shadow-md hover:opacity-95 transition-all"
                >
                  Consult FinTech Architects
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 shadow-xl space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <Landmark className="w-6 h-6 text-[#D9005B]" />
                    <span className="font-bold text-[#0B1220]">FinTech High-Speed Payment Core</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#D9005B]/10 text-[#D9005B] font-semibold">99.999% SLA</span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                    <Lock className="w-5 h-5 text-[#8B5CF6] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#0B1220]">Zero-Trust OAuth2 Auth Engine</p>
                      <p className="text-xs text-[#475569]">Encrypted session tokens with biometric MFA mobile integration.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                    <Zap className="w-5 h-5 text-[#00AEEF] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#0B1220]">Microsecond AI Fraud Scoring</p>
                      <p className="text-xs text-[#475569]">Evaluates user behavior velocity and flags anomalous card charges instantly.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                    <Database className="w-5 h-5 text-[#D9005B] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#0B1220]">ACID Ledger Reconciliation</p>
                      <p className="text-xs text-[#475569]">Immutable transaction audit logging with automated bank statement sync.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Spotlight 2: Healthcare (Reversed Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00AEEF]">
                HEALTHCARE INNOVATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
                Healthcare & Life Sciences Platforms
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
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
                    <div className="w-5 h-5 rounded-full bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#00AEEF] to-[#8B5CF6] shadow-md hover:opacity-95 transition-all"
                >
                  Consult HealthTech Leads
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1">
              <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <HeartPulse className="w-6 h-6 text-[#00AEEF]" />
                    <span className="font-bold text-[#0B1220]">HIPAA Health Care Gateway</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#00AEEF]/10 text-[#00AEEF] font-semibold">FHIR Ready</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center space-y-2">
                    <ShieldCheck className="w-6 h-6 text-[#00AEEF] mx-auto" />
                    <p className="text-xs font-bold text-[#0B1220]">PHI Data Encryption</p>
                    <p className="text-[10px] text-[#475569]">AES-256 Storage Vault</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center space-y-2">
                    <Workflow className="w-6 h-6 text-[#8B5CF6] mx-auto" />
                    <p className="text-xs font-bold text-[#0B1220]">EHR Integration</p>
                    <p className="text-[10px] text-[#475569]">Epic & Cerner Sync</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
                  <p className="text-xs font-semibold text-[#0B1220]">Patient Mobile Portal → HL7 FHIR Pipeline → Encrypted EHR Vault</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          5. WHY CHOOSE ABL TECH (Split Section)
          ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200/70">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                THE ABL ADVANTAGE
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-[#0B1220] leading-tight">
                Why Enterprise Leaders Trust ABL Tech for Industry Solutions.
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                We combine deep technical capabilities in AI, cloud, and microservices with thorough knowledge of industry compliance, legacy mainframes, and specific business workflows.
              </p>

              <div className="pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-white bg-[#0B1220] hover:bg-[#D9005B] transition-colors shadow-md"
                >
                  Schedule Industry Audit
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#D9005B]/10 text-[#D9005B] flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">Domain Precision</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Software architected strictly around your industry's exact operational logic and user expectations.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">Pre-Audited Security</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Built-in HIPAA, SOC2 Type II, PCI-DSS, and GDPR security compliance guardrails.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center font-bold">
                  03
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">Legacy Mainframe Sync</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  API middleware connectors linking legacy mainframes, SAP/Oracle with modern web portals.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#D9005B]/10 text-[#D9005B] flex items-center justify-center font-bold">
                  04
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">100% Legal IP Transfer</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Full legal assignment and ownership of all source code, schemas, and design assets.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          6. TESTIMONIAL SECTION (Soft Gradient Background)
          ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#D9005B]/5 via-white to-[#00AEEF]/5">
        <div className="container-xl max-w-4xl mx-auto">

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-2xl space-y-8 relative overflow-hidden">

            <div className="flex items-center justify-between border-b border-slate-100 pb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                EXECUTIVE TESTIMONIAL
              </span>
              <div className="flex items-center gap-1 text-[#D9005B]">
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
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#D9005B] to-[#00AEEF] text-white flex items-center justify-center font-bold text-sm shadow-md">
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0B1220]">{testimonials[activeTestimonial].name}</p>
                  <p className="text-xs text-[#475569]">{testimonials[activeTestimonial].role} — {testimonials[activeTestimonial].company}</p>
                </div>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-[#0B1220]" />
                </button>
                <button
                  onClick={() => setActiveTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                  className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors"
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
          7. FAQ SECTION (Modern Accordion)
          ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF]">
        <div className="container-xl max-w-4xl mx-auto">

          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
              GOT QUESTIONS?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-[#475569]">
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
                    className="w-full text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#0B1220] hover:text-[#D9005B] transition-colors py-2"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#D9005B]' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="pb-4 pr-10 text-sm text-slate-500 leading-relaxed pt-2 animate-fadeIn font-normal">
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
          8. FINAL CTA + CONTACT FORM (MANDATORY SECTION)
          ───────────────────────────────────────────────────────── */}
      <section id="contact-form" className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-slate-200">
        <div className="container-xl">

          <div className="rounded-3xl bg-gradient-to-br from-pink-50/80 via-slate-50 to-cyan-50/80 border border-pink-200/60 p-2 sm:p-6 lg:p-6 shadow-2xl border-pink-200/60 p-5 sm:p-12 lg:p-16 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* LEFT SIDE: Copy & Trust Points */}
              <div className="lg:col-span-6 space-y-8">

                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                    DISCUSS YOUR INDUSTRY PROJECT
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-bold text-[#0B1220] leading-tight">
                    Ready to Build Technology Tailored to Your Sector?
                  </h2>
                  <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
                    Speak with our senior industry software architects to audit your existing domain systems, ensure regulatory compliance, and blueprint your custom software solution.
                  </p>
                </div>

                {/* Trust Points */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-5 h-5 text-[#D9005B]" />
                    <span>Free industry software architecture consultation</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-5 h-5 text-[#8B5CF6]" />
                    <span>Pre-audited SOC2, HIPAA & PCI-DSS compliance roadmap</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-5 h-5 text-[#00AEEF]" />
                    <span>100% full IP & source code ownership transfer</span>
                  </div>
                </div>

                {/* Direct Contact Info */}
                <div className="pt-6 border-t border-slate-200/80 space-y-3">
                  <p className="text-xs font-bold uppercase text-[#475569] tracking-wider">Direct Reachout</p>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm font-medium text-[#0B1220]">
                    <a href="mailto:hello@abltech.com" className="hover:text-[#D9005B] transition-colors">
                      ✉️ hello@abltech.com
                    </a>
                    <a href="tel:+919876543210" className="hover:text-[#D9005B] transition-colors">
                      📞 +91 98765 43210
                    </a>
                  </div>
                </div>

              </div>

              {/* RIGHT SIDE: CONTACT FORM */}
              <div className="lg:col-span-6">
                <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-200/90 relative">

                  {isSubmitted ? (
                    <div className="py-12 text-center space-y-6 animate-fadeIn">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-lg">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#0B1220]">Thank you!</h3>
                      <p className="text-sm text-[#475569] max-w-md mx-auto">
                        Our industry engineering team will contact you shortly to schedule your consultation.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-xs font-bold text-[#D9005B] bg-[#D9005B]/10 hover:bg-[#D9005B]/20 transition-colors"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* First Name */}
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
                            className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50 focus:bg-white focus:outline-none transition-all ${formErrors.firstName ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 focus:border-[#D9005B]'
                              }`}
                          />
                          {formErrors.firstName && (
                            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {formErrors.firstName}
                            </p>
                          )}
                        </div>

                        {/* Last Name */}
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
                            className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50 focus:bg-white focus:outline-none transition-all ${formErrors.lastName ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 focus:border-[#D9005B]'
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

                        {/* Business Email */}
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
                            className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50 focus:bg-white focus:outline-none transition-all ${formErrors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 focus:border-[#D9005B]'
                              }`}
                          />
                          {formErrors.email && (
                            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {formErrors.email}
                            </p>
                          )}
                        </div>

                        {/* Phone Number */}
                        <div>
                          <label className="block text-xs font-bold text-[#0B1220] uppercase mb-1">
                            Phone Number*
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 000-0000"
                            className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50 focus:bg-white focus:outline-none transition-all ${formErrors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 focus:border-[#D9005B]'
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

                        {/* Company Name */}
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
                            className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50 focus:bg-white focus:outline-none transition-all ${formErrors.company ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 focus:border-[#D9005B]'
                              }`}
                          />
                          {formErrors.company && (
                            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {formErrors.company}
                            </p>
                          )}
                        </div>

                        {/* Industry Sector */}
                        <div>
                          <label className="block text-xs font-bold text-[#0B1220] uppercase mb-1">
                            Industry Sector*
                          </label>
                          <select
                            name="industry"
                            value={formData.industry}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:border-[#D9005B] transition-all"
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

                      {/* Budget */}
                      <div>
                        <label className="block text-xs font-bold text-[#0B1220] uppercase mb-1">
                          Project Budget
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:border-[#D9005B] transition-all"
                        >
                          <option value="Under $10,000">Under $10,000</option>
                          <option value="$10,000–$25,000">$10,000–$25,000</option>
                          <option value="$25,000–$50,000">$25,000–$50,000</option>
                          <option value="$50,000+">$50,000+</option>
                          <option value="Let's Discuss">Let's Discuss</option>
                        </select>
                      </div>

                      {/* Project Details */}
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
                          className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50 focus:bg-white focus:outline-none transition-all ${formErrors.details ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 focus:border-[#D9005B]'
                            }`}
                        />
                        {formErrors.details && (
                          <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {formErrors.details}
                          </p>
                        )}
                      </div>

                      {/* Terms Agreement Checkbox */}
                      <div>
                        <label className="flex items-start gap-2.5 cursor-pointer">
                          <input
                            type="checkbox"
                            name="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleInputChange}
                            className="mt-1 rounded border-slate-300 text-[#D9005B] focus:ring-[#D9005B]"
                          />
                          <span className="text-xs text-[#475569]">
                            I agree to the Privacy Policy and allow ABL Tech to contact me regarding my inquiry.
                          </span>
                        </label>
                        {formErrors.agreeTerms && (
                          <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {formErrors.agreeTerms}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-[#D9005B] via-[#8B5CF6] to-[#00AEEF] hover:opacity-95 transition-all shadow-xl shadow-[#D9005B]/20 hover:shadow-2xl hover:shadow-[#D9005B]/30 flex items-center justify-center gap-2"
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
