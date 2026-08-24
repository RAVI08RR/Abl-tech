'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  LineChart,
  Database,
  PieChart,
  TrendingUp,
  Workflow,
  ShieldCheck,
  Rocket,
  Users,
  Check,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Lock,
  AlertCircle,
  CheckCircle2,
  ChevronLeft,
  Sparkles,
  Search,
  Activity,
  Layers,
  FileSpreadsheet,
  Brain,
  Sliders
} from 'lucide-react'

export function DataAnalyticsClient() {
  // 1. Interactive Tech Stack Active Tab
  const [activeTechTab, setActiveTechTab] = useState<'warehouse' | 'bi' | 'bigdata' | 'governance'>('warehouse')

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
    service: 'Data & Analytics',
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
      quote: "“ABL Tech unified three conflicting revenue reporting databases into a single Snowflake data warehouse. Our executive team now has real-time clarity on financial metrics.”",
      name: "Arthur Pendelton",
      role: "Chief Financial Officer",
      company: "Vanguard Global Commerce",
      avatar: "AP",
    },
    {
      quote: "“The real-time Power BI and custom executive dashboards constructed by ABL Tech saved our analyst team over 1,500 hours of manual Excel reporting annually.”",
      name: "Katelyn Ross",
      role: "VP of Enterprise Analytics",
      company: "HealthCare Systems Inc.",
      avatar: "KR",
    },
    {
      quote: "“Their predictive data modeling allows us to forecast supply chain bottlenecks 3 weeks in advance with 96% accuracy—slashing inventory carrying costs significantly.”",
      name: "Derrick Miller",
      role: "Head of Supply Chain Data",
      company: "Logistics Premier",
      avatar: "DM",
    },
  ]

  const workflowStages = [
    {
      number: '01',
      title: 'Data Audit & Sources',
      subtitle: 'Ingest & Discover',
      description: 'Auditing disparate data silos, legacy databases, SaaS APIs, and unstructured enterprise files.',
      icon: Database,
      items: ['SQL/NoSQL Ingestion', 'SaaS API Connectors', 'Unstructured File Ingest'],
    },
    {
      number: '02',
      title: 'ETL & Warehouse Build',
      subtitle: 'Transform & Store',
      description: 'Building automated real-time ETL/ELT pipelines routing data into centralized Snowflake/Redshift warehouses.',
      icon: Workflow,
      items: ['Snowflake / BigQuery', 'ETL Data Pipelines', 'Data Cleansing & Deduplication'],
    },
    {
      number: '03',
      title: 'Semantic Layer & BI',
      subtitle: 'Model & Structure',
      description: 'Constructing intuitive semantic layers so business teams explore data naturally without writing SQL queries.',
      icon: Layers,
      items: ['Semantic Data Modeling', 'Role-Based Data Access', 'Power BI / Tableau Sync'],
    },
    {
      number: '04',
      title: 'Predictive Analytics',
      subtitle: 'Forecast & Detect',
      description: 'Building machine learning models to forecast demand, detect anomalies, and predict customer churn in real time.',
      icon: Brain,
      items: ['ML Forecasting', 'Anomaly Detection', 'Churn Risk Modeling'],
    },
    {
      number: '05',
      title: 'Executive Dashboards',
      subtitle: 'Visualize & Action',
      description: 'Designing role-based executive dashboards with sub-second query rendering and automated scheduled reporting.',
      icon: LineChart,
      items: ['Sub-Second Dashboards', 'Automated Scheduled Reports', 'Real-Time Alert Triggers'],
    },
  ]

  const techStack = {
    warehouse: [
      { name: 'Snowflake', label: 'Elastic Multi-Cluster Cloud Data Warehouse', badge: 'Cloud Leader' },
      { name: 'Amazon Redshift', label: 'High-Performance Petabyte-Scale Data Warehousing', badge: 'AWS Stack' },
      { name: 'Google BigQuery', label: 'Serverless Real-Time Analytics & Big Data Storage', badge: 'Google Cloud' },
      { name: 'Databricks Lakehouse', label: 'Unified Data Lakehouse & Apache Spark Platform', badge: 'Lakehouse' },
    ],
    bi: [
      { name: 'Microsoft Power BI', label: 'Enterprise Business Intelligence & Reporting', badge: 'BI Leader' },
      { name: 'Tableau Software', label: 'Interactive Visual Analytics & Executive Dashboards', badge: 'Visualization' },
      { name: 'Custom React Dashboards', label: 'Bespoke Sub-Second Data Apps with Recharts', badge: 'Custom UI' },
      { name: 'Looker', label: 'Google Cloud Unified Semantic Governance Model', badge: 'Semantic Governance' },
    ],
    bigdata: [
      { name: 'Apache Spark', label: 'Distributed In-Memory Big Data Processing', badge: 'Big Data Core' },
      { name: 'dbt (Data Build Tool)', label: 'SQL Software Engineering Transformation Workflows', badge: 'ELT Pipeline' },
      { name: 'Apache Airflow', label: 'Programmatic Workflow Orchestration & Scheduling', badge: 'Orchestration' },
      { name: 'Apache Kafka', label: 'Real-Time Event Streaming & Telemetry Pipelines', badge: 'Event Streaming' },
    ],
    governance: [
      { name: 'Data Lineage & Governance', label: 'End-to-End Column-Level Audit Tracking', badge: 'Governance' },
      { name: 'Role-Based Access (RBAC)', label: 'Strict Security Masking for PII & Financial Data', badge: 'Security' },
      { name: 'HIPAA & SOC2 Vault', label: 'Encrypted Data Storage aligned with Compliance', badge: 'Compliance' },
      { name: 'Automated Data Quality', label: 'Great Expectations Automated Validation Checks', badge: 'Quality Assurance' },
    ],
  }

  const faqs = [
    {
      question: 'What is the difference between a Data Lake and a Data Warehouse?',
      answer: 'A Data Lake stores raw, unstructured data (PDFs, IoT logs, raw JSON)—providing maximum storage flexibility. A Data Warehouse stores processed, structured data optimized for high-speed business intelligence queries. We typically architect a hybrid Lakehouse model combining both.',
    },
    {
      question: 'Can you analyze unstructured enterprise data like PDFs, emails, and images?',
      answer: 'Yes. We build modern data pipelines using vector embeddings, OCR document intelligence, and Natural Language Processing (NLP) to extract structured metrics from your unstructured enterprise files.',
    },
    {
      question: 'How do you ensure sensitive business data remains secure during analytics?',
      answer: 'We enforce strict Role-Based Access Control (RBAC), data masking for sensitive PII, AES-256 encryption at rest, and TLS 1.3 encryption in transit—ensuring 100% compliance with SOC2 Type II, HIPAA, and GDPR standards.',
    },
    {
      question: 'How long does it take to implement a centralized Data Warehouse and BI dashboard?',
      answer: 'We deliver an initial functional data pipeline and executive dashboard within 4 to 6 weeks. From there, we systematically connect additional data sources in 2-week agile sprints.',
    },
    {
      question: 'Can your team replace our manual Excel reporting workflows?',
      answer: 'Yes. We engineer automated reporting pipelines that pull live data, format it into your exact executive templates, and distribute reports automatically on a set schedule—eliminating manual copy-paste errors forever.',
    },
    {
      question: 'Do you provide ongoing DataOps maintenance and pipeline support?',
      answer: 'Yes. We provide SLA-backed DataOps support, continuous data quality monitoring, pipeline health checks, and automated alert triggers to catch anomalies before they impact executive dashboards.',
    },
  ]

  return (
    <main id="main-content" className="bg-[#FFFFFF] text-[#0B1220] selection:bg-[#D9005B] selection:text-white">

      {/* ─────────────────────────────────────────────────────────
          1. HERO SECTION (Light Premium Backdrop with Data Analytics Visual)
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
                  DATA & ANALYTICS SOLUTIONS
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B1220] leading-[1.12]">
                Stop Drowning in Data.{' '}
                <span className="bg-gradient-to-r from-[#D9005B] via-[#F04A8A] via-[#8B5CF6] to-[#00AEEF] bg-clip-text text-transparent">
                  Start Driving Revenue.
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-[#475569] max-w-2xl leading-relaxed font-normal">
                Having terabytes of data means nothing if you cannot extract immediate, actionable truth. We architect high-speed data pipelines, implement powerful BI platforms, and build custom dashboards that turn raw data into measurable ROI.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#D9005B] via-[#F04A8A] to-[#00AEEF] hover:opacity-95 transition-all shadow-lg shadow-[#D9005B]/20 hover:shadow-xl hover:shadow-[#D9005B]/30 hover:-translate-y-0.5"
                >
                  Book a Free Data Audit
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#services-grid"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-semibold text-[#0B1220] bg-white border border-slate-200 shadow-sm hover:border-[#D9005B]/40 hover:bg-slate-50/80 transition-all hover:-translate-y-0.5"
                >
                  Explore Data Engineering
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm font-medium text-[#475569] border-t border-slate-200/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9005B]" />
                  <span>Single Source of Truth</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" />
                  <span>Sub-Second BI Queries</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF]" />
                  <span>Automated Reporting</span>
                </div>
              </div>

            </div>

            {/* HERO RIGHT SIDE — 3D Visual & Floating Cards */}
            <div className="lg:col-span-5 relative flex justify-center items-center">

              {/* Main Visual Glass Container */}
              <div className="relative w-full max-w-lg aspect-square rounded-3xl bg-gradient-to-br from-white/90 via-slate-50/80 to-white/90 border border-slate-200 shadow-2xl p-6 backdrop-blur-xl flex flex-col justify-between overflow-hidden group">

                {/* Glowing Canvas backdrop */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,0,91,0.08)_0%,rgba(0,174,239,0.08)_50%,transparent_100%)] pointer-events-none" />

                {/* Central Data Core Component */}
                <div className="relative z-10 my-auto flex flex-col items-center justify-center space-y-6">

                  {/* Outer Pulsing Glowing Ring */}
                  <div className="relative w-36 h-36 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#D9005B]/20 via-[#8B5CF6]/20 to-[#00AEEF]/20 p-1 animate-spin-slow">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center border border-slate-200/80 shadow-inner">
                      <LineChart className="w-16 h-16 text-[#D9005B] animate-pulse" />
                    </div>
                    <span className="absolute -top-1 left-1/2 w-4 h-4 rounded-full bg-[#D9005B] shadow-lg shadow-[#D9005B]" />
                    <span className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-[#00AEEF] shadow-lg shadow-[#00AEEF]" />
                    <span className="absolute bottom-2 left-2 w-3.5 h-3.5 rounded-full bg-[#8B5CF6] shadow-lg shadow-[#8B5CF6]" />
                  </div>

                  <div className="text-center space-y-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                      ABL DATA ENGINE
                    </div>
                    <div className="text-sm font-semibold text-[#0B1220]">
                      Snowflake, Power BI & Predictive Analytics
                    </div>
                  </div>
                </div>

                {/* Floating Card 1: Data Engineering */}
                <div className="absolute top-6 left-4 sm:-left-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-bounce-slow">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#D9005B] to-[#F04A8A] flex items-center justify-center text-white shadow-md">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B1220]">Data Engineering</p>
                    <p className="text-[10px] text-[#475569]">ETL & Data Warehousing</p>
                  </div>
                </div>

                {/* Floating Card 2: BI Dashboards */}
                <div className="absolute top-12 right-4 sm:-right-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-float-delayed">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#8B5CF6] to-[#A855F7] flex items-center justify-center text-white shadow-md">
                    <PieChart className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B1220]">BI Platforms</p>
                    <p className="text-[10px] text-[#475569]">Power BI & Tableau</p>
                  </div>
                </div>

                {/* Floating Card 3: Predictive ML */}
                <div className="absolute bottom-10 left-4 sm:-left-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-float">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00AEEF] to-[#38BDF8] flex items-center justify-center text-white shadow-md">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B1220]">Predictive Models</p>
                    <p className="text-[10px] text-[#475569]">Forecast Demand & Churn</p>
                  </div>
                </div>

                {/* Floating Card 4: Automated Reporting */}
                <div className="absolute bottom-6 right-4 sm:-right-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-md animate-bounce-slow">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#D9005B] via-[#8B5CF6] to-[#00AEEF] flex items-center justify-center text-white shadow-md">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0B1220]">Automated Reports</p>
                    <p className="text-[10px] text-[#475569]">Eliminate Manual Excel</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Trusted-By Logo Strip */}
          <div className="mt-20 pt-10 border-t border-slate-200/70">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-[#475569] mb-8">
              Trusted by data-driven enterprises & global brands
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all">
              {['Snowflake Core', 'Databricks Partner', 'Power BI Hub', 'Redshift Scale', 'dbt Analytics', 'Kafka Stream'].map((brand, i) => (
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
                  1,500+
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mt-2">Analyst Hours Saved</p>
                <p className="text-xs text-[#475569]">Automated reporting pipelines</p>
              </div>

              <div className="text-center pt-4 lg:pt-0 lg:px-4">
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent">
                  96%
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mt-2">Predictive Accuracy</p>
                <p className="text-xs text-[#475569]">Demand & churn forecasting</p>
              </div>

              <div className="text-center pt-4 lg:pt-0 lg:px-4">
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#00AEEF] to-[#38BDF8] bg-clip-text text-transparent">
                  &lt;500ms
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mt-2">Dashboard Query Latency</p>
                <p className="text-xs text-[#475569]">Sub-second Snowflake rendering</p>
              </div>

              <div className="text-center pt-4 lg:pt-0 lg:px-4">
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#D9005B] via-[#8B5CF6] to-[#00AEEF] bg-clip-text text-transparent">
                  100%
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mt-2">Single Source of Truth</p>
                <p className="text-xs text-[#475569]">Zero conflicting database reports</p>
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
                Enterprise Data Is Fragmented.{' '}
                <span className="text-[#475569] font-medium">Why Are Executives Decisions Blind?</span>
              </h2>
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed pt-2">
                Most companies collect millions of data points across CRM, ERP, finance, and web analytics tools, yet executives receive conflicting monthly reports. Manual copy-pasting between spreadsheets causes costly delay and human error.
              </p>
            </div>

            {/* Right Circular Infographic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-white border border-slate-200 p-4 shadow-xl flex flex-col items-center justify-center text-center group">
                <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-[#D9005B] border-r-[#8B5CF6] border-b-[#00AEEF] rotate-45 group-hover:rotate-90 transition-transform duration-700" />
                <div className="z-10 space-y-1 px-4">
                  <span className="text-5xl font-black bg-gradient-to-r from-[#D9005B] to-[#00AEEF] bg-clip-text text-transparent">
                    74%
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#0B1220] leading-snug">
                    Of Companies Want to Be Data-Driven, But Fail
                  </p>
                  <p className="text-[11px] text-[#475569]">Forrester Analytics Benchmark</p>
                </div>
              </div>
            </div>

          </div>

          {/* Five Challenge Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D9005B] to-[#F04A8A]" />
              <Database className="w-8 h-8 text-[#D9005B] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-[#0B1220] mb-2">Isolated Silos</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Sales, finance, and operations operating on conflicting data feeds.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F04A8A] to-[#8B5CF6]" />
              <FileSpreadsheet className="w-8 h-8 text-[#8B5CF6] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-[#0B1220] mb-2">Manual Excel Drag</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Analysts wasting thousands of hours copy-pasting spreadsheet data.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7]" />
              <Activity className="w-8 h-8 text-[#A855F7] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-[#0B1220] mb-2">Slow Query Speeds</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Legacy BI dashboards taking minutes to render simple executive charts.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A855F7] to-[#00AEEF]" />
              <Brain className="w-8 h-8 text-[#00AEEF] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-[#0B1220] mb-2">No Predictive Insight</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Relying only on historical data without machine learning forecasting.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00AEEF] to-[#D9005B]" />
              <Lock className="w-8 h-8 text-[#D9005B] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold text-[#0B1220] mb-2">Governance Risks</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Sensitive financial & PII data exposed without column masking.
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
              From Fragmented Spreadsheets to Real-Time BI Clarity.
            </h2>
            <p className="text-base text-[#475569]">
              We build scalable cloud data warehouses, real-time ETL pipelines, and executive dashboards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 01 */}
            <div className="rounded-3xl p-8 bg-slate-50 border border-slate-200/80 hover:border-[#D9005B]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#D9005B]/30 group-hover:text-[#D9005B] transition-colors">01</span>
                  <div className="w-12 h-12 rounded-2xl bg-[#D9005B]/10 text-[#D9005B] flex items-center justify-center">
                    <Database className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0B1220]">Single Source of Truth</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  We centralize data from CRM, ERP, and marketing platforms into Snowflake or Redshift—eliminating conflicting department numbers once and for all.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#D9005B]">
                <span>Unified Data Warehouse</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 02 */}
            <div className="rounded-3xl p-8 bg-slate-50 border border-slate-200/80 hover:border-[#8B5CF6]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#8B5CF6]/30 group-hover:text-[#8B5CF6] transition-colors">02</span>
                  <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center">
                    <PieChart className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0B1220]">Sub-Second BI Dashboards</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  We construct intuitive semantic data layers for Power BI and Tableau so executives explore real-time metrics naturally without submitting IT requests.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#8B5CF6]">
                <span>Self-Service Analytics</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 03 */}
            <div className="rounded-3xl p-8 bg-slate-50 border border-slate-200/80 hover:border-[#00AEEF]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#00AEEF]/30 group-hover:text-[#00AEEF] transition-colors">03</span>
                  <div className="w-12 h-12 rounded-2xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center">
                    <Brain className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0B1220]">Predictive ML Forecasting</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  We integrate machine learning models directly into your data pipelines to forecast demand, detect anomalies, and identify churn risks before they happen.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#00AEEF]">
                <span>Predictive Intelligence</span>
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
              Data & Analytics Solutions Built Around Your Business.
            </h2>
            <p className="text-base sm:text-lg text-[#475569]">
              From automated ETL data pipelines to predictive machine learning, we design solutions that solve real operational bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                num: '01',
                title: 'Data Engineering & Pipelines',
                desc: 'Scalable automated ETL/ELT pipelines routing clean data into centralized Snowflake, Redshift, or BigQuery warehouses.',
                icon: Database,
              },
              {
                num: '02',
                title: 'Business Intelligence (BI)',
                desc: 'Power BI, Tableau, and Looker BI implementations with intuitive semantic layers for instant self-service exploration.',
                icon: PieChart,
              },
              {
                num: '03',
                title: 'Predictive Analytics',
                desc: 'Machine learning forecasting models predicting customer churn, inventory demand, and financial trend lines.',
                icon: Brain,
              },
              {
                num: '04',
                title: 'Custom Executive Dashboards',
                desc: 'Role-based visual interfaces highlighting exact KPIs with sub-second chart rendering and automated refresh.',
                icon: LineChart,
              },
              {
                num: '05',
                title: 'Automated Reporting Engines',
                desc: 'Automated reporting engines pulling live data and distributing executive PDF reports on a set schedule.',
                icon: FileSpreadsheet,
              },
              {
                num: '06',
                title: 'Big Data & Lakehouse Architecture',
                desc: 'Apache Spark & Databricks lakehouse architectures processing petabytes of streaming unstructured data.',
                icon: Layers,
              },
              {
                num: '07',
                title: 'Real-Time Streaming Analytics',
                desc: 'Apache Kafka event pipelines delivering sub-second telemetry feeds for financial & IoT applications.',
                icon: Activity,
              },
              {
                num: '08',
                title: 'Data Governance & Lineage',
                desc: 'End-to-end data lineage tracking, automated quality validation (dbt), and column-level masking for PII.',
                icon: ShieldCheck,
              },
              {
                num: '09',
                title: 'Data Advisory & Audit',
                desc: 'Comprehensive data readiness audit, tech stack evaluation, cost optimization, and technical roadmap.',
                icon: Search,
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

          {/* Detail 1: Data Engineering & Warehouse */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                FEATURED SOLUTION
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
                Modern Data Warehousing (Snowflake & Redshift)
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                Centralize your enterprise data into an elastic, high-performance cloud data warehouse. We build automated ETL pipelines that clean, transform, and index data for sub-second querying.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Single source of truth replacing fragmented spreadsheet databases',
                  'Automated ETL/ELT pipelines using dbt, Airflow, and Spark',
                  'Sub-second query performance even under high concurrent BI usage',
                  'HIPAA & SOC2 compliant encrypted data storage with column masking',
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
                  Build Data Warehouse
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 shadow-xl space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <Database className="w-6 h-6 text-[#D9005B]" />
                    <span className="font-bold text-[#0B1220]">Snowflake Cloud Data Warehouse</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#D9005B]/10 text-[#D9005B] font-semibold">&lt;500ms Queries</span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                    <Workflow className="w-5 h-5 text-[#8B5CF6] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#0B1220]">Real-Time ETL Ingestion Pipeline</p>
                      <p className="text-xs text-[#475569]">Streams data from Salesforce, SAP, and Webhooks continuously.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                    <Layers className="w-5 h-5 text-[#00AEEF] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#0B1220]">dbt Semantic Transformation</p>
                      <p className="text-xs text-[#475569]">Cleanses data, deduplicates records, and enforces data quality checks.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                    <PieChart className="w-5 h-5 text-[#D9005B] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#0B1220]">Self-Service BI Integration</p>
                      <p className="text-xs text-[#475569]">Direct live connection to Power BI, Tableau, and custom apps.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Detail 2: Predictive Analytics (Reversed Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00AEEF]">
                PREDICTIVE INTELLIGENCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
                Predictive Analytics & Machine Learning
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                Move beyond backward-looking reports. We deploy predictive machine learning models that forecast demand trends, detect financial anomalies, and identify customer churn risks before they happen.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  '96%+ demand forecasting accuracy for inventory optimization',
                  'Automated financial anomaly detection and fraud prevention',
                  'Customer churn risk scoring integrated directly into your CRM',
                  'Continuous MLOps retrain pipelines keeping models accurate',
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
                  Explore Predictive ML
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1">
              <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <Brain className="w-6 h-6 text-[#00AEEF]" />
                    <span className="font-bold text-[#0B1220]">Predictive ML Pipeline</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#00AEEF]/10 text-[#00AEEF] font-semibold">96% Precision</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center space-y-2">
                    <TrendingUp className="w-6 h-6 text-[#00AEEF] mx-auto" />
                    <p className="text-xs font-bold text-[#0B1220]">Demand Forecasting</p>
                    <p className="text-[10px] text-[#475569]">Prevents Stockouts</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center space-y-2">
                    <ShieldCheck className="w-6 h-6 text-[#8B5CF6] mx-auto" />
                    <p className="text-xs font-bold text-[#0B1220]">Anomaly Detection</p>
                    <p className="text-[10px] text-[#475569]">Real-Time Fraud Alerts</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
                  <p className="text-xs font-semibold text-[#0B1220]">Historical Data Vault → ML Model Inference → Predictive Executive Alert</p>
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
              DATA LIFECYCLE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
              From Raw Data Ingestion to Executive Action.
            </h2>
            <p className="text-base text-[#475569]">
              How ABL Tech delivers real-time business intelligence with zero data confusion.
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
              Real Data Engineering. Real Business Impact.
            </h2>
            <p className="text-base text-[#475569]">
              Explore how our data & analytics engineering solutions deliver measurable ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Case Study 01 */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200/90 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
              <div className="p-8 sm:p-10 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#D9005B]/10 text-[#D9005B]">
                  Snowflake Data Warehouse
                </span>
                <h3 className="text-2xl font-bold text-[#0B1220]">
                  Global Commerce Data Unification
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Unified three conflicting legacy revenue databases into Snowflake—saving 1,500+ analyst hours annually and providing real-time executive dashboard clarity.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/80">
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#D9005B]">1,500 Hrs</p>
                    <p className="text-xs text-[#475569]">Analyst Time Saved</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#8B5CF6]">100%</p>
                    <p className="text-xs text-[#475569]">Data Accuracy</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#00AEEF]">&lt;500ms</p>
                    <p className="text-xs text-[#475569]">Dashboard Latency</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#0B1220]">E-Commerce Global Sector</span>
                <a href="#contact-form" className="inline-flex items-center gap-2 text-xs font-bold text-[#D9005B] group-hover:translate-x-1 transition-transform">
                  View Case Study →
                </a>
              </div>
            </div>

            {/* Case Study 02 */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200/90 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
              <div className="p-8 sm:p-10 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#00AEEF]/10 text-[#00AEEF]">
                  Predictive Supply Chain
                </span>
                <h3 className="text-2xl font-bold text-[#0B1220]">
                  Predictive Demand Forecasting Engine
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Deployed machine learning demand forecasting pipelines predicting stock shortages 3 weeks in advance with 96% accuracy across 12 distribution centers.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/80">
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#00AEEF]">96%</p>
                    <p className="text-xs text-[#475569]">Forecast Precision</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#8B5CF6]">3 Wks</p>
                    <p className="text-xs text-[#475569]">Early Warning</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#D9005B]">28%</p>
                    <p className="text-xs text-[#475569]">Lower Holding Cost</p>
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
              We utilize certified cloud data warehouses, BI engines, and automated ETL tooling.
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {[
              { id: 'warehouse', label: 'Data Warehouses' },
              { id: 'bi', label: 'BI & Visualization' },
              { id: 'bigdata', label: 'Big Data & ETL' },
              { id: 'governance', label: 'Data Governance' },
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
                Data Engineers Who Understand Business Truth.
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                ABL Tech goes beyond installing database software. We construct end-to-end data architectures that turn fragmented enterprise metrics into real-time executive decision clarity.
              </p>

              <div className="pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-white bg-[#0B1220] hover:bg-[#D9005B] transition-colors shadow-md"
                >
                  Schedule Data Call
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#D9005B]/10 text-[#D9005B] flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">Single Truth</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Eliminating conflicting spreadsheet numbers with a unified cloud data warehouse.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">Sub-Second Speed</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Optimized Snowflake and Power BI query architectures for instant rendering.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center font-bold">
                  03
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">Automated Reports</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Save thousands of analyst hours with scheduled, automated executive PDF reports.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:bg-white hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#D9005B]/10 text-[#D9005B] flex items-center justify-center font-bold">
                  04
                </div>
                <h3 className="text-lg font-bold text-[#0B1220]">Data Governance</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Strict SOC2 & HIPAA column-level masking and RBAC data access policies.
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
              A Clear Path From Data Silos to Real-Time BI.
            </h2>
            <p className="text-base text-[#475569]">
              Our proven data engineering framework delivers accuracy and speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">

            {[
              { num: '01', title: 'Audit', desc: 'Audit data sources, schema bottlenecks, and executive KPI requirements.' },
              { num: '02', title: 'Architecture', desc: 'Design Snowflake/BigQuery data warehouse and dbt ETL transformation rules.' },
              { num: '03', title: 'Pipeline', desc: 'Build automated real-time ingestion pipelines with dbt data quality checks.' },
              { num: '04', title: 'BI & Modeling', desc: 'Create semantic layers, Power BI dashboards, and predictive ML models.' },
              { num: '05', title: 'DataOps & Support', desc: 'Deploy automated data quality alerts, daily backups, and ongoing pipeline support.' },
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
              Everything you need to know about partnering with ABL Tech for Data & Analytics.
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
                    LET'S BUILD A SINGLE TRUTH
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-bold text-[#0B1220] leading-tight">
                    Ready to Turn Your Data Into Revenue Growth?
                  </h2>
                  <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
                    Speak with our senior data engineers to audit your existing data sources, eliminate manual reporting drag, and blueprint a Snowflake data warehouse.
                  </p>
                </div>

                {/* Trust Points */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-5 h-5 text-[#D9005B]" />
                    <span>Free enterprise data readiness & ETL audit</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-5 h-5 text-[#8B5CF6]" />
                    <span>Sub-second Snowflake & Power BI query architecture</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1220]">
                    <CheckCircle2 className="w-5 h-5 text-[#00AEEF]" />
                    <span>100% full IP & source pipeline ownership transfer</span>
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
                        Our data engineering team will contact you shortly to schedule your consultation.
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
                            <option value="Data Engineering">Data Engineering & Pipelines</option>
                            <option value="Snowflake Warehouse">Cloud Data Warehousing (Snowflake/BigQuery)</option>
                            <option value="Business Intelligence">Power BI & Tableau BI</option>
                            <option value="Predictive Analytics">Predictive ML Forecasting</option>
                            <option value="Automated Reporting">Automated Scheduled Reporting</option>
                            <option value="Big Data Lakehouse">Big Data & Lakehouse Architecture</option>
                            <option value="Consulting">Data Readiness Audit</option>
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
                          placeholder="Tell us about your data sources, current BI tools, and analytics goals..."
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
