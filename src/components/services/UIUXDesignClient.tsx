'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Palette,
  Layout,
  MousePointer,
  Sparkles,
  Layers,
  Smartphone,
  Eye,
  Check,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Users,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  ChevronLeft,
  Search,
  Code2,
  Monitor,
  Zap,
  Sliders
} from 'lucide-react'

export function UIUXDesignClient() {
  // 1. Interactive Tech Stack Active Tab
  const [activeTechTab, setActiveTechTab] = useState<'design' | 'prototyping' | 'systems' | 'research'>('design')

  // 2. Interactive FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // 3. Interactive Testimonial Slider State
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  // 4. Interactive Workflow Active Stage State
  const [activeWorkflowStage, setActiveWorkflowStage] = useState(0)

  // 5. Contact Form State & Validation
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: 'UI/UX Design',
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

  const testimonials = [
    {
      quote: "“ABL Tech transformed our complex B2B financial platform into a intuitive interface. Our user onboarding conversion jumped by 140% within the first 30 days.”",
      name: "Arthur Pendelton",
      role: "Head of Product Experience",
      company: "Vanguard FinTech Global",
      avatar: "AP",
    },
    {
      quote: "“Their design system tokenization cut our engineering team's frontend development time by 45%. Designers and developers now speak the exact same language in Figma and React.”",
      name: "Sophia Vance",
      role: "Chief Product Officer",
      company: "SaaS Scale Systems",
      avatar: "SV",
    },
    {
      quote: "“The micro-animations, glassmorphism UI, and user research delivered by ABL Tech won us an Apple Design Award nomination. Truly world-class visual designers.”",
      name: "Derrick Miller",
      role: "VP of Product Design",
      company: "OmniMobile Direct",
      avatar: "DM",
    },
  ]

  const workflowStages = [
    {
      number: '01',
      title: 'User Research & Audit',
      subtitle: 'Analyze & Persona',
      description: 'Conducting user interviews, heatmaps analysis, accessibility audits, and mapping user friction journeys.',
      icon: Search,
      items: ['User Journey Mapping', 'Heatmap Analysis', 'Heuristic UX Audit'],
    },
    {
      number: '02',
      title: 'UX Wireframing',
      subtitle: 'Structure & Flow',
      description: 'Mapping low-fidelity information architecture, interaction flows, and clickable prototype wireframes.',
      icon: Layout,
      items: ['Information Architecture', 'Low-Fi Wireframes', 'Clickable UX Prototypes'],
    },
    {
      number: '03',
      title: 'UI Design System',
      subtitle: 'Tokens & Components',
      description: 'Building scalable Figma design systems with custom typography, color tokens, and responsive component libraries.',
      icon: Palette,
      items: ['Figma Design System', 'Color & Type Tokens', 'Component Libraries'],
    },
    {
      number: '04',
      title: 'High-Fi Prototyping',
      subtitle: 'Animate & Test',
      description: 'Designing high-fidelity visual interfaces with micro-interactions, dark/light modes, and user testing loops.',
      icon: MousePointer,
      items: ['High-Fi Figma Prototypes', 'Micro-Animations', 'User Usability Testing'],
    },
    {
      number: '05',
      title: 'Design Handoff & Tokens',
      subtitle: 'Sync & Deliver',
      description: 'Zero-friction handoff to engineering pods using Figma Tokens, Storybook components, and WCAG AA compliance.',
      icon: Code2,
      items: ['Figma-to-Code Handoff', 'Storybook Sync', 'WCAG 2.1 AA Compliance'],
    },
  ]

  const techStack = {
    design: [
      { name: 'Figma Enterprise', label: 'Collaborative Vector Interface & Component Systems', badge: 'Design Standard' },
      { name: 'Adobe XD & Illustrator', label: 'Vector Graphic Artistry & Enterprise Iconography', badge: 'Vector Art' },
      { name: 'Sketch', label: 'Native macOS Digital Product Design Tooling', badge: 'Mac UI' },
      { name: 'Rive & Lottie', label: 'Interactive Vector Motion & Micro-Animations', badge: 'Animation' },
    ],
    prototyping: [
      { name: 'Figma Interactive Components', label: 'High-Fidelity Screen State & Click Prototypes', badge: 'Prototyping' },
      { name: 'Protopie', label: 'Advanced Sensor & Hardware-Grade Mobile Prototypes', badge: 'Mobile Prototype' },
      { name: 'Framer', label: 'Code-Backed Interactive Web Prototypes & Motion UI', badge: 'Interactive' },
      { name: 'Principle for Mac', label: 'Timeline-Based Motion & Micro-Interaction Design', badge: 'Motion UI' },
    ],
    systems: [
      { name: 'Design Tokens', label: 'JSON-Based Cross-Platform UI Color & Spacing Tokens', badge: 'Token Core' },
      { name: 'Storybook.js', label: 'Isolated Frontend Component Explorer & Documentation', badge: 'Component Library' },
      { name: 'Tailwind CSS Tokens', label: 'Utility Design Tokens mapped directly to React', badge: 'Frontend Sync' },
      { name: 'WCAG 2.1 AA Tokens', label: 'Accessible Contrast & Screen Reader Typography', badge: 'Accessibility' },
    ],
    research: [
      { name: 'Hotjar & FullStory', label: 'User Session Recording, Heatmaps & Rage-Click Audits', badge: 'Analytics' },
      { name: 'Maze & UserTesting', label: 'Remote Automated Usability Testing & Sentiment', badge: 'Testing' },
      { name: 'Optimal Workshop', label: 'Card Sorting & Information Architecture Validation', badge: 'UX Structure' },
      { name: 'Google Analytics 4', label: 'Funnel Drop-off Tracking & Conversion Auditing', badge: 'Funnel Audit' },
    ],
  }

  const faqs = [
    {
      question: 'What is the difference between UI (User Interface) and UX (User Experience) design?',
      answer: 'UX (User Experience) focuses on how an application feels and functions—mapping user journeys, eliminating friction, and structuring clear information architecture. UI (User Interface) focuses on visual elegance—typography, color palettes, micro-animations, component styling, and glassmorphism accents. We deliver both in a unified product design methodology.',
    },
    {
      question: 'How do your design systems help our engineering team build faster?',
      answer: 'We build tokenized Figma design systems linked directly to code component libraries (React/Tailwind/Storybook). This eliminates guesswork for developers, enforces brand consistency across Web and Mobile, and speeds up frontend engineering output by 45%.',
    },
    {
      question: 'Do you conduct real user research and usability testing?',
      answer: 'Yes. We conduct user interviews, session heatmaps analysis, card sorting, and remote unmoderated usability tests using tools like Maze and Hotjar—ensuring design decisions are backed by empirical user data rather than guesswork.',
    },
    {
      question: 'Will your designs comply with WCAG AA accessibility standards?',
      answer: 'Yes. Every interface we design is audited for WCAG 2.1 AA compliance—guaranteeing accessible color contrast ratios, screen reader labels, keyboard navigation focus states, and legible typography scales.',
    },
    {
      question: 'Can you redesign our existing application without disrupting current users?',
      answer: 'Yes. We execute phased UX redesigns—testing wireframes with cohort user groups and rolling out updated design systems component-by-component so your users enjoy an improved experience without feeling lost.',
    },
    {
      question: 'How do you handle design handoff to our development team?',
      answer: 'We provide structured Figma handoffs complete with design token specs, auto-layout responsiveness rules, interactive prototype links, micro-animation export files (Lottie), and Storybook component documentation.',
    },
  ]

  return (
    <main id="main-content" className="bg-[#FFFFFF] text-[#0B1220] selection:bg-[#D9005B] selection:text-white">

      {/* ─────────────────────────────────────────────────────────
          1. HERO SECTION (Light Premium Backdrop with UI/UX Visual)
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
                  UI/UX DESIGN & PRODUCT EXPERIENCE
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B1220] leading-[1.12]">
                Interfaces That Wow.{' '}
                <span className="bg-gradient-to-r from-[#D9005B] via-[#F04A8A] via-[#8B5CF6] to-[#00AEEF] bg-clip-text text-transparent">
                  Experiences That Convert.
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-[#475569] max-w-2xl leading-relaxed font-normal">
                Great design isn't just about pretty pixels—it is about driving user engagement and business conversion. We design world-class Figma interfaces, tokenized design systems, and intuitive user experiences that turn visitors into loyal customers.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#D9005B] via-[#F04A8A] to-[#00AEEF] hover:opacity-95 transition-all shadow-lg shadow-[#D9005B]/20 hover:shadow-xl hover:shadow-[#D9005B]/30 hover:-translate-y-0.5"
                >
                  Book a UX Audit
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#services-grid"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-semibold text-[#0B1220] bg-white border border-slate-200 shadow-sm hover:border-[#D9005B]/40 hover:bg-slate-50/80 transition-all hover:-translate-y-0.5"
                >
                  Explore Design Services
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm font-medium text-[#475569] border-t border-slate-200/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9005B]" />
                  <span>140% Conversion Lift</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" />
                  <span>Figma Design Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF]" />
                  <span>WCAG 2.1 AA Compliant</span>
                </div>
              </div>

            </div>

            {/* HERO RIGHT SIDE — 3D Visual & Floating Cards */}
            <div className="lg:col-span-5 relative flex justify-center items-center">

              {/* Main Visual Glass Container */}
              <div className="relative w-full max-w-lg aspect-square rounded-3xl bg-gradient-to-br from-white/90 via-slate-50/80 to-white/90 border border-slate-200 shadow-2xl p-6 backdrop-blur-xl flex flex-col justify-between overflow-hidden group">

                {/* Glowing Canvas backdrop */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,0,91,0.08)_0%,rgba(0,174,239,0.08)_50%,transparent_100%)] pointer-events-none" />

                {/* Central UI/UX Core Component */}
                <div className="relative z-10 my-auto flex flex-col items-center justify-center space-y-6">

                  {/* Outer Pulsing Glowing Ring */}
                  <div className="relative w-36 h-36 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#D9005B]/20 via-[#8B5CF6]/20 to-[#00AEEF]/20 p-1 animate-spin-slow">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center border border-slate-200/80 shadow-inner">
                      <Palette className="w-16 h-16 text-[#D9005B] animate-pulse" />
                    </div>
                    <span className="absolute -top-1 left-1/2 w-4 h-4 rounded-full bg-[#D9005B] shadow-lg shadow-[#D9005B]" />
                    <span className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-[#00AEEF] shadow-lg shadow-[#00AEEF]" />
                    <span className="absolute bottom-2 left-2 w-3.5 h-3.5 rounded-full bg-[#8B5CF6] shadow-lg shadow-[#8B5CF6]" />
                  </div>

                  <div className="text-center space-y-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                      ABL DESIGN STUDIO
                    </div>
                    <div className="text-sm font-semibold text-[#0B1220]">
                      Figma Tokens, Micro-Animations & Design Systems
                    </div>
                  </div>
                </div>

                {/* Floating Card 1: Design Systems */}
                <div className="absolute top-6 left-4 sm:-left-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-bounce-slow">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#D9005B] to-[#F04A8A] flex items-center justify-center text-white shadow-md">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B1220]">Design Systems</p>
                    <p className="text-[10px] text-[#475569]">Figma Tokens & UI Kit</p>
                  </div>
                </div>

                {/* Floating Card 2: Interactive Prototypes */}
                <div className="absolute top-12 right-4 sm:-right-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-float-delayed">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#8B5CF6] to-[#A855F7] flex items-center justify-center text-white shadow-md">
                    <MousePointer className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B1220]">Interactive Prototyping</p>
                    <p className="text-[10px] text-[#475569]">High-Fi Micro-Animations</p>
                  </div>
                </div>

                {/* Floating Card 3: Mobile & Web UI */}
                <div className="absolute bottom-10 left-4 sm:-left-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-float">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00AEEF] to-[#38BDF8] flex items-center justify-center text-white shadow-md">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B1220]">Mobile & Web UI</p>
                    <p className="text-[10px] text-[#475569]">iOS, Android & Desktop</p>
                  </div>
                </div>

                {/* Floating Card 4: WCAG Accessibility */}
                <div className="absolute bottom-6 right-4 sm:-right-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-bounce-slow">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#D9005B] via-[#8B5CF6] to-[#00AEEF] flex items-center justify-center text-white shadow-md">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B1220]">WCAG 2.1 AA</p>
                    <p className="text-[10px] text-[#475569]">Accessible Contrast</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Trusted-By Logo Strip */}
          <div className="mt-20 pt-10 border-t border-slate-200/70">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-[#475569] mb-8">
              Trusted by global product leaders & award-winning brands
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all">
              {['Figma Enterprise', 'Storybook Sync', 'Design Tokens', 'Lottie Motion', 'Maze Research', 'WCAG Certified'].map((brand, i) => (
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
                  140%
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mt-2">Conversion Rate Lift</p>
                <p className="text-xs text-[#475569]">UX funnel optimization</p>
              </div>

              <div className="text-center pt-4 lg:pt-0 lg:px-4">
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent">
                  45%
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mt-2">Faster Frontend Build</p>
                <p className="text-xs text-[#475569]">Figma design tokenization</p>
              </div>

              <div className="text-center pt-4 lg:pt-0 lg:px-4">
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#00AEEF] to-[#38BDF8] bg-clip-text text-transparent">
                  100%
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mt-2">WCAG 2.1 AA Compliance</p>
                <p className="text-xs text-[#475569]">Accessible color & typography</p>
              </div>

              <div className="text-center pt-4 lg:pt-0 lg:px-4">
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#D9005B] via-[#8B5CF6] to-[#00AEEF] bg-clip-text text-transparent">
                  Zero
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mt-2">Developer Guesswork</p>
                <p className="text-xs text-[#475569]">Seamless Figma handoff</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          3. THE PROBLEM SECTION (Modern Asymmetric Layout)
          ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200/70">
        <div className="container-xl">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">

            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                THE CHALLENGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220] leading-tight">
                Clunky Interfaces Cost Customers.{' '}
                <span className="text-[#475569] font-medium">Why Settle for Average Design?</span>
              </h2>
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed pt-2">
                Users form an opinion about your application in less than 50 milliseconds. Confusing navigation, inconsistent UI elements, lack of mobile responsiveness, and poor accessibility cause high bounce rates and ruin product adoption.
              </p>
            </div>

            {/* Right Circular Infographic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-white border border-slate-200 p-4 shadow-xl flex flex-col items-center justify-center text-center group">
                <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-[#D9005B] border-r-[#8B5CF6] border-b-[#00AEEF] rotate-45 group-hover:rotate-90 transition-transform duration-700" />
                <div className="z-10 space-y-1 px-4">
                  <span className="text-5xl font-black bg-gradient-to-r from-[#D9005B] to-[#00AEEF] bg-clip-text text-transparent">
                    88%
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#0B1220] leading-snug">
                    Of Users Never Return After a Bad UX Experience
                  </p>
                  <p className="text-[11px] text-[#475569]">AWS UX Benchmark Study</p>
                </div>
              </div>
            </div>

          </div>

          {/* Five Challenge Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D9005B] to-[#F04A8A]" />
              <MousePointer className="w-8 h-8 text-[#D9005B] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-[#0B1220] mb-2">High Bounce Rates</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Users abandoning signup funnels due to confusing UX layout flow.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F04A8A] to-[#8B5CF6]" />
              <Layers className="w-8 h-8 text-[#8B5CF6] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-[#0B1220] mb-2">UI Inconsistency</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Different colors and button styles across Web and Mobile apps.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7]" />
              <Code2 className="w-8 h-8 text-[#A855F7] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-[#0B1220] mb-2">Developer Handoff Friction</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Engineers spending hours guessing pixel measurements from raw designs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A855F7] to-[#00AEEF]" />
              <Eye className="w-8 h-8 text-[#00AEEF] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-[#0B1220] mb-2">Accessibility Flaws</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Unreadable text contrast levels failing WCAG AA guidelines.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00AEEF] to-[#D9005B]" />
              <Smartphone className="w-8 h-8 text-[#D9005B] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-[#0B1220] mb-2">Mobile Breakage</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Interfaces breaking on smaller mobile screens and tablets.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          4. HOW ABL TECH SOLVES IT
          ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF]">
        <div className="container-xl">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
              THE ABL TECH ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
              From Clunky Interfaces to Conversion-Engineered Design.
            </h2>
            <p className="text-base text-[#475569]">
              We combine empirical user research with state-of-the-art Figma visual design systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 01 */}
            <div className="rounded-3xl p-8 bg-slate-50 border border-slate-200/80 hover:border-[#D9005B]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#D9005B]/30 group-hover:text-[#D9005B] transition-colors">01</span>
                  <div className="w-12 h-12 rounded-2xl bg-[#D9005B]/10 text-[#D9005B] flex items-center justify-center">
                    <Search className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0B1220]">Empirical UX Research & Audits</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  We analyze session recordings, heatmaps, and conduct user interviews to pinpoint exact drop-off points in your existing conversion funnels.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#D9005B]">
                <span>Data-Backed User Research</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 02 */}
            <div className="rounded-3xl p-8 bg-slate-50 border border-slate-200/80 hover:border-[#8B5CF6]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#8B5CF6]/30 group-hover:text-[#8B5CF6] transition-colors">02</span>
                  <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center">
                    <Layers className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0B1220]">Tokenized Figma Design Systems</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  We construct scalable, component-driven design systems in Figma linked to code tokens (React/Tailwind)—cutting engineering build times by 45%.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#8B5CF6]">
                <span>Scalable Design Tokens</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 03 */}
            <div className="rounded-3xl p-8 bg-slate-50 border border-slate-200/80 hover:border-[#00AEEF]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#00AEEF]/30 group-hover:text-[#00AEEF] transition-colors">03</span>
                  <div className="w-12 h-12 rounded-2xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center">
                    <Sparkles className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0B1220]">Premium Visual Micro-Interactions</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  We craft state-of-the-art visual design with smooth gradients, glassmorphism accents, Lottie micro-animations, and fluid responsive layouts.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#00AEEF]">
                <span>State-of-the-Art Aesthetic</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          5. SERVICES SECTION (3-Column Card Grid - WHAT WE BUILD)
          ───────────────────────────────────────────────────────── */}
      <section id="services-grid" className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200/70">
        <div className="container-xl">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
              WHAT WE DESIGN
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#0B1220]">
              UI/UX Design Services Built for Conversion & Delight.
            </h2>
            <p className="text-base sm:text-lg text-[#475569]">
              From SaaS product design to mobile app interfaces, we engineer digital experiences that captivate users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                num: '01',
                title: 'SaaS Product UI/UX Design',
                desc: 'End-to-end UX research, wireframing, and visual UI design for B2B and B2C web applications.',
                icon: Layout,
              },
              {
                num: '02',
                title: 'Mobile App Design (iOS & Android)',
                desc: 'Pixel-perfect native mobile interface designs with touch-first navigation and dark/light modes.',
                icon: Smartphone,
              },
              {
                num: '03',
                title: 'Design System Engineering',
                desc: 'Building tokenized Figma component systems and UI kits synchronized with Storybook and React.',
                icon: Layers,
              },
              {
                num: '04',
                title: 'UX Audits & Heatmap Analysis',
                desc: 'Auditing existing product interfaces using heatmaps, user recordings, and heuristic evaluation.',
                icon: Search,
              },
              {
                num: '05',
                title: 'Interactive High-Fi Prototyping',
                desc: 'Clickable Figma and Framer prototypes simulating exact user interactions, animations, and micro-flows.',
                icon: MousePointer,
              },
              {
                num: '06',
                title: 'WCAG 2.1 AA Accessibility Audit',
                desc: 'Auditing and designing interfaces ensuring total accessibility compliance for all users.',
                icon: Eye,
              },
              {
                num: '07',
                title: 'Landing Page & Conversion Design',
                desc: 'High-conversion marketing landing pages designed to maximize lead capture and product signups.',
                icon: TrendingUp,
              },
              {
                num: '08',
                title: 'Brand Identity & Iconography',
                desc: 'Custom vector icon suites, logo design systems, brand guidelines, and visual asset libraries.',
                icon: Palette,
              },
              {
                num: '09',
                title: 'Design Handoff & Developer Sync',
                desc: 'Zero-friction Figma developer handoff with token specs, CSS variables, and layout guidelines.',
                icon: Code2,
              },
            ].map((srv, idx) => {
              const IconComp = srv.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D9005B] via-[#8B5CF6] to-[#00AEEF] opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-slate-300 group-hover:text-[#D9005B] transition-colors">
                        {srv.num}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#D9005B]/10 via-[#8B5CF6]/10 to-[#00AEEF]/10 text-[#D9005B] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#0B1220] group-hover:text-[#D9005B] transition-colors">
                      {srv.title}
                    </h3>

                    <p className="text-sm text-[#475569] leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0B1220] group-hover:text-[#D9005B]">
                    <span>Explore Design Solution</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              )
            })}

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          6. FEATURED SERVICE DETAIL SECTION (Alternating Layouts)
          ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF]">
        <div className="container-xl space-y-24">

          {/* Detail 1: Tokenized Design Systems */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                FEATURED DESIGN SOLUTION
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
                Tokenized Figma Design Systems
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                Eliminate UI inconsistency across your products. We construct comprehensive Figma design systems complete with design tokens (colors, spacing, typography) that sync directly with React and Tailwind codebases.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  '45% faster frontend development velocity with reusable components',
                  '100% brand consistency across Web, iOS, and Android applications',
                  'Tokenized JSON variables mapped directly to CSS & Tailwind classes',
                  'Dark mode and light mode theme variants built into Figma components',
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
                  Build a Design System
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 shadow-xl space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <Layers className="w-6 h-6 text-[#D9005B]" />
                    <span className="font-bold text-[#0B1220]">ABL Figma Design System Tokens</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#D9005B]/10 text-[#D9005B] font-semibold">Storybook Synced</span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                    <Palette className="w-5 h-5 text-[#8B5CF6] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#0B1220]">Color & Typography Tokens</p>
                      <p className="text-xs text-[#475569]">Tailored HSL gradients, dark/light modes & fluid font scales.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                    <Layout className="w-5 h-5 text-[#00AEEF] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#0B1220]">Auto-Layout Component Library</p>
                      <p className="text-xs text-[#475569]">Buttons, inputs, modals, and navigation bars with interactive states.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                    <Code2 className="w-5 h-5 text-[#D9005B] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#0B1220]">Developer Tokens Handoff</p>
                      <p className="text-xs text-[#475569]">Exportable JSON tokens feeding directly into Tailwind CSS and React.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Detail 2: High-Conversion UX Audits (Reversed Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00AEEF]">
                CONVERSION OPTIMIZATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
                High-Conversion UX Audits & Redesigns
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                Transform your existing web or mobile app into a high-converting experience. We audit user friction, redesign signup funnels, and test prototypes to lift conversion rates by over 140%.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Average 140% conversion rate lift across signup and checkout funnels',
                  'Detailed heuristic UX evaluation identifying exact user drop-off points',
                  'Session recording and heatmap analysis using Hotjar & FullStory',
                  'A/B test-ready Figma prototypes for instant product validation',
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
                  Schedule UX Audit
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1">
              <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-[#00AEEF]" />
                    <span className="font-bold text-[#0B1220]">UX Funnel Conversion Engine</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#00AEEF]/10 text-[#00AEEF] font-semibold">140% Lift</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center space-y-2">
                    <Search className="w-6 h-6 text-[#00AEEF] mx-auto" />
                    <p className="text-xs font-bold text-[#0B1220]">Friction Audit</p>
                    <p className="text-[10px] text-[#475569]">Pinpoints User Drop-Off</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center space-y-2">
                    <MousePointer className="w-6 h-6 text-[#8B5CF6] mx-auto" />
                    <p className="text-xs font-bold text-[#0B1220]">Redesigned Flow</p>
                    <p className="text-[10px] text-[#475569]">Smooth 1-Click Conversion</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
                  <p className="text-xs font-semibold text-[#0B1220]">Heatmap Audit → Wireframe Redesign → High-Fi Prototype → 140% Lift</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          7. WORKFLOW VISUALIZATION
          ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200/70 relative">
        <div className="container-xl">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
              DESIGN LIFECYCLE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
              From User Research to Pixel-Perfect Handoff.
            </h2>
            <p className="text-base text-[#475569]">
              How ABL Tech delivers conversion-engineered product experiences.
            </p>
          </div>

          {/* Workflow Interactive Bar */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">

            {workflowStages.map((stage, idx) => {
              const StageIcon = stage.icon
              const isActive = activeWorkflowStage === idx

              return (
                <div
                  key={idx}
                  onClick={() => setActiveWorkflowStage(idx)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border relative flex flex-col justify-between ${isActive
                      ? 'bg-white border-[#D9005B] shadow-xl scale-105 z-10'
                      : 'bg-white/70 border-slate-200/80 hover:bg-white hover:border-slate-300'
                    }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-black px-2 py-0.5 rounded-full ${isActive ? 'bg-[#D9005B] text-white' : 'bg-slate-100 text-[#475569]'}`}>
                        {stage.number}
                      </span>
                      <StageIcon className={`w-5 h-5 ${isActive ? 'text-[#D9005B]' : 'text-slate-400'}`} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#0B1220]">{stage.title}</h3>
                      <p className="text-xs font-semibold text-[#D9005B]">{stage.subtitle}</p>
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1">
                    {stage.items.map((item, i) => (
                      <p key={i} className="text-[11px] text-[#475569] flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#D9005B]" />
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>
              )
            })}

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          8. CASE STUDIES (Proven Results)
          ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF]">
        <div className="container-xl">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
              PROVEN RESULTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
              Real Design. Measurable Business Conversion.
            </h2>
            <p className="text-base text-[#475569]">
              Explore how our UI/UX design studio lifts conversion and user satisfaction metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Case Study 01 */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200/90 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
              <div className="p-8 sm:p-10 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#D9005B]/10 text-[#D9005B]">
                  B2B FinTech UX Redesign
                </span>
                <h3 className="text-2xl font-bold text-[#0B1220]">
                  FinTech Dashboard UX Transformation
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Redesigned a complex financial analytics platform into an intuitive Figma UI—increasing onboarding conversion by 140% in 30 days.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/80">
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#D9005B]">140%</p>
                    <p className="text-xs text-[#475569]">Conversion Lift</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#8B5CF6]">45%</p>
                    <p className="text-xs text-[#475569]">Faster Frontend Build</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#00AEEF]">100%</p>
                    <p className="text-xs text-[#475569]">Figma Token Sync</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#0B1220]">FinTech Global Sector</span>
                <a href="#contact-form" className="inline-flex items-center gap-2 text-xs font-bold text-[#D9005B] group-hover:translate-x-1 transition-transform">
                  View Case Study →
                </a>
              </div>
            </div>

            {/* Case Study 02 */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200/90 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
              <div className="p-8 sm:p-10 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#00AEEF]/10 text-[#00AEEF]">
                  Mobile App UI & Motion
                </span>
                <h3 className="text-2xl font-bold text-[#0B1220]">
                  Consumer Mobile App UI & Micro-Animations
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Crafted high-fidelity iOS & Android designs with Lottie micro-animations—earning an Apple Design Award nomination and 4.9-star rating.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/80">
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#00AEEF]">4.9 ★</p>
                    <p className="text-xs text-[#475569]">App Store Rating</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#8B5CF6]">Nominated</p>
                    <p className="text-xs text-[#475569]">Apple Design Award</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#D9005B]">85%</p>
                    <p className="text-xs text-[#475569]">Day-30 Retention</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#0B1220]">Consumer Mobile Sector</span>
                <a href="#contact-form" className="inline-flex items-center gap-2 text-xs font-bold text-[#00AEEF] group-hover:translate-x-1 transition-transform">
                  View Case Study →
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          9. TECHNOLOGY STACK (Categorized Tabs)
          ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200/70">
        <div className="container-xl">

          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
              DESIGN STACK
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
              Tools Built for Precision, Animation and Token Sync.
            </h2>
            <p className="text-base text-[#475569]">
              We utilize enterprise Figma systems, interactive prototyping tools, and research software.
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {[
              { id: 'design', label: 'UI Design Tools' },
              { id: 'prototyping', label: 'Prototyping & Motion' },
              { id: 'systems', label: 'Design Tokens & Code' },
              { id: 'research', label: 'User Research & Heatmaps' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTechTab(tab.id as any)}
                className={`px-6 py-3 rounded-2xl font-semibold text-sm transition-all ${activeTechTab === tab.id
                    ? 'bg-gradient-to-r from-[#D9005B] to-[#00AEEF] text-white shadow-lg shadow-[#D9005B]/15'
                    : 'bg-white text-[#475569] hover:bg-slate-100 border border-slate-200'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack[activeTechTab].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#0B1220]">{item.name}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#D9005B]/10 text-[#D9005B]">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          10. WHY CHOOSE ABL TECH (Split Section)
          ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF]">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                THE ABL DIFFERENCE
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-[#0B1220] leading-tight">
                Product Designers Who Understand Conversion.
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                ABL Tech goes beyond creating static screens. We engineer tokenized Figma design systems, conduct empirical user research, and build high-conversion digital experiences that delight users and drive revenue.
              </p>

              <div className="pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-white bg-[#0B1220] hover:bg-[#D9005B] transition-colors shadow-md"
                >
                  Schedule UX Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#D9005B]/10 text-[#D9005B] flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">Conversion Focus</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  UX designs structured specifically to eliminate friction and boost funnel conversion rates.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">Tokenized Systems</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Figma design tokens syncing seamlessly with React, Tailwind CSS, and Storybook components.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center font-bold">
                  03
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">WCAG 2.1 AA Compliant</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Audited contrast ratios, legible typography scales, and accessible component focus states.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#D9005B]/10 text-[#D9005B] flex items-center justify-center font-bold">
                  04
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">Zero-Friction Handoff</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Developers receive pixel-perfect Figma specs, auto-layout rules, and Lottie animations.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          11. PROCESS SECTION (Modern Horizontal Timeline)
          ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200/70">
        <div className="container-xl">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
              HOW WE WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
              A Clear Path From Research to Pixel-Perfect Handoff.
            </h2>
            <p className="text-base text-[#475569]">
              Our proven product design process guarantees visual elegance and business conversion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">

            {[
              { num: '01', title: 'Audit', desc: 'Conduct user research, heatmaps analysis, and heuristic friction audit.' },
              { num: '02', title: 'Wireframe', desc: 'Structure information architecture and clickable low-fi wireframe flows.' },
              { num: '03', title: 'Design System', desc: 'Build scalable Figma design tokens, color palettes, and component UI kits.' },
              { num: '04', title: 'Prototype', desc: 'Design high-fi interfaces with Lottie micro-animations and user testing.' },
              { num: '05', title: 'Handoff & Sync', desc: 'Deliver tokenized Figma specs to developers with Storybook component alignment.' },
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 relative flex flex-col justify-between hover:shadow-lg transition-all">
                <div className="space-y-3">
                  <span className="text-3xl font-black bg-gradient-to-r from-[#D9005B] to-[#00AEEF] bg-clip-text text-transparent">
                    {step.num}
                  </span>
                  <h3 className="text-lg font-bold text-[#0B1220]">{step.title}</h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          12. TESTIMONIAL SECTION (Soft Gradient Background)
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
          13. FAQ SECTION (Modern Accordion)
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
              Everything you need to know about partnering with ABL Tech for UI/UX Design.
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
          14. FINAL CTA + CONTACT FORM (MANDATORY SECTION)
          ───────────────────────────────────────────────────────── */}
      <section id="contact-form" className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-slate-200">
        <div className="container-xl">

          <div className="rounded-3xl bg-gradient-to-br from-pink-50/80 via-slate-50 to-cyan-50/80 border border-pink-200/60 p-8 sm:p-12 lg:p-16 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* LEFT SIDE: Copy & Trust Points */}
              <div className="lg:col-span-6 space-y-8">

                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                    LET'S DESIGN SOMETHING STUNNING
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-bold text-[#0B1220] leading-tight">
                    Ready to Transform Your User Product Experience?
                  </h2>
                  <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
                    Speak with our product design leads to audit your existing UI/UX, blueprint a Figma design system, and lift user conversion rates.
                  </p>
                </div>

                {/* Trust Points */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-5 h-5 text-[#D9005B]" />
                    <span>Free product UI/UX audit & conversion consultation</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-5 h-5 text-[#8B5CF6]" />
                    <span>Tokenized Figma design systems linked to React & Tailwind</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-5 h-5 text-[#00AEEF]" />
                    <span>WCAG 2.1 AA accessible visual design guarantee</span>
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
                        Our UI/UX design studio leads will contact you shortly to schedule your consultation.
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
                            Service Interested In*
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:border-[#D9005B] transition-all"
                          >
                            <option value="SaaS UI/UX Design">SaaS Product UI/UX Design</option>
                            <option value="Mobile App UI/UX">Mobile App Design (iOS/Android)</option>
                            <option value="Design System Engineering">Tokenized Design System & UI Kit</option>
                            <option value="UX Audit">UX Audit & Conversion Redesign</option>
                            <option value="Prototyping">Interactive High-Fi Prototyping</option>
                            <option value="Accessibility Audit">WCAG 2.1 AA Accessibility Audit</option>
                            <option value="Landing Page Design">High-Conversion Landing Page</option>
                            <option value="Other">Other</option>
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
                          placeholder="Tell us about your product design goals, target audience, and project timeline..."
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
