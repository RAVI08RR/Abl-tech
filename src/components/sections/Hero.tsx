'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRight, Code, Cloud, Paintbrush, HelpCircle, Shield, Clock, Users, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'

interface HeroProps {
  headline?: string
  subheadline?: string
  buttons?: { label: string; href: string }[]
}

export function Hero({ headline, subheadline, buttons }: HeroProps) {
  return (
    <section
      className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#F7F8FA] pt-2 pb-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      }}
      aria-label="Hero section"
    >
      {/* Soft brand glow overlays to blend the background image seamlessly */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#E3164F]/3 via-transparent to-[#008BCB]/3 mix-blend-multiply pointer-events-none z-0" aria-hidden="true" />

      {/* Main Content Overlay */}
      <Container className="relative z-10 flex-1 flex flex-col justify-center items-center py-10 lg:py-14">
        <div className="max-w-3xl text-center flex flex-col items-center">

          {/* Core Services Horizontal Badges Row */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 max-w-2xl animate-fade-in-up">
            {[
              { icon: <Code className="w-4 h-4 text-[#E3164F]" />, label: 'Custom Software' },
              { icon: <Cloud className="w-4 h-4 text-[#008BCB]" />, label: 'Cloud Solutions' },
              { icon: <Paintbrush className="w-4 h-4 text-purple-500" />, label: 'UI/UX Design' },
              { icon: <HelpCircle className="w-4 h-4 text-green-500" />, label: 'IT Consulting' },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200/50 shadow-sm text-xs font-semibold text-gray-700"
              >
                {badge.icon}
                <span>{badge.label}</span>
              </div>
            ))}
          </div>

          {/* Heavy Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7.5xl font-bold tracking-tight leading-[1.05] text-[#111111] mb-6 font-display animate-fade-in-up">
            {!headline ? (
              <>
                Software Solutions <br className="hidden sm:inline" />
                <span className="text-[#E3164F]">that Power Growth</span>
              </>
            ) : headline.includes('|') ? (
              <>
                {headline.split('|')[0]} <br className="hidden sm:inline" />
                <span className="text-[#E3164F]">{headline.split('|')[1]}</span>
              </>
            ) : (
              headline
            )}
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed text-pretty font-sans animate-fade-in-up">
            {subheadline || "We build scalable, secure, and innovative software solutions that help ambitious businesses streamline operations and achieve more."}
          </p>

          {/* CTA Button */}
          <div className="relative animate-fade-in-up">
            <a
              href={buttons?.[0]?.href || "/services"}
              className="group relative inline-flex items-center gap-6 pl-8 pr-12 py-4 rounded-full bg-[#111111] text-white font-bold text-sm hover:bg-[#222222] shadow-xl hover:shadow-2xl transition-all duration-200"
            >
              <span>{buttons?.[0]?.label || "Explore Solutions"}</span>
              {/* Highlight Badge Shape */}
              <div className="absolute right-0 top-0 bottom-0 w-10 bg-[#E3164F] rounded-r-full flex items-center justify-center group-hover:bg-[#FF3D6E] transition-colors">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </a>
          </div>
        </div>
      </Container>

      {/* ==========================================
          BOTTOM BENEFITS ROW
          ========================================== */}
      <div className="relative z-10 w-full bg-white/85 backdrop-blur-md border-t border-gray-200/50 py-5 shadow-sm mt-auto">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            {[
              { icon: <Clock className="w-5 h-5 text-[#E3164F]" />, title: 'Agile & Transparent Process' },
              { icon: <ArrowUpRight className="w-5 h-5 text-[#008BCB]" />, title: 'On-time Delivery Assurance' },
              { icon: <Shield className="w-5 h-5 text-purple-500" />, title: 'Secure & Scalable Architecture' },
              { icon: <Users className="w-5 h-5 text-green-500" />, title: 'Dedicated Expert Team' },
            ].map((benefit) => (
              <div key={benefit.title} className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200/60 shadow-sm flex items-center justify-center shrink-0">
                  {benefit.icon}
                </div>
                <p className="text-xs font-bold text-gray-900 text-center sm:text-left leading-snug">
                  {benefit.title}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  )
}
