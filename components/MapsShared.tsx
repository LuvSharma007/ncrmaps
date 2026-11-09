'use client'

import React from 'react'
import Link from 'next/link'
import { Phone, MessageCircle, Eye } from 'lucide-react'

export type MapItem = {
  slug: string
  title: string
  group: string
  category: string
  image: string
  thumb?: string
}

export const byTitle = (a: MapItem, b: MapItem) =>
  a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: 'base' })

export const GRID = 'grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'

export function MapsHeader({ crumb, title, description }: { crumb: string; title: string; description: string }) {
  const phoneNumber = '+91 62000-69000'
  const cleanPhone = '916200069000'
  return (
    <>
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/maps" className="hover:text-amber-400 transition-colors">All Maps</Link>
        <span aria-hidden="true">/</span>
        <span className="text-amber-400 font-medium">{crumb}</span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-zinc-800">
        <div className="space-y-2 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">{title}</h1>
          <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">{description}</p>
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
    </>
  )
}

export function SectionTitle({ title, count }: { title: string; count: number }) {
  return (
    <h3 className="flex items-baseline gap-2 text-base md:text-lg font-bold text-amber-400">
      {title}
      <span className="text-xs font-medium text-zinc-500">{count}</span>
    </h3>
  )
}

export function MapCard({
  item,
  subtitle,
  onOpen,
}: {
  item: MapItem
  subtitle?: string
  onOpen: (item: MapItem) => void
}) {
  return (
    <button
      onClick={() => onOpen(item)}
      className="group bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4 flex flex-col justify-between text-left transition-all duration-300 hover:border-amber-400/50 hover:bg-zinc-900 hover:shadow-xl hover:shadow-amber-500/5 cursor-pointer"
    >
      <div className="relative w-full h-48 rounded-xl bg-zinc-950 border border-zinc-800 overflow-hidden flex items-center justify-center">
        <img
          src={item.thumb ?? item.image}
          alt={`${item.title} map`}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-2 right-2">
          <span className="px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-semibold text-amber-400 border border-amber-500/20">
            {item.category}
          </span>
        </div>
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500 text-black text-[11px] font-semibold shadow-md">
          <Eye className="size-3" />
          <span>Inspect Blueprint</span>
        </div>
      </div>

      <div className="mt-4 px-1 space-y-1">
        <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
          {item.title}
        </h4>
        {subtitle && <p className="text-xs text-zinc-500 line-clamp-1">{subtitle}</p>}
      </div>
    </button>
  )
}