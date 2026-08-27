'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Brain,
  Bot,
  Zap,
  Sparkles,
  Link as LinkIcon,
  LineChart,
  Eye,
  MessageSquare,
  Target,
  ShieldCheck,
  Rocket,
  Users,
  Check,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Database,
  Lock,
  Cpu,
  Layers,
  Search,
  CheckCircle2,
  Server,
  Activity,
  Workflow,
  Globe,
  Award,
  Clock,
  Send,
  Sliders,
  ChevronLeft,
  Briefcase,
  TrendingUp,
  FileCheck,
  AlertCircle
} from 'lucide-react'

// Brand Colors & Gradients Utility references:
// Primary Gradient: Magenta -> Pink -> Purple -> Cyan
// #D9005B -> #F04A8A -> #8B5CF6 -> #00AEEF

export function AIDataEngineeringClient() {
  // 1. Interactive Tech Stack Active Tab
  const [activeTechTab, setActiveTechTab] = useState<'models' | 'frameworks' | 'infra' | 'platforms'>('models')

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
    service: 'AI Development',
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

    // Simulate async high-conversion submit handler
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1200)
  }

  const testimonials = [
    {
      quote: "“ABL Tech didn't just build technology for us. They understood our architecture, integrated seamlessly with our engineering team, and helped us launch our autonomous AI pipeline 3x faster than expected.”",
      name: "Michael Vance",
      role: "Chief Technology Officer",
      company: "FinTech Global Operations",
      avatar: "MV",
    },
    {
      quote: "“The data engineering and RAG pipeline constructed by ABL Tech transformed our document analysis workflow. What used to take hours of manual compliance checking now occurs in milliseconds with 99.8% precision.”",
      name: "Sarah Jenkins",
      role: "VP of Enterprise Innovation",
      company: "HealthCare Systems Corp",
      avatar: "SJ",
    },
    {
      quote: "“Their team combines deep theoretical machine learning knowledge with pragmatic enterprise execution. Zero fluff, total data privacy, and extraordinary ROI from day one.”",
      name: "David Ross",
      role: "Head of Data & AI",
      company: "Logistics Premier",
      avatar: "DR",
    },
  ]

  const workflowStages = [
    {
      number: '01',
      title: 'Data Sources',
      subtitle: 'Ingest & Connect',
      description: 'Stream structured databases, SaaS APIs, IoT feeds, and unstructured PDFs into a unified data hub.',
      icon: Database,
      items: ['SQL / NoSQL DBs', 'SaaS APIs & Webhooks', 'Unstructured PDF/Docs'],
    },
    {
      number: '02',
      title: 'Data Engineering',
      subtitle: 'Clean & Transform',
      description: 'Automated ETL pipelines, vector embeddings, deduplication, and zero-trust security governance.',
      icon: Workflow,
      items: ['Real-time ETL', 'Vector Embeddings', 'Data Governance'],
    },
    {
      number: '03',
      title: 'AI Models',
      subtitle: 'Reason & Predict',
      description: 'Deploy fine-tuned LLMs, predictive neural networks, domain-specific models, and multi-agent systems.',
      icon: Brain,
      items: ['Private LLMs & RAG', 'Computer Vision', 'Predictive ML'],
    },
    {
      number: '04',
      title: 'Automation',
      subtitle: 'Orchestrate Tasks',
      description: 'Autonomous AI agents execute complex multi-step tasks across enterprise CRMs, ERPs, and internal tools.',
      icon: Bot,
      items: ['Agentic Tool Use', 'ERP/CRM Sync', 'Human-in-Loop Rules'],
    },
    {
      number: '05',
      title: 'Business Results',
      subtitle: 'Measurable Outcomes',
      description: 'Real-time executive dashboards, automated decision-making, 80%+ operational speed, and scalable ROI.',
      icon: TrendingUp,
      items: ['Sub-second Response', '40%+ Cost Saved', 'Scalable Operations'],
    },
  ]

  const techStack = {
    models: [
      { name: 'OpenAI', label: 'GPT-4o & O1 Custom RAG Integration', badge: 'LLM Leader' },
      { name: 'Claude', label: 'Anthropic Claude 3.5 Sonnet Integration', badge: 'Reasoning' },
      { name: 'Llama 3.3', label: 'Meta Open-Source Fine-Tuned Models', badge: 'Private Hosted' },
      { name: 'Gemini', label: 'Google Gemini Pro & Flash Vision Systems', badge: 'Multimodal' },
    ],
    frameworks: [
      { name: 'PyTorch', label: 'Deep Learning & Neural Network Training', badge: 'AI Core' },
      { name: 'TensorFlow', label: 'Production Enterprise ML Architectures', badge: 'Enterprise' },
      { name: 'LangChain', label: 'Agentic Workflows & Multi-Tool Chains', badge: 'Agent Framework' },
      { name: 'LlamaIndex', label: 'Advanced Data Indexing & RAG Retrieval', badge: 'Data Framework' },
    ],
    infra: [
      { name: 'AWS Bedrock', label: 'Amazon Web Services Private AI Stack', badge: 'Cloud Leader' },
      { name: 'Azure OpenAI', label: 'Microsoft Enterprise Compliance Cloud', badge: 'SOC2 / HIPAA' },
      { name: 'Google Cloud Platform', label: 'Vertex AI & BigQuery Data Lakes', badge: 'Big Data' },
      { name: 'Docker & Kubernetes', label: 'Containerized Microservices & MLOps', badge: 'DevOps' },
    ],
    platforms: [
      { name: 'Snowflake', label: 'Cloud Data Warehouse & Analytics Engine', badge: 'Data Warehouse' },
      { name: 'Databricks', label: 'Lakehouse & Distributed Apache Spark', badge: 'Analytics' },
      { name: 'Pinecone', label: 'High-Performance Vector Database', badge: 'Vector Search' },
      { name: 'Qdrant / Weaviate', label: 'Self-Hosted Hybrid Vector Search', badge: 'Private Vector' },
    ],
  }

  const faqs = [
    {
      question: 'How secure is our enterprise data when implementing AI solutions?',
      answer: 'Security and zero data retention are engineered into every layer. We deploy solutions directly inside your isolated cloud environment (AWS, Azure, or GCP). Your proprietary data is encrypted at rest and in transit, and it is never used to train public foundation models or shared externally.',
    },
    {
      question: 'How long does an AI project take from concept to production?',
      answer: 'We operate with extreme delivery speed. A functional Proof of Concept (PoC) or initial prototype is delivered within 4 to 6 weeks. From there, we iterate in 2-week agile sprints, deploying full enterprise-scale production systems in 3 to 6 months.',
    },
    {
      question: 'Can you integrate AI agents with our existing legacy systems and ERPs?',
      answer: 'Yes. Our engineers specialize in API-first architecture, middleware wrappers, and legacy system modernization. Whether you run custom mainframes, SAP, Salesforce, ServiceNow, or proprietary databases, our AI agents seamlessly read, process, and write back data via secure connectors.',
    },
    {
      question: 'Do we need an internal team of AI engineers to maintain the system?',
      answer: 'No. We offer flexible partnership models. We can manage the complete MLOps pipeline and system updates continuously, or provide thorough documentation, code transfers, and training to upskill your in-house IT and engineering teams.',
    },
    {
      question: 'Do you provide ongoing support, monitoring, and model tuning after launch?',
      answer: 'Absolutely. AI systems require ongoing drift monitoring, model updates, and infrastructure scaling. We provide SLA-backed managed support, automated health checks, and periodic retraining schedules to keep your AI running at peak performance.',
    },
    {
      question: 'Can we start with a lightweight proof of concept (PoC)?',
      answer: 'Yes. We recommend starting with a high-impact, focused PoC to validate feasibility, measure baseline latency and accuracy, and prove hard ROI to your executive team before making a full-scale deployment commitment.',
    },
  ]

  return (
    <main id="main-content" className="bg-[#FFFFFF] text-[#0B1220] selection:bg-[#D9005B] selection:text-white">

      {/* ─────────────────────────────────────────────────────────
          1. HERO SECTION (Light Premium Backdrop with 3D AI Visual)
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
                  AI & DATA ENGINEERING
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B1220] leading-[1.12]">
                Turn{' '}
                <span className="bg-gradient-to-r from-[#D9005B] via-[#F04A8A] via-[#8B5CF6] to-[#00AEEF] bg-clip-text text-transparent">
                  AI & Data
                </span>{' '}
                Into Your Competitive Advantage.
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-[#475569] max-w-2xl leading-relaxed font-normal">
                Build intelligent systems, automate complex workflows, and transform raw data into measurable business outcomes with secure, scalable AI solutions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#D9005B] via-[#F04A8A] to-[#00AEEF] hover:opacity-95 transition-all shadow-lg shadow-[#D9005B]/20 hover:shadow-xl hover:shadow-[#D9005B]/30 hover:-translate-y-0.5"
                >
                  Book a Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#services-grid"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-semibold text-[#0B1220] bg-white border border-slate-200 shadow-sm hover:border-[#D9005B]/40 hover:bg-slate-50/80 transition-all hover:-translate-y-0.5"
                >
                  Explore Our Services
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm font-medium text-[#475569] border-t border-slate-200/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9005B]" />
                  <span>Enterprise Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" />
                  <span>Secure by Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF]" />
                  <span>Built to Scale</span>
                </div>
              </div>

            </div>

            {/* HERO RIGHT SIDE — 3D AI Visual & Floating Cards */}
            <div className="lg:col-span-5 relative flex justify-center items-center">

              {/* Main Visual Glass Container */}
              <div className="relative w-full max-w-lg aspect-square rounded-3xl bg-gradient-to-br from-white/90 via-slate-50/80 to-white/90 border border-slate-200 shadow-2xl p-6 backdrop-blur-xl flex flex-col justify-between overflow-hidden group">
                {/* Visual Image Background with Low Opacity */}
                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&q=80&auto=format&fit=crop"
                    alt="AI and Data Engineering illustration"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                    unoptimized
                  />
                </div>

                {/* Glowing AI Canvas backdrop */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,0,91,0.08)_0%,rgba(0,174,239,0.08)_50%,transparent_100%)] pointer-events-none" />

                {/* Central AI Neural Center Component */}
                <div className="relative z-10 my-auto flex flex-col items-center justify-center space-y-6">

                  {/* Outer Pulsing Glowing Ring */}
                  <div className="relative w-36 h-36 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#D9005B]/20 via-[#8B5CF6]/20 to-[#00AEEF]/20 p-1 animate-spin-slow">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center border border-slate-200/80 shadow-inner">
                      <Brain className="w-16 h-16 text-[#D9005B] animate-pulse" />
                    </div>
                    {/* Glowing nodes around ring */}
                    <span className="absolute -top-1 left-1/2 w-4 h-4 rounded-full bg-[#D9005B] shadow-lg shadow-[#D9005B]" />
                    <span className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-[#00AEEF] shadow-lg shadow-[#00AEEF]" />
                    <span className="absolute bottom-2 left-2 w-3.5 h-3.5 rounded-full bg-[#8B5CF6] shadow-lg shadow-[#8B5CF6]" />
                  </div>

                  <div className="text-center space-y-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                      ABL TECH AI ENGINE
                    </div>
                    <div className="text-sm font-semibold text-[#0B1220]">
                      Real-Time Neural Processing
                    </div>
                  </div>
                </div>

                {/* Floating Card 1: AI Agents (Top Left) */}
                <div className="absolute top-6 left-4 sm:-left-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-bounce-slow">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#D9005B] to-[#F04A8A] flex items-center justify-center text-white shadow-md">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B1220]">AI Agents</p>
                    <p className="text-[10px] text-[#475569]">Autonomous Workflow</p>
                  </div>
                </div>

                {/* Floating Card 2: Machine Learning (Top Right) */}
                <div className="absolute top-12 right-4 sm:-right-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-float-delayed">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#8B5CF6] to-[#A855F7] flex items-center justify-center text-white shadow-md">
                    <LineChart className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B1220]">Machine Learning</p>
                    <p className="text-[10px] text-[#475569]">Predictive Models</p>
                  </div>
                </div>

                {/* Floating Card 3: Data Engineering (Bottom Left) */}
                <div className="absolute bottom-10 left-4 sm:-left-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-float">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00AEEF] to-[#38BDF8] flex items-center justify-center text-white shadow-md">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B1220]">Data Engineering</p>
                    <p className="text-[10px] text-[#475569]">Scalable Pipelines</p>
                  </div>
                </div>

                {/* Floating Card 4: LLM Integration (Bottom Right) */}
                <div className="absolute bottom-6 right-4 sm:-right-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-bounce-slow">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#D9005B] via-[#8B5CF6] to-[#00AEEF] flex items-center justify-center text-white shadow-md">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B1220]">LLM Integration</p>
                    <p className="text-[10px] text-[#475569]">Private Enterprise RAG</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Trusted-By Logo Strip */}
          <div className="mt-20 pt-10 border-t border-slate-200/70">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-[#475569] mb-8">
              Trusted by innovative businesses and enterprises
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all">
              {['Acme Enterprise', 'Nexus Global', 'DataStream Corp', 'FinEdge Systems', 'Vanguard Health', 'HyperCloud'].map((brand, i) => (
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
                  500+
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mt-2">Successful Projects</p>
                <p className="text-xs text-[#475569]">Delivered on time & on target</p>
              </div>

              <div className="text-center pt-4 lg:pt-0 lg:px-4">
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent">
                  10+ Years
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mt-2">Technology Experience</p>
                <p className="text-xs text-[#475569]">Deep architecture expertise</p>
              </div>

              <div className="text-center pt-4 lg:pt-0 lg:px-4">
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#00AEEF] to-[#38BDF8] bg-clip-text text-transparent">
                  30+
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mt-2">Technology Experts</p>
                <p className="text-xs text-[#475569]">AI & Data engineering pods</p>
              </div>

              <div className="text-center pt-4 lg:pt-0 lg:px-4">
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#D9005B] via-[#8B5CF6] to-[#00AEEF] bg-clip-text text-transparent">
                  24/7
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mt-2">Global Support</p>
                <p className="text-xs text-[#475569]">SLA-backed ops & monitoring</p>
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
                AI Has Massive Potential.{' '}
                <span className="text-[#475569] font-medium">Why Do So Many Projects Fail?</span>
              </h2>
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed pt-2">
                Most enterprises recognize the transformative power of Artificial Intelligence, yet 4 out of 5 initiatives get trapped in perpetual pilot phases. Complex data silos, stringent compliance demands, talent scarcity, and security risks frequently stall deployment before real ROI can be realized.
              </p>
            </div>

            {/* Right Circular Infographic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-white border border-slate-200 p-4 shadow-xl flex flex-col items-center justify-center text-center group">
                <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-[#D9005B] border-r-[#8B5CF6] border-b-[#00AEEF] rotate-45 group-hover:rotate-90 transition-transform duration-700" />
                <div className="z-10 space-y-1 px-4">
                  <span className="text-5xl font-black bg-gradient-to-r from-[#D9005B] to-[#00AEEF] bg-clip-text text-transparent">
                    80%
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#0B1220] leading-snug">
                    AI Projects Struggle to Reach Production
                  </p>
                  <p className="text-[11px] text-[#475569]">Gartner & Enterprise Audits</p>
                </div>
              </div>
            </div>

          </div>

          {/* Five Challenge Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D9005B] to-[#F04A8A]" />
              <Database className="w-8 h-8 text-[#D9005B] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-[#0B1220] mb-2">Data Silos</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Fragmented information prevents AI from accessing reliable business intelligence.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F04A8A] to-[#8B5CF6]" />
              <ShieldCheck className="w-8 h-8 text-[#8B5CF6] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-[#0B1220] mb-2">Compliance Risks</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Strict regulations make AI implementation complex across jurisdictions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7]" />
              <Users className="w-8 h-8 text-[#A855F7] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-[#0B1220] mb-2">Talent Shortage</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Finding experienced AI and data engineers with enterprise depth is difficult.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A855F7] to-[#00AEEF]" />
              <Activity className="w-8 h-8 text-[#00AEEF] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-[#0B1220] mb-2">Pilot Trap</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Many AI projects never move beyond initial experimentation into production.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00AEEF] to-[#D9005B]" />
              <Lock className="w-8 h-8 text-[#D9005B] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-[#0B1220] mb-2">Security Concerns</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Sensitive enterprise data requires stronger protection against leakage.
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
              From AI Experimentation to Real Business Execution.
            </h2>
            <p className="text-base text-[#475569]">
              We bridge the gap between AI hype and enterprise-grade software architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 01 */}
            <div className="rounded-3xl p-8 bg-slate-50 border border-slate-200/80 hover:border-[#D9005B]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#D9005B]/30 group-hover:text-[#D9005B] transition-colors">01</span>
                  <div className="w-12 h-12 rounded-2xl bg-[#D9005B]/10 text-[#D9005B] flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0B1220]">Access the Right Talent</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Access experienced AI, data, and software engineers who understand enterprise architecture and complex business requirements.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#D9005B]">
                <span>Top 1% Senior Engineers</span>
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
                <h3 className="text-xl font-bold text-[#0B1220]">Protect Your Data</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Build secure, private, and scalable AI environments designed around your infrastructure and strict compliance requirements.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#8B5CF6]">
                <span>Zero-Trust Security Framework</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 03 */}
            <div className="rounded-3xl p-8 bg-slate-50 border border-slate-200/80 hover:border-[#00AEEF]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#00AEEF]/30 group-hover:text-[#00AEEF] transition-colors">03</span>
                  <div className="w-12 h-12 rounded-2xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center">
                    <Rocket className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0B1220]">Build Faster</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Accelerate development with proven engineering processes, reusable frameworks, and scalable cloud technology architecture.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#00AEEF]">
                <span>Rapid Sprint Delivery</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          5. SERVICES SECTION (3-Column Card Grid - REQUIRED)
          ───────────────────────────────────────────────────────── */}
      <section id="services-grid" className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200/70">
        <div className="container-xl">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
              WHAT WE BUILD
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#0B1220]">
              AI & Data Solutions Designed Around Your Business.
            </h2>
            <p className="text-base sm:text-lg text-[#475569]">
              From intelligent automation to advanced machine learning, we design and engineer solutions that solve real operational challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                num: '01',
                title: 'Custom AI Development',
                desc: 'Tailored enterprise AI models & application architectures built specifically around your workflows and proprietary logic.',
                icon: Brain,
              },
              {
                num: '02',
                title: 'Autonomous AI Agents',
                desc: 'Multi-agent workflows with tool reasoning, planning, memory, and direct API tool execution across your CRM/ERP.',
                icon: Bot,
              },
              {
                num: '03',
                title: 'AI Automation',
                desc: 'Intelligent automation pipelines replacing manual bottlenecks with RPA + AI document and data processing.',
                icon: Zap,
              },
              {
                num: '04',
                title: 'Generative AI',
                desc: 'Private internal GenAI engines for document synthesis, enterprise search, code generation, and content creation.',
                icon: Sparkles,
              },
              {
                num: '05',
                title: 'LLM Integration',
                desc: 'Safely connect foundation models (GPT-4o, Claude, Llama) to your private data using vector databases and RAG.',
                icon: LinkIcon,
              },
              {
                num: '06',
                title: 'Machine Learning',
                desc: 'Predictive analytics, continuous MLOps pipelines, demand forecasting, and real-time anomaly detection engines.',
                icon: LineChart,
              },
              {
                num: '07',
                title: 'Computer Vision',
                desc: 'Edge and cloud visual intelligence capable of object detection, automated defect checking, and spatial mapping.',
                icon: Eye,
              },
              {
                num: '08',
                title: 'Natural Language Processing',
                desc: 'Text-analysis engines, sentiment classifiers, intent extraction models, and voice AI built for enterprise scale.',
                icon: MessageSquare,
              },
              {
                num: '09',
                title: 'AI Strategy & Consulting',
                desc: 'Strategic advisory to identify highest-ROI use cases, audit data readiness, assess feasibility, and map deployment.',
                icon: Target,
              },
            ].map((srv, idx) => {
              const IconComp = srv.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
                >
                  {/* Subtle top hover gradient line */}
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
                    <span>Learn More</span>
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

          {/* Detail 1: Autonomous AI Agents */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                FEATURED SOLUTION
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
                Autonomous AI Agents
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                Create intelligent systems that can reason, plan, and perform complex multi-step tasks across your business workflows automatically.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Automate repetitive operational workflows',
                  'Connect seamlessly with existing enterprise CRMs & ERPs',
                  'Reduce manual human effort by up to 70%',
                  'Improve decision-making speed & accuracy',
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
                  Talk to an AI Expert
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 shadow-xl space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <Bot className="w-6 h-6 text-[#D9005B]" />
                    <span className="font-bold text-[#0B1220]">Agentic Workflow Execution</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#D9005B]/10 text-[#D9005B] font-semibold">Active Engine</span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                    <Cpu className="w-5 h-5 text-[#8B5CF6] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#0B1220]">Step 1: Multi-Step Reasoning</p>
                      <p className="text-xs text-[#475569]">Analyzes incoming customer request & queries internal memory vector store.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                    <Workflow className="w-5 h-5 text-[#00AEEF] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#0B1220]">Step 2: Tool Integration & Sync</p>
                      <p className="text-xs text-[#475569]">Executes API calls across Salesforce CRM and SAP inventory database.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D9005B] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#0B1220]">Step 3: Automated Resolution</p>
                      <p className="text-xs text-[#475569]">Sends verified output to stakeholder with full audit log retention.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Detail 2: Enterprise LLM Integration & RAG (Reversed Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00AEEF]">
                DATA SOVEREIGNTY
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
                Private LLM & RAG Integration
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                Connect leading foundation models securely to your private enterprise databases without risk of public model data training or leaks.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Zero data retention with private Azure OpenAI & AWS Bedrock instances',
                  'High-performance sub-second semantic retrieval using Pinecone & Qdrant',
                  'Eliminate AI hallucinations with grounded enterprise context',
                  'Strict role-based access control (RBAC) per department',
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
                  Explore RAG Architecture
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1">
              <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <Lock className="w-6 h-6 text-[#00AEEF]" />
                    <span className="font-bold text-[#0B1220]">Enterprise RAG Pipeline</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#00AEEF]/10 text-[#00AEEF] font-semibold">Protected Environment</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center space-y-2">
                    <Database className="w-6 h-6 text-[#00AEEF] mx-auto" />
                    <p className="text-xs font-bold text-[#0B1220]">Private Vector DB</p>
                    <p className="text-[10px] text-[#475569]">Pinecone / Qdrant</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center space-y-2">
                    <ShieldCheck className="w-6 h-6 text-[#8B5CF6] mx-auto" />
                    <p className="text-xs font-bold text-[#0B1220]">Zero Leakage Guard</p>
                    <p className="text-[10px] text-[#475569]">Encrypted Endpoint</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
                  <p className="text-xs font-semibold text-[#0B1220]">Proprietary Data Vault → Semantic Embeddings → Verified LLM Context</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          7. AI WORKFLOW VISUALIZATION (Horizontal Interactive Workflow)
          ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200/70 relative">
        <div className="container-xl">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
              END-TO-END ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
              From Data to Intelligent Action.
            </h2>
            <p className="text-base text-[#475569]">
              How ABL Tech transforms raw enterprise inputs into automated business results.
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
              Real Technology. Real Business Impact.
            </h2>
            <p className="text-base text-[#475569]">
              Explore how our AI & Data Engineering solutions deliver measurable ROI for enterprise clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Case Study 01 */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200/90 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
              <div className="p-8 sm:p-10 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#D9005B]/10 text-[#D9005B]">
                  AI & Computer Vision
                </span>
                <h3 className="text-2xl font-bold text-[#0B1220]">
                  Smart Identity Verification Platform
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Engineered a real-time computer vision and document intelligence engine for a global financial platform, automating biometric verification and KYC checks.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/80">
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#D9005B]">85%</p>
                    <p className="text-xs text-[#475569]">Faster Verification</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#8B5CF6]">High</p>
                    <p className="text-xs text-[#475569]">Security Level</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#00AEEF]">Scalable</p>
                    <p className="text-xs text-[#475569]">Architecture</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#0B1220]">Financial Technology Sector</span>
                <a href="#contact-form" className="inline-flex items-center gap-2 text-xs font-bold text-[#D9005B] group-hover:translate-x-1 transition-transform">
                  View Case Study →
                </a>
              </div>
            </div>

            {/* Case Study 02 */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200/90 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
              <div className="p-8 sm:p-10 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#00AEEF]/10 text-[#00AEEF]">
                  Enterprise Automation
                </span>
                <h3 className="text-2xl font-bold text-[#0B1220]">
                  Intelligent AI Workflow Automation
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Deployed autonomous agentic workflows parsing complex unstructured enterprise invoices and customer logistics requests with automatic SAP integration.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/80">
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#00AEEF]">60%</p>
                    <p className="text-xs text-[#475569]">Faster Processing</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#8B5CF6]">40%</p>
                    <p className="text-xs text-[#475569]">Lower Manual Work</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#D9005B]">24/7</p>
                    <p className="text-xs text-[#475569]">Automation</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#0B1220]">Logistics & Supply Chain</span>
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
              Technology Built for Performance and Scale.
            </h2>
            <p className="text-base text-[#475569]">
              We utilize battle-tested open source frameworks, leading AI foundation models, and cloud infrastructure.
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {[
              { id: 'models', label: 'AI Models' },
              { id: 'frameworks', label: 'Frameworks' },
              { id: 'infra', label: 'Data & Infrastructure' },
              { id: 'platforms', label: 'Data Platforms' },
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
                Engineering Teams That Think Beyond Code.
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                ABL Tech is not just a software vendor. We act as your strategic co-engineering partner, aligning deep machine learning capabilities with measurable business outcomes and enterprise architecture standards.
              </p>

              <div className="pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-white bg-[#0B1220] hover:bg-[#D9005B] transition-colors shadow-md"
                >
                  Work With Us
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#D9005B]/10 text-[#D9005B] flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">Business First</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Technology aligned strictly with measurable ROI, cost savings, and operational speed.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">Enterprise Ready</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Secure, zero-leakage, scalable architectures adhering strictly to SOC2 and HIPAA standards.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center font-bold">
                  03
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">Flexible Teams</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Scale senior engineering pods dynamically up or down based on your project delivery roadmap.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#D9005B]/10 text-[#D9005B] flex items-center justify-center font-bold">
                  04
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">Long-Term Partnership</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Continuous advisory and support from initial strategy to deployment, MLOps, and scaling.
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
              A Clear Path From Idea to Production.
            </h2>
            <p className="text-base text-[#475569]">
              Our proven engineering delivery framework minimizes risk and accelerates time-to-market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">

            {[
              { num: '01', title: 'Discover', desc: 'Understand your business, infrastructure, data quality, and ROI targets.' },
              { num: '02', title: 'Strategize', desc: 'Identify highest-value opportunities and map solution architecture.' },
              { num: '03', title: 'Design', desc: 'Create technical roadmap, security protocol, and system blueprint.' },
              { num: '04', title: 'Build', desc: 'Develop, train models, integrate tools in 2-week agile sprints.' },
              { num: '05', title: 'Scale', desc: 'Deploy to production with continuous monitoring and MLOps optimization.' },
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
              Everything you need to know about partnering with ABL Tech for AI & Data Engineering.
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
                    LET'S BUILD SOMETHING INTELLIGENT
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-bold text-[#0B1220] leading-tight">
                    Ready to Turn Your Data Into Business Growth?
                  </h2>
                  <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
                    Speak with our technology experts and discover how AI, automation, and data engineering can solve your biggest business challenges.
                  </p>
                </div>

                {/* Trust Points */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-5 h-5 text-[#D9005B]" />
                    <span>Free initial consultation & feasibility audit</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-5 h-5 text-[#8B5CF6]" />
                    <span>Expert technical guidance from senior AI architects</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-5 h-5 text-[#00AEEF]" />
                    <span>Clear project roadmap with transparent pricing</span>
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
                        Our team will contact you shortly to schedule your free AI & Data consultation.
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
                            <option value="AI Development">AI Development</option>
                            <option value="AI Agents">AI Agents</option>
                            <option value="Data Engineering">Data Engineering</option>
                            <option value="Machine Learning">Machine Learning</option>
                            <option value="Automation">Automation</option>
                            <option value="LLM Integration">LLM Integration</option>
                            <option value="Consulting">Consulting</option>
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
                          placeholder="Tell us about your business goals, target timeline, and specific AI/Data requirements..."
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
