'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { Search, MapPin, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MapViewerModal, ActiveMapData } from './MapViewerModal'
import { MapItem, MapsHeader, MapCard, SectionTitle, byTitle, GRID } from './MapsShared'

// Section order on the page
const TYPES = [
  { key: 'Residential', title: 'Residential Yamuna Expressway Maps' },
  { key: 'Industrial', title: 'Industrial Yamuna Expressway Maps' },
  { key: 'Master Plan', title: 'Yamuna Expressway Master Plan Maps' },
  { key: 'Farmer Quota', title: 'Farmer Quota (7% Village) Maps' },
]

export const YamunaMapsSection = () => {
  const [maps, setMaps] = useState<MapItem[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null)
  const [activeModalMap, setActiveModalMap] = useState<ActiveMapData | null>(null)

  useEffect(() => {
    fetch('/data/yamuna-maps.json')
      .then((r) => r.json())
      .then((data: MapItem[]) => setMaps([...data].sort(byTitle)))
      .catch((err) => console.error('Failed to load Yamuna maps', err))
      .finally(() => setLoading(false))
  }, [])

  const availableGroups = useMemo(() => {
    const set = new Set(
      maps.filter((m) => selectedCategory === 'All' || m.category === selectedCategory).map((m) => m.group)
    )
    return Array.from(set).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  }, [maps, selectedCategory])

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return maps.filter(
      (m) =>
        (!q || m.title.toLowerCase().includes(q)) &&
        (selectedCategory === 'All' || m.category === selectedCategory) &&
        (!selectedGroup || m.group === selectedGroup)
    )
  }, [maps, searchQuery, selectedCategory, selectedGroup])

  const sections = TYPES.map((t) => ({ ...t, items: filtered.filter((m) => m.category === t.key) })).filter(
    (s) => s.items.length > 0
  )

  const open = (m: MapItem) =>
    setActiveModalMap({
      title: m.title,
      image: m.image,
      group: m.group,
      category: m.category,
      slug: m.slug,
      region: 'YEIDA Authority',
    })

  const changeCategory = (cat: string) => {
    setSelectedCategory(cat)
    setSelectedGroup(null) // chips change per category
  }

  const reset = () => {
    setSearchQuery('')
    setSelectedCategory('All')
    setSelectedGroup(null)
  }

  return (
    <section className="relative w-full bg-zinc-950 text-white py-12 md:py-16 px-6 md:px-12 font-sans min-h-screen">
      <div className="relative z-10 max-w-7xl mx-auto space-y-8">
        <MapsHeader
          crumb="Yamuna Expressway (YEIDA) Maps"
          title="Yamuna Expressway (YEIDA) Layout Plans"
          description="Official cartography covering the Jewar Airport corridor, residential sectors, Gaur Yamuna City, 7% farmer abadi plots, and upcoming industrial clusters."
        />

        <div className="space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-zinc-500 pointer-events-none" />
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sector, pocket, or GYC (e.g. Sector 18, Pocket 7A)..."
                className="w-full bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 pl-10 pr-4 py-2.5 rounded-xl text-sm focus-visible:ring-1 focus-visible:ring-amber-400 focus-visible:border-amber-400"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {['All', ...TYPES.map((t) => t.key)].map((cat) => (
                <button
                  key={cat}
                  onClick={() => changeCategory(cat)}
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

          {availableGroups.length > 0 && (
            <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 no-scrollbar border-t border-zinc-900">
              {availableGroups.map((g) => (
                <button
                  key={g}
                  onClick={() => setSelectedGroup(selectedGroup === g ? null : g)}
                  className={`px-3 py-1 rounded-lg text-xs whitespace-nowrap transition-all ${
                    selectedGroup === g
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-400/50'
                      : 'bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-white'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>{loading ? 'Loading blueprints...' : `${filtered.length} maps`}</span>
          {(searchQuery || selectedCategory !== 'All' || selectedGroup) && (
            <button onClick={reset} className="text-amber-400 hover:underline flex items-center gap-1">
              <RotateCcw className="size-3" />
              <span>Reset filters</span>
            </button>
          )}
        </div>

        {!loading && filtered.length === 0 && (
          <div className="py-16 text-center space-y-3 bg-zinc-900/40 rounded-2xl border border-zinc-800">
            <MapPin className="size-8 text-zinc-500 mx-auto" />
            <h3 className="text-base font-bold text-white">No YEIDA maps match your search</h3>
            <Button onClick={reset} variant="outline" className="border-zinc-700 text-zinc-300 text-xs">
              Reset Filters
            </Button>
          </div>
        )}

        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.key} className="space-y-4">
              <SectionTitle title={s.title} count={s.items.length} />
              <div className={GRID}>
                {s.items.map((m) => (
                  <MapCard key={m.slug} item={m} subtitle={m.group} onOpen={open} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <MapViewerModal map={activeModalMap} onClose={() => setActiveModalMap(null)} />
    </section>
  )
}

export default YamunaMapsSection