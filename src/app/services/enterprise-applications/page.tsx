import type { Metadata } from 'next'
import { EnterpriseApplicationsClient } from '@/components/services/EnterpriseApplicationsClient'

export const metadata: Metadata = {
  title: 'Enterprise Applications | Custom ERP, CRM & HRMS | ABL Tech',
  description: 'Architected for scale. Engineered for your enterprise. We design and build custom ERPs, CRMs, HRMS systems, and workflow engines that adapt to your exact business operations.',
  keywords: [
    'Enterprise applications',
    'Custom ERP development',
    'Custom CRM development',
    'HRMS systems',
    'Workflow automation',
    'ABL Tech',
  ],
  openGraph: {
    title: 'Enterprise Applications | ABL Tech',
    description: 'Architected for Scale. Engineered for Your Enterprise. Custom ERP, CRM & Business Application Engineering.',
    url: 'https://abltech.com/services/enterprise-applications',
    type: 'website',
  },
}

export default function EnterpriseApplicationsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Enterprise Applications',
    provider: {
      '@type': 'Organization',
      name: 'ABL Tech',
      url: 'https://abltech.com',
    },
    description: 'Custom ERPs, CRMs, HRMS systems, and process automation platforms architected for scale with 100% IP ownership.',
    serviceType: 'Enterprise Applications',
    areaServed: 'Worldwide',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EnterpriseApplicationsClient />
    </>
  )
}
