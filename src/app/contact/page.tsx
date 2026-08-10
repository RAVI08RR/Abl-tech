import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { LinkedInIcon, InstagramIcon } from '@/components/ui/Icons'
import { Container } from '@/components/ui/Container'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with AB BusinessTech LLP. Tell us about your project and we\'ll respond within 1 business day.',
}

const contactInfo = [
  { icon: Mail, label: 'Email Us', value: 'hello@abbusinesstech.com', href: 'mailto:hello@abbusinesstech.com' },
  { icon: Phone, label: 'Call Us', value: '+91 9876 543 210', href: 'tel:+919876543210' },
  { icon: MapPin, label: 'Visit Us', value: 'Mumbai, Maharashtra, India', href: undefined },
  { icon: Clock, label: 'Working Hours', value: 'Mon – Fri, 9 AM – 7 PM IST', href: undefined },
]

const whyContact = [
  { title: 'Free Initial Consultation', description: 'A no-obligation 45-minute call to understand your project and recommend the best approach.' },
  { title: 'Response in 24 Hours', description: 'Our team responds to every inquiry within one business day — no automated bounces.' },
  { title: 'Senior-Level Engagement', description: 'You\'ll talk to architects and consultants from the first call — not just sales.' },
  { title: 'NDA Available', description: 'We sign NDAs before any detailed technical discussions, always.' },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0D0D1A] to-[#111827] py-24 lg:py-32">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Contact Us</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Let&apos;s Build Something<span className="text-[#E3164F]"> Great Together</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Tell us about your project. Our team will review your message and respond within one business day.
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form - wider */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-black text-[#111111] mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Info panel */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact details */}
              <div>
                <h2 className="text-lg font-black text-[#111111] mb-6">Contact Information</h2>
                <ul className="space-y-4">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#E3164F]/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-[#E3164F]" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="text-sm font-medium text-[#111111] hover:text-[#E3164F] transition-colors">{value}</a>
                        ) : (
                          <p className="text-sm font-medium text-[#111111]">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Social */}
                <div className="mt-6 flex items-center gap-3">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#E3164F] hover:text-white flex items-center justify-center transition-all duration-200" aria-label="LinkedIn">
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#E3164F] hover:text-white flex items-center justify-center transition-all duration-200" aria-label="Instagram">
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Why contact us */}
              <div>
                <h2 className="text-lg font-black text-[#111111] mb-6">What to Expect</h2>
                <ul className="space-y-4">
                  {whyContact.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#E3164F] flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-white text-[10px] font-black">✓</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#111111] mb-0.5">{item.title}</p>
                        <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#E3164F]/5 to-[#008BCB]/5 border border-gray-100">
                <p className="text-sm font-semibold text-[#111111] mb-1">Need something faster?</p>
                <p className="text-xs text-gray-500 mb-3">For urgent inquiries, call us directly or book a consultation.</p>
                <a
                  href="/contact/book-consultation"
                  className="inline-flex items-center text-sm font-semibold text-[#E3164F] hover:underline"
                >
                  Book a Free Consultation →
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
