import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getNavigation, getFooter, getSiteSettings } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: {
    default: 'AB BusinessTech LLP — Technology Consulting & Software Development',
    template: '%s | AB BusinessTech LLP',
  },
  description: 'AB BusinessTech LLP helps ambitious businesses design, build, modernize, and scale digital products using modern technology, data, and AI.',
  keywords: ['software development', 'web development', 'mobile app development', 'AI', 'cloud solutions', 'digital transformation', 'technology consulting'],
  authors: [{ name: 'AB BusinessTech LLP' }],
  creator: 'AB BusinessTech LLP',
  publisher: 'AB BusinessTech LLP',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://abbusinesstech.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'AB BusinessTech LLP',
    title: 'AB BusinessTech LLP — Technology Consulting & Software Development',
    description: 'Helping businesses transform ideas into scalable digital products.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AB BusinessTech LLP',
    description: 'Helping businesses transform ideas into scalable digital products.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Fetch navigation and footer from Sanity (fallback to defaults if not configured)
  let navigation = null
  let footer = null

  try {
    [navigation, footer] = await Promise.all([
      getNavigation(),
      getFooter(),
    ])
  } catch {
    // Sanity not configured yet, use defaults
  }

  return (
    <html lang="en">
      <body>
        <Header navigation={navigation} />
        <main id="main-content">
          {children}
        </main>
        <Footer footer={footer} />
      </body>
    </html>
  )
}
