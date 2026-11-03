'use client'

import React from 'react'
import { Map, Building2, Factory, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const LayoutMapsSection = () => {
  const mapLocations = [
    {
      title: 'Greater Noida',
      description: 'Modern townships, luxury homes, commercial projects and high-growth investment locations.',
      icon: <Building2 className="size-5 text-amber-400" />,
      link: '/maps/greater-noida',
    },
    {
      title: 'Yamuna Expressway',
      description: 'Industrial plots, premium residential projects and investment options near the upcoming Jewar Airport.',
      icon: <Factory className="size-5 text-amber-400" />,
      link: '/maps/yamuna-expressway',
    },
    {
      title: 'Noida',
      description: 'Premium residential apartments, commercial spaces, villas and investment opportunities across Noida.',
      icon: <Map className="size-5 text-amber-400" />,
      link: '/maps/noida',
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
            Explore Locations
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Our Layout Maps
          </h2>
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
            Find residential, commercial and investment properties across Noida, Greater Noida and Yamuna Expressway.
          </p>
        </div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {mapLocations.map((item, index) => (
            <div 
              key={index}
              className="bg-zinc-950/90 border border-amber-500/20 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-500/5"
            >
              <div>
                {/* Empty Image / Map Preview Placeholder */}
                <div className="relative w-full h-52 rounded-xl bg-zinc-900 border border-amber-500/10 overflow-hidden flex flex-col items-center justify-center p-4">
                  {/* You can replace this wrapper or drop your <Image /> component here later */}
                  <div className="text-center space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto text-amber-400">
                      {item.icon}
                    </div>
                    <span className="text-xs text-zinc-500 font-medium tracking-wide block">
                      [ Map Preview Area ]
                    </span>
                  </div>
                </div>

                {/* Content & Details */}
                <div className="mt-5 space-y-3 px-1">
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="mt-6 pt-4 border-t border-zinc-800/80 px-1">
                <Button 
                  className="w-full bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs md:text-sm py-2.5 rounded-lg transition-all shadow-md flex items-center justify-center gap-2 group"
                >
                  <Link href={item.link}>
                    <span>View Layout Maps</span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" data-icon="inline-end" />
                  </Link>
                </Button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default LayoutMapsSection