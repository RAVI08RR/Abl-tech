import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { getCaseStudyBySlug, getAllCaseStudySlugs } from '@/sanity/lib/queries'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  try { const slugs = await getAllCaseStudySlugs(); return slugs.map((s: { slug: string }) => ({ slug: s.slug })) }
  catch { return [] }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const cs = await getCaseStudyBySlug(slug)
    if (!cs) return { title: 'Case Study Not Found' }
    return { title: cs.seo?.metaTitle || cs.title, description: cs.seo?.metaDescription || cs.shortDescription }
  } catch { return { title: 'Case Study' } }
}

const defaultStudy = {
  title: 'AI-Powered E-Commerce Platform',
  client: 'RetailVision Inc.',
  shortDescription: 'AI-driven commerce engine with personalization and real-time inventory management.',
  challenge: 'RetailVision was struggling with a decade-old monolithic commerce platform that couldn\'t support real-time personalization, had slow page loads, and required 2 weeks of dev work for any feature change.',
  solution: 'We re-architected their platform as a composable commerce stack with a headless Next.js frontend, a custom AI recommendation engine, and a real-time inventory microservice — all deployed on AWS.',
  metrics: [{ value: '42%', metric: 'Conversion Rate Increase', description: 'Year-over-year after launch' }, { value: '3x', metric: 'Faster Processing', description: 'Order processing speed improvement' }, { value: '68%', metric: 'Reduced Page Load', description: 'Core Web Vitals improvement' }],
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  let study = null
  try { study = await getCaseStudyBySlug(slug) } catch {}

  if (!study && slug !== 'ai-ecommerce-platform' && slug !== 'enterprise-digital-banking' && slug !== 'smart-healthcare-platform' && slug !== 'supply-chain-visibility' && slug !== 'edtech-lms' && slug !== 'manufacturing-iot') {
    notFound()
  }

  const s = study || defaultStudy

  return (
    <>
      <section className="bg-gradient-to-br from-[#0D0D1A] to-[#111827] py-24 lg:py-28">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/work" className="hover:text-white transition-colors">Work</Link></li>
              <li>/</li>
              <li className="text-gray-200" aria-current="page">{s.title}</li>
            </ol>
          </nav>

          {s.client && <p className="text-[#E3164F] text-sm font-semibold mb-3 uppercase tracking-widest">{s.client}</p>}
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.05] tracking-tight mb-6 max-w-3xl">{s.title}</h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">{s.shortDescription}</p>
        </Container>
      </section>

      {/* Metrics */}
      {s.metrics && s.metrics.length > 0 && (
        <section className="py-16 bg-[#111111]" aria-label="Project results">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:divide-x lg:divide-white/10">
              {s.metrics.map((metric: { value: string; metric: string; description?: string }) => (
                <div key={metric.metric} className="text-center px-6">
                  <p className="text-4xl lg:text-5xl font-black text-[#E3164F] mb-2">{metric.value}</p>
                  <p className="text-white font-semibold mb-1">{metric.metric}</p>
                  {metric.description && <p className="text-xs text-gray-400">{metric.description}</p>}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Challenge & Solution */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-black text-[#111111] mb-5">The Challenge</h2>
              <p className="text-gray-600 leading-relaxed">{s.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#111111] mb-5">Our Solution</h2>
              <p className="text-gray-600 leading-relaxed">{s.solution}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F7F8FA]">
        <Container className="text-center">
          <h2 className="text-3xl font-black text-[#111111] mb-4">Want Similar Results?</h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">Let&apos;s discuss how we can solve your technology challenges and deliver measurable impact.</p>
          <Button href="/contact" variant="primary" size="lg">Start a Conversation <ArrowRight className="w-4 h-4" /></Button>
        </Container>
      </section>
    </>
  )
}
