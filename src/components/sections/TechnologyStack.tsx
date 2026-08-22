'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  Monitor,
  Server,
  Smartphone,
  Cloud,
  BrainCircuit,
  Database,
  GitMerge,
  ShoppingBag,
  FileText,
  Zap,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Technology } from '@/types'

interface TechnologyStackProps {
  heading?: string
  description?: string
  technologies?: Technology[]
}

const categories = ['Frontend', 'Backend', 'Mobile', 'Cloud', 'AI/ML', 'Database', 'DevOps', 'E-commerce', 'CMS']

const defaultTechnologies = [
  // Frontend
  { _id: 'f1', name: 'React', category: 'Frontend', featured: true, order: 1 },
  { _id: 'f2', name: 'Next.js', category: 'Frontend', featured: true, order: 2 },
  { _id: 'f3', name: 'Vue.js', category: 'Frontend', featured: true, order: 3 },
  { _id: 'f4', name: 'TypeScript', category: 'Frontend', featured: true, order: 4 },
  { _id: 'f5', name: 'Angular', category: 'Frontend', featured: false, order: 5 },
  { _id: 'f6', name: 'Tailwind CSS', category: 'Frontend', featured: false, order: 6 },
  // Backend
  { _id: 'b1', name: 'Node.js', category: 'Backend', featured: true, order: 1 },
  { _id: 'b2', name: 'Python', category: 'Backend', featured: true, order: 2 },
  { _id: 'b3', name: 'PHP / Laravel', category: 'Backend', featured: true, order: 3 },
  { _id: 'b4', name: '.NET Core', category: 'Backend', featured: false, order: 4 },
  { _id: 'b5', name: 'Java / Spring', category: 'Backend', featured: false, order: 5 },
  { _id: 'b6', name: 'Go', category: 'Backend', featured: false, order: 6 },
  // Mobile
  { _id: 'm1', name: 'React Native', category: 'Mobile', featured: true, order: 1 },
  { _id: 'm2', name: 'Flutter', category: 'Mobile', featured: true, order: 2 },
  { _id: 'm3', name: 'iOS (Swift)', category: 'Mobile', featured: false, order: 3 },
  { _id: 'm4', name: 'Android (Kotlin)', category: 'Mobile', featured: false, order: 4 },
  // Cloud
  { _id: 'c1', name: 'AWS', category: 'Cloud', featured: true, order: 1 },
  { _id: 'c2', name: 'Azure', category: 'Cloud', featured: true, order: 2 },
  { _id: 'c3', name: 'Google Cloud', category: 'Cloud', featured: true, order: 3 },
  { _id: 'c4', name: 'Docker', category: 'Cloud', featured: false, order: 4 },
  { _id: 'c5', name: 'Kubernetes', category: 'Cloud', featured: false, order: 5 },
  // AI/ML
  { _id: 'a1', name: 'OpenAI / GPT', category: 'AI/ML', featured: true, order: 1 },
  { _id: 'a2', name: 'TensorFlow', category: 'AI/ML', featured: true, order: 2 },
  { _id: 'a3', name: 'PyTorch', category: 'AI/ML', featured: false, order: 3 },
  { _id: 'a4', name: 'Langchain', category: 'AI/ML', featured: false, order: 4 },
  // Database
  { _id: 'd1', name: 'PostgreSQL', category: 'Database', featured: true, order: 1 },
  { _id: 'd2', name: 'MongoDB', category: 'Database', featured: true, order: 2 },
  { _id: 'd3', name: 'MySQL', category: 'Database', featured: false, order: 3 },
  { _id: 'd4', name: 'Redis', category: 'Database', featured: false, order: 4 },
  // DevOps
  { _id: 'dev1', name: 'GitHub Actions', category: 'DevOps', featured: true, order: 1 },
  { _id: 'dev2', name: 'Jenkins', category: 'DevOps', featured: false, order: 2 },
  { _id: 'dev3', name: 'Terraform', category: 'DevOps', featured: false, order: 3 },
  // E-commerce
  { _id: 'e1', name: 'Shopify', category: 'E-commerce', featured: true, order: 1 },
  { _id: 'e2', name: 'WooCommerce', category: 'E-commerce', featured: false, order: 2 },
  { _id: 'e3', name: 'Magento', category: 'E-commerce', featured: false, order: 3 },
] as Technology[]

const categoryIcons: Record<string, React.ElementType> = {
  Frontend: Monitor,
  Backend: Server,
  Mobile: Smartphone,
  Cloud: Cloud,
  'AI/ML': BrainCircuit,
  Database: Database,
  DevOps: GitMerge,
  'E-commerce': ShoppingBag,
  CMS: FileText,
}

export function TechnologyStack({ heading, description, technologies }: TechnologyStackProps) {
  const displayTechs = technologies?.length ? technologies : defaultTechnologies
  const displayHeading = heading || 'Our Technology Ecosystem'
  const displayDescription = description || 'We work with the best-in-class tools and frameworks across the full technology stack — from frontend to AI to cloud infrastructure.'

  const availableCategories = categories.filter((c) => displayTechs.some((t) => t.category === c))
  const [activeCategory, setActiveCategory] = useState<string>(availableCategories[0] || 'Frontend')

  useEffect(() => {
    if (availableCategories.length && !availableCategories.includes(activeCategory)) {
      setActiveCategory(availableCategories[0])
    }
  }, [displayTechs, availableCategories, activeCategory])

  const filtered = displayTechs.filter((t) => t.category === activeCategory)

  return (
    <section className="section-padding bg-[#F7F8FA]" aria-label="Technology stack">
      <Container>
        <div className="text-center mb-14">
          <SectionHeading
            eyebrow="Technology Stack"
            title={displayHeading}
            description={displayDescription}
            align="center"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Technology categories">
          {availableCategories.map((cat) => {
            const TabIcon = categoryIcons[cat] || Zap
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                aria-controls={`tech-panel-${cat}`}
                id={`tech-tab-${cat}`}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#E3164F] text-white shadow-md shadow-[#E3164F]/20'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200/80'
                }`}
              >
                <TabIcon
                  className={`w-4 h-4 shrink-0 transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-gray-500'
                  }`}
                  aria-hidden="true"
                />
                {cat}
              </button>
            )
          })}
        </div>

        {/* Tech Items Grid */}
        <div
          id={`tech-panel-${activeCategory}`}
          role="tabpanel"
          aria-labelledby={`tech-tab-${activeCategory}`}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5"
        >
          {filtered.map((tech) => (
            <div
              key={tech._id}
              className="group flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-gray-200/60 hover:border-[#E3164F]/30 hover:shadow-lg transition-all duration-300 card-hover text-center"
            >
              {/* Logo / Image rendering */}
              <div className="w-14 h-14 rounded-2xl bg-[#F8F9FA] border border-gray-100 group-hover:border-[#E3164F]/20 group-hover:bg-gradient-to-br group-hover:from-[#E3164F]/5 group-hover:to-[#008BCB]/5 flex items-center justify-center transition-all duration-300 overflow-hidden p-2">
                {tech.logo?.asset?.url ? (
                  <Image
                    src={tech.logo.asset.url}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <span className="text-xs font-black text-gray-700 group-hover:text-[#E3164F] transition-colors">
                    {tech.name.slice(0, 3).toUpperCase()}
                  </span>
                )}
              </div>

              {/* Title */}
              <p className="text-xs font-bold text-gray-800 group-hover:text-[#E3164F] transition-colors leading-tight">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
