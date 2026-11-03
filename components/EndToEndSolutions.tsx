'use client'

import React from 'react'
import { Map, Home, Building2, Factory, TrendingUp, FileText } from 'lucide-react'

export const EndToEndSolutions = () => {
  const solutions = [
    {
      num: '01',
      title: 'Residential Sector Plots',
      description: 'Authority-approved freehold and leasehold plots across established sectors with clear zoning and land demarcation.',
      authority: 'Noida · GNIDA · YEIDA',
      icon: <Map className="size-5 text-amber-400" />
    },
    {
      num: '02',
      title: 'Villas, Builder Floors & High-Rises',
      description: 'End-to-end evaluation of ready-to-move and under-construction residences with RERA compliance audits.',
      authority: 'Sector 150 · Pari Chowk · Expressway',
      icon: <Home className="size-5 text-amber-400" />
    },
    {
      num: '03',
      title: 'Commercial Hubs & Office Suites',
      description: 'High-footfall retail shops, SCO plots, institutional spaces, and corporate offices along primary transit corridors.',
      authority: 'Commercial Belts · IT Parks',
      icon: <Building2 className="size-5 text-amber-400" />
    },
    {
      num: '04',
      title: 'Industrial & Warehousing Corridors',
      description: 'Strategically located plots in Ecotech, Knowledge Park, and YEIDA industrial clusters adjacent to cargo logistics hubs.',
      authority: 'Ecotech · DMIC · Airport Hub',
      icon: <Factory className="size-5 text-amber-400" />
    },
    {
      num: '05',
      title: 'Yield Advisory & Resale Opportunities',
      description: 'Empirical price-trend analytics, rental yield forecasts, and capital appreciation roadmaps for private investors.',
      authority: 'Data-driven Portfolios',
      icon: <TrendingUp className="size-5 text-amber-400" />
    },
    {
      num: '06',
      title: 'Registry, Title & Conveyance Support',
      description: 'Complete documentation diligence: authority dues clearance, title search, transfer deed drafting, and sub-registrar assistance.',
      authority: 'Full Legal Conveyance',
      icon: <FileText className="size-5 text-amber-400" />
    }
  ]

  return (
    <section className="relative w-full bg-zinc-950 text-white py-20 px-6 md:px-12 border-b border-zinc-800/80 font-sans">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14 max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
            Advisory &amp; Services
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white [text-wrap:balance]">
            Comprehensive Real Estate Advisory
          </h2>
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed [text-wrap:balance]">
            From identifying layout plots to legal title verification and registration, we handle every milestone with utmost integrity.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {solutions.map((item) => (
            <div 
              key={item.num}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 transition-all duration-300 hover:border-amber-400/50 hover:bg-zinc-900/80 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center transition-colors group-hover:bg-amber-500/20">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-zinc-500 group-hover:text-amber-400/80 transition-colors">
                    {item.num}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base md:text-lg font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] text-zinc-500 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
                <span>{item.authority}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default EndToEndSolutions