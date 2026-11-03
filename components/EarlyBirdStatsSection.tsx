'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const EarlyBirdStatsSection = () => {
  const stats = [
    { value: '1,000+', label: 'Happy Clients' },
    { value: '500+', label: 'Verified Properties' },
    { value: '50+', label: 'Trusted Developers' },
    { value: '12+', label: 'Years Experience' },
  ]

  return (
    <section className="w-full flex flex-col font-sans">
      
      {/* Top Gold / Yellow Banner Section */}
      <div className="w-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-300 py-12 px-6 md:px-16 text-black relative overflow-hidden">
        
        {/* Subtle background glow/shimmer layer */}
        <div className="absolute inset-0 bg-white/10 pointer-events-none backdrop-blur-[1px]" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          {/* Left Text Content */}
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-black/80">
              New Launches
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
              Get Early-Bird Pricing On Upcoming Projects
            </h2>
            <p className="text-sm md:text-base text-black/95 font-medium leading-relaxed">
              Be the first to know about pre-launch opportunities across Noida, Greater Noida and YEIDA.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0">
            <Button
              className="bg-black text-amber-300 hover:bg-zinc-900 font-semibold px-6 py-6 rounded-xl shadow-xl transition-all flex items-center gap-2 group text-sm md:text-base border border-amber-400/30"
            >
              <Link href="/contact-us">
                <span>Get Pre-Launch Deals</span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" data-icon="inline-end" />
              </Link>
            </Button>
          </div>

        </div>
      </div>

      {/* Bottom Black Stats Grid Section */}
      <div className="w-full bg-black py-16 px-6 md:px-12 text-white border-t border-amber-500/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
          
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-1">
              <span className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-amber-400 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm lg:text-base text-zinc-400 font-medium">
                {stat.label}
              </span>
            </div>
          ))}

        </div>
      </div>

    </section>
  )
}

export default EarlyBirdStatsSection