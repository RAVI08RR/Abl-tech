import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { LinkedInIcon } from '@/components/ui/Icons'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { getTeamMembers, getStatistics, getCompanyValues, getOfficeLocations } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about AB BusinessTech LLP — our story, mission, team, and values. A technology partner that drives real business impact.',
}

const defaultStats = [
  { _id: '1', value: '10+', label: 'Years', description: 'In business', icon: '🏆' },
  { _id: '2', value: '100+', label: 'Projects', description: 'Delivered', icon: '🚀' },
  { _id: '3', value: '20+', label: 'Industries', description: 'Served', icon: '🌐' },
  { _id: '4', value: '95%', label: 'Retention', description: 'Client rate', icon: '❤️' },
]

const defaultTeam = [
  { _id: '1', name: 'Ravi Soni', designation: 'Founder & CEO', department: 'Leadership', bio: 'Technology entrepreneur with 15+ years building enterprise software for global businesses.', linkedin: 'https://linkedin.com', featured: true },
  { _id: '2', name: 'Priya Sharma', designation: 'CTO', department: 'Engineering', bio: 'Principal engineer and architect specializing in distributed systems and AI infrastructure.', featured: true },
  { _id: '3', name: 'Arun Mehta', designation: 'VP of Digital Strategy', department: 'Strategy', bio: 'Digital transformation expert who has led 30+ enterprise modernization initiatives.', featured: true },
  { _id: '4', name: 'Neha Gupta', designation: 'Head of Design', department: 'Design', bio: 'Award-winning UX designer focused on creating digital experiences that convert and delight.', featured: true },
  { _id: '5', name: 'Kiran Patel', designation: 'Head of Mobile Engineering', department: 'Engineering', bio: 'React Native and Flutter expert with 50+ apps shipped to production.', featured: true },
  { _id: '6', name: 'Sunita Rao', designation: 'VP of Client Success', department: 'Operations', bio: 'Client relationship leader ensuring every project delivers measurable business outcomes.', featured: true },
]

const defaultValues = [
  { icon: '🎯', title: 'Business Outcomes First', description: 'We measure success by your metrics, not just our deliverables.' },
  { icon: '🔍', title: 'Radical Transparency', description: 'Honest timelines, real progress, no surprises.' },
  { icon: '⚡', title: 'Engineering Excellence', description: 'Code quality, performance, and security are non-negotiable.' },
  { icon: '🤝', title: 'True Partnership', description: 'We succeed when you succeed. That\'s not a tagline — it\'s how we operate.' },
]

export default async function AboutPage() {
  let team = [], stats = [], values = [], offices = []
  try {
    ;[team, stats, values, offices] = await Promise.all([
      getTeamMembers(), getStatistics(), getCompanyValues(), getOfficeLocations()
    ])
  } catch {}

  const displayTeam = team.length ? team.filter((t: { featured: boolean }) => t.featured) : defaultTeam
  const displayStats = stats.length ? stats : defaultStats
  const displayValues = values.length ? values : defaultValues

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0D0D1A] to-[#111827] py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">About AB BusinessTech LLP</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              We Build Technology That<span className="text-[#E3164F]"> Moves Business</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              AB BusinessTech LLP is a technology consulting and software engineering firm. We help ambitious businesses — from funded startups to enterprise organizations — design, build, and scale digital products that create real, measurable impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">Work With Us <ArrowRight className="w-4 h-4" /></Button>
              <Button href="/work" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-[#111111]">View Our Work</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#111111]">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 lg:divide-x lg:divide-white/10">
            {displayStats.map((stat: { _id: string; value: string; label: string; description?: string; icon?: string }, i) => (
              <div key={stat._id} className={`text-center px-8 py-4 ${i > 0 ? 'border-t border-white/10 lg:border-t-0' : ''}`}>
                {stat.icon && <div className="text-3xl mb-3">{stat.icon}</div>}
                <p className="text-4xl font-black text-white mb-1">{stat.value}</p>
                <p className="text-sm font-semibold text-gray-300">{stat.label}</p>
                {stat.description && <p className="text-xs text-gray-500 mt-0.5">{stat.description}</p>}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission & Story */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">Our Mission</p>
              <h2 className="text-3xl sm:text-4xl font-black text-[#111111] leading-tight mb-6">
                Making World-Class Technology Accessible to Ambitious Businesses
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Founded in 2014, AB BusinessTech LLP started with a simple belief: that businesses of all sizes deserve access to the same quality of technology that powers the world&apos;s leading digital companies.</p>
                <p>Over the last decade, we&apos;ve evolved from a small web development studio into a full-service technology consulting and engineering firm — serving clients across 20+ industries, from pre-seed startups to listed enterprises.</p>
                <p>Our team combines deep technical expertise with genuine business acumen. We don&apos;t just build what you ask for — we help you figure out what you should be building in the first place.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {defaultValues.map((value) => (
                <div key={value.title} className="p-5 rounded-2xl bg-[#F7F8FA] border border-gray-100">
                  <div className="text-2xl mb-3">{value.icon}</div>
                  <h3 className="text-sm font-bold text-[#111111] mb-1">{value.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="section-padding bg-[#F7F8FA]">
        <Container>
          <div className="mb-14">
            <p className="eyebrow mb-3">Our Team</p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111111]">The People Behind the Product</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayTeam.slice(0, 6).map((member: typeof defaultTeam[0]) => (
              <div key={member._id} className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#E3164F]/20 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E3164F]/20 to-[#008BCB]/20 flex items-center justify-center text-2xl font-black text-[#E3164F] mb-5">
                  {member.name[0]}
                </div>
                <h3 className="font-bold text-[#111111] mb-0.5">{member.name}</h3>
                <p className="text-xs text-[#E3164F] font-semibold mb-2">{member.designation}</p>
                {member.bio && <p className="text-sm text-gray-500 leading-relaxed mb-4">{member.bio}</p>}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-[#0077B5] transition-colors" aria-label={`${member.name} on LinkedIn`}>
                    <LinkedInIcon className="w-3.5 h-3.5" /> LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Offices */}
      <section className="section-padding bg-white">
        <Container>
          <div className="mb-12">
            <p className="eyebrow mb-3">Where We Are</p>
            <h2 className="text-3xl font-black text-[#111111]">Our Offices</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-gray-100">
              <div className="text-2xl mb-4">📍</div>
              <h3 className="font-bold text-[#111111] mb-1">Mumbai <span className="text-xs text-[#E3164F] font-semibold ml-1">HQ</span></h3>
              <p className="text-sm text-gray-500">Maharashtra, India</p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111111]">
        <Container className="text-center">
          <h2 className="text-3xl font-black text-white mb-4">Join the AB BusinessTech Team</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">We&apos;re always looking for talented engineers, designers, and consultants who want to work on meaningful problems.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">View Open Positions <ArrowRight className="w-4 h-4" /></Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-[#111111]">Get In Touch</Button>
          </div>
        </Container>
      </section>
    </>
  )
}
