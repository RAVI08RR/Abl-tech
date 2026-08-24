'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Clock, User } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const defaultPosts = [
  { _id: '1', title: 'How AI is Reshaping Enterprise Software Development in 2025', slug: { current: 'ai-reshaping-enterprise-software-2025' }, excerpt: 'AI is no longer a futuristic concept — it\'s actively changing how enterprise software is built, deployed, and maintained. Here\'s what senior engineers need to know.', publishedAt: '2025-07-15T00:00:00Z', readingTime: 8, featured: true, category: { _id: 'c1', title: 'AI & Technology', slug: { current: 'ai-technology' } }, author: { name: 'Ravi Soni', designation: 'CTO' } },
  { _id: '2', title: 'Microservices vs Monolith: A Practical Guide for 2025', slug: { current: 'microservices-vs-monolith' }, excerpt: 'The monolith vs microservices debate is nuanced. The right answer depends on your team size, traffic patterns, and growth trajectory.', publishedAt: '2025-07-01T00:00:00Z', readingTime: 6, featured: true, category: { _id: 'c2', title: 'Engineering', slug: { current: 'engineering' } }, author: { name: 'Priya Sharma', designation: 'Principal Engineer' } },
  { _id: '3', title: 'Digital Transformation Failures: 5 Preventable Mistakes', slug: { current: 'digital-transformation-failures' }, excerpt: 'Most digital transformation initiatives fail — not because of bad technology, but because of preventable strategic and organizational mistakes.', publishedAt: '2025-06-20T00:00:00Z', readingTime: 7, featured: false, category: { _id: 'c3', title: 'Strategy', slug: { current: 'strategy' } }, author: { name: 'Arun Mehta', designation: 'Transformation Lead' } },
  { _id: '4', title: 'Building HIPAA-Compliant Healthcare Platforms on AWS', slug: { current: 'hipaa-compliant-aws' }, excerpt: 'A step-by-step guide to architecting cloud infrastructure that meets healthcare data compliance requirements without sacrificing performance.', publishedAt: '2025-06-05T00:00:00Z', readingTime: 10, featured: false, category: { _id: 'c2', title: 'Engineering', slug: { current: 'engineering' } }, author: { name: 'Ravi Soni', designation: 'CTO' } },
  { _id: '5', title: 'React Native vs Flutter: Which to Choose in 2025?', slug: { current: 'react-native-vs-flutter-2025' }, excerpt: 'Both frameworks have matured significantly. Here\'s an honest comparison based on our experience building 50+ production apps with both.', publishedAt: '2025-05-20T00:00:00Z', readingTime: 9, featured: false, category: { _id: 'c2', title: 'Engineering', slug: { current: 'engineering' } }, author: { name: 'Kiran Patel', designation: 'Mobile Lead' } },
  { _id: '6', title: 'The Real Cost of Technical Debt in 2025', slug: { current: 'cost-of-technical-debt' }, excerpt: 'Technical debt isn\'t just a development problem — it\'s a business risk. Here\'s how to quantify it and build the case for addressing it.', publishedAt: '2025-05-05T00:00:00Z', readingTime: 6, featured: false, category: { _id: 'c3', title: 'Strategy', slug: { current: 'strategy' } }, author: { name: 'Priya Sharma', designation: 'Principal Engineer' } },
]

const cardAccents = [
  { from: '#E3164F', to: '#FF6B9D' },
  { from: '#008BCB', to: '#00C4FF' },
  { from: '#7C3AED', to: '#A78BFA' },
  { from: '#059669', to: '#34D399' },
  { from: '#D97706', to: '#FCD34D' },
  { from: '#0891B2', to: '#67E8F9' },
]

export default function InsightsPage() {
  const displayPosts = defaultPosts

  const eyebrow = 'Insights'
  const headline = 'Technology Thinking From Our Team'
  const subheadline = 'Practical guides, engineering deep-dives, and strategic perspectives from the ABL BusinessTech team.'

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #060D1A 0%, #0A1628 50%, #0D0520 100%)' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(0,139,203,0.12) 0%, transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(227,22,79,0.10) 0%, transparent 70%)' }}
        />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#E3164F]" />
              <span
                className="text-xs font-bold tracking-[0.18em] uppercase"
                style={{
                  background: 'linear-gradient(90deg, #E3164F, #008BCB)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {eyebrow}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-6">
              {headline}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              {subheadline}
            </p>
          </div>
        </Container>
      </section>

      {/* Grid of articles */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.02) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayPosts.map((post: any, index: number) => {
              const accent = cardAccents[index % cardAccents.length]

              return (
                <article key={post._id} className="group flex flex-col h-full">
                  <Link
                    href={`/insights/${post.slug.current}`}
                    className="flex flex-col h-full bg-white rounded-3xl overflow-hidden transition-all duration-300 relative"
                    style={{
                      border: '1px solid rgba(0,0,0,0.07)',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget
                      el.style.borderColor = `${accent.from}30`
                      el.style.boxShadow = `0 20px 45px ${accent.from}15, 0 4px 12px rgba(0,0,0,0.05)`
                      el.style.transform = 'translateY(-6px)'
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget
                      el.style.borderColor = 'rgba(0,0,0,0.07)'
                      el.style.boxShadow = '0 2px 10px rgba(0,0,0,0.03)'
                      el.style.transform = 'translateY(0)'
                    }}
                    aria-label={`Read: ${post.title}`}
                  >
                    {/* Top border color glint */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px] z-20"
                      style={{ background: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }}
                      aria-hidden="true"
                    />

                    {/* Image Area */}
                    <div className="aspect-[16/10] relative bg-gray-50 overflow-hidden shrink-0 border-b border-gray-100">
                      {post.featuredImage?.asset?.url ? (
                        <Image
                          src={post.featuredImage.asset.url}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center relative overflow-hidden"
                          style={{
                            background: `linear-gradient(135deg, ${accent.from}10 0%, ${accent.to}20 100%)`,
                          }}
                          aria-hidden="true"
                        >
                          <div
                            className="absolute w-32 h-32 rounded-full blur-2xl"
                            style={{
                              background: `radial-gradient(circle, ${accent.from}30 0%, transparent 70%)`,
                            }}
                          />
                          <span className="text-4xl font-black relative z-10" style={{ color: accent.from }}>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content Area */}
                    <div className="p-6 flex flex-col justify-between flex-1 relative z-10">
                      <div>
                        {post.category && (
                          <span
                            className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase mb-4"
                            style={{
                              background: `${accent.from}15`,
                              color: accent.from,
                            }}
                          >
                            {post.category.title}
                          </span>
                        )}

                        <h2 className="text-base font-bold text-[#111111] leading-snug mb-3 group-hover:text-[#E3164F] transition-colors duration-200">
                          {post.title}
                        </h2>

                        {post.excerpt && (
                          <p className="text-xs text-gray-500 leading-relaxed font-medium line-clamp-2 mb-5">
                            {post.excerpt}
                          </p>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-50 pt-4 mt-auto">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                            <User className="w-3.5 h-3.5 text-gray-500" />
                          </div>
                          <span className="font-bold text-gray-600">{post.author?.name}</span>
                        </div>
                        <div className="flex items-center gap-1 font-bold">
                          <Clock className="w-3.5 h-3.5 text-[#008BCB]" />
                          <span>{post.readingTime} min read</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              )
            })}
          </div>
        </Container>
      </section>
    </>
  )
}
