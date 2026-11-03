'use client'

import React from 'react'
import { Map, Building2, Factory, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const LayoutMapsSection = () => {
  const mapLocations = [
    {
      title: 'Greater Noida Master Plan',
      region: 'GNIDA Jurisdiction',
      description: 'Zoned sector layouts across Alpha, Beta, Gamma, Delta, Sigma, Omicron, Knowledge Park, and Ecotech industrial corridors.',
      icon: <Building2 className="size-5 text-amber-400" />,
      link: '/maps/greater-noida',
      stats: '120+ Sector Layouts',
      image: 'https://chhabraproperty.com/wp-content/uploads/2026/10/MP-GREATER-NOIDA-5.jpg'
    },
    {
      title: 'Yamuna Expressway (YEIDA)',
      region: 'Jewar Aerotropolis Corridor',
      description: 'High-growth industrial plots, residential sectors (18, 20, 22D), Gaur Yamuna City, and master plans surrounding Noida International Airport.',
      icon: <Factory className="size-5 text-amber-400" />,
      link: '/maps/yamuna',
      stats: '70+ Blueprint Layouts',
      image: '/src/assets/images/master_plan_yeida_airport_1793725858775.jpg'
    },
    {
      title: 'Noida Master Plan',
      region: 'Noida Authority',
      description: 'Established sectors 1 to 168, prime expressway corridors, IT/SEZ commercial zones, and 5% farmer abadi layout plans.',
      icon: <Map className="size-5 text-amber-400" />,
      link: '/maps/noida',
      stats: '200+ Sector Blueprints',
      image: 'https://chhabraproperty.com/wp-content/uploads/2026/10/MP-NOIDA.jpg.jpeg'
    },
  ]

  return (
    <section className="relative w-full bg-zinc-950 text-white py-20 px-6 md:px-12 border-b border-zinc-800/80 font-sans">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14 max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
            Regional Coverage
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white [text-wrap:balance]">
            Explore Regional Layout Maps &amp; Master Plans
          </h2>
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed [text-wrap:balance]">
            Accurate layout maps indicating plot numbering, arterial road widths, parks, commercial belts, and institutional zones.
          </p>
        </div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {mapLocations.map((item, index) => (
            <div 
              key={index}
              className="bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-500/5 group"
            >
              <div>
                {/* Visual Image Banner with Scrim */}
                <div className="relative w-full h-52 overflow-hidden bg-zinc-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-amber-400 border border-amber-500/30 text-[11px] font-semibold">
                      {item.region}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-1 rounded-lg bg-zinc-900/90 text-zinc-300 border border-zinc-700 text-[11px] font-mono tabular-nums">
                      {item.stats}
                    </span>
                  </div>
                </div>

                {/* Content & Details */}
                <div className="p-6 space-y-2.5">
                  <div className="flex items-center gap-2 text-amber-400">
                    {item.icon}
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <Link
                  href={item.link}
                  className="w-full inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-200 border border-zinc-700 font-semibold text-xs md:text-sm py-2.5 rounded-xl transition-all shadow-sm"
                >
                  <span>Browse Layout Maps</span>
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default LayoutMapsSection