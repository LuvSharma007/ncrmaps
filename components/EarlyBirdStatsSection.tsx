'use client'

import React from 'react'
import { ArrowRight, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export const EarlyBirdStatsSection = () => {
  const stats = [
    { value: '600+', label: 'Verified Sector Maps' },
    { value: '1,000+', label: 'Property Buyers Advised' },
    { value: '50+', label: 'RERA Approved Projects' },
    { value: '12+', label: 'Years Field Experience' },
  ]

  return (
    <section className="w-full flex flex-col font-sans bg-zinc-950 border-y border-zinc-800/80">
      
      {/* Top Value Banner */}
      <div className="w-full bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-900 py-10 px-6 md:px-12 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          
          {/* Left Text Content */}
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <TrendingUp className="size-4" />
              <span>Investment &amp; Pre-Launch Intelligence</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              First-Mover Access to Upcoming Authority Schemes &amp; Pre-Launches
            </h2>
            <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
              Receive verified layout blueprints, circle rates, and price movement insights across Noida, Greater Noida and the Jewar Airport corridor before public announcements.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <Link
              href="#contact-advisory"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-4 rounded-xl shadow-lg transition-all text-sm md:text-base"
            >
              <span>Request Pre-Launch Briefing</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

        </div>
      </div>

      {/* Numerical Stats Grid with Tabular Figures */}
      <div className="w-full py-12 px-6 md:px-12 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x-0 lg:divide-x lg:divide-zinc-800/80">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center px-4 space-y-1.5">
              <span className="text-3xl md:text-5xl font-black text-amber-400 tracking-tight font-mono tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-zinc-300 font-medium">
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