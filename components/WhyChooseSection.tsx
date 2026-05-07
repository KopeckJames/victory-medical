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
    description: 'Traditional and holistic medicine under one roof since 1996. Primary care, MedSpa, pharmacy, physical medicine — one team coordinating all of your care.',
  },
  {
    number: '02',
    title: 'On-Site Compounding Pharmacy',
    description: 'Custom medications formulated specifically for you — allergen-free, precise dosages, unavailable commercial forms. No waiting for prescriptions to be filled elsewhere.',
  },
  {
    number: '03',
    title: 'Harvard Allergy Protocol',
    description: "Our unique rapid desensitization program — developed from Harvard research — gives patients relief in months rather than years. Exclusive to Victory.",
  },
  {
    number: '04',
    title: 'Physician-Led MedSpa',
    description: 'Every aesthetic treatment is performed or supervised by board-certified physicians and DNPs. Medical-grade safety with spa-level results.',
  },
  {
    number: '05',
    title: 'Privia Medical Group',
    description: "Victory Medical is a proud member of Privia Medical Group — a high-performance physician network that keeps doctors focused on what matters: your health.",
  },
  {
    number: '06',
    title: 'Walk-ins Always Welcome',
    description: 'Extended hours, weekend availability, and walk-in urgent care at all locations. No appointment? No problem. We make quality care accessible.',
  },
]

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section label clipPath wipe
      gsap.fromTo('.why-section-label',
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.why-section-label', start: 'top 85%' },
        }
      )

      // Heading
      gsap.fromTo('.why-heading',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.why-heading', start: 'top 80%' },
        }
      )

      // Grid items stagger from center outward
      const validItems = itemsRef.current.filter(Boolean)
      gsap.set(validItems, { willChange: 'transform' })

      validItems.forEach((item, i) => {
        if (!item) return
        const line = item.querySelector('.copper-line') as HTMLElement
        const content = item.querySelectorAll('h3, p')
        const number = item.querySelector('.number-badge')

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 82%',
            once: true,
          },
        })

        // Line draws first
        tl.fromTo(line,
          { width: 0 },
          { width: 40, duration: 0.5, ease: 'power3.out' }
        )
        // Then content ignites
        .fromTo([number, ...Array.from(content)].filter(Boolean),
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out' },
          '-=0.2'
        )

        // GSAP hover (replace inline style mutations)
        item.addEventListener('mouseenter', () => {
          gsap.to(line, { width: 80, duration: 0.3, ease: 'power2.out' })
          gsap.to(item, { backgroundColor: 'rgba(34,184,209,0.05)', duration: 0.3 })
        })
        item.addEventListener('mouseleave', () => {
          gsap.to(line, { width: 40, duration: 0.3, ease: 'power2.in' })
          gsap.to(item, { backgroundColor: 'rgba(26,58,71,0.03)', duration: 0.3 })
        })
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
      <div style={{
        position: 'absolute', top: '-200px', right: '-200px',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(34,184,209,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '80px', marginBottom: '80px', alignItems: 'end',
        }}>
          <div>
            <div className="section-label why-section-label" style={{ marginBottom: '16px' }}>
              Why Victory Medical
            </div>
            <h2 className="why-heading" style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400, color: 'var(--white)', lineHeight: 1.2,
            }}>
              Medicine that{' '}
              <span style={{ color: 'var(--copper)' }}>treats the whole you</span>
            </h2>
          </div>
          <p style={{ fontSize: '1rem', color: 'var(--muted-text)', lineHeight: 1.8 }}>
            Since 1996, we&apos;ve believed that the best healthcare combines conventional medicine with holistic wellness. Three locations. One integrated team. Limitless possibilities for your health.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
        }}>
          {reasons.map((reason, i) => (
            <div
              key={reason.number}
              ref={(el) => { itemsRef.current[i] = el }}
              style={{
                padding: '40px',
                backgroundColor: 'rgba(26,58,71,0.03)',
                border: '1px solid rgba(26,58,71,0.05)',
                position: 'relative',
                cursor: 'default',
              }}
            >
              <div className="number-badge" style={{
                position: 'absolute', top: '20px', right: '24px',
                fontSize: '0.65rem', color: 'rgba(26,58,71,0.15)',
                fontWeight: 600, letterSpacing: '0.1em',
                opacity: 0,
              }}>
                {reason.number}
              </div>
              <div className="copper-line" style={{
                width: 0,
                height: '2px',
                backgroundColor: 'var(--copper)',
                marginBottom: '20px',
              }} />
              <h3 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '1.2rem', fontWeight: 400,
                color: 'var(--white)', marginBottom: '12px',
                opacity: 0,
              }}>
                {reason.title}
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: 'rgba(26,58,71,0.6)', lineHeight: 1.7,
                opacity: 0,
              }}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
