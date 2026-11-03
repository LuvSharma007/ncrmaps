'use client'

import React from 'react'
import { MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const FeaturedProjects = () => {
  const projects = [
    {
      badgeText: 'New Launch',
      configBadge: '1–3 BHK',
      title: 'Godrej DMIC Greater Noida',
      location: 'DMIC Township, Greater Noida',
      developer: 'Godrej Properties',
      configuration: '1, 2 & 3 BHK',
      possession: 'To be announced',
      price: '₹1.35 Cr* onwards',
    },
    {
      badgeText: 'Featured',
      configBadge: '3 BHK',
      title: 'Hero Homes Leafsong Retreat',
      location: 'Sector MU, Greater Noida',
      developer: 'Hero Homes',
      configuration: '3 BHK',
      possession: 'To be announced',
      price: '₹1.82 Cr',
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

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16 max-w-3xl">
          <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-amber-400">
            Our Projects
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Featured Residential Projects In Greater Noida
          </h2>
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
            Handpicked apartments from trusted developers, with site visits and documentation support from NCRMAPS.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-zinc-950/90 border border-amber-500/20 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-500/5"
            >
              <div>
                {/* Image Placeholder Box */}
                <div className="relative w-full h-64 md:h-72 rounded-xl bg-zinc-900 border border-amber-500/10 overflow-hidden flex flex-col justify-between p-4">
                  
                  {/* Top Badges */}
                  <div className="flex items-center justify-between w-full z-10">
                    <span className="px-3 py-1 rounded-md bg-amber-500 text-black font-semibold text-xs tracking-wide shadow-md">
                      {project.badgeText}
                    </span>
                    <span className="px-3 py-1 rounded-md bg-zinc-900/80 backdrop-blur-md text-amber-400 border border-amber-500/30 font-semibold text-xs">
                      {project.configBadge}
                    </span>
                  </div>

                  {/* Centered Placeholder Text (Replace this wrapper with <Image /> when ready) */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      {project.location}
                    </p>
                  </div>

                  {/* Bottom dark gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                </div>

                {/* Property Meta Information */}
                <div className="mt-5 space-y-3 px-1">
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <MapPin className="size-3.5 text-amber-400 shrink-0" />
                    <span>{project.location}</span>
                  </div>

                  <div className="space-y-1.5 pt-2 text-xs text-zinc-300 border-t border-zinc-800/80">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Developer:</span>
                      <span className="font-medium text-zinc-200">{project.developer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Configuration:</span>
                      <span className="font-medium text-zinc-200">{project.configuration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Possession:</span>
                      <span className="font-medium text-zinc-200">{project.possession}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer: Price & Action */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-zinc-800/80 px-1">
                <div>
                  <span className="text-lg md:text-xl font-extrabold text-amber-400">
                    {project.price}
                  </span>
                </div>
                <Button 
                  variant="outline"
                  className="border-amber-500/40 text-amber-400 bg-black/40 hover:bg-amber-500 hover:text-black font-semibold text-xs md:text-sm px-4 py-2 rounded-lg transition-all"
                >
                  <Link href="/projects">View Details</Link>
                </Button>
              </div>

            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div>
          <Button 
            className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-6 rounded-xl transition-all shadow-lg hover:shadow-amber-500/20 text-sm md:text-base flex items-center gap-2 group"
          >
            <Link href="/projects">
              <span>View All Projects</span>
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" data-icon="inline-end" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  )
}

export default FeaturedProjects