import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, ArrowRight, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react'
import { LinkedInIcon, InstagramIcon } from '@/components/ui/Icons'
import { Container } from '@/components/ui/Container'
import { getContactPage, getSiteSettings } from '@/sanity/lib/queries'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with ABL BusinessTech LLP. Tell us about your project and we\'ll respond within 1 business day.',
}

const defaultContactInfo = [
  { icon: Mail, label: 'Email Us', value: 'info@ablbusinesstech.com', href: 'mailto:info@ablbusinesstech.com' },
  { icon: Phone, label: 'Call Us', value: '+91 7416 743 434', href: 'tel:+917416743434' },
  { icon: MapPin, label: 'Visit Us', value: 'Mumbai, Maharashtra, India', href: undefined },
  { icon: Clock, label: 'Working Hours', value: 'Mon – Fri, 9 AM – 7 PM IST', href: undefined },
]

const defaultWhyContact = [
  { title: 'Free Initial Consultation', description: 'A no-obligation 45-minute call to understand your goals and recommend the optimal solution.' },
  { title: 'Response in 24 Hours', description: 'Our team reviews and responds to every inquiry within one business day — guaranteed.' },
  { title: 'Senior Technical Lead', description: "You'll discuss technical architecture directly with senior engineering leaders from day one." },
  { title: 'NDA Safeguard Available', description: 'We execute mutual non-disclosure agreements prior to any sensitive project discussions.' },
]

export default async function ContactPage() {
  let pageData = null, siteSettings = null
  try {
    ;[pageData, siteSettings] = await Promise.all([
      getContactPage(), getSiteSettings()
    ])
  } catch { }

  const eyebrow = pageData?.eyebrow || 'Contact Us'
  const headline = pageData?.headline || "Let's Build Something Great Together"
  const subheadline = pageData?.subheadline || 'Tell us about your project. Our engineering leaders will review your requirements and respond within one business day.'
  const formHeading = pageData?.formHeading || 'Send Us a Message'
  const infoHeading = pageData?.infoHeading || 'Contact Information'
  const expectHeading = pageData?.expectHeading || 'What to Expect'
  const expectations = pageData?.expectations?.length ? pageData.expectations : defaultWhyContact

  const emailVal = siteSettings?.contactEmail || 'info@ablbusinesstech.com'
  const phoneVal = siteSettings?.phone || '+91 7416 743 434'
  const addressVal = siteSettings?.address || 'Mumbai, Maharashtra, India'

  const dynamicInfo = [
    { icon: Mail, label: 'Email Us', value: emailVal, href: `mailto:${emailVal}`, color: '#ED396D', bg: 'rgba(237, 57, 109, 0.08)' },
    { icon: Phone, label: 'Call Us', value: phoneVal, href: `tel:${phoneVal.replace(/\s+/g, '')}`, color: '#05A7D4', bg: 'rgba(5, 167, 212, 0.08)' },
    { icon: MapPin, label: 'Visit Us', value: addressVal, href: undefined, color: '#037C9E', bg: 'rgba(3, 124, 158, 0.08)' },
    { icon: Clock, label: 'Working Hours', value: 'Mon – Fri, 9 AM – 7 PM IST', href: undefined, color: '#ED396D', bg: 'rgba(237, 57, 109, 0.08)' },
  ]

  const consultTitle = pageData?.consultationCard?.title || 'Need an urgent response?'
  const consultDesc = pageData?.consultationCard?.description || 'For time-sensitive inquiries, call us directly or schedule an immediate technical discovery session.'
  const consultLabel = pageData?.consultationCard?.buttonLabel || 'Book a Free Consultation'
  const consultHref = pageData?.consultationCard?.buttonHref || '/contact'

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative py-14 lg:py-20 overflow-hidden bg-slate-50/70 border-b border-slate-200/60">
        {/* Dot Matrix Background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Ambient Gradient Blobs */}
        <div
          className="pointer-events-none absolute -top-40 -left-40 w-[550px] h-[550px] rounded-full blur-[140px] opacity-25"
          style={{ background: 'radial-gradient(circle, #ED396D 0%, transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute -bottom-40 -right-40 w-[550px] h-[550px] rounded-full blur-[140px] opacity-25"
          style={{ background: 'radial-gradient(circle, #05A7D4 0%, transparent 70%)' }}
        />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white border border-slate-200/80 text-xs font-semibold text-[#05A7D4] tracking-widest uppercase mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#ED396D]" />
              <span>{eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.12] tracking-tight mb-3 text-balance">
              {headline}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal text-pretty max-w-2xl">
              {subheadline}
            </p>
          </div>
        </Container>
      </section>

      {/* ── Content Section ── */}
      <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
        {/* Ambient background blur */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] blur-[150px] opacity-15"
          style={{ background: 'radial-gradient(circle, #05A7D4 0%, transparent 70%)' }}
        />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form Column */}
            <div className="lg:col-span-3">
              <div className="relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-lg shadow-slate-200/30 overflow-hidden">
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#ED396D] via-[#05A7D4] to-[#037C9E]" />

                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-[#ED396D]/10 flex items-center justify-center">
                    <MessageSquare className="w-4.5 h-4.5 text-[#ED396D]" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">{formHeading}</h2>
                    <p className="text-xs text-slate-500 font-normal">Fill in the details below to start a conversation.</p>
                  </div>
                </div>

                <ContactForm />
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-2 space-y-5">
              {/* Contact Information Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
                <h2 className="text-base font-bold text-slate-900 mb-4 tracking-tight">{infoHeading}</h2>
                <ul className="space-y-4">
                  {dynamicInfo.map(({ icon: Icon, label, value, href, color, bg }) => (
                    <li key={label} className="flex items-start gap-3.5 group">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105"
                        style={{ background: bg }}
                      >
                        <Icon className="w-4.5 h-4.5" style={{ color }} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="text-xs sm:text-sm font-bold text-slate-900 hover:text-[#05A7D4] transition-colors">{value}</a>
                        ) : (
                          <p className="text-xs sm:text-sm font-semibold text-slate-900">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Social media connections */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2.5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">Connect:</span>
                  <a
                    href={siteSettings?.socialLinks?.linkedin || 'https://linkedin.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200/80 hover:border-[#05A7D4] hover:bg-[#05A7D4]/10 flex items-center justify-center transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5 text-slate-600 hover:text-[#05A7D4]" />
                  </a>
                  <a
                    href={siteSettings?.socialLinks?.instagram || 'https://instagram.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200/80 hover:border-[#ED396D] hover:bg-[#ED396D]/10 flex items-center justify-center transition-all duration-200"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-slate-600 hover:text-[#ED396D]" />
                  </a>
                </div>
              </div>

              {/* What to Expect Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
                <h2 className="text-base font-bold text-slate-900 mb-4 tracking-tight">{expectHeading}</h2>
                <ul className="space-y-3.5">
                  {expectations.map((item: { title: string; description: string }) => (
                    <li key={item.title} className="flex gap-3 items-start">
                      <div className="w-4.5 h-4.5 rounded-full bg-[#05A7D4]/12 flex items-center justify-center shrink-0 mt-0.5">
                        <ShieldCheck className="w-3 h-3 text-[#05A7D4]" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5 leading-snug">{item.title}</p>
                        <p className="text-xs text-slate-500 leading-relaxed font-normal">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consultation Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#ED396D]/5 via-white to-[#05A7D4]/5 border border-[#05A7D4]/20 shadow-xs">
                <p className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">{consultTitle}</p>
                <p className="text-xs text-slate-500 mb-3 leading-relaxed font-normal">{consultDesc}</p>
                <a
                  href={consultHref}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ED396D] hover:text-[#05A7D4] transition-colors group/link"
                >
                  <span>{consultLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}


