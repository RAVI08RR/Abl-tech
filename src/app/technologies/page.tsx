'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '@mdi/react'
import {
  mdiKickstarter,
  mdiHubspot,
  mdiSlack,
  mdiJira,
  mdiReact,
  mdiNodejs,
  mdiAws,
  mdiMicrosoftAzure,
  mdiDocker,
  mdiKubernetes,
  mdiTailwind,
  mdiWordpress
} from '@mdi/js'
import {
  Container
} from '@/components/ui/Container'
import {
  SectionHeading
} from '@/components/ui/SectionHeading'
import {
  Button
} from '@/components/ui/Button'
import {
  ArrowRight,
  ChevronRight
} from 'lucide-react'

// Core client systems integrated/built by ABL
const integrations = [
  {
    id: 'ugo',
    name: 'UGO Supply Chain',
    logo: '/UGO.svg',
    category: 'Logistics & Operations',
    description: 'Bespoke enterprise supply chain platform connecting inventory, logistics tracking, and digital carrier sign-offs.',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  },
  {
    id: 'satyaapan',
    name: 'Satyaapan Verification',
    logo: '/Satyaapan.svg',
    category: 'GovTech & Security',
    description: 'Highly secure verification web portal designed for official passport checks and fake record audits.',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-100',
  },
  {
    id: 'crm-pixl',
    name: 'CRM Pixl Platform',
    logo: '/Crm-pixl.svg',
    category: 'Customer Relations',
    description: 'Tailored CRM applications built to digitize pipeline operations, client details, and business workflows.',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-100',
  },
  {
    id: 'protectly',
    name: 'Protectly Access',
    logo: '/Protectly.svg',
    category: 'Security & Compliance',
    description: 'Enterprise secure access and audit logging system built to safeguard high-profile data assets.',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-100',
  },
  {
    id: 'dine-desk',
    name: 'Dine Desk Operator',
    logo: '/Dine-desk.svg',
    category: 'Hospitality Systems',
    description: 'Advanced real-time dining, desk booking, and customer flow management application.',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-100',
  },
  {
    id: 'crestsure',
    name: 'Crestsure Insurance',
    logo: '/Crestsure.svg',
    category: 'Insurance Tech',
    description: 'Connected system enabling unified stakeholder management and fast automated audits.',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-100',
  },
  {
    id: 'radiant-sage',
    name: 'Radiant Sage Imaging',
    logo: '/Radiant-sage.svg',
    category: 'Medical Systems',
    description: 'Clinical web application managing massive medical image audits and research records.',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-100',
  },
  {
    id: 'unix-sparts',
    name: 'Unix Auto Parts',
    logo: '/Unix-sparts.svg',
    category: 'E-Commerce Systems',
    description: 'High-performance parts catalog with real-time stock sync and automated pipelines.',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-100',
  },
]

// Row 1 Marquee items (scrolling left)
const marqueeRow1 = [
  { name: 'Kickstarter', path: mdiKickstarter, bgColor: 'bg-[#05A7D4]/10', iconColor: '#05A7D4' },
  { name: 'Hubspot', path: mdiHubspot, bgColor: 'bg-[#ED396D]/10', iconColor: '#ED396D' },
  { name: 'React', path: mdiReact, bgColor: 'bg-[#05A7D4]/10', iconColor: '#05A7D4' },
  { name: 'Node.js', path: mdiNodejs, bgColor: 'bg-[#ED396D]/10', iconColor: '#ED396D' },
  { name: 'Slack', path: mdiSlack, bgColor: 'bg-[#05A7D4]/10', iconColor: '#05A7D4' },
]

// Row 2 Marquee items (scrolling right/reverse)
const marqueeRow2 = [
  { name: 'AWS', path: mdiAws, bgColor: 'bg-[#05A7D4]/10', iconColor: '#05A7D4' },
  { name: 'Azure', path: mdiMicrosoftAzure, bgColor: 'bg-[#ED396D]/10', iconColor: '#ED396D' },
  { name: 'Docker', path: mdiDocker, bgColor: 'bg-[#05A7D4]/10', iconColor: '#05A7D4' },
  { name: 'Kubernetes', path: mdiKubernetes, bgColor: 'bg-[#ED396D]/10', iconColor: '#ED396D' },
  { name: 'Tailwind CSS', path: mdiTailwind, bgColor: 'bg-[#05A7D4]/10', iconColor: '#05A7D4' },
  { name: 'WordPress', path: mdiWordpress, bgColor: 'bg-[#ED396D]/10', iconColor: '#ED396D' },
]

export default function TechnologyPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', 'Logistics & Operations', 'GovTech & Security', 'Customer Relations', 'Security & Compliance', 'Hospitality Systems', 'Insurance Tech', 'Medical Systems', 'E-Commerce Systems']

  const filteredIntegrations = selectedCategory === 'All'
    ? integrations
    : integrations.filter(item => item.category === selectedCategory)

  return (
    <div className="bg-white min-h-screen">

      {/* Decorative top background elements to match the light theme */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-[#F7F8FA] to-white -z-10 pointer-events-none" />

      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden relative">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <SectionHeading
              eyebrow="Technology Ecosystem"
              title="Connect with 100+ tools"
              description="Gain invaluable predictive analytics and actionable insights, empowering you to make data-driven decisions. We integrate robust core architectures with modern tools."
              align="center"
            />
          </div>

          {/* Dual Marquee Rows */}
          <div className="mt-16 relative w-full overflow-hidden py-4 flex flex-col gap-6">
            {/* Fade overlays on left/right edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            {/* Row 1: Scrolls Left */}
            <div className="marquee-track flex gap-6">
              {[...marqueeRow1, ...marqueeRow1, ...marqueeRow1].map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="w-[130px] border border-[#d8054a] bg-white py-6 rounded-xl md:w-[260px] flex flex-col items-center justify-center shrink-0 hover:border-[#05A7D4]/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white ${item.bgColor}`}>
                      <Icon path={item.path} size={1.5} color={item.iconColor} />
                    </div>
                    <h3 className="tracking-none mt-6 text-center text-sm md:text-base font-semibold text-gray-800">
                      {item.name}
                    </h3>
                  </div>
                )
              })}
            </div>

            {/* Row 2: Scrolls Right (Reverse) */}
            <div className="marquee-track flex gap-6" style={{ animationDirection: 'reverse' }}>
              {[...marqueeRow2, ...marqueeRow2, ...marqueeRow2].map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="w-[130px] border border-[#d8054a] bg-white py-6 rounded-xl md:w-[260px] flex flex-col items-center justify-center shrink-0 hover:border-[#05A7D4]/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white ${item.bgColor}`}>
                      <Icon path={item.path} size={1.5} color={item.iconColor} />
                    </div>
                    <h3 className="tracking-none mt-6 text-center text-sm md:text-base font-semibold text-gray-800">
                      {item.name}
                    </h3>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Integrations Section */}
      <section className="pb-24 relative" id="integrations">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading
              title="Built & Integrated Solutions"
              description="A showcase of enterprise CRM, supply chain, GovTech, and operational systems built and managed by ABL BusinessTech."
              align="center"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer ${selectedCategory === cat
                  ? 'bg-[#05A7D4] text-white border-[#05A7D4] shadow-md shadow-[#05A7D4]/25'
                  : 'bg-[#F8F9FA] text-gray-700 hover:bg-gray-100 border-gray-200/80'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Integration Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIntegrations.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between p-8 bg-white border border-gray-200/80 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#05A7D4]/30 -translate-y-0 hover:-translate-y-1 transition-all duration-300 card-hover"
              >
                <div>
                  {/* Header containing icon and name */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-[64px] h-[64px] rounded-2xl bg-[#F8F9FA] border border-gray-150 flex items-center justify-center p-2 group-hover:scale-95 transition-all duration-300">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#05A7D4] transition-colors leading-tight mb-1">
                        {item.name}
                      </h3>
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${item.badgeColor}`}>
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-xs font-bold text-[#05A7D4] group-hover:text-[#025E78] transition-colors"
                  >
                    Discuss Integration
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Bottom Section */}
      <section className="py-20 bg-gradient-to-br from-[#0D0D1A] via-[#111827] to-[#0D0D1A] text-white relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#05A7D4]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ED396D]/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Need a Custom System Built?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Our engineering team builds custom supply chain platforms, secure GovTech applications, operations automation tools, and CRM solutions tailored specifically for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                className="shadow-lg shadow-[#05A7D4]/25 px-8 py-3.5"
              >
                Let's Talk About Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
