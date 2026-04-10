'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })

      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: 'power2.out' }
      )
        .fromTo(
          labelRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          headlineRef.current?.children || [],
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          ctaRef.current?.children || [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.2'
        )

      // Scroll indicator animation
      if (scrollRef.current) {
        const line = scrollRef.current.querySelector('.scroll-line')
        if (line) {
          gsap.to(line, {
            scaleY: 0.4,
            transformOrigin: 'top center',
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: 'power2.inOut',
          })
        }
      }
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
      {/* Background gradient mesh */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 60% at 20% 50%, rgba(201,122,60,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 80% 20%, rgba(14,45,60,0.8) 0%, transparent 70%),
            linear-gradient(135deg, #050f15 0%, #0e2d3c 50%, #050f15 100%)
          `,
          zIndex: 0,
        }}
      />

      {/* Animated grid pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(201,122,60,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,122,60,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          zIndex: 1,
        }}
      />

      {/* Right side decorative image area */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '50%',
          background: `
            linear-gradient(to left, rgba(5,15,21,0) 0%, rgba(5,15,21,0.7) 60%, rgba(5,15,21,1) 100%),
            url('https://victorymed.com/wp-content/uploads/2018/12/vmc-home-banner_lighter.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          zIndex: 1,
        }}
      />

      {/* Content overlay */}
      <div
        ref={overlayRef}
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
        }}
      >
        <div
          className="container"
          style={{ paddingTop: '120px', paddingBottom: '100px' }}
        >
          <div style={{ maxWidth: '680px' }}>
            {/* Label */}
            <div ref={labelRef} className="section-label" style={{ marginBottom: '24px' }}>
              Austin &amp; Westlake Hills, Texas · Since 1996
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                fontWeight: 400,
                lineHeight: 1.1,
                marginBottom: '28px',
              }}
            >
              <span
                style={{
                  display: 'block',
                  color: 'var(--copper)',
                  textShadow: '0 0 30px var(--copper-glow), 0 0 60px rgba(201,122,60,0.2)',
                }}
              >
                Complete Healthcare.
              </span>
              <span style={{ display: 'block', color: 'var(--white)' }}>
                Exceptional Results.
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
            <div
              ref={ctaRef}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '60px' }}
            >
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

            {/* Stats row */}
            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
              {[
                { value: '1996', label: 'Founded' },
                { value: '3', label: 'Locations' },
                { value: '25+', label: 'Services' },
                { value: '4.1★', label: '341 Reviews' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: '1.8rem',
                      fontWeight: 600,
                      color: 'var(--white)',
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
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
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          Scroll
        </span>
        <div
          className="scroll-line"
          style={{
            width: '1px',
            height: '40px',
            backgroundColor: 'var(--copper)',
            transformOrigin: 'top center',
          }}
        />
      </div>
    </section>
  )
}
