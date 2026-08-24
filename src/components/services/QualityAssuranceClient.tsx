'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  CheckCircle2,
  Bug,
  Zap,
  Lock,
  Workflow,
  Rocket,
  Users,
  Check,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Database,
  TrendingUp,
  AlertCircle,
  ChevronLeft,
  Sparkles,
  Search,
  Activity,
  Cpu,
  FileCheck,
  ShieldAlert,
  Smartphone,
  Sliders
} from 'lucide-react'

export function QualityAssuranceClient() {
  // 1. Interactive Tech Stack Active Tab
  const [activeTechTab, setActiveTechTab] = useState<'automation' | 'performance' | 'security' | 'api'>('automation')

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
    service: 'QA & Testing',
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
      quote: "“ABL Tech's automated QA pods integrated directly into our GitHub Actions pipeline. They cut our manual regression testing time by 70% while achieving zero production bugs.”",
      name: "Arthur Pendelton",
      role: "VP of Quality Engineering",
      company: "SaaS Scale Systems",
      avatar: "AP",
    },
    {
      quote: "“Their stress testing team identified critical API database locks under 10x simulated Black Friday load before our mobile app launch—saving our revenue team from a catastrophe.”",
      name: "Katelyn Ross",
      role: "Head of Infrastructure",
      company: "OmniCommerce Global",
      avatar: "KR",
    },
    {
      quote: "“Their penetration testing team uncovered two critical OWASP vulnerabilities during pre-launch security audits that our internal team had overlooked. Truly elite security engineers.”",
      name: "Derrick Miller",
      role: "Chief Information Security Officer",
      company: "FinTech Security Corp",
      avatar: "DM",
    },
  ]

  const workflowStages = [
    {
      number: '01',
      title: 'QA Audit & Strategy',
      subtitle: 'Analyze & Plan',
      description: 'Auditing codebases, defining test coverage metrics, mapping API endpoints, and writing test automation suites.',
      icon: Search,
      items: ['Codebase QA Audit', 'Test Coverage Strategy', 'Automation Tooling Selection'],
    },
    {
      number: '02',
      title: 'Test Automation Build',
      subtitle: 'Script & Framework',
      description: 'Writing end-to-end (E2E) Playwright and Cypress automation scripts integrated into continuous CI/CD pipelines.',
      icon: Workflow,
      items: ['Playwright / Cypress E2E', 'API Automation Frameworks', 'CI/CD Pipeline Integration'],
    },
    {
      number: '03',
      title: 'Performance Stress Test',
      subtitle: 'Load & Latency',
      description: 'Simulating peak traffic bursts using JMeter and k6 to uncover database locks and server latency spikes.',
      icon: Zap,
      items: ['10x Peak Load Simulation', 'Database Lock Isolation', 'Latency Optimization'],
    },
    {
      number: '04',
      title: 'Penetration & Security',
      subtitle: 'Scan & Remediate',
      description: 'Executing OWASP Top 10 security scans, static code vulnerability analysis, and API penetration testing.',
      icon: Lock,
      items: ['OWASP Top 10 Scans', 'Penetration Testing', 'SOC2 / HIPAA Audits'],
    },
    {
      number: '05',
      title: 'Continuous Quality SRE',
      subtitle: 'Monitor & Protect',
      description: 'Automated regressions on every pull request, production synthetic monitoring, and zero critical bug SLAs.',
      icon: ShieldCheck,
      items: ['PR Regression Checks', 'Synthetic Monitoring', 'Zero-Bug Production SLA'],
    },
  ]

  const techStack = {
    automation: [
      { name: 'Playwright', label: 'Cross-Browser Fast Web End-to-End Automation', badge: 'E2E Leader' },
      { name: 'Cypress', label: 'Modern Developer-Centric Component & E2E Testing', badge: 'Web QA' },
      { name: 'Selenium WebDriver', label: 'Enterprise Multi-Browser Regression Frameworks', badge: 'Enterprise' },
      { name: 'Appium', label: 'Cross-Platform Native iOS & Android Mobile Test Automation', badge: 'Mobile QA' },
    ],
    performance: [
      { name: 'k6 (Grafana)', label: 'Developer-Friendly Load & Performance Stress Testing', badge: 'Performance' },
      { name: 'Apache JMeter', label: 'Enterprise Heavy-Load Protocol Stress Testing', badge: 'Protocol QA' },
      { name: 'Gatling', label: 'High-Concurrency Asynchronous Load Simulation', badge: 'Concurrency' },
      { name: 'Datadog APM', label: 'Real-Time Application Telemetry & Latency Tracing', badge: 'APM' },
    ],
    security: [
      { name: 'OWASP ZAP', label: 'Automated Web Application Security & Penetration Scans', badge: 'Security Scan' },
      { name: 'Burp Suite Professional', label: 'Advanced Manual & Automated Penetration Auditing', badge: 'Pentest' },
      { name: 'Snyk & SonarQube', label: 'CI/CD Static Code Security & Dependency CVE Auditing', badge: 'DevSecOps' },
      { name: 'Postman Security', label: 'API Authentication & Encryption Security Scans', badge: 'API Security' },
    ],
    api: [
      { name: 'Postman & Newman', label: 'Automated REST API Suite Execution in CI/CD', badge: 'API Testing' },
      { name: 'RestAssured (Java)', label: 'Enterprise Microservice API Test Automation', badge: 'Microservices' },
      { name: 'Karate Framework', label: 'Unified API & Performance Behavior Automation', badge: 'Unified QA' },
      { name: 'MockServer', label: 'Automated API Dependency Mocking & Stubbing', badge: 'Mocking' },
    ],
  }

  const faqs = [
    {
      question: 'What is the difference between QA testing and security penetration testing?',
      answer: 'QA testing validates that your software functions accurately, handles user inputs cleanly, and performs under heavy traffic loads. Security penetration testing specifically probes your infrastructure and APIs for vulnerabilities (OWASP Top 10, SQL injection, zero-day leaks) that malicious actors could exploit. We deliver both as integrated services.',
    },
    {
      question: 'Can you integrate automated QA testing into our existing CI/CD pipeline?',
      answer: 'Yes. We specialize in integrating automated test suites directly into GitHub Actions, GitLab CI, or Jenkins so every pull request is automatically tested and verified before reaching staging or production.',
    },
    {
      question: 'How quickly can a dedicated QA engineering pod onboard?',
      answer: 'Our vetted quality engineers and automation leads can assemble and integrate with your existing sprint workflow within 2 to 3 weeks.',
    },
    {
      question: 'Will test automation slow down our development velocity?',
      answer: 'No—it accelerates it. By running automated Playwright and API tests in parallel on every code commit, developers catch bugs instantly within 2 minutes instead of losing weeks to manual QA regression cycles post-sprint.',
    },
    {
      question: 'Do you provide security compliance audits for SOC2, HIPAA, or ISO 27001?',
      answer: 'Yes. We conduct pre-audit security vulnerability assessments, pen-testing reports, and remediation blueprints required for SOC2 Type II, HIPAA, and ISO 27001 certifications.',
    },
    {
      question: 'Can you perform stress testing for peak events like Black Friday or major launches?',
      answer: 'Yes. We simulate 10x peak concurrent traffic loads using k6 and JMeter, identifying database connection bottlenecks, server memory leaks, and slow API endpoints before live users experience them.',
    },
  ]

  return (
    <main id="main-content" className="bg-[#FFFFFF] text-[#0B1220] selection:bg-[#D9005B] selection:text-white">

      {/* ─────────────────────────────────────────────────────────
          1. HERO SECTION (Light Premium Backdrop with QA Visual)
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
                  QUALITY ASSURANCE & TESTING
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B1220] leading-[1.12]">
                Ruthless Testing.{' '}
                <span className="bg-gradient-to-r from-[#D9005B] via-[#F04A8A] via-[#8B5CF6] to-[#00AEEF] bg-clip-text text-transparent">
                  Enterprise Certainty.
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-[#475569] max-w-2xl leading-relaxed font-normal">
                A brilliant application is a liability if it crashes under traffic pressure or exposes user data. We deploy senior Quality Engineering pods to stress-test architecture, automate release pipelines, and execute penetration audits.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#D9005B] via-[#F04A8A] to-[#00AEEF] hover:opacity-95 transition-all shadow-lg shadow-[#D9005B]/20 hover:shadow-xl hover:shadow-[#D9005B]/30 hover:-translate-y-0.5"
                >
                  Book a Free QA Audit
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#services-grid"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-semibold text-[#0B1220] bg-white border border-slate-200 shadow-sm hover:border-[#D9005B]/40 hover:bg-slate-50/80 transition-all hover:-translate-y-0.5"
                >
                  Explore Testing Capabilities
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm font-medium text-[#475569] border-t border-slate-200/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9005B]" />
                  <span>Zero-Bug Production Goal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" />
                  <span>70% Manual QA Cut</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF]" />
                  <span>OWASP Pentest Audit</span>
                </div>
              </div>

            </div>

            {/* HERO RIGHT SIDE — 3D Visual & Floating Cards */}
            <div className="lg:col-span-5 relative flex justify-center items-center">

              {/* Main Visual Glass Container */}
              <div className="relative w-full max-w-lg aspect-square rounded-3xl bg-gradient-to-br from-white/90 via-slate-50/80 to-white/90 border border-slate-200 shadow-2xl p-6 backdrop-blur-xl flex flex-col justify-between overflow-hidden group">

                {/* Glowing Canvas backdrop */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,0,91,0.08)_0%,rgba(0,174,239,0.08)_50%,transparent_100%)] pointer-events-none" />

                {/* Central QA Core Component */}
                <div className="relative z-10 my-auto flex flex-col items-center justify-center space-y-6">

                  {/* Outer Pulsing Glowing Ring */}
                  <div className="relative w-36 h-36 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#D9005B]/20 via-[#8B5CF6]/20 to-[#00AEEF]/20 p-1 animate-spin-slow">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center border border-slate-200/80 shadow-inner">
                      <ShieldCheck className="w-16 h-16 text-[#D9005B] animate-pulse" />
                    </div>
                    <span className="absolute -top-1 left-1/2 w-4 h-4 rounded-full bg-[#D9005B] shadow-lg shadow-[#D9005B]" />
                    <span className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-[#00AEEF] shadow-lg shadow-[#00AEEF]" />
                    <span className="absolute bottom-2 left-2 w-3.5 h-3.5 rounded-full bg-[#8B5CF6] shadow-lg shadow-[#8B5CF6]" />
                  </div>

                  <div className="text-center space-y-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                      ABL QUALITY PODS
                    </div>
                    <div className="text-sm font-semibold text-[#0B1220]">
                      Playwright, k6 & Penetration Audits
                    </div>
                  </div>
                </div>

                {/* Floating Card 1: Test Automation */}
                <div className="absolute top-6 left-4 sm:-left-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-bounce-slow">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#D9005B] to-[#F04A8A] flex items-center justify-center text-white shadow-md">
                    <Workflow className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B1220]">Test Automation</p>
                    <p className="text-[10px] text-[#475569]">Playwright & Cypress</p>
                  </div>
                </div>

                {/* Floating Card 2: Performance Testing */}
                <div className="absolute top-12 right-4 sm:-right-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-float-delayed">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#8B5CF6] to-[#A855F7] flex items-center justify-center text-white shadow-md">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B1220]">Performance Load</p>
                    <p className="text-[10px] text-[#475569]">10x Peak k6 Stress</p>
                  </div>
                </div>

                {/* Floating Card 3: Penetration Audits */}
                <div className="absolute bottom-10 left-4 sm:-left-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-float">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00AEEF] to-[#38BDF8] flex items-center justify-center text-white shadow-md">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B1220]">Pentest Security</p>
                    <p className="text-[10px] text-[#475569]">OWASP Top 10 Scans</p>
                  </div>
                </div>

                {/* Floating Card 4: Mobile & API QA */}
                <div className="absolute bottom-6 right-4 sm:-right-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-bounce-slow">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#D9005B] via-[#8B5CF6] to-[#00AEEF] flex items-center justify-center text-white shadow-md">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B1220]">API & Mobile QA</p>
                    <p className="text-[10px] text-[#475569]">Appium & Postman</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Trusted-By Logo Strip */}
          <div className="mt-20 pt-10 border-t border-slate-200/70">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-[#475569] mb-8">
              Trusted by enterprise engineering teams & fintech platforms
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all">
              {['Playwright Core', 'Cypress Certified', 'OWASP Partner', 'Grafana k6', 'Selenium Hub', 'Appium Mobile'].map((brand, i) => (
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
                  0
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mt-2">Critical Bugs in Production</p>
                <p className="text-xs text-[#475569]">Automated release testing</p>
              </div>

              <div className="text-center pt-4 lg:pt-0 lg:px-4">
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent">
                  70%
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mt-2">Manual QA Reduction</p>
                <p className="text-xs text-[#475569]">Continuous test automation</p>
              </div>

              <div className="text-center pt-4 lg:pt-0 lg:px-4">
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#00AEEF] to-[#38BDF8] bg-clip-text text-transparent">
                  10x
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mt-2">Traffic Load Validated</p>
                <p className="text-xs text-[#475569]">k6 performance stress testing</p>
              </div>

              <div className="text-center pt-4 lg:pt-0 lg:px-4">
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#D9005B] via-[#8B5CF6] to-[#00AEEF] bg-clip-text text-transparent">
                  100%
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mt-2">Security Audit Pass Rate</p>
                <p className="text-xs text-[#475569]">SOC2 & OWASP Top 10</p>
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
                Software Flaws Hurt Revenue.{' '}
                <span className="text-[#475569] font-medium">Why Risk Production Crashes & Leaks?</span>
              </h2>
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed pt-2">
                Releasing software without rigorous test automation leads to critical production crashes, bad app store reviews, security breaches, and lost customer trust. Manual QA slows down sprint release velocity and fails under peak load spikes.
              </p>
            </div>

            {/* Right Circular Infographic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-white border border-slate-200 p-4 shadow-xl flex flex-col items-center justify-center text-center group">
                <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-[#D9005B] border-r-[#8B5CF6] border-b-[#00AEEF] rotate-45 group-hover:rotate-90 transition-transform duration-700" />
                <div className="z-10 space-y-1 px-4">
                  <span className="text-5xl font-black bg-gradient-to-r from-[#D9005B] to-[#00AEEF] bg-clip-text text-transparent">
                    10x
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#0B1220] leading-snug">
                    More Expensive to Fix a Bug in Production
                  </p>
                  <p className="text-[11px] text-[#475569]">IBM Systems Quality Institute</p>
                </div>
              </div>
            </div>

          </div>

          {/* Five Challenge Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D9005B] to-[#F04A8A]" />
              <Bug className="w-8 h-8 text-[#D9005B] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-[#0B1220] mb-2">Production Bugs</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Critical errors reaching end users after manual QA misses edge cases.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F04A8A] to-[#8B5CF6]" />
              <Zap className="w-8 h-8 text-[#8B5CF6] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-[#0B1220] mb-2">Traffic Crashes</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Database locks and server downtime during high-traffic events.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7]" />
              <Lock className="w-8 h-8 text-[#A855F7] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-[#0B1220] mb-2">Security Leaks</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                OWASP vulnerabilities exposed without static penetration scanning.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A855F7] to-[#00AEEF]" />
              <Activity className="w-8 h-8 text-[#00AEEF] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-[#0B1220] mb-2">Slow Releases</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Manual regression testing blocking bi-weekly sprint deployments.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00AEEF] to-[#D9005B]" />
              <Smartphone className="w-8 h-8 text-[#D9005B] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-[#0B1220] mb-2">Device Fragmentation</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Mobile app failures on un-tested browser or device resolutions.
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
              From Slow Manual Testing to Continuous Quality Automation.
            </h2>
            <p className="text-base text-[#475569]">
              We integrate automated test suites, performance stress testing, and penetration security directly into your CI/CD pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 01 */}
            <div className="rounded-3xl p-8 bg-slate-50 border border-slate-200/80 hover:border-[#D9005B]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#D9005B]/30 group-hover:text-[#D9005B] transition-colors">01</span>
                  <div className="w-12 h-12 rounded-2xl bg-[#D9005B]/10 text-[#D9005B] flex items-center justify-center">
                    <Workflow className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0B1220]">Continuous Test Automation</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  We write Playwright and Cypress end-to-end automation suites that execute automatically on every pull request—reducing manual QA overhead by 70%.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#D9005B]">
                <span>Automated PR Testing</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 02 */}
            <div className="rounded-3xl p-8 bg-slate-50 border border-slate-200/80 hover:border-[#8B5CF6]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#8B5CF6]/30 group-hover:text-[#8B5CF6] transition-colors">02</span>
                  <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center">
                    <Zap className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0B1220]">Performance & Stress QA</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  We stress-test your system under 10x peak traffic using k6 and JMeter, identifying database deadlocks and slow API endpoints long before launch day.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#8B5CF6]">
                <span>10x Peak Load Validation</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 03 */}
            <div className="rounded-3xl p-8 bg-slate-50 border border-slate-200/80 hover:border-[#00AEEF]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#00AEEF]/30 group-hover:text-[#00AEEF] transition-colors">03</span>
                  <div className="w-12 h-12 rounded-2xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center">
                    <Lock className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0B1220]">Penetration & Security Scans</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Our security engineers conduct OWASP Top 10 penetration audits and API vulnerability assessments to guarantee compliance with SOC2 & HIPAA standards.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#00AEEF]">
                <span>SOC2 Compliance Pentest</span>
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
              WHAT WE BUILD
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#0B1220]">
              Quality Assurance Services Built for Zero-Defect Delivery.
            </h2>
            <p className="text-base sm:text-lg text-[#475569]">
              From test automation frameworks to security penetration testing, we ensure software certainty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                num: '01',
                title: 'Test Automation Engineering',
                desc: 'Building robust automated Playwright & Cypress test suites covering unit, integration, and end-to-end flows in CI/CD.',
                icon: Workflow,
              },
              {
                num: '02',
                title: 'Performance & Load Testing',
                desc: 'Stress-testing architecture under 10x peak traffic using k6 and JMeter to eliminate latency and server crashes.',
                icon: Zap,
              },
              {
                num: '03',
                title: 'Security & Penetration Testing',
                desc: 'Executing OWASP Top 10 penetration audits, vulnerability scanning, and API security checks for SOC2 compliance.',
                icon: Lock,
              },
              {
                num: '04',
                title: 'API Testing & Validation',
                desc: 'Validating microservices for correctness, payload security, and performance using Postman and RestAssured.',
                icon: Database,
              },
              {
                num: '05',
                title: 'Mobile App Testing',
                desc: 'Testing native iOS and Android apps across hundreds of physical device and OS resolution configurations.',
                icon: Smartphone,
              },
              {
                num: '06',
                title: 'QA Consulting & Process Setup',
                desc: 'Auditing existing engineering QA processes and establishing world-class automated quality frameworks.',
                icon: ShieldCheck,
              },
              {
                num: '07',
                title: 'Regression & Smoke Testing',
                desc: 'Automated regression testing suites preventing old bugs from re-emerging on new feature releases.',
                icon: Bug,
              },
              {
                num: '08',
                title: 'Accessibility Testing (WCAG)',
                desc: 'Auditing web applications against international WCAG 2.1 AA accessibility guidelines.',
                icon: Search,
              },
              {
                num: '09',
                title: 'Dedicated QA Pod Augmentation',
                desc: 'Injecting senior QA automation engineers directly into your sprint teams within 2 weeks.',
                icon: Users,
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
                    <span>Explore Testing Service</span>
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

          {/* Detail 1: Test Automation Engineering */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                FEATURED SOLUTION
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
                Playwright & Cypress Test Automation
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                Replace slow manual testing with continuous test automation pipelines. We build scalable Playwright test frameworks that execute automatically on every pull request within 2 minutes.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Cut manual regression testing duration by up to 70%',
                  'Cross-browser testing (Chrome, Safari, Firefox, Edge)',
                  'Direct integration into GitHub Actions & GitLab CI runners',
                  'Visual regression testing catching accidental UI displacement',
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
                  Automate QA Pipelines
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 shadow-xl space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-6 h-6 text-[#D9005B]" />
                    <span className="font-bold text-[#0B1220]">Playwright CI Automation Suite</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#D9005B]/10 text-[#D9005B] font-semibold">100% Passed</span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8B5CF6] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#0B1220]">E2E Authentication Flow</p>
                      <p className="text-xs text-[#475569]">Validates login, MFA token generation & user dashboard routing.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00AEEF] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#0B1220]">API Payload & State Validation</p>
                      <p className="text-xs text-[#475569]">Verifies JSON schemas & database write assertions in parallel.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D9005B] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#0B1220]">Cross-Browser Visual Diff</p>
                      <p className="text-xs text-[#475569]">Compares pixel render outputs across Desktop & Mobile viewports.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Detail 2: Security & Penetration Testing (Reversed Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00AEEF]">
                SECURITY ASSURANCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
                Security Penetration & OWASP Audits
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                Protect your enterprise from data breaches. Our security engineers execute thorough penetration audits, API security scanning, and static code reviews to remediate vulnerabilities prior to launch.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'OWASP Top 10 vulnerability remediation (SQLi, XSS, SSRF)',
                  'API authentication & JWT token security penetration audits',
                  'Pre-audit reports required for SOC2 Type II & HIPAA compliance',
                  'Static application security testing (SAST) integrated into CI/CD',
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
                  Schedule Pentest Audit
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1">
              <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <Lock className="w-6 h-6 text-[#00AEEF]" />
                    <span className="font-bold text-[#0B1220]">OWASP Pentest Audit Engine</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#00AEEF]/10 text-[#00AEEF] font-semibold">SOC2 Certified</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center space-y-2">
                    <ShieldCheck className="w-6 h-6 text-[#00AEEF] mx-auto" />
                    <p className="text-xs font-bold text-[#0B1220]">Vulnerability Scan</p>
                    <p className="text-[10px] text-[#475569]">OWASP Top 10 Cleared</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center space-y-2">
                    <Bug className="w-6 h-6 text-[#8B5CF6] mx-auto" />
                    <p className="text-xs font-bold text-[#0B1220]">SAST Code Audit</p>
                    <p className="text-[10px] text-[#475569]">Zero Secret Leaks</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
                  <p className="text-xs font-semibold text-[#0B1220]">Automated SAST Scan → Penetration Audit → Verified SOC2 Remediation</p>
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
              QUALITY ASSURANCE LIFECYCLE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
              From Code Commit to Zero-Defect Release.
            </h2>
            <p className="text-base text-[#475569]">
              How ABL Tech guarantees application stability and security.
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
              Real Testing. Zero Production Crashes.
            </h2>
            <p className="text-base text-[#475569]">
              Explore how our quality engineering pods eliminate bugs and secure enterprise releases.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Case Study 01 */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200/90 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
              <div className="p-8 sm:p-10 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#D9005B]/10 text-[#D9005B]">
                  Test Automation
                </span>
                <h3 className="text-2xl font-bold text-[#0B1220]">
                  SaaS Automated QA Pipeline Transformation
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Implemented automated Playwright & Postman test suites into GitHub Actions for a B2B SaaS platform—cutting regression testing time by 70%.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/80">
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#D9005B]">70%</p>
                    <p className="text-xs text-[#475569]">QA Time Reduced</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#8B5CF6]">0</p>
                    <p className="text-xs text-[#475569]">Production Bugs</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#00AEEF]">2 Min</p>
                    <p className="text-xs text-[#475569]">CI Test Execution</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#0B1220]">Enterprise SaaS Sector</span>
                <a href="#contact-form" className="inline-flex items-center gap-2 text-xs font-bold text-[#D9005B] group-hover:translate-x-1 transition-transform">
                  View Case Study →
                </a>
              </div>
            </div>

            {/* Case Study 02 */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200/90 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
              <div className="p-8 sm:p-10 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#00AEEF]/10 text-[#00AEEF]">
                  Performance Stress QA
                </span>
                <h3 className="text-2xl font-bold text-[#0B1220]">
                  E-Commerce 10x Peak Traffic Load Audit
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Simulated 10x peak Black Friday traffic using k6 load runners, identifying and remediating 4 critical database connection deadlocks prior to launch.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/80">
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#00AEEF]">10x</p>
                    <p className="text-xs text-[#475569]">Peak Traffic Validated</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#8B5CF6]">4 Locks</p>
                    <p className="text-xs text-[#475569]">Fixed Pre-Launch</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#D9005B]">100%</p>
                    <p className="text-xs text-[#475569]">Uptime on Launch Day</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#0B1220]">E-Commerce Global Sector</span>
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
              TECH STACK
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
              QA Frameworks Built for Precision and Speed.
            </h2>
            <p className="text-base text-[#475569]">
              We utilize battle-tested test automation libraries, load generators, and security penetration tools.
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {[
              { id: 'automation', label: 'Test Automation' },
              { id: 'performance', label: 'Performance Stress' },
              { id: 'security', label: 'Security & Pentest' },
              { id: 'api', label: 'API QA Tooling' },
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
                Quality Engineers Who Protect Brand Reputation.
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                ABL Tech goes beyond manual click-testing. We integrate automated quality assurance, performance load stress-testing, and penetration security into your development lifecycle—ensuring total launch certainty.
              </p>

              <div className="pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-white bg-[#0B1220] hover:bg-[#D9005B] transition-colors shadow-md"
                >
                  Schedule QA Review
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#D9005B]/10 text-[#D9005B] flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">Zero-Bug Focus</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Automated Playwright regression suites blocking defective code before production.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">10x Traffic Load QA</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  k6 performance stress simulations ensuring system stability during peak events.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center font-bold">
                  03
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">OWASP Pentest Security</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Static vulnerability scanning and penetration audits for SOC2 Type II compliance.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#D9005B]/10 text-[#D9005B] flex items-center justify-center font-bold">
                  04
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">Rapid Pod Onboarding</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Senior QA automation engineers onboarded directly into your sprint teams within 2 weeks.
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
              A Clear Path From Code Commit to Flawless Release.
            </h2>
            <p className="text-base text-[#475569]">
              Our proven quality engineering framework guarantees software stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">

            {[
              { num: '01', title: 'Audit', desc: 'Audit codebase, test coverage metrics, and pipeline bottlenecks.' },
              { num: '02', title: 'Automation', desc: 'Write Playwright & Cypress automated test suites for critical user journeys.' },
              { num: '03', title: 'Integration', desc: 'Integrate test suites directly into CI/CD runners (GitHub Actions).' },
              { num: '04', title: 'Stress & Pentest', desc: 'Execute k6 load stress simulations and OWASP penetration scans.' },
              { num: '05', title: 'Continuous SRE', desc: 'Synthetic production monitoring and automated regression protection.' },
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
              Everything you need to know about partnering with ABL Tech for Quality Assurance & Testing.
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
                    LET'S ENSURE ZERO DEFECTS
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-bold text-[#0B1220] leading-tight">
                    Ready to Automate QA & Protect Production Releases?
                  </h2>
                  <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
                    Speak with our senior quality engineers to audit your software test coverage, automate regression suites, and schedule performance stress testing.
                  </p>
                </div>

                {/* Trust Points */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-5 h-5 text-[#D9005B]" />
                    <span>Free technical QA audit & coverage assessment</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-5 h-5 text-[#8B5CF6]" />
                    <span>70% reduction in manual regression testing duration</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-5 h-5 text-[#00AEEF]" />
                    <span>SOC2 & OWASP Top 10 penetration audit reporting</span>
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
                        Our quality engineering team will contact you shortly to schedule your free QA consultation.
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
                            <option value="Test Automation">Test Automation Engineering (Playwright/Cypress)</option>
                            <option value="Performance Testing">Performance & 10x Load Testing (k6)</option>
                            <option value="Security Penetration">Security Penetration & OWASP Testing</option>
                            <option value="API Testing">API Testing & Automation</option>
                            <option value="Mobile App Testing">Mobile App QA (iOS/Android)</option>
                            <option value="QA Pod Augmentation">QA Pod Staff Augmentation</option>
                            <option value="Consulting">QA Audit & Framework Consulting</option>
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
                          placeholder="Tell us about your application stack, target launch date, and QA requirements..."
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
