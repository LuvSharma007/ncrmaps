'use client'

import React, { useState } from 'react'
import { Map, ArrowRight, Layers } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const MapsPageSection = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'greater-noida' | 'noida' | 'yamuna'>('all')

  const mapItems = [
    {
      id: 'greater-noida',
      category: 'Greater Noida',
      title: 'Greater Noida Map',
      subtitle: "Navigate the city's sectors and zones",
      description: 'Browse sector-wise layouts of Greater Noida, from Alpha, Beta and Gamma to Sigma, Omicron, Ecotech and Knowledge Park. See residential, commercial and industrial zones clearly before you shortlist a plot, house or flat.',
      link: '/maps/greater-noida',
      img:'https://chhabraproperty.com/wp-content/uploads/2026/10/MP-GREATER-NOIDA-5.jpg'
    },
    {
      id: 'noida',
      category: 'Noida',
      title: 'Noida Master Plan Map',
      subtitle: 'Explore sectors 1 through 150+',
      description: 'Comprehensive layout maps covering Noida prime residential sectors, commercial hubs, metro connectivity corridors, and expressway access points for informed real estate decisions.',
      link:'/maps/noida',
      img: 'https://chhabraproperty.com/wp-content/uploads/2026/10/MP-YAMUNA-2031-1.jpg',
    },
    {
      id: 'yamuna',
      category: 'Yamuna Expressway',
      title: 'Yamuna Expressway (YEIDA) Map',
      subtitle: 'Track industrial plots & Jewar Airport zones',
      description: 'Detailed YEIDA master plan maps highlighting upcoming industrial sectors, residential plots near the airport, and expressway connectivity projects for high-ROI investments.',
      link: '/maps/yamuna',
      img:'https://chhabraproperty.com/wp-content/uploads/2026/10/MP-NOIDA.jpg.jpeg'
    },
  ]

  const filteredMaps = activeTab === 'all' 
    ? mapItems 
    : mapItems.filter(item => item.id === activeTab)

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

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center space-y-4 mb-10 max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Navigate with Ease: Greater Noida, Noida & Yamuna Expressway Maps[cite: 10]
          </h1>
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Open clear layout maps and master plans for Greater Noida, Noida and the Yamuna Expressway (YEIDA). Compare sectors, check roads and zones, and plan your property search with local guidance from Chhabra Properties[cite: 10].
          </p>
        </div>

        {/* Filter Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <Button
            onClick={() => setActiveTab('all')}
            variant={activeTab === 'all' ? 'default' : 'outline'}
            className={`rounded-full px-6 text-xs md:text-sm font-semibold transition-all ${
              activeTab === 'all' 
                ? 'bg-amber-500 text-black hover:bg-amber-400' 
                : 'border-amber-500/40 text-amber-400 bg-black/40 hover:bg-amber-500/10 hover:border-amber-400'
            }`}
          >
            All Maps
          </Button>
          <Button
            onClick={() => setActiveTab('greater-noida')}
            variant={activeTab === 'greater-noida' ? 'default' : 'outline'}
            className={`rounded-full px-6 text-xs md:text-sm font-semibold transition-all ${
              activeTab === 'greater-noida' 
                ? 'bg-amber-500 text-black hover:bg-amber-400' 
                : 'border-amber-500/40 text-amber-400 bg-black/40 hover:bg-amber-500/10 hover:border-amber-400'
            }`}
          >
            Greater Noida Maps[cite: 10]
          </Button>
          <Button
            onClick={() => setActiveTab('noida')}
            variant={activeTab === 'noida' ? 'default' : 'outline'}
            className={`rounded-full px-6 text-xs md:text-sm font-semibold transition-all ${
              activeTab === 'noida' 
                ? 'bg-amber-500 text-black hover:bg-amber-400' 
                : 'border-amber-500/40 text-amber-400 bg-black/40 hover:bg-amber-500/10 hover:border-amber-400'
            }`}
          >
            Noida Maps[cite: 10]
          </Button>
          <Button
            onClick={() => setActiveTab('yamuna')}
            variant={activeTab === 'yamuna' ? 'default' : 'outline'}
            className={`rounded-full px-6 text-xs md:text-sm font-semibold transition-all ${
              activeTab === 'yamuna' 
                ? 'bg-amber-500 text-black hover:bg-amber-400' 
                : 'border-amber-500/40 text-amber-400 bg-black/40 hover:bg-amber-500/10 hover:border-amber-400'
            }`}
          >
            Yamuna Expressway Maps[cite: 10]
          </Button>
        </div>

        {/* Maps List Stack / Cards */}
        <div className="w-full max-w-5xl space-y-8">
          {filteredMaps.map((map) => (
            <div 
              key={map.id}
              className="bg-zinc-950/90 border border-amber-500/20 rounded-2xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-300 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-500/5"
            >
              {/* Left: Image / Map Preview Placeholder (Left as empty wrapper) */}
              <div className="lg:col-span-6 relative w-full h-64 md:h-72 rounded-xl bg-zinc-900 border border-amber-500/10 overflow-hidden flex flex-col items-center justify-center p-4">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto text-amber-400">
                  </div>
                  <span className="text-xs text-zinc-500 font-medium tracking-wide block">
                    <img src={map.img} alt={map.title} />
                  </span>
                </div>
              </div>

              {/* Right: Content Details */}
              <div className="lg:col-span-6 space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold tracking-widest uppercase text-amber-400">
                    {map.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {map.title}
                  </h2>
                  <p className="text-xs text-zinc-400 font-medium">
                    {map.subtitle}
                  </p>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {map.description}
                </p>

                <div className="pt-2">
                  <Button 
                    className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-5 rounded-xl transition-all shadow-md text-sm flex items-center gap-2 group w-fit"
                  >
                    <Link href={map.link}>
                      <span>Explore {map.category} Map</span>
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" data-icon="inline-end" />
                    </Link>
                  </Button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default MapsPageSection