import React from 'react'

export function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://abldigitech.com'

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'ABL Tech — ABL Digital Technologies',
    legalName: 'ABL Digital Technologies',
    alternateName: ['ABL Tech', 'ABL BusinessTech LLP'],
    url: siteUrl,
    logo: `${siteUrl}/logo-abltech.png`,
    image: `${siteUrl}/logo-abltech.png`,
    description:
      'ABL Tech (ABL Digital Technologies) is a premier technology consulting and software engineering agency in India specializing in custom AI/ML platforms, WFM consulting, web applications, mobile app development, and cloud infrastructure.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-7416743434',
        contactType: 'customer service',
        email: 'info@ablbusinesstech.com',
        areaServed: 'Worldwide',
        availableLanguage: ['English'],
      },
    ],
    sameAs: [
      'https://www.linkedin.com/company/ablbusinesstech',
      'https://www.instagram.com/ablbusinesstech',
    ],
  }

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}/#service`,
    name: 'ABL Tech — ABL Digital Technologies',
    image: `${siteUrl}/logo-abltech.png`,
    url: siteUrl,
    telephone: '+91-7416743434',
    email: 'info@ablbusinesstech.com',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 17.385,
      longitude: 78.4867,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Engineering & AI Solutions',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Software Development',
            description: 'Scalable web and enterprise software solutions.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI & Machine Learning Solutions',
            description: 'Custom AI models, automation, and predictive analytics.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'WFM Consulting & Advisory',
            description: 'Workforce management consulting, business tools, and market intelligence.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development',
            description: 'Native iOS and Android cross-platform application design.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cloud Infrastructure & DevOps',
            description: 'AWS, Azure, and Google Cloud scalable architecture.',
          },
        },
      ],
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: 'ABL Tech — ABL Digital Technologies',
    alternateName: 'ABL Tech',
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  )
}
