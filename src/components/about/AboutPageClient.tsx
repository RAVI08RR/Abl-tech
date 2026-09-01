'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
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
  Award,
  ChevronLeft,
} from 'lucide-react'
import { LinkedInIcon } from '@/components/ui/Icons'
import { Container } from '@/components/ui/Container'

export function AboutPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', company: '',
    service: 'Enterprise AI Software', budget: '25000-50000', details: '', agreeTerms: false,
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
      if (checked && formErrors[name]) setFormErrors(prev => { const u = { ...prev }; delete u[name]; return u })
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
      if (formErrors[name]) setFormErrors(prev => { const u = { ...prev }; delete u[name]; return u })
    }
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}
    if (!formData.firstName.trim()) errors.firstName = 'First name is required'
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required'
    if (!formData.email.trim()) errors.email = 'Business email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Please enter a valid email'
    if (!formData.phone.trim()) errors.phone = 'Phone number is required'
    if (!formData.company.trim()) errors.company = 'Company name is required'
    if (!formData.details.trim()) errors.details = 'Project details are required'
    if (!formData.agreeTerms) errors.agreeTerms = 'You must agree to the privacy policy'
    return errors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errors = validateForm()
    if (Object.keys(errors).length > 0) { setFormErrors(errors); return }
    setFormErrors({})
    setIsSubmitting(true)
    setTimeout(() => { setIsSubmitting(false); setIsSubmitted(true) }, 1200)
  }

  const milestones = [
    { year: 2005, title: 'Company Founded', desc: 'ABL BusinessTech LLP established with a focus on core software engineering and enterprise IT consulting.' },
    { year: 2012, title: 'Global Expansion', desc: 'Scaled cross-border operations, delivering enterprise systems for Fortune 500 brands including MasterCard and VISA.' },
    { year: 2018, title: 'Cloud and Microservices', desc: 'Pioneered cloud-native Kubernetes, DevOps pipelines, and high-concurrency microservices architectures.' },
    { year: 2023, title: 'AI Engineering Studio', desc: 'Launched dedicated Enterprise AI, LLM RAG pipelines, and Snowflake data warehousing practices.' },
    { year: 2026, title: 'Global Engineering Powerhouse', desc: 'Over 500+ projects delivered across 40+ industries with 95% annual client retention.' },
  ]

  const team = [
    { name: 'Ravi Prasad Kavuru', role: 'Founder & CEO', bio: 'Technology entrepreneur with 20+ years building enterprise software for global Fortune 500 businesses.', linkedin: 'https://www.linkedin.com/in/ravi-prasad-kavuru-a54126323/', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&q=80&auto=format&fit=crop&crop=face', accent: '#D9005B' },
    { name: 'Priya Sharma', role: 'Chief Technology Officer', bio: 'Principal distributed systems engineer specializing in AI vector infrastructure and scalable cloud pods.', linkedin: 'https://linkedin.com', photo: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=400&h=400&q=80&auto=format&fit=crop&crop=face', accent: '#8B5CF6' },
    { name: 'Arun Mehta', role: 'VP of Digital Strategy', bio: 'Digital transformation leader who has spearheaded 50+ enterprise legacy modernization initiatives.', linkedin: 'https://linkedin.com', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80&auto=format&fit=crop&crop=face', accent: '#00AEEF' },
    { name: 'Neha Gupta', role: 'Head of Product Design', bio: 'Award-winning UI/UX director focused on tokenized Figma systems and high-conversion product experiences.', linkedin: 'https://linkedin.com', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&q=80&auto=format&fit=crop&crop=face', accent: '#D9005B' },
    { name: 'Kiran Patel', role: 'Head of Mobile & Web', bio: 'Full-stack Next.js and React Native architect with 60+ production mobile applications shipped.', linkedin: 'https://linkedin.com', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&q=80&auto=format&fit=crop&crop=face', accent: '#00AEEF' },
    { name: 'Sunita Rao', role: 'VP of Client Success', bio: 'Enterprise relationship leader ensuring every engineering engagement delivers measurable ROI.', linkedin: 'https://linkedin.com', photo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&q=80&auto=format&fit=crop&crop=face', accent: '#8B5CF6' },
  ]

  const values = [
    { title: 'Business Outcomes First', desc: 'We measure success by your ROI, not lines of code. Every architectural choice directly serves your KPIs.', icon: Target, color: '#D9005B' },
    { title: 'Radical Transparency', desc: 'Honest timelines, clear progress reporting, zero surprises. Real-time visibility into Jira sprints and Git commits.', icon: Search, color: '#8B5CF6' },
    { title: 'Top 1% Engineering', desc: 'Non-negotiable quality. We enforce automated QA, SOC2 security scans, and clean microservice architectures.', icon: Zap, color: '#00AEEF' },
    { title: 'Co-Engineering Partnership', desc: 'We act as true co-engineering partners integrating into your daily standups and adopting your architecture instantly.', icon: Handshake, color: '#D9005B' },
  ]

  const testimonials = [
    { quote: 'ABL BusinessTech LLP has been our core engineering partner for over 5 years. Their code quality, security standards, and speed of delivery are unmatched.', name: 'Arthur Pendelton', role: 'VP of Global Technology', company: 'Enterprise Payments Corp', avatar: 'AP' },
    { quote: 'When we needed to scale our cloud infrastructure to support 10x user growth, ABL BusinessTech deployed a senior DevOps pod that executed zero-downtime migration.', name: 'Sophia Vance', role: 'Chief Technology Officer', company: 'SaaS Scale Systems', avatar: 'SV' },
  ]

  const faqs = [
    { q: 'When was ABL BusinessTech LLP founded?', a: 'ABL BusinessTech LLP was founded in 2005. Over two decades, we evolved from a specialist software consulting firm into a global AI, software engineering, and cloud transformation powerhouse.' },
    { q: 'What types of companies do you partner with?', a: 'We partner with enterprise organizations, Fortune 500 brands, mid-market leaders, and funded venture-backed scaleups across 40+ industries including Fintech, Healthcare, E-Commerce, and Manufacturing.' },
    { q: 'How do your co-engineering pods integrate with existing teams?', a: 'Our senior engineers integrate into your Slack channels, Jira boards, GitHub repositories, and daily standups functioning as a seamless extension of your internal product pod.' },
    { q: 'What security standards do you adhere to?', a: 'We strictly comply with SOC2 Type II, HIPAA, PCI-DSS Level 1, and GDPR standards, enforcing AES-256 data encryption and static vulnerability scans.' },
    { q: 'Who owns the intellectual property and source code?', a: 'You own 100% of all intellectual property, source code, data pipelines, and design assets upon project delivery with full legal assignment.' },
  ]

  const inp = 'w-full px-4 py-2.5 rounded-xl border text-sm bg-white focus:outline-none transition-all border-slate-200 focus:border-[#D9005B] focus:ring-1 focus:ring-[#D9005B]/30'
  const inpErr = 'border-red-400 ring-1 ring-red-400/30'

  return (
    <main id="main-content">

      {/* ── 1. HERO ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg,#060D1A 0%,#0A1628 50%,#0D0520 100%)' }}>
        <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: 'radial-gradient(circle,rgba(217,0,91,0.10) 0%,transparent 70%)' }} />
        <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px]" style={{ background: 'radial-gradient(circle,rgba(0,174,239,0.08) 0%,transparent 70%)' }} />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6" style={{ background: 'linear-gradient(to right,transparent,#D9005B)' }} />
                <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#D9005B]">About ABL BusinessTech - Est. 2005</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                Engineering Technology That{' '}
                <span style={{ background: 'linear-gradient(135deg,#D9005B,#F04A8A,#8B5CF6,#00AEEF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Moves Enterprise Business.
                </span>
              </h1>

              <p className="text-sm text-gray-400 leading-relaxed max-w-xl">
                Since 2005, ABL BusinessTech LLP has been a trusted technology partner for global enterprises — designing, building, and scaling production-ready AI, custom software, and cloud platforms.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a href="#contact-form" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg,#D9005B,#F04A8A)' }}>
                  Work With Us <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#story" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  Our 20-Year Journey
                </a>
              </div>

              <div className="flex flex-wrap gap-5 text-xs font-medium text-gray-400 pt-4 border-t border-white/10">
                {([['#D9005B', '20+ Years in Business'], ['#8B5CF6', '500+ Enterprise Projects'], ['#00AEEF', '95% Client Retention']] as [string, string][]).map(([color, text]) => (
                  <div key={text} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" style={{ color }} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-white/10" style={{ aspectRatio: '4/5' }}>
                <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop" alt="ABL BusinessTech team collaborating" fill className="object-cover" unoptimized priority />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A]/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-white/60 mb-0.5">ABL BusinessTech LLP</p>
                  <p className="text-sm font-semibold text-white">Enterprise AI & Co-Engineering Since 2005</p>
                </div>
              </div>

              {([
                { icon: Award, label: '20+ Years Excellence', sub: 'Established 2005', pos: 'top-4 -left-6', color: '#D9005B' },
                { icon: Rocket, label: '500+ Projects', sub: 'Global Enterprise Delivery', pos: 'top-28 -right-6', color: '#8B5CF6' },
                { icon: Globe, label: '40+ Industries', sub: 'Worldwide Coverage', pos: 'bottom-28 -left-6', color: '#00AEEF' },
                { icon: Heart, label: '95% Retention', sub: 'Long-Term Co-Engineering', pos: 'bottom-6 -right-6', color: '#D9005B' },
              ] as { icon: React.ElementType; label: string; sub: string; pos: string; color: string }[]).map(({ icon: Icon, label, sub, pos, color }) => (
                <div key={label} className={'absolute ' + pos + ' z-20 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-white border border-slate-100 shadow-lg'}>
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: color + '18' }}>
                    <Icon className="w-4 h-4" style={{ color }} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-800 leading-none">{label}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-white/10">
            <p className="text-center text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-6">Trusted by global enterprise giants</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-40 hover:opacity-60 transition-opacity">
              {['MasterCard', 'VISA', 'Facebook', 'Autodesk', 'UBS Global', 'Apex Logistics'].map(brand => (
                <div key={brand} className="flex items-center gap-2 font-bold text-white text-sm">
                  <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center text-[10px] font-black">{brand[0]}</div>
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. STATS BAR ── */}
      <section className="bg-white border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-100">
            {([
              { val: '20+', label: 'Years in Business', sub: 'Since 2005', color: '#D9005B' },
              { val: '500+', label: 'Projects Delivered', sub: 'Global enterprise scale', color: '#8B5CF6' },
              { val: '40+', label: 'Industries Served', sub: 'Worldwide coverage', color: '#00AEEF' },
              { val: '95%', label: 'Client Retention', sub: 'Long-term partnerships', color: '#D9005B' },
            ] as { val: string; label: string; sub: string; color: string }[]).map(({ val, label, sub, color }) => (
              <div key={label} className="px-8 py-8 text-center">
                <p className="text-3xl font-bold mb-1" style={{ background: 'linear-gradient(135deg,' + color + ',' + color + '99)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{val}</p>
                <p className="text-xs font-semibold text-gray-700">{label}</p>
                <p className="text-[11px] text-gray-400 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 3. MISSION & TIMELINE ── */}
      <section id="story" className="py-20 lg:py-24 bg-slate-50 border-y border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            <div className="space-y-5">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D9005B]">Our Mission & Story</span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-tight">Making World-Class Technology Accessible to Ambitious Enterprises.</h2>
              <p className="text-sm text-gray-500 leading-relaxed">Founded in 2005, ABL BusinessTech LLP was built on a single conviction: that ambitious businesses deserve access to the same elite engineering talent and cloud-native architecture that powers the world&apos;s tech giants.</p>
              <p className="text-sm text-gray-500 leading-relaxed">Over two decades, we have evolved into a full-service AI, software, and cloud engineering powerhouse helping clients navigate technological disruptions from early web services to modern AI models.</p>

              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop" alt="ABL BusinessTech engineering center" fill className="object-cover" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-r from-[#D9005B]/10 to-transparent" />
              </div>

              <a href="#contact-form" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white transition-all hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg,#D9005B,#8B5CF6)' }}>
                Partner With Us <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-6 uppercase tracking-wider">Company Evolution Timeline</h3>
              <div className="relative border-l-2 border-slate-200 pl-6 space-y-5">
                {milestones.map(m => (
                  <div key={m.year} className="relative group">
                    <div className="absolute -left-[25px] top-3 w-3 h-3 rounded-full bg-white border-2 border-[#D9005B] group-hover:bg-[#D9005B] transition-colors duration-200" />
                    <div className="bg-white rounded-xl p-5 border border-slate-100 hover:border-[#D9005B]/25 hover:shadow-md transition-all duration-200">
                      <span className="inline-block text-[10px] font-bold text-[#D9005B] px-2 py-0.5 rounded-full bg-[#D9005B]/8 mb-2">{m.year}</span>
                      <h4 className="text-sm font-semibold text-gray-800 mb-1">{m.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── 4. CORE VALUES ── */}
      <section className="py-20 lg:py-24 bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D9005B] block mb-3">How We Operate</span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Principles That Drive Our Engineering Culture.</h2>
            <p className="text-sm text-gray-500">The core values that guide our architectural decisions, client communication, and code standards.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <div key={i} className="group bg-slate-50/60 rounded-2xl p-6 border border-slate-100 hover:bg-white hover:border-[#D9005B]/20 hover:shadow-lg transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-105" style={{ background: v.color + '12' }}>
                    <Icon className="w-5 h-5" style={{ color: v.color }} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-2 group-hover:text-[#D9005B] transition-colors">{v.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-1 text-[11px] font-medium text-gray-400 group-hover:text-[#D9005B] transition-colors">
                    <span>Core Value 0{i + 1}</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── 5. LEADERSHIP TEAM ── */}
      <section className="py-20 lg:py-24 bg-slate-50 border-y border-slate-100">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D9005B] block mb-3">Leadership Team</span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">The People Behind the Engineering Excellence.</h2>
            <p className="text-sm text-gray-500">Meet the founders, principal architects, and technology directors leading ABL BusinessTech LLP.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                  <Image src={member.photo} alt={member.name} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-semibold text-gray-800 group-hover:text-[#D9005B] transition-colors">{member.name}</h3>
                  <p className="text-[11px] font-semibold uppercase tracking-wider mt-0.5 mb-2" style={{ color: member.accent }}>{member.role}</p>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">{member.bio}</p>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-[#0077B5] transition-colors">
                      <LinkedInIcon className="w-3.5 h-3.5 text-[#0077B5]" />
                      Connect on LinkedIn
                    </a>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 6. GLOBAL OFFICES ── */}
      <section className="py-20 lg:py-24 bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D9005B] block mb-3">Global Footprint</span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Our Global Offices & Engineering Centers.</h2>
            <p className="text-sm text-gray-500">Delivering round-the-clock co-engineering support across global business time zones.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {([
              { city: 'Mumbai, India', sub: 'Maharashtra Technology Corridor', badge: 'Global HQ', badgeColor: '#D9005B', desc: 'Primary engineering delivery center housing 200+ full-stack, AI, and cloud DevOps engineers.', iconColor: '#D9005B' },
              { city: 'New York, USA', sub: 'North America Enterprise Advisory', badge: 'US Advisory Hub', badgeColor: '#8B5CF6', desc: 'Executive client strategy, solution architecture, and enterprise account management center.', iconColor: '#8B5CF6' },
              { city: 'London, UK', sub: 'Europe & FinTech Operations', badge: 'EU Delivery Hub', badgeColor: '#00AEEF', desc: 'Serving European banking, retail, and healthcare enterprise partners with zero time-zone delay.', iconColor: '#00AEEF' },
            ] as { city: string; sub: string; badge: string; badgeColor: string; desc: string; iconColor: string }[]).map(({ city, sub, badge, badgeColor, desc, iconColor }) => (
              <div key={city} className="bg-slate-50/60 rounded-2xl p-6 border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-100 bg-white" style={{ color: iconColor }}>
                    <MapPin className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white" style={{ background: badgeColor }}>{badge}</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mb-0.5">{city}</h3>
                <p className="text-[11px] text-gray-400 font-medium mb-3">{sub}</p>
                <p className="text-xs text-gray-500 leading-relaxed pt-3 border-t border-slate-100">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 7. TESTIMONIAL ── */}
      <section className="py-20 lg:py-24 bg-slate-50 border-y border-slate-100">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#D9005B]">Client Testimonial</span>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => <Sparkles key={i} className="w-3 h-3 fill-current" />)}
                </div>
              </div>

              <blockquote className="text-base sm:text-lg font-medium text-gray-800 leading-relaxed italic mb-6">
                {testimonials[activeTestimonial].quote}
              </blockquote>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0" style={{ background: 'linear-gradient(135deg,#D9005B,#00AEEF)' }}>
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{testimonials[activeTestimonial].name}</p>
                    <p className="text-xs text-gray-400">{testimonials[activeTestimonial].role} — {testimonials[activeTestimonial].company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setActiveTestimonial(p => p === 0 ? testimonials.length - 1 : p - 1)} className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors" aria-label="Previous testimonial">
                    <ChevronLeft className="w-4 h-4 text-gray-500" />
                  </button>
                  <button onClick={() => setActiveTestimonial(p => p === testimonials.length - 1 ? 0 : p + 1)} className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors" aria-label="Next testimonial">
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 8. FAQ ── */}
      <section className="py-20 lg:py-24 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D9005B] block mb-3">Got Questions?</span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">Frequently Asked Questions</h2>
              <p className="text-sm text-gray-500">Everything you need to know about ABL BusinessTech LLP and our co-engineering model.</p>
            </div>

            <div className="divide-y divide-slate-100">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx
                return (
                  <div key={idx}>
                    <button onClick={() => setOpenFaq(isOpen ? null : idx)} className="w-full text-left flex items-center justify-between gap-4 py-4 text-sm font-medium text-gray-700 hover:text-[#D9005B] transition-colors">
                      <span>{faq.q}</span>
                      <ChevronDown className={'w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ' + (isOpen ? 'rotate-180 text-[#D9005B]' : '')} />
                    </button>
                    {isOpen && <p className="pb-4 text-xs text-gray-500 leading-relaxed">{faq.a}</p>}
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 9. CONTACT FORM ── */}
      <section id="contact-form" className="relative py-20 lg:py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg,#060D1A 0%,#0A1628 50%,#0D0520 100%)' }}>
        <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.028) 1px,transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px]" style={{ background: 'radial-gradient(circle,rgba(217,0,91,0.08) 0%,transparent 70%)' }} />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            <div className="space-y-6">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D9005B]">Work With ABL BusinessTech</span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">Ready to Scale Your Software Engineering Capabilities?</h2>
              <p className="text-sm text-gray-400 leading-relaxed">Speak with our senior technology leaders to discuss your product roadmap, explore co-engineering pods, or schedule a free technical consultation.</p>

              <div className="space-y-3">
                {([['#D9005B', 'Free enterprise software & architecture consultation'], ['#8B5CF6', '20+ years of proven enterprise software engineering'], ['#00AEEF', '100% full legal assignment of code & IP ownership']] as [string, string][]).map(([color, text]) => (
                  <div key={text} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color }} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <p className="text-[10px] font-semibold uppercase text-gray-500 tracking-wider">Direct Reachout</p>
                <div className="flex flex-col gap-2 text-sm font-medium text-gray-300">
                  <a href="mailto:info@ablbusinesstech.com" className="hover:text-[#D9005B] transition-colors">info@ablbusinesstech.com</a>
                  <a href="tel:+919876543210" className="hover:text-[#D9005B] transition-colors">+91 98765 43210</a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 sm:p-8">
              {isSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Thank you!</h3>
                  <p className="text-sm text-gray-500">Our leadership team will contact you shortly.</p>
                  <button onClick={() => setIsSubmitted(false)} className="text-xs font-semibold text-[#D9005B] hover:underline">Submit another inquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-semibold text-gray-600 uppercase mb-1 tracking-wider">First Name*</label>
                      <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="John" className={inp + ' ' + (formErrors.firstName ? inpErr : '')} />
                      {formErrors.firstName && <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{formErrors.firstName}</p>}
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-gray-600 uppercase mb-1 tracking-wider">Last Name*</label>
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Doe" className={inp + ' ' + (formErrors.lastName ? inpErr : '')} />
                      {formErrors.lastName && <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{formErrors.lastName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-semibold text-gray-600 uppercase mb-1 tracking-wider">Business Email*</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@company.com" className={inp + ' ' + (formErrors.email ? inpErr : '')} />
                      {formErrors.email && <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{formErrors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-gray-600 uppercase mb-1 tracking-wider">Phone*</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+1 555 000-0000" className={inp + ' ' + (formErrors.phone ? inpErr : '')} />
                      {formErrors.phone && <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{formErrors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-semibold text-gray-600 uppercase mb-1 tracking-wider">Company*</label>
                      <input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Acme Corp" className={inp + ' ' + (formErrors.company ? inpErr : '')} />
                      {formErrors.company && <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{formErrors.company}</p>}
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-gray-600 uppercase mb-1 tracking-wider">Service</label>
                      <select name="service" value={formData.service} onChange={handleInputChange} className={inp}>
                        <option>Custom Software Engineering</option>
                        <option>Enterprise AI Data Engineering</option>
                        <option>Dedicated Co-Engineering Pod</option>
                        <option>Cloud Migration DevOps</option>
                        <option>Custom ERP CRM System</option>
                        <option>UI/UX Product Design</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold text-gray-600 uppercase mb-1 tracking-wider">Budget</label>
                    <select name="budget" value={formData.budget} onChange={handleInputChange} className={inp}>
                      <option>Under $10,000</option>
                      <option>$10,000 to $25,000</option>
                      <option>$25,000 to $50,000</option>
                      <option>$50,000 and above</option>
                      <option>Open to discuss</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold text-gray-600 uppercase mb-1 tracking-wider">Project Details*</label>
                    <textarea name="details" rows={3} value={formData.details} onChange={handleInputChange} placeholder="Tell us about your engineering goals and target timeline..." className={inp + ' resize-none ' + (formErrors.details ? inpErr : '')} />
                    {formErrors.details && <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{formErrors.details}</p>}
                  </div>

                  <div>
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleInputChange} className="mt-0.5 rounded border-slate-300 text-[#D9005B] focus:ring-[#D9005B]" />
                      <span className="text-xs text-gray-400 leading-normal">I agree to the Privacy Policy and allow ABL BusinessTech LLP to contact me.</span>
                    </label>
                    {formErrors.agreeTerms && <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{formErrors.agreeTerms}</p>}
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 disabled:opacity-60" style={{ background: 'linear-gradient(135deg,#D9005B,#8B5CF6,#00AEEF)' }}>
                    {isSubmitting ? 'Processing...' : (<><span>Request Executive Consultation</span><ArrowRight className="w-4 h-4" /></>)}
                  </button>
                </form>
              )}
            </div>

          </div>
        </Container>
      </section>

    </main>
  )
}
