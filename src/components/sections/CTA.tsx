import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

interface CTAProps {
  heading?: string
  description?: string
  buttons?: { label: string; href: string; variant?: string }[]
}

export function CTA({
  heading = "Have a Digital Challenge? Let's Build the Solution.",
  description = "Tell us what you're building, modernizing, or scaling. Our team will help you turn your technology goals into a practical roadmap.",
  buttons = [
    { label: 'Start a Conversation', href: '/contact', variant: 'primary' },
    { label: 'View Our Work', href: '/work', variant: 'outline' },
  ],
}: CTAProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #060D1A 0%, #0A1628 50%, #0D0520 100%)',
      }}
      aria-label="Call to action"
    >
      {/* Subtle background tech grid pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Decorative vector ring shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Glow blurs */}
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(227,22,79,0.12) 0%, transparent 75%)' }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(0,139,203,0.12) 0%, transparent 75%)' }}
        />

        {/* Dynamic circular background highlights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.03]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/[0.02]" />
      </div>

      <Container className="relative z-10 py-24 lg:py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#E3164F] animate-pulse" aria-hidden="true" />
          <span className="text-[11px] font-bold text-gray-300 uppercase tracking-widest leading-none">
            Let&apos;s Build Together
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight max-w-4xl mx-auto mb-6 text-balance font-display">
          {heading.split('?')[0]}
          {heading.includes('?') && (
            <>
              <span
                style={{
                  background: 'linear-gradient(135deg, #E3164F 0%, #FF6B9D 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                ?
              </span>{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #E3164F 0%, #008BCB 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {heading.split('?').slice(1).join('?')}
              </span>
            </>
          )}
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          {description}
        </p>

        {/* Interactive Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {buttons.map((btn, i) => (
            <Button
              key={btn.href}
              href={btn.href}
              variant={i === 0 ? 'primary' : 'outline'}
              size="lg"
              className={i === 1 ? 'border-white/20 text-white hover:bg-white hover:text-[#060D1A]' : ''}
              style={
                i === 0
                  ? {
                      background: 'linear-gradient(135deg, #E3164F 0%, #FF3D6E 100%)',
                      border: 'none',
                      boxShadow: '0 8px 30px rgba(227,22,79,0.35)',
                    }
                  : {}
              }
            >
              {btn.label}
              {i === 0 && <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />}
            </Button>
          ))}
        </div>

        {/* Trust Note */}
        <p className="mt-12 text-xs text-gray-500 font-medium">
          Join 100+ businesses that have transformed their technology with ABL BusinessTech
        </p>
      </Container>
    </section>
  )
}
