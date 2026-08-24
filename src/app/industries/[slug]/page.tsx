import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, AlertCircle, ChevronRight, ShieldCheck, Zap } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { getIndustryBySlug, getAllIndustrySlugs } from '@/sanity/lib/queries'

interface Props { params: Promise<{ slug: string }> }

const validSlugs = ['retail-ecommerce', 'healthcare', 'financial-services', 'education', 'media-entertainment', 'manufacturing', 'logistics', 'travel-hospitality', 'professional-services', 'startups']

export async function generateStaticParams() {
  try { const slugs = await getAllIndustrySlugs(); return slugs.map((s: { slug: string }) => ({ slug: s.slug })) }
  catch { return validSlugs.map((s) => ({ slug: s })) }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const ind = await getIndustryBySlug(slug)
    if (!ind) return { title: slug.replace(/-/g, ' ') }
    return { title: `${ind.name} Technology Solutions | ABL Tech`, description: ind.seo?.metaDescription || ind.description }
  } catch {
    return { title: `${slug.replace(/-/g, ' ')} | ABL Tech` }
  }
}

const industryMap: Record<string, { name: string; icon: string; tagline: string; description: string; challenges: { title: string; description: string }[]; solutions: { title: string; description: string }[] }> = {
  'retail-ecommerce': {
    name: 'Retail & E-commerce',
    icon: '🛍️',
    tagline: 'Headless Commerce & AI Recommendation Engines',
    description: 'Personalized commerce experiences that drive conversion, loyalty, and sustainable growth with Next.js PWAs.',
    challenges: [
      { title: 'High Cart Abandonment', description: 'High abandonment rates due to friction in checkout and lack of real-time personalization.' },
      { title: 'Multi-Channel Inventory Sync', description: 'Real-time inventory synchronization across online storefronts, physical retail stores, and warehouses.' }
    ],
    solutions: [
      { title: 'AI Personalization Engine', description: 'Machine learning recommendation engines driving 3x higher cart conversion rates.' },
      { title: 'Headless Next.js Commerce', description: 'Decoupled fast frontend storefronts with sub-second page loads.' }
    ]
  },
  'healthcare': {
    name: 'Healthcare & Life Sciences',
    icon: '🏥',
    tagline: 'HIPAA-Compliant Patient Portals & Telehealth',
    description: 'Secure, compliant digital platforms for patient care, clinical operations, and health data management.',
    challenges: [
      { title: 'Data Fragmentation', description: 'Patient data siloed across legacy EHR systems and care providers.' },
      { title: 'Strict HIPAA Compliance', description: 'Maintaining HIPAA and data privacy requirements as cloud systems scale.' }
    ],
    solutions: [
      { title: 'HL7 & FHIR Record Interoperability', description: 'Integrate disparate hospital systems into a single encrypted data vault.' },
      { title: 'HD WebRTC Telehealth Portals', description: 'Secure remote consultations with integrated e-prescribing.' }
    ]
  },
  'financial-services': {
    name: 'Financial Services',
    icon: '💰',
    tagline: 'FinTech, Core Banking & Real-Time Fraud Detection',
    description: 'Fintech, digital banking, and compliance systems for the modern financial ecosystem.',
    challenges: [
      { title: 'Legacy Mainframe Debt', description: 'Aging core banking systems that cannot support real-time transactions or open banking APIs.' },
      { title: 'Sophisticated Cyber Fraud', description: 'Rising fraud sophistication that outpaces traditional batch detection methods.' }
    ],
    solutions: [
      { title: 'Digital Banking APIs', description: 'Modern open banking infrastructure with OAuth2 authentication and real-time ledger sync.' },
      { title: 'Microsecond AI Fraud Engine', description: 'Machine learning models evaluating transaction velocity in real-time.' }
    ]
  },
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params
  let industry = null
  try { industry = await getIndustryBySlug(slug) } catch {}

  const defaultData = industryMap[slug]
  if (!industry && !defaultData) notFound()

  const ind = industry || defaultData

  return (
    <main className="bg-[#FFFFFF] text-[#0B1220] selection:bg-[#D9005B] selection:text-white">
      {/* Light Hero */}
      <section className="relative pt-28 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-[#F8FAFC] via-[#FFFFFF] to-[#F1F5F9]/60 border-b border-slate-200/60">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-semibold text-[#475569]">
              <li><Link href="/" className="hover:text-[#D9005B]">Home</Link></li>
              <li>/</li>
              <li><Link href="/industries" className="hover:text-[#D9005B]">Industries</Link></li>
              <li>/</li>
              <li className="text-[#0B1220]" aria-current="page">{ind.name}</li>
            </ol>
          </nav>
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D9005B]/10 text-[#D9005B] font-bold text-xs mb-6">
            <span>{ind.icon}</span>
            <span>{ind.tagline || 'Specialized Industry Solutions'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1220] leading-tight mb-6">
            {ind.name} Technology Solutions
          </h1>
          <p className="text-lg text-[#475569] max-w-2xl leading-relaxed mb-8">
            {ind.description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-[#D9005B] via-[#8B5CF6] to-[#00AEEF] shadow-lg shadow-[#D9005B]/20 hover:opacity-95 transition-all"
            >
              Discuss Your {ind.name} Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 bg-[#FFFFFF]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Challenges */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600">
                <span>INDUSTRY CHALLENGES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1220]">Key Operational Pain Points</h2>
              <div className="space-y-4">
                {ind.challenges?.map((c: { title: string; description: string }, idx: number) => (
                  <div key={idx} className="p-6 rounded-2xl bg-red-50/60 border border-red-200/70 space-y-2">
                    <h3 className="font-bold text-[#0B1220] flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                      <span>{c.title}</span>
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed">{c.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D9005B]">
                <span>OUR SOLUTIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1220]">How ABL Tech Solves It</h2>
              <div className="space-y-4">
                {ind.solutions?.map((s: { title: string; description: string }, idx: number) => (
                  <div key={idx} className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/70 space-y-2">
                    <h3 className="font-bold text-[#0B1220] flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>{s.title}</span>
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <Container className="text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-[#0B1220] mb-4">Let's Solve Your {ind.name} Challenge</h2>
          <p className="text-sm text-[#475569] mb-8 leading-relaxed">
            Our industry specialists understand your domain constraints and build software that fits perfectly into your enterprise workflow.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-[#D9005B] via-[#8B5CF6] to-[#00AEEF] shadow-xl hover:opacity-95 transition-all"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Container>
      </section>
    </main>
  )
}
