import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import type { Service } from '@/types'

interface ServicesGridProps {
  heading?: string
  description?: string
  services?: Service[]
}

const defaultServices = [
  { _id: '1', title: 'Software Development', shortDescription: 'Custom enterprise software engineered for scale, reliability, and performance.', icon: '💻', slug: { current: 'software-development' }, featured: true, order: 1 },
  { _id: '2', title: 'AI & Machine Learning', shortDescription: 'Intelligent automation and data-driven insights that transform decision making.', icon: '🤖', slug: { current: 'ai-machine-learning' }, featured: true, order: 2 },
  { _id: '3', title: 'Digital Transformation', shortDescription: 'End-to-end digitization strategies that modernize operations and unlock growth.', icon: '🔄', slug: { current: 'digital-transformation' }, featured: true, order: 3 },
  { _id: '4', title: 'Web Development', shortDescription: 'High-performance web applications built with modern frameworks and best practices.', icon: '🌐', slug: { current: 'web-development' }, featured: true, order: 4 },
  { _id: '5', title: 'Mobile Development', shortDescription: 'Native and cross-platform mobile apps that deliver exceptional user experiences.', icon: '📱', slug: { current: 'mobile-app-development' }, featured: true, order: 5 },
  { _id: '6', title: 'Cloud Engineering', shortDescription: 'Scalable cloud infrastructure on AWS, Azure, and GCP for modern workloads.', icon: '☁️', slug: { current: 'cloud-solutions' }, featured: true, order: 6 },
  { _id: '7', title: 'Product Engineering', shortDescription: 'Full-lifecycle product development from ideation through launch and scale.', icon: '⚙️', slug: { current: 'product-engineering' }, featured: true, order: 7 },
  { _id: '8', title: 'UI/UX Design', shortDescription: 'User-centered design systems that balance aesthetics with conversion performance.', icon: '🎨', slug: { current: 'ui-ux-design' }, featured: true, order: 8 },
] as Service[]

export function ServicesGrid({ heading, description, services }: ServicesGridProps) {
  const displayServices = services?.length ? services : defaultServices
  const displayHeading = heading || 'Technology Expertise That Creates Business Impact'
  const displayDescription = description || 'We bring deep technical expertise across the full software stack — from strategy and design through engineering, delivery, and ongoing optimization.'

  return (
    <section className="section-padding bg-white" aria-label="Our services">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="What We Do"
            title={displayHeading}
            description={displayDescription}
          />
          <Button href="/services" variant="outline" className="shrink-0 self-start lg:self-auto">
            View All Services <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayServices.slice(0, 8).map((service, index) => (
            <Link
              key={service._id}
              href={`/services/${service.slug.current}`}
              className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#E3164F]/30 hover:shadow-xl transition-all duration-300 overflow-hidden card-hover"
              aria-label={`Learn about ${service.title}`}
            >
              {/* Number */}
              <span className="service-number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E3164F] to-[#008BCB] opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />

              {/* Icon */}
              <div className="mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#F7F8FA] group-hover:bg-gradient-to-br group-hover:from-[#E3164F]/10 group-hover:to-[#008BCB]/10 flex items-center justify-center text-2xl transition-all duration-300">
                  {service.icon || '🛠️'}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-base font-bold text-[#111111] mb-2 group-hover:text-[#E3164F] transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {service.shortDescription}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-1 mt-4 text-sm font-semibold text-[#E3164F] opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                Learn more <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
