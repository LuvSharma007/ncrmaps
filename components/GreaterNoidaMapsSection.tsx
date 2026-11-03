'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { MapPin, Search, Phone, MessageCircle, Eye, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MapViewerModal, ActiveMapData } from './MapViewerModal'

type MapItem = {
  slug: string
  title: string
  group: string
  category: 'Residential' | 'Industrial' | string
  image: string
  thumb?: string
}

const groups = [
  'Alpha',
  'Beta',
  'Gamma',
  'Delta',
  'Eta & Zeta',
  'Sigma',
  'Omicron',
  'Mu & Xu',
  'Numbered Sectors',
  'Pockets, Golf Link & More',
  'Ecotech'
]

export default function GreaterNoidaMapsSection() {
  const phoneNumber = '+91 62000-69000'
  const cleanPhone = '916200069000'

  const [maps, setMaps] = useState<MapItem[]>([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Industrial'>('All')
  const [group, setGroup] = useState('All')
  const [visibleCount, setVisibleCount] = useState(24)
  const [activeModalMap, setActiveModalMap] = useState<ActiveMapData | null>(null)

  useEffect(() => {
    fetch('/data/gn-maps.json')
      .then((r) => r.json())
      .then((data: MapItem[]) => {
        const sorted = [...data].sort((a, b) =>
          a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: 'base' })
        )
        setMaps(sorted)
      })
      .catch((e) => console.error('Failed to load Greater Noida maps', e))
      .finally(() => setLoading(false))
  }, [])

  const filtered = useMemo(() => {
    return maps.filter((item) => {
      const matchQuery = !query.trim() || item.title.toLowerCase().includes(query.toLowerCase())
      const matchFilter = filter === 'All' || item.category === filter
      const matchGroup = group === 'All' || item.group === group
      return matchQuery && matchFilter && matchGroup
    })
  }, [maps, query, filter, group])

  const visible = useMemo(() => {
    return filtered.slice(0, visibleCount)
  }, [filtered, visibleCount])

  const handleQueryChange = (val: string) => {
    setQuery(val)
    setVisibleCount(24)
  }

  const handleFilterChange = (val: 'All' | 'Residential' | 'Industrial') => {
    setFilter(val)
    setVisibleCount(24)
  }

  const handleGroupChange = (val: string) => {
    setGroup(val)
    setVisibleCount(24)
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 md:py-16 text-white md:px-12 font-sans">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/maps" className="hover:text-amber-400 transition-colors">All Maps</Link>
          <span aria-hidden="true">/</span>
          <span className="text-amber-400 font-medium">Greater Noida Sector Maps</span>
        </div>

        {/* Header & Contact Hotline */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-zinc-800">
          <div className="space-y-2 max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Greater Noida Sector Layout Maps
            </h1>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
              Verified layout plans under Greater Noida Industrial Development Authority (GNIDA). Explore Greek-letter sectors, numbered sectors, Knowledge Parks, and Ecotech corridors.
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

        {/* Filter Toolbar */}
        <section aria-label="Map filters" className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-zinc-500 pointer-events-none" />
              <Input
                value={query}
                onChange={(e) => handleQueryChange(e.target.value)}
                placeholder="Search sector (e.g. Alpha 1, Beta 2, Sigma, Ecotech)..."
                aria-label="Search Greater Noida sectors"
                className="w-full bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 pl-10 pr-4 py-2.5 rounded-xl text-sm focus-visible:ring-1 focus-visible:ring-amber-400 focus-visible:border-amber-400"
              />
            </div>

            {/* Type selector */}
            <div className="flex items-center gap-2">
              {(['All', 'Residential', 'Industrial'] as const).map((item) => (
                <button
                  key={item}
                  onClick={() => handleFilterChange(item)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                    filter === item
                      ? 'bg-amber-500 text-black shadow-sm'
                      : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Group Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar border-t border-zinc-900 pt-3">
            <span className="text-xs text-zinc-500 shrink-0 font-medium">Zonal Cluster:</span>
            {['All', ...groups].map((item) => (
              <button
                key={item}
                onClick={() => handleGroupChange(item)}
                className={`shrink-0 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  group === item
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-400/50'
                    : 'bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-white'
                }`}
              >
                {item === 'All' ? 'All Clusters' : item}
              </button>
            ))}
          </div>
        </section>

        {/* Counter & Status */}
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <div>
            {loading ? (
              <span>Loading blueprints...</span>
            ) : (
              <span>
                Showing <strong className="text-white font-mono tabular-nums">{visible.length}</strong> of{' '}
                <strong className="text-white font-mono tabular-nums">{filtered.length}</strong> verified Greater Noida maps
              </span>
            )}
          </div>
          {(query || filter !== 'All' || group !== 'All') && (
            <button
              onClick={() => {
                setQuery('')
                setFilter('All')
                setGroup('All')
              }}
              className="text-amber-400 hover:underline flex items-center gap-1"
            >
              <RotateCcw className="size-3" />
              <span>Reset filters</span>
            </button>
          )}
        </div>

        {/* Empty State */}
        {!loading && filtered.length === 0 && (
          <div className="py-16 text-center space-y-3 bg-zinc-900/40 rounded-2xl border border-zinc-800">
            <MapPin className="size-8 text-zinc-500 mx-auto" />
            <h3 className="text-base font-bold text-white">No Greater Noida sectors match your criteria</h3>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto">
              Try choosing &ldquo;All Clusters&rdquo; or searching a sector by name like Alpha, Beta, or Delta.
            </p>
            <Button
              onClick={() => {
                setQuery('')
                setFilter('All')
                setGroup('All')
              }}
              variant="outline"
              className="border-zinc-700 text-zinc-300 text-xs"
            >
              Reset All Filters
            </Button>
          </div>
        )}

        {/* Map Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {visible.map((item) => (
            <button
              key={item.slug}
              onClick={() =>
                setActiveModalMap({
                  title: item.title,
                  image: item.image,
                  group: item.group,
                  category: item.category,
                  slug: item.slug,
                  region: 'GNIDA Authority'
                })
              }
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-left transition-all duration-300 hover:border-amber-400/50 hover:bg-zinc-900 hover:shadow-xl hover:shadow-amber-500/5 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 flex items-center justify-center">
                <img
                  src={item.thumb ?? item.image}
                  alt={`${item.title} map`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2 right-2">
                  <span className="px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-semibold text-amber-400 border border-amber-500/20">
                    {item.category || 'Residential'}
                  </span>
                </div>
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500 text-black text-[11px] font-semibold shadow-md">
                  <Eye className="size-3" />
                  <span>Inspect Blueprint</span>
                </div>
              </div>

              <div className="mt-4 px-1 space-y-1">
                <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-500 line-clamp-1">{item.group || item.category}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Load More Pagination */}
        {visibleCount < filtered.length && (
          <div className="flex justify-center pt-6">
            <Button
              onClick={() => setVisibleCount((c) => c + 24)}
              variant="outline"
              className="border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 px-8 py-3 rounded-xl font-semibold text-sm transition-all shadow-md"
            >
              <span>Load More Sectors ({filtered.length - visibleCount} remaining)</span>
            </Button>
          </div>
        )}
      </div>

      {/* Interactive Map Modal */}
      <MapViewerModal
        map={activeModalMap}
        onClose={() => setActiveModalMap(null)}
      />
    </main>
  )
}