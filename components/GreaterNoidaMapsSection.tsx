'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'
import { MapPin, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

type MapItem = {
  slug: string
  title: string
  group: string
  category: 'Residential' | 'Industrial'
  image: string
  thumb?: string // added once you generate thumbnails
}

const groups = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Eta & Zeta', 'Sigma', 'Omicron', 'Mu & Xu', 'Numbered Sectors', 'Pockets, Golf Link & More', 'Ecotech']

function LazyMapImage({ src, alt }: { src: string; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px 0px' }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="relative h-48 w-full overflow-hidden rounded-xl border border-amber-500/10 bg-zinc-900">
      {!shouldLoad ? (
        <Skeleton className="absolute inset-0 rounded-xl bg-zinc-800" />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}
      <MapPin aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-400 opacity-30" />
    </div>
  )
}

export default function GreaterNoidaMapsSection() {
  const [maps, setMaps] = useState<MapItem[]>([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Industrial'>('All')
  const [group, setGroup] = useState('All')
  const [visibleCount, setVisibleCount] = useState(12)

  useEffect(() => {
    fetch('/data/gn-maps.json')
      .then((r) => r.json())
      .then((data: MapItem[]) => setMaps(data))
      .catch((e) => console.error('Failed to load maps', e))
      .finally(() => setLoading(false))
  }, [])

  const filtered = useMemo(
    () =>
      maps.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) &&
          (filter === 'All' || item.category === filter) &&
          (group === 'All' || item.group === group)
      ),
    [maps, query, filter, group]
  )
  const visible = filtered.slice(0, visibleCount)

  useEffect(() => setVisibleCount(12), [query, filter, group])

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <header className="flex flex-col gap-4 border-b border-amber-500/20 pb-8">
          <p className="text-xs text-amber-400">Greater Noida / Maps</p>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Greater Noida Sector Maps</h1>
          <p className="max-w-2xl text-sm leading-6 text-zinc-400">Browse residential and industrial sector layouts.</p>
        </header>

        <section aria-label="Map filters" className="flex flex-col gap-4">
          <div className="relative max-w-xl">
            <Search aria-hidden="true" className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search sectors..."
              aria-label="Search sectors"
              className="h-11 w-full rounded-xl border border-amber-500/30 bg-zinc-900 pl-10 pr-4 text-sm outline-none placeholder:text-zinc-500 focus:border-amber-400"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {(['All', 'Residential', 'Industrial'] as const).map((item) => (
              <Button key={item} onClick={() => setFilter(item)} variant={filter === item ? 'default' : 'outline'}
                className={filter === item ? 'bg-amber-500 text-black hover:bg-amber-400' : 'border-zinc-800 text-zinc-300'}>
                {item}
              </Button>
            ))}
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {['All', ...groups].map((item) => (
              <Button key={item} onClick={() => setGroup(item)} size="sm" variant={group === item ? 'default' : 'outline'}
                className={`shrink-0 rounded-full ${group === item ? 'bg-amber-500 text-black hover:bg-amber-400' : 'border-zinc-800 text-zinc-400'}`}>
                {item === 'All' ? 'All Groups' : item}
              </Button>
            ))}
          </div>
        </section>

        <p className="text-xs text-zinc-500">
          {loading ? 'Loading maps...' : `${filtered.length} maps available · showing ${visible.length}`}
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((item) => (
            <Link key={item.slug} href={`/maps/greater-noida/${item.slug}`}
              className="group rounded-2xl border border-amber-500/20 bg-zinc-950 p-4 transition hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/10">
              <LazyMapImage src={item.thumb ?? item.image} alt={`${item.title} map`} />
              <div className="mt-4">
                <h2 className="font-bold group-hover:text-amber-400">{item.title}</h2>
                <p className="text-xs text-zinc-400">{item.category}</p>
              </div>
            </Link>
          ))}
        </div>

        {visibleCount < filtered.length && (
          <div className="flex justify-center">
            <Button onClick={() => setVisibleCount((c) => c + 12)} variant="outline" className="border-amber-500/40 text-amber-400">
              Load more ({filtered.length - visibleCount} remaining)
            </Button>
          </div>
        )}
      </div>
    </main>
  )
}