'use client'

import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const MapsPageSection = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'greater-noida' | 'noida' | 'yamuna'>('all')

  const mapItems = [
    {
      id: 'greater-noida',
      category: 'Greater Noida Authority',
      title: 'Greater Noida Master & Sector Plan',
      subtitle: 'Complete Alpha to Ecotech cartography',
      description: 'Explore verified sector-wise layouts across residential, commercial, and industrial clusters. Includes Alpha, Beta, Gamma, Sigma, Omicron, Knowledge Park, and Ecotech zones with plot dimensions and park locations.',
      link: '/maps/greater-noida',
      count: '120+ Maps',
      img: 'https://chhabraproperty.com/wp-content/uploads/2026/10/MP-GREATER-NOIDA-5.jpg'
    },
    {
      id: 'noida',
      category: 'Noida Authority',
      title: 'Noida Master Plan & Sectors 1–168',
      subtitle: 'Expressway corridors & prime residential hubs',
      description: 'Comprehensive layout blueprints covering prime residential sectors (44, 50, 78, 137, 150), institutional corridors, metro connectivity stations, and 5% abadi plots for diligent property acquisition.',
      link: '/maps/noida',
      count: '200+ Maps',
      img: 'https://chhabraproperty.com/wp-content/uploads/2026/10/MP-NOIDA.jpg.jpeg'
    },
    {
      id: 'yamuna',
      category: 'YEIDA Authority',
      title: 'Yamuna Expressway (YEIDA) Master Plan',
      subtitle: 'Jewar Airport aerotropolis & industrial clusters',
      description: 'High-precision layout plans highlighting upcoming industrial manufacturing sectors, residential plots (Sector 18 & 20), Gaur Yamuna City, and multi-modal transit corridors near Noida International Airport.',
      link: '/maps/yamuna',
      count: '70+ Maps',
      img: '/src/assets/images/master_plan_yeida_airport_1793725858775.jpg'
    },
  ]

  const filteredMaps = activeTab === 'all' 
    ? mapItems 
    : mapItems.filter(item => item.id === activeTab)

  return (
    <section className="relative w-full bg-zinc-950 text-white py-16 md:py-24 px-6 md:px-12 border-b border-zinc-800/80 font-sans">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center space-y-4 mb-10 max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
            Delhi-NCR Cartography
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight [text-wrap:balance]">
            Explore Official Layout Plans &amp; Sector Blueprints
          </h1>
          <p className="text-sm md:text-base text-zinc-300 leading-relaxed max-w-2xl mx-auto [text-wrap:balance]">
            Review detailed sector layouts, verify road widths, inspect park facing alignments, and plan your site visit with verified data from local NCR property advisors.
          </p>
        </div>

        {/* Clean Segmented Control for Filtering */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-zinc-900 border border-zinc-800 rounded-2xl mb-14">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2 text-xs md:text-sm font-semibold rounded-xl transition-all ${
              activeTab === 'all'
                ? 'bg-amber-500 text-black shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            All Authorities
          </button>
          <button
            onClick={() => setActiveTab('greater-noida')}
            className={`px-5 py-2 text-xs md:text-sm font-semibold rounded-xl transition-all ${
              activeTab === 'greater-noida'
                ? 'bg-amber-500 text-black shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Greater Noida
          </button>
          <button
            onClick={() => setActiveTab('noida')}
            className={`px-5 py-2 text-xs md:text-sm font-semibold rounded-xl transition-all ${
              activeTab === 'noida'
                ? 'bg-amber-500 text-black shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Noida
          </button>
          <button
            onClick={() => setActiveTab('yamuna')}
            className={`px-5 py-2 text-xs md:text-sm font-semibold rounded-xl transition-all ${
              activeTab === 'yamuna'
                ? 'bg-amber-500 text-black shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Yamuna Expressway (YEIDA)
          </button>
        </div>

        {/* Maps List Stack */}
        <div className="w-full max-w-5xl space-y-8">
          {filteredMaps.map((map) => (
            <div 
              key={map.id}
              className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-300 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-500/5"
            >
              {/* Left: Map Preview Box */}
              <div className="lg:col-span-5 relative w-full h-64 md:h-72 rounded-xl bg-zinc-950 border border-zinc-800 overflow-hidden group">
                <img
                  src={map.img}
                  alt={map.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-amber-400 border border-amber-500/30 text-[11px] font-semibold">
                    {map.count}
                  </span>
                </div>
              </div>

              {/* Right: Content Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-semibold tracking-wider uppercase text-amber-400">
                    {map.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
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
                  <Link
                    href={map.link}
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-xl transition-all shadow-md text-sm group"
                  >
                    <span>Explore {map.category} Maps</span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
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