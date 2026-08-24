'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import type { NavItem } from '@/types'

interface HeaderProps {
  navigation?: {
    items: NavItem[]
    cta?: { label: string; href: string }
  }
}

const defaultNavItems: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    megaMenu: true,
    children: [
      { label: 'AI & Data Engineering', href: '/services/ai-data-engineering', description: 'Production-ready AI agents & ML models', icon: '🤖' },
      { label: 'Software Engineering', href: '/services/software-engineering', description: 'Enterprise software & SaaS development', icon: '💻' },
      { label: 'Digital Experiences', href: '/services/digital-experiences-web-mobile', description: 'Web apps, mobile & enterprise portals', icon: '📱' },
      { label: 'Enterprise Applications', href: '/services/enterprise-applications', description: 'Custom ERP, CRM & HRMS systems', icon: '🏢' },
      { label: 'Cloud & DevOps', href: '/services/cloud-and-devops', description: 'Cloud migration & CI/CD pipelines', icon: '☁️' },
      { label: 'Data & Analytics', href: '/services/data-analytics-solutions', description: 'BI platforms & real-time dashboards', icon: '📊' },
      { label: 'QA & Testing', href: '/services/quality-assurance-testing', description: 'Automated testing & security audits', icon: '✅' },
      { label: 'Staff Augmentation', href: '/services/staff-augmentation', description: 'Top 1% engineers in 2 weeks', icon: '👥' },
      { label: 'UI/UX Design', href: '/services/ui-ux-design', description: 'UX-led design & design systems', icon: '🎨' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Work', href: '/work' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Header({ navigation }: HeaderProps) {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeMega, setActiveMega] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const megaRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const navItems = navigation?.items?.length ? navigation.items : defaultNavItems
  const cta = navigation?.cta || { label: "Let's Talk", href: '/contact' }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveMega(label)
  }

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveMega(null), 150)
  }

  const hasMegaMenu = (item: NavItem) => item.megaMenu && item.children && item.children.length > 0

  if (pathname?.startsWith('/studio')) return null

  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to main content</a>

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-200/20 backdrop-blur-md',
          isScrolled ? 'bg-white shadow-sm' : 'bg-white/95'
        )}
        role="banner"
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0" aria-label="AB BusinessTech LLP - Home">
              <Image
                src="/logo-abltech.png"
                alt="AB BusinessTech LLP Logo"
                width={150}
                height={45}
                style={{ width: 'auto', height: '80px' }}
                className="h-10 lg:h-12 object-contain mix-blend-multiply"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
              onMouseLeave={handleMouseLeave}
            >
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasMegaMenu(item) ? handleMouseEnter(item.label) : setActiveMega(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150',
                      'text-gray-700 hover:text-[#E3164F] hover:bg-red-50'
                    )}
                    target={item.openInNewTab ? '_blank' : undefined}
                    rel={item.openInNewTab ? 'noopener noreferrer' : undefined}
                  >
                    {item.label}
                    {hasMegaMenu(item) && (
                      <ChevronDown
                        className={cn(
                          'w-3.5 h-3.5 transition-transform duration-200',
                          activeMega === item.label && 'rotate-180'
                        )}
                        aria-hidden="true"
                      />
                    )}
                  </Link>

                  {/* Redesigned Premium Mega Menu */}
                  {hasMegaMenu(item) && activeMega === item.label && (
                    <div
                      ref={megaRef}
                      className="mega-menu-enter absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[820px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 flex gap-6"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      role="region"
                      aria-label={`${item.label} submenu`}
                    >
                      {/* Left Side: Services Grid */}
                      <div className="flex-1">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Our Services</p>
                        <div className="grid grid-cols-2 gap-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group flex items-start gap-3 p-3 rounded-xl hover:bg-red-50/50 transition-colors duration-150"
                              onClick={() => setActiveMega(null)}
                            >
                              <span className="text-2xl shrink-0">{child.icon}</span>
                              <div className="min-w-0">
                                <p className="text-sm font-bold text-gray-900 group-hover:text-[#E3164F] transition-colors">
                                  {child.label}
                                </p>
                                {child.description && (
                                  <p className="text-xs text-gray-500 mt-0.5 leading-snug">{child.description}</p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Right Side: Featured Showcase Panel */}
                      <div className="w-[280px] bg-gradient-to-br from-[#0D0D1A] to-[#1A1A2E] rounded-xl p-5 text-white flex flex-col justify-between shrink-0 border border-white/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(227,22,79,0.15),transparent_60%)]" />
                        <div className="relative z-10">
                          <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#E3164F]/20 text-[#FF3D6E] uppercase tracking-wider mb-4">
                            Featured Case Study
                          </span>
                          <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                            AI-Powered E-Commerce Platform
                          </h4>
                          <p className="text-xs text-gray-400 leading-relaxed mb-4">
                            How we helped RetailVision scale to millions of users and increase conversion by 42%.
                          </p>
                        </div>
                        <Link
                          href="/work/ai-ecommerce-platform"
                          className="relative z-10 inline-flex items-center gap-1.5 text-xs font-bold text-[#E3164F] hover:text-[#FF3D6E] hover:gap-2.5 transition-all mt-4"
                          onClick={() => setActiveMega(null)}
                        >
                          Read Case Study <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button href={cta.href} variant="primary" size="sm">
                {cta.label}
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden relative w-10 h-10 rounded-xl bg-gray-100 hover:bg-[#E3164F]/10 hover:text-[#E3164F] flex items-center justify-center transition-all duration-200"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={cn(
                  'absolute transition-all duration-300',
                  isMobileOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
                )}
              >
                <X className="w-5 h-5" />
              </span>
              <span
                className={cn(
                  'absolute transition-all duration-300',
                  isMobileOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'
                )}
              >
                <Menu className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>

      </header>

      {/* Spacer */}
      <div className="h-16 lg:h-20" aria-hidden="true" />

      {/* ─── Premium Full-Screen Mobile Menu (outside header to avoid z-index clipping) ─── */}
      <div
        id="mobile-menu"
        className="lg:hidden"
        aria-hidden={!isMobileOpen}
      >
        <div
          className={cn(
            'fixed inset-0 top-16 z-[9999] transition-transform duration-300 ease-in-out',
            isMobileOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          {/* Dark Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D1A] via-[#111827] to-[#0D0D1A]" />
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E3164F]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#008BCB]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Scrollable content */}
          <div className="relative z-10 h-full overflow-y-auto flex flex-col">
            <nav className="flex-1 px-6 py-8 space-y-1" aria-label="Mobile navigation">

              {/* Nav Items */}
              {navItems.map((item, index) => (
                <div key={item.label}>
                  {/* Main nav link row */}
                  <div
                    className="flex items-center justify-between group rounded-2xl px-2 py-1 hover:bg-white/5 transition-colors duration-150"
                    style={{ animationDelay: `${index * 60}ms` }}
                  >
                    <Link
                      href={item.href}
                      className="flex-1 py-3 text-xl font-bold text-white/90 hover:text-white group-hover:text-white transition-colors"
                      onClick={() => !hasMegaMenu(item) && setIsMobileOpen(false)}
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E3164F] group-hover:scale-125 transition-transform" />
                        {item.label}
                      </span>
                    </Link>

                    {hasMegaMenu(item) && (
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={mobileExpanded === item.label}
                      >
                        <ChevronDown
                          className={cn(
                            'w-5 h-5 transition-transform duration-200',
                            mobileExpanded === item.label && 'rotate-180'
                          )}
                        />
                      </button>
                    )}
                  </div>

                  {/* Expandable sub-items */}
                  {hasMegaMenu(item) && mobileExpanded === item.label && (
                    <div className="mt-2 mb-3 ml-4 grid grid-cols-1 gap-1 bg-white/5 rounded-2xl p-3 border border-white/10">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/10 transition-colors group"
                          onClick={() => setIsMobileOpen(false)}
                        >
                          <span className="text-xl shrink-0">{child.icon}</span>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
                              {child.label}
                            </p>
                            {child.description && (
                              <p className="text-xs text-white/40 mt-0.5 leading-snug">
                                {child.description}
                              </p>
                            )}
                          </div>
                          <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#E3164F] group-hover:translate-x-0.5 ml-auto shrink-0 transition-all duration-200" />
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Separator line */}
                  <div className="border-b border-white/5 mx-2" />
                </div>
              ))}
            </nav>

            {/* Bottom CTA Section */}
            <div className="relative z-10 px-6 pb-10 pt-4 space-y-4 border-t border-white/10 bg-black/20 backdrop-blur-sm">
              {/* Quick Info */}
              <p className="text-xs text-white/40 font-medium uppercase tracking-wider">
                Ready to build something great?
              </p>

              {/* CTA Button */}
              <Button
                href={cta.href}
                variant="primary"
                className="w-full !text-base !py-3.5 shadow-lg shadow-[#E3164F]/20"
                onClick={() => setIsMobileOpen(false)}
              >
                {cta.label}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              {/* Company Info */}
              <div className="flex items-center justify-between pt-2">
                <p className="text-xs text-white/30">AB BusinessTech LLP</p>
                <div className="flex items-center gap-3">
                  <Link
                    href="/contact"
                    className="text-xs text-white/40 hover:text-white transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Contact
                  </Link>
                  <span className="text-white/20">•</span>
                  <Link
                    href="/about"
                    className="text-xs text-white/40 hover:text-white transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    About
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
