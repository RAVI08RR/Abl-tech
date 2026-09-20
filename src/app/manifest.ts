import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ABL BusinessTech LLP',
    short_name: 'ABL Tech',
    description:
      'ABL BusinessTech LLP — Technology Consulting, Custom Software Engineering & AI Solutions',
    start_url: '/',
    display: 'standalone',
    background_color: '#090D16',
    theme_color: '#05A7D4',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
