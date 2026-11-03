'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, MapPin, CheckCircle2, Compass, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const PopularSectorMapsSection = () => {
  const sectorMaps = [
    'Alpha 1 Map',
    'Alpha 2 Map',
    'Beta 1 Map',
    'Beta 2 Map',
    'Gamma 1 Map',
    'Delta 1 Map',
    'Sigma 1 Map',
    'Omicron 1 Map',
    'Ecotech 1 Map',
    'Knowledge Park III Map',
  ]

  const benefits = [
    {
      title: 'See the real layout',
      description: 'Understand roads, blocks, parks and commercial belts before a site visit.',
      icon: <Compass className="size-5 text-amber-400" />,
    },
    {
      title: 'Compare locations',
      description: 'Weigh established sectors against emerging areas to shortlist faster.',
      icon: <MapPin className="size-5 text-amber-400" />,
    },
    {
      title: 'Plan with confidence',
      description: 'Use the map as a reference while discussing a plot, house or flat with our team.',
      icon: <ShieldCheck className="size-5 text-amber-400" />,
    },
  ]

  return (
    <section className="relative w-full bg-black text-white py-20 px-6 md:px-12 overflow-hidden font-sans">
      
      {/* Grid Pattern Background Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.12]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(234, 179, 8, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(234, 179, 8, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto space-y-20">
        
        {/* Part 1: Popular Greater Noida Sector Maps */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white border-l-4 border-amber-400 pl-4">
              Popular Greater Noida Sector Maps
            </h2>
          </div>

          {/* Sector Pill Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {sectorMaps.map((sector, index) => (
              <Link
                key={index}
                href={`/maps/greater-noida/${sector.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 rounded-full bg-zinc-950/80 border border-amber-500/30 text-zinc-300 text-xs md:text-sm font-medium hover:bg-amber-500 hover:text-black hover:border-amber-400 transition-all shadow-sm"
              >
                {sector}
              </Link>
            ))}
            <Link
              href="/maps/greater-noida"
              className="px-4 py-2 rounded-full bg-amber-500 text-black text-xs md:text-sm font-semibold hover:bg-amber-400 transition-all shadow-md flex items-center gap-1.5"
            >
              <span>View all sector maps</span>
              <ArrowRight className="size-3.5" data-icon="inline-end" />
            </Link>
          </div>
        </div>

        {/* Part 2: Why Check the Map Before You Buy? */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white border-l-4 border-amber-400 pl-4">
              Why Check the Map Before You Buy?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((item, index) => (
              <div 
                key={index}
                className="bg-zinc-950/80 border border-amber-500/20 rounded-2xl p-6 transition-all duration-300 hover:border-amber-400/60 hover:bg-zinc-900/90 shadow-lg space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-amber-400 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-950/90 border border-amber-500/30 rounded-2xl p-8 md:p-10 space-y-4 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
            Your Property Dealer in Greater Noida
          </h2>
          <p className="text-sm md:text-base text-zinc-300 leading-relaxed max-w-4xl">
            <span className="text-amber-400 font-semibold">Chhabra Properties</span> helps buyers, sellers and investors with residential plots, houses, land, commercial and industrial property across Greater Noida, Noida and the Yamuna Expressway. Our maps are the starting point; our team adds local market knowledge and clear guidance from enquiry to registration.
          </p>
        </div>

      </div>
    </section>
  )
}

export default PopularSectorMapsSection