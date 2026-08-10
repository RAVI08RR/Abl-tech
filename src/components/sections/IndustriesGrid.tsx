import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import type { Industry } from '@/types'

interface IndustriesGridProps {
  heading?: string
  description?: string
  industries?: Industry[]
}

const defaultIndustries = [
  { _id: '1', name: 'Retail & E-commerce', description: 'Personalized commerce experiences that drive conversion and loyalty.', icon: '🛍️', slug: { current: 'retail-ecommerce' }, featured: true },
  { _id: '2', name: 'Healthcare & Life Sciences', description: 'Secure, compliant platforms for patient care and clinical operations.', icon: '🏥', slug: { current: 'healthcare' }, featured: true },
  { _id: '3', name: 'Financial Services', description: 'Fintech solutions, digital banking, and regulatory compliance systems.', icon: '💰', slug: { current: 'financial-services' }, featured: true },
  { _id: '4', name: 'Education & EdTech', description: 'Engaging learning platforms that scale from startup to enterprise.', icon: '🎓', slug: { current: 'education' }, featured: true },
  { _id: '5', name: 'Media & Entertainment', description: 'Content delivery, streaming, and audience engagement platforms.', icon: '🎬', slug: { current: 'media-entertainment' }, featured: true },
  { _id: '6', name: 'Manufacturing & Industry 4.0', description: 'IoT integration, supply chain visibility, and predictive maintenance.', icon: '🏭', slug: { current: 'manufacturing' }, featured: true },
  { _id: '7', name: 'Logistics & Supply Chain', description: 'Real-time tracking, route optimization, and warehouse automation.', icon: '🚚', slug: { current: 'logistics' }, featured: true },
  { _id: '8', name: 'Startups & Scale-ups', description: 'Speed-to-market engineering with scalable architecture from day one.', icon: '🚀', slug: { current: 'startups' }, featured: true },
] as Industry[]

export function IndustriesGrid({ heading, description, industries }: IndustriesGridProps) {
  const displayIndustries = industries?.length ? industries : defaultIndustries
  const displayHeading = heading || 'Technology Built Around Your Industry'
  const displayDescription = description || 'We bring deep domain knowledge across industries, delivering technology solutions that solve real business challenges.'

  return (
    <section className="section-padding bg-white" aria-label="Industries we serve">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="Industries"
            title={displayHeading}
            description={displayDescription}
          />
          <Button href="/industries" variant="outline" className="shrink-0 self-start lg:self-auto">
            All Industries <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayIndustries.slice(0, 8).map((industry) => (
            <Link
              key={industry._id}
              href={`/industries/${industry.slug.current}`}
              className="group flex flex-col gap-3 p-6 rounded-2xl border border-gray-100 hover:border-[#E3164F]/30 hover:bg-gradient-to-br hover:from-[#E3164F]/3 hover:to-transparent transition-all duration-300 card-hover"
              aria-label={`${industry.name} industry solutions`}
            >
              <div className="text-3xl" aria-hidden="true">{industry.icon}</div>
              <div>
                <h3 className="text-sm font-bold text-[#111111] mb-1.5 group-hover:text-[#E3164F] transition-colors">
                  {industry.name}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">{industry.description}</p>
              </div>
              <div className="flex items-center gap-1 text-xs font-semibold text-[#E3164F] opacity-0 group-hover:opacity-100 transition-all duration-200 mt-auto">
                Explore <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
