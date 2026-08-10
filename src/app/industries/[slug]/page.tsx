import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
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
    return { title: `${ind.name} Technology Solutions`, description: ind.seo?.metaDescription || ind.description }
  } catch {
    return { title: slug.replace(/-/g, ' ') }
  }
}

const industryMap: Record<string, { name: string; icon: string; description: string; challenges: { title: string; description: string }[]; solutions: { title: string; description: string }[] }> = {
  'retail-ecommerce': { name: 'Retail & E-commerce', icon: '🛍️', description: 'Personalized commerce experiences that drive conversion, loyalty, and sustainable growth.', challenges: [{ title: 'Cart Abandonment', description: 'High abandonment rates due to friction in checkout and lack of personalization.' }, { title: 'Inventory Management', description: 'Real-time inventory sync across online and physical channels.' }], solutions: [{ title: 'AI Personalization Engine', description: 'Recommend the right product to the right customer at the right moment.' }, { title: 'Headless Commerce', description: 'Decouple your frontend from your commerce backend for speed and flexibility.' }] },
  'healthcare': { name: 'Healthcare & Life Sciences', icon: '🏥', description: 'Secure, compliant digital platforms for patient care, clinical operations, and health data management.', challenges: [{ title: 'Data Fragmentation', description: 'Patient data siloed across multiple systems and care providers.' }, { title: 'Regulatory Compliance', description: 'Maintaining HIPAA and data privacy requirements as systems scale.' }], solutions: [{ title: 'Unified Health Records', description: 'Integrate disparate systems into a single source of truth for patient data.' }, { title: 'Compliance Infrastructure', description: 'Build HIPAA-compliant cloud architecture with audit trails and access control.' }] },
  'financial-services': { name: 'Financial Services', icon: '💰', description: 'Fintech, digital banking, and compliance systems for the modern financial ecosystem.', challenges: [{ title: 'Legacy System Debt', description: 'Aging core banking systems that can\'t support real-time transactions or modern APIs.' }, { title: 'Fraud & Security', description: 'Rising fraud sophistication that outpaces traditional detection methods.' }], solutions: [{ title: 'Digital Banking Platform', description: 'Modern banking infrastructure with real-time payments and open banking APIs.' }, { title: 'AI Fraud Detection', description: 'Machine learning models that detect and prevent fraud in milliseconds.' }] },
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params
  let industry = null
  try { industry = await getIndustryBySlug(slug) } catch {}

  const defaultData = industryMap[slug]
  if (!industry && !defaultData) notFound()

  const ind = industry || defaultData

  return (
    <>
      <section className="bg-gradient-to-br from-[#0D0D1A] to-[#111827] py-24 lg:py-32">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li><Link href="/industries" className="hover:text-white">Industries</Link></li>
              <li>/</li>
              <li className="text-gray-200" aria-current="page">{ind.name}</li>
            </ol>
          </nav>
          <div className="text-5xl mb-6">{ind.icon}</div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">{ind.name} Technology Solutions</h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">{ind.description}</p>
          <Button href="/contact" variant="primary" size="lg">Discuss Your Project <ArrowRight className="w-4 h-4" /></Button>
        </Container>
      </section>

      {/* Challenges & Solutions */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-black text-[#111111] mb-8">Industry Challenges</h2>
              <div className="space-y-5">
                {ind.challenges?.map((c: { title: string; description: string }) => (
                  <div key={c.title} className="p-5 rounded-xl bg-red-50 border border-red-100">
                    <h3 className="font-bold text-[#111111] mb-1">⚠️ {c.title}</h3>
                    <p className="text-sm text-gray-600">{c.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#111111] mb-8">Our Solutions</h2>
              <div className="space-y-5">
                {ind.solutions?.map((s: { title: string; description: string }) => (
                  <div key={s.title} className="p-5 rounded-xl bg-green-50 border border-green-100">
                    <h3 className="font-bold text-[#111111] mb-1">✅ {s.title}</h3>
                    <p className="text-sm text-gray-600">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-[#F7F8FA]">
        <Container className="text-center">
          <h2 className="text-3xl font-black text-[#111111] mb-4">Let&apos;s Solve Your {ind.name} Challenge</h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">Our industry specialists understand your domain and can build technology that fits perfectly.</p>
          <Button href="/contact" variant="primary" size="lg">Get In Touch <ArrowRight className="w-4 h-4" /></Button>
        </Container>
      </section>
    </>
  )
}
