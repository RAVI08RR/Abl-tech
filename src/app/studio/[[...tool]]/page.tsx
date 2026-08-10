'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export default function StudioPage() {
  return (
    <div className="fixed inset-0 z-50 h-screen w-screen overflow-hidden bg-gray-900">
      <NextStudio config={config} />
    </div>
  )
}
