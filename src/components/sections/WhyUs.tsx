import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { CompanyValue } from '@/types'

interface WhyUsProps {
  heading?: string
  description?: string
  values?: CompanyValue[]
}

const defaultValues: CompanyValue[] = [
  { _id: '1', title: 'Business-First Thinking', description: 'We start with your business problem, not a tech stack. Every decision is anchored in measurable business outcomes — not just technical elegance.', icon: '🎯', order: 1 },
  { _id: '2', title: 'Senior Engineering Team', description: 'Our engineers average 8+ years of experience. No juniors-only teams, no offshore bait-and-switch. You get the people you see in discovery.', icon: '👨‍💻', order: 2 },
  { _id: '3', title: 'Scalable Architecture', description: 'We design for 10x growth from day one. Our systems handle scale without requiring a costly rebuild six months after launch.', icon: '📐', order: 3 },
  { _id: '4', title: 'Modern Technology', description: 'We don\'t build with yesterday\'s tools. We use the same technology stack that powers the world\'s fastest-growing digital businesses.', icon: '⚡', order: 4 },
  { _id: '5', title: 'Radical Transparency', description: 'Weekly demos, real-time tracking boards, honest timelines. We treat your project like it\'s our own business — because it is.', icon: '🔍', order: 5 },
  { _id: '6', title: 'Long-Term Partnership', description: 'We measure success in years, not sprints. 95% of our clients continue working with us well after their initial project launch.', icon: '🤝', order: 6 },
]

export function WhyUs({ heading, description, values }: WhyUsProps) {
  const displayValues = values?.length ? values : defaultValues
  const displayHeading = heading || 'Why Businesses Choose AB BusinessTech'
  const displayDescription = description || 'We\'re not just a vendor — we\'re a long-term technology partner committed to your growth.'

  return (
    <section className="section-padding bg-[#F7F8FA]" aria-label="Why choose us">
      <Container>
        <div className="text-center mb-16">
          <SectionHeading
            eyebrow="Why Us"
            title={displayHeading}
            description={displayDescription}
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayValues.map((value, index) => (
            <div
              key={value._id}
              className="group relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#E3164F]/20 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Accent line */}
              <div
                className="absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, #E3164F, #008BCB)`,
                }}
                aria-hidden="true"
              />

              {/* Number watermark */}
              <span
                className="absolute top-4 right-5 text-6xl font-black text-gray-50 group-hover:text-[#E3164F]/5 transition-colors duration-300 leading-none select-none"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#F7F8FA] group-hover:bg-gradient-to-br group-hover:from-[#E3164F]/10 group-hover:to-[#008BCB]/10 flex items-center justify-center text-2xl transition-all duration-300 mb-5">
                  {value.icon}
                </div>
                <h3 className="text-base font-bold text-[#111111] mb-2.5 group-hover:text-[#E3164F] transition-colors duration-200">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
