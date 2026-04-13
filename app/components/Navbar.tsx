'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
  { href: '#experiencias', label: 'Experiencias' },
  { href: '#habitaciones', label: 'Suites' },
  { href: '/mazatlan', label: 'Mazatlán' },  
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const resolveHref = (href: string) => {
    if (!href.startsWith('#')) return href
    return pathname === '/' ? href : `/${href}`
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between border-b border-[rgba(201,149,74,0.15)] px-6 md:px-[60px]"
      style={{
        backdropFilter: 'blur(20px) saturate(1.2)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.2)',
      }}
      animate={{
        paddingTop: scrolled ? '18px' : '28px',
        paddingBottom: scrolled ? '18px' : '28px',
        backgroundColor: scrolled ? 'rgba(28,43,58,0.85)' : 'rgba(28,43,58,0.45)',
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {/* Logo */}
      <Link
        href="/"
      >
        <Image
          src="/costa-logo.webp"
          alt="Costa de Oro Logo"
          width={220}
          height={64}
          sizes="(max-width: 768px) 150px, 220px"
          className="h-9 w-auto object-contain md:h-10"
          priority
        />
      </Link>

      {/* Links */}
      <ul className="hidden md:flex gap-12 list-none">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={resolveHref(href)}
              className="nav-link-underline text-[11px] font-light tracking-[0.2em] uppercase text-[rgba(245,242,237,0.75)] no-underline transition-colors duration-300 hover:text-[var(--arena)]"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-label={mobileOpen ? 'Cerrar menu' : 'Abrir menu'}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((prev) => !prev)}
        className="md:hidden text-[var(--arena)] uppercase tracking-[0.2em] text-[11px] border border-[rgba(201,149,74,0.5)] px-4 py-2"
      >
        {mobileOpen ? 'Cerrar' : 'Menu'}
      </button>

      {/* CTA */}
      <Link
        href={resolveHref('#reservar')}
        className="hidden md:inline-flex text-[11px] font-normal tracking-[0.2em] uppercase px-7 py-3 bg-transparent border border-[rgba(201,149,74,0.7)] text-[var(--ocre)] no-underline transition-all duration-300 hover:bg-[var(--ocre)] hover:text-white"
      >
        Ver disponibilidad
      </Link>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute top-full left-0 right-0 md:hidden border-b border-[rgba(201,149,74,0.2)] bg-[rgba(28,43,58,0.95)]"
          >
            <ul className="list-none flex flex-col gap-5 px-6 py-6 m-0">
              {links.map(({ href, label }) => (
                <li key={`mobile-${href}`}>
                  <Link
                    href={resolveHref(href)}
                    onClick={() => setMobileOpen(false)}
                    className="text-[12px] font-light tracking-[0.2em] uppercase text-[rgba(245,242,237,0.85)] no-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href={resolveHref('#reservar')}
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex w-full justify-center text-[11px] font-normal tracking-[0.2em] uppercase px-5 py-3 bg-transparent border border-[rgba(201,149,74,0.7)] text-[var(--ocre)] no-underline transition-all duration-300 hover:bg-[var(--ocre)] hover:text-white"
                >
                  Ver disponibilidad
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
