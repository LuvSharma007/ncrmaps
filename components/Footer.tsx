'use client'

import React from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { Logo } from './Logo'

export const Footer = () => {
  const phoneNumber = '+91 62000-69000'
  const cleanPhone = '916200069000'

  const exploreMaps = [
    { name: 'All Master Maps', href: '/maps' },
    { name: 'Greater Noida Sector Maps', href: '/maps/greater-noida' },
    { name: 'Noida Sector Layouts', href: '/maps/noida' },
    { name: 'Yamuna Expressway (YEIDA)', href: '/maps/yamuna' },
  ]

  const advisoryServices = [
    { name: 'Authority Title Search & Registry', href: '#contact-advisory' },
    { name: 'Sector Plot Demarcation', href: '#contact-advisory' },
    { name: 'Accompanied Site Visits', href: '#contact-advisory' },
    { name: 'Commercial & SCO Advisory', href: '#contact-advisory' },
  ]

  return (
    <footer className="relative w-full bg-zinc-950 text-white pt-16 pb-12 px-6 md:px-12 border-t border-zinc-800/80 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-zinc-800/80">
        
        {/* Col 1: Brand & Cartography Commitment */}
        <div className="space-y-4">
          <Link href="/" aria-label="NCR Maps Home" className="inline-block">
            <Logo size="lg" />
          </Link>
          <p className="text-xs md:text-sm text-zinc-400 leading-relaxed [text-wrap:balance]">
            Authority-sanctioned layout plans, master blueprints, and ground real estate advisory across Noida, Greater Noida, and Yamuna Expressway.
          </p>
          <div className="text-xs text-zinc-500">
            <span>Verified Cartography</span>
            <span className="mx-2">·</span>
            <span>Ground Intelligence</span>
          </div>
        </div>

        {/* Col 2: Sector Maps Index */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider text-amber-400">
            Authority Maps
          </h3>
          <ul className="space-y-2.5 text-xs md:text-sm text-zinc-400">
            {exploreMaps.map((mapItem, index) => (
              <li key={index}>
                <Link
                  href={mapItem.href}
                  className="hover:text-amber-400 transition-colors inline-block"
                >
                  {mapItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Services */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider text-amber-400">
            Property Advisory
          </h3>
          <ul className="space-y-2.5 text-xs md:text-sm text-zinc-400">
            {advisoryServices.map((service, index) => (
              <li key={index}>
                <Link
                  href={service.href}
                  className="hover:text-amber-400 transition-colors inline-block"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact & Office */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider text-amber-400">
            Advisory Desk
          </h3>
          <ul className="space-y-3 text-xs md:text-sm text-zinc-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="size-4 text-amber-400 shrink-0 mt-0.5" />
              <span>204, S L Tower, Alpha-I Commercial Belt, Greater Noida, Uttar Pradesh</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 text-amber-400 shrink-0" />
              <a href={`tel:${cleanPhone}`} className="hover:text-amber-400 transition-colors font-mono">
                {phoneNumber}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 text-amber-400 shrink-0" />
              <a href="mailto:info@cpgroup.in" className="hover:text-amber-400 transition-colors">
                info@cpgroup.in
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <p>&copy; {new Date().getFullYear()} NCR Maps. All authority maps and blueprints indexed for educational and property planning purposes.</p>
        <div className="flex items-center gap-4">
          <span>Noida</span>
          <span>·</span>
          <span>Greater Noida</span>
          <span>·</span>
          <span>YEIDA</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
