'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { Search, Phone, MessageCircle, MapPin, Eye, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MapViewerModal, ActiveMapData } from './MapViewerModal'

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
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(24)
  const [activeModalMap, setActiveModalMap] = useState<ActiveMapData | null>(null)

  // Load all Noida maps once from static data
  useEffect(() => {
    fetch('/data/noida-maps.json')
      .then((r) => r.json())
      .then((data: MapItem[]) => {
        const sorted = [...data].sort((a, b) =>
          a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: 'base' })
        )
        setMaps(sorted)
      })
      .catch((err) => console.error('Failed to load Noida maps', err))
      .finally(() => setLoading(false))
  }, [])

  // Filter categories
  const categories = useMemo(() => {
    const set = new Set(maps.map((m) => m.category).filter(Boolean))
    return ['All', ...Array.from(set)]
  }, [maps])

  // Search and category filter
  const filteredMaps = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return maps.filter((item) => {
      const matchQuery = !q || item.title.toLowerCase().includes(q)
      const matchCategory = selectedCategory === 'All' || item.category === selectedCategory
      return matchQuery && matchCategory
    })
  }, [maps, searchQuery, selectedCategory])

  const visibleMaps = useMemo(() => {
    return filteredMaps.slice(0, visibleCount)
  }, [filteredMaps, visibleCount])

  const handleSearchChange = (val: string) => {
    setSearchQuery(val)
    setVisibleCount(24)
  }

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat)
    setVisibleCount(24)
  }

  return (
    <section className="relative w-full bg-zinc-950 text-white py-12 md:py-16 px-6 md:px-12 font-sans min-h-screen">
      <div className="relative z-10 max-w-7xl mx-auto space-y-8">

        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/maps" className="hover:text-amber-400 transition-colors">All Maps</Link>
          <span aria-hidden="true">/</span>
          <span className="text-amber-400 font-medium">Noida Sector Maps</span>
        </div>

        {/* Header Content & Contact Desk */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-zinc-800">
          <div className="space-y-2 max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Noida Sector Layout Maps
            </h1>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
              Official layout blueprints covering Sectors 1 through 168, expressway sectors, green belts, and 5% abadi plots. Click any map to view in high resolution with interactive zoom.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${cleanPhone}`}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs md:text-sm px-5 py-3 rounded-xl shadow-md transition-all"
            >
              <Phone className="size-4" />
              <span>Call {phoneNumber}</span>
            </a>
            <a
              href={`https://wa.me/${cleanPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 font-semibold text-xs md:text-sm px-5 py-3 rounded-xl transition-all shadow-md"
            >
              <MessageCircle className="size-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Search Bar & Category Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-zinc-500 pointer-events-none" />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search sector (e.g. Sector 18, 62, 137, 150)..."
              className="w-full bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 pl-10 pr-4 py-2.5 rounded-xl text-sm focus-visible:ring-1 focus-visible:ring-amber-400 focus-visible:border-amber-400"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-black shadow-sm'
                    : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Counter and Results Status */}
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <div>
            {loading ? (
              <span>Loading blueprints...</span>
            ) : (
              <span>
                Showing <strong className="text-white font-mono tabular-nums">{visibleMaps.length}</strong> of{' '}
                <strong className="text-white font-mono tabular-nums">{filteredMaps.length}</strong> verified Noida maps
              </span>
            )}
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-amber-400 hover:underline flex items-center gap-1"
            >
              <RotateCcw className="size-3" />
              <span>Clear search</span>
            </button>
          )}
        </div>

        {!loading && filteredMaps.length === 0 && (
          <div className="py-16 text-center space-y-3 bg-zinc-900/40 rounded-2xl border border-zinc-800">
            <MapPin className="size-8 text-zinc-500 mx-auto" />
            <h3 className="text-base font-bold text-white">No Noida sectors match your query</h3>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto">
              Try searching by sector number (e.g. &ldquo;150&rdquo; or &ldquo;62&rdquo;) or check our Greater Noida library.
            </p>
            <Button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All')
              }}
              variant="outline"
              className="border-zinc-700 text-zinc-300 text-xs"
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* Responsive Grid of Map Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleMaps.map((mapItem) => (
            <button
              key={mapItem.slug}
              onClick={() =>
                setActiveModalMap({
                  title: mapItem.title,
                  image: mapItem.image,
                  group: mapItem.group,
                  category: mapItem.category,
                  slug: mapItem.slug,
                  region: 'Noida Authority'
                })
              }
              className="group bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4 flex flex-col justify-between text-left transition-all duration-300 hover:border-amber-400/50 hover:bg-zinc-900 hover:shadow-xl hover:shadow-amber-500/5 cursor-pointer"
            >
              <div className="relative w-full h-48 rounded-xl bg-zinc-950 border border-zinc-800 overflow-hidden flex items-center justify-center">
                <img
                  src={mapItem.image}
                  alt={`${mapItem.title} map`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2 right-2">
                  <span className="px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-semibold text-amber-400 border border-amber-500/20">
                    {mapItem.category || 'Residential'}
                  </span>
                </div>
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500 text-black text-[11px] font-semibold shadow-md">
                  <Eye className="size-3" />
                  <span>Inspect Blueprint</span>
                </div>
              </div>

              <div className="mt-4 px-1 space-y-1">
                <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                  {mapItem.title}
                </h3>
                {mapItem.group && (
                  <p className="text-xs text-zinc-500 line-clamp-1">{mapItem.group}</p>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Load More Pagination */}
        {visibleCount < filteredMaps.length && (
          <div className="flex justify-center pt-6">
            <Button
              onClick={() => setVisibleCount((c) => c + 24)}
              variant="outline"
              className="border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 px-8 py-3 rounded-xl font-semibold text-sm transition-all shadow-md"
            >
              <span>Load More Sectors ({filteredMaps.length - visibleCount} remaining)</span>
            </Button>
          </div>
        )}

      </div>

      {/* Interactive Map Modal */}
      <MapViewerModal
        map={activeModalMap}
        onClose={() => setActiveModalMap(null)}
      />
    </section>
  )
}

export default NoidaMapsSection