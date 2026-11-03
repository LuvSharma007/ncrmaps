'use client'

import React, { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from './Logo'

const Navbar = () => {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const phoneNumber = '+91 62000-69000'
  const cleanPhone = '916200069000'

  const navLinks = [
    { name: 'All Maps', href: '/maps' },
    { name: 'Noida Sectors', href: '/maps/noida' },
    { name: 'Greater Noida', href: '/maps/greater-noida' },
    { name: 'Yamuna Expressway', href: '/maps/yamuna' },
  ]

  return (
    <header className="sticky top-0 z-40 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16 lg:h-20">
          
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center shrink-0">
            <Link href="/" aria-label="NCR Maps Home" className="flex items-center">
              <Logo size="md" />
            </Link>
          </div>

          {/* Zone 2: Navigation Links (Clean single-line prose) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                    isActive
                      ? 'text-amber-400 font-semibold border-b-2 border-amber-400'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Zone 3: Single Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${cleanPhone}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-black transition-all shadow-md hover:shadow-amber-500/20 whitespace-nowrap shrink-0"
            >
              <Phone className="size-3.5" />
              <span>Call Advisor</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950 px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-amber-500/10 text-amber-400 font-semibold'
                      : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>
          <div className="pt-2 border-t border-zinc-800">
            <a
              href={`tel:${cleanPhone}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-amber-500 text-black hover:bg-amber-400 transition-colors"
            >
              <Phone className="size-4" />
              <span>Call {phoneNumber}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar