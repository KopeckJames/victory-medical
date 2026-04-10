'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'

const navLinks = [
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      { label: 'Family & Primary Care', href: '/services#primary-care' },
      { label: 'Urgent Care', href: '/services#urgent-care' },
      { label: 'Allergy Services', href: '/services#allergy' },
      { label: 'Weight Loss', href: '/services#weight-loss' },
      { label: 'Hormone Therapy', href: '/services#hormones' },
      { label: 'Ketamine Therapy', href: '/services#ketamine' },
      { label: 'Physical Medicine', href: '/services#physical-medicine' },
      { label: 'Pharmacy', href: '/services#pharmacy' },
    ],
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
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!mobileMenuRef.current) return
    if (mobileOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: '-100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.4, ease: 'power3.out' }
      )
    } else {
      gsap.to(mobileMenuRef.current, {
        y: '-100%',
        opacity: 0,
        duration: 0.3,
        ease: 'power3.in',
      })
    }
  }, [mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: '80px',
          backgroundColor: 'var(--teal)',
          borderBottom: scrolled ? '1px solid rgba(201,122,60,0.2)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 30px rgba(5,15,21,0.6)' : 'none',
          transition: 'all 0.4s ease',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  background: 'linear-gradient(135deg, var(--copper) 0%, var(--copper-light, #e09a5c) 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'white',
                  fontFamily: 'var(--font-playfair)',
                }}
              >
                V
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--white)',
                    lineHeight: 1.1,
                  }}
                >
                  Victory Medical
                </div>
                <div
                  style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    lineHeight: 1,
                  }}
                >
                  Austin, TX • Since 1996
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '36px',
            }}
            className="hidden lg:flex"
          >
            {navLinks.map((link) => (
              <div
                key={link.label}
                style={{ position: 'relative' }}
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    color:
                      pathname === link.href || pathname.startsWith(link.href + '/')
                        ? 'var(--copper)'
                        : 'var(--white)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                  onMouseEnter={(e) => {
                    if (pathname !== link.href) {
                      ;(e.target as HTMLElement).style.color = 'var(--copper)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (pathname !== link.href) {
                      ;(e.target as HTMLElement).style.color = 'var(--white)'
                    }
                  }}
                >
                  {link.label}
                  {link.dropdown && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      style={{
                        transform:
                          activeDropdown === link.label ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      <path
                        d="M2 4L6 8L10 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {link.dropdown && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 16px)',
                      left: '50%',
                      backgroundColor: 'var(--light-teal)',
                      border: '1px solid var(--glass-border)',
                      borderTop: '3px solid var(--copper)',
                      borderRadius: '0 0 8px 8px',
                      minWidth: '220px',
                      padding: '8px 0',
                      opacity: activeDropdown === link.label ? 1 : 0,
                      visibility: activeDropdown === link.label ? 'visible' : 'hidden',
                      transform: `translateX(-50%) translateY(${activeDropdown === link.label ? '0' : '10px'})`,
                      transition: 'opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease',
                      boxShadow: '0 20px 40px rgba(5,15,21,0.6)',
                    }}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        style={{
                          display: 'block',
                          padding: '10px 20px',
                          fontSize: '0.8rem',
                          color: 'rgba(255,255,255,0.8)',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease',
                          letterSpacing: '0.03em',
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget
                          el.style.color = 'var(--copper)'
                          el.style.paddingLeft = '28px'
                          el.style.backgroundColor = 'rgba(201,122,60,0.08)'
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget
                          el.style.color = 'rgba(255,255,255,0.8)'
                          el.style.paddingLeft = '20px'
                          el.style.backgroundColor = 'transparent'
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a
              href="tel:5124623627"
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.05em',
                color: 'var(--gold)',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              (512) 462-3627
            </a>

            <Link
              href="https://www.priviahealth.com/practice/victory-medical/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '0.7rem' }}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
            aria-label="Toggle menu"
          >
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                backgroundColor: 'var(--white)',
                transition: 'all 0.4s ease',
                transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                backgroundColor: 'var(--white)',
                transition: 'all 0.4s ease',
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                backgroundColor: 'var(--white)',
                transition: 'all 0.4s ease',
                transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'var(--dark-teal)',
          zIndex: 999,
          overflowY: 'auto',
          padding: '40px 24px',
          transform: 'translateY(-100%)',
          opacity: 0,
        }}
        className="lg:hidden"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                style={{
                  display: 'block',
                  fontSize: '1.5rem',
                  fontFamily: 'var(--font-playfair)',
                  color: 'var(--white)',
                  textDecoration: 'none',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {link.label}
              </Link>
              {link.dropdown && (
                <div style={{ paddingLeft: '16px', marginTop: '4px' }}>
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        color: 'rgba(255,255,255,0.6)',
                        textDecoration: 'none',
                        padding: '8px 0',
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div style={{ marginTop: '24px' }}>
            <a
              href="tel:5124623627"
              style={{
                display: 'block',
                fontSize: '1.2rem',
                color: 'var(--copper)',
                textDecoration: 'none',
                marginBottom: '16px',
              }}
            >
              (512) 462-3627
            </a>
            <Link
              href="https://www.priviahealth.com/practice/victory-medical/"
              target="_blank"
              className="btn-primary"
              style={{ display: 'inline-flex' }}
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
