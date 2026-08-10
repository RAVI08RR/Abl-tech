import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { getIndustries } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Technology solutions built around the unique challenges of your industry — from retail and healthcare to finance and manufacturing.',
}

const defaultIndustries = [
  { _id: '1', name: 'Retail & E-commerce', description: 'Personalized commerce experiences that drive conversion and loyalty.', icon: '🛍️', slug: { current: 'retail-ecommerce' }, featured: true },
  { _id: '2', name: 'Healthcare & Life Sciences', description: 'Secure, compliant platforms for patient care and clinical operations.', icon: '🏥', slug: { current: 'healthcare' }, featured: true },
  { _id: '3', name: 'Financial Services', description: 'Fintech solutions, digital banking, and regulatory compliance.', icon: '💰', slug: { current: 'financial-services' }, featured: true },
  { _id: '4', name: 'Education & EdTech', description: 'Engaging learning platforms that scale from startup to enterprise.', icon: '🎓', slug: { current: 'education' }, featured: true },
  { _id: '5', name: 'Media & Entertainment', description: 'Content delivery, streaming, and audience engagement platforms.', icon: '🎬', slug: { current: 'media-entertainment' }, featured: true },
  { _id: '6', name: 'Manufacturing & Industry 4.0', description: 'IoT integration, supply chain visibility, and predictive maintenance.', icon: '🏭', slug: { current: 'manufacturing' }, featured: true },
  { _id: '7', name: 'Logistics & Supply Chain', description: 'Real-time tracking, route optimization, and warehouse automation.', icon: '🚚', slug: { current: 'logistics' }, featured: true },
  { _id: '8', name: 'Travel & Hospitality', description: 'Booking systems, customer portals, and loyalty program platforms.', icon: '✈️', slug: { current: 'travel-hospitality' }, featured: false },
  { _id: '9', name: 'Professional Services', description: 'Client portals, project management, and billing automation.', icon: '💼', slug: { current: 'professional-services' }, featured: false },
  { _id: '10', name: 'Startups & Scale-ups', description: 'Speed-to-market engineering with scalable architecture from day one.', icon: '🚀', slug: { current: 'startups' }, featured: true },
]

export default async function IndustriesPage() {
  let industries = []
  try { const data = await getIndustries(); if (data?.length) industries = data } catch {}
  const displayIndustries = industries.length ? industries : defaultIndustries

  return (
    <>
      <section className="bg-gradient-to-br from-[#0D0D1A] to-[#111827] py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Industries</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Technology Built Around<br /><span className="text-[#E3164F]">Your Industry</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">We bring deep domain expertise across 20+ industries. Our technology solutions are tailored to the specific challenges, regulations, and growth opportunities of your sector.</p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayIndustries.map((industry) => (
              <Link
                key={industry._id}
                href={`/industries/${industry.slug.current}`}
                className="group flex flex-col gap-4 p-7 rounded-2xl border border-gray-100 hover:border-[#E3164F]/30 hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className="text-4xl">{industry.icon}</div>
                <div>
                  <h2 className="text-lg font-bold text-[#111111] mb-2 group-hover:text-[#E3164F] transition-colors">{industry.name}</h2>
                  <p className="text-sm text-gray-500 leading-relaxed">{industry.description}</p>
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold text-[#E3164F] mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Explore solutions <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-[#F7F8FA]">
        <Container className="text-center">
          <h2 className="text-3xl font-black text-[#111111] mb-4">Don&apos;t See Your Industry?</h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">We&apos;ve worked across many more sectors. Tell us about your business and we&apos;ll explain how we can help.</p>
          <Button href="/contact" variant="primary" size="lg">Talk to Our Team <ArrowRight className="w-4 h-4" /></Button>
        </Container>
      </section>
    </>
  )
}
