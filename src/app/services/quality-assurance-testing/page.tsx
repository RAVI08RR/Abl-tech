import type { Metadata } from 'next'
import { QualityAssuranceClient } from '@/components/services/QualityAssuranceClient'

export const metadata: Metadata = {
  title: 'Quality Assurance & Testing | Automation, Pentesting & Load QA | ABL Tech',
  description: 'Ruthless testing. Enterprise certainty. We deploy senior Quality Engineering pods for test automation (Playwright/Cypress), 10x load stress testing (k6), and OWASP penetration security audits.',
  keywords: [
    'Quality assurance testing',
    'Test automation',
    'Playwright automation',
    'Performance load testing',
    'Security penetration testing',
    'OWASP pentest',
    'ABL Tech',
  ],
  openGraph: {
    title: 'Quality Assurance & Testing | ABL Tech',
    description: 'Ruthless Testing. Enterprise Certainty. Automated QA, Performance Stress & Penetration Security Audits.',
    url: 'https://abltech.com/services/quality-assurance-testing',
    type: 'website',
  },
}

export default function QualityAssurancePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Quality Assurance & Testing',
    provider: {
      '@type': 'Organization',
      name: 'ABL Tech',
      url: 'https://abltech.com',
    },
    description: 'Continuous test automation, performance stress testing, API validation, and SOC2/OWASP penetration security audits.',
    serviceType: 'Quality Assurance & Testing',
    areaServed: 'Worldwide',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <QualityAssuranceClient />
    </>
  )
}
