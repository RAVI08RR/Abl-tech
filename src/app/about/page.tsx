import type { Metadata } from 'next'
import { AboutPageClient } from '@/components/about/AboutPageClient'

export const metadata: Metadata = {
  title: 'About Us | AB BusinessTech LLP — Enterprise AI & Software Engineering Since 2005',
  description: 'Since 2005, AB BusinessTech LLP has been building production-ready AI, software, and cloud solutions for global enterprises. Trusted by MasterCard, VISA, Facebook, Autodesk, and UBS.',
  keywords: [
    'About AB BusinessTech LLP',
    'Enterprise software company',
    'AI development consulting',
    'Software engineering firm',
    'ABL Tech about',
  ],
  openGraph: {
    title: 'About Us | AB BusinessTech LLP',
    description: 'Engineering Technology That Moves Enterprise Business. Established 2005, Trusted Globally.',
    url: 'https://abltech.com/about',
    type: 'website',
  },
}

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AB BusinessTech LLP',
    url: 'https://abltech.com',
    foundingDate: '2005',
    description: 'Enterprise AI, custom software engineering, and cloud transformation company since 2005.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      addressCountry: 'India',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutPageClient />
    </>
  )
}
