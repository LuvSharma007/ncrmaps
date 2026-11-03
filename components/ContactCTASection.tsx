'use client'

import React from 'react'
import { MessageCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const ContactCTASection = () => {
  const phoneNumber = '+91 62000-69000'
  const cleanPhone = '916200069000' // Format for tel: and wa.me links

  return (
    <section className="relative w-full bg-black text-white py-24 px-6 md:px-12 overflow-hidden font-sans">
      
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

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
        
        {/* Section Header Tag */}
        <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-amber-400">
          Let&apos;s Talk
        </span>

        {/* Main Headline */}
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Ready To Find Your Dream Property?
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-zinc-400 max-w-lg leading-relaxed">
          Talk to our property advisors for a free consultation and site visit planning.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          
          {/* WhatsApp Chat Button */}
          <Button
            variant="outline"
            className="border-amber-500/40 text-amber-400 bg-zinc-950/80 hover:bg-amber-500/10 hover:border-amber-400 font-semibold px-6 py-6 rounded-xl transition-all shadow-md flex items-center gap-2 text-sm md:text-base"
          >
            <Link 
              href={`https://wa.me/${cleanPhone}?text=Hi,%20I%20want%20to%20know%20more%20about%20properties.`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-5 text-amber-400" data-icon="inline-start" />
              <span>Chat on WhatsApp</span>
            </Link>
          </Button>

          {/* Call Phone Button */}
          <Button
            className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-6 rounded-xl transition-all shadow-lg hover:shadow-amber-500/20 flex items-center gap-2 text-sm md:text-base"
          >
            <Link href={`tel:${cleanPhone}`}>
              <Phone className="size-5" data-icon="inline-start" />
              <span>Call {phoneNumber}</span>
            </Link>
          </Button>

        </div>

      </div>
    </section>
  )
}

export default ContactCTASection