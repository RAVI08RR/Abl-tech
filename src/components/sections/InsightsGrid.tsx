'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, User } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import type { Post } from '@/types'

interface InsightsGridProps {
  heading?: string
  description?: string
  posts?: Post[]
}

const defaultPosts: Post[] = [
  {
    _id: '1',
    title: 'How AI is Reshaping Enterprise Software Development in 2025',
    slug: { current: 'ai-reshaping-enterprise-software-2025' },
    excerpt: 'Artificial intelligence is no longer a futuristic concept — it\'s actively changing how enterprise software is built, deployed, and maintained.',
    publishedAt: '2025-07-15T00:00:00Z',
    readingTime: 8,
    featured: true,
    category: { _id: 'c1', title: 'AI & Technology', slug: { current: 'ai-technology' } },
    author: { name: 'Ravi Soni', designation: 'CTO, AB BusinessTech' },
  },
  {
    _id: '2',
    title: 'Microservices vs Monolith: Choosing the Right Architecture for Your Stage',
    slug: { current: 'microservices-vs-monolith-architecture-choice' },
    excerpt: 'The monolith vs microservices debate is nuanced. The right answer depends on your team size, traffic patterns, and growth trajectory.',
    publishedAt: '2025-07-01T00:00:00Z',
    readingTime: 6,
    featured: true,
    category: { _id: 'c2', title: 'Engineering', slug: { current: 'engineering' } },
    author: { name: 'Priya Sharma', designation: 'Principal Engineer' },
  },
  {
    _id: '3',
    title: 'Digital Transformation Failures: 5 Mistakes That Kill Projects Before They Launch',
    slug: { current: 'digital-transformation-failure-mistakes' },
    excerpt: 'Most digital transformation initiatives fail — not because of bad technology, but because of preventable strategic and organizational mistakes.',
    publishedAt: '2025-06-20T00:00:00Z',
    readingTime: 7,
    featured: false,
    category: { _id: 'c3', title: 'Strategy', slug: { current: 'strategy' } },
    author: { name: 'Arun Mehta', designation: 'Digital Transformation Lead' },
  },
]

const cardAccents = [
  { from: '#E3164F', to: '#FF6B9D' },
  { from: '#008BCB', to: '#00C4FF' },
  { from: '#7C3AED', to: '#A78BFA' },
]

export function InsightsGrid({ heading, description, posts }: InsightsGridProps) {
  const displayPosts = posts?.length ? posts : defaultPosts
  const displayHeading = heading || 'Latest Insights & Perspectives'
  const displayDescription = description || 'Practical technology thinking from our engineers, architects, and consultants.'

  return (
    <section className="relative section-padding overflow-hidden bg-white" aria-label="Latest insights">
      {/* Background dot grid pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <Container className="relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
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
                Insights
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-[#111111]">
              {displayHeading}
            </h2>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">{displayDescription}</p>
          </div>
          <Button href="/insights" variant="outline" className="shrink-0 self-start lg:self-auto">
            All Insights <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayPosts.slice(0, 3).map((post, index) => {
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
                    el.style.transform = 'translateY(-4px)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.borderColor = 'rgba(0,0,0,0.07)'
                    el.style.boxShadow = '0 2px 10px rgba(0,0,0,0.03)'
                    el.style.transform = 'translateY(0)'
                  }}
                  aria-label={`Read: ${post.title}`}
                >
                  {/* Top accent highlight */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] z-20"
                    style={{ background: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }}
                    aria-hidden="true"
                  />

                  {/* Image Wrapper */}
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
                        {/* Glow orb inside image area */}
                        <div
                          className="absolute w-32 h-32 rounded-full blur-2xl"
                          style={{
                            background: `radial-gradient(circle, ${accent.from}30 0%, transparent 70%)`,
                          }}
                        />
                        <span className="text-5xl font-black relative z-10" style={{ color: accent.from }}>
                          {index === 0 ? '01' : index === 1 ? '02' : '03'}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1 relative z-10">
                    <div>
                      {/* Category Label */}
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

                      {/* Title */}
                      <h3 className="text-base font-bold text-[#111111] leading-snug mb-3 group-hover:text-[#E3164F] transition-colors duration-200">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      {post.excerpt && (
                        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-5">
                          {post.excerpt}
                        </p>
                      )}
                    </div>

                    {/* Meta info */}
                    <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-50 pt-4 mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <User className="w-3.5 h-3.5 text-gray-500" aria-hidden="true" />
                        </div>
                        <span className="font-bold text-gray-600">{post.author?.name}</span>
                      </div>
                      <div className="flex items-center gap-1 font-bold">
                        <Clock className="w-3.5 h-3.5 text-[#008BCB]" aria-hidden="true" />
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
  )
}
