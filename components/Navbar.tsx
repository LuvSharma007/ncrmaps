'use client'
import React, { useState, useEffect } from 'react'
import { Menu, Search, ChevronDown, Mic, LocateFixed } from 'lucide-react'
import Link from 'next/link'
import { Logo } from './Logo'
import { Button } from './ui/button'
import { useRouter, usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  const allowedSearchRoutes = ['/', '/dashboard']
  const showSearchBar = allowedSearchRoutes.includes(pathname)

  const menuItems = [
    { name: 'Maps', href: '/maps' },
    // { name: 'Projects', href: "/projects" },
    // { name: 'About Us', href: '/about-us' },
    // { name: 'Services', href: '/services' },
    // { name: 'Contact Us', href: '/contact-us' },
  ]

  return (
    <header className="w-full">
      <nav
        className={`w-full bg-background border-b border-border text-foreground shadow-sm transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between gap-4 h-16 lg:h-20">

            {/* Left: Logo */}
            <div className="flex items-center gap-4 shrink-0">
              <Link href="/" aria-label="home" className="flex items-center space-x-2">
                <Logo size='lg' />
              </Link>
            </div>

            {/* Right Side Links */}
            <div className="flex items-center gap-10 shrink-0">
              <div className="hidden lg:flex items-center gap-6">
                <ul className="flex items-center gap-6 text-lg font-medium">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link 
                        href={item.href} 
                        className="text-zinc-800 hover:text-[#EAB308] dark:hover:text-[#EAB308] transition-colors"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar