import type { Metadata } from 'next'
import { IndustriesPageClient } from '@/components/industries/IndustriesPageClient'

export const metadata: Metadata = {
  title: 'Industries We Transform | FinTech, Healthcare, Retail & Logistics | ABL Tech',
  description: 'Deep domain expertise across 20+ specialized industries. We architect custom software solutions, HIPAA & SOC2 compliant platforms, headless commerce, and IoT systems.',
  keywords: [
    'Industries we serve',
    'Fintech software engineering',
    'Healthcare software development',
    'Retail ecommerce software',
    'Logistics tech solutions',
    'Manufacturing Industry 4.0',
    'ABL Tech',
  ],
  openGraph: {
    title: 'Industries We Transform | ABL Tech',
    description: 'Deep Domain Expertise. Engineered for Your Sector. FinTech, Healthcare, Retail, Manufacturing & Logistics.',
    url: 'https://abltech.com/industries',
    type: 'website',
  },
}

export default function IndustriesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Industries We Serve',
    provider: {
      '@type': 'Organization',
      name: 'ABL Tech',
      url: 'https://abltech.com',
    },
    description: 'Domain-specific software engineering, compliance automation, and enterprise platform solutions across 20+ industries.',
    serviceType: 'Industry Software Solutions',
    areaServed: 'Worldwide',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IndustriesPageClient />
    </>
  )
}
