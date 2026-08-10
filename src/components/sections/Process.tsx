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
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { ProcessStep } from '@/types'

interface ProcessProps {
  heading?: string
  description?: string
  steps?: ProcessStep[]
}

const stepIcons: Record<string, React.ReactNode> = {
  Discover: <Search className="w-6 h-6 text-[#E3164F]" />,
  Define: <FileText className="w-6 h-6 text-[#008BCB]" />,
  Design: <Palette className="w-6 h-6 text-purple-500" />,
  Build: <Hammer className="w-6 h-6 text-amber-500" />,
  Test: <CheckCircle2 className="w-6 h-6 text-green-500" />,
  Launch: <Rocket className="w-6 h-6 text-[#E3164F]" />,
  Scale: <TrendingUp className="w-6 h-6 text-[#008BCB]" />,
}

const defaultSteps: ProcessStep[] = [
  { _id: '1', step: 1, title: 'Discover', description: 'Deep-dive into your business, users, and technical landscape to uncover real constraints and opportunities.', icon: '🔍', duration: '1-2 weeks', deliverables: ['Business audit', 'Stakeholder interviews', 'Technical assessment'] },
  { _id: '2', step: 2, title: 'Define', description: 'Translate discovery insights into a clear product vision, technical roadmap, and success metrics.', icon: '📋', duration: '1 week', deliverables: ['Product roadmap', 'Technical specification', 'Success KPIs'] },
  { _id: '3', step: 3, title: 'Design', description: 'Create intuitive user experiences and scalable architecture blueprints before writing a single line of code.', icon: '🎨', duration: '2-3 weeks', deliverables: ['UX wireframes', 'UI design system', 'Architecture diagrams'] },
  { _id: '4', step: 4, title: 'Build', description: 'Agile engineering sprints with weekly demos, continuous integration, and transparent progress tracking.', icon: '⚒️', duration: 'Varies', deliverables: ['Working software', 'Sprint demos', 'Code reviews'] },
  { _id: '5', step: 5, title: 'Test', description: 'Rigorous QA, performance testing, security audits, and UAT to ensure enterprise-grade quality.', icon: '✅', duration: '1-2 weeks', deliverables: ['QA report', 'Performance benchmarks', 'Security audit'] },
  { _id: '6', step: 6, title: 'Launch', description: 'Controlled rollout with monitoring, rollback capabilities, and stakeholder communication.', icon: '🚀', duration: '1 week', deliverables: ['Production deployment', 'Launch monitoring', 'Documentation'] },
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
    <section className="section-padding pt-20 bg-gradient-to-b from-[#F8F9FA] via-white to-[#F8F9FA] relative overflow-hidden" aria-label="Our process">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-[#E3164F]/5 via-[#008BCB]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Header & Horizontal Scroll Controls */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pt-4">
          <SectionHeading
            eyebrow="Timeline Workflow"
            title={displayHeading}
            description={displayDescription}
          />

          {/* Navigation Scroll Buttons */}
          <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm hover:border-[#E3164F] hover:text-[#E3164F] flex items-center justify-center transition-all duration-200 cursor-pointer"
              aria-label="Scroll left timeline"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 hover:text-[#E3164F]" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm hover:border-[#E3164F] hover:text-[#E3164F] flex items-center justify-center transition-all duration-200 cursor-pointer"
              aria-label="Scroll right timeline"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 hover:text-[#E3164F]" />
            </button>
          </div>
        </div>

        {/* Horizontal Timeline Scroll Container */}
        <div className="relative pt-2">
          {/* Connecting Line (Positioned behind icon center at top-11) */}
          <div className="absolute top-[44px] left-8 right-8 h-1 bg-gradient-to-r from-[#E3164F] via-[#008BCB] to-[#E3164F] rounded-full z-0 hidden md:block" aria-hidden="true" />

          {/* Scroll Track */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-2 px-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displaySteps.map((step, index) => {
              const icon = stepIcons[step.title] || <Zap className="w-6 h-6 text-[#E3164F]" />

              return (
                <div
                  key={step._id || index}
                  className="snap-start shrink-0 w-[300px] sm:w-[325px] flex flex-col group"
                >
                  {/* Timeline Circle Node & Clean White Badge */}
                  <div className="relative z-10 flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white border-2 border-gray-200 group-hover:border-[#E3164F] shadow-md group-hover:shadow-xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shrink-0">
                      {icon}
                    </div>

                    {/* Badge container with solid white background to cover line */}
                    <div className="flex flex-col justify-center bg-white px-3 py-1.5 rounded-xl border border-gray-200 shadow-sm z-10">
                      <span className="text-[11px] font-black font-mono text-[#E3164F] tracking-wider uppercase leading-none mb-1">
                        PHASE {String(step.step || index + 1).padStart(2, '0')}
                      </span>
                      {step.duration && (
                        <span className="text-[10px] font-bold text-[#008BCB] flex items-center gap-1 leading-none">
                          <Clock className="w-3 h-3" />
                          {step.duration}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs group-hover:shadow-xl group-hover:border-[#E3164F]/30 transition-all duration-300 flex flex-col justify-between">
                    <div>
                      {/* Step Title */}
                      <h3 className="text-lg font-bold text-[#111111] mb-2 group-hover:text-[#E3164F] transition-colors font-display">
                        {step.title}
                      </h3>

                      {/* Body Description */}
                      <p className="text-sm text-gray-600 leading-relaxed font-sans mb-5">
                        {step.description}
                      </p>
                    </div>

                    {/* Deliverables Checklist */}
                    {step.deliverables && step.deliverables.length > 0 && (
                      <div className="border-t border-gray-100 pt-4 space-y-2">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Key Deliverables:</p>
                        {step.deliverables.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-medium text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E3164F] shrink-0" />
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
