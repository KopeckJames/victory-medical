'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/* ─── External destinations (taken from the live victorymed.com header) ─── */
const BOOK_PROVIDER =
  'https://providers.priviahealth.com/search?network_affiliation=Victory+Medical&sort=relevance%2Cnetworks%2Cavailability_density_best'
const BOOK_MAMMOGRAM =
  'https://providers.priviahealth.com/search?provider_name=Screening%20Mammograms%20-%20Victory%20Medical&sort=networks%2Crelevance&tt=4591afd9-8b42-49dd-8b60-d85b63b65a0b&ut=fa48dace-da23-44bf-9a42-6fc5983813fe&timestamp=2023-01-09T16%3A43%3A47.774Z'
const PATIENT_PORTAL = 'https://8042-1.portal.athenahealth.com/'
const SUPPLEMENTS = 'https://www.victoryselect.com/'
const PHONE_HREF = 'tel:+15124623627'
const PHONE_LABEL = '512.462.DOCS (3627)'

/* ─── Header palette (mirrors the legacy header treatment) ─── */
const NAVY = '#232d5e'
const ALERT = '#ec3b62'
const NAV_TEXT = '#6b7c85'
const HIGHLIGHT = '#d98b1f'

const UTILITY_H = 38
const MAIN_H = 88
const MAIN_H_SCROLLED = 64

/* ─── Icons ─── */
const iconProps = { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'currentColor' } as const

const IconSyringe = () => (
  <svg {...iconProps} aria-hidden="true">
    <path d="M20.7 3.3a1 1 0 0 0-1.4 0l-1.1 1.1-1.4-1.4-1.4 1.4 1 1-7.6 7.6-.7 3.2-1.4 1.4 1.4 1.4-2.5 2.5 1.4 1.4 2.5-2.5 1.4 1.4 1.4-1.4 3.2-.7 7.6-7.6 1 1 1.4-1.4-1.4-1.4 1.1-1.1a1 1 0 0 0 0-1.4l-.5-.5Z" />
  </svg>
)
const IconVirus = () => (
  <svg {...iconProps} aria-hidden="true">
    <path d="M11 1h2v2.1a8 8 0 0 1 2.5.7l1.1-1.8 1.7 1-1 1.8a8 8 0 0 1 1.9 1.9l1.8-1 1 1.7-1.8 1.1a8 8 0 0 1 .7 2.5H23v2h-2.1a8 8 0 0 1-.7 2.5l1.8 1.1-1 1.7-1.8-1a8 8 0 0 1-1.9 1.9l1 1.8-1.7 1-1.1-1.8a8 8 0 0 1-2.5.7V23h-2v-2.1a8 8 0 0 1-2.5-.7l-1.1 1.8-1.7-1 1-1.8a8 8 0 0 1-1.9-1.9l-1.8 1-1-1.7 1.8-1.1a8 8 0 0 1-.7-2.5H1v-2h2.1a8 8 0 0 1 .7-2.5L2 6.4l1-1.7 1.8 1a8 8 0 0 1 1.9-1.9l-1-1.8 1.7-1 1.1 1.8a8 8 0 0 1 2.5-.7V1Zm1 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z" />
  </svg>
)
const IconPerson = () => (
  <svg {...iconProps} aria-hidden="true">
    <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5Z" />
  </svg>
)
const IconCalendar = () => (
  <svg {...iconProps} aria-hidden="true">
    <path d="M7 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7Zm12 8v10H5V10h14Z" />
  </svg>
)
const IconCart = () => (
  <svg {...iconProps} aria-hidden="true">
    <path d="M2 3h3l2.6 11.2A2 2 0 0 0 9.5 16h8.4a2 2 0 0 0 1.9-1.4L22 7H6.2L5.6 4.4A2 2 0 0 0 3.7 3H2Zm7 16a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
  </svg>
)
const IconPhone = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7 1h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2Zm0 4v14h10V5H7Zm5 15.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
  </svg>
)
const IconCar = () => (
  <svg {...iconProps} aria-hidden="true">
    <path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H8v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1Zm2.1 0h9.8l-1-3H8.1l-1 3ZM6.5 13a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm11 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
  </svg>
)

/* ─── Utility bar (top row) ─── */
type UtilityItem = {
  label: string
  href: string
  icon: React.ReactNode
  external?: boolean
  variant?: 'alert' | 'plain'
}

const utilityItems: UtilityItem[] = [
  { label: 'COVID Vaccine Info', href: '/covid-vaccine-information', icon: <IconSyringe />, variant: 'alert' },
  { label: 'COVID-19 Info', href: '/covid-19-precautions', icon: <IconVirus />, variant: 'alert' },
  { label: 'Patient Portal', href: PATIENT_PORTAL, icon: <IconPerson />, external: true },
  { label: 'Mammogram Appointments', href: BOOK_MAMMOGRAM, icon: <IconCalendar />, external: true },
  { label: 'Buy Supplements', href: SUPPLEMENTS, icon: <IconCart />, external: true },
]

/* ─── Main nav (bottom row) ─── */
const serviceMegaMenu = {
  col1: {
    heading: 'Clinical Care',
    items: [
      { label: 'Family & Primary Care', href: '/services#primary-care' },
      { label: 'Urgent Care', href: '/services#urgent-care' },
      { label: 'Allergy Services', href: '/services#allergy' },
      { label: 'Medical Weight Loss', href: '/services#weight-loss' },
      { label: 'Hormone Therapy', href: '/services#hormones' },
      { label: 'Physical Medicine', href: '/services#physical-medicine' },
    ],
  },
  col2: {
    heading: 'Specialized',
    items: [
      { label: 'Ketamine Therapy', href: '/services#ketamine' },
      { label: 'Acupuncture', href: '/services#acupuncture' },
      { label: 'Regenerative Medicine', href: '/services#regenerative-medicine' },
      { label: 'Pharmacy', href: '/services#pharmacy' },
      { label: 'MDVIP Concierge', href: '/mdvip' },
      { label: 'Peptide Therapy', href: '/peptides' },
    ],
  },
}

type NavLink = {
  label: string
  href: string
  dropdown?: { label: string; href: string; external?: boolean }[]
  megaMenu?: boolean
  highlight?: boolean
  exact?: boolean
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/', exact: true },
  {
    label: 'Services',
    href: '/services',
    dropdown: [...serviceMegaMenu.col1.items, ...serviceMegaMenu.col2.items],
    megaMenu: true,
  },
  {
    label: 'MedSpa',
    href: '/medspa',
    dropdown: [
      { label: 'Injectables', href: '/medspa#injectables' },
      { label: 'Face Treatments', href: '/medspa#face' },
      { label: 'Body Treatments', href: '/medspa#body' },
      { label: 'IV Therapies', href: '/medspa#iv-therapy' },
      { label: 'Before & Afters', href: '/medspa#gallery' },
    ],
  },
  {
    label: 'Patient Resources',
    href: '/insurance',
    dropdown: [
      { label: 'Insurance & Coverage', href: '/insurance' },
      { label: 'Book an Appointment', href: BOOK_PROVIDER, external: true },
      { label: 'Patient Portal', href: PATIENT_PORTAL, external: true },
      { label: 'Patient Reviews', href: '/reviews' },
      { label: 'Health Blog', href: '/blog' },
    ],
  },
  {
    label: 'Contact Us',
    href: '/contact',
    dropdown: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'All Locations', href: '/locations' },
      { label: 'Austin — Victory Drive', href: '/locations/austin' },
      { label: 'Westlake Hills', href: '/locations/westlake-hills' },
      { label: 'MedSpa — Ben White', href: '/locations/ben-white' },
    ],
  },
  { label: 'Podcasts', href: '/blog' },
  { label: 'Meet Our Team', href: '/about', highlight: true },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [headerH, setHeaderH] = useState(UTILITY_H + MAIN_H)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const utilityRef = useRef<HTMLDivElement>(null)
  const mainRowRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  const isActive = (link: NavLink) =>
    link.exact ? pathname === link.href : pathname === link.href || pathname.startsWith(link.href + '/')

  // Track real header height so the mobile overlay always sits flush beneath it
  useEffect(() => {
    if (!headerRef.current) return
    const el = headerRef.current
    const ro = new ResizeObserver(() => setHeaderH(el.getBoundingClientRect().height))
    ro.observe(el)
    setHeaderH(el.getBoundingClientRect().height)
    return () => ro.disconnect()
  }, [])

  // Scroll: collapse the utility bar and compress the main row
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -20',
        onEnter: () => {
          gsap.to(utilityRef.current, { height: 0, opacity: 0, duration: 0.35, ease: 'power3.out' })
          gsap.to(mainRowRef.current, { height: MAIN_H_SCROLLED, duration: 0.4, ease: 'power3.out' })
          gsap.to(logoRef.current, { scale: 0.85, duration: 0.4, ease: 'power3.out' })
        },
        onLeaveBack: () => {
          gsap.to(utilityRef.current, { height: UTILITY_H, opacity: 1, duration: 0.35, ease: 'power3.out' })
          gsap.to(mainRowRef.current, { height: MAIN_H, duration: 0.4, ease: 'power3.out' })
          gsap.to(logoRef.current, { scale: 1, duration: 0.4, ease: 'power3.out' })
        },
      })
    })
    return () => ctx.revert()
  }, [])

  // Dropdown item stagger
  useEffect(() => {
    if (activeDropdown) {
      const items = document.querySelectorAll('.dropdown-item')
      gsap.fromTo(items, { opacity: 0, x: -8 }, { opacity: 1, x: 0, stagger: 0.04, duration: 0.25, ease: 'power2.out' })
    }
  }, [activeDropdown])

  // Mobile menu animation
  useEffect(() => {
    if (!mobileMenuRef.current) return
    if (mobileOpen) {
      gsap.fromTo(mobileMenuRef.current, { y: '-100%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.4, ease: 'power3.out' })
    } else {
      gsap.to(mobileMenuRef.current, { y: '-100%', opacity: 0, duration: 0.3, ease: 'power3.in' })
    }
  }, [mobileOpen])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const [prevPathname, setPrevPathname] = useState(pathname)
  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    setMobileOpen(false)
    setActiveDropdown(null)
    setMobileExpanded(null)
  }

  const utilityLink = (item: UtilityItem) => {
    const alert = item.variant === 'alert'
    const style: React.CSSProperties = {
      display: 'inline-flex', alignItems: 'center', gap: '7px',
      fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em',
      textTransform: 'uppercase', textDecoration: 'none',
      whiteSpace: 'nowrap', transition: 'all 0.25s ease',
      color: '#ffffff',
      ...(alert
        ? { backgroundColor: ALERT, padding: '7px 13px', borderRadius: '4px' }
        : { padding: '7px 4px' }),
    }
    const onEnter = (e: React.MouseEvent<HTMLElement>) => {
      const el = e.currentTarget as HTMLElement
      if (alert) el.style.backgroundColor = '#d32d52'
      else el.style.color = 'var(--accent-light)'
    }
    const onLeave = (e: React.MouseEvent<HTMLElement>) => {
      const el = e.currentTarget as HTMLElement
      if (alert) el.style.backgroundColor = ALERT
      else el.style.color = '#ffffff'
    }
    const content = (<>{item.icon}{item.label}</>)

    return item.external ? (
      <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
        style={style} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        {content}
      </a>
    ) : (
      <Link key={item.label} href={item.href} style={style} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        {content}
      </Link>
    )
  }

  const dropdownPanel: React.CSSProperties = {
    backgroundColor: '#ffffff',
    border: '1px solid var(--border-soft)',
    borderTop: '3px solid var(--accent)',
    borderRadius: '0 0 8px 8px',
    boxShadow: '0 24px 48px rgba(22,61,82,0.14)',
  }

  const dropdownItemStyle: React.CSSProperties = {
    display: 'flex', alignItems: 'center', gap: '8px',
    padding: '10px 20px', fontSize: '0.8rem',
    color: 'var(--text-secondary)', textDecoration: 'none',
    transition: 'all 0.2s ease', letterSpacing: '0.03em',
  }

  return (
    <>
      <header
        ref={headerRef}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          backgroundColor: '#ffffff',
          boxShadow: '0 1px 0 var(--border-soft)',
        }}
      >
        {/* ─── Utility bar ─── */}
        <div
          ref={utilityRef}
          style={{
            height: `${UTILITY_H}px`, backgroundColor: NAVY,
            overflow: 'hidden', willChange: 'height',
          }}
        >
          <div
            className="container utility-bar-inner"
            style={{
              height: `${UTILITY_H}px`, display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', gap: '20px',
            }}
          >
            <div className="utility-bar-links" style={{ alignItems: 'center', gap: '18px' }}>
              {utilityItems.map(utilityLink)}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginLeft: 'auto' }}>
              <a
                href={PHONE_HREF}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  color: '#ffffff', textDecoration: 'none',
                  fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.02em',
                  whiteSpace: 'nowrap', transition: 'color 0.25s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--accent-light)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#ffffff' }}
              >
                <IconPhone />
                {PHONE_LABEL}
              </a>

              <Link
                href="/locations"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  backgroundColor: 'var(--accent)', color: '#ffffff',
                  padding: '7px 14px', borderRadius: '4px',
                  fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em',
                  textTransform: 'uppercase', textDecoration: 'none',
                  whiteSpace: 'nowrap', transition: 'background-color 0.25s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--brand)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--accent)' }}
              >
                <IconCar />
                Directions
              </Link>
            </div>
          </div>
        </div>

        {/* ─── Main bar ─── */}
        <div
          ref={mainRowRef}
          style={{
            height: `${MAIN_H}px`, display: 'flex', alignItems: 'center',
            backgroundColor: '#ffffff', willChange: 'height',
          }}
        >
          <div className="container" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            width: '100%', gap: '24px',
          }}>
            {/* Logo — full lockup including the Privia Medical Group line */}
            <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }} aria-label="Victory Medical — home">
              <div ref={logoRef} style={{ display: 'flex', alignItems: 'center', willChange: 'transform', transformOrigin: 'left center' }}>
                <Image
                  src="/Victory-Medical-in-Austin.png"
                  alt="Victory Medical — Privia Medical Group"
                  width={750}
                  height={288}
                  priority
                  style={{ width: '182px', height: 'auto', objectFit: 'contain' }}
                />
              </div>
            </Link>

            {/* Desktop nav */}
            <nav
              className="nav-desktop"
              style={{ alignItems: 'center', justifyContent: 'center', gap: '18px', flex: 1 }}
              aria-label="Main"
            >
              {navLinks.map((link) => {
                const active = isActive(link)
                const baseColor = link.highlight ? HIGHLIGHT : active ? 'var(--accent)' : NAV_TEXT
                return (
                  <div
                    key={link.label}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      style={{
                        fontSize: '0.72rem', letterSpacing: '0.05em',
                        textTransform: 'uppercase', fontWeight: 600,
                        color: baseColor, textDecoration: 'none',
                        transition: 'color 0.25s ease',
                        display: 'flex', alignItems: 'center', gap: '5px',
                        whiteSpace: 'nowrap',
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)' }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = baseColor }}
                    >
                      {link.label}
                      {link.dropdown && (
                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{
                          transform: activeDropdown === link.label ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease',
                        }}>
                          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      )}
                    </Link>

                    {link.dropdown && !link.megaMenu && (
                      <div style={{
                        ...dropdownPanel,
                        position: 'absolute', top: 'calc(100% + 18px)', left: '50%',
                        minWidth: '230px', padding: '8px 0',
                        opacity: activeDropdown === link.label ? 1 : 0,
                        visibility: activeDropdown === link.label ? 'visible' : 'hidden',
                        transform: `translateX(-50%) translateY(${activeDropdown === link.label ? '0' : '10px'})`,
                        transition: 'opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease',
                      }}>
                        {link.dropdown.map((item) => {
                          const props = {
                            className: 'dropdown-item',
                            style: dropdownItemStyle,
                            onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
                              const el = e.currentTarget as HTMLElement
                              el.style.color = 'var(--accent)'
                              el.style.backgroundColor = 'rgba(34,184,209,0.08)'
                            },
                            onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
                              const el = e.currentTarget as HTMLElement
                              el.style.color = 'var(--text-secondary)'
                              el.style.backgroundColor = 'transparent'
                            },
                          }
                          const dot = <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--accent)', flexShrink: 0 }} />
                          return item.external ? (
                            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" {...props}>
                              {dot}{item.label}
                            </a>
                          ) : (
                            <Link key={item.label} href={item.href} {...props}>
                              {dot}{item.label}
                            </Link>
                          )
                        })}
                      </div>
                    )}

                    {link.megaMenu && (
                      <div style={{
                        ...dropdownPanel,
                        position: 'absolute', top: 'calc(100% + 18px)', left: '50%',
                        minWidth: '520px',
                        transform: `translateX(-50%) translateY(${activeDropdown === link.label ? '0' : '10px'})`,
                        opacity: activeDropdown === link.label ? 1 : 0,
                        visibility: activeDropdown === link.label ? 'visible' : 'hidden',
                        transition: 'opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease',
                      }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '16px 0 0' }}>
                          {[serviceMegaMenu.col1, serviceMegaMenu.col2].map((col, i) => (
                            <div key={col.heading} style={{
                              padding: i === 0 ? '0 8px 0 16px' : '0 16px 0 8px',
                              borderLeft: i === 1 ? '1px solid var(--border-soft)' : undefined,
                            }}>
                              <div style={{
                                fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                                color: 'var(--brand)', fontWeight: 700, padding: '0 12px 8px',
                              }}>
                                {col.heading}
                              </div>
                              {col.items.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  className="dropdown-item"
                                  style={{ ...dropdownItemStyle, padding: '9px 12px' }}
                                  onMouseEnter={(e) => {
                                    const el = e.currentTarget
                                    el.style.color = 'var(--accent)'
                                    el.style.backgroundColor = 'rgba(34,184,209,0.08)'
                                  }}
                                  onMouseLeave={(e) => {
                                    const el = e.currentTarget
                                    el.style.color = 'var(--text-secondary)'
                                    el.style.backgroundColor = 'transparent'
                                  }}
                                >
                                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--accent)', flexShrink: 0 }} />
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                        <div style={{
                          borderTop: '1px solid var(--border-soft)', padding: '12px 20px', marginTop: '8px',
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        }}>
                          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.03em' }}>
                            Complete care under one roof · 3 Austin-area locations
                          </span>
                          <Link href="/services" style={{
                            fontSize: '0.72rem', color: 'var(--accent)', textDecoration: 'none',
                            fontWeight: 700, letterSpacing: '0.05em', whiteSpace: 'nowrap',
                          }}>
                            View All Services →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </nav>

            {/* Stacked booking CTAs */}
            <div className="nav-cta-stack" style={{ flexDirection: 'column', gap: '8px', flexShrink: 0 }}>
              {[
                { label: 'Book With a Provider', href: BOOK_PROVIDER },
                { label: 'Book a Mammogram', href: BOOK_MAMMOGRAM },
              ].map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    minWidth: '200px', padding: '11px 18px',
                    backgroundColor: 'var(--accent)', color: '#ffffff',
                    borderRadius: '4px', textDecoration: 'none',
                    fontSize: '0.72rem', fontWeight: 700,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    whiteSpace: 'nowrap', transition: 'background-color 0.25s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--brand)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--accent)' }}
                >
                  {cta.label}
                </a>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="nav-hamburger"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '8px', flexDirection: 'column', gap: '5px',
              }}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {[0, 1, 2].map((i) => (
                <span key={i} style={{
                  display: 'block', width: '24px', height: '2px',
                  backgroundColor: 'var(--brand-darker)', transition: 'all 0.4s ease',
                  transform: mobileOpen
                    ? i === 0 ? 'rotate(45deg) translateY(7px)'
                      : i === 2 ? 'rotate(-45deg) translateY(-7px)' : 'scaleX(0)'
                    : 'none',
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile menu ─── */}
      <div
        ref={mobileMenuRef}
        style={{
          position: 'fixed', top: `${headerH}px`, left: 0, right: 0, bottom: 0,
          backgroundColor: '#ffffff',
          zIndex: 999, overflowY: 'auto', padding: '8px 24px 48px',
          transform: 'translateY(-100%)', opacity: 0,
        }}
        className="mobile-menu-overlay"
      >
        <nav aria-label="Mobile">
          {navLinks.map((link) => (
            <div key={link.label} style={{ borderBottom: '1px solid var(--border-soft)' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link
                  href={link.href}
                  style={{
                    flex: 1, display: 'block', fontSize: '1.05rem',
                    fontFamily: 'var(--font-playfair)',
                    color: link.highlight ? HIGHLIGHT : isActive(link) ? 'var(--accent)' : 'var(--brand-darker)',
                    textDecoration: 'none', padding: '16px 0', lineHeight: 1.3,
                  }}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <button
                    onClick={() => setMobileExpanded((prev) => (prev === link.label ? null : link.label))}
                    style={{
                      background: 'none', border: 'none',
                      color: mobileExpanded === link.label ? 'var(--accent)' : 'var(--text-muted)',
                      cursor: 'pointer', padding: '16px 6px',
                      display: 'flex', alignItems: 'center', transition: 'color 0.2s',
                    }}
                    aria-label={`${mobileExpanded === link.label ? 'Collapse' : 'Expand'} ${link.label}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{
                      transform: mobileExpanded === link.label ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.3s ease',
                    }}>
                      <path d="M4 7L9 12L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                )}
              </div>

              {link.dropdown && (
                <div style={{
                  maxHeight: mobileExpanded === link.label ? '600px' : '0',
                  overflow: 'hidden', transition: 'max-height 0.4s ease',
                }}>
                  <div style={{ paddingBottom: '12px' }}>
                    {link.dropdown.map((item) => {
                      const style: React.CSSProperties = {
                        display: 'flex', alignItems: 'center', gap: '10px',
                        fontSize: '0.9rem', color: 'var(--text-secondary)',
                        textDecoration: 'none', padding: '10px 8px',
                        borderBottom: '1px solid var(--border-soft)', letterSpacing: '0.02em',
                      }
                      const dot = <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--accent)', flexShrink: 0 }} />
                      return item.external ? (
                        <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" style={style}>{dot}{item.label}</a>
                      ) : (
                        <Link key={item.label} href={item.href} style={style}>{dot}{item.label}</Link>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Utility items live here on mobile */}
          <div style={{ paddingTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {utilityItems.map((item) => {
              const style: React.CSSProperties = {
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                padding: '9px 14px', borderRadius: '4px',
                fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em',
                textTransform: 'uppercase', textDecoration: 'none',
                color: item.variant === 'alert' ? '#ffffff' : 'var(--brand-darker)',
                backgroundColor: item.variant === 'alert' ? ALERT : 'var(--bg-soft)',
                border: item.variant === 'alert' ? 'none' : '1px solid var(--border-soft)',
              }
              return item.external ? (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" style={style}>{item.icon}{item.label}</a>
              ) : (
                <Link key={item.label} href={item.href} style={style}>{item.icon}{item.label}</Link>
              )
            })}
          </div>

          {/* Mobile CTAs */}
          <div style={{ paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { label: 'Book With a Provider', href: BOOK_PROVIDER },
              { label: 'Book a Mammogram', href: BOOK_MAMMOGRAM },
            ].map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '14px', backgroundColor: 'var(--accent)', color: '#ffffff',
                  borderRadius: '4px', textDecoration: 'none',
                  fontSize: '0.75rem', fontWeight: 700,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                }}
              >
                {cta.label}
              </a>
            ))}
            <a
              href={PHONE_HREF}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                padding: '14px', fontSize: '0.95rem', color: 'var(--brand)',
                textDecoration: 'none', fontWeight: 600,
                border: '1px solid var(--border-medium)', borderRadius: '4px',
              }}
            >
              <IconPhone />
              {PHONE_LABEL}
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
