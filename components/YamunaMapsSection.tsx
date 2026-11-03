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

export const YamunaMapsSection = () => {
  const phoneNumber = '+91 62000-69000'
  const cleanPhone = '916200069000'

  const [maps, setMaps] = useState<MapItem[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null)

  // Load Yamuna maps data
  useEffect(() => {
    fetch('/data/yamuna-maps.json')
      .then((r) => r.json())
      .then((data: MapItem[]) => {
        const sorted = [...data].sort((a, b) =>
          a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: 'base' })
        )
        setMaps(sorted)
      })
      .catch((err) => console.error('Failed to load Yamuna maps', err))
      .finally(() => setLoading(false))
  }, [])

  // Extract unique categories dynamically from data or use standard preset filters
  const categories = ['All', 'Residential', 'Industrial', 'Gaur Yamuna City', 'Master Plan', 'Farmer Quota']

  // Extract unique groups dynamically for quick chips (e.g., Sector 18, Sector 20, etc.)
  const availableGroups = useMemo(() => {
    const groups = new Set(maps.map((m) => m.group).filter(Boolean))
    return Array.from(groups)
  }, [maps])

  // Filter maps based on search query, category, and group chip selection
  const filteredMaps = useMemo(() => {
    return maps.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
      const matchesCategory = selectedCategory === 'All' || item.category.toLowerCase() === selectedCategory.toLowerCase()
      const matchesGroup = !selectedGroup || item.group === selectedGroup
      return matchesSearch && matchesCategory && matchesGroup
    })
  }, [maps, searchQuery, selectedCategory, selectedGroup])

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
          <span className="text-amber-400">Yamuna Expressway Map</span>
        </div>

        {/* Header Content & Contact Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-amber-500/20">
          <div className="space-y-3 max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Yamuna Expressway Map <span className="text-amber-400 font-serif font-normal">—</span> YEIDA Sector, Pocket &amp; GYC Plot Maps
            </h1>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
              Browse the complete Yamuna Expressway map library: YEIDA layout plans covering residential sectors and pockets, industrial sectors, farmer quota (7% village) plots, Gaur Yamuna City and the Yamuna Expressway master plan. Search a sector or pocket, open the map you need and call us for plot availability.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              className="bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs md:text-sm px-5 py-5 rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <a href={`tel:${cleanPhone}`}>
                <Phone className="size-4" data-icon="inline-start" />
                <span>Call {phoneNumber}</span>
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-amber-500/40 text-amber-400 bg-zinc-950/80 hover:bg-amber-500/10 hover:border-amber-400 font-semibold text-xs md:text-sm px-5 py-5 rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <a href={`https://wa.me/${cleanPhone}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4 text-amber-400" data-icon="inline-start" />
                <span>WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Search Bar & Category Filter Pills */}
        <div className="space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:max-w-md">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                <Search className="size-4" />
              </span>
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search: Sector 18, Pocket 7A, GYC..."
                className="w-full bg-zinc-900/90 border border-amber-500/30 text-white placeholder:text-zinc-500 pl-10 pr-4 py-3 rounded-xl text-sm focus-visible:ring-1 focus-visible:ring-amber-400 focus-visible:border-amber-400"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-amber-400 text-black font-semibold shadow-md shadow-amber-400/20'
                      : 'bg-zinc-900/80 text-zinc-300 border border-amber-500/20 hover:border-amber-400/50 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Group Quick Chips (if available) */}
          {availableGroups.length > 0 && (
            <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 no-scrollbar border-t border-zinc-900">
              <span className="text-xs text-zinc-500 shrink-0 font-medium">Quick Groups:</span>
              {selectedGroup && (
                <button
                  onClick={() => setSelectedGroup(null)}
                  className="px-2.5 py-1 rounded-md text-[11px] bg-zinc-800 text-amber-400 hover:bg-zinc-700 transition-colors"
                >
                  ✕ Clear Filter
                </button>
              )}
              {availableGroups.map((group) => (
                <button
                  key={group}
                  onClick={() => setSelectedGroup(selectedGroup === group ? null : group)}
                  className={`px-3 py-1 rounded-lg text-xs whitespace-nowrap transition-all ${
                    selectedGroup === group
                      ? 'bg-amber-500/20 border border-amber-400 text-amber-400 font-medium'
                      : 'bg-zinc-950 text-zinc-400 border border-zinc-800 hover:border-amber-500/30 hover:text-zinc-200'
                  }`}
                >
                  {group}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Count */}
        <div className="text-xs font-medium text-zinc-500">
          {loading ? 'Loading maps...' : `${filteredMaps.length} maps available`}
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-white">Maps of Yamuna Expressway</h2>

        {!loading && filteredMaps.length === 0 && (
          <p className="text-sm text-zinc-500">No map found matching your filters. Try a different search.</p>
        )}

        {/* Maps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMaps.map((mapItem) => (
            <Link
              key={mapItem.slug}
              href={`/maps/yamuna-expressway/${mapItem.slug}`}
              className="group bg-zinc-950/90 border border-amber-500/20 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/10"
            >
              <div className="relative w-full h-48 rounded-xl bg-zinc-900 border border-amber-500/10 overflow-hidden flex items-center justify-center">
                <MapPin className="absolute size-6 text-amber-400 opacity-30" />
                <img
                  src={mapItem.image}
                  alt={`${mapItem.title} map`}
                  loading="lazy"
                  className="relative w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-semibold bg-black/70 text-amber-400 border border-amber-500/30 backdrop-blur-sm">
                  {mapItem.category}
                </span>
              </div>

              <div className="mt-4 px-1 space-y-1">
                <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                  {mapItem.title}
                </h3>
                {mapItem.group && (
                  <p className="text-xs text-zinc-500">{mapItem.group}</p>
                )}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

export default YamunaMapsSection