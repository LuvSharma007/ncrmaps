'use client'

import React from 'react'
import { Map, Home, Building2, Factory, TrendingUp, FileText } from 'lucide-react'

export const EndToEndSolutions = () => {
  const solutions = [
    {
      icon: <Map className="size-6 text-amber-400" />,
      title: "Residential Plots",
      description: "Verified plots in approved sectors and authority schemes across Noida, Greater Noida and YEIDA."
    },
    {
      icon: <Home className="size-6 text-amber-400" />,
      title: "Houses, Villas & Apartments",
      description: "Ready-to-move and under-construction homes that fit your family and budget."
    },
    {
      icon: <Building2 className="size-6 text-amber-400" />,
      title: "Commercial Properties",
      description: "Shops, showrooms, offices and commercial plots in high-growth locations."
    },
    {
      icon: <Factory className="size-6 text-amber-400" />,
      title: "Industrial Land & Warehouses",
      description: "Industrial plots and warehousing near Yamuna Expressway and the upcoming Jewar Airport."
    },
    {
      icon: <TrendingUp className="size-6 text-amber-400" />,
      title: "Investment Advisory",
      description: "Rental yield analysis, resale opportunities and long-term wealth creation strategies."
    },
    {
      icon: <FileText className="size-6 text-amber-400" />,
      title: "Legal & Documentation",
      description: "Property verification, title checks, agreements and registry assistance."
    }
  ]

  return (
    <section className="relative w-full bg-black text-white py-20 px-6 md:px-12 overflow-hidden font-sans">
      
      {/* Optional Subtle Grid Background Overlay */}
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
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            End-to-End Real Estate Solutions
          </h2>
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
            From shortlisting the right property to final registry, we handle every step with transparency.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {solutions.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-zinc-950/80 border border-amber-500/20 rounded-2xl p-8 transition-all duration-300 hover:border-amber-400/60 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-amber-500/5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center transition-colors group-hover:bg-amber-500/20">
                  {item.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default EndToEndSolutions