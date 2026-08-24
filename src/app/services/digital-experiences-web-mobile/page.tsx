import type { Metadata } from 'next'
import { DigitalExperiencesClient } from '@/components/services/DigitalExperiencesClient'

export const metadata: Metadata = {
  title: 'Digital Experiences | Web & Mobile App Development | ABL Tech',
  description: 'Stop losing users to clunky interfaces. We design and engineer high-performance web applications, enterprise portals, and cross-platform mobile apps for iOS and Android.',
  keywords: [
    'Digital experiences',
    'Web application development',
    'Mobile app development',
    'React Native apps',
    'Enterprise portals',
    'UI/UX design',
    'ABL Tech',
  ],
  openGraph: {
    title: 'Digital Experiences (Web & Mobile) | ABL Tech',
    description: 'Stop Losing Users to Clunky Interfaces. High-performance PWAs, iOS & Android mobile apps, and enterprise portals.',
    url: 'https://abltech.com/services/digital-experiences-web-mobile',
    type: 'website',
  },
}

export default function DigitalExperiencesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Digital Experiences (Web & Mobile)',
    provider: {
      '@type': 'Organization',
      name: 'ABL Tech',
      url: 'https://abltech.com',
    },
    description: 'Stop losing users to clunky interfaces. High-performance web apps, mobile apps for iOS and Android, and enterprise dashboard portals.',
    serviceType: 'Digital Experiences (Web & Mobile)',
    areaServed: 'Worldwide',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DigitalExperiencesClient />
    </>
  )
}
