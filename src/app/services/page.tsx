import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { getServices } from '@/sanity/lib/queries'
import type { Service } from '@/types'

export const metadata: Metadata = {
  title: 'Technology Services',
  description: 'Comprehensive technology services from software development and AI to cloud solutions and digital transformation.',
}

export default async function ServicesPage() {
  let services: Service[] = []
  try {
    services = await getServices()
  } catch { /* use defaults */ }

  const defaultServices = [
    { _id: '1', title: 'Software Development', shortDescription: 'Custom enterprise software engineered for scale, reliability, and performance.', icon: '💻', slug: { current: 'software-development' }, featured: true, order: 1 },
    { _id: '2', title: 'AI & Machine Learning', shortDescription: 'Intelligent automation and data-driven insights that transform decision making.', icon: '🤖', slug: { current: 'ai-machine-learning' }, featured: true, order: 2 },
    { _id: '3', title: 'Digital Transformation', shortDescription: 'End-to-end digitization strategies that modernize operations and unlock growth.', icon: '🔄', slug: { current: 'digital-transformation' }, featured: true, order: 3 },
    { _id: '4', title: 'Web Development', shortDescription: 'High-performance web applications built with modern frameworks and best practices.', icon: '🌐', slug: { current: 'web-development' }, featured: true, order: 4 },
    { _id: '5', title: 'Mobile App Development', shortDescription: 'Native and cross-platform mobile apps that deliver exceptional user experiences.', icon: '📱', slug: { current: 'mobile-app-development' }, featured: true, order: 5 },
    { _id: '6', title: 'Cloud Solutions', shortDescription: 'Scalable cloud infrastructure on AWS, Azure, and GCP for modern workloads.', icon: '☁️', slug: { current: 'cloud-solutions' }, featured: true, order: 6 },
    { _id: '7', title: 'UI/UX Design', shortDescription: 'User-centered design systems that balance aesthetics with conversion performance.', icon: '🎨', slug: { current: 'ui-ux-design' }, featured: true, order: 7 },
    { _id: '8', title: 'Application Modernization', shortDescription: 'Migrate and modernize legacy systems with minimal risk and maximum business continuity.', icon: '⚡', slug: { current: 'application-modernization' }, featured: true, order: 8 },
    { _id: '9', title: 'Product Engineering', shortDescription: 'Full-lifecycle product development from ideation through launch and scale.', icon: '⚙️', slug: { current: 'product-engineering' }, featured: true, order: 9 },
    { _id: '10', title: 'Data Engineering', shortDescription: 'Data pipelines, warehouses, and analytics infrastructure that unlock business intelligence.', icon: '📊', slug: { current: 'data-engineering' }, featured: true, order: 10 },
    { _id: '11', title: 'E-commerce Development', shortDescription: 'High-converting online stores built for performance, scale, and customer delight.', icon: '🛍️', slug: { current: 'ecommerce-development' }, featured: false, order: 11 },
    { _id: '12', title: 'Technology Consulting', shortDescription: 'Strategic technology advisory to help leadership make confident, informed decisions.', icon: '💡', slug: { current: 'technology-consulting' }, featured: false, order: 12 },
  ] as Service[]

  const displayServices = services.length ? services : defaultServices

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0D0D1A] to-[#111827] py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">What We Do</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Technology Services That Drive<span className="text-[#E3164F]"> Real Results</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              From strategy through execution, we offer a complete suite of technology services designed to help ambitious businesses build, scale, and modernize their digital products.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Discuss Your Project <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Services grid */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayServices.map((service, index) => (
              <Link
                key={service._id}
                href={`/services/${service.slug.current}`}
                className="group relative bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#E3164F]/30 hover:shadow-xl transition-all duration-300 overflow-hidden card-hover"
              >
                <span className="service-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E3164F] to-[#008BCB] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="text-3xl mb-5">{service.icon || '🛠️'}</div>
                <h2 className="text-lg font-bold text-[#111111] mb-2 group-hover:text-[#E3164F] transition-colors">
                  {service.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{service.shortDescription}</p>
                <div className="flex items-center gap-1 text-sm font-semibold text-[#E3164F]">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F7F8FA]">
        <Container className="text-center">
          <h2 className="text-3xl font-black text-[#111111] mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Tell us about your business challenge and our consultants will recommend the right approach.
          </p>
          <Button href="/contact/book-consultation" variant="primary" size="lg">
            Book a Free Consultation <ArrowRight className="w-4 h-4" />
          </Button>
        </Container>
      </section>
    </>
  )
}
