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
      className="cta-gradient relative py-24 lg:py-32"
      aria-label="Call to action"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-8 left-8 w-40 h-40 rounded-full border border-white/5" />
        <div className="absolute top-8 left-8 w-72 h-72 rounded-full border border-white/5" />
        <div className="absolute bottom-8 right-8 w-40 h-40 rounded-full border border-white/5" />
        <div className="absolute bottom-8 right-8 w-72 h-72 rounded-full border border-white/5" />
      </div>

      <Container className="relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#E3164F] animate-pulse" aria-hidden="true" />
          <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest">
            Let&apos;s Build Together
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight max-w-4xl mx-auto mb-6 text-balance">
          {heading.split('?')[0]}
          {heading.includes('?') && (
            <>
              <span className="text-[#E3164F]">?</span>
              {heading.split('?').slice(1).join('?')}
            </>
          )}
        </h2>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {buttons.map((btn, i) => (
            <Button
              key={btn.href}
              href={btn.href}
              variant={i === 0 ? 'primary' : 'outline'}
              size="lg"
              className={i === 1 ? 'border-white/30 text-white hover:bg-white hover:text-[#111111]' : ''}
            >
              {btn.label}
              {i === 0 && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
            </Button>
          ))}
        </div>

        {/* Social proof */}
        <p className="mt-10 text-xs text-gray-500">
          Join 100+ businesses that have transformed their technology with AB BusinessTech
        </p>
      </Container>
    </section>
  )
}
