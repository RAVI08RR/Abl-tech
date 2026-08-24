import type { Metadata } from 'next'
import { CloudAndDevOpsClient } from '@/components/services/CloudAndDevOpsClient'

export const metadata: Metadata = {
  title: 'Cloud & DevOps Services | AWS, Azure, CI/CD & FinOps | ABL Tech',
  description: 'Ship code faster. Never go down. We architect scalable cloud solutions, execute zero-downtime migrations, optimize FinOps cloud spend by 45%, and build automated CI/CD pipelines.',
  keywords: [
    'Cloud engineering',
    'DevOps services',
    'AWS migration',
    'Azure cloud architecture',
    'Kubernetes orchestration',
    'FinOps cost optimization',
    'ABL Tech',
  ],
  openGraph: {
    title: 'Cloud & DevOps Services | ABL Tech',
    description: 'Ship Code Faster. Never Go Down. Scalable Cloud Architecture, Kubernetes, CI/CD & FinOps.',
    url: 'https://abltech.com/services/cloud-and-devops',
    type: 'website',
  },
}

export default function CloudAndDevOpsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cloud & DevOps Services',
    provider: {
      '@type': 'Organization',
      name: 'ABL Tech',
      url: 'https://abltech.com',
    },
    description: 'Cloud migration, automated CI/CD pipelines, Kubernetes containerization, DevSecOps, and FinOps cost optimization.',
    serviceType: 'Cloud & DevOps Services',
    areaServed: 'Worldwide',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CloudAndDevOpsClient />
    </>
  )
}
