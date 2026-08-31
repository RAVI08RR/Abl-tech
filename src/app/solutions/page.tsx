import type { Metadata } from 'next'
import { SolutionsPageClient } from '@/components/solutions/SolutionsPageClient'

export const metadata: Metadata = {
  title: 'Digital Solutions — AI, Mobile, Enterprise & Industry Platforms | WebBlaze Softtech – ABL BusinessTech LLP',
  description:
    'Explore 20+ digital product solutions from AI workflow automation, ride-hailing and food delivery platforms to healthcare, education, hospitality, and fintech software — built for real business challenges.',
}

export default function SolutionsPage() {
  return <SolutionsPageClient />
}
