'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { Search, Phone, MessageCircle, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type MapItem = {
  slug: string
  title: string
  group: string
  category: string
  image: string
}

export const NoidaMapsSection = () => {
  const phoneNumber = '+91 62000-69000'
  const cleanPhone = '916200069000'

  const [maps, setMaps] = useState<MapItem[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  // Load all Noida maps once
  useEffect(() => {
    fetch('/data/noida-maps.json')
      .then((r) => r.json())
      .then((data: MapItem[]) => {
        // natural sort so "Sector 2" comes before "Sector 10"
        const sorted = [...data].sort((a, b) =>
          a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: 'base' })
        )
        setMaps(sorted)
      })
      .catch((err) => console.error('Failed to load maps', err))
      .finally(() => setLoading(false))
  }, [])

  // Search by sector name only; empty search shows everything
  const filteredMaps = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return maps
    return maps.filter((item) => item.title.toLowerCase().includes(q))
  }, [maps, searchQuery])

  return (
    <section className="relative w-full bg-black text-white py-16 px-6 md:px-12 overflow-hidden font-sans">

      {/* Grid Pattern Background Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(234, 179, 8, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(234, 179, 8, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto space-y-10">

        {/* Breadcrumb */}
        <div className="text-xs text-zinc-400 space-x-2">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <span>&gt;</span>
          <span className="text-amber-400">Noida Maps</span>
        </div>

        {/* Header Content & Contact Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-amber-500/20">
          <div className="space-y-3 max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Noida Sector Maps
            </h1>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
              Sector layout maps of Noida. Each map shows plot positions, road widths, parks and corner plots. Search a sector and tap to open.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              className="bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs md:text-sm px-5 py-5 rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <Link href={`tel:${cleanPhone}`}>
                <Phone className="size-4" data-icon="inline-start" />
                <span>Call {phoneNumber}</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-amber-500/40 text-amber-400 bg-zinc-950/80 hover:bg-amber-500/10 hover:border-amber-400 font-semibold text-xs md:text-sm px-5 py-5 rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <Link href={`https://wa.me/${cleanPhone}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4 text-amber-400" data-icon="inline-start" />
                <span>WhatsApp</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Search Bar only */}
        <div className="relative w-full md:max-w-xl">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
            <Search className="size-4" />
          </span>
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search sector: Sector 18, Sector 62..."
            className="w-full bg-zinc-900/90 border border-amber-500/30 text-white placeholder:text-zinc-500 pl-10 pr-4 py-3 rounded-xl text-sm focus-visible:ring-1 focus-visible:ring-amber-400 focus-visible:border-amber-400"
          />
        </div>

        {/* Count */}
        <div className="text-xs font-medium text-zinc-500">
          {loading ? 'Loading maps...' : `${filteredMaps.length} maps available`}
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-white">Maps of Noida</h2>

        {!loading && filteredMaps.length === 0 && (
          <p className="text-sm text-zinc-500">No sector found. Try a different search.</p>
        )}

        {/* All maps in one grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMaps.map((mapItem) => (
            <Link
              key={mapItem.slug}
              href={`/maps/noida/${mapItem.slug}`}
              className="group bg-zinc-950/90 border border-amber-500/20 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/10"
            >
              <div className="relative w-full h-48 rounded-xl bg-zinc-900 border border-amber-500/10 overflow-hidden flex items-center justify-center">
                <MapPin className="absolute size-6 text-amber-400 opacity-30" />
                <img
                  src={mapItem.image}
                  alt={`${mapItem.title} map`}
                  loading="lazy"
                  className="relative w-full h-full object-cover"
                />
              </div>

              <div className="mt-4 px-1">
                <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                  {mapItem.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

export default NoidaMapsSection