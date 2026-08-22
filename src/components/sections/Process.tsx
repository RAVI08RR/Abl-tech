'use client'

import { useRef } from 'react'
import {
  Search,
  FileText,
  Palette,
  Hammer,
  CheckCircle2,
  Rocket,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Clock,
  Zap,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import type { ProcessStep } from '@/types'

interface ProcessProps {
  heading?: string
  description?: string
  steps?: ProcessStep[]
}

const stepIcons: Record<string, React.ElementType> = {
  Discover: Search,
  Define: FileText,
  Design: Palette,
  Build: Hammer,
  Test: CheckCircle2,
  Launch: Rocket,
  Scale: TrendingUp,
}

const stepAccents = [
  { from: '#E3164F', to: '#FF6B9D' },
  { from: '#008BCB', to: '#00C4FF' },
  { from: '#7C3AED', to: '#A78BFA' },
  { from: '#059669', to: '#34D399' },
  { from: '#D97706', to: '#FCD34D' },
  { from: '#E3164F', to: '#008BCB' },
  { from: '#0891B2', to: '#67E8F9' },
]

const defaultSteps: ProcessStep[] = [
  { _id: '1', step: 1, title: 'Discover', description: 'Deep-dive into your business, users, and technical landscape to uncover real constraints and opportunities.', icon: '🔍', duration: '1-2 weeks', deliverables: ['Business audit', 'Stakeholder interviews', 'Technical assessment'] },
  { _id: '2', step: 2, title: 'Define', description: 'Translate discovery insights into a clear product vision, technical roadmap, and success metrics.', icon: '📋', duration: '1 week', deliverables: ['Product roadmap', 'Technical specification', 'Success KPIs'] },
  { _id: '3', step: 3, title: 'Design', description: 'Create intuitive user experiences and scalable architecture blueprints before writing a single line of code.', icon: '🎨', duration: '2-3 weeks', deliverables: ['UX wireframes', 'UI design system', 'Architecture diagrams'] },
  { _id: '4', step: 4, title: 'Build', description: 'Agile engineering sprints with weekly demos, continuous integration, and transparent progress tracking.', icon: '⚒️', duration: 'Varies', deliverables: ['Working software', 'Sprint demos', 'Code reviews'] },
  { _id: '5', step: 5, title: 'Test', description: 'Rigorous QA, performance testing, security audits, and UAT to ensure enterprise-grade quality.', icon: '✅', duration: '1-2 weeks', deliverables: ['QA report', 'Performance benchmarks', 'Security audit'] },
  { _id: '6', step: 6, title: 'Launch', description: 'Controlled rollout with monitoring, rollout verification, and stakeholder communication.', icon: '🚀', duration: '1 week', deliverables: ['Production deployment', 'Launch monitoring', 'Documentation'] },
  { _id: '7', step: 7, title: 'Scale', description: 'Post-launch optimization, performance monitoring, and ongoing feature development as you grow.', icon: '📈', duration: 'Ongoing', deliverables: ['Performance reports', 'Feature updates', 'Growth strategy'] },
]

export function Process({ heading, description, steps }: ProcessProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const displaySteps = steps?.length ? steps : defaultSteps
  const displayHeading = heading || 'From Idea to Impact'
  const displayDescription = description || 'A proven, structured engineering timeline that de-risks complexity and guarantees enterprise quality.'

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative section-padding bg-white overflow-hidden" aria-label="Our process">
      {/* Subtle background dot grid pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-[#E3164F]/5 via-[#008BCB]/5 to-transparent rounded-full blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Header & Navigation */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            {/* Eyebrow */}
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
                Timeline Workflow
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-[#111111]">
              {displayHeading}
            </h2>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">{displayDescription}</p>
          </div>

          {/* Navigation Scroll Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm hover:border-[#E3164F] flex items-center justify-center transition-all duration-200 cursor-pointer"
              aria-label="Scroll left timeline"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 hover:text-[#E3164F]" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm hover:border-[#E3164F] flex items-center justify-center transition-all duration-200 cursor-pointer"
              aria-label="Scroll right timeline"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 hover:text-[#E3164F]" />
            </button>
          </div>
        </div>

        {/* Horizontal Timeline Scroll Container */}
        <div className="relative pt-2">
          {/* Connecting Line */}
          <div
            className="absolute top-[44px] left-8 right-8 h-0.5 rounded-full z-0 hidden md:block"
            style={{
              background: 'linear-gradient(90deg, #E3164F 0%, #008BCB 50%, #E3164F 100%)',
              opacity: 0.25,
            }}
            aria-hidden="true"
          />

          {/* Scroll Track */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-2 px-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displaySteps.map((step, index) => {
              const IconComponent = stepIcons[step.title] || Zap
              const accent = stepAccents[index % stepAccents.length]

              return (
                <div
                  key={step._id || index}
                  className="snap-start shrink-0 w-[300px] sm:w-[325px] flex flex-col group"
                >
                  {/* Timeline Circle Node & Stage Label */}
                  <div className="relative z-10 flex items-center gap-3 mb-6">
                    {/* Circle Node wrapper */}
                    <div
                      className="w-14 h-14 rounded-2xl bg-white border-2 flex items-center justify-center transition-all duration-300 transform group-hover:scale-115 shrink-0"
                      style={{
                        borderColor: 'rgba(0,0,0,0.08)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = accent.from
                        e.currentTarget.style.boxShadow = `0 10px 25px ${accent.from}25`
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.04)'
                      }}
                    >
                      <IconComponent
                        className="w-6 h-6 transition-colors duration-300"
                        style={{ color: accent.from }}
                      />
                    </div>

                    {/* Solid White Badge to cover background timeline line */}
                    <div className="flex flex-col justify-center bg-white px-3 py-1.5 rounded-xl border border-gray-100 shadow-sm z-10">
                      <span
                        className="text-[11px] font-black tracking-wider uppercase leading-none mb-1"
                        style={{ color: accent.from }}
                      >
                        Phase {String(step.step || index + 1).padStart(2, '0')}
                      </span>
                      {step.duration && (
                        <span className="text-[10px] font-bold text-gray-500 flex items-center gap-1 leading-none">
                          <Clock className="w-3 h-3 text-[#008BCB]" />
                          {step.duration}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content wrapper */}
                  <div
                    className="flex-1 bg-white rounded-3xl p-6 overflow-hidden transition-all duration-300 flex flex-col justify-between"
                    style={{
                      border: '1px solid rgba(0,0,0,0.07)',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget
                      el.style.borderColor = `${accent.from}30`
                      el.style.boxShadow = `0 20px 40px ${accent.from}15, 0 4px 12px rgba(0,0,0,0.05)`
                      el.style.transform = 'translateY(-4px)'
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget
                      el.style.borderColor = 'rgba(0,0,0,0.07)'
                      el.style.boxShadow = '0 2px 10px rgba(0,0,0,0.03)'
                      el.style.transform = 'translateY(0)'
                    }}
                  >
                    {/* Top gradient highlight inside card */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }}
                      aria-hidden="true"
                    />

                    <div>
                      {/* Step Title */}
                      <h3 className="text-lg font-bold text-[#111111] mb-2 group-hover:text-[#E3164F] transition-colors">
                        {step.title}
                      </h3>

                      {/* Body Description */}
                      <p className="text-sm text-gray-500 leading-relaxed mb-5">
                        {step.description}
                      </p>
                    </div>

                    {/* Deliverables Checklist */}
                    {step.deliverables && step.deliverables.length > 0 && (
                      <div className="border-t border-gray-100 pt-4 space-y-2">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Key Deliverables:</p>
                        {step.deliverables.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ background: accent.from }}
                            />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
