'use client'

import React from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { Logo } from './Logo'

export const Footer = () => {
  const phoneNumber = '+91 62000-69000'
  const cleanPhone = '916200069000'

  const usefulLinks = [
    { name: 'Privacy & Policy', href: '/privacy-policy' },
    { name: 'What We Do', href: '/services' },
    { name: 'Our Properties', href: '/projects' },
    { name: 'About Us', href: '/about-us' },
  ]

  const exploreMaps = [
    { name: 'Greater Noida Maps', href: '/maps/greater-noida' },
    { name: 'Noida Maps', href: '/maps/noida' },
    { name: 'Yeida Maps', href: '/maps/yamuna-expressway' },
  ]

  return (
    <footer className="relative w-full bg-black text-white pt-20 pb-8 px-6 md:px-12 border-t border-amber-500/20 font-sans overflow-hidden">
      
      {/* Grid Pattern Background Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.10]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(234, 179, 8, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(234, 179, 8, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-zinc-800/80">
        
        {/* Col 1: Brand & Description */}
        <div className="space-y-6">
          <Link href="/" aria-label="home" className="inline-block">
            <Logo size="lg" />
          </Link>
          <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
            NCRMAPS offers residential plots, independent houses, and commercial properties to help you find the right property for your needs and investment goals.
          </p>
        </div>

        {/* Col 2: Get In Touch */}
        <div className="space-y-6">
          <h3 className="text-base font-bold text-white tracking-wide">
            Get In Touch
          </h3>
          <ul className="space-y-4 text-xs md:text-sm text-zinc-400">
            
            <li className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                <MapPin className="size-4" />
              </div>
              <span>204, S L Tower, Alpha-I Commercial Belt, Greater Noida, Uttar Pradesh</span>
            </li>

            <li className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                <Phone className="size-4" />
              </div>
              <Link href={`tel:${cleanPhone}`} className="hover:text-amber-400 transition-colors">
                Mobile: {phoneNumber}
              </Link>
            </li>

            <li className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                <Mail className="size-4" />
              </div>
              <Link href="mailto:info@cpgroup.in" className="hover:text-amber-400 transition-colors">
                info@cpgroup.in
              </Link>
            </li>

          </ul>
        </div>

        {/* Col 3: Useful Links */}
        <div className="space-y-6">
          <h3 className="text-base font-bold text-white tracking-wide">
            Useful Links
          </h3>
          <ul className="space-y-3 text-xs md:text-sm text-zinc-400">
            {usefulLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:text-amber-400 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Explore Maps */}
        <div className="space-y-6">
          <h3 className="text-base font-bold text-white tracking-wide">
            Explore Maps
          </h3>
          <ul className="space-y-3 text-xs md:text-sm text-zinc-400">
            {exploreMaps.map((mapItem, index) => (
              <li key={index}>
                <Link href={mapItem.href} className="hover:text-amber-400 transition-colors">
                  {mapItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Copyright Bottom Bar */}
      <div className="relative z-10 max-w-7xl mx-auto pt-6 text-center text-xs text-zinc-500">
        <p>Copyright &copy; 2026 NCRMAPS. All rights reserved.</p>
      </div>

    </footer>
  )
}

export default Footer
