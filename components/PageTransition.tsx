'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const overlayRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)

  // Animate in on mount
  useEffect(() => {
    const overlay = overlayRef.current
    const line = lineRef.current
    const logo = logoRef.current
    if (!overlay || !line || !logo) return

    if (isFirstRender.current) {
      // On first load: just reveal the page (overlay exits)
      isFirstRender.current = false
      gsap.set(overlay, { yPercent: 0 })
      gsap.set(line, { scaleX: 0 })
      gsap.set(logo, { opacity: 0, scale: 0.8 })

      const tl = gsap.timeline()
      tl.to(logo, { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.5)' })
        .to(line, { scaleX: 1, duration: 0.5, ease: 'power3.out', transformOrigin: 'left center' }, '-=0.1')
        .to(logo, { opacity: 0, duration: 0.25, ease: 'power2.in' }, '+=0.15')
        .to(line, { scaleX: 0, duration: 0.35, ease: 'power3.in', transformOrigin: 'right center' }, '-=0.1')
        .to(overlay, { yPercent: -100, duration: 0.7, ease: 'power4.inOut' }, '-=0.1')
    }
  }, [])

  // Animate on route change
  useEffect(() => {
    if (isFirstRender.current) return

    const overlay = overlayRef.current
    const line = lineRef.current
    const logo = logoRef.current
    if (!overlay || !line || !logo) return

    // Enter: slide overlay down from top
    gsap.set(overlay, { yPercent: 100 })
    gsap.set(line, { scaleX: 0 })
    gsap.set(logo, { opacity: 0, scale: 0.8 })

    const tl = gsap.timeline()
    tl.to(overlay, { yPercent: 0, duration: 0.5, ease: 'power4.inOut' })
      .to(logo, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(1.5)' }, '-=0.1')
      .to(line, { scaleX: 1, duration: 0.4, ease: 'power3.out', transformOrigin: 'left center' }, '-=0.15')
      .to(logo, { opacity: 0, duration: 0.2, ease: 'power2.in' }, '+=0.2')
      .to(line, { scaleX: 0, duration: 0.3, ease: 'power3.in', transformOrigin: 'right center' }, '-=0.1')
      .to(overlay, { yPercent: -100, duration: 0.6, ease: 'power4.inOut' }, '+=0.05')
  }, [pathname])

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'var(--dark-teal)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        {/* V Logo flash */}
        <div
          ref={logoRef}
          style={{
            width: '56px',
            height: '56px',
            background: 'linear-gradient(135deg, var(--copper) 0%, #e09a5c 100%)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            fontWeight: 700,
            color: 'white',
            fontFamily: 'var(--font-playfair)',
            marginBottom: '24px',
            opacity: 0,
          }}
        >
          V
        </div>

        {/* Copper line sweep */}
        <div
          ref={lineRef}
          style={{
            width: '120px',
            height: '2px',
            backgroundColor: 'var(--copper)',
            transformOrigin: 'left center',
            transform: 'scaleX(0)',
          }}
        />
      </div>

      {children}
    </>
  )
}
