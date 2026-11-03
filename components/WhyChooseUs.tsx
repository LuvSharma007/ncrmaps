'use client'

import React from 'react'
import { ShieldCheck, Award, MapPin, Eye } from 'lucide-react'

export const WhyChooseUs = () => {
  const pillars = [
    {
      icon: <ShieldCheck className="size-5 text-amber-400" />,
      title: 'Direct Authority Verification',
      description: 'Every layout map and sector plot is cross-checked against official Noida, GNIDA, and YEIDA master records before shortlisting.',
    },
    {
      icon: <Eye className="size-5 text-amber-400" />,
      title: 'Zero Hidden Dues or Surprises',
      description: 'Clear breakdown of authority transfer charges, registry stamp duty, maintenance dues, and circle rate assessments upfront.',
    },
    {
      icon: <MapPin className="size-5 text-amber-400" />,
      title: 'Hyper-Local Ground Advisory',
      description: 'Physical presence across Alpha Commercial Belt, Sector 62, and Expressway for accompanied on-site evaluations.',
    },
    {
      icon: <Award className="size-5 text-amber-400" />,
      title: '12+ Years Industry Track Record',
      description: 'Facilitated over 1,000+ seamless property acquisitions, leasehold transfers, and industrial land allocations.',
    },
  ]

  return (
    <section className="relative w-full bg-zinc-950 text-white py-20 px-6 md:px-12 border-b border-zinc-800/80 font-sans">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14 max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
            Institutional Trust
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white [text-wrap:balance]">
            Why Property Buyers &amp; Investors Rely On NCR Maps
          </h2>
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed [text-wrap:balance]">
            Navigating Delhi-NCR property records requires precision. We blend authoritative cartography with rigorous field verification.
          </p>
        </div>

        {/* 4-Column Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {pillars.map((feature, index) => (
            <div 
              key={index}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 transition-all duration-300 hover:border-amber-400/50 hover:bg-zinc-900/80 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs