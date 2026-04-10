'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const reasons = [
  {
    number: '01',
    title: 'Integrated Medicine',
    description:
      'Traditional and holistic medicine under one roof since 1996. Primary care, MedSpa, pharmacy, physical medicine — one team coordinating all of your care.',
  },
  {
    number: '02',
    title: 'On-Site Compounding Pharmacy',
    description:
      'Custom medications formulated specifically for you — allergen-free, precise dosages, unavailable commercial forms. No waiting for prescriptions to be filled elsewhere.',
  },
  {
    number: '03',
    title: 'Harvard Allergy Protocol',
    description:
      "Our unique rapid desensitization program — developed from Harvard research — gives patients relief in months rather than years. Exclusive to Victory.",
  },
  {
    number: '04',
    title: 'Physician-Led MedSpa',
    description:
      'Every aesthetic treatment is performed or supervised by board-certified physicians and DNPs. Medical-grade safety with spa-level results.',
  },
  {
    number: '05',
    title: 'Privia Medical Group',
    description:
      "Victory Medical is a proud member of Privia Medical Group — a high-performance physician network that keeps doctors focused on what matters: your health.",
  },
  {
    number: '06',
    title: 'Walk-ins Always Welcome',
    description:
      'Extended hours, weekend availability, and walk-in urgent care at all locations. No appointment? No problem. We make quality care accessible.',
  },
]

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, i) => {
        if (!item) return
        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            },
            delay: (i % 2) * 0.15,
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section"
      style={{
        backgroundColor: 'var(--dark-teal)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: 'absolute',
          top: '-200px',
          right: '-200px',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(201,122,60,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        {/* Section header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            marginBottom: '80px',
            alignItems: 'end',
          }}
        >
          <div>
            <div className="section-label" style={{ marginBottom: '16px' }}>
              Why Victory Medical
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 400,
                color: 'var(--white)',
                lineHeight: 1.2,
              }}
            >
              Medicine that{' '}
              <span style={{ color: 'var(--copper)' }}>treats the whole you</span>
            </h2>
          </div>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--muted-text)',
              lineHeight: 1.8,
            }}
          >
            Since 1996, we&apos;ve believed that the best healthcare combines conventional medicine with holistic wellness. Three locations. One integrated team. Limitless possibilities for your health.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2px',
          }}
        >
          {reasons.map((reason, i) => (
            <div
              key={reason.number}
              ref={(el) => { if (el) itemsRef.current[i] = el }}
              style={{
                padding: '40px',
                borderRadius: i === 0 ? '12px 0 0 0' : i === 2 ? '0 12px 0 0' : i === 3 ? '0 0 0 12px' : i === 5 ? '0 0 12px 0' : '0',
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.05)',
                position: 'relative',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(201,122,60,0.05)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.03)'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '24px',
                  fontSize: '0.65rem',
                  color: 'rgba(255,255,255,0.15)',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                }}
              >
                {reason.number}
              </div>
              <div
                style={{
                  width: '40px',
                  height: '2px',
                  backgroundColor: 'var(--copper)',
                  marginBottom: '20px',
                }}
              />
              <h3
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '1.2rem',
                  fontWeight: 400,
                  color: 'var(--white)',
                  marginBottom: '12px',
                }}
              >
                {reason.title}
              </h3>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.7,
                }}
              >
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
