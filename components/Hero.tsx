'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

function splitChars(text: string) {
  return text.split('').map((char, i) => (
    <span
      key={i}
      className="hero-char"
      style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))
}

const stats = [
  { end: 1996, start: 1960, label: 'Founded', suffix: '', decimals: 0 },
  { end: 3, start: 0, label: 'Locations', suffix: '', decimals: 0 },
  { end: 25, start: 0, label: 'Services', suffix: '+', decimals: 0 },
  { end: 4.1, start: 0, label: '341 Reviews', suffix: '★', decimals: 1 },
]

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const blobRef = useRef<HTMLDivElement>(null)
  const photoPanelRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLSpanElement>(null)
  const line2Ref = useRef<HTMLSpanElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollLineRef = useRef<HTMLDivElement>(null)
  const statRefs = useRef<(HTMLDivElement | null)[]>([])
  const statValueRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Copper blob entrance
      gsap.fromTo(blobRef.current,
        { opacity: 0, scale: 0.6 },
        { opacity: 1, scale: 1, duration: 2, ease: 'slow(0.3,0.7,false)' }
      )

      // 2. Blob parallax on scroll
      gsap.to(blobRef.current, {
        y: -120,
        x: 60,
        scale: 1.3,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      })

      // 3. Photo panel parallax
      gsap.to(photoPanelRef.current, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // 4. Entrance timeline
      const tl = gsap.timeline({ delay: 0.2 })

      tl.fromTo(labelRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      )

      // Line 1 chars - rise with clockwise tilt
      const line1Chars = line1Ref.current?.querySelectorAll('.hero-char')
      if (line1Chars?.length) {
        tl.fromTo(line1Chars,
          { y: 60, rotation: 8, opacity: 0 },
          { y: 0, rotation: 0, opacity: 1, duration: 0.7, stagger: 0.025, ease: 'power4.out' },
          '-=0.2'
        )
      }

      // Line 2 chars - fall from above with counter-tilt
      const line2Chars = line2Ref.current?.querySelectorAll('.hero-char')
      if (line2Chars?.length) {
        tl.fromTo(line2Chars,
          { y: -30, rotation: -5, opacity: 0 },
          { y: 0, rotation: 0, opacity: 1, duration: 0.6, stagger: 0.02, ease: 'power3.out' },
          '-=0.5'
        )
      }

      // Copper glow pulse after chars land
      if (line1Ref.current) {
        tl.to(line1Ref.current, {
          textShadow: '0 0 40px rgba(34,184,209,0.7), 0 0 80px rgba(34,184,209,0.4)',
          duration: 1,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: 1,
        }, '-=0.1')
      }

      tl.fromTo(subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.8'
      )

      if (ctaRef.current?.children) {
        tl.fromTo(Array.from(ctaRef.current.children),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
          '-=0.3'
        )
      }

      tl.fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        '-=0.2'
      )

      // 5. Scroll indicator - liquid drop falling
      if (scrollLineRef.current) {
        const dropTl = gsap.timeline({ repeat: -1, delay: 1.5 })
        dropTl
          .set(scrollLineRef.current, { scaleY: 0, transformOrigin: 'top center' })
          .to(scrollLineRef.current, { scaleY: 1, duration: 0.5, ease: 'power2.out' })
          .to(scrollLineRef.current, {
            scaleY: 0,
            transformOrigin: 'top center',
            duration: 0.4,
            ease: 'power2.in',
          })
          .to({}, { duration: 0.4 }) // pause between drops
      }

      // 6. Stat counters on scroll
      stats.forEach((stat, i) => {
        const el = statValueRefs.current[i]
        if (!el) return
        const obj = { val: stat.start }
        gsap.to(obj, {
          val: stat.end,
          duration: stat.end === 1996 ? 2.5 : stat.decimals > 0 ? 1.5 : 1,
          ease: stat.end === 1996 ? 'power4.out' : 'power2.out',
          scrollTrigger: {
            trigger: statRefs.current[i],
            start: 'top 90%',
            once: true,
          },
          onUpdate: () => {
            el.textContent = stat.decimals > 0
              ? obj.val.toFixed(stat.decimals)
              : Math.round(obj.val).toString()
          },
        })
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: 'var(--dark-teal)',
      }}
    >
      {/* Copper blob - animated separately */}
      <div
        ref={blobRef}
        style={{
          position: 'absolute',
          top: '10%',
          left: '-10%',
          width: '70%',
          height: '80%',
          background: 'radial-gradient(ellipse 80% 60% at 30% 50%, rgba(34,184,209,0.14) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex: 0,
          willChange: 'transform',
        }}
      />

      {/* Static dark gradient base */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #f5fbfc 0%, #ffffff 50%, #f5fbfc 100%)',
          zIndex: 0,
        }}
      />

      {/* Grid pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(34,184,209,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,184,209,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Right side photo panel — set VIDEO_SRC to a .mp4 URL to activate video hero */}
      <div
        ref={photoPanelRef}
        className="hero-photo-panel"
        style={{
          position: 'absolute',
          right: 0,
          top: '-10%',
          bottom: '-10%',
          width: '50%',
          zIndex: 1,
          willChange: 'transform',
          overflow: 'hidden',
        }}
      >
        {/* Gradient overlay — always rendered on top of whatever is behind it */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 55%, rgba(255,255,255,1) 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />
        {/* Hero photo */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('/hero/medical-team.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          zIndex: 1,
        }} />
        {/* Video hero — replace VIDEO_SRC with actual mp4 URL to enable */}
        {(false as boolean) && (
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              zIndex: 1,
            }}
          >
            {/* <source src="/hero.mp4" type="video/mp4" /> */}
          </video>
        )}
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div className="container hero-content-container" style={{ paddingTop: '140px', paddingBottom: '120px' }}>
          <div style={{ maxWidth: '680px' }}>

            {/* Label */}
            <div ref={labelRef} className="section-label" style={{ marginBottom: '28px' }}>
              Austin &amp; Westlake Hills, Texas · Since 1996
            </div>

            {/* Headline with char-split */}
            <h1
              className="hero-headline"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2rem, 5.5vw, 4.5rem)',
                fontWeight: 400,
                lineHeight: 1.1,
                marginBottom: '28px',
              }}
            >
              <span
                ref={line1Ref}
                style={{
                  display: 'block',
                  color: 'var(--copper)',
                  textShadow: '0 0 20px var(--copper-glow), 0 0 40px rgba(34,184,209,0.2)',
                  whiteSpace: 'nowrap',
                }}
              >
                {splitChars('Complete Healthcare.')}
              </span>
              <span
                ref={line2Ref}
                style={{
                  display: 'block',
                  color: 'var(--white)',
                  whiteSpace: 'nowrap',
                }}
              >
                {splitChars('Exceptional Results.')}
              </span>
            </h1>

            {/* Subheading */}
            <p
              ref={subRef}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: 'var(--muted-text)',
                maxWidth: '560px',
                lineHeight: 1.7,
                marginBottom: '40px',
              }}
            >
              From primary care and urgent care to medical spa and ketamine therapy — Victory Medical brings comprehensive, integrated medicine to Central Texas. One team. One destination. All your health needs.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '64px' }}>
              <a
                href="https://www.priviahealth.com/practice/victory-medical/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book an Appointment
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <Link href="/services" className="btn-outline">
                Explore Services
              </Link>
            </div>

            {/* Stats */}
            <div className="hero-stats" style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  ref={(el) => { statRefs.current[i] = el }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: '1.8rem',
                      fontWeight: 600,
                      color: 'var(--white)',
                      lineHeight: 1,
                    }}
                  >
                    <span
                      ref={(el) => { statValueRefs.current[i] = el }}
                    >
                      {stat.start}
                    </span>
                    <span style={{ color: 'var(--copper)' }}>{stat.suffix}</span>
                  </div>
                  <div
                    style={{
                      fontSize: '0.7rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      marginTop: '4px',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(26,58,71,0.4)',
          }}
        >
          Scroll
        </span>
        <div
          ref={scrollLineRef}
          style={{
            width: '1px',
            height: '40px',
            backgroundColor: 'var(--copper)',
            transformOrigin: 'top center',
            transform: 'scaleY(0)',
          }}
        />
      </div>
    </section>
  )
}
