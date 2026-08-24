import type { Metadata } from 'next'
import { DataAnalyticsClient } from '@/components/services/DataAnalyticsClient'

export const metadata: Metadata = {
  title: 'Data & Analytics Solutions | Snowflake, Power BI & Data Warehousing | ABL Tech',
  description: 'Stop drowning in data. Start driving revenue. We architect high-speed ETL data pipelines, implement Snowflake & Power BI platforms, and build predictive machine learning models.',
  keywords: [
    'Data analytics solutions',
    'Data engineering',
    'Snowflake data warehouse',
    'Power BI dashboards',
    'Predictive analytics',
    'ETL pipelines',
    'ABL Tech',
  ],
  openGraph: {
    title: 'Data & Analytics Solutions | ABL Tech',
    description: 'Stop Drowning in Data. Start Driving Revenue. High-speed data pipelines, Snowflake warehousing & predictive ML.',
    url: 'https://abltech.com/services/data-analytics-solutions',
    type: 'website',
  },
}

export default function DataAnalyticsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Data & Analytics Solutions',
    provider: {
      '@type': 'Organization',
      name: 'ABL Tech',
      url: 'https://abltech.com',
    },
    description: 'Cloud data warehousing, real-time ETL pipelines, Power BI & Tableau dashboards, and predictive machine learning models.',
    serviceType: 'Data & Analytics Solutions',
    areaServed: 'Worldwide',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DataAnalyticsClient />
    </>
  )
}
