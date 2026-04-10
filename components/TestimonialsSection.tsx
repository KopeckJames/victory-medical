'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const testimonials = [
  {
    name: 'Sarah M.',
    initials: 'SM',
    location: 'Austin, TX',
    rating: 5,
    text: "Victory Medical has been my family's healthcare home for over a decade. From urgent care walk-ins to my annual physicals, the team always makes me feel like a priority. The MedSpa is an added bonus!",
    service: 'Family Practice',
  },
  {
    name: 'James T.',
    initials: 'JT',
    location: 'Westlake Hills, TX',
    rating: 5,
    text: "The allergy program here is unlike anything I've experienced. I was skeptical about the rapid desensitization, but within 3 months I was breathing freely for the first time in years. Life-changing.",
    service: 'Allergy Services',
  },
  {
    name: 'Maria R.',
    initials: 'MR',
    location: 'Austin, TX',
    rating: 5,
    text: "Melissa at the MedSpa is incredible. My Botox results look natural and last longer than anywhere else I've been. The fact that she's also a mental health provider gives me so much confidence in her hands.",
    service: 'Medical Spa',
  },
  {
    name: 'David K.',
    initials: 'DK',
    location: 'Cedar Park, TX',
    rating: 5,
    text: "I came to Victory for ketamine therapy after struggling with treatment-resistant depression for years. I can't overstate how much it changed my quality of life. The clinical team is compassionate and professional.",
    service: 'Ketamine Therapy',
  },
  {
    name: 'Linda P.',
    initials: 'LP',
    location: 'Austin, TX',
    rating: 4,
    text: "The compounding pharmacy is a game-changer. My hormone therapy formulation is customized exactly to my needs, and the pharmacists take time to explain everything. Worth the visit alone.",
    service: 'Pharmacy & Hormones',
  },
  {
    name: 'Robert A.',
    initials: 'RA',
    location: 'Lakeway, TX',
    rating: 5,
    text: "Needed urgent care on a Saturday — Victory was open, no wait, and the provider was thorough. Cost was a fraction of the ER. This is what healthcare should feel like.",
    service: 'Urgent Care',
  },
]

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 80%' },
        }
      )

      const cards = cardsRef.current?.querySelectorAll('.testimonial-card')
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' },
          }
        )
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section"
      style={{ backgroundColor: 'var(--teal)' }}
    >
      <div className="container">
        {/* Heading */}
        <div
          ref={headingRef}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '60px',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div>
            <div className="section-label" style={{ marginBottom: '16px' }}>
              Patient Stories
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 400,
                color: 'var(--white)',
              }}
            >
              What Our Patients Say
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '2rem',
                  fontWeight: 600,
                  color: 'var(--white)',
                  lineHeight: 1,
                }}
              >
                4.1
              </div>
              <div style={{ display: 'flex', gap: '2px', marginTop: '4px' }}>
                {[1, 2, 3, 4].map((i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#f5c518">
                    <path d="M7 1L8.8 5.2L13.4 5.6L10 8.6L11 13.2L7 10.8L3 13.2L4 8.6L0.6 5.6L5.2 5.2L7 1Z" />
                  </svg>
                ))}
                <svg width="14" height="14" viewBox="0 0 14 14">
                  <path d="M7 1L8.8 5.2L13.4 5.6L10 8.6L11 13.2L7 10.8L3 13.2L4 8.6L0.6 5.6L5.2 5.2L7 1Z" fill="none" stroke="#f5c518" strokeWidth="1"/>
                </svg>
              </div>
            </div>
            <div
              style={{
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '0.05em',
              }}
            >
              341 reviews
            </div>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                padding: '32px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(201,122,60,0.3)'
                el.style.backgroundColor = 'rgba(201,122,60,0.05)'
                el.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(255,255,255,0.08)'
                el.style.backgroundColor = 'rgba(255,255,255,0.05)'
                el.style.transform = 'translateY(0)'
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                {Array.from({ length: t.rating }).map((_, si) => (
                  <svg key={si} width="14" height="14" viewBox="0 0 14 14" fill="#f5c518">
                    <path d="M7 1L8.8 5.2L13.4 5.6L10 8.6L11 13.2L7 10.8L3 13.2L4 8.6L0.6 5.6L5.2 5.2L7 1Z" />
                  </svg>
                ))}
              </div>

              {/* Service tag */}
              <div
                style={{
                  display: 'inline-block',
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--copper)',
                  border: '1px solid rgba(201,122,60,0.3)',
                  borderRadius: '20px',
                  padding: '3px 10px',
                  marginBottom: '16px',
                }}
              >
                {t.service}
              </div>

              {/* Quote */}
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.75)',
                  lineHeight: 1.7,
                  marginBottom: '24px',
                  fontStyle: 'italic',
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--lightest-teal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--gold)',
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--white)',
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'rgba(255,255,255,0.4)',
                    }}
                  >
                    {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
