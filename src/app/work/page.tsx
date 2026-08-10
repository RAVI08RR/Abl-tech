import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { getCaseStudies } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Explore our portfolio of case studies — real projects, measurable outcomes, and transformative technology solutions.',
}

const defaultWork = [
  { _id: '1', title: 'AI-Powered E-Commerce Platform', slug: { current: 'ai-ecommerce-platform' }, client: 'RetailVision Inc.', shortDescription: 'AI-driven commerce engine with personalization and real-time inventory.', featured: true, publishedAt: '2025-07-01', industry: { name: 'Retail', slug: { current: 'retail' } }, service: { title: 'AI & ML', slug: { current: 'ai-machine-learning' } }, metrics: [{ value: '42%', metric: 'Conversion Increase' }] },
  { _id: '2', title: 'Enterprise Digital Banking Suite', slug: { current: 'enterprise-digital-banking' }, client: 'FinEdge Capital', shortDescription: 'Modernized legacy core banking with real-time payments and fraud detection AI.', featured: true, publishedAt: '2025-06-01', industry: { name: 'Finance', slug: { current: 'financial-services' } }, service: { title: 'Digital Transformation', slug: { current: 'digital-transformation' } }, metrics: [{ value: '60%', metric: 'Cost Reduction' }] },
  { _id: '3', title: 'Smart Healthcare Data Platform', slug: { current: 'smart-healthcare-platform' }, client: 'HealthBridge Systems', shortDescription: 'Unified patient data across 12 hospitals with HIPAA-compliant cloud.', featured: true, publishedAt: '2025-05-01', industry: { name: 'Healthcare', slug: { current: 'healthcare' } }, service: { title: 'Cloud Solutions', slug: { current: 'cloud-solutions' } }, metrics: [{ value: '85%', metric: 'Faster Diagnosis' }] },
  { _id: '4', title: 'Supply Chain Visibility Platform', slug: { current: 'supply-chain-visibility' }, client: 'LogiTrack Africa', shortDescription: 'Real-time tracking and route optimization for 500+ delivery vehicles.', featured: false, publishedAt: '2025-04-01', industry: { name: 'Logistics', slug: { current: 'logistics' } }, service: { title: 'Software Development', slug: { current: 'software-development' } }, metrics: [{ value: '32%', metric: 'Cost Savings' }] },
  { _id: '5', title: 'EdTech Learning Management System', slug: { current: 'edtech-lms' }, client: 'EduTech Pro', shortDescription: 'Scalable LMS serving 200,000+ students with live classes and AI tutoring.', featured: false, publishedAt: '2025-03-01', industry: { name: 'Education', slug: { current: 'education' } }, service: { title: 'Web Development', slug: { current: 'web-development' } }, metrics: [{ value: '3x', metric: 'Engagement Increase' }] },
  { _id: '6', title: 'Manufacturing IoT Dashboard', slug: { current: 'manufacturing-iot' }, client: 'IndustriaTech', shortDescription: 'Real-time IoT data visualization and predictive maintenance for factory floors.', featured: false, publishedAt: '2025-02-01', industry: { name: 'Manufacturing', slug: { current: 'manufacturing' } }, service: { title: 'Cloud Solutions', slug: { current: 'cloud-solutions' } }, metrics: [{ value: '40%', metric: 'Downtime Reduction' }] },
]

const gradients = ['from-[#1A0A1A] to-[#2D1035]', 'from-[#0A1220] to-[#091525]', 'from-[#0A1A0A] to-[#102210]']
const accentColors = ['#E3164F', '#008BCB', '#10B981', '#F59E0B', '#8B5CF6', '#06B6D4']

export default async function WorkPage() {
  let work: typeof defaultWork = []
  try {
    const data = await getCaseStudies()
    if (data?.length) work = data
  } catch { /* use defaults */ }

  const displayWork = work.length ? work : defaultWork

  return (
    <>
      <section className="bg-gradient-to-br from-[#0D0D1A] to-[#111827] py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Our Work</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Real Problems.<br /><span className="text-[#E3164F]">Measurable Outcomes.</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              We partner with businesses across industries to solve complex technology challenges. Every engagement delivers tangible, measurable results.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {displayWork.map((study, index) => (
              <Link
                key={study._id}
                href={`/work/${study.slug.current}`}
                className={`group relative rounded-3xl overflow-hidden bg-gradient-to-br ${gradients[index % 3]} min-h-[400px] flex flex-col justify-between p-8 hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className="relative z-10">
                  {study.industry && (
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: `${accentColors[index % 6]}20`, color: accentColors[index % 6] }}>
                      {study.industry.name}
                    </span>
                  )}
                  <h2 className="text-xl font-bold text-white leading-tight mb-2">{study.title}</h2>
                  {study.client && <p className="text-sm text-gray-400 mb-4">{study.client}</p>}
                  <p className="text-sm text-gray-300 leading-relaxed">{study.shortDescription}</p>
                </div>
                <div className="relative z-10">
                  {study.metrics && study.metrics.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-white/10">
                      <p className="text-2xl font-black" style={{ color: accentColors[index % 6] }}>{study.metrics[0].value}</p>
                      <p className="text-xs text-gray-400">{study.metrics[0].metric}</p>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-[#F7F8FA]">
        <Container className="text-center">
          <h2 className="text-3xl font-black text-[#111111] mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">Join 100+ businesses that have partnered with AB BusinessTech to transform their digital operations.</p>
          <Button href="/contact" variant="primary" size="lg">Start a Conversation <ArrowRight className="w-4 h-4" /></Button>
        </Container>
      </section>
    </>
  )
}
