import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Clock, Calendar, User, ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { getPostBySlug, getAllPostSlugs } from '@/sanity/lib/queries'
import { formatDate } from '@/lib/utils'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  try { const slugs = await getAllPostSlugs(); return slugs.map((s: { slug: string }) => ({ slug: s.slug })) }
  catch { return [] }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = await getPostBySlug(slug)
    if (!post) return { title: 'Post Not Found' }
    return { title: post.seo?.metaTitle || post.title, description: post.seo?.metaDescription || post.excerpt }
  } catch { return { title: 'Blog Post' } }
}

const validSlugs = ['ai-reshaping-enterprise-software-2025', 'microservices-vs-monolith', 'digital-transformation-failures', 'hipaa-compliant-aws', 'react-native-vs-flutter-2025', 'cost-of-technical-debt']

const defaultPost = {
  title: 'How AI is Reshaping Enterprise Software Development in 2025',
  excerpt: 'Artificial intelligence is no longer a futuristic concept — it\'s actively changing how enterprise software is built, deployed, and maintained.',
  publishedAt: '2025-07-15T00:00:00Z',
  readingTime: 8,
  author: { name: 'Ravi Soni', designation: 'CTO, AB BusinessTech', bio: 'Technology leader with 15+ years building enterprise software.' },
  category: { title: 'AI & Technology', slug: { current: 'ai-technology' } },
  tags: ['AI', 'Enterprise', 'Software Development'],
  content: null,
}

export default async function InsightPostPage({ params }: Props) {
  const { slug } = await params
  let post = null
  try { post = await getPostBySlug(slug) } catch {}

  if (!post && !validSlugs.includes(slug)) notFound()

  const p = post || defaultPost

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.title,
    description: p.excerpt,
    datePublished: p.publishedAt,
    author: { '@type': 'Person', name: p.author?.name },
    publisher: { '@type': 'Organization', name: 'AB BusinessTech LLP' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0D0D1A] to-[#111827] py-16 lg:py-20">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li><Link href="/insights" className="hover:text-white">Insights</Link></li>
              <li>/</li>
              <li className="text-gray-300 truncate max-w-[200px]" aria-current="page">{p.title}</li>
            </ol>
          </nav>

          {p.category && (
            <span className="badge badge-primary mb-5">{p.category.title}</span>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6 max-w-3xl">
            {p.title}
          </h1>

          {p.excerpt && (
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">{p.excerpt}</p>
          )}

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            {p.author && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E3164F]/20 to-[#008BCB]/20 flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <span>{p.author.name}</span>
                {p.author.designation && <span className="text-gray-600">— {p.author.designation}</span>}
              </div>
            )}
            {p.publishedAt && (
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(p.publishedAt)}</span>
              </div>
            )}
            {p.readingTime && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{p.readingTime} min read</span>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Content area */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Placeholder for PortableText content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed">
                This article is available in full. Connect your Sanity CMS to publish complete blog content including rich text, images, code blocks, and embedded videos.
              </p>
              <h2>Getting Started with AI in Enterprise Software</h2>
              <p>
                Artificial intelligence has moved from experimental lab projects to core production infrastructure at leading technology companies. In 2025, senior engineering teams are navigating a new landscape where AI capabilities are embedded into every layer of the software stack.
              </p>
              <h2>Key Areas of Impact</h2>
              <ul>
                <li>Automated code generation and review</li>
                <li>Intelligent testing and QA pipelines</li>
                <li>AI-powered product recommendations</li>
                <li>Natural language interfaces for enterprise applications</li>
                <li>Predictive analytics and anomaly detection</li>
              </ul>
              <h2>What This Means for Your Engineering Team</h2>
              <p>
                The engineering teams that will thrive in this environment are those who treat AI not as a replacement for human judgment, but as a force multiplier for their existing expertise.
              </p>
            </div>

            {/* Tags */}
            {p.tags && p.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-100">
                {p.tags.map((tag) => (
                  <span key={tag} className="badge badge-secondary">{tag}</span>
                ))}
              </div>
            )}

            {/* Back link */}
            <div className="mt-12">
              <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-[#E3164F] hover:gap-3 transition-all duration-200">
                <ArrowLeft className="w-4 h-4" />
                Back to All Insights
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F7F8FA]">
        <Container className="text-center">
          <h2 className="text-2xl font-black text-[#111111] mb-4">Want to Work with Engineers Who Think Like This?</h2>
          <p className="text-gray-500 mb-6 max-w-lg mx-auto">Our team writes code and writes about it. Let&apos;s solve your technology challenges together.</p>
          <Button href="/contact" variant="primary">Start a Conversation</Button>
        </Container>
      </section>
    </>
  )
}
