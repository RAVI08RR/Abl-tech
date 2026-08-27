'use client'

import { useState } from 'react'
import {
  Search,
  FileText,
  Palette,
  Hammer,
  Rocket,
  ChevronRight,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/MotionSection'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const steps = [
  {
    id: 1,
    title: 'Discovery',
    description: 'Understand goals, users, requirements, and business challenges.',
    icon: Search,
    color: '#E3164F'
  },
  {
    id: 2,
    title: 'Strategy & Planning',
    description: 'Define architecture, scope, technology, timelines, and delivery strategy.',
    icon: FileText,
    color: '#9F2A9B'
  },
  {
    id: 3,
    title: 'Design & Prototype',
    description: 'Transform ideas into intuitive experiences, user flows, and validated prototypes.',
    icon: Palette,
    color: '#5C3EE7'
  },
  {
    id: 4,
    title: 'Engineering',
    description: 'Build secure, scalable, high-performance digital solutions.',
    icon: Hammer,
    color: '#1877F2'
  },
  {
    id: 5,
    title: 'Launch & Scale',
    description: 'Deploy, optimize, monitor, and continuously improve the product.',
    icon: Rocket,
    color: '#05A7D4'
  },
]

export function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(0)

  return (
    <section className="relative w-full overflow-hidden bg-[#FAFBFC]" aria-label="Timeline Workflow">
      {/* ---------------------------------------------------- */}
      {/* 1. Abstract Background Graphics (CSS + SVG) */}
      {/* ---------------------------------------------------- */}

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Warm pink/red gradient from top-left */}
      <div
        className="absolute -top-[73.7%] -left-[10.8%] w-[60%] h-[70%] rounded-full blur-[120px] opacity-[0.15] z-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #E3164F 0%, #FF6B9D 100%)' }}
      />

      {/* Modern blue/cyan gradient from bottom-right */}
      <div
        className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[70%] rounded-full blur-[120px] opacity-[0.15] z-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #008BCB 0%, #05A7D4 100%)' }}
      />

      {/* Decorative Network SVG Lines */}




      {/* ---------------------------------------------------- */}
      {/* 3. Desktop Curved Timeline Layout (Image Based) */}
      {/* ---------------------------------------------------- */}
      <div className="hidden lg:block relative w-full aspect-[16/9] max-h-[800px] mt-10 overflow-hidden shadow-xl">
        <Container className="relative z-10">
          {/* ---------------------------------------------------- */}
          {/* 2. Header Area */}
          {/* ---------------------------------------------------- */}
          <FadeUp className="max-w-2xl mx-auto text-center mt-10 mb-24 relative z-20">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6" style={{ background: 'linear-gradient(90deg, transparent, #E3164F)' }} />
              <span className="text-xs font-bold tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#E3164F] to-[#05A7D4]">
                Timeline Workflow
              </span>
              <span className="h-px w-6" style={{ background: 'linear-gradient(270deg, transparent, #05A7D4)' }} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111111] mb-6">
              From Idea to Impact
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed text-balance">
              A proven, structured engineering timeline that de-risks complexity and guarantees enterprise quality.
            </p>
          </FadeUp>
        </Container>


        {/* Background Image */}
        <img
          src="/timeline-bg.png"
          alt="Timeline Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Interactive Nodes over the image */}
        {steps.map((step, index) => {
          const positions = [
            // Node 1: Card placed above
            { left: '10.9%', top: '73.7%', cardPos: 'top' },
            // Node 2: Card placed above
            { left: '28.8%', top: '65.5%', cardPos: 'top' },
            // Node 3: Card placed below
            { left: '47.9%', top: '56%', cardPos: 'bottom' },
            // Node 4: Card placed below
            { left: '66.3%', top: '46.8%', cardPos: 'bottom' },
            // Node 5: Card placed below
            { left: '85.9%', top: '34%', cardPos: 'bottom' },
          ]
          const pos = positions[index]
          const Icon = step.icon
          const isActive = activeStep === index

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              className="absolute flex flex-col items-center group cursor-pointer z-20"
              style={{
                left: pos.left,
                top: pos.top,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseEnter={() => setActiveStep(index)}
            >

              {/* Invisible hover target to make it easier to hover over the node area */}
              <div className="absolute inset-0 w-32 h-32 -left-12 -top-12 bg-transparent z-40 rounded-full" />

              {/* Main Large Milestone Node */}
              <div
                className={cn(
                  "relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 z-10",
                  isActive ? "scale-110" : "scale-100 hover:scale-105"
                )}
              >
                <Icon className={cn(
                  "w-6 h-6 transition-all duration-300 drop-shadow-md",
                  isActive ? "text-white scale-110" : "text-white/80 opacity-0 group-hover:opacity-100"
                )} />

                {/* Glowing pulse effect when active */}
                {isActive && (
                  <div className="absolute inset-0 rounded-full animate-ping opacity-40 border-2" style={{ borderColor: step.color }} />
                )}
                {/* Outer selection ring */}
                {isActive && (
                  <div className="absolute -inset-2 rounded-full border-2 border-dashed opacity-50" style={{ borderColor: step.color }} />
                )}
              </div>

              {/* Content Card */}
              <div
                className={cn(
                  "absolute w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-5 border transition-all duration-500 z-30 pointer-events-none",
                  pos.cardPos === 'top' ? "bottom-[calc(100%+1.5rem)]" : "top-[calc(100%+1.5rem)]",
                  isActive ? "opacity-100 translate-y-0" : "opacity-0",
                  pos.cardPos === 'top' && !isActive ? "translate-y-4" : "",
                  pos.cardPos === 'bottom' && !isActive ? "-translate-y-4" : ""
                )}
                style={{ borderColor: `${step.color}40` }}
              >
                <span className="text-[10px] font-black tracking-widest uppercase mb-1 block" style={{ color: step.color }}>
                  Phase 0{index + 1}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

      <Container className="relative z-10">

        {/* ---------------------------------------------------- */}
        {/* 4. Mobile Vertical Timeline Layout */}
        {/* ---------------------------------------------------- */}
        <div className="block lg:hidden relative mt-8">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#E3164F] via-[#7C3AED] to-[#05A7D4] opacity-30" />

          <StaggerContainer className="flex flex-col gap-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <StaggerItem key={step.id} className="relative flex gap-6 z-10">
                  {/* Milestone Node */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 bg-white shadow-lg border-[3px] z-10 transition-transform duration-300 hover:scale-110"
                    style={{ borderColor: step.color }}
                  >
                    <Icon className="w-5 h-5" style={{ color: step.color }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-6 pt-5">
                    <span className="text-[10px] font-black tracking-widest uppercase mb-1 block" style={{ color: step.color }}>
                      Phase 0{index + 1}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>

      </Container>
    </section>
  )
}
