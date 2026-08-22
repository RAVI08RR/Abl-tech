import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react'
import { LinkedInIcon, InstagramIcon } from '@/components/ui/Icons'
import { Container } from '@/components/ui/Container'
import { getContactPage, getSiteSettings } from '@/sanity/lib/queries'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with AB BusinessTech LLP. Tell us about your project and we\'ll respond within 1 business day.',
}

const defaultContactInfo = [
  { icon: Mail, label: 'Email Us', value: 'hello@abbusinesstech.com', href: 'mailto:hello@abbusinesstech.com' },
  { icon: Phone, label: 'Call Us', value: '+91 9876 543 210', href: 'tel:+919876543210' },
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
  } catch {}

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
          <div className="max-w-2xl">
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

            <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.08] tracking-tight mb-6">
              {headline}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              {subheadline}
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] blur-[130px] opacity-35"
          style={{ background: 'radial-gradient(circle, rgba(0,139,203,0.06) 0%, transparent 70%)' }}
        />
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form Column */}
            <div className="lg:col-span-3">
              <div className="bg-[#F9FAFB] rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-black text-[#111111] mb-6 tracking-tight">{formHeading}</h2>
                <ContactForm />
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Information */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100/80 shadow-xs">
                <h2 className="text-lg font-black text-[#111111] mb-6 tracking-tight">{infoHeading}</h2>
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
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="text-sm font-bold text-[#111111] hover:text-[#E3164F] transition-colors">{value}</a>
                        ) : (
                          <p className="text-sm font-semibold text-[#111111]">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Social media connections */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2">Connect:</span>
                  <a
                    href={siteSettings?.socialLinks?.linkedin || 'https://linkedin.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 hover:border-[#E3164F] hover:bg-[#E3164F]/5 flex items-center justify-center transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon className="w-4 h-4 text-gray-500 hover:text-[#E3164F]" />
                  </a>
                  <a
                    href={siteSettings?.socialLinks?.instagram || 'https://instagram.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 hover:border-[#E3164F] hover:bg-[#E3164F]/5 flex items-center justify-center transition-all duration-200"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4 text-gray-500 hover:text-[#E3164F]" />
                  </a>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100/80 shadow-xs">
                <h2 className="text-lg font-black text-[#111111] mb-6 tracking-tight">{expectHeading}</h2>
                <ul className="space-y-5">
                  {expectations.map((item: { title: string; description: string }) => (
                    <li key={item.title} className="flex gap-4">
                      <div className="w-5 h-5 rounded-full bg-[#059669]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#111111] mb-0.5 leading-snug">{item.title}</p>
                        <p className="text-xs text-gray-500 leading-relaxed font-medium">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consultation card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-[#E3164F]/5 to-[#008BCB]/5 border border-[#008BCB]/10">
                <p className="text-sm font-bold text-[#111111] mb-1">{consultTitle}</p>
                <p className="text-xs text-gray-500 mb-3 leading-relaxed font-medium">{consultDesc}</p>
                <a
                  href={consultHref}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E3164F] hover:text-[#008BCB] transition-colors"
                >
                  {consultLabel} <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
