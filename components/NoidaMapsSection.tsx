'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { MapPin, Search, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MapViewerModal, ActiveMapData } from './MapViewerModal'
import { MapItem, MapsHeader, MapCard, SectionTitle, byTitle, GRID } from './MapsShared'

// EDIT these ranges as you like
const RANGES: [number, number][] = [[1, 43], [44, 66], [67, 80], [81, 100], [101, 130], [131, 168]]

const sectorNo = (title: string) => {
  const m = title.match(/sector\s*(\d+)/i)
  return m ? Number(m[1]) : null
}
const inRange = (n: number | null, [a, b]: [number, number]) => n !== null && n >= a && n <= b

type View = 'sector' | 'abadi'

export const NoidaMapsSection = () => {
  const [maps, setMaps] = useState<MapItem[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [view, setView] = useState<View>('sector')
  const [activeModalMap, setActiveModalMap] = useState<ActiveMapData | null>(null)

  useEffect(() => {
    fetch('/data/noida-maps.json')
      .then((r) => r.json())
      .then((data: MapItem[]) => setMaps([...data].sort(byTitle)))
      .catch((err) => console.error('Failed to load Noida maps', err))
      .finally(() => setLoading(false))
  }, [])

  const isAbadi = (m: MapItem) => m.category === '5% Abadi'
  const abadiCount = maps.filter(isAbadi).length
  const sectorCount = maps.length - abadiCount

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return maps.filter((m) => isAbadi(m) === (view === 'abadi') && (!q || m.title.toLowerCase().includes(q)))
  }, [maps, view, searchQuery])

  const sections = useMemo(() => {
    if (view === 'abadi') return [{ title: '5% Abadi Maps', items: filtered }]
    const list = RANGES.map((r) => ({
      title: `Sector ${r[0]}–${r[1]} Maps`,
      items: filtered.filter((m) => inRange(sectorNo(m.title), r)),
    }))
    list.push({
      title: 'Other Sector Maps',
      items: filtered.filter((m) => !RANGES.some((r) => inRange(sectorNo(m.title), r))),
    })
    return list.filter((s) => s.items.length > 0)
  }, [filtered, view])

  const open = (m: MapItem) =>
    setActiveModalMap({
      title: m.title,
      image: m.image,
      group: m.group,
      category: m.category,
      slug: m.slug,
      region: 'Noida Authority',
    })

  const tab = (active: boolean) =>
    `px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
      active
        ? 'bg-amber-500 text-black shadow-sm'
        : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
    }`

  return (
    <section className="relative w-full bg-zinc-950 text-white py-12 md:py-16 px-6 md:px-12 font-sans min-h-screen">
      <div className="relative z-10 max-w-7xl mx-auto space-y-8">
        <MapsHeader
          crumb="Noida Sector Maps"
          title="Noida Sector Layout Maps"
          description="Official layout blueprints covering Noida sectors and 5% abadi plots. Click any map to view in high resolution with interactive zoom."
        />

        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          <div className="flex items-center gap-2">
            <button onClick={() => setView('sector')} className={tab(view === 'sector')}>
              Sector Maps ({sectorCount})
            </button>
            <button onClick={() => setView('abadi')} className={tab(view === 'abadi')}>
              5% Abadi ({abadiCount})
            </button>
          </div>

          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-zinc-500 pointer-events-none" />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={view === 'abadi' ? 'Search abadi (e.g. Sector 63A)...' : 'Search sector (e.g. 18, 62, 137)...'}
              className="w-full bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 pl-10 pr-4 py-2.5 rounded-xl text-sm focus-visible:ring-1 focus-visible:ring-amber-400 focus-visible:border-amber-400"
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>{loading ? 'Loading blueprints...' : `${filtered.length} maps`}</span>
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="text-amber-400 hover:underline flex items-center gap-1">
              <RotateCcw className="size-3" />
              <span>Clear search</span>
            </button>
          )}
        </div>

        {!loading && filtered.length === 0 && (
          <div className="py-16 text-center space-y-3 bg-zinc-900/40 rounded-2xl border border-zinc-800">
            <MapPin className="size-8 text-zinc-500 mx-auto" />
            <h3 className="text-base font-bold text-white">No Noida maps match your query</h3>
            <Button onClick={() => setSearchQuery('')} variant="outline" className="border-zinc-700 text-zinc-300 text-xs">
              Clear search
            </Button>
          </div>
        )}

        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title} className="space-y-4">
              <SectionTitle title={s.title} count={s.items.length} />
              <div className={GRID}>
                {s.items.map((m) => (
                  <MapCard key={m.slug} item={m} onOpen={open} />
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

export default NoidaMapsSection