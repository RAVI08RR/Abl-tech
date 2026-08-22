'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import type { Testimonial } from '@/types'

interface TestimonialsProps {
  heading?: string
  testimonials?: Testimonial[]
}

const defaultTestimonials: Testimonial[] = [
  {
    _id: '1',
    clientName: 'Sarah Mitchell',
    designation: 'CTO',
    company: 'RetailVision Inc.',
    testimonial: 'AB BusinessTech completely transformed how we operate digitally. Their team didn\'t just build software — they became true partners in our business transformation. The AI platform they delivered has become our biggest competitive advantage.',
    rating: 5,
    featured: true,
    order: 1,
  },
  {
    _id: '2',
    clientName: 'Rajesh Kumar',
    designation: 'VP of Engineering',
    company: 'FinEdge Capital',
    testimonial: 'The quality of engineering and the level of communication throughout our project was exceptional. They delivered a complex banking platform on time and under budget, which is rare in this industry. We\'ve since expanded our engagement significantly.',
    rating: 5,
    featured: true,
    order: 2,
  },
  {
    _id: '3',
    clientName: 'Dr. Amanda Chen',
    designation: 'Chief Digital Officer',
    company: 'HealthBridge Systems',
    testimonial: 'We needed a partner who understood both healthcare compliance and cutting-edge technology. AB BusinessTech delivered exactly that. Their cloud architecture handles millions of patient records with zero downtime — remarkable work.',
    rating: 5,
    featured: true,
    order: 3,
  },
  {
    _id: '4',
    clientName: 'Marcus Osei',
    designation: 'Founder & CEO',
    company: 'LogiTrack Africa',
    testimonial: 'As a startup, we needed a technology partner who could move fast without breaking things. AB BusinessTech gave us enterprise-grade architecture from day one. We scaled from 0 to 50,000 daily users without any performance issues.',
    rating: 5,
    featured: true,
    order: 4,
  },
]

const avatarGrads = [
  ['#E3164F', '#FF6B9D'],
  ['#008BCB', '#00C4FF'],
  ['#7C3AED', '#A78BFA'],
  ['#059669', '#34D399'],
]

export function Testimonials({ heading, testimonials }: TestimonialsProps) {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const displayTestimonials = testimonials?.length ? testimonials : defaultTestimonials
  const displayHeading = heading || 'What Our Clients Say'

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % displayTestimonials.length)
  }, [displayTestimonials.length])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + displayTestimonials.length) % displayTestimonials.length)
  }, [displayTestimonials.length])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(next, 5500)
    return () => clearInterval(timer)
  }, [isAutoPlaying, next])

  const testimonial = displayTestimonials[current]
  const [g1, g2] = avatarGrads[current % avatarGrads.length]

  return (
    <section
      className="relative section-padding overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #060D1A 0%, #0A1628 60%, #0D0520 100%)' }}
      aria-label="Client testimonials"
    >
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      {/* Glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[120px]"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse, rgba(0,139,203,0.08) 0%, transparent 70%)' }}
      />
      {/* Top accent line */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-px"
        aria-hidden="true"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(227,22,79,0.4), rgba(0,139,203,0.4), transparent)' }}
      />

      <Container className="relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, #E3164F)' }} />
              <span
                className="text-xs font-bold tracking-[0.18em] uppercase"
                style={{
                  background: 'linear-gradient(90deg, #E3164F, #008BCB)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Client Stories
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-white">
              {displayHeading}
            </h2>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => { prev(); setIsAutoPlaying(false) }}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#E3164F50'; e.currentTarget.style.background = 'rgba(227,22,79,0.12)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-white" aria-hidden="true" />
            </button>
            <button
              onClick={() => { next(); setIsAutoPlaying(false) }}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#E3164F50'; e.currentTarget.style.background = 'rgba(227,22,79,0.12)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Main testimonial card */}
          <div className="lg:col-span-3">
            <div
              className="relative rounded-3xl p-8 lg:p-10 transition-all duration-500"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.10)',
                backdropFilter: 'blur(10px)',
              }}
              role="article"
              aria-label={`Testimonial from ${testimonial.clientName}`}
            >
              {/* Large quote icon */}
              <Quote
                className="absolute top-6 right-8 w-16 h-16 opacity-[0.06]"
                style={{ color: '#E3164F' }}
                aria-hidden="true"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-6" aria-label={`Rating: ${testimonial.rating} out of 5`}>
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                ))}
              </div>

              <blockquote>
                <p className="text-lg text-gray-200 leading-relaxed font-medium">
                  &ldquo;{testimonial.testimonial}&rdquo;
                </p>
              </blockquote>

              <footer className="mt-8 flex items-center gap-4">
                <div
                  className="w-13 h-13 rounded-full flex items-center justify-center text-white font-bold text-lg overflow-hidden shrink-0 w-12 h-12"
                  style={{ background: `linear-gradient(135deg, ${g1}, ${g2})` }}
                >
                  {testimonial.photo?.asset?.url ? (
                    <Image
                      src={testimonial.photo.asset.url}
                      alt={testimonial.clientName}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    testimonial.clientName[0]
                  )}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.clientName}</p>
                  <p className="text-sm text-gray-400">
                    {testimonial.designation}{testimonial.company && `, ${testimonial.company}`}
                  </p>
                </div>

                {/* Accent dot in footer */}
                <div
                  className="ml-auto w-2 h-2 rounded-full shrink-0"
                  style={{ background: `linear-gradient(135deg, ${g1}, ${g2})` }}
                  aria-hidden="true"
                />
              </footer>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-6" role="tablist" aria-label="Testimonial navigation">
              {displayTestimonials.map((_, i) => {
                const [dg1] = avatarGrads[i % avatarGrads.length]
                return (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => { setCurrent(i); setIsAutoPlaying(false) }}
                    className="h-2 rounded-full transition-all duration-300 cursor-pointer"
                    style={{
                      width: i === current ? '32px' : '8px',
                      background: i === current ? dg1 : 'rgba(255,255,255,0.2)',
                    }}
                  />
                )
              })}
            </div>
          </div>

          {/* Preview cards */}
          <div className="lg:col-span-2 space-y-4">
            {displayTestimonials
              .filter((_, i) => i !== current)
              .slice(0, 2)
              .map((t) => {
                const idx = displayTestimonials.indexOf(t)
                const [pg1] = avatarGrads[idx % avatarGrads.length]
                return (
                  <button
                    key={t._id}
                    onClick={() => { setCurrent(idx); setIsAutoPlaying(false) }}
                    className="w-full text-left rounded-2xl p-5 transition-all duration-200 cursor-pointer group"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                      e.currentTarget.style.borderColor = `${pg1}30`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                    }}
                    aria-label={`Read testimonial from ${t.clientName}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                        style={{ background: `linear-gradient(135deg, ${pg1}, ${avatarGrads[idx % avatarGrads.length][1]})` }}
                      >
                        {t.clientName[0]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-100">{t.clientName}</p>
                        <p className="text-xs text-gray-500">{t.company}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                      &ldquo;{t.testimonial}&rdquo;
                    </p>
                  </button>
                )
              })}
          </div>
        </div>
      </Container>

      {/* Bottom accent line */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px"
        aria-hidden="true"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,139,203,0.4), rgba(227,22,79,0.4), transparent)' }}
      />
    </section>
  )
}
