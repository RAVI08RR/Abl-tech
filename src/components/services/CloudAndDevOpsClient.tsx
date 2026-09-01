'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Cloud,
  Server,
  Zap,
  ShieldCheck,
  Rocket,
  Users,
  Check,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Database,
  Lock,
  Workflow,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  ChevronLeft,
  Sparkles,
  RefreshCw,
  Cpu,
  Boxes,
  Terminal,
  Activity,
  DollarSign
} from 'lucide-react'

export function CloudAndDevOpsClient() {
  // 1. Interactive Tech Stack Active Tab
  const [activeTechTab, setActiveTechTab] = useState<'cloud' | 'container' | 'cicd' | 'security'>('cloud')

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
    service: 'Cloud & DevOps',
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
      quote: "“ABL Tech cut our monthly AWS cloud bill by 45% through FinOps optimization while accelerating our code release frequency from once a month to ten times a day.”",
      name: "Daniel Sterling",
      role: "VP of Cloud Infrastructure",
      company: "SaaS Cloud Velocity",
      avatar: "DS",
    },
    {
      quote: "“Their DevOps architects executed our multi-region Kubernetes migration with zero customer downtime. Our system now scales automatically during 10x peak traffic bursts.”",
      name: "Hannah Goldstein",
      role: "Chief Technology Officer",
      company: "Global Commerce Direct",
      avatar: "HG",
    },
    {
      quote: "“The DevSecOps automated security pipeline engineered by ABL Tech caught vulnerability flaws instantly in CI/CD before any code reached production.”",
      name: "Raymond Cruz",
      role: "Director of Information Security",
      company: "HealthTech Systems",
      avatar: "RC",
    },
  ]

  const workflowStages = [
    {
      number: '01',
      title: 'Cloud Audit & Security',
      subtitle: 'Assess & Blueprint',
      description: 'Auditing existing cloud infrastructure, server bottlenecks, IAM security, and FinOps spending leaks.',
      icon: Cloud,
      items: ['Cloud Cost Audit', 'IAM Security Scan', 'Infrastructure Map'],
    },
    {
      number: '02',
      title: 'Infrastructure as Code',
      subtitle: 'Terraform & Ansible',
      description: 'Writing version-controlled, repeatable cloud architecture blueprints using Terraform & Kubernetes manifests.',
      icon: Terminal,
      items: ['Terraform IaC', 'Kubernetes Helm Charts', 'Automated VPC Setup'],
    },
    {
      number: '03',
      title: 'CI/CD Pipeline Build',
      subtitle: 'Automate & Secure',
      description: 'Engineering continuous integration and deployment pipelines with automated unit testing and DevSecOps scanning.',
      icon: Workflow,
      items: ['GitHub Actions / Jenkins', 'Automated Security Scans', 'Staging Environments'],
    },
    {
      number: '04',
      title: 'Phased Migration',
      subtitle: 'Lift & Refactor',
      description: 'Containerizing workloads with Docker & Kubernetes and executing phased zero-downtime cloud migration.',
      icon: Boxes,
      items: ['Docker Containerization', 'Zero Downtime Shift', 'Database Replication'],
    },
    {
      number: '05',
      title: 'SRE & FinOps Control',
      subtitle: 'Monitor & Optimize',
      description: 'Implementing SRE auto-healing scripts, Datadog telemetry, 99.99% uptime SLAs, and FinOps governance.',
      icon: TrendingUp,
      items: ['24/7 Telemetry', 'Auto-Healing Scripting', 'FinOps Cost Guardrails'],
    },
  ]

  const techStack = {
    cloud: [
      { name: 'Amazon Web Services (AWS)', label: 'EC2, EKS, Lambda, S3, RDS & Bedrock AI Stack', badge: 'Cloud Leader' },
      { name: 'Microsoft Azure', label: 'AKS Kubernetes, Azure DevOps & Hybrid Cloud Stack', badge: 'Enterprise' },
      { name: 'Google Cloud Platform (GCP)', label: 'GKE, BigQuery, Vertex AI & Cloud Run Services', badge: 'Big Data' },
      { name: 'Hybrid & Multi-Cloud', label: 'Zero Lock-In Multi-Cloud Failover & Orchestration', badge: 'Resilience' },
    ],
    container: [
      { name: 'Kubernetes (K8s)', label: 'Production Microservice Container Orchestration', badge: 'Container Standard' },
      { name: 'Docker & Podman', label: 'Lightweight Containerization & Microservice Bundles', badge: 'Container' },
      { name: 'Terraform (IaC)', label: 'Declarative Version-Controlled Infrastructure as Code', badge: 'IaC Standard' },
      { name: 'Helm & ArgoCD', label: 'GitOps Continuous Deployment & Kubernetes Helm Charts', badge: 'GitOps' },
    ],
    cicd: [
      { name: 'GitHub Actions', label: 'Automated CI/CD Workflows, Testing & Release Pipelines', badge: 'Pipeline Core' },
      { name: 'GitLab CI / Jenkins', label: 'Enterprise Build Orchestration & Staging Pipelines', badge: 'Enterprise CI' },
      { name: 'Sonarqube & Snyk', label: 'Automated Static Code Analysis & Dependency Scanning', badge: 'Code Quality' },
      { name: 'Datadog & Prometheus', label: 'Real-Time Telemetry, Metrics & Application APM', badge: 'Monitoring' },
    ],
    security: [
      { name: 'DevSecOps Gateways', label: 'Automated Vulnerability Scanning Integrated in CI/CD', badge: 'DevSecOps' },
      { name: 'HashiCorp Vault', label: 'Enterprise Secret Management & Encryption Key Vaults', badge: 'Secret Vault' },
      { name: 'SOC2 & ISO 27001 IaC', label: 'Pre-Audited Security Governance Policies & Blueprints', badge: 'Compliance' },
      { name: 'CloudFinOps Governance', label: 'Real-Time Cost Tracking & Resource Right-Sizing', badge: 'FinOps' },
    ],
  }

  const faqs = [
    {
      question: 'Should our enterprise adopt a Single Cloud or Multi-Cloud strategy?',
      answer: 'A single cloud provider (AWS or Azure) simplifies infrastructure management and unlocks deep native feature integrations. A multi-cloud strategy avoids vendor lock-in and maximizes disaster recovery resilience. We conduct a thorough workload audit to determine the smartest ROI path for your enterprise.',
    },
    {
      question: 'How does DevOps actually save our company money?',
      answer: 'DevOps replaces expensive, error-prone manual deployment tasks with automated CI/CD pipelines. Catching software bugs instantly in staging avoids devastating production crashes, while FinOps cost governance right-sizes idle cloud instances to cut monthly infrastructure bills by up to 45%.',
    },
    {
      question: 'Can you migrate our legacy servers to the cloud without application downtime?',
      answer: 'Yes. We execute a zero-downtime migration strategy using parallel staging environments, database live-replication, and automated traffic switching—ensuring your users experience uninterrupted service throughout the migration.',
    },
    {
      question: 'What is Infrastructure as Code (IaC) and why is it necessary?',
      answer: 'Infrastructure as Code (IaC) replaces manual server configuration with version-controlled code blueprints (Terraform / Ansible). This ensures your entire cloud infrastructure can be spun up, tested, or recovered automatically within minutes, eliminating human setup errors.',
    },
    {
      question: 'How do you enforce security compliance (SOC2, HIPAA, GDPR) in the cloud?',
      answer: 'We implement DevSecOps directly into your CI/CD pipelines. Every code commit and Terraform script is automatically scanned for security flaws, IAM permission leaks, and unencrypted databases before being deployed to staging or production.',
    },
    {
      question: 'Do you offer ongoing 24/7 SRE (Site Reliability Engineering) and support?',
      answer: 'Yes. We provide SLA-backed 24/7 SRE monitoring, automated telemetry alerting, incident response management, and monthly FinOps cost audits.',
    },
  ]

  return (
    <main id="main-content" className="bg-[#FFFFFF] text-[#0B1220] selection:bg-[#D9005B] selection:text-white">

      {/* ─────────────────────────────────────────────────────────
          1. HERO SECTION (Light Premium Backdrop with Cloud Visual)
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
                  CLOUD & DEVOPS
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B1220] leading-[1.12]">
                Ship Code Faster.{' '}
                <span className="bg-gradient-to-r from-[#D9005B] via-[#F04A8A] via-[#8B5CF6] to-[#00AEEF] bg-clip-text text-transparent">
                  Never Go Down.
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-[#475569] max-w-2xl leading-relaxed font-normal">
                Your infrastructure should accelerate your business, not hold it hostage. We architect scalable cloud solutions, execute zero-downtime migrations, and implement elite DevOps pipelines so your teams ship secure code in minutes.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#D9005B] via-[#F04A8A] to-[#00AEEF] hover:opacity-95 transition-all shadow-lg shadow-[#D9005B]/20 hover:shadow-xl hover:shadow-[#D9005B]/30 hover:-translate-y-0.5"
                >
                  Book a Free Cloud Audit
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#services-grid"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-semibold text-[#0B1220] bg-white border border-slate-200 shadow-sm hover:border-[#D9005B]/40 hover:bg-slate-50/80 transition-all hover:-translate-y-0.5"
                >
                  Explore DevOps Capabilities
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm font-medium text-[#475569] border-t border-slate-200/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9005B]" />
                  <span>45% Avg Cloud Cost Reduction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" />
                  <span>Zero-Downtime Migration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF]" />
                  <span>DevSecOps & SOC2 Ready</span>
                </div>
              </div>

            </div>

            {/* HERO RIGHT SIDE — 3D Visual & Floating Cards */}
            <div className="lg:col-span-5 relative flex justify-center items-center">

              {/* Main Visual Glass Container */}
              <div className="relative w-full max-w-lg aspect-square rounded-3xl bg-gradient-to-br from-white/90 via-slate-50/80 to-white/90 border border-slate-200 shadow-2xl p-6 backdrop-blur-xl flex flex-col justify-between overflow-hidden group">
                {/* Visual Image Background with Low Opacity */}
                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop"
                    alt="Cloud servers and database DevOps storage"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                    unoptimized
                  />
                </div>

                {/* Glowing Canvas backdrop */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,0,91,0.08)_0%,rgba(0,174,239,0.08)_50%,transparent_100%)] pointer-events-none" />

                {/* Central Cloud Core Component */}
                <div className="relative z-10 my-auto flex flex-col items-center justify-center space-y-6">

                  {/* Outer Pulsing Glowing Ring */}
                  <div className="relative w-36 h-36 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#D9005B]/20 via-[#8B5CF6]/20 to-[#00AEEF]/20 p-1 animate-spin-slow">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center border border-slate-200/80 shadow-inner">
                      <Cloud className="w-16 h-16 text-[#D9005B] animate-pulse" />
                    </div>
                    <span className="absolute -top-1 left-1/2 w-4 h-4 rounded-full bg-[#D9005B] shadow-lg shadow-[#D9005B]" />
                    <span className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-[#00AEEF] shadow-lg shadow-[#00AEEF]" />
                    <span className="absolute bottom-2 left-2 w-3.5 h-3.5 rounded-full bg-[#8B5CF6] shadow-lg shadow-[#8B5CF6]" />
                  </div>

                  <div className="text-center space-y-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                      ABL CLOUD ENGINE
                    </div>
                    <div className="text-sm font-semibold text-[#0B1220]">
                      Kubernetes, CI/CD & FinOps Stack
                    </div>
                  </div>
                </div>

                {/* Floating Card 1: Cloud Migration */}
                <div className="absolute top-6 left-4 sm:-left-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-bounce-slow">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#D9005B] to-[#F04A8A] flex items-center justify-center text-white shadow-md">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B1220]">Cloud Migration</p>
                    <p className="text-[10px] text-[#475569]">Zero Downtime</p>
                  </div>
                </div>

                {/* Floating Card 2: CI/CD Automation */}
                <div className="absolute top-12 right-4 sm:-right-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-float-delayed">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#8B5CF6] to-[#A855F7] flex items-center justify-center text-white shadow-md">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B1220]">CI/CD Pipelines</p>
                    <p className="text-[10px] text-[#475569]">10x Release Speed</p>
                  </div>
                </div>

                {/* Floating Card 3: Kubernetes & IaC */}
                <div className="absolute bottom-10 left-4 sm:-left-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-float">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00AEEF] to-[#38BDF8] flex items-center justify-center text-white shadow-md">
                    <Boxes className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B1220]">Kubernetes & IaC</p>
                    <p className="text-[10px] text-[#475569]">Terraform Automation</p>
                  </div>
                </div>

                {/* Floating Card 4: FinOps Cost Optimization */}
                <div className="absolute bottom-6 right-4 sm:-right-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-bounce-slow">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#D9005B] via-[#8B5CF6] to-[#00AEEF] flex items-center justify-center text-white shadow-md">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B1220]">FinOps Control</p>
                    <p className="text-[10px] text-[#475569]">Slash Hosting Bills</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Trusted-By Logo Strip */}
          <div className="mt-20 pt-10 border-t border-slate-200/70">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-[#475569] mb-8">
              Trusted by cloud-native enterprises & high-growth scaleups
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all">
              {['AWS Premier', 'Azure Certified', 'GCP Partner', 'HashiCorp Partner', 'Docker Scale', 'Kubernetes Core'].map((brand, i) => (
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
                  45%
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mt-2">Avg Monthly Cloud Savings</p>
                <p className="text-xs text-[#475569]">FinOps cost optimization</p>
              </div>

              <div className="text-center pt-4 lg:pt-0 lg:px-4">
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent">
                  10x
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mt-2">Faster Release Frequency</p>
                <p className="text-xs text-[#475569]">Automated CI/CD pipelines</p>
              </div>

              <div className="text-center pt-4 lg:pt-0 lg:px-4">
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#00AEEF] to-[#38BDF8] bg-clip-text text-transparent">
                  99.99%
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mt-2">Infrastructure Uptime</p>
                <p className="text-xs text-[#475569]">SRE auto-healing clusters</p>
              </div>

              <div className="text-center pt-4 lg:pt-0 lg:px-4">
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#D9005B] via-[#8B5CF6] to-[#00AEEF] bg-clip-text text-transparent">
                  0 Min
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mt-2">Migration Downtime</p>
                <p className="text-xs text-[#475569]">Zero business disruption</p>
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
                Cloud Costs & Downtime Are Rising.{' '}
                <span className="text-[#475569] font-medium">Why Is Your Infrastructure Slowing You Down?</span>
              </h2>
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed pt-2">
                Unoptimized cloud resources, manual deployment bottlenecks, lack of automated security scans, and unexpected monthly cloud bill spikes drain engineering productivity. Without modern DevOps and FinOps governance, IT acts as a cost center rather than a growth engine.
              </p>
            </div>

            {/* Right Circular Infographic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-white border border-slate-200 p-4 shadow-xl flex flex-col items-center justify-center text-center group">
                <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-[#D9005B] border-r-[#8B5CF6] border-b-[#00AEEF] rotate-45 group-hover:rotate-90 transition-transform duration-700" />
                <div className="z-10 space-y-1 px-4">
                  <span className="text-5xl font-black bg-gradient-to-r from-[#D9005B] to-[#00AEEF] bg-clip-text text-transparent">
                    35%
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#0B1220] leading-snug">
                    Of Enterprise Cloud Budgets Are Completely Wasted
                  </p>
                  <p className="text-[11px] text-[#475569]">Flexera State of the Cloud Report</p>
                </div>
              </div>
            </div>

          </div>

          {/* Five Challenge Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D9005B] to-[#F04A8A]" />
              <DollarSign className="w-8 h-8 text-[#D9005B] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-[#0B1220] mb-2">Wasted Cloud Spend</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Orphaned resources and unoptimized server sizing bloating monthly bills.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F04A8A] to-[#8B5CF6]" />
              <Zap className="w-8 h-8 text-[#8B5CF6] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-[#0B1220] mb-2">Manual Releases</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Slow deployment cycles plagued by human error and release anxiety.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7]" />
              <Activity className="w-8 h-8 text-[#A855F7] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-[#0B1220] mb-2">Downtime Risks</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Single points of failure causing unexpected outages during traffic spikes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A855F7] to-[#00AEEF]" />
              <Lock className="w-8 h-8 text-[#00AEEF] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-[#0B1220] mb-2">DevSecOps Gaps</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Security vulnerabilities missed prior to production deployment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00AEEF] to-[#D9005B]" />
              <RefreshCw className="w-8 h-8 text-[#D9005B] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-[#0B1220] mb-2">Migration Fear</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Reluctance to modernize legacy servers due to data loss risks.
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
              From Infrastructure Chaos to Automated High-Availability Cloud.
            </h2>
            <p className="text-base text-[#475569]">
              We unite cloud-native architecture, Infrastructure as Code, and continuous FinOps governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 01 */}
            <div className="rounded-3xl p-8 bg-slate-50 border border-slate-200/80 hover:border-[#D9005B]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#D9005B]/30 group-hover:text-[#D9005B] transition-colors">01</span>
                  <div className="w-12 h-12 rounded-2xl bg-[#D9005B]/10 text-[#D9005B] flex items-center justify-center">
                    <Terminal className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0B1220]">Infrastructure as Code (IaC)</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  We write version-controlled Terraform & Ansible blueprints—allowing your entire multi-region cloud setup to be spun up or recovered automatically within minutes.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#D9005B]">
                <span>Automated Infrastructure</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 02 */}
            <div className="rounded-3xl p-8 bg-slate-50 border border-slate-200/80 hover:border-[#8B5CF6]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#8B5CF6]/30 group-hover:text-[#8B5CF6] transition-colors">02</span>
                  <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0B1220]">DevSecOps & Compliance</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Security scanning is integrated directly into your CI/CD pipeline—automatically blocking unencrypted resources and permission leaks before staging deployment.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#8B5CF6]">
                <span>SOC2 & HIPAA Automation</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 03 */}
            <div className="rounded-3xl p-8 bg-slate-50 border border-slate-200/80 hover:border-[#00AEEF]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#00AEEF]/30 group-hover:text-[#00AEEF] transition-colors">03</span>
                  <div className="w-12 h-12 rounded-2xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center">
                    <DollarSign className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0B1220]">FinOps Cost Governance</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  We audit idle compute instances, implement serverless auto-scaling, and enforce cost guardrails—cutting monthly cloud hosting bills by up to 45%.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#00AEEF]">
                <span>Optimized Cloud Spend</span>
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
              Cloud & DevOps Solutions Built for Speed and Security.
            </h2>
            <p className="text-base sm:text-lg text-[#475569]">
              From zero-downtime cloud migrations to automated Kubernetes CI/CD pipelines, we engineer resilient infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                num: '01',
                title: 'Cloud Migration Services',
                desc: 'Phased, risk-free cloud migrations shifting physical data centers or legacy servers to AWS, Azure, or GCP with zero downtime.',
                icon: Cloud,
              },
              {
                num: '02',
                title: 'CI/CD Pipeline Engineering',
                desc: 'Automated CI/CD pipelines where every commit is security-scanned, tested, and safely deployed to staging/production.',
                icon: Zap,
              },
              {
                num: '03',
                title: 'Kubernetes & Containerization',
                desc: 'Production-ready Docker & Kubernetes clusters equipped with automated horizontal pod autoscaling (HPA).',
                icon: Boxes,
              },
              {
                num: '04',
                title: 'Infrastructure as Code (IaC)',
                desc: 'Version-controlled Terraform & Ansible blueprints making your entire cloud infrastructure repeatable and reliable.',
                icon: Terminal,
              },
              {
                num: '05',
                title: 'AWS Architecture & Optimization',
                desc: 'Certified AWS setups—optimizing EC2 auto-scaling, S3 data lakes, RDS clusters, and serverless Lambda functions.',
                icon: Server,
              },
              {
                num: '06',
                title: 'Microsoft Azure Engineering',
                desc: 'Enterprise hybrid cloud deployments using AKS Kubernetes, Azure DevOps pipelines, and Active Directory auth.',
                icon: ShieldCheck,
              },
              {
                num: '07',
                title: 'DevSecOps & Security Gateways',
                desc: 'Integrating static vulnerability scanning, secret management (Vault), and strict IAM security into pipelines.',
                icon: Lock,
              },
              {
                num: '08',
                title: 'FinOps Cloud Cost Optimization',
                desc: 'FinOps audits right-sizing compute instances, eliminating orphaned disks, and reducing monthly bills by up to 45%.',
                icon: DollarSign,
              },
              {
                num: '09',
                title: '24/7 SRE & Telemetry Monitoring',
                desc: 'Datadog and Prometheus telemetry paired with automated SRE self-healing scripts for 99.99% system uptime.',
                icon: Activity,
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
                    <span>Explore Solution</span>
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

          {/* Detail 1: CI/CD Pipeline Automation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                FEATURED DEVOPS SOLUTION
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
                Automated CI/CD Pipeline Engineering
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                Transform release anxiety into continuous delivery speed. We engineer automated pipelines where every code commit is security-scanned, tested, and safely deployed in minutes.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  '10x faster code deployment velocity with zero manual steps',
                  'Automated static code analysis (SonarQube) & dependency vulnerability scans',
                  'Zero-downtime blue/green or canary production deployments',
                  'Automated staging environment provisioning on every pull request',
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
                  Automate Your Pipelines
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 shadow-xl space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <Zap className="w-6 h-6 text-[#D9005B]" />
                    <span className="font-bold text-[#0B1220]">Automated CI/CD Delivery Pipeline</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#D9005B]/10 text-[#D9005B] font-semibold">Passing Build</span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                    <Terminal className="w-5 h-5 text-[#8B5CF6] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#0B1220]">Step 1: Commit & Static Security Audit</p>
                      <p className="text-xs text-[#475569]">Scans secrets, credentials, and dependency CVE vulnerabilities.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                    <Workflow className="w-5 h-5 text-[#00AEEF] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#0B1220]">Step 2: Automated Unit & Stress Test</p>
                      <p className="text-xs text-[#475569]">Executes 1,000+ unit & API integration tests in containerized runner.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D9005B] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#0B1220]">Step 3: Blue/Green Production Deployment</p>
                      <p className="text-xs text-[#475569]">Switches traffic with zero user downtime and automated rollback safety.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Detail 2: FinOps & Cloud Cost Optimization (Reversed Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00AEEF]">
                FINANCIAL GOVERNANCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
                Cloud Cost Optimization (FinOps)
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                Stop overpaying cloud providers. We conduct rigorous FinOps audits to eliminate unused compute instances, right-size databases, and enforce automated spending guardrails.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Average 30%–45% immediate reduction in AWS/Azure monthly invoice bills',
                  'Identification and removal of unattached EBS storage volumes & idle DBs',
                  'Reserved Instance (RI) & Savings Plans portfolio optimization',
                  'Real-time automated budget alerts preventing accidental cloud overspending',
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
                  Cut Cloud Costs Today
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1">
              <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-6 h-6 text-[#00AEEF]" />
                    <span className="font-bold text-[#0B1220]">FinOps Cost Audit Engine</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#00AEEF]/10 text-[#00AEEF] font-semibold">45% Saved</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center space-y-2">
                    <Server className="w-6 h-6 text-[#00AEEF] mx-auto" />
                    <p className="text-xs font-bold text-[#0B1220]">Resource Right-Sizing</p>
                    <p className="text-[10px] text-[#475569]">Eliminates Idle CPU</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center space-y-2">
                    <TrendingUp className="w-6 h-6 text-[#8B5CF6] mx-auto" />
                    <p className="text-xs font-bold text-[#0B1220]">Savings Plan Guard</p>
                    <p className="text-[10px] text-[#475569]">Optimized AWS Commitments</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
                  <p className="text-xs font-semibold text-[#0B1220]">Cloud Invoice Audit → Resource Right-Sizing → Automated Budget Guardrails</p>
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
              DEVOPS LIFECYCLE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
              From Manual Servers to High-Availability Cloud.
            </h2>
            <p className="text-base text-[#475569]">
              How ABL Tech delivers resilient, automated cloud infrastructure.
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
              Real Infrastructure. Real Business Impact.
            </h2>
            <p className="text-base text-[#475569]">
              Explore how our Cloud & DevOps teams optimize scalability and cut hosting costs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Case Study 01 */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200/90 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
              <div className="p-8 sm:p-10 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#D9005B]/10 text-[#D9005B]">
                  FinOps Cost Optimization
                </span>
                <h3 className="text-2xl font-bold text-[#0B1220]">
                  SaaS FinOps Cloud Cost Reduction
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Audited AWS infrastructure for a global SaaS brand—eliminating idle database instances and cutting monthly hosting spend by 45%.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/80">
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#D9005B]">45%</p>
                    <p className="text-xs text-[#475569]">Monthly Bill Saved</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#8B5CF6]">$380K</p>
                    <p className="text-xs text-[#475569]">Annual Savings</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#00AEEF]">100%</p>
                    <p className="text-xs text-[#475569]">Performance Retained</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#0B1220]">SaaS Platform Sector</span>
                <a href="#contact-form" className="inline-flex items-center gap-2 text-xs font-bold text-[#D9005B] group-hover:translate-x-1 transition-transform">
                  View Case Study →
                </a>
              </div>
            </div>

            {/* Case Study 02 */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200/90 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
              <div className="p-8 sm:p-10 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#00AEEF]/10 text-[#00AEEF]">
                  Zero-Downtime Migration
                </span>
                <h3 className="text-2xl font-bold text-[#0B1220]">
                  Multi-Region Kubernetes Cloud Migration
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Migrated a legacy physical data center to AWS EKS Kubernetes clusters—achieving 99.99% uptime and zero migration customer downtime.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/80">
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#00AEEF]">0 Min</p>
                    <p className="text-xs text-[#475569]">Customer Downtime</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#8B5CF6]">99.99%</p>
                    <p className="text-xs text-[#475569]">System Uptime SLA</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#D9005B]">10x</p>
                    <p className="text-xs text-[#475569]">Faster Deployments</p>
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
              Technology Built for Speed, Scale and Security.
            </h2>
            <p className="text-base text-[#475569]">
              We utilize certified cloud infrastructure, container orchestration, and IaC blueprints.
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {[
              { id: 'cloud', label: 'Cloud Platforms' },
              { id: 'container', label: 'Containers & IaC' },
              { id: 'cicd', label: 'CI/CD & Telemetry' },
              { id: 'security', label: 'DevSecOps & FinOps' },
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
                Cloud Architects Who Deliver 99.99% Reliability.
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                ABL Tech aligns deep cloud engineering capabilities with FinOps cost governance and DevSecOps compliance. We make infrastructure your fastest strategic advantage.
              </p>

              <div className="pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-white bg-[#0B1220] hover:bg-[#D9005B] transition-colors shadow-md"
                >
                  Schedule Infrastructure Review
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#D9005B]/10 text-[#D9005B] flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">FinOps Governance</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Real-time cloud cost tracking right-sizing compute instances to eliminate wasted spending.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">Automated DevSecOps</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Static vulnerability scanning and secret vault security integrated directly into CI/CD pipelines.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center font-bold">
                  03
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">Zero-Downtime Releases</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Canary and blue/green production deployment strategies ensuring 100% operational uptime.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#D9005B]/10 text-[#D9005B] flex items-center justify-center font-bold">
                  04
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">24/7 SLA Telemetry</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Round-the-clock site reliability engineering (SRE) monitoring and automated cluster recovery.
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
              A Clear Path From Audit to Automated Cloud.
            </h2>
            <p className="text-base text-[#475569]">
              Our proven cloud engineering methodology guarantees zero downtime and predictable costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">

            {[
              { num: '01', title: 'Audit', desc: 'Infrastructure, IAM security, and FinOps spending review.' },
              { num: '02', title: 'Blueprint', desc: 'Terraform IaC blueprints and Kubernetes cluster topology.' },
              { num: '03', title: 'Pipeline', desc: 'CI/CD deployment pipeline build with static vulnerability checks.' },
              { num: '04', title: 'Migrate', desc: 'Zero-downtime workload containerization and parallel database sync.' },
              { num: '05', title: 'SRE & FinOps', desc: '24/7 telemetry monitoring, auto-scaling, and monthly cost optimization.' },
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
              Everything you need to know about partnering with ABL Tech for Cloud & DevOps.
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

          <div className="rounded-3xl bg-gradient-to-br from-pink-50/80 via-slate-50 to-cyan-50/80 border border-pink-200/60 p-2 sm:p-6 lg:p-6 shadow-2xl border-pink-200/60 p-5 sm:p-12 lg:p-16 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* LEFT SIDE: Copy & Trust Points */}
              <div className="lg:col-span-6 space-y-8">

                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                    LET'S OPTIMIZE YOUR CLOUD
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-bold text-[#0B1220] leading-tight">
                    Ready to Slash Cloud Costs & Accelerate Deployments?
                  </h2>
                  <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
                    Speak with our certified cloud and DevOps architects to audit your infrastructure, eliminate billing waste, and build automated CI/CD pipelines.
                  </p>
                </div>

                {/* Trust Points */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-5 h-5 text-[#D9005B]" />
                    <span>Free cloud infrastructure & FinOps cost audit</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-5 h-5 text-[#8B5CF6]" />
                    <span>Zero-downtime migration architecture roadmap</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-5 h-5 text-[#00AEEF]" />
                    <span>24/7 SLA-backed site reliability support</span>
                  </div>
                </div>

                {/* Direct Contact Info */}
                <div className="pt-6 border-t border-slate-200/80 space-y-3">
                  <p className="text-xs font-bold uppercase text-[#475569] tracking-wider">Direct Reachout</p>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm font-medium text-[#0B1220]">
                    <a href="mailto:info@ablbusinesstech.com" className="hover:text-[#D9005B] transition-colors">
                      ✉️ info@ablbusinesstech.com
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
                        Our cloud & DevOps engineering team will contact you shortly to schedule your audit.
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
                            <option value="Cloud Migration">Cloud Migration</option>
                            <option value="CI/CD Automation">CI/CD Pipeline Engineering</option>
                            <option value="Kubernetes & Containers">Kubernetes & Containerization</option>
                            <option value="Infrastructure as Code">Infrastructure as Code (IaC)</option>
                            <option value="FinOps Cost Optimization">FinOps Cloud Cost Optimization</option>
                            <option value="DevSecOps & Compliance">DevSecOps Security Gateways</option>
                            <option value="SRE & Monitoring">24/7 SRE & Monitoring</option>
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
                          placeholder="Tell us about your cloud infrastructure goals, provider (AWS/Azure/GCP), and target timelines..."
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
