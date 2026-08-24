// =============================================
// Shared TypeScript Types for ABL BusinessTech
// =============================================

export interface SanityImage {
  asset: {
    url: string
    metadata?: {
      lqip?: string
      dimensions?: { width: number; height: number; aspectRatio: number }
    }
  }
  hotspot?: { x: number; y: number }
  crop?: { top: number; bottom: number; left: number; right: number }
  alt?: string
  caption?: string
}

export interface SEO {
  metaTitle?: string
  metaDescription?: string
  ogImage?: SanityImage
  ogTitle?: string
  ogDescription?: string
  canonicalUrl?: string
  keywords?: string[]
  robots?: string
}

export interface NavItem {
  label: string
  href: string
  openInNewTab?: boolean
  megaMenu?: boolean
  children?: NavChild[]
}

export interface NavChild {
  label: string
  href: string
  description?: string
  icon?: string
}

export interface FooterLink {
  label: string
  href: string
  openInNewTab?: boolean
}

export interface FooterColumn {
  heading: string
  links: FooterLink[]
}

// =============================================
// Content Types
// =============================================

export interface Service {
  _id: string
  title: string
  slug: { current: string }
  shortDescription: string
  icon?: string
  heroTitle?: string
  heroDescription?: string
  heroImage?: SanityImage
  features?: ServiceFeature[]
  benefits?: string[]
  technologies?: Technology[]
  process?: ServiceProcess[]
  faqs?: FAQ[]
  caseStudies?: CaseStudy[]
  seo?: SEO
  featured: boolean
  order?: number
}

export interface ServiceFeature {
  title: string
  description: string
  icon?: string
}

export interface ServiceProcess {
  step: number
  title: string
  description: string
}

export interface Industry {
  _id: string
  name: string
  slug: { current: string }
  description: string
  icon?: string
  heroImage?: SanityImage
  challenges?: { title: string; description: string }[]
  solutions?: { title: string; description: string }[]
  services?: Service[]
  technologies?: Technology[]
  caseStudies?: CaseStudy[]
  faqs?: FAQ[]
  seo?: SEO
  featured: boolean
  order?: number
}

export interface CaseStudy {
  _id: string
  title: string
  slug: { current: string }
  client?: string
  shortDescription?: string
  heroImage?: SanityImage
  gallery?: SanityImage[]
  challenge?: string
  solution?: string
  approach?: unknown[]
  technologyStack?: Technology[]
  metrics?: Metric[]
  testimonial?: Testimonial
  industry?: { _id: string; name: string; slug: { current: string } }
  service?: { _id: string; title: string; slug: { current: string } }
  seo?: SEO
  featured: boolean
  publishedAt?: string
}

export interface Metric {
  value: string
  metric: string
  description?: string
}

export interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  featuredImage?: SanityImage
  author?: Author
  category?: Category
  tags?: string[]
  publishedAt?: string
  updatedAt?: string
  readingTime?: number
  featured: boolean
  content?: unknown[]
  seo?: SEO
}

export interface Author {
  name: string
  slug?: { current: string }
  photo?: SanityImage
  bio?: string
  designation?: string
  linkedin?: string
  twitter?: string
}

export interface Category {
  _id: string
  title: string
  slug: { current: string }
  description?: string
  color?: string
}

export interface Client {
  _id: string
  name: string
  logo?: SanityImage
  website?: string
  industry?: string
  featured: boolean
  order?: number
}

export interface Testimonial {
  _id: string
  clientName: string
  designation?: string
  company?: string
  photo?: SanityImage
  testimonial: string
  rating?: number
  featured: boolean
  order?: number
}

export interface TeamMember {
  _id: string
  name: string
  designation?: string
  department?: string
  photo?: SanityImage
  bio?: string
  linkedin?: string
  twitter?: string
  featured: boolean
  order?: number
}

export interface Technology {
  _id: string
  name: string
  category: string
  logo?: SanityImage
  description?: string
  website?: string
  featured: boolean
  order?: number
}

export interface Statistic {
  _id: string
  value: string
  label: string
  description?: string
  icon?: string
  order?: number
}

export interface ProcessStep {
  _id: string
  step: number
  title: string
  description?: string
  icon?: string
  duration?: string
  deliverables?: string[]
}

export interface CompanyValue {
  _id: string
  title: string
  description?: string
  icon?: string
  order?: number
}

export interface OfficeLocation {
  _id: string
  city: string
  country?: string
  address?: string
  phone?: string
  email?: string
  mapUrl?: string
  isHeadquarters: boolean
  order?: number
}

export interface FAQ {
  question: string
  answer: string
}

export interface SiteSettings {
  siteName: string
  tagline?: string
  contactEmail?: string
  phone?: string
  address?: string
  socialLinks?: {
    linkedin?: string
    instagram?: string
    facebook?: string
    twitter?: string
  }
  defaultSeo?: SEO
  googleAnalyticsId?: string
  logo?: SanityImage
}

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  service?: string
  budget?: string
  message: string
}

export interface ConsultationFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  service?: string
  budget?: string
  projectDetails?: string
  preferredContact?: string
}
