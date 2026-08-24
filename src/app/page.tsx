import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { ClientLogos } from '@/components/sections/ClientLogos'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { CaseStudyGrid } from '@/components/sections/CaseStudyGrid'
import { Stats } from '@/components/sections/Stats'
import { IndustriesGrid } from '@/components/sections/IndustriesGrid'
import { TechnologyStack } from '@/components/sections/TechnologyStack'
import { Process } from '@/components/sections/Process'
import { WhyUs } from '@/components/sections/WhyUs'
import { Testimonials } from '@/components/sections/Testimonials'
import { InsightsGrid } from '@/components/sections/InsightsGrid'
import { CTA } from '@/components/sections/CTA'
import {
  getHomePage,
  getFeaturedServices,
  getFeaturedCaseStudies,
  getStatistics,
  getFeaturedIndustries,
  getTechnologies,
  getProcessSteps,
  getCompanyValues,
  getFeaturedTestimonials,
  getFeaturedPosts,
  getFeaturedClients,
} from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'ABL BusinessTech LLP — Enterprise AI & Software Engineering Company',
  description: 'ABL BusinessTech LLP helps ambitious businesses design, build, modernize, and scale digital products using modern technology, data, and AI.',
  openGraph: {
    title: 'ABL BusinessTech LLP — Enterprise AI & Software Engineering Company',
    description: 'Custom AI solutions, web & mobile platforms, and enterprise cloud architecture built for scale.',
    type: 'website',
  },
}

export default async function HomePage() {
  // Fetch all homepage data from Sanity concurrently
  let homePageData = null
  let services = []
  let caseStudies = []
  let statistics = []
  let industries = []
  let technologies = []
  let processSteps = []
  let companyValues = []
  let testimonials = []
  let posts = []
  let clients = []

  try {
    ;[
      homePageData,
      services,
      caseStudies,
      statistics,
      industries,
      technologies,
      processSteps,
      companyValues,
      testimonials,
      posts,
      clients,
    ] = await Promise.all([
      getHomePage(),
      getFeaturedServices(),
      getFeaturedCaseStudies(),
      getStatistics(),
      getFeaturedIndustries(),
      getTechnologies(),
      getProcessSteps(),
      getCompanyValues(),
      getFeaturedTestimonials(),
      getFeaturedPosts(),
      getFeaturedClients(),
    ])
  } catch {
    // Sanity not configured — use component defaults
  }

  const hp = homePageData

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ABL BusinessTech LLP',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://abltech.com',
    description: 'Technology consulting and software development company helping businesses build scalable digital products.',
    foundingDate: '2005',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://linkedin.com/company/abl-tech',
    ],
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ABL BusinessTech LLP',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://abltech.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL}/search?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      {/* Hero */}
      {(!hp || hp.hero?.enabled !== false) && (
        <Hero
          headline={hp?.hero?.headline}
          subheadline={hp?.hero?.subheadline}
          buttons={hp?.hero?.buttons}
        />
      )}

      {/* Client Logos */}
      {(!hp || hp.clients?.enabled !== false) && (
        <ClientLogos
          heading={hp?.clients?.heading}
          clients={clients}
        />
      )}

      {/* Services */}
      {(!hp || hp.services?.enabled !== false) && (
        <ServicesGrid
          heading={hp?.services?.heading}
          description={hp?.services?.description}
          services={services}
        />
      )}

      {/* Featured Work */}
      {(!hp || hp.featuredWork?.enabled !== false) && (
        <CaseStudyGrid
          heading={hp?.featuredWork?.heading}
          description={hp?.featuredWork?.description}
          caseStudies={caseStudies}
        />
      )}

      {/* Stats */}
      {(!hp || hp.stats?.enabled !== false) && (
        <Stats
          heading={hp?.stats?.heading}
          statistics={statistics}
        />
      )}

      {/* Industries */}
      {(!hp || hp.industries?.enabled !== false) && (
        <IndustriesGrid
          heading={hp?.industries?.heading}
          description={hp?.industries?.description}
          industries={industries}
        />
      )}

      {/* Technology Stack */}
      {(!hp || hp.technologyStack?.enabled !== false) && (
        <TechnologyStack
          heading={hp?.technologyStack?.heading}
          description={hp?.technologyStack?.description}
          technologies={technologies}
        />
      )}

      {/* Process */}
      {(!hp || hp.process?.enabled !== false) && (
        <Process
          heading={hp?.process?.heading}
          description={hp?.process?.description}
          steps={processSteps}
        />
      )}

      {/* Why Us */}
      {(!hp || hp.whyUs?.enabled !== false) && (
        <WhyUs
          heading={hp?.whyUs?.heading}
          description={hp?.whyUs?.description}
          values={companyValues}
        />
      )}

      {/* Testimonials */}
      {(!hp || hp.testimonials?.enabled !== false) && (
        <Testimonials
          heading={hp?.testimonials?.heading}
          testimonials={testimonials}
        />
      )}

      {/* Insights */}
      {(!hp || hp.insights?.enabled !== false) && (
        <InsightsGrid
          heading={hp?.insights?.heading}
          description={hp?.insights?.description}
          posts={posts}
        />
      )}

      {/* CTA */}
      {(!hp || hp.cta?.enabled !== false) && (
        <CTA
          heading={hp?.cta?.heading}
          description={hp?.cta?.description}
          buttons={hp?.cta?.buttons}
        />
      )}
    </>
  )
}
