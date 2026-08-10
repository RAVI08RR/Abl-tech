'use client'

import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import type { Client } from '@/types'

interface ClientLogosProps {
  heading?: string
  clients?: Client[]
}

const defaultLogos = [
  { _id: '1', name: 'TechCorp', industry: 'Enterprise Software' },
  { _id: '2', name: 'InnovatePlus', industry: 'Fintech' },
  { _id: '3', name: 'DataStream', industry: 'AI & Data Solutions' },
  { _id: '4', name: 'CloudFirst', industry: 'Cloud Engineering' },
  { _id: '5', name: 'NexaDigital', industry: 'E-commerce' },
  { _id: '6', name: 'SmartRetail', industry: 'Retail Technology' },
  { _id: '7', name: 'FinEdge', industry: 'Banking' },
  { _id: '8', name: 'HealthBridge', industry: 'Healthcare' },
]

export function ClientLogos({ heading, clients }: ClientLogosProps) {
  const displayHeading = heading || 'Trusted Technology Partner for Growing Businesses'
  const displayClients = clients?.length ? clients : defaultLogos

  return (
    <section className="py-16 bg-gradient-to-b from-[#F7F8FA] via-white to-[#F7F8FA] border-y border-gray-200/60 overflow-hidden relative" aria-label="Client logos">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-gradient-to-r from-[#E3164F]/5 via-[#008BCB]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E3164F] animate-pulse" />
            <span className="text-[11px] font-bold text-gray-600 uppercase tracking-widest font-sans">
              GLOBAL CLIENT PARTNERSHIPS
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] font-display">
            {displayHeading}
          </h2>
        </div>

        {/* Marquee Slider */}
        <div className="relative overflow-hidden py-2" role="list" aria-label="Our clients">
          {/* Left Fade Overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F7F8FA] via-[#F7F8FA]/90 to-transparent z-10 pointer-events-none" aria-hidden="true" />
          {/* Right Fade Overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F7F8FA] via-[#F7F8FA]/90 to-transparent z-10 pointer-events-none" aria-hidden="true" />

          <div className="flex overflow-hidden">
            <div className="marquee-track flex items-center">
              {[...displayClients, ...displayClients, ...displayClients].map((client, i) => (
                <div
                  key={`${client._id || client.name}-${i}`}
                  className="flex items-center justify-center mx-4 shrink-0"
                  role="listitem"
                >
                  <div className="group flex items-center gap-3 px-6 py-3.5 bg-white rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md hover:border-[#E3164F]/30 transition-all duration-300 min-w-[160px]">
                    {client.logo?.asset?.url ? (
                      <div className="w-8 h-8 relative shrink-0 flex items-center justify-center">
                        <Image
                          src={client.logo.asset.url}
                          alt={client.name}
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#E3164F]/10 to-[#008BCB]/10 group-hover:from-[#E3164F]/20 group-hover:to-[#008BCB]/20 flex items-center justify-center shrink-0 transition-colors">
                        <span className="text-xs font-black text-[#E3164F]">{client.name[0]}</span>
                      </div>
                    )}
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-gray-800 group-hover:text-[#E3164F] transition-colors whitespace-nowrap">
                        {client.name}
                      </span>
                      {client.industry && (
                        <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">
                          {client.industry}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
