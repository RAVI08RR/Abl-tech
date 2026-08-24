import type { Metadata } from 'next'
import { SoftwareEngineeringClient } from '@/components/services/SoftwareEngineeringClient'

export const metadata: Metadata = {
  title: 'Software Engineering Services | Enterprise Software & SaaS | ABL Tech',
  description: 'Build software that scales, not technical debt. We co-engineer robust enterprise software, SaaS applications, APIs, and legacy system modernizations with 100% IP ownership.',
  keywords: [
    'Software engineering',
    'Enterprise software development',
    'SaaS platform development',
    'Custom API development',
    'Legacy monolith modernization',
    'ABL Tech',
  ],
  openGraph: {
    title: 'Software Engineering Services | ABL Tech',
    description: 'Build Software That Scales, Not Technical Debt. Custom SaaS, Enterprise Applications, and API Microservices.',
    url: 'https://abltech.com/services/software-engineering',
    type: 'website',
  },
}

export default function SoftwareEngineeringPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Software Engineering Services',
    provider: {
      '@type': 'Organization',
      name: 'ABL Tech',
      url: 'https://abltech.com',
    },
    description: 'Build software that scales, not technical debt. Custom enterprise software, SaaS applications, microservices, and legacy modernization.',
    serviceType: 'Software Engineering Services',
    areaServed: 'Worldwide',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SoftwareEngineeringClient />
    </>
  )
}
