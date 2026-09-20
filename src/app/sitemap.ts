import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://abldigitech.com'
  const currentDate = new Date()

  const routes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/solutions',
    '/industries',
    '/technologies',
    '/work',
    '/insights',
  ]

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/services' || route === '/contact' ? 0.9 : 0.8,
  }))

  return staticEntries
}
