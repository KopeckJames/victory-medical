'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const stats = [
  { value: 28, suffix: '+', label: 'Years Serving Austin', description: 'Trusted since 1996', decimals: 0 },
  { value: 25, suffix: '+', label: 'Services Offered', description: 'Complete under one roof', decimals: 0 },
  { value: 341, suffix: '', label: 'Patient Reviews', description: '4.1★ average rating', decimals: 0 },
  { value: 97, suffix: '%', label: 'Patient Satisfaction', description: 'Would recommend us', decimals: 0 },
  { value: 3, suffix: '', label: 'Austin Locations', description: 'Including Westlake Hills', decimals: 0 },
]

export default function StatsStrip() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statValueRefs = useRef<(HTMLSpanElement | null)[]>([])
  const progressRefs = useRef<(SVGCircleElement | null)[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Stagger item entrance
      gsap.fromTo(itemRefs.current.filter(Boolean),
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      )

      // Animated counters
      stats.forEach((stat, i) => {
        const el = statValueRefs.current[i]
        if (!el) return

        const obj = { val: 0 }
        gsap.to(obj, {
          val: stat.value,
          duration: stat.value > 100 ? 2.5 : 1.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: itemRefs.current[i],
            start: 'top 85%',
            once: true,
          },
          onUpdate: () => {
            el.textContent = stat.decimals > 0
              ? obj.val.toFixed(stat.decimals)
              : Math.round(obj.val).toString()
          },
        })

        // SVG progress circle
        const circle = progressRefs.current[i]
        if (circle) {
          const circumference = 2 * Math.PI * 28
          const progress = stat.suffix === '%' ? stat.value / 100 : Math.min(stat.value / 30, 1)
          gsap.fromTo(circle,
            { strokeDashoffset: circumference },
            {
              strokeDashoffset: circumference - (circumference * progress),
              duration: 1.8, ease: 'power2.out',
              scrollTrigger: {
                trigger: itemRefs.current[i],
                start: 'top 85%',
                once: true,
              },
            }
          )
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: 'var(--dark-teal)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        padding: '60px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background shimmer line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(201,122,60,0.4), transparent)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '16px',
        }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              ref={el => { itemRefs.current[i] = el }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '24px 16px',
                backgroundColor: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '16px',
                position: 'relative',
                opacity: 0,
                transition: 'border-color 0.3s, background-color 0.3s',
              }}
              onMouseEnter={e => {
                gsap.to(e.currentTarget, {
                  borderColor: 'rgba(201,122,60,0.35)',
                  backgroundColor: 'rgba(201,122,60,0.05)',
                  y: -4, duration: 0.3, ease: 'power2.out',
                })
              }}
              onMouseLeave={e => {
                gsap.to(e.currentTarget, {
                  borderColor: 'rgba(255,255,255,0.06)',
                  backgroundColor: 'rgba(255,255,255,0.025)',
                  y: 0, duration: 0.3, ease: 'power2.in',
                })
              }}
            >
              {/* Radial progress ring */}
              <div style={{ position: 'relative', marginBottom: '16px' }}>
                <svg width="68" height="68" viewBox="0 0 68 68">
                  {/* Track */}
                  <circle
                    cx="34" cy="34" r="28"
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="2"
                  />
                  {/* Progress */}
                  <circle
                    ref={el => { progressRefs.current[i] = el }}
                    cx="34" cy="34" r="28"
                    fill="none"
                    stroke="url(#copper-gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 28}
                    strokeDashoffset={2 * Math.PI * 28}
                    transform="rotate(-90 34 34)"
                  />
                  <defs>
                    <linearGradient id="copper-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--copper)" />
                      <stop offset="100%" stopColor="var(--gold)" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Number in center */}
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1rem', fontWeight: 700,
                    color: 'var(--white)',
                    lineHeight: 1,
                  }}>
                    <span ref={el => { statValueRefs.current[i] = el }}>0</span>
                    <span style={{ color: 'var(--copper)', fontSize: '0.75rem' }}>{stat.suffix}</span>
                  </div>
                </div>
              </div>

              <div style={{
                fontSize: '0.75rem', fontWeight: 600,
                color: 'var(--white)', marginBottom: '4px',
                letterSpacing: '0.01em',
                lineHeight: 1.3,
              }}>{stat.label}</div>
              <div style={{
                fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)',
                letterSpacing: '0.02em',
              }}>{stat.description}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
