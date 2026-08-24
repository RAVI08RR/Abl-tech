import type { Metadata } from 'next'
import { AIDataEngineeringClient } from '@/components/services/AIDataEngineeringClient'

export const metadata: Metadata = {
  title: 'AI & Data Engineering Services | Enterprise AI Solutions | ABL Tech',
  description: 'Turn AI and data into your competitive advantage. Build intelligent systems, autonomous AI agents, private LLM integrations, and scalable data pipelines with ABL Tech.',
  keywords: [
    'AI engineering',
    'Data engineering',
    'Autonomous AI agents',
    'Enterprise LLM integration',
    'Machine Learning solutions',
    'RAG architecture',
    'ABL Tech',
  ],
  openGraph: {
    title: 'AI & Data Engineering Services | ABL Tech',
    description: 'Turn AI & Data Into Your Competitive Advantage with Enterprise AI Solutions, Autonomous Agents, and Data Pipelines.',
    url: 'https://abltech.com/services/ai-data-engineering',
    type: 'website',
  },
}

export default function AIDataEngineeringPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI & Data Engineering Services',
    provider: {
      '@type': 'Organization',
      name: 'ABL Tech',
      url: 'https://abltech.com',
    },
    description: 'Turn AI & Data Into Your Competitive Advantage. Build intelligent systems, autonomous AI agents, automate workflows, and transform raw enterprise data into measurable outcomes.',
    serviceType: 'AI & Data Engineering Services',
    areaServed: 'Worldwide',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AIDataEngineeringClient />
    </>
  )
}
