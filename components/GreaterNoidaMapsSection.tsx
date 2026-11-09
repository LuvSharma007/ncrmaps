'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { MapPin, Search, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MapViewerModal, ActiveMapData } from './MapViewerModal'
import { MapItem, MapsHeader, MapCard, SectionTitle, byTitle, GRID } from './MapsShared'

const groups = [
  'Alpha', 'Beta', 'Gamma', 'Delta', 'Eta & Zeta', 'Sigma', 'Omicron',
  'Mu & Xu', 'Numbered Sectors', 'Pockets, Golf Link & More', 'Ecotech',
]

export default function GreaterNoidaMapsSection() {
  const [maps, setMaps] = useState<MapItem[]>([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Industrial'>('All')
  const [group, setGroup] = useState('All')
  const [activeModalMap, setActiveModalMap] = useState<ActiveMapData | null>(null)

  useEffect(() => {
    fetch('/data/gn-maps.json')
      .then((r) => r.json())
      .then((data: MapItem[]) => setMaps([...data].sort(byTitle)))
      .catch((e) => console.error('Failed to load Greater Noida maps', e))
      .finally(() => setLoading(false))
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return maps.filter(
      (m) =>
        (!q || m.title.toLowerCase().includes(q)) &&
        (filter === 'All' || m.category === filter) &&
        (group === 'All' || m.group === group)
    )
  }, [maps, query, filter, group])

  // Residential block, then Industrial block; inside each: Alpha, Beta, Gamma...
  const blocks = useMemo(() => {
    const types = filter === 'All' ? ['Residential', 'Industrial'] : [filter]
    return types
      .map((type) => ({
        type,
        sections: groups
          .map((g) => ({
            group: g,
            items: filtered.filter((m) => m.category === type && m.group === g),
          }))
          .filter((s) => s.items.length > 0),
      }))
      .filter((b) => b.sections.length > 0)
  }, [filtered, filter])

  const open = (m: MapItem) =>
    setActiveModalMap({
      title: m.title,
      image: m.image,
      group: m.group,
      category: m.category,
      slug: m.slug,
      region: 'GNIDA Authority',
    })

  const reset = () => {
    setQuery('')
    setFilter('All')
    setGroup('All')
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 md:py-16 text-white md:px-12 font-sans">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <MapsHeader
          crumb="Greater Noida Sector Maps"
          title="Greater Noida Sector Layout Maps"
          description="Verified layout plans under Greater Noida Industrial Development Authority (GNIDA). Explore Greek-letter sectors, numbered sectors, Knowledge Parks, and Ecotech corridors."
        />

        <section aria-label="Map filters" className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-zinc-500 pointer-events-none" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sector (e.g. Alpha 1, Beta 2, Sigma, Ecotech)..."
                aria-label="Search Greater Noida sectors"
                className="w-full bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 pl-10 pr-4 py-2.5 rounded-xl text-sm focus-visible:ring-1 focus-visible:ring-amber-400 focus-visible:border-amber-400"
              />
            </div>
            <div className="flex items-center gap-2">
              {(['All', 'Residential', 'Industrial'] as const).map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
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

          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar border-t border-zinc-900 pt-3">
            {['All', ...groups].map((item) => (
              <button
                key={item}
                onClick={() => setGroup(item)}
                className={`shrink-0 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  group === item
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-400/50'
                    : 'bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-white'
                }`}
              >
                {item === 'All' ? 'All Groups' : item}
              </button>
            ))}
          </div>
        </section>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>{loading ? 'Loading maps...' : `${filtered.length} maps`}</span>
          {(query || filter !== 'All' || group !== 'All') && (
            <button onClick={reset} className="text-amber-400 hover:underline flex items-center gap-1">
              <RotateCcw className="size-3" />
              <span>Reset filters</span>
            </button>
          )}
        </div>

        {!loading && filtered.length === 0 && (
          <div className="py-16 text-center space-y-3 bg-zinc-900/40 rounded-2xl border border-zinc-800">
            <MapPin className="size-8 text-zinc-500 mx-auto" />
            <h3 className="text-base font-bold text-white">No Greater Noida sectors match</h3>
            <Button onClick={reset} variant="outline" className="border-zinc-700 text-zinc-300 text-xs">
              Reset All Filters
            </Button>
          </div>
        )}

        {blocks.map((block) => (
          <div key={block.type} className="space-y-10">
            <h2 className="text-xl md:text-2xl font-bold text-white">{block.type} Maps of Greater Noida</h2>
            {block.sections.map((s) => (
              <div key={s.group} className="space-y-4">
                <SectionTitle title={`${s.group} Maps`} count={s.items.length} />
                <div className={GRID}>
                  {s.items.map((m) => (
                    <MapCard key={m.slug} item={m} subtitle={m.group} onOpen={open} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <MapViewerModal map={activeModalMap} onClose={() => setActiveModalMap(null)} />
    </main>
  )
}