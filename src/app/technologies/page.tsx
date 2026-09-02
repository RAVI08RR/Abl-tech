'use client'

import { useState } from 'react'
import Link from 'next/link'
import Icon from '@mdi/react'
import {
  mdiReact,
  mdiNodejs,
  mdiAws,
  mdiMicrosoftAzure,
  mdiDocker,
  mdiKubernetes,
  mdiTailwind,
  mdiWordpress,
  mdiSlack,
  mdiHubspot,
} from '@mdi/js'
import {
  Code2,
  Cpu,
  Layers,
  Cloud,
  Database,
  ShieldCheck,
  Zap,
  Sparkles,
  Server,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  RefreshCw,
  Lock,
  Globe,
  GitBranch,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

/* ── Modern Tool Marquee Rows ────────────────────────────────── */
const marqueeRow1 = [
  { name: 'React', path: mdiReact, label: 'Frontend UI' },
  { name: 'Node.js', path: mdiNodejs, label: 'Runtime' },
  { name: 'AWS Cloud', path: mdiAws, label: 'Cloud Infrastructure' },
  { name: 'Microsoft Azure', path: mdiMicrosoftAzure, label: 'Enterprise Cloud' },
  { name: 'Tailwind CSS', path: mdiTailwind, label: 'UI Styling' },
  { name: 'Slack API', path: mdiSlack, label: 'Integrations' },
]

const marqueeRow2 = [
  { name: 'Docker', path: mdiDocker, label: 'Containers' },
  { name: 'Kubernetes', path: mdiKubernetes, label: 'Orchestration' },
  { name: 'HubSpot', path: mdiHubspot, label: 'CRM Ecosystem' },
  { name: 'WordPress Core', path: mdiWordpress, label: 'CMS Engine' },
  { name: 'AWS EKS', path: mdiAws, label: 'Cloud Clusters' },
  { name: 'React Native', path: mdiReact, label: 'Cross-Platform Mobile' },
]

/* ── Tech Stack Directory by Domain ──────────────────────────── */
interface TechStackItem {
  id: string
  name: string
  subtitle: string
  category: string
  description: string
  icon: any
  badge: string
  highlights: string[]
  benchmark: string
}

const TECH_STACK_ITEMS: TechStackItem[] = [
  {
    id: 'nextjs-react',
    name: 'Next.js & React Framework',
    subtitle: 'High-Performance SSR, SSG & Headless Frontends',
    category: 'Frontend & Web',
    description: 'Sub-second page loads, React Server Components (RSC), edge routing, and enterprise-grade SEO architecture delivering exceptional Core Web Vitals.',
    icon: Code2,
    badge: 'Frontend Core',
    highlights: ['React 19 & Next.js App Router', 'TypeScript Strict Mode', 'Tailwind CSS Modern Styling', 'Edge API Route Rendering'],
    benchmark: 'Sub-second TTFB & 98+ Lighthouse',
  },
  {
    id: 'nodejs-typescript',
    name: 'Node.js & TypeScript Microservices',
    subtitle: 'High-Throughput Distributed Backend Systems',
    category: 'Backend & APIs',
    description: 'Asynchronous, event-driven backends engineered for enterprise REST APIs, GraphQL endpoints, and real-time WebSocket communication under heavy concurrent loads.',
    icon: Server,
    badge: 'Backend Core',
    highlights: ['Fastify & Express Architectures', 'NestJS Modular Pattern', 'GraphQL & RESTful Contracts', 'gRPC High-Speed RPCs'],
    benchmark: '100K+ Concurrent Requests',
  },
  {
    id: 'python-fastapi',
    name: 'Python & FastAPI Services',
    subtitle: 'AI, Machine Learning & Analytics Pipelines',
    category: 'AI & Data Engineering',
    description: 'Asynchronous Python microservices powering custom LLM workflows, predictive analytics, computer vision pipelines, and automated background workers.',
    icon: Cpu,
    badge: 'AI & Data',
    highlights: ['FastAPI Asynchronous Handlers', 'PyTorch & TensorFlow Pipelines', 'OpenAI & Claude LLM Connectors', 'Celery & Redis Task Queues'],
    benchmark: 'Low-latency Tensor Inference',
  },
  {
    id: 'cloud-devops',
    name: 'AWS & Azure Cloud Orchestration',
    subtitle: 'Multi-Region Elastic Infrastructure & GitOps',
    category: 'Cloud & DevOps',
    description: 'Containerized Kubernetes clusters with automated horizontal pod autoscaling, zero-downtime blue/green rollouts, and infrastructure-as-code with Terraform.',
    icon: Cloud,
    badge: 'Cloud Native',
    highlights: ['Kubernetes (EKS & AKS)', 'Docker Containers', 'Terraform (IaC)', 'Automated CI/CD with GitHub Actions'],
    benchmark: '99.99% Availability SLA',
  },
  {
    id: 'mobile-cross-platform',
    name: 'React Native & Flutter Mobile Apps',
    subtitle: 'Native Performance for iOS & Android',
    category: 'Mobile & Cross-Platform',
    description: 'Single-codebase mobile platforms featuring native device hardware integrations, biometric security, offline synchronization, and seamless OTA updates.',
    icon: Smartphone,
    badge: 'Mobile Core',
    highlights: ['React Native & Expo Ecosystem', 'Flutter & Dart Framework', 'Native iOS & Android Bridges', 'Offline SQLite Local Sync'],
    benchmark: '60 FPS Native Performance',
  },
  {
    id: 'databases-storage',
    name: 'Enterprise Databases & Caching',
    subtitle: 'Distributed, ACID-Compliant Storage Engines',
    category: 'Databases & Storage',
    description: 'Fault-tolerant relational and NoSQL storage engineered with connection pooling, read replicas, automated snapshots, and sub-millisecond in-memory caching.',
    icon: Database,
    badge: 'Data Layer',
    highlights: ['PostgreSQL & Connection Pooling', 'MongoDB Document Storage', 'Redis In-Memory Cache', 'Supabase & Elasticsearch Engine'],
    benchmark: 'Sub-millisecond Cache Latency',
  },
  {
    id: 'event-streaming',
    name: 'Event-Driven Streaming & Brokers',
    subtitle: 'Real-Time Message Queues & Telemetry',
    category: 'Backend & APIs',
    description: 'Decoupled event architectures built with high-throughput message brokers for real-time telemetry, transaction auditing, and asynchronous workflow execution.',
    icon: Zap,
    badge: 'Event Architecture',
    highlights: ['Apache Kafka Event Streams', 'RabbitMQ Message Queues', 'Redis Pub/Sub Pipelines', 'Event-Sourced State Models'],
    benchmark: 'Zero Message Loss Delivery',
  },
  {
    id: 'ai-agents-rag',
    name: 'AI Agents & Vector Intelligence',
    subtitle: 'Generative AI, Embeddings & Semantic Search',
    category: 'AI & Data Engineering',
    description: 'Enterprise Retrieval-Augmented Generation (RAG) with vector databases, custom prompt orchestrations, and autonomous multi-agent tool execution.',
    icon: Sparkles,
    badge: 'GenAI & RAG',
    highlights: ['pgvector & Vector Databases', 'LangChain & LlamaIndex Pipelines', 'Private Enterprise LLM Enclaves', 'Role-Based Semantic Access'],
    benchmark: 'HIPAA / SOC2 Data Isolation',
  },
  {
    id: 'devsecops-security',
    name: 'Automated DevSecOps & Security Audits',
    subtitle: 'Zero-Trust Architecture & Pipeline Governance',
    category: 'Cloud & DevOps',
    description: 'Continuous automated vulnerability scanning, secret detection, dynamic security testing, and strict RBAC governance embedded directly into every code deployment.',
    icon: ShieldCheck,
    badge: 'Security & Ops',
    highlights: ['Playwright & Jest Automated QA', 'Secret Management with Vault', 'Static & Dynamic Vulnerability Scans', 'Strict OAuth2 / OIDC Standards'],
    benchmark: 'Continuous Security Compliance',
  },
]

const CATEGORIES = [
  'All',
  'Frontend & Web',
  'Backend & APIs',
  'Cloud & DevOps',
  'AI & Data Engineering',
  'Mobile & Cross-Platform',
  'Databases & Storage',
]

export default function TechnologyPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const filteredItems = selectedCategory === 'All'
    ? TECH_STACK_ITEMS
    : TECH_STACK_ITEMS.filter(item => item.category === selectedCategory)

  return (
    <div className="bg-white min-h-screen">
      {/* Decorative top subtle gradient */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-[#F8FAFC] to-white -z-10 pointer-events-none" />

      {/* ── HERO SECTION ───────────────────────────────────────── */}
      <section className="pt-24 pb-14 lg:pt-32 lg:pb-20 overflow-hidden relative">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#05A7D4]/10 border border-[#05A7D4]/20 mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#05A7D4]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#05A7D4]">
                Enterprise Technology Stack
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1220] leading-tight tracking-tight mb-5">
              Engineered for Scale, Security & Innovation
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We leverage industry-leading frameworks, cloud-native infrastructure, and modern engineering practices to build resilient, high-performance software systems.
            </p>

            {/* Quick Metrics */}
            <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
              {[
                { value: '100+', label: 'Tech Frameworks & Libraries' },
                { value: '99.99%', label: 'Infrastructure Uptime SLA' },
                { value: 'Zero', label: 'Vendor Lock-in Architecture' },
                { value: 'Enterprise', label: 'Security & SOC2 Alignment' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-black text-[#05A7D4]">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── DUAL MARQUEE ROWS ─────────────────────────────────── */}
          <div className="mt-16 relative w-full overflow-hidden py-4 flex flex-col gap-6">
            {/* Fade overlays on edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            {/* Row 1: Scrolls Left */}
            <div className="marquee-track flex gap-5">
              {[...marqueeRow1, ...marqueeRow1, ...marqueeRow1].map((item, idx) => (
                <div
                  key={idx}
                  className="w-[140px] md:w-[220px] bg-white border border-slate-200/80 rounded-2xl py-5 px-4 flex flex-col items-center justify-center shrink-0 shadow-sm hover:border-[#05A7D4]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#05A7D4]/10 text-[#05A7D4] mb-3">
                    <Icon path={item.path} size={1.3} color="#05A7D4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 text-center leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium text-center mt-0.5">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Row 2: Scrolls Right (Reverse) */}
            <div className="marquee-track flex gap-5" style={{ animationDirection: 'reverse' }}>
              {[...marqueeRow2, ...marqueeRow2, ...marqueeRow2].map((item, idx) => (
                <div
                  key={idx}
                  className="w-[140px] md:w-[220px] bg-white border border-slate-200/80 rounded-2xl py-5 px-4 flex flex-col items-center justify-center shrink-0 shadow-sm hover:border-[#05A7D4]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#05A7D4]/10 text-[#05A7D4] mb-3">
                    <Icon path={item.path} size={1.3} color="#05A7D4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 text-center leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium text-center mt-0.5">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── CORE TECH STACK DIRECTORY ───────────────────────────── */}
      <section className="py-20 lg:py-24 relative bg-[#F8FAFC] border-t border-slate-200/70" id="tech-stack">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading
              eyebrow="Technology Ecosystem"
              title="End-to-End Engineering Stack"
              description="Explore our battle-tested technology competencies across frontend architectures, distributed backends, cloud-native DevOps, and artificial intelligence."
              align="center"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#05A7D4] text-white border-[#05A7D4] shadow-md shadow-[#05A7D4]/25'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-200/80 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tech Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const IconComp = item.icon
              return (
                <div
                  key={item.id}
                  className="group relative flex flex-col justify-between p-7 bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#05A7D4]/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#05A7D4]/10 flex items-center justify-center text-[#05A7D4] shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <IconComp className="w-6 h-6" strokeWidth={1.8} />
                      </div>
                      <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-slate-50 text-[#05A7D4] border border-[#05A7D4]/20">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#05A7D4] transition-colors leading-snug mb-1">
                      {item.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Key Highlights list */}
                    <div className="space-y-2 pt-4 border-t border-slate-100">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#05A7D4] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benchmark footer */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Benchmark</p>
                      <p className="text-xs font-bold text-[#05A7D4] mt-0.5">{item.benchmark}</p>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-xs font-bold text-[#05A7D4] hover:text-[#037C9E] transition-colors"
                      aria-label={`Consult about ${item.name}`}
                    >
                      Consult <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── ENGINEERING ARCHITECTURE PILLARS ───────────────────── */}
      <section className="py-20 bg-white border-t border-slate-100 relative">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-[#05A7D4]" />
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#05A7D4]">
                Engineering Methodology
              </span>
              <span className="h-px w-8 bg-[#05A7D4]" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Architectural Standards Built into Every Build
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We apply rigorous software engineering standards to guarantee performance, maintainability, and enterprise security from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Layers,
                title: 'Cloud-Native & Modular',
                desc: 'Containerized microservices communicating via high-speed APIs with independent autoscaling and isolated fault domains.',
              },
              {
                icon: Lock,
                title: 'Enterprise-Grade Security',
                desc: 'Zero-trust architecture, automated dependency vulnerability scans, end-to-end encryption, and strict RBAC governance.',
              },
              {
                icon: RefreshCw,
                title: 'Continuous GitOps Delivery',
                desc: 'Automated CI/CD pipelines with comprehensive unit, integration, and E2E regression suites for zero-downtime rollouts.',
              },
              {
                icon: Globe,
                title: 'Observability & Telemetry',
                desc: 'Full-stack application performance monitoring (APM), structured logging, and distributed tracing for proactive incident response.',
              },
            ].map((pillar) => {
              const PillarIcon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/70 hover:border-[#05A7D4]/40 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#05A7D4]/10 text-[#05A7D4] flex items-center justify-center mb-4">
                      <PillarIcon className="w-5 h-5" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{pillar.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── CTA BOTTOM SECTION ─────────────────────────────────── */}
      <section className="py-20 bg-[#0B1220] text-white relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#05A7D4]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#05A7D4]/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Build Your Product with Modern Engineering
            </h2>
            <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Collaborate with our software architects to identify the optimal technology stack, data architecture, and cloud infrastructure for your application.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="shadow-lg shadow-[#05A7D4]/25 px-8 py-3.5"
              >
                Start a Technical Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
