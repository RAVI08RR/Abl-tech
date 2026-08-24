'use client'

import { useState } from 'react'
import Link from 'next/link'
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
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Technology Officer',
      bio: 'Principal distributed systems engineer specializing in AI vector infrastructure and scalable cloud pods.',
      linkedin: 'https://linkedin.com',
      avatar: 'PS',
      gradient: 'from-[#8B5CF6] to-[#A855F7]',
    },
    {
      name: 'Arun Mehta',
      role: 'VP of Digital Strategy',
      bio: 'Digital transformation leader who has spearheaded 50+ enterprise legacy modernization initiatives.',
      linkedin: 'https://linkedin.com',
      avatar: 'AM',
      gradient: 'from-[#00AEEF] to-[#38BDF8]',
    },
    {
      name: 'Neha Gupta',
      role: 'Head of Product Design',
      bio: 'Award-winning UI/UX director focused on tokenized Figma systems and high-conversion product experiences.',
      linkedin: 'https://linkedin.com',
      avatar: 'NG',
      gradient: 'from-[#D9005B] to-[#8B5CF6]',
    },
    {
      name: 'Kiran Patel',
      role: 'Head of Mobile & Web',
      bio: 'Full-stack Next.js and React Native architect with 60+ production mobile applications shipped.',
      linkedin: 'https://linkedin.com',
      avatar: 'KP',
      gradient: 'from-[#00AEEF] to-[#D9005B]',
    },
    {
      name: 'Sunita Rao',
      role: 'VP of Client Success',
      bio: 'Enterprise relationship leader ensuring every engineering engagement delivers measurable ROI.',
      linkedin: 'https://linkedin.com',
      avatar: 'SR',
      gradient: 'from-[#8B5CF6] to-[#00AEEF]',
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
      <section className="relative pt-28 pb-20 lg:pt-10 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#FFFFFF] to-[#F1F5F9]/60 border-b border-slate-200/60">

        {/* Subtle geometric background grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#0b1220_1px,transparent_1px),linear-gradient(to_bottom,#0b1220_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        {/* Decorative soft gradient ambient blobs */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#D9005B]/10 via-[#8B5CF6]/10 to-[#00AEEF]/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
        <div className="absolute -bottom-20 right-10 w-[450px] h-[450px] bg-gradient-to-br from-[#00AEEF]/10 via-[#38BDF8]/10 to-[#D9005B]/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="container-xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* HERO LEFT SIDE */}
            <div className="lg:col-span-7 space-y-6 text-left">

              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#D9005B]/10 via-[#8B5CF6]/10 to-[#00AEEF]/10 border border-[#D9005B]/20 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#D9005B] animate-ping" />
                <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-[#D9005B] via-[#8B5CF6] to-[#00AEEF] bg-clip-text text-transparent">
                  ABOUT ABL BUSINESSTECH LLP (EST. 2005)
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B1220] leading-[1.12]">
                Engineering Technology That{' '}
                <span className="bg-gradient-to-r from-[#D9005B] via-[#F04A8A] via-[#8B5CF6] to-[#00AEEF] bg-clip-text text-transparent">
                  Moves Enterprise Business.
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-[#475569] max-w-2xl leading-relaxed font-normal">
                Since 2005, ABL BusinessTech LLP has been a trusted technology partner for global enterprises and ambitious scaleups. We design, build, and scale production-ready AI, custom software, and cloud platforms that create measurable business impact.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#D9005B] via-[#F04A8A] to-[#00AEEF] hover:opacity-95 transition-all shadow-lg shadow-[#D9005B]/20 hover:shadow-xl hover:shadow-[#D9005B]/30 hover:-translate-y-0.5"
                >
                  Work With Us
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#story"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-semibold text-[#0B1220] bg-white border border-slate-200 shadow-sm hover:border-[#D9005B]/40 hover:bg-slate-50/80 transition-all hover:-translate-y-0.5"
                >
                  Our 20-Year Journey
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm font-medium text-[#475569] border-t border-slate-200/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9005B]" />
                  <span>20+ Years in Business (Since 2005)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" />
                  <span>500+ Enterprise Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF]" />
                  <span>95% Client Retention Rate</span>
                </div>
              </div>

            </div>

            {/* HERO RIGHT SIDE — 3D Visual & Floating Cards */}
            <div className="lg:col-span-5 relative flex justify-center items-center">

              {/* Main Visual Glass Container */}
              <div className="relative w-full max-w-lg aspect-square rounded-3xl bg-gradient-to-br from-white/90 via-slate-50/80 to-white/90 border border-slate-200 shadow-2xl p-6 backdrop-blur-xl flex flex-col justify-between overflow-hidden group">

                {/* Glowing Canvas backdrop */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,0,91,0.08)_0%,rgba(0,174,239,0.08)_50%,transparent_100%)] pointer-events-none" />

                {/* Central Company Core Component */}
                <div className="relative z-10 my-auto flex flex-col items-center justify-center space-y-6">

                  {/* Outer Pulsing Glowing Ring */}
                  <div className="relative w-36 h-36 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#D9005B]/20 via-[#8B5CF6]/20 to-[#00AEEF]/20 p-1 animate-spin-slow">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center border border-slate-200/80 shadow-inner">
                      <Trophy className="w-16 h-16 text-[#D9005B] animate-pulse" />
                    </div>
                    <span className="absolute -top-1 left-1/2 w-4 h-4 rounded-full bg-[#D9005B] shadow-lg shadow-[#D9005B]" />
                    <span className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-[#00AEEF] shadow-lg shadow-[#00AEEF]" />
                    <span className="absolute bottom-2 left-2 w-3.5 h-3.5 rounded-full bg-[#8B5CF6] shadow-lg shadow-[#8B5CF6]" />
                  </div>

                  <div className="text-center space-y-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                      ABL BUSINESSTECH CORE
                    </div>
                    <div className="text-sm font-semibold text-[#0B1220]">
                      Enterprise AI, Cloud & Co-Engineering
                    </div>
                  </div>
                </div>

                {/* Floating Card 1: 20+ Years Excellence */}
                <div className="absolute top-6 left-4 sm:-left-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-bounce-slow">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#D9005B] to-[#F04A8A] flex items-center justify-center text-white shadow-md">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B1220]">20+ Years Excellence</p>
                    <p className="text-[10px] text-[#475569]">Established 2005</p>
                  </div>
                </div>

                {/* Floating Card 2: 500+ Global Projects */}
                <div className="absolute top-12 right-4 sm:-right-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-float-delayed">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#8B5CF6] to-[#A855F7] flex items-center justify-center text-white shadow-md">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B1220]">500+ Projects</p>
                    <p className="text-[10px] text-[#475569]">Global Enterprise Delivery</p>
                  </div>
                </div>

                {/* Floating Card 3: 40+ Industries */}
                <div className="absolute bottom-10 left-4 sm:-left-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-float">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00AEEF] to-[#38BDF8] flex items-center justify-center text-white shadow-md">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B1220]">40+ Industries</p>
                    <p className="text-[10px] text-[#475569]">Worldwide Coverage</p>
                  </div>
                </div>

                {/* Floating Card 4: 95% Retention */}
                <div className="absolute bottom-6 right-4 sm:-right-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-bounce-slow">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#D9005B] via-[#8B5CF6] to-[#00AEEF] flex items-center justify-center text-white shadow-md">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B1220]">95% Retention</p>
                    <p className="text-[10px] text-[#475569]">Long-Term Co-Engineering</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Trusted-By Logo Strip */}
          <div className="mt-20 pt-10 border-t border-slate-200/70">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-[#475569] mb-8">
              Trusted by global enterprise giants & industry innovators
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all">
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
          2. STATS / BUSINESS IMPACT STRIP
          ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="container-xl">
          <div className="rounded-3xl bg-gradient-to-r from-slate-50 via-slate-100/80 to-slate-50 border border-slate-200/80 p-8 lg:p-12 shadow-sm">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/80">

              <div className="text-center pt-4 lg:pt-0 lg:px-4">
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#D9005B] to-[#F04A8A] bg-clip-text text-transparent">
                  20+ Years
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mt-2">In Business Since 2005</p>
                <p className="text-xs text-[#475569]">Two decades of engineering</p>
              </div>

              <div className="text-center pt-4 lg:pt-0 lg:px-4">
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent">
                  500+
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mt-2">Projects Delivered</p>
                <p className="text-xs text-[#475569]">Global enterprise scale</p>
              </div>

              <div className="text-center pt-4 lg:pt-0 lg:px-4">
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#00AEEF] to-[#38BDF8] bg-clip-text text-transparent">
                  40+
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mt-2">Industries Served</p>
                <p className="text-xs text-[#475569]">Worldwide domain coverage</p>
              </div>

              <div className="text-center pt-4 lg:pt-0 lg:px-4">
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#D9005B] via-[#8B5CF6] to-[#00AEEF] bg-clip-text text-transparent">
                  95%
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mt-2">Client Retention Rate</p>
                <p className="text-xs text-[#475569]">Long-term partnership focus</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          3. OUR MISSION & STORY (Split Layout with Timeline)
          ───────────────────────────────────────────────────────── */}
      <section id="story" className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200/70">
        <div className="container-xl">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                OUR MISSION & STORY
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-[#0B1220] leading-tight">
                Making World-Class Technology Accessible to Ambitious Enterprises.
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                Founded in 2005, ABL BusinessTech LLP was built on a single conviction: that ambitious businesses deserve access to the same elite engineering talent and cloud-native architecture that powers the world's tech giants.
              </p>
              <p className="text-base text-[#475569] leading-relaxed">
                Over two decades, we have evolved into a full-service AI, software, and cloud engineering powerhouse—helping clients navigate technological disruptions from early web services to modern AI models.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D9005B] to-[#8B5CF6] shadow-md hover:opacity-95 transition-all text-sm"
                >
                  Partner With Us
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Timeline Milestones Right Column */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-xl font-bold text-[#0B1220] mb-4">Company Evolution Timeline</h3>

              <div className="space-y-4 border-l-2 border-[#D9005B]/30 pl-6">
                {companyMilestones.map((m) => (
                  <div key={m.year} className="relative group">
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#D9005B] group-hover:bg-[#D9005B] transition-colors" />
                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                      <span className="text-xs font-black text-[#D9005B] px-2 py-0.5 rounded-md bg-[#D9005B]/10">
                        {m.year}
                      </span>
                      <h4 className="text-base font-bold text-[#0B1220] mt-1">{m.title}</h4>
                      <p className="text-xs text-[#475569] leading-relaxed mt-1">{m.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          4. OUR CORE VALUES (4-Grid Card Layout)
          ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF]">
        <div className="container-xl">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
              HOW WE OPERATE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
              Principles That Drive Our Engineering Culture.
            </h2>
            <p className="text-base text-[#475569]">
              The core values that guide our architectural decisions, client communication, and code standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((val, idx) => {
              const IconComp = val.icon
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 hover:bg-white hover:border-[#D9005B]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#D9005B]/10 text-[#D9005B] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1220] group-hover:text-[#D9005B] transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      {val.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#D9005B]">
                    <span>Core Value {idx + 1}</span>
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
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200/70">
        <div className="container-xl">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
              LEADERSHIP TEAM
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
              The People Behind the Engineering Excellence.
            </h2>
            <p className="text-base text-[#475569]">
              Meet the founders, principal architects, and technology directors leading ABL BusinessTech LLP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  {/* Avatar */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${member.gradient} text-white flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition-transform`}>
                    {member.avatar}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0B1220] group-hover:text-[#D9005B] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-[#D9005B] mt-0.5">{member.role}</p>
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#475569] hover:text-[#0077B5] transition-colors"
                  >
                    <LinkedInIcon className="w-4 h-4 text-[#0077B5]" />
                    <span>Connect on LinkedIn</span>
                  </a>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          6. GLOBAL OFFICE LOCATIONS
          ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF]">
        <div className="container-xl">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
              GLOBAL FOOTPRINT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
              Our Global Offices & Engineering Centers.
            </h2>
            <p className="text-base text-[#475569]">
              Delivering round-the-clock co-engineering support across global business time zones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Office 1: Mumbai HQ */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 space-y-4 hover:bg-white hover:shadow-xl transition-all">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#D9005B]/10 text-[#D9005B] flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#D9005B] text-white uppercase">
                  Global HQ
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0B1220]">Mumbai, India</h3>
                <p className="text-xs text-[#475569] mt-1 font-medium">Maharashtra Technology Corridor</p>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed pt-2 border-t border-slate-200">
                Primary engineering delivery center housing 200+ full-stack, AI, and cloud DevOps engineers.
              </p>
            </div>

            {/* Office 2: US Tech Hub */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 space-y-4 hover:bg-white hover:shadow-xl transition-all">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] uppercase">
                  US Advisory Hub
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0B1220]">New York, USA</h3>
                <p className="text-xs text-[#475569] mt-1 font-medium">North America Enterprise Advisory</p>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed pt-2 border-t border-slate-200">
                Executive client strategy, solution architecture, and enterprise account management center.
              </p>
            </div>

            {/* Office 3: Europe Hub */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 space-y-4 hover:bg-white hover:shadow-xl transition-all">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#00AEEF]/10 text-[#00AEEF] uppercase">
                  EU Delivery Hub
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0B1220]">London, UK</h3>
                <p className="text-xs text-[#475569] mt-1 font-medium">Europe & FinTech Operations</p>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed pt-2 border-t border-slate-200">
                Serving European banking, retail, and healthcare enterprise partners with zero time-zone delay.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          7. TESTIMONIAL SECTION (Soft Gradient Background)
          ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#D9005B]/5 via-white to-[#00AEEF]/5">
        <div className="container-xl max-w-4xl mx-auto">

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-2xl space-y-8 relative overflow-hidden">

            <div className="flex items-center justify-between border-b border-slate-100 pb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                CLIENT TESTIMONIAL
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
          8. FAQ SECTION (Modern Accordion)
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
              Everything you need to know about ABL BusinessTech LLP and our co-engineering model.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-base sm:text-lg text-[#0B1220] hover:text-[#D9005B] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#D9005B]' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[#475569] leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
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
      <section id="contact-form" className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-slate-200">
        <div className="container-xl">

          <div className="rounded-3xl bg-gradient-to-br from-pink-50/80 via-slate-50 to-cyan-50/80 border border-pink-200/60 p-8 sm:p-12 lg:p-16 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* LEFT SIDE: Copy & Trust Points */}
              <div className="lg:col-span-6 space-y-8">

                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                    WORK WITH ABL BUSINESSTECH
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-bold text-[#0B1220] leading-tight">
                    Ready to Scale Your Software Engineering Capabilities?
                  </h2>
                  <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
                    Speak with our senior technology leaders to discuss your product roadmap, explore co-engineering pods, or schedule a free technical consultation.
                  </p>
                </div>

                {/* Trust Points */}
                <div className="space-y-3">
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

                        {/* Service Interested In */}
                        <div>
                          <label className="block text-xs font-bold text-[#0B1220] uppercase mb-1">
                            Engagement Interest*
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:border-[#D9005B] transition-all"
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
                          placeholder="Tell us about your engineering goals, project scope, and target launch timeline..."
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
                        className="w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-[#D9005B] via-[#8B5CF6] to-[#00AEEF] hover:opacity-95 transition-all shadow-xl shadow-[#D9005B]/20 hover:shadow-2xl hover:shadow-[#D9005B]/30 flex items-center justify-center gap-2"
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
