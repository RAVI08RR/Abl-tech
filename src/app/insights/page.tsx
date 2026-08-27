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
        className="relative py-28 lg:py-36 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#FFFFFF] to-[#F1F5F9]/30 border-b border-slate-200/50"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#0b1220_1px,transparent_1px),linear-gradient(to_bottom,#0b1220_1px,transparent_1px)] bg-[size:4rem_4rem]"
        />
        <div
          className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(0,139,203,0.05) 0%, transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(227,22,79,0.04) 0%, transparent 70%)' }}
        />

        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-2">
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

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#0B1220] leading-[1.05] tracking-tight text-pretty">
              {headline}
            </h1>
            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl font-normal text-pretty">
              {subheadline}
            </p>
          </div>
        </Container>
      </section>

      {/* Grid of articles */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.02) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPosts.map((post: any, index: number) => {
              const accent = cardAccents[index % cardAccents.length]

              return (
                <article key={post._id} className="group flex flex-col h-full">
                  <Link
                    href={`/insights/${post.slug.current}`}
                    className="flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-slate-200/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
                    aria-label={`Read: ${post.title}`}
                  >
                    {/* Top border color glint */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px] z-20"
                      style={{ background: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }}
                      aria-hidden="true"
                    />

                    {/* Image Area */}
                    <div className="aspect-[16/10] relative bg-gray-50 overflow-hidden shrink-0 border-b border-slate-100">
                      {post.featuredImage?.asset?.url ? (
                        <Image
                          src={post.featuredImage.asset.url}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-103 transition-transform duration-700"
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
                    <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 relative z-10 space-y-4">
                      <div>
                        {post.category && (
                          <span
                            className="inline-block px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase mb-3"
                            style={{
                              background: `${accent.from}12`,
                              color: accent.from,
                            }}
                          >
                            {post.category.title}
                          </span>
                        )}

                        <h2 className="text-lg font-bold text-[#0B1220] leading-snug mb-3 group-hover:text-[#E3164F] transition-colors duration-200 tracking-tight">
                          {post.title}
                        </h2>

                        {post.excerpt && (
                          <p className="text-sm text-slate-500 leading-relaxed font-normal line-clamp-2 mb-1">
                            {post.excerpt}
                          </p>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-4 mt-auto">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
                            <User className="w-3.5 h-3.5 text-slate-400" />
                          </div>
                          <span className="font-bold text-slate-600">{post.author?.name}</span>
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
