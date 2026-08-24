import type { Metadata } from 'next'
import { StaffAugmentationClient } from '@/components/services/StaffAugmentationClient'

export const metadata: Metadata = {
  title: 'IT Staff Augmentation & Dedicated Teams | Top 1% Senior Engineers | ABL Tech',
  description: 'Scale your engineering team in 48 hours. We supply pre-vetted top 1% senior full-stack developers, AI engineers, and DevOps architects with a zero-risk 14-day trial.',
  keywords: [
    'IT staff augmentation',
    'Dedicated engineering teams',
    'Hire senior React developers',
    'Hire AI engineers',
    'Hire DevOps engineers',
    'Developer staffing',
    'ABL Tech',
  ],
  openGraph: {
    title: 'IT Staff Augmentation | ABL Tech',
    description: 'Scale Your Team in 48 Hours. Top 1% Vetted Senior Full-Stack, AI & DevOps Engineers.',
    url: 'https://abltech.com/services/staff-augmentation',
    type: 'website',
  },
}

export default function StaffAugmentationPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Staff Augmentation & Dedicated Teams',
    provider: {
      '@type': 'Organization',
      name: 'ABL Tech',
      url: 'https://abltech.com',
    },
    description: 'Pre-vetted senior software engineers, dedicated sprint pods, 48-hour rapid onboarding, and zero-risk 14-day replacement trial.',
    serviceType: 'Staff Augmentation & Dedicated Teams',
    areaServed: 'Worldwide',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StaffAugmentationClient />
    </>
  )
}
