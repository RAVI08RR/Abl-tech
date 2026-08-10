import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { getServiceBySlug, getAllServiceSlugs } from '@/sanity/lib/queries'
import type { Service } from '@/types'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  try {
    const slugs = await getAllServiceSlugs()
    return slugs.map((s: { slug: string }) => ({ slug: s.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const service = await getServiceBySlug(slug)
    if (!service) return { title: 'Service Not Found' }
    return {
      title: service.seo?.metaTitle || service.title,
      description: service.seo?.metaDescription || service.shortDescription,
    }
  } catch {
    return { title: 'Service' }
  }
}

const serviceDefaults: Record<string, Partial<Service>> = {
  'software-development': {
    title: 'Software Development',
    icon: '💻',
    shortDescription: 'Custom enterprise software engineered for scale, reliability, and performance.',
    heroTitle: 'Custom Software That Solves Real Business Problems',
    heroDescription: 'We design and build bespoke software solutions tailored to your specific workflows, industry requirements, and growth objectives — from first line of code to production.',
    features: [
      { title: 'Full-Stack Development', description: 'End-to-end engineering from database design to UI — delivered as a unified, integrated system.', icon: '🔗' },
      { title: 'Scalable Architecture', description: 'Built to handle growth from 100 to 10 million users without costly rewrites.', icon: '📐' },
      { title: 'Agile Delivery', description: 'Two-week sprints with weekly demos and continuous deployment.', icon: '🔄' },
      { title: 'Quality Engineering', description: 'Automated testing, CI/CD pipelines, and code review processes baked in from day one.', icon: '✅' },
      { title: 'API-First Design', description: 'RESTful and GraphQL APIs designed for extensibility and third-party integration.', icon: '🔌' },
      { title: 'Security by Default', description: 'OWASP compliance, penetration testing, and security audits throughout development.', icon: '🔒' },
    ],
    benefits: ['Reduced operational costs through automation', 'Faster time-to-market with agile sprints', 'Scalable architecture for long-term growth', 'Integration with existing systems and tools', 'Ongoing support and maintenance'],
  },
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  let service: Service | null = null

  try {
    service = await getServiceBySlug(slug)
  } catch { /* Sanity not configured */ }

  // Use defaults if Sanity data not available
  const defaults = serviceDefaults[slug]
  if (!service && !defaults) {
    notFound()
  }

  const s = service || {
    _id: slug,
    title: defaults?.title || slug.replace(/-/g, ' '),
    slug: { current: slug },
    icon: defaults?.icon || '🛠️',
    shortDescription: defaults?.shortDescription || '',
    heroTitle: defaults?.heroTitle,
    heroDescription: defaults?.heroDescription,
    features: defaults?.features || [],
    benefits: defaults?.benefits || [],
    featured: false,
    ...defaults,
  } as Service

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.title,
    description: s.shortDescription,
    provider: {
      '@type': 'Organization',
      name: 'AB BusinessTech LLP',
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0D0D1A] to-[#111827] py-24 lg:py-32">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-200" aria-current="page">{s.title}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-5xl mb-6" aria-hidden="true">{s.icon}</div>
              <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.05] tracking-tight mb-6">
                {s.heroTitle || s.title}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {s.heroDescription || s.shortDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Start a Project <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href="/work" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-[#111111]">
                  View Case Studies
                </Button>
              </div>
            </div>

            {/* Benefits quick list */}
            {s.benefits && s.benefits.length > 0 && (
              <div className="glass-card p-7">
                <h2 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">What You Get</h2>
                <ul className="space-y-3">
                  {s.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#E3164F] shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Features */}
      {s.features && s.features.length > 0 && (
        <section className="section-padding bg-white" aria-label="Service features">
          <Container>
            <h2 className="text-3xl font-black text-[#111111] mb-12">What We Deliver</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {s.features.map((feature) => (
                <div key={feature.title} className="p-6 rounded-2xl bg-[#F7F8FA] border border-gray-100 hover:border-[#E3164F]/20 hover:shadow-md transition-all duration-200">
                  {feature.icon && <div className="text-2xl mb-4">{feature.icon}</div>}
                  <h3 className="font-bold text-[#111111] mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Process */}
      {s.process && s.process.length > 0 && (
        <section className="section-padding bg-[#F7F8FA]" aria-label="Service process">
          <Container>
            <h2 className="text-3xl font-black text-[#111111] mb-12">How We Work</h2>
            <ol className="space-y-6">
              {s.process.map((step) => (
                <li key={step.step} className="flex gap-6 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[#E3164F]/10 flex items-center justify-center">
                    <span className="text-sm font-black text-[#E3164F]">
                      {String(step.step).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-bold text-[#111111] mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      {/* FAQs */}
      {s.faqs && s.faqs.length > 0 && (
        <section className="section-padding bg-white" aria-label="Frequently asked questions">
          <Container className="max-w-3xl">
            <h2 className="text-3xl font-black text-[#111111] mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {s.faqs.map((faq, i) => (
                <details key={i} className="group border border-gray-100 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-semibold text-[#111111] hover:text-[#E3164F] transition-colors list-none">
                    {faq.question}
                    <ChevronDown className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50">
                    <div className="pt-4">{faq.answer}</div>
                  </div>
                </details>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#E3164F] to-[#B00E3A]">
        <Container className="text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Build with {s.title}?
          </h2>
          <p className="text-red-100 mb-8 max-w-xl mx-auto">
            Let&apos;s discuss your project requirements and create a tailored plan for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="white" size="lg">
              Start a Project <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/contact/book-consultation" variant="outline" size="lg" className="border-white/50 text-white hover:bg-white hover:text-[#E3164F]">
              Book Free Consultation
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
