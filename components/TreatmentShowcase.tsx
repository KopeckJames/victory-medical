'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const treatments = [
  {
    number: '01',
    category: 'Primary Care',
    title: 'Your Health,\nYour Way',
    description: 'Comprehensive family medicine with same-day sick visits, preventive care, and chronic disease management. Your dedicated provider. No rushed appointments.',
    stat: '25+ years',
    statLabel: 'serving Austin',
    color: 'rgba(201,122,60,0.12)',
    borderColor: 'rgba(201,122,60,0.3)',
    href: '/services#primary-care',
  },
  {
    number: '02',
    category: 'MedSpa',
    title: 'Beauty Meets\nMedicine',
    description: 'Physician-supervised aesthetics from Botox and fillers to CoolSculpting and laser treatments. Real results, medical-grade safety.',
    stat: '15+',
    statLabel: 'aesthetic treatments',
    color: 'rgba(196,168,122,0.1)',
    borderColor: 'rgba(196,168,122,0.25)',
    href: '/medspa',
  },
  {
    number: '03',
    category: 'Ketamine Therapy',
    title: 'Mental Health\nTransformed',
    description: 'IV ketamine infusion for treatment-resistant depression, PTSD, anxiety, and chronic pain. Physician-monitored. Transformative results.',
    stat: '70%',
    statLabel: 'response rate',
    color: 'rgba(14,45,60,0.8)',
    borderColor: 'rgba(201,122,60,0.2)',
    href: '/services#ketamine',
  },
  {
    number: '04',
    category: 'Allergy Services',
    title: 'The Harvard\nProtocol',
    description: 'Our exclusive rapid desensitization program — developed from Harvard research — gives patients lasting allergy relief in months, not years.',
    stat: 'Exclusive',
    statLabel: 'in Central Texas',
    color: 'rgba(201,122,60,0.08)',
    borderColor: 'rgba(201,122,60,0.25)',
    href: '/services#allergy',
  },
  {
    number: '05',
    category: 'Weight Loss',
    title: 'Physician-Led\nTransformation',
    description: 'Medical weight loss with GLP-1 medications, metabolic testing, and personalized nutrition. Science-backed. Sustainable results.',
    stat: '3',
    statLabel: 'Austin locations',
    color: 'rgba(196,168,122,0.08)',
    borderColor: 'rgba(196,168,122,0.2)',
    href: '/services#weight-loss',
  },
  {
    number: '06',
    category: 'Club Longevity',
    title: 'Optimize Your\nLifespan',
    description: 'Bioidentical hormone replacement, testosterone therapy, and thyroid optimization. Feel like yourself again — better than ever.',
    stat: '∞',
    statLabel: 'vitality restored',
    color: 'rgba(201,122,60,0.1)',
    borderColor: 'rgba(201,122,60,0.3)',
    href: '/services#hormones',
  },
]

export default function TreatmentShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const isMobile = window.innerWidth < 768

    const ctx = gsap.context(() => {
      // Section heading reveal
      gsap.fromTo('.showcase-heading',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.showcase-heading', start: 'top 80%' },
        }
      )

      gsap.fromTo('.showcase-label',
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.showcase-label', start: 'top 85%' },
        }
      )

      if (!isMobile) {
        // Desktop only: horizontal scroll pin
        const totalWidth = track.scrollWidth - track.offsetWidth
        if (totalWidth > 0) {
          gsap.to(track, {
            x: -totalWidth,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: () => `+=${totalWidth + 200}`,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
            },
          })
        }

        // Card entrance on desktop
        cardsRef.current.forEach((card, i) => {
          if (!card) return
          gsap.fromTo(card,
            { opacity: 0, y: 40 },
            {
              opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top top',
                once: true,
              },
              delay: i * 0.1,
            }
          )
        })
      } else {
        // Mobile: stagger cards as they scroll into view vertically
        cardsRef.current.forEach((card) => {
          if (!card) return
          gsap.fromTo(card,
            { opacity: 0, y: 30 },
            {
              opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                once: true,
              },
            }
          )
        })
      }
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: 'var(--teal)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(201,122,60,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,122,60,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        pointerEvents: 'none',
      }} />

      {/* Header — stays fixed while scrolling */}
      <div style={{
        padding: '80px 0 40px',
        paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))',
        paddingRight: 'max(24px, calc((100vw - 1280px) / 2 + 24px))',
        position: 'relative', zIndex: 1,
      }}>
        <div className="section-label showcase-label" style={{ marginBottom: '16px' }}>
          What We Offer
        </div>
        <div style={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px',
        }}>
          <h2 className="showcase-heading" style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400, color: 'var(--white)', lineHeight: 1.2,
          }}>
            Complete Healthcare,{' '}
            <span style={{ color: 'var(--copper)' }}>One Team</span>
          </h2>
          <p style={{
            fontSize: '0.875rem', color: 'var(--muted-text)',
            maxWidth: '360px', lineHeight: 1.7,
          }}>
            From prevention to transformation — every service you need, coordinated by one integrated team.
          </p>
        </div>
        <div className="tc-scroll-hint" style={{
          marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px',
          opacity: 0.5,
        }}>
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)' }}>
            Scroll to explore
          </span>
          <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
            <path d="M0 4H18M14 1L18 4L14 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" style={{ color: 'var(--gold)' }}/>
          </svg>
        </div>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        className="treatment-track"
        style={{
          display: 'flex',
          gap: '20px',
          padding: '0 max(24px, calc((100vw - 1280px) / 2 + 24px)) 80px',
          willChange: 'transform',
        }}
      >
        {treatments.map((t, i) => (
          <div
            key={t.number}
            ref={el => { cardsRef.current[i] = el }}
            className="treatment-card"
            style={{
              flexShrink: 0,
              width: '340px',
              height: '460px',
              backgroundColor: t.color,
              border: `1px solid ${t.borderColor}`,
              borderRadius: '20px',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={e => {
              gsap.to(e.currentTarget, {
                y: -8, scale: 1.02,
                boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
                duration: 0.3, ease: 'power2.out',
              })
            }}
            onMouseLeave={e => {
              gsap.to(e.currentTarget, {
                y: 0, scale: 1, boxShadow: 'none',
                duration: 0.3, ease: 'power2.in',
              })
            }}
          >
            {/* Number */}
            <div className="tc-number" style={{
              position: 'absolute', top: '24px', right: '28px',
              fontSize: '4rem', fontWeight: 700,
              fontFamily: 'var(--font-playfair)',
              color: 'rgba(255,255,255,0.04)',
              lineHeight: 1, userSelect: 'none',
            }}>{t.number}</div>

            {/* Top */}
            <div className="tc-top">
              <div className="tc-category" style={{
                fontSize: '0.65rem', letterSpacing: '0.15em',
                textTransform: 'uppercase', color: 'var(--copper)',
                marginBottom: '16px', fontWeight: 600,
              }}>{t.category}</div>
              <h3 className="tc-title" style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '1.6rem', fontWeight: 400,
                color: 'var(--white)', lineHeight: 1.25,
                marginBottom: '16px',
                whiteSpace: 'pre-line',
              }}>{t.title}</h3>
              <p className="tc-desc" style={{
                fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.7,
              }}>{t.description}</p>
            </div>

            {/* Bottom */}
            <div className="tc-bottom">
              <div className="tc-bottom-inner" style={{
                borderTop: '1px solid rgba(255,255,255,0.08)',
                paddingTop: '20px',
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.4rem', fontWeight: 600,
                    color: 'var(--copper)', lineHeight: 1,
                  }}>{t.stat}</div>
                  <div style={{
                    fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)',
                    marginTop: '4px', letterSpacing: '0.05em',
                  }}>{t.statLabel}</div>
                </div>
                <Link
                  href={t.href}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    fontSize: '0.72rem', letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: 'var(--gold)',
                    textDecoration: 'none', fontWeight: 500,
                    transition: 'gap 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = '10px' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = '6px' }}
                >
                  Explore
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
