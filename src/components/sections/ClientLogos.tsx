'use client'

import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import type { Client } from '@/types'

interface ClientLogosProps {
  heading?: string
  clients?: Client[]
}

const defaultLogos: (Client | { _id: string; name: string; industry: string; logo?: { asset?: { url?: string } } })[] = [
  { _id: '1', name: 'TechCorp', industry: 'Enterprise Software', logo: undefined },
  { _id: '2', name: 'InnovatePlus', industry: 'Fintech', logo: undefined },
  { _id: '3', name: 'DataStream', industry: 'AI & Data Solutions', logo: undefined },
  { _id: '4', name: 'CloudFirst', industry: 'Cloud Engineering', logo: undefined },
  { _id: '5', name: 'NexaDigital', industry: 'E-commerce', logo: undefined },
  { _id: '6', name: 'SmartRetail', industry: 'Retail Technology', logo: undefined },
  { _id: '7', name: 'FinEdge', industry: 'Banking', logo: undefined },
  { _id: '8', name: 'HealthBridge', industry: 'Healthcare', logo: undefined },
]

const avatarGrads = [
  ['#E3164F', '#FF6B9D'],
  ['#008BCB', '#00C4FF'],
  ['#7C3AED', '#A78BFA'],
  ['#059669', '#34D399'],
  ['#D97706', '#FCD34D'],
  ['#E3164F', '#008BCB'],
  ['#0891B2', '#67E8F9'],
  ['#DC2626', '#F87171'],
]

export function ClientLogos({ heading, clients }: ClientLogosProps) {
  const displayHeading = heading || 'Trusted by Growing Businesses Worldwide'
  const displayClients = clients?.length ? clients : defaultLogos
  const tripled = [...displayClients, ...displayClients, ...displayClients]

  return (
    <section
      className="relative overflow-hidden border-y"
      style={{
        background: 'linear-gradient(180deg, #F0F4FF 0%, #FFFFFF 50%, #F0F4FF 100%)',
        borderColor: 'rgba(0,139,203,0.10)',
      }}
      aria-label="Client logos"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,139,203,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 py-14">
        {/* Label */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, #E3164F)' }} />
            <span
              className="text-[11px] font-bold tracking-[0.2em] uppercase"
              style={{
                background: 'linear-gradient(90deg, #E3164F, #008BCB)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Global Client Partnerships
            </span>
            <span className="h-px w-10" style={{ background: 'linear-gradient(90deg, #008BCB, transparent)' }} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
            {displayHeading}
          </h2>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden" role="list" aria-label="Our clients">
          {/* Fade edges */}
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10"
            style={{ background: 'linear-gradient(90deg, #F0F4FF, transparent)' }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10"
            style={{ background: 'linear-gradient(270deg, #F0F4FF, transparent)' }}
            aria-hidden="true"
          />

          <div className="flex overflow-hidden">
            <div className="marquee-track flex items-center gap-4 py-2">
              {tripled.map((client, i) => {
                const [g1, g2] = avatarGrads[i % avatarGrads.length]
                return (
                  <div
                    key={`${client._id}-${i}`}
                    className="flex items-center gap-3 shrink-0 px-5 py-3.5 rounded-2xl border transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.85)',
                      backdropFilter: 'blur(8px)',
                      borderColor: 'rgba(0,0,0,0.07)',
                      minWidth: '176px',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                    }}
                    role="listitem"
                  >
                    {client.logo?.asset?.url ? (
                      <div className="w-9 h-9 shrink-0 flex items-center justify-center">
                        <Image src={client.logo.asset.url} alt={client.name} width={36} height={36} className="w-9 h-9 object-contain" />
                      </div>
                    ) : (
                      <div
                        className="w-9 h-9 rounded-xl shrink-0 flex items-center justify-center text-white font-black text-sm"
                        style={{ background: `linear-gradient(135deg, ${g1}, ${g2})` }}
                      >
                        {client.name[0]}
                      </div>
                    )}
                    <div>
                      <p className="text-[13px] font-bold text-[#111111] whitespace-nowrap leading-none mb-0.5">{client.name}</p>
                      {client.industry && (
                        <p className="text-[10px] text-gray-400 whitespace-nowrap">{client.industry}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="flex items-center justify-center gap-8 mt-10 flex-wrap">
          {['100+ Projects Delivered', 'ISO-Grade Security', 'Agile & Transparent', 'On-Time Delivery'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: 'linear-gradient(135deg, #E3164F, #008BCB)' }}
              />
              <span className="text-xs font-semibold text-gray-500">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
