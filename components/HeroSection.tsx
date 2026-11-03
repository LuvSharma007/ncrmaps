'use client'

import React, { useState } from 'react'
import { Search, ShieldCheck, Users, FileText, Building2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedAuthority, setSelectedAuthority] = useState<'all' | 'noida' | 'greater-noida' | 'yamuna'>('all')
  const router = useRouter()

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const query = searchQuery.trim()
    if (selectedAuthority === 'noida') {
      router.push(`/maps/noida?q=${encodeURIComponent(query)}`)
    } else if (selectedAuthority === 'greater-noida') {
      router.push(`/maps/greater-noida?q=${encodeURIComponent(query)}`)
    } else if (selectedAuthority === 'yamuna') {
      router.push(`/maps/yamuna?q=${encodeURIComponent(query)}`)
    } else {
      router.push(`/maps?q=${encodeURIComponent(query)}`)
    }
  }

  const quickSectors = [
    { label: 'Sector 150 Noida', href: '/maps/noida' },
    { label: 'Alpha 1 Gr. Noida', href: '/maps/greater-noida' },
    { label: 'YEIDA Sector 18', href: '/maps/yamuna' },
    { label: 'Knowledge Park', href: '/maps/greater-noida' },
    { label: 'Sector 62 IT Hub', href: '/maps/noida' },
  ]

  return (
    <section className="relative w-full min-h-[92vh] flex flex-col justify-between overflow-hidden bg-zinc-950 text-white">
      {/* Background Architectural Visual with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_architectural_ncr_1793725856200.jpg"
          alt="Aerial view of Noida and Greater Noida expressway skyline"
          className="w-full h-full object-cover object-center opacity-30"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient scrim for WCAG AA 4.5:1 legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/90 to-zinc-950" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-12 text-center flex flex-col items-center">
        
        {/* Editorial Subtitle / Authority Scope */}
        <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-amber-400 mb-6 tracking-wide">
          <span>Authority Master Plans</span>
          <span aria-hidden="true">·</span>
          <span>Noida Development Authority</span>
          <span aria-hidden="true">·</span>
          <span>GNIDA</span>
          <span aria-hidden="true">·</span>
          <span>YEIDA</span>
        </div>

        {/* Primary Headline with Balance */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.12] [text-wrap:balance]">
          Verified Master Layout Plans &amp; Sector Maps Across{' '}
          <span className="text-amber-400">Delhi-NCR</span>
        </h1>

        {/* Value Proposition Description */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl leading-relaxed [text-wrap:balance]">
          Accurate plot dimensions, arterial road widths, green zoning, and commercial belts for Noida, Greater Noida, and Yamuna Expressway.
        </p>

        {/* Unified Search Console */}
        <div className="w-full max-w-2xl mt-8">
          <form
            onSubmit={handleSearchSubmit}
            className="flex flex-col sm:flex-row items-center gap-2 p-2 rounded-2xl bg-zinc-900/90 border border-zinc-700/80 shadow-2xl backdrop-blur-md focus-within:border-amber-400/80 transition-all"
          >
            {/* Region Selector */}
            <select
              value={selectedAuthority}
              onChange={(e) => setSelectedAuthority(e.target.value as 'all' | 'noida' | 'greater-noida' | 'yamuna')}
              className="w-full sm:w-auto bg-zinc-800/90 text-xs md:text-sm text-zinc-200 border border-zinc-700 rounded-xl px-3.5 py-3 outline-none focus:border-amber-400 transition-colors shrink-0 cursor-pointer"
            >
              <option value="all">All Regions</option>
              <option value="noida">Noida Sectors</option>
              <option value="greater-noida">Greater Noida</option>
              <option value="yamuna">YEIDA (Airport Zone)</option>
            </select>

            {/* Input */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-zinc-400 pointer-events-none" />
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sector, pocket, or layout (e.g. Sector 18, Alpha 1, Beta 2)..."
                className="w-full bg-transparent border-none text-white placeholder:text-zinc-500 pl-10 pr-3 py-2.5 text-xs md:text-sm focus-visible:ring-0 focus-visible:outline-none"
              />
            </div>

            {/* Submit CTA */}
            <Button
              type="submit"
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-xl transition-all shadow-md shrink-0 text-xs md:text-sm flex items-center justify-center gap-1.5"
            >
              <span>Explore Maps</span>
              <ArrowRight className="size-4" />
            </Button>
          </form>

          {/* Quick Sectors Shortcuts */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs text-zinc-400">
            <span className="text-zinc-500 font-medium">Trending:</span>
            {quickSectors.map((s, idx) => (
              <Link
                key={idx}
                href={s.href}
                className="text-zinc-300 hover:text-amber-400 transition-colors underline-offset-4 hover:underline"
              >
                {s.label}
                {idx < quickSectors.length - 1 && <span className="ml-2 text-zinc-600" aria-hidden="true">·</span>}
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Proof / Trust Strip */}
      <div className="relative z-10 w-full border-t border-zinc-800/80 bg-zinc-950/70 backdrop-blur-md py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
              <ShieldCheck className="size-5" />
            </div>
            <div>
              <div className="text-sm md:text-base font-bold text-white tracking-tight">Verified Layouts</div>
              <div className="text-xs text-zinc-400">Authority approved blueprints</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
              <Building2 className="size-5" />
            </div>
            <div>
              <div className="text-sm md:text-base font-bold text-white tracking-tight">3 Major Authorities</div>
              <div className="text-xs text-zinc-400">Noida, GNIDA &amp; YEIDA</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
              <FileText className="size-5" />
            </div>
            <div>
              <div className="text-sm md:text-base font-bold text-white tracking-tight">Plot Dimension Details</div>
              <div className="text-xs text-zinc-400">Road width &amp; park orientation</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
              <Users className="size-5" />
            </div>
            <div>
              <div className="text-sm md:text-base font-bold text-white tracking-tight">Free Site Visits</div>
              <div className="text-xs text-zinc-400">Local ground advisory support</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection