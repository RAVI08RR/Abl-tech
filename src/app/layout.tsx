import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PageTransition } from '@/components/ui/PageTransition'
import { JsonLd } from '@/components/seo/JsonLd'
import { getNavigation, getFooter } from '@/sanity/lib/queries'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://abldigitech.com'

export const viewport: Viewport = {
  themeColor: '#05A7D4',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ABL Tech — ABL Digital Technologies: Software Engineering, AI & WFM Consulting',
    template: '%s | ABL Tech — ABL Digital Technologies',
  },
  description:
    'ABL Tech (ABL Digital Technologies) is a senior-led software development & AI consulting firm in India. We design, build, and scale custom web platforms, mobile apps, AI solutions, and cloud infrastructure.',
  keywords: [
    'abl tech',
    'ABL Tech',
    'ABL Digital Technologies',
    'abldigitech.com',
    'abltech',
    'software development company India',
    'WFM consulting India',
    'custom software engineering',
    'AI consulting',
    'machine learning solutions',
    'web app development',
    'mobile app development',
    'cloud infrastructure',
    'digital transformation agency',
    'ABL BusinessTech',
  ],
  authors: [{ name: 'ABL Digital Technologies', url: siteUrl }],
  creator: 'ABL Digital Technologies',
  publisher: 'ABL Digital Technologies',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/manifest.webmanifest',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'ABL Tech — ABL Digital Technologies',
    title: 'ABL Tech — ABL Digital Technologies: Software Engineering & AI Consulting',
    description:
      'Designing, building, modernizing, and scaling high-impact digital products, AI models, and enterprise software.',
    images: [
      {
        url: `${siteUrl}/logo-abltech.png`,
        width: 1200,
        height: 630,
        alt: 'ABL Tech Logo — ABL Digital Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABL Tech — ABL Digital Technologies: Software Engineering & AI Solutions',
    description:
      'Transforming ambitious ideas into scalable, production-grade digital products.',
    images: [`${siteUrl}/logo-abltech.png`],
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
  verification: {
    google: [
      'nbyaPjOUdrhlW_jTUaTO_q2DbAPRVGRsHJYqHjCtVro',
      'NK0f72BR_kEeGWdQuPJdBsxs1Ao4hWBNDo13LaeZLWo',
    ],
  },
  category: 'technology',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let navigation = null
  let footer = null

  try {
    [navigation, footer] = await Promise.all([getNavigation(), getFooter()])
  } catch {
    // Fallback if Sanity not configured
  }

  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body className="antialiased text-slate-900 bg-[#090D16] selection:bg-[#05A7D4] selection:text-white">
        <Header navigation={navigation} />
        <main id="main-content">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer footer={footer} />
      </body>
    </html>
  )
}
