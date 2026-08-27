import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react'
import { LinkedInIcon, InstagramIcon } from '@/components/ui/Icons'
import { Container } from '@/components/ui/Container'
import { getContactPage, getSiteSettings } from '@/sanity/lib/queries'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with ABL BusinessTech LLP. Tell us about your project and we\'ll respond within 1 business day.',
}

const defaultContactInfo = [
  { icon: Mail, label: 'Email Us', value: 'info@abbusinesstech.com', href: 'mailto:info@abbusinesstech.com' },
  { icon: Phone, label: 'Call Us', value: '+91 7416 743 434', href: 'tel:+917416743434' },
  { icon: MapPin, label: 'Visit Us', value: 'Mumbai, Maharashtra, India', href: undefined },
  { icon: Clock, label: 'Working Hours', value: 'Mon – Fri, 9 AM – 7 PM IST', href: undefined },
]

const defaultWhyContact = [
  { title: 'Free Initial Consultation', description: 'A no-obligation 45-minute call to understand your project and recommend the best approach.' },
  { title: 'Response in 24 Hours', description: 'Our team responds to every inquiry within one business day — no automated bounces.' },
  { title: 'Senior-Level Engagement', description: "You'll talk to architects and consultants from the first call — not just sales." },
  { title: 'NDA Available', description: 'We sign NDAs before any detailed technical discussions, always.' },
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
  const subheadline = pageData?.subheadline || 'Tell us about your project. Our team will review your message and respond within one business day.'
  const formHeading = pageData?.formHeading || 'Send Us a Message'
  const infoHeading = pageData?.infoHeading || 'Contact Information'
  const expectHeading = pageData?.expectHeading || 'What to Expect'
  const expectations = pageData?.expectations?.length ? pageData.expectations : defaultWhyContact

  const emailVal = siteSettings?.contactEmail || 'hello@abbusinesstech.com'
  const phoneVal = siteSettings?.phone || '+91 9876 543 210'
  const addressVal = siteSettings?.address || 'Mumbai, Maharashtra, India'

  const dynamicInfo = [
    { icon: Mail, label: 'Email Us', value: emailVal, href: `mailto:${emailVal}`, color: '#E3164F' },
    { icon: Phone, label: 'Call Us', value: phoneVal, href: `tel:${phoneVal.replace(/\s+/g, '')}`, color: '#008BCB' },
    { icon: MapPin, label: 'Visit Us', value: addressVal, href: undefined, color: '#7C3AED' },
    { icon: Clock, label: 'Working Hours', value: 'Mon – Fri, 9 AM – 7 PM IST', href: undefined, color: '#059669' },
  ]

  const consultTitle = pageData?.consultationCard?.title || 'Need something faster?'
  const consultDesc = pageData?.consultationCard?.description || 'For urgent inquiries, call us directly or book a consultation.'
  const consultLabel = pageData?.consultationCard?.buttonLabel || 'Book a Free Consultation →'
  const consultHref = pageData?.consultationCard?.buttonHref || '/contact'

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-28 lg:py-36 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#FFFFFF] to-[#F1F5F9]/30 border-b border-slate-200/50"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#0b1220_1px,transparent_1px),linear-gradient(to_bottom,#0b1220_1px,transparent_1px)] bg-[size:4rem_4rem]"
        />
        <div
          className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(0,139,203,0.05) 0%, transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(227,22,79,0.04) 0%, transparent 70%)' }}
        />

        <Container className="relative z-10">
          <div className="max-w-2xl space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-2">
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

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#0B1220] leading-[1.05] tracking-tight text-pretty">
              {headline}
            </h1>
            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-xl font-normal text-pretty">
              {subheadline}
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-24 lg:py-32 bg-[#FFFFFF] relative overflow-hidden">
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] blur-[130px] opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(0,139,203,0.04) 0%, transparent 70%)' }}
        />
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form Column */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-slate-200/60 shadow-xl shadow-slate-100/50">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1220] mb-6 tracking-tight">{formHeading}</h2>
                <ContactForm />
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Information */}
              <div className="bg-white rounded-[2rem] p-8 border border-slate-200/60 shadow-sm">
                <h2 className="text-lg font-extrabold text-[#0B1220] mb-6 tracking-tight">{infoHeading}</h2>
                <ul className="space-y-5">
                  {dynamicInfo.map(({ icon: Icon, label, value, href, color }) => (
                    <li key={label} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${color}12` }}
                      >
                        <Icon className="w-5 h-5" style={{ color }} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="text-sm font-bold text-[#0B1220] hover:text-[#E3164F] transition-colors">{value}</a>
                        ) : (
                          <p className="text-sm font-semibold text-[#0B1220]">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Social media connections */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">Connect:</span>
                  <a
                    href={siteSettings?.socialLinks?.linkedin || 'https://linkedin.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 hover:border-[#E3164F] hover:bg-[#E3164F]/5 flex items-center justify-center transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon className="w-4 h-4 text-slate-500 hover:text-[#E3164F]" />
                  </a>
                  <a
                    href={siteSettings?.socialLinks?.instagram || 'https://instagram.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 hover:border-[#E3164F] hover:bg-[#E3164F]/5 flex items-center justify-center transition-all duration-200"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4 text-slate-500 hover:text-[#E3164F]" />
                  </a>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-white rounded-[2rem] p-8 border border-slate-200/60 shadow-sm">
                <h2 className="text-lg font-extrabold text-[#0B1220] mb-6 tracking-tight">{expectHeading}</h2>
                <ul className="space-y-5">
                  {expectations.map((item: { title: string; description: string }) => (
                    <li key={item.title} className="flex gap-4">
                      <div className="w-5 h-5 rounded-full bg-[#059669]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0B1220] mb-0.5 leading-snug">{item.title}</p>
                        <p className="text-xs text-slate-500 leading-relaxed font-normal">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consultation card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-[#E3164F]/3 via-white to-[#008BCB]/3 border border-[#008BCB]/15">
                <p className="text-sm font-bold text-[#0B1220] mb-1">{consultTitle}</p>
                <p className="text-xs text-slate-500 mb-3 leading-relaxed font-normal">{consultDesc}</p>
                <a
                  href={consultHref}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E3164F] hover:text-[#008BCB] transition-colors group/link"
                >
                  {consultLabel} <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
