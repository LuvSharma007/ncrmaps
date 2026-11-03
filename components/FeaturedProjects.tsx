'use client'

import React from 'react'
import { MapPin, ArrowRight, CheckCircle2, Phone } from 'lucide-react'

export const FeaturedProjects = () => {
  const cleanPhone = '916200069000'

  const projects = [
    {
      id: 'godrej-dmic',
      badge: 'New Launch',
      title: 'Godrej DMIC Township',
      tagline: 'Eco-Luxury High-Rise Condominiums',
      location: 'DMIC Industrial Corridor, Greater Noida',
      developer: 'Godrej Properties',
      configuration: '1, 2 & 3 BHK Sky Suites',
      possession: 'Q4 2028',
      price: '₹1.35 Cr* onwards',
      image: '/src/assets/images/featured_project_godrej_1793725857634.jpg',
      highlights: ['IGBC Gold Certified', 'Adjacent to Metro Link', '4-Tier Security']
    },
    {
      id: 'hero-homes',
      badge: 'Featured Residences',
      title: 'Hero Homes Leafsong Retreat',
      tagline: 'Resort Living & Integrated Central Greens',
      location: 'Sector MU, Greater Noida',
      developer: 'Hero Homes',
      configuration: '3 & 4 BHK Luxury Suites',
      possession: 'Under Construction (RERA Verified)',
      price: '₹1.82 Cr* onwards',
      image: '/src/assets/images/featured_project_hero_homes_1793725857782.jpg',
      highlights: ['85% Open Green Space', 'Olympic Lap Pool', 'EV Charging Bays']
    },
  ]

  return (
    <section className="relative w-full bg-zinc-950 text-white py-20 px-6 md:px-12 border-b border-zinc-800/80 font-sans">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14 max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
            Curated Real Estate
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white [text-wrap:balance]">
            Featured Residential Projects In Greater Noida
          </h2>
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed [text-wrap:balance]">
            Authority-sanctioned residential projects from tier-1 developers with clear title deeds and site visit coordination.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mb-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-zinc-900/70 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-500/5"
            >
              {/* Image Preview Box */}
              <div className="relative w-full h-72 sm:h-80 overflow-hidden bg-zinc-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                
                {/* Badges on top */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-amber-500 text-black font-semibold text-xs tracking-wide shadow-md">
                    {project.badge}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md text-zinc-200 border border-zinc-700 text-xs font-medium">
                    {project.configuration}
                  </span>
                </div>

                {/* Bottom title in image frame */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-300">
                    <MapPin className="size-3.5 text-amber-400 shrink-0" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>

              {/* Project Specifications */}
              <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                
                <div className="grid grid-cols-2 gap-4 py-3 border-y border-zinc-800 text-xs md:text-sm">
                  <div>
                    <span className="text-zinc-500 block text-[11px]">Developer</span>
                    <span className="font-semibold text-white">{project.developer}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[11px]">Starting Price</span>
                    <span className="font-bold text-amber-400 font-mono tabular-nums">{project.price}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[11px]">Possession</span>
                    <span className="text-zinc-300">{project.possession}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[11px]">Typology</span>
                    <span className="text-zinc-300">{project.configuration}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 text-xs text-zinc-400">
                  {project.highlights.map((h, i) => (
                    <span key={i} className="flex items-center gap-1">
                      <CheckCircle2 className="size-3.5 text-amber-400" />
                      <span>{h}</span>
                      {i < project.highlights.length - 1 && <span className="text-zinc-600 ml-1">·</span>}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hi, I would like more details and brochure for ${project.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs md:text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-black transition-colors shadow-md"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="size-4" />
                  </a>
                  <a
                    href={`tel:${cleanPhone}`}
                    className="inline-flex items-center justify-center p-3 rounded-xl border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
                    title={`Call for ${project.title}`}
                  >
                    <Phone className="size-4" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FeaturedProjects