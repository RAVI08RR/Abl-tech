'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Trophy,
  Rocket,
  Globe,
  Heart,
  Target,
  Search,
  Zap,
  Handshake,
  MapPin,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Building2,
  ShieldCheck,
  Users,
  TrendingUp,
  ChevronLeft,
  Award,
  Clock,
  Briefcase,
  Check
} from 'lucide-react'
import { LinkedInIcon } from '@/components/ui/Icons'

export function AboutPageClient() {
  // Active Values Tab or Story State
  const [activeStoryYear, setActiveStoryYear] = useState<number>(2005)

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // Testimonial State
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  // Contact Form State & Validation
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: 'Enterprise AI & Software',
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

  const companyMilestones = [
    {
      year: 2005,
      title: 'Company Founded',
      description: 'ABL BusinessTech LLP was established with a focus on core software engineering and enterprise IT consulting.',
    },
    {
      year: 2012,
      title: 'Global Expansion',
      description: 'Scaled cross-border operations, delivering enterprise systems for Fortune 500 brands including MasterCard & VISA.',
    },
    {
      year: 2018,
      title: 'Cloud & Microservices Core',
      description: 'Pioneered cloud-native Kubernetes, DevOps pipelines, and high-concurrency microservices architectures.',
    },
    {
      year: 2023,
      title: 'AI & Data Engineering Studio',
      description: 'Launched dedicated Enterprise AI, LLM RAG pipelines, and Snowflake data warehousing practices.',
    },
    {
      year: 2026,
      title: 'Global Co-Engineering Powerhouse',
      description: 'Over 500+ projects delivered across 40+ industries with 95% annual client retention.',
    },
  ]

  const teamMembers = [
    {
      name: 'Ravi Soni',
      role: 'Founder & CEO',
      bio: 'Technology entrepreneur with 20+ years building enterprise software for global Fortune 500 businesses.',
      linkedin: 'https://linkedin.com',
      avatar: 'RS',
      gradient: 'from-[#D9005B] to-[#F04A8A]',
      // Unsplash – free commercial use
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&q=80&auto=format&fit=crop&crop=face',
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Technology Officer',
      bio: 'Principal distributed systems engineer specializing in AI vector infrastructure and scalable cloud pods.',
      linkedin: 'https://linkedin.com',
      avatar: 'PS',
      gradient: 'from-[#8B5CF6] to-[#A855F7]',
      photo: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=400&h=400&q=80&auto=format&fit=crop&crop=face',
    },
    {
      name: 'Arun Mehta',
      role: 'VP of Digital Strategy',
      bio: 'Digital transformation leader who has spearheaded 50+ enterprise legacy modernization initiatives.',
      linkedin: 'https://linkedin.com',
      avatar: 'AM',
      gradient: 'from-[#00AEEF] to-[#38BDF8]',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80&auto=format&fit=crop&crop=face',
    },
    {
      name: 'Neha Gupta',
      role: 'Head of Product Design',
      bio: 'Award-winning UI/UX director focused on tokenized Figma systems and high-conversion product experiences.',
      linkedin: 'https://linkedin.com',
      avatar: 'NG',
      gradient: 'from-[#D9005B] to-[#8B5CF6]',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&q=80&auto=format&fit=crop&crop=face',
    },
    {
      name: 'Kiran Patel',
      role: 'Head of Mobile & Web',
      bio: 'Full-stack Next.js and React Native architect with 60+ production mobile applications shipped.',
      linkedin: 'https://linkedin.com',
      avatar: 'KP',
      gradient: 'from-[#00AEEF] to-[#D9005B]',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&q=80&auto=format&fit=crop&crop=face',
    },
    {
      name: 'Sunita Rao',
      role: 'VP of Client Success',
      bio: 'Enterprise relationship leader ensuring every engineering engagement delivers measurable ROI.',
      linkedin: 'https://linkedin.com',
      avatar: 'SR',
      gradient: 'from-[#8B5CF6] to-[#00AEEF]',
      photo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&q=80&auto=format&fit=crop&crop=face',
    },
  ]

  const companyValues = [
    {
      title: 'Business Outcomes First',
      description: 'We measure engineering success by your business ROI, not just lines of code. Every architectural choice directly serves your KPIs.',
      icon: Target,
      color: '#D9005B',
    },
    {
      title: 'Radical Transparency',
      description: 'Honest timelines, clear progress reporting, and zero surprises. You maintain real-time visibility into Jira sprints and Git commits.',
      icon: Search,
      color: '#8B5CF6',
    },
    {
      title: 'Top 1% Engineering Standards',
      description: 'Non-negotiable quality. We enforce automated Playwright QA, SOC2 security scans, and clean microservice architectures.',
      icon: Zap,
      color: '#00AEEF',
    },
    {
      title: 'Co-Engineering Partnership',
      description: 'We act as true co-engineering partners—integrating into your daily standups and adopting your architecture instantly.',
      icon: Handshake,
      color: '#D9005B',
    },
  ]

  const testimonials = [
    {
      quote: "“ABL BusinessTech LLP has been our core engineering partner for over 5 years. Their team's code quality, security standards, and speed of delivery are unmatched.”",
      name: "Arthur Pendelton",
      role: "VP of Global Technology",
      company: "Enterprise Payments Corp",
      avatar: "AP",
    },
    {
      quote: "“When we needed to scale our cloud infrastructure to support 10x user growth, ABL BusinessTech deployed a senior DevOps pod that executed zero-downtime migration.”",
      name: "Sophia Vance",
      role: "Chief Technology Officer",
      company: "SaaS Scale Systems",
      avatar: "SV",
    },
  ]

  const faqs = [
    {
      question: 'When was ABL BusinessTech LLP founded?',
      answer: 'ABL BusinessTech LLP was founded in 2005. Over two decades, we have evolved from a specialist software consulting firm into a global AI, software engineering, and cloud transformation powerhouse.',
    },
    {
      question: 'What types of companies do you partner with?',
      answer: 'We partner with enterprise organizations, Fortune 500 brands, mid-market leaders, and funded venture-backed scaleups across 40+ industries including Fintech, Healthcare, E-Commerce, and Manufacturing.',
    },
    {
      question: 'How do your co-engineering pods integrate with existing internal teams?',
      answer: 'Our senior engineers integrate into your Slack channels, Jira boards, GitHub repositories, and daily morning standups—functioning as a seamless extension of your internal product pod.',
    },
    {
      question: 'What security standards do you adhere to?',
      answer: 'Security is engineered into our DNA. We strictly comply with SOC2 Type II, HIPAA, PCI-DSS Level 1, and GDPR standards, enforcing AES-256 data encryption and static vulnerability scans.',
    },
    {
      question: 'Who owns the intellectual property (IP) and source code?',
      answer: 'You own 100% of all intellectual property, source code, data pipelines, and design assets upon project delivery with full legal assignment.',
    },
  ]

  return (
    <main id="main-content" className="bg-[#FFFFFF] text-[#0B1220] selection:bg-[#D9005B] selection:text-white">

      {/* ─────────────────────────────────────────────────────────
          1. HERO SECTION (Light Premium Backdrop with Visual Card)
          ───────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 lg:pt-20 lg:pb-36 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#FFFFFF] to-[#F1F5F9]/30 border-b border-slate-200/50">

        {/* Subtle geometric background grid */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#0b1220_1px,transparent_1px),linear-gradient(to_bottom,#0b1220_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        {/* Decorative soft gradient ambient blobs */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#D9005B]/5 via-[#8B5CF6]/5 to-[#00AEEF]/5 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
        <div className="absolute -bottom-20 right-10 w-[450px] h-[450px] bg-gradient-to-br from-[#00AEEF]/5 via-[#38BDF8]/5 to-[#D9005B]/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="container-xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* HERO LEFT SIDE */}
            <div className="lg:col-span-7 space-y-8 text-left">

              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D9005B]/8 via-[#8B5CF6]/8 to-[#00AEEF]/8 border border-[#D9005B]/15 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9005B]" />
                <span className="text-[11px] font-bold tracking-widest uppercase bg-gradient-to-r from-[#D9005B] via-[#8B5CF6] to-[#00AEEF] bg-clip-text text-transparent">
                  ABOUT ABL BUSINESSTECH (EST. 2005)
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-[#0B1220] leading-[1.05] text-pretty">
                Engineering Technology That{' '}
                <span className="bg-gradient-to-r from-[#D9005B] via-[#F04A8A] via-[#8B5CF6] to-[#00AEEF] bg-clip-text text-transparent">
                  Moves Enterprise Business.
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-[#475569] max-w-2xl leading-relaxed font-normal text-pretty">
                Since 2005, ABL BusinessTech LLP has been a trusted technology partner for global enterprises and ambitious scaleups. We design, build, and scale production-ready AI, custom software, and cloud platforms that create measurable business impact.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#D9005B] via-[#F04A8A] to-[#00AEEF] hover:opacity-95 transition-all shadow-md shadow-[#D9005B]/15 hover:shadow-lg hover:shadow-[#D9005B]/25 hover:-translate-y-0.5 duration-300"
                >
                  Work With Us
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#story"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-semibold text-[#0B1220] bg-white border border-slate-200 shadow-sm hover:border-[#D9005B]/30 hover:bg-slate-50 transition-all hover:-translate-y-0.5 duration-300"
                >
                  Our 20-Year Journey
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-6 text-xs font-semibold text-[#475569] border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9005B]" />
                  <span>20+ Years in Business</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" />
                  <span>500+ Enterprise Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF]" />
                  <span>95% Client Retention</span>
                </div>
              </div>

            </div>

            {/* HERO RIGHT SIDE — Real Team Photo with Floating Stat Cards */}
            <div className="lg:col-span-5 relative flex justify-center items-center group">

              {/* Decorative Frame */}
              <div className="relative w-full max-w-lg p-2 bg-white/75 border border-slate-200/60 rounded-[2.5rem] shadow-xl backdrop-blur-sm">
                <div className="relative w-full overflow-hidden rounded-[2.25rem]" style={{ aspectRatio: '4/5' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop"
                    alt="ABL BusinessTech team collaborating in a modern office environment"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                    unoptimized
                    priority
                  />
                  {/* Subtle gradient overlay for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/70 via-transparent to-transparent" />
                  {/* Bottom caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-white/80">ABL BusinessTech LLP</p>
                    <p className="text-base font-bold text-white leading-tight">Enterprise AI & Co-Engineering Since 2005</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 1: 20+ Years Excellence */}
              <div className="absolute top-6 -left-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-slate-200/80 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#D9005B] to-[#F04A8A] flex items-center justify-center text-white shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0B1220]">20+ Years Excellence</p>
                  <p className="text-[10px] text-[#475569]">Established 2005</p>
                </div>
              </div>

              {/* Floating Card 2: 500+ Global Projects */}
              <div className="absolute top-32 -right-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-slate-200/80 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#8B5CF6] to-[#A855F7] flex items-center justify-center text-white shadow-sm">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0B1220]">500+ Projects</p>
                  <p className="text-[10px] text-[#475569]">Global Enterprise Delivery</p>
                </div>
              </div>

              {/* Floating Card 3: 40+ Industries */}
              <div className="absolute bottom-24 -left-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-slate-200/80 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00AEEF] to-[#38BDF8] flex items-center justify-center text-white shadow-sm">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0B1220]">40+ Industries</p>
                  <p className="text-[10px] text-[#475569]">Worldwide Coverage</p>
                </div>
              </div>

              {/* Floating Card 4: 95% Retention */}
              <div className="absolute bottom-6 -right-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-slate-200/80 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#D9005B] via-[#8B5CF6] to-[#00AEEF] flex items-center justify-center text-white shadow-sm">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0B1220]">95% Retention</p>
                  <p className="text-[10px] text-[#475569]">Long-Term Co-Engineering</p>
                </div>
              </div>

            </div>

          </div>

          {/* Trusted-By Logo Strip */}
          <div className="mt-24 pt-12 border-t border-slate-200/60">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-8">
              Trusted by global enterprise giants & industry innovators
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-40 grayscale hover:opacity-75 hover:grayscale-0 transition-all duration-300">
              {['MasterCard', 'VISA', 'Facebook', 'Autodesk', 'UBS Global', 'Apex Logistics'].map((brand, i) => (
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
          2. STATS / BUSINESS IMPACT STRIP (Minimal Editorial)
          ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#FFFFFF] border-b border-slate-100">
        <div className="container-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

            <div className="text-center lg:text-left lg:pl-8 lg:first:pl-0 lg:border-l lg:first:border-l-0 border-slate-200/60">
              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#D9005B] to-[#F04A8A] bg-clip-text text-transparent tracking-tight">
                20+ Years
              </div>
              <p className="text-sm font-bold text-[#0B1220] mt-3">In Business Since 2005</p>
              <p className="text-xs text-slate-400 mt-1">Two decades of enterprise engineering</p>
            </div>

            <div className="text-center lg:text-left lg:pl-8 lg:border-l border-slate-200/60">
              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent tracking-tight">
                500+
              </div>
              <p className="text-sm font-bold text-[#0B1220] mt-3">Projects Delivered</p>
              <p className="text-xs text-slate-400 mt-1">Global enterprise scale</p>
            </div>

            <div className="text-center lg:text-left lg:pl-8 lg:border-l border-slate-200/60">
              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#00AEEF] to-[#38BDF8] bg-clip-text text-transparent tracking-tight">
                40+
              </div>
              <p className="text-sm font-bold text-[#0B1220] mt-3">Industries Served</p>
              <p className="text-xs text-slate-400 mt-1">Worldwide domain coverage</p>
            </div>

            <div className="text-center lg:text-left lg:pl-8 lg:border-l border-slate-200/60">
              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#D9005B] via-[#8B5CF6] to-[#00AEEF] bg-clip-text text-transparent tracking-tight">
                95%
              </div>
              <p className="text-sm font-bold text-[#0B1220] mt-3">Client Retention</p>
              <p className="text-xs text-slate-400 mt-1">Long-term partnership focus</p>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          3. OUR MISSION & STORY (Split Layout with Timeline)
          ───────────────────────────────────────────────────────── */}
      <section id="story" className="py-28 lg:py-36 bg-[#F8FAFC] border-y border-slate-200/50">
        <div className="container-xl">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-16">

            <div className="lg:col-span-6 space-y-8">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#D9005B]">
                OUR MISSION & STORY
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B1220] leading-tight text-pretty">
                Making World-Class Technology Accessible to Ambitious Enterprises.
              </h2>
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed text-pretty font-normal">
                Founded in 2005, ABL BusinessTech LLP was built on a single conviction: that ambitious businesses deserve access to the same elite engineering talent and cloud-native architecture that powers the world's tech giants.
              </p>
              <p className="text-base text-[#475569] leading-relaxed text-pretty font-normal">
                Over two decades, we have evolved into a full-service AI, software, and cloud engineering powerhouse—helping clients navigate technological disruptions from early web services to modern AI models.
              </p>

              {/* Office / Team Photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group border border-slate-200/30" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop"
                  alt="Modern technology office workspace — ABL BusinessTech engineering center"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#D9005B]/15 to-transparent" />
              </div>

              <div className="pt-2 flex items-center gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D9005B] to-[#8B5CF6] shadow-md hover:opacity-95 transition-all text-sm duration-300"
                >
                  Partner With Us
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Timeline Milestones Right Column */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-xl font-bold text-[#0B1220] tracking-tight">Company Evolution Timeline</h3>

              <div className="space-y-6 border-l border-slate-200/80 pl-6 ml-2 relative">
                {companyMilestones.map((m) => (
                  <div key={m.year} className="relative group">
                    {/* Bullet dot */}
                    <div className="absolute -left-[30px] top-2 w-2.5 h-2.5 rounded-full bg-white border border-[#D9005B] group-hover:bg-[#D9005B] transition-colors duration-300" />
                    
                    <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-[#D9005B]/30 transition-all duration-300">
                      <span className="text-[10px] font-bold text-[#D9005B] px-2.5 py-0.5 rounded-full bg-[#D9005B]/10">
                        {m.year}
                      </span>
                      <h4 className="text-base font-bold text-[#0B1220] mt-2 tracking-tight">{m.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1 font-normal">{m.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          4. OUR CORE VALUES (Staggered Grid Card Layout)
          ───────────────────────────────────────────────────────── */}
      <section className="py-28 lg:py-36 bg-[#FFFFFF]">
        <div className="container-xl">

          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#D9005B]">
              HOW WE OPERATE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B1220] tracking-tight">
              Principles That Drive Our Engineering Culture.
            </h2>
            <p className="text-base text-slate-500 max-w-2xl mx-auto font-normal">
              The core values that guide our architectural decisions, client communication, and code standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((val, idx) => {
              const IconComp = val.icon
              return (
                <div
                  key={idx}
                  className="bg-slate-50/50 rounded-3xl p-8 border border-slate-200/60 hover:bg-white hover:border-[#D9005B]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/65 text-[#D9005B] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1220] group-hover:text-[#D9005B] transition-colors leading-snug">
                      {val.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-normal">
                      {val.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-[#D9005B] transition-colors duration-300">
                    <span>Core Value 0{idx + 1}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          5. EXECUTIVE LEADERSHIP TEAM
          ───────────────────────────────────────────────────────── */}
      <section className="py-28 lg:py-36 bg-[#F8FAFC] border-y border-slate-200/50">
        <div className="container-xl">

          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#D9005B]">
              LEADERSHIP TEAM
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B1220] tracking-tight">
              The People Behind the Engineering Excellence.
            </h2>
            <p className="text-base text-slate-500 font-normal">
              Meet the founders, principal architects, and technology directors leading ABL BusinessTech LLP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                {/* Profile Photo */}
                <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
                  <Image
                    src={(member as any).photo}
                    alt={`${member.name} — ${member.role} at ABL BusinessTech LLP`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-8 flex flex-col flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1220] group-hover:text-[#D9005B] transition-colors tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-[#D9005B] mt-0.5 uppercase tracking-widest">{member.role}</p>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed font-normal flex-1">
                    {member.bio}
                  </p>

                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-[#0077B5] transition-colors duration-300"
                    >
                      <LinkedInIcon className="w-4 h-4 text-[#0077B5]" />
                      <span>Connect on LinkedIn</span>
                    </a>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          6. GLOBAL OFFICE LOCATIONS
          ───────────────────────────────────────────────────────── */}
      <section className="py-28 lg:py-36 bg-[#FFFFFF]">
        <div className="container-xl">

          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#D9005B]">
              GLOBAL FOOTPRINT
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B1220] tracking-tight">
              Our Global Offices & Engineering Centers.
            </h2>
            <p className="text-base text-slate-500 font-normal">
              Delivering round-the-clock co-engineering support across global business time zones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

            {/* Office 1: Mumbai HQ */}
            <div className="bg-slate-50/50 rounded-3xl p-8 border border-slate-200/60 space-y-6 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 text-[#D9005B] flex items-center justify-center shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-[9px] font-bold px-3 py-1 rounded-full bg-[#D9005B] text-white uppercase tracking-wider">
                  Global HQ
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0B1220] tracking-tight">Mumbai, India</h3>
                <p className="text-xs text-slate-400 mt-1 font-semibold">Maharashtra Technology Corridor</p>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed pt-4 border-t border-slate-100 font-normal">
                Primary engineering delivery center housing 200+ full-stack, AI, and cloud DevOps engineers.
              </p>
            </div>

            {/* Office 2: US Tech Hub */}
            <div className="bg-slate-50/50 rounded-3xl p-8 border border-slate-200/60 space-y-6 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 text-[#8B5CF6] flex items-center justify-center shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-[9px] font-bold px-3 py-1 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] uppercase tracking-wider">
                  US Advisory Hub
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0B1220] tracking-tight">New York, USA</h3>
                <p className="text-xs text-slate-400 mt-1 font-semibold">North America Enterprise Advisory</p>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed pt-4 border-t border-slate-100 font-normal">
                Executive client strategy, solution architecture, and enterprise account management center.
              </p>
            </div>

            {/* Office 3: Europe Hub */}
            <div className="bg-slate-50/50 rounded-3xl p-8 border border-slate-200/60 space-y-6 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 text-[#00AEEF] flex items-center justify-center shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-[9px] font-bold px-3 py-1 rounded-full bg-[#00AEEF]/10 text-[#00AEEF] uppercase tracking-wider">
                  EU Delivery Hub
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0B1220] tracking-tight">London, UK</h3>
                <p className="text-xs text-slate-400 mt-1 font-semibold">Europe & FinTech Operations</p>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed pt-4 border-t border-slate-100 font-normal">
                Serving European banking, retail, and healthcare enterprise partners with zero time-zone delay.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          7. TESTIMONIAL SECTION (Soft Elegant Background)
          ───────────────────────────────────────────────────────── */}
      <section className="py-28 lg:py-36 bg-gradient-to-br from-[#D9005B]/3 via-white to-[#00AEEF]/3">
        <div className="container-xl max-w-4xl mx-auto">

          <div className="bg-white rounded-[2.5rem] p-10 sm:p-16 border border-slate-200/60 shadow-xl space-y-10 relative overflow-hidden">
            
            {/* Top Row decoration */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D9005B]">
                CLIENT TESTIMONIAL
              </span>
              <div className="flex items-center gap-1 text-[#D9005B]/80">
                {[...Array(5)].map((_, i) => (
                  <Sparkles key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>

            <blockquote className="text-xl sm:text-3xl font-medium text-[#0B1220] leading-relaxed italic text-pretty">
              {testimonials[activeTestimonial].quote}
            </blockquote>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#D9005B] to-[#00AEEF] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0B1220]">{testimonials[activeTestimonial].name}</p>
                  <p className="text-xs text-slate-400 font-medium">{testimonials[activeTestimonial].role} &mdash; {testimonials[activeTestimonial].company}</p>
                </div>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="p-3 rounded-xl border border-slate-200/80 hover:bg-slate-50 transition-colors duration-200"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4 text-[#0B1220]" />
                </button>
                <button
                  onClick={() => setActiveTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                  className="p-3 rounded-xl border border-slate-200/80 hover:bg-slate-50 transition-colors duration-200"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4 text-[#0B1220]" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          8. FAQ SECTION (Minimal Accordion)
          ───────────────────────────────────────────────────────── */}
      <section className="py-28 lg:py-36 bg-[#FFFFFF]">
        <div className="container-xl max-w-4xl mx-auto">

          <div className="text-center mb-20 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#D9005B]">
              GOT QUESTIONS?
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B1220] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-slate-500 font-normal">
              Everything you need to know about ABL BusinessTech LLP and our co-engineering model.
            </p>
          </div>

          <div className="space-y-4 divide-y divide-slate-100">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="pt-6 first:pt-0"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#0B1220] hover:text-[#D9005B] transition-colors pb-4"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#D9005B]' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="pb-6 text-sm text-[#475569] leading-relaxed pt-2 font-normal animate-fadeIn text-pretty">
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
          9. FINAL CTA + CONTACT FORM (MANDATORY SECTION)
          ───────────────────────────────────────────────────────── */}
      <section id="contact-form" className="py-28 lg:py-36 bg-[#F8FAFC] border-t border-slate-200/40">
        <div className="container-xl">

          <div className="rounded-[2.5rem] bg-gradient-to-br from-pink-50/50 via-slate-50 to-cyan-50/50 border border-slate-200/50 p-8 sm:p-12 lg:p-16 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

              {/* LEFT SIDE: Copy & Trust Points */}
              <div className="lg:col-span-6 space-y-8">

                <div className="space-y-4">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#D9005B]">
                    WORK WITH ABL BUSINESSTECH
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B1220] leading-tight tracking-tight text-pretty">
                    Ready to Scale Your Software Engineering Capabilities?
                  </h2>
                  <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-normal text-pretty">
                    Speak with our senior technology leaders to discuss your product roadmap, explore co-engineering pods, or schedule a free technical consultation.
                  </p>
                </div>

                {/* Trust Points */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-5 h-5 text-[#D9005B]" />
                    <span>Free enterprise software & architecture consultation</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-5 h-5 text-[#8B5CF6]" />
                    <span>20+ years of proven enterprise software engineering</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-5 h-5 text-[#00AEEF]" />
                    <span>100% full legal assignment of code & IP ownership</span>
                  </div>
                </div>

                {/* Direct Contact Info */}
                <div className="pt-8 border-t border-slate-200/60 space-y-3">
                  <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Direct Reachout</p>
                  <div className="flex flex-col sm:flex-row gap-6 text-sm font-semibold text-[#0B1220]">
                    <a href="mailto:hello@abltech.com" className="hover:text-[#D9005B] transition-colors flex items-center gap-1.5">
                      <span>✉️</span> hello@abltech.com
                    </a>
                    <a href="tel:+919876543210" className="hover:text-[#D9005B] transition-colors flex items-center gap-1.5">
                      <span>📞</span> +91 98765 43210
                    </a>
                  </div>
                </div>

              </div>

              {/* RIGHT SIDE: CONTACT FORM */}
              <div className="lg:col-span-6">
                <div className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-xl border border-slate-200/50 relative">

                  {isSubmitted ? (
                    <div className="py-12 text-center space-y-6 animate-fadeIn">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-lg">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#0B1220]">Thank you!</h3>
                      <p className="text-sm text-[#475569] max-w-md mx-auto">
                        Our leadership team will contact you shortly to schedule your executive consultation.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-xs font-bold text-[#D9005B] bg-[#D9005B]/10 hover:bg-[#D9005B]/20 transition-colors"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* First Name */}
                        <div>
                          <label className="block text-[10px] font-bold text-[#0B1220] uppercase mb-1.5 tracking-wider">
                            First Name*
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="John"
                            className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${formErrors.firstName ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 focus:border-[#D9005B]'
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
                          <label className="block text-[10px] font-bold text-[#0B1220] uppercase mb-1.5 tracking-wider">
                            Last Name*
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Doe"
                            className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${formErrors.lastName ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 focus:border-[#D9005B]'
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
                          <label className="block text-[10px] font-bold text-[#0B1220] uppercase mb-1.5 tracking-wider">
                            Business Email*
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@company.com"
                            className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${formErrors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 focus:border-[#D9005B]'
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
                          <label className="block text-[10px] font-bold text-[#0B1220] uppercase mb-1.5 tracking-wider">
                            Phone Number*
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 000-0000"
                            className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${formErrors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 focus:border-[#D9005B]'
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
                          <label className="block text-[10px] font-bold text-[#0B1220] uppercase mb-1.5 tracking-wider">
                            Company Name*
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Acme Corp"
                            className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${formErrors.company ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 focus:border-[#D9005B]'
                              }`}
                          />
                          {formErrors.company && (
                            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {formErrors.company}
                            </p>
                          )}
                        </div>

                        {/* Service Interested In */}
                        <div>
                          <label className="block text-[10px] font-bold text-[#0B1220] uppercase mb-1.5 tracking-wider">
                            Engagement Interest*
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-[#D9005B] transition-all"
                          >
                            <option value="Enterprise Software Engineering">Custom Software Engineering</option>
                            <option value="AI & Data Engineering">Enterprise AI & Data Engineering</option>
                            <option value="Staff Augmentation">Dedicated Co-Engineering Pod</option>
                            <option value="Cloud & DevOps">Cloud Migration & DevOps</option>
                            <option value="Enterprise Applications">Custom ERP / CRM System</option>
                            <option value="UI/UX Product Design">UI/UX Product Design</option>
                            <option value="Other">Other Strategic Partnership</option>
                          </select>
                        </div>

                      </div>

                      {/* Budget */}
                      <div>
                        <label className="block text-[10px] font-bold text-[#0B1220] uppercase mb-1.5 tracking-wider">
                          Project Budget
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-[#D9005B] transition-all"
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
                        <label className="block text-[10px] font-bold text-[#0B1220] uppercase mb-1.5 tracking-wider">
                          Project Details*
                        </label>
                        <textarea
                          name="details"
                          rows={4}
                          value={formData.details}
                          onChange={handleInputChange}
                          placeholder="Tell us about your engineering goals, project scope, and target launch timeline..."
                          className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${formErrors.details ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 focus:border-[#D9005B]'
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
                          <span className="text-xs text-slate-400 leading-normal font-normal">
                            I agree to the Privacy Policy and allow ABL BusinessTech LLP to contact me regarding my inquiry.
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
                        className="w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-[#D9005B] via-[#8B5CF6] to-[#00AEEF] hover:opacity-95 transition-all shadow-xl shadow-[#D9005B]/15 hover:shadow-2xl hover:shadow-[#D9005B]/25 flex items-center justify-center gap-2 duration-300"
                      >
                        {isSubmitting ? (
                          <span>Processing Request...</span>
                        ) : (
                          <>
                            <span>Request Executive Consultation</span>
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
