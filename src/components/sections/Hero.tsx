'use client'

import React from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Code, Cloud, Paintbrush, HelpCircle, Shield, Clock, Users, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'

interface HeroProps {
  headline?: string
  subheadline?: string
  buttons?: { label: string; href: string }[]
}

// Split a headline string into words for stagger animation
function splitWords(text: string) {
  return text.split(/\s+/).filter(Boolean)
}

export function Hero({ headline, subheadline, buttons }: HeroProps) {
  const shouldReduce = useReducedMotion()

  const defaultHeadlinePlain = 'Turn AI Hype into Hard Enterprise ROI.'
  const headlineText = headline
    ? (headline.includes('|') ? headline.replace('|', '') : headline)
    : defaultHeadlinePlain

  // Variants for container stagger
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
    }),
  }

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
      {/* Animated gradient blob background */}
      {!shouldReduce && (
        <>
          <div className="hero-blob hero-blob-1" aria-hidden="true" />
          <div className="hero-blob hero-blob-2" aria-hidden="true" />
          <div className="hero-blob hero-blob-3" aria-hidden="true" />
        </>
      )}

      {/* Soft brand glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#ED396D]/3 via-transparent to-[#05A7D4]/3 mix-blend-multiply pointer-events-none z-0" aria-hidden="true" />

      {/* Main Content */}
      <Container className="relative z-10 flex-1 flex flex-col justify-center items-center py-10 lg:py-14">
        <div className="max-w-3xl text-center flex flex-col items-center">

          {/* Core Services Badges — staggered fade-up */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8 max-w-2xl"
            initial={shouldReduce ? false : 'hidden'}
            animate="visible"
            variants={shouldReduce ? {} : {
              hidden: {},
              visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
            }}
          >
            {[
              { icon: <Code className="w-4 h-4 text-[#ED396D]" />, label: 'AI & Data Engineering' },
              { icon: <Cloud className="w-4 h-4 text-[#05A7D4]" />, label: 'Cloud & DevOps' },
              { icon: <Paintbrush className="w-4 h-4 text-purple-500" />, label: 'UI/UX Design' },
              { icon: <HelpCircle className="w-4 h-4 text-green-500" />, label: 'Staff Augmentation' },
            ].map((badge) => (
              <motion.div
                key={badge.label}
                variants={shouldReduce ? {} : {
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200/50 shadow-sm text-xs font-semibold text-gray-700"
              >
                {badge.icon}
                <span>{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Heavy Headline — staggered word reveal */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-[#111111] mb-6 font-display">
            {shouldReduce ? (
              // Reduced motion: render headline statically
              headline ? (
                headline.includes('|') ? (
                  <>
                    {headline.split('|')[0]}
                    <br className="hidden sm:inline" />
                    <span className="text-[#ED396D]">{headline.split('|')[1]}</span>
                  </>
                ) : headline
              ) : (
                <>
                  Turn AI Hype into <br className="hidden sm:inline" />
                  <span className="text-[#ED396D]">Hard Enterprise ROI.</span>
                </>
              )
            ) : (
              // Animated word-by-word stagger
              <motion.span
                className="inline"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                aria-label={headlineText}
              >
                {(() => {
                  // Split headline handling — mark accent words (after |)
                  if (!headline) {
                    const part1Words = splitWords('Turn AI Hype into')
                    const part2Words = splitWords('Hard Enterprise ROI.')
                    return (
                      <>
                        {part1Words.map((word, i) => (
                          <motion.span key={`p1-${i}`} variants={wordVariants} className="inline-block mr-[0.25em]">
                            {word}
                          </motion.span>
                        ))}
                        <br className="hidden sm:inline" />
                        {part2Words.map((word, i) => (
                          <motion.span key={`p2-${i}`} variants={wordVariants} className="inline-block mr-[0.25em] text-[#ED396D]">
                            {word}
                          </motion.span>
                        ))}
                      </>
                    )
                  }
                  if (headline.includes('|')) {
                    const [part1, part2] = headline.split('|')
                    return (
                      <>
                        {splitWords(part1).map((word, i) => (
                          <motion.span key={`p1-${i}`} variants={wordVariants} className="inline-block mr-[0.25em]">
                            {word}
                          </motion.span>
                        ))}
                        <br className="hidden sm:inline" />
                        {splitWords(part2).map((word, i) => (
                          <motion.span key={`p2-${i}`} variants={wordVariants} className="inline-block mr-[0.25em] text-[#ED396D]">
                            {word}
                          </motion.span>
                        ))}
                      </>
                    )
                  }
                  return splitWords(headline).map((word, i) => (
                    <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em]">
                      {word}
                    </motion.span>
                  ))
                })()}
              </motion.span>
            )}
          </h1>

          {/* Subheadline */}
          <motion.p
            className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed text-pretty font-sans"
            initial={shouldReduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {subheadline || "Stop getting stuck in the pilot phase. We engineer production-ready AI agents, automate data pipelines, and deploy custom ML models that solve real operational bottlenecks—securely and at scale."}
          </motion.p>

          {/* CTA Button — magnetic hover + tap feedback */}
          <motion.div
            className="relative"
            initial={shouldReduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <motion.a
              href={buttons?.[0]?.href || "/services"}
              className="group relative inline-flex items-center gap-6 pl-8 pr-12 py-4 rounded-full bg-[#111111] text-white font-bold text-sm shadow-xl"
              whileHover={shouldReduce ? {} : { scale: 1.02, y: -2, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
              whileTap={shouldReduce ? {} : { scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <span>{buttons?.[0]?.label || "Explore Solutions"}</span>
              <div className="absolute right-0 top-0 bottom-0 w-10 bg-[#05A7D4] rounded-r-full flex items-center justify-center group-hover:bg-[#0390B5] transition-colors">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </motion.a>
          </motion.div>
        </div>
      </Container>

      {/* Bottom Benefits Row — staggered fade-in */}
      <motion.div
        className="relative z-10 w-full bg-white/85 backdrop-blur-md border-t border-gray-200/50 py-5 shadow-sm mt-auto"
        initial={shouldReduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Container>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left"
            initial={shouldReduce ? false : 'hidden'}
            animate="visible"
            variants={shouldReduce ? {} : {
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.9 } },
            }}
          >
            {[
              { icon: <Clock className="w-5 h-5 text-[#ED396D]" />, title: 'Top 1% Engineering Talent' },
              { icon: <ArrowUpRight className="w-5 h-5 text-[#05A7D4]" />, title: '40% Faster Time-to-Market' },
              { icon: <Shield className="w-5 h-5 text-[#037C9E]" />, title: 'Enterprise-Grade Security' },
              { icon: <Users className="w-5 h-5 text-[#05A7D4]" />, title: 'Trusted by MasterCard, VISA & More' },
            ].map((benefit) => (
              <motion.div
                key={benefit.title}
                className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start"
                variants={shouldReduce ? {} : {
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200/60 shadow-sm flex items-center justify-center shrink-0">
                  {benefit.icon}
                </div>
                <p className="text-xs font-bold text-gray-900 text-center sm:text-left leading-snug">
                  {benefit.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </motion.div>
    </section>
  )
}
