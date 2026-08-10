'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
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
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, next])

  const testimonial = displayTestimonials[current]

  return (
    <section className="section-padding bg-white" aria-label="Client testimonials">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-14">
          <SectionHeading
            eyebrow="Client Stories"
            title={displayHeading}
          />

          {/* Nav arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => { prev(); setIsAutoPlaying(false) }}
              className="w-11 h-11 rounded-full border-2 border-gray-200 hover:border-[#E3164F] hover:text-[#E3164F] flex items-center justify-center transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              onClick={() => { next(); setIsAutoPlaying(false) }}
              className="w-11 h-11 rounded-full border-2 border-gray-200 hover:border-[#E3164F] hover:text-[#E3164F] flex items-center justify-center transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Main testimonial */}
          <div className="lg:col-span-3">
            <div
              className="testimonial-card relative bg-[#F7F8FA] rounded-3xl p-10 border border-gray-100"
              role="article"
              aria-label={`Testimonial from ${testimonial.clientName}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6" aria-label={`Rating: ${testimonial.rating} out of 5`}>
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                ))}
              </div>

              <blockquote>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  &ldquo;{testimonial.testimonial}&rdquo;
                </p>
              </blockquote>

              <footer className="mt-8 flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E3164F] to-[#008BCB] flex items-center justify-center text-white font-bold text-lg overflow-hidden shrink-0">
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
                  <p className="font-bold text-[#111111]">{testimonial.clientName}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.designation}{testimonial.company && `, ${testimonial.company}`}
                  </p>
                </div>
              </footer>
            </div>

            {/* Pagination dots */}
            <div className="flex items-center justify-center gap-2 mt-6" role="tablist" aria-label="Testimonial navigation">
              {displayTestimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => { setCurrent(i); setIsAutoPlaying(false) }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-[#E3164F]' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Other testimonials preview */}
          <div className="lg:col-span-2 space-y-4">
            {displayTestimonials
              .filter((_, i) => i !== current)
              .slice(0, 2)
              .map((t) => (
                <button
                  key={t._id}
                  onClick={() => { setCurrent(displayTestimonials.indexOf(t)); setIsAutoPlaying(false) }}
                  className="w-full text-left p-5 rounded-2xl bg-[#F7F8FA] border border-gray-100 hover:border-[#E3164F]/20 hover:shadow-md transition-all duration-200 group"
                  aria-label={`Read testimonial from ${t.clientName}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 group-hover:from-[#E3164F]/20 group-hover:to-[#008BCB]/20 flex items-center justify-center text-sm font-bold text-gray-600 transition-all duration-200">
                      {t.clientName[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#111111]">{t.clientName}</p>
                      <p className="text-xs text-gray-400">{t.company}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    &ldquo;{t.testimonial}&rdquo;
                  </p>
                </button>
              ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
