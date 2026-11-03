'use client'

import React, { useState } from 'react'
import { Search, MapPin, ShieldCheck, Users, FileText, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

interface HomeSectionProps {
  onSearch?: (query: string) => void
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(searchQuery)
    }
  }

  return (
    <section className="relative min-h-[90vh] w-full bg-black text-white flex flex-col justify-between overflow-hidden py-12 px-4 md:px-8">
      
      {/* Grid Pattern Background Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(234, 179, 8, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(234, 179, 8, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Radial Gradient Glow for Depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center mt-8 md:mt-12 space-y-6">
        
        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs md:text-sm tracking-widest font-semibold uppercase shadow-sm">
          <span>Premium Real Estate</span>
          <span className="w-1 h-1 rounded-full bg-amber-400" />
          <span>Noida</span>
          <span className="w-1 h-1 rounded-full bg-amber-400" />
          <span>Greater Noida</span>
          <span className="w-1 h-1 rounded-full bg-amber-400" />
          <span>Yamuna Expressway</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          Find Your Perfect Plot, Home or Commercial Space <br className="hidden sm:inline" />
          <span className="text-amber-400">With NCRMAPS</span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-zinc-400 text-sm md:text-base leading-relaxed">
          Verified residential and commercial properties across Noida, Greater Noida and Yamuna Expressway – trusted guidance from first site visit to final registry.
        </p>

        {/* Search Bar Container (anchored for navbar scroll detection) */}
        <div id="hero-search-bar" className="w-full max-w-2xl mt-4">
          <form 
            onSubmit={handleSearchSubmit} 
            className="relative flex items-center bg-zinc-900/90 border border-amber-500/40 rounded-xl p-1.5 shadow-2xl backdrop-blur-md transition-all focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-400/20"
          >
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search properties by location, builder, or project..."
              className="w-full bg-transparent border-none text-white placeholder:text-zinc-500 px-4 py-3 text-sm md:text-base focus-visible:ring-0 focus-visible:outline-none"
            />
            <Button 
              type="submit" 
              size="icon" 
              className="bg-amber-500 hover:bg-amber-400 text-black size-11 rounded-lg shrink-0 font-medium transition-colors shadow-md"
            >
              <Search className="size-5" data-icon="inline-start" />
            </Button>
          </form>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button 
            className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-amber-500/20"
          >
            <Link href="/contact-us">Book a Free Site Visit</Link>
          </Button>
          <Button 
            variant="outline"
            className="border-amber-500/40 text-amber-400 bg-black/40 hover:bg-amber-500/10 hover:border-amber-400 font-semibold px-6 py-3 rounded-xl transition-all"
          >
            <Link href="/maps">Explore Maps</Link>
          </Button>
        </div>

      </div>

      {/* Bottom Features / Trust Badges */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-8 border-t border-amber-500/20">
        
        <div className="flex items-center gap-3.5 p-4 rounded-xl bg-zinc-950/60 border border-amber-500/20 backdrop-blur-sm transition-all hover:border-amber-500/50">
          <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
            <ShieldCheck className="size-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Verified Properties</h4>
            <p className="text-xs text-zinc-400">100% legal clearance checks</p>
          </div>
        </div>

        <div className="flex items-center gap-3.5 p-4 rounded-xl bg-zinc-950/60 border border-amber-500/20 backdrop-blur-sm transition-all hover:border-amber-500/50">
          <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
            <Users className="size-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Free Consultation</h4>
            <p className="text-xs text-zinc-400">Expert real estate advisory</p>
          </div>
        </div>

        <div className="flex items-center gap-3.5 p-4 rounded-xl bg-zinc-950/60 border border-amber-500/20 backdrop-blur-sm transition-all hover:border-amber-500/50">
          <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
            <FileText className="size-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Documentation Support</h4>
            <p className="text-xs text-zinc-400">From registry to handover</p>
          </div>
        </div>

        <div className="flex items-center gap-3.5 p-4 rounded-xl bg-zinc-950/60 border border-amber-500/20 backdrop-blur-sm transition-all hover:border-amber-500/50">
          <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
            <Building2 className="size-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">3 Branch Offices</h4>
            <p className="text-xs text-zinc-400">Local presence in Noida</p>
          </div>
        </div>

      </div>

      {/* Bottom Border Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-80" />
    </section>
  )
}

export default HomeSection