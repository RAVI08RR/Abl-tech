import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Target,
  Search,
  Zap,
  Handshake,
  MapPin,
  Trophy,
  Rocket,
  Globe,
  Heart,
  ChevronRight
} from 'lucide-react'
import { LinkedInIcon } from '@/components/ui/Icons'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { getAboutPage, getTeamMembers, getStatistics, getCompanyValues, getOfficeLocations } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'About Us — Enterprise AI & Software Engineering Company Since 2005',
  description: 'Since 2005, AB BusinessTech LLP has been building production-ready AI, software, and cloud solutions for global enterprises. Trusted by MasterCard, VISA, Facebook, Autodesk, and UBS.',
}

const defaultStats = [
  { _id: '1', value: '20+', label: 'Years', description: 'In business since 2005', icon: Trophy },
  { _id: '2', value: '500+', label: 'Projects', description: 'Delivered globally', icon: Rocket },
  { _id: '3', value: '40+', label: 'Industries', description: 'Served worldwide', icon: Globe },
  { _id: '4', value: '95%', label: 'Retention', description: 'Client rate', icon: Heart },
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
  { icon: Target, title: 'Business Outcomes First', description: 'We measure success by your ROI, not just our deliverables. Every architectural decision is made with your business metrics in mind.', color: '#E3164F' },
  { icon: Search, title: 'Radical Transparency', description: 'Honest timelines, real progress updates, and zero surprises. You always know exactly where your project stands.', color: '#008BCB' },
  { icon: Zap, title: 'Engineering Excellence', description: 'Top 1% engineering talent only. Code quality, performance, security, and scalability are non-negotiable standards.', color: '#7C3AED' },
  { icon: Handshake, title: 'True Co-Engineering Partnership', description: 'We act as true co-engineering partners — integrating seamlessly with your internal pods and understanding your architecture immediately.', color: '#059669' },
]

const defaultMissionParagraphs = [
  "Founded in 2005, AB BusinessTech LLP was built on a single belief: that enterprises at any scale deserve access to the same quality of engineering talent and technology that powers the world's leading digital companies.",
  "Over two decades, we have evolved from a specialist engineering firm into a full-service AI, software, and cloud engineering company — serving clients across 40+ industries, from high-growth startups to listed global enterprises.",
  "When global giants like MasterCard, VISA, Facebook, Autodesk, and UBS need to scale complex technical initiatives, they rely on our elite engineering talent. Whether it's injecting niche ML skills through staff augmentation or deploying a fully managed pod to take ownership of a product build, we adapt to your reality.",
]

const memberGrads = [
  ['#E3164F', '#FF6B9D'],
  ['#008BCB', '#00C4FF'],
  ['#7C3AED', '#A78BFA'],
  ['#059669', '#34D399'],
  ['#D97706', '#FCD34D'],
  ['#0891B2', '#67E8F9'],
]

export default async function AboutPage() {
  let pageData = null, team = [], stats = [], values = [], offices = []
  try {
    ;[pageData, team, stats, values, offices] = await Promise.all([
      getAboutPage(), getTeamMembers(), getStatistics(), getCompanyValues(), getOfficeLocations()
    ])
  } catch {}

  const displayTeam = team.length ? team.filter((t: { featured: boolean }) => t.featured) : defaultTeam
  const displayStats = stats.length ? stats : defaultStats
  const displayValues = values.length ? values : defaultValues

  const eyebrow = pageData?.eyebrow || 'About AB BusinessTech LLP'
  const headline = pageData?.headline || 'We Build Technology That Moves Business'
  const subheadline = pageData?.subheadline || 'AB BusinessTech LLP is a technology consulting and software engineering firm. We help ambitious businesses — from funded startups to enterprise organizations — design, build, and scale digital products that create real, measurable impact.'
  const missionEyebrow = pageData?.missionEyebrow || 'Our Mission'
  const missionTitle = pageData?.missionTitle || 'Making World-Class Technology Accessible to Ambitious Businesses'
  const missionParagraphs = pageData?.missionParagraphs?.length ? pageData.missionParagraphs : defaultMissionParagraphs
  const teamEyebrow = pageData?.teamEyebrow || 'Our Team'
  const teamTitle = pageData?.teamTitle || 'The People Behind the Product'
  const officesEyebrow = pageData?.officesEyebrow || 'Where We Are'
  const officesTitle = pageData?.officesTitle || 'Our Offices'
  const ctaHeading = pageData?.cta?.heading || 'Join the AB BusinessTech Team'
  const ctaDescription = pageData?.cta?.description || "We're always looking for talented engineers, designers, and consultants who want to work on meaningful problems."

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #060D1A 0%, #0A1628 50%, #0D0520 100%)' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(0,139,203,0.12) 0%, transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(227,22,79,0.10) 0%, transparent 70%)' }}
        />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#E3164F]" />
              <span
                className="text-xs font-bold tracking-[0.18em] uppercase"
                style={{
                  background: 'linear-gradient(90deg, #E3164F, #008BCB)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {eyebrow}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-6">
              {headline}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              {subheadline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg" style={{ background: 'linear-gradient(135deg, #E3164F, #FF3D6E)', border: 'none' }}>
                Work With Us <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button href="/work" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white hover:text-[#060D1A]">
                View Our Work
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section (Premium Light Theme) */}
      <section className="relative overflow-hidden bg-white border-y border-gray-100" aria-label="Company statistics">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.02) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <Container className="relative z-10 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {displayStats.map((stat: any, i: number) => {
              const IconComponent = stat.icon || defaultStats[i % defaultStats.length].icon
              const accent = memberGrads[i % memberGrads.length]

              return (
                <div
                  key={stat._id || i}
                  className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100/80 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `linear-gradient(135deg, ${accent[0]}12, ${accent[1]}20)` }}
                  >
                    <IconComponent className="w-6 h-6" style={{ color: accent[0] }} />
                  </div>
                  <p
                    className="text-3xl font-black mb-1"
                    style={{
                      background: `linear-gradient(135deg, ${accent[0]}, ${accent[1]})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs font-bold text-gray-800 tracking-tight uppercase mb-0.5">{stat.label}</p>
                  {stat.description && <p className="text-[11px] text-gray-400 font-medium">{stat.description}</p>}
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Mission & Story (Premium light themed) */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] blur-[120px] opacity-40"
          style={{ background: 'radial-gradient(ellipse, rgba(0,139,203,0.08) 0%, transparent 70%)' }}
        />
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-6 bg-[#E3164F]" />
                <span className="text-xs font-bold tracking-widest text-[#E3164F] uppercase">{missionEyebrow}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#111111] leading-tight mb-6">
                {missionTitle}
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed font-medium">
                {missionParagraphs.map((p: string, idx: number) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {displayValues.map((value: any, idx: number) => {
                const iconInfo = defaultValues[idx % defaultValues.length]
                const IconComponent = iconInfo.icon
                return (
                  <div
                    key={value.title || idx}
                    className="p-6 rounded-2xl bg-white border border-gray-100 shadow-xs hover:shadow-md hover:border-gray-200/80 transition-all duration-300"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${iconInfo.color}12` }}
                    >
                      <IconComponent className="w-5 h-5" style={{ color: iconInfo.color }} />
                    </div>
                    <h3 className="text-sm font-bold text-[#111111] mb-1">{value.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-medium">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-[#F7F8FA] relative overflow-hidden">
        <Container className="relative z-10">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-widest text-[#E3164F] uppercase">{teamEyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111111]">{teamTitle}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayTeam.slice(0, 6).map((member: any, i: number) => {
              const grad = memberGrads[i % memberGrads.length]
              return (
                <div
                  key={member._id || i}
                  className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Colored Avatar */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-xl mb-5 shadow-sm group-hover:scale-105 transition-transform duration-300"
                      style={{ background: `linear-gradient(135deg, ${grad[0]}, ${grad[1]})` }}
                    >
                      {member.name[0]}
                    </div>
                    <h3 className="font-bold text-[#111111] text-[15px] mb-0.5 group-hover:text-[#E3164F] transition-colors">{member.name}</h3>
                    <p className="text-xs text-[#E3164F] font-bold mb-3">{member.designation}</p>
                    {member.bio && <p className="text-xs text-gray-500 leading-relaxed font-medium mb-5">{member.bio}</p>}
                  </div>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-[#0077B5] transition-colors"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <LinkedInIcon className="w-3.5 h-3.5" /> LinkedIn <ChevronRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Offices Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <Container className="relative z-10">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-widest text-[#E3164F] uppercase">{officesEyebrow}</span>
            </div>
            <h2 className="text-3xl font-black text-[#111111]">{officesTitle}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.length > 0 ? (
              offices.map((office: any) => (
                <div key={office._id} className="p-6 rounded-2xl bg-[#F7F8FA] border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E3164F]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#E3164F]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#111111] text-[15px] mb-1">
                      {office.city}
                      {office.isHeadquarters && (
                        <span className="text-[10px] text-white font-bold ml-1.5 bg-[#E3164F] px-1.5 py-0.5 rounded-md uppercase">HQ</span>
                      )}
                    </h3>
                    <p className="text-xs text-gray-400 font-semibold">{office.address || office.country}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-gray-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E3164F]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#E3164F]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#111111] text-[15px] mb-1">
                    Mumbai
                    <span className="text-[10px] text-white font-bold ml-1.5 bg-[#E3164F] px-1.5 py-0.5 rounded-md uppercase">HQ</span>
                  </h3>
                  <p className="text-xs text-gray-400 font-semibold">Maharashtra, India</p>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Join the Team CTA Section */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #060D1A 0%, #0A1628 50%, #0D0520 100%)' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <Container className="relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">{ctaHeading}</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto font-medium text-sm leading-relaxed">{ctaDescription}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" style={{ background: 'linear-gradient(135deg, #E3164F, #FF3D6E)', border: 'none' }}>
              View Open Positions <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white hover:text-[#060D1A]">
              Get In Touch
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
