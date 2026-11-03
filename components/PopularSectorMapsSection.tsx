'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, MapPin, Compass, ShieldCheck, Eye } from 'lucide-react'
import { MapViewerModal, ActiveMapData } from './MapViewerModal'

export const PopularSectorMapsSection = () => {
  const [activeModalMap, setActiveModalMap] = useState<ActiveMapData | null>(null)

  const sectorMaps = [
    { name: 'Alpha 1', slug: 'alpha-1', region: 'Greater Noida', image: 'https://ncrmaps.s3.ap-southeast-2.amazonaws.com/full/greater-noida-maps/alpha-1.webp' },
    { name: 'Alpha 2', slug: 'alpha-2', region: 'Greater Noida', image: 'https://ncrmaps.s3.ap-southeast-2.amazonaws.com/full/greater-noida-maps/alpha-2.webp' },
    { name: 'Beta 1', slug: 'beta-1', region: 'Greater Noida', image: 'https://ncrmaps.s3.ap-southeast-2.amazonaws.com/full/greater-noida-maps/beta-1.webp' },
    { name: 'Beta 2', slug: 'beta-2', region: 'Greater Noida', image: 'https://ncrmaps.s3.ap-southeast-2.amazonaws.com/full/greater-noida-maps/beta-2.webp' },
    { name: 'Gamma 1', slug: 'gamma-1', region: 'Greater Noida', image: 'https://ncrmaps.s3.ap-southeast-2.amazonaws.com/full/greater-noida-maps/gamma-1.webp' },
    { name: 'Delta 1', slug: 'delta-1', region: 'Greater Noida', image: 'https://ncrmaps.s3.ap-southeast-2.amazonaws.com/full/greater-noida-maps/delta-1.webp' },
    { name: 'Sigma 1', slug: 'sigma-1', region: 'Greater Noida', image: 'https://ncrmaps.s3.ap-southeast-2.amazonaws.com/full/greater-noida-maps/sigma-1.webp' },
    { name: 'Omicron 1', slug: 'omicron-1', region: 'Greater Noida', image: 'https://ncrmaps.s3.ap-southeast-2.amazonaws.com/full/greater-noida-maps/omicron-1.webp' },
    { name: 'Ecotech 1', slug: 'ecotech-1', region: 'Greater Noida', image: 'https://ncrmaps.s3.ap-southeast-2.amazonaws.com/full/greater-noida-maps/ecotech-1.webp' },
    { name: 'Knowledge Park III', slug: 'knowledge-park-iii', region: 'Greater Noida', image: 'https://ncrmaps.s3.ap-southeast-2.amazonaws.com/full/greater-noida-maps/knowledge-park-3.webp' },
  ]

  const benefits = [
    {
      title: 'Analyze True Sector Topography',
      description: 'Accurately inspect road widths (12m to 45m), corner plot premiums, green buffers, and community amenities.',
      icon: <Compass className="size-5 text-amber-400" />,
    },
    {
      title: 'Compare Zonal Infrastructure',
      description: 'Evaluate established sectors against newly developing corridors along the metro and expressways.',
      icon: <MapPin className="size-5 text-amber-400" />,
    },
    {
      title: 'Negotiate with Empirical Data',
      description: 'Use authentic authority blueprints during plot negotiations to protect against unregistered encroachments.',
      icon: <ShieldCheck className="size-5 text-amber-400" />,
    },
  ]

  return (
    <section className="relative w-full bg-zinc-950 text-white py-20 px-6 md:px-12 border-b border-zinc-800/80 font-sans">
      <div className="relative z-10 max-w-7xl mx-auto space-y-20">
        
        {/* Part 1: Popular Greater Noida Sector Maps */}
        <div className="space-y-6">
          <div className="space-y-2 max-w-3xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
              High-Demand Blueprints
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
              Popular Greater Noida Sector Maps
            </h2>
            <p className="text-sm text-zinc-400">
              Click any sector to open the high-resolution blueprint with interactive zoom and plot dimensions.
            </p>
          </div>

          {/* Interactive Sector Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {sectorMaps.map((sector, index) => (
              <button
                key={index}
                onClick={() =>
                  setActiveModalMap({
                    title: `${sector.name} Layout Map`,
                    image: sector.image,
                    region: sector.region,
                    category: 'Residential / Institutional'
                  })
                }
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs md:text-sm font-medium hover:border-amber-400 hover:text-white hover:bg-zinc-800/80 transition-all shadow-sm group"
              >
                <span>{sector.name}</span>
                <Eye className="size-3 text-zinc-500 group-hover:text-amber-400 transition-colors" />
              </button>
            ))}
            <Link
              href="/maps/greater-noida"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs md:text-sm font-semibold transition-all shadow-md"
            >
              <span>View All 120+ Maps</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* Part 2: Cartographic Diligence */}
        <div className="space-y-8">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
              Buyer Advisory
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
              Why Inspect the Master Map Before Buying?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((item, index) => (
              <div 
                key={index}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 transition-all duration-300 hover:border-amber-400/50 hover:bg-zinc-900/80 space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-base md:text-lg font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: Trust Commitment */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 md:p-10 space-y-4 shadow-xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
            Advisory Desk
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
            Ground Expertise Across Greater Noida, Noida &amp; YEIDA
          </h2>
          <p className="text-sm md:text-base text-zinc-300 leading-relaxed max-w-4xl">
            NCR Maps delivers complete cartographic clarity for buyers, developers, and investors. Beyond sector layouts and master plans, our advisory team coordinates ground visits, legal registry checks, and price parity analysis from initial search to title registration.
          </p>
        </div>

      </div>

      {/* Modal */}
      <MapViewerModal
        map={activeModalMap}
        onClose={() => setActiveModalMap(null)}
      />
    </section>
  )
}

export default PopularSectorMapsSection