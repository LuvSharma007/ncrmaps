'use client'

import React, { useState, useEffect } from 'react'
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
  Minimize2,
  ExternalLink,
  Phone,
  MessageCircle,
  MapPin,
  Share2,
  Check
} from 'lucide-react'

export interface ActiveMapData {
  title: string
  image: string
  group?: string
  category?: string
  slug?: string
  region?: string
}

interface MapViewerModalProps {
  map: ActiveMapData | null
  onClose: () => void
}

export const MapViewerModal: React.FC<MapViewerModalProps> = ({ map, onClose }) => {
  const [scale, setScale] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [copied, setCopied] = useState(false)
  const cleanPhone = '916200069000'

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (map) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [map, onClose])

  if (!map) return null

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.3, 3))
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.3, 0.6))
  const handleResetZoom = () => setScale(1)

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const encodedMsg = encodeURIComponent(
    `Hello NCR Maps, I am interested in layout details and plot availability for: ${map.title} (${map.region || 'NCR'}).`
  )

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 md:p-6 transition-all duration-200"
      onClick={onClose}
    >
      <div
        key={map.slug || map.title}
        className={`relative w-full ${
          isFullscreen ? 'h-full max-w-none' : 'max-w-6xl max-h-[92vh]'
        } bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col transition-all duration-300`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800/80 bg-zinc-900/60">
          <div className="flex items-center gap-3 truncate pr-4">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
              <MapPin className="size-4" />
            </div>
            <div className="truncate">
              <h3 className="text-base md:text-lg font-bold text-white truncate tracking-tight">
                {map.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                {map.region && <span>{map.region}</span>}
                {map.region && map.category && <span aria-hidden="true">·</span>}
                {map.category && <span>{map.category}</span>}
                {map.group && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-amber-400/90 font-medium">{map.group}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopyLink}
              title="Share Map Link"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            >
              {copied ? <Check className="size-4 text-emerald-400" /> : <Share2 className="size-4" />}
            </button>
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              className="hidden md:flex p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            >
              {isFullscreen ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
            </button>
            <button
              onClick={onClose}
              title="Close modal (Esc)"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        {/* Viewer Canvas Area */}
        <div className="relative flex-1 bg-zinc-950 overflow-auto flex items-center justify-center p-4 min-h-[360px] md:min-h-[480px]">
          {/* Subtle Grid Backdrop */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}
          />

          <div
            className="transition-transform duration-200 ease-out select-none"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: 'center center'
            }}
          >
            <img
              src={map.image}
              alt={`${map.title} Sector Layout Map`}
              referrerPolicy="no-referrer"
              className="max-h-[68vh] w-auto max-w-full rounded-lg shadow-2xl border border-zinc-800/80 object-contain mx-auto"
            />
          </div>

          {/* Floating Zoom & Controls Bar */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 p-1.5 rounded-xl bg-zinc-900/95 border border-zinc-800 backdrop-blur-md shadow-xl text-zinc-300">
            <button
              onClick={handleZoomOut}
              className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="size-4" />
            </button>
            <span className="text-xs font-mono font-medium px-2 min-w-[3rem] text-center text-zinc-200 tabular-nums">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="size-4" />
            </button>
            <div className="w-[1px] h-4 bg-zinc-700 mx-1" />
            <button
              onClick={handleResetZoom}
              className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
              title="Reset Zoom"
            >
              <RotateCcw className="size-4" />
            </button>
            <a
              href={map.image}
              target="_blank"
              rel="noopener noreferrer"
              download={`${map.title}-map.webp`}
              className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
              title="Open full resolution in new tab"
            >
              <ExternalLink className="size-4" />
            </a>
          </div>
        </div>

        {/* Footer Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-zinc-800/80 bg-zinc-900/70">
          <div className="text-xs text-zinc-400">
            <span>Verified Master Plan &amp; Sector Blueprint</span>
            <span className="mx-2">·</span>
            <span className="text-zinc-500">Official Authority Scheme</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/${cleanPhone}?text=${encodedMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm whitespace-nowrap"
            >
              <MessageCircle className="size-4" />
              <span>Inquire via WhatsApp</span>
            </a>
            <a
              href={`tel:${cleanPhone}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-black transition-colors shadow-sm whitespace-nowrap"
            >
              <Phone className="size-4" />
              <span>Call Advisor</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapViewerModal
