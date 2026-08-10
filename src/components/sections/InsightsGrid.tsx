import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, User } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { formatDate } from '@/lib/utils'
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

export function InsightsGrid({ heading, description, posts }: InsightsGridProps) {
  const displayPosts = posts?.length ? posts : defaultPosts
  const displayHeading = heading || 'Latest Insights & Perspectives'
  const displayDescription = description || 'Practical technology thinking from our engineers, architects, and consultants.'

  return (
    <section className="section-padding bg-[#F7F8FA]" aria-label="Latest insights">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <SectionHeading
            eyebrow="Insights"
            title={displayHeading}
            description={displayDescription}
          />
          <Button href="/insights" variant="outline" className="shrink-0 self-start lg:self-auto">
            All Insights <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayPosts.slice(0, 3).map((post, index) => (
            <article key={post._id} className="group">
              <Link
                href={`/insights/${post.slug.current}`}
                className="block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#E3164F]/20 hover:shadow-xl transition-all duration-300 h-full"
                aria-label={`Read: ${post.title}`}
              >
                {/* Image */}
                <div className="blog-image-wrapper aspect-[16/9] relative bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  {post.featuredImage?.asset?.url ? (
                    <Image
                      src={post.featuredImage.asset.url}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{
                        background: index === 0
                          ? 'linear-gradient(135deg, #1A0A1A 0%, #E3164F20 100%)'
                          : index === 1
                          ? 'linear-gradient(135deg, #0A1220 0%, #008BCB20 100%)'
                          : 'linear-gradient(135deg, #0A1A0A 0%, #10B98120 100%)',
                      }}
                      aria-hidden="true"
                    >
                      <span className="text-4xl opacity-30">
                        {index === 0 ? '🤖' : index === 1 ? '⚙️' : '🔄'}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  {/* Category */}
                  {post.category && (
                    <span className="inline-block badge badge-primary mb-3">
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

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-50 pt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#E3164F]/20 to-[#008BCB]/20 flex items-center justify-center">
                        <User className="w-3 h-3 text-gray-400" aria-hidden="true" />
                      </div>
                      <span>{post.author?.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" aria-hidden="true" />
                      <span>{post.readingTime} min read</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
