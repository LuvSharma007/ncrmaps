'use client'

import React from 'react'
import { ShieldCheck, Award, TrendingUp, MapPin, Layers, Eye, Users, Headphones } from 'lucide-react'

export const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck className="size-6 text-amber-400" />,
      title: 'Verified Properties',
      description: 'Every property is legally verified for complete transparency and secure investment.',
    },
    {
      icon: <Award className="size-6 text-amber-400" />,
      title: 'Trusted Developers',
      description: 'We partner with leading developers to deliver premium projects.',
    },
    {
      icon: <TrendingUp className="size-6 text-amber-400" />,
      title: 'Best Investment',
      description: 'Access high-ROI residential and commercial investment opportunities.',
    },
    {
      icon: <MapPin className="size-6 text-amber-400" />,
      title: 'Prime Locations',
      description: 'Premium properties in Noida, Greater Noida and Yamuna Expressway.',
    },
    {
      icon: <Layers className="size-6 text-amber-400" />,
      title: 'End-to-End Assistance',
      description: 'From site visit to documentation and registration, we assist at every step.',
    },
    {
      icon: <Eye className="size-6 text-amber-400" />,
      title: 'Transparent Deals',
      description: 'No hidden charges. Honest pricing with complete documentation support.',
    },
    {
      icon: <Users className="size-6 text-amber-400" />,
      title: 'Expert Consultants',
      description: 'Experienced advisors help you choose the right property for your budget.',
    },
    {
      icon: <Headphones className="size-6 text-amber-400" />,
      title: 'Dedicated Support',
      description: 'Friendly support before and after your property purchase.',
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
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Your Trusted Real Estate Partner
          </h2>
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
            We make buying and investing simple, transparent and rewarding — with experts guiding you at every step.
          </p>
        </div>

        {/* 4x2 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-zinc-950/80 border border-amber-500/20 rounded-2xl p-6 transition-all duration-300 hover:border-amber-400/60 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-amber-500/5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center transition-colors group-hover:bg-amber-500/20">
                  {feature.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-amber-400 transition-colors">
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