import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, User, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { getPosts, getCategories } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Insights & Blog',
  description: 'Technology perspectives, engineering guides, and business insights from the AB BusinessTech team.',
}

const defaultPosts = [
  { _id: '1', title: 'How AI is Reshaping Enterprise Software Development in 2025', slug: { current: 'ai-reshaping-enterprise-software-2025' }, excerpt: 'AI is no longer a futuristic concept — it\'s actively changing how enterprise software is built, deployed, and maintained. Here\'s what senior engineers need to know.', publishedAt: '2025-07-15T00:00:00Z', readingTime: 8, featured: true, category: { _id: 'c1', title: 'AI & Technology', slug: { current: 'ai-technology' } }, author: { name: 'Ravi Soni', designation: 'CTO' } },
  { _id: '2', title: 'Microservices vs Monolith: A Practical Guide for 2025', slug: { current: 'microservices-vs-monolith' }, excerpt: 'The monolith vs microservices debate is nuanced. The right answer depends on your team size, traffic patterns, and growth trajectory.', publishedAt: '2025-07-01T00:00:00Z', readingTime: 6, featured: true, category: { _id: 'c2', title: 'Engineering', slug: { current: 'engineering' } }, author: { name: 'Priya Sharma', designation: 'Principal Engineer' } },
  { _id: '3', title: 'Digital Transformation Failures: 5 Preventable Mistakes', slug: { current: 'digital-transformation-failures' }, excerpt: 'Most digital transformation initiatives fail — not because of bad technology, but because of preventable strategic and organizational mistakes.', publishedAt: '2025-06-20T00:00:00Z', readingTime: 7, featured: false, category: { _id: 'c3', title: 'Strategy', slug: { current: 'strategy' } }, author: { name: 'Arun Mehta', designation: 'Transformation Lead' } },
  { _id: '4', title: 'Building HIPAA-Compliant Healthcare Platforms on AWS', slug: { current: 'hipaa-compliant-aws' }, excerpt: 'A step-by-step guide to architecting cloud infrastructure that meets healthcare data compliance requirements without sacrificing performance.', publishedAt: '2025-06-05T00:00:00Z', readingTime: 10, featured: false, category: { _id: 'c2', title: 'Engineering', slug: { current: 'engineering' } }, author: { name: 'Ravi Soni', designation: 'CTO' } },
  { _id: '5', title: 'React Native vs Flutter: Which to Choose in 2025?', slug: { current: 'react-native-vs-flutter-2025' }, excerpt: 'Both frameworks have matured significantly. Here\'s an honest comparison based on our experience building 50+ production apps with both.', publishedAt: '2025-05-20T00:00:00Z', readingTime: 9, featured: false, category: { _id: 'c2', title: 'Engineering', slug: { current: 'engineering' } }, author: { name: 'Kiran Patel', designation: 'Mobile Lead' } },
  { _id: '6', title: 'The Real Cost of Technical Debt in 2025', slug: { current: 'cost-of-technical-debt' }, excerpt: 'Technical debt isn\'t just a development problem — it\'s a business risk. Here\'s how to quantify it and build the case for addressing it.', publishedAt: '2025-05-05T00:00:00Z', readingTime: 6, featured: false, category: { _id: 'c3', title: 'Strategy', slug: { current: 'strategy' } }, author: { name: 'Priya Sharma', designation: 'Principal Engineer' } },
]

const gradientBgs = [
  'linear-gradient(135deg, #1A0A1A 0%, #E3164F20 100%)',
  'linear-gradient(135deg, #0A1220 0%, #008BCB20 100%)',
  'linear-gradient(135deg, #0A1A0A 0%, #10B98120 100%)',
  'linear-gradient(135deg, #1A1200 0%, #F59E0B20 100%)',
  'linear-gradient(135deg, #10081A 0%, #8B5CF620 100%)',
  'linear-gradient(135deg, #001A1A 0%, #06B6D420 100%)',
]

export default async function InsightsPage() {
  let posts = []
  try { const data = await getPosts(12); if (data?.length) posts = data } catch {}
  const displayPosts = posts.length ? posts : defaultPosts

  return (
    <>
      <section className="bg-gradient-to-br from-[#0D0D1A] to-[#111827] py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Insights</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Technology Thinking From<br /><span className="text-[#E3164F]">Our Team</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Practical guides, engineering deep-dives, and strategic perspectives from the AB BusinessTech team.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayPosts.map((post: typeof defaultPosts[0], index) => (
              <article key={post._id} className="group">
                <Link href={`/insights/${post.slug.current}`} className="block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#E3164F]/20 hover:shadow-xl transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="aspect-[16/9]" style={{ background: gradientBgs[index % 6] }} aria-hidden="true">
                    <div className="w-full h-full flex items-center justify-center opacity-20 text-5xl">
                      {['🤖', '⚙️', '🔄', '☁️', '📱', '💡'][index % 6]}
                    </div>
                  </div>
                  <div className="p-6">
                    {post.category && (
                      <span className="badge badge-primary mb-3">{post.category.title}</span>
                    )}
                    <h2 className="text-base font-bold text-[#111111] leading-snug mb-3 group-hover:text-[#E3164F] transition-colors">{post.title}</h2>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-5">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-50 pt-4">
                      <span className="font-medium">{post.author?.name}</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
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
    </>
  )
}
