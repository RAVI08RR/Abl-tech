import type { Metadata } from 'next'
import { UIUXDesignClient } from '@/components/services/UIUXDesignClient'

export const metadata: Metadata = {
  title: 'UI/UX Design Services | Figma Systems, Mobile & Web Product Design | ABL Tech',
  description: 'Interfaces that wow. Experiences that convert. We design world-class Figma interfaces, tokenized design systems, WCAG 2.1 AA accessible UIs, and high-conversion SaaS product experiences.',
  keywords: [
    'UI UX design services',
    'Figma design system',
    'Product design agency',
    'Mobile app UI design',
    'SaaS UX audit',
    'WCAG accessibility design',
    'ABL Tech',
  ],
  openGraph: {
    title: 'UI/UX Design Services | ABL Tech',
    description: 'Interfaces That Wow. Experiences That Convert. Figma Design Systems, Mobile & SaaS UX Design.',
    url: 'https://abltech.com/services/ui-ux-design',
    type: 'website',
  },
}

export default function UIUXDesignPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'UI/UX Design Services',
    provider: {
      '@type': 'Organization',
      name: 'ABL Tech',
      url: 'https://abltech.com',
    },
    description: 'Empirical UX research, tokenized Figma design systems, mobile & web product UI design, and WCAG AA accessibility compliance.',
    serviceType: 'UI/UX Design Services',
    areaServed: 'Worldwide',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UIUXDesignClient />
    </>
  )
}
