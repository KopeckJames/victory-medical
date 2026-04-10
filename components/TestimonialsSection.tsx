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
    text: "Victory Medical has been my family's healthcare home for over a decade. The team always makes me feel like a priority. The MedSpa is an added bonus!",
    service: 'Family Practice',
  },
  {
    name: 'James T.',
    initials: 'JT',
    location: 'Westlake Hills, TX',
    rating: 5,
    text: "The allergy program here is unlike anything I've experienced. Within 3 months I was breathing freely for the first time in years. Life-changing.",
    service: 'Allergy Services',
  },
  {
    name: 'Maria R.',
    initials: 'MR',
    location: 'Austin, TX',
    rating: 5,
    text: "Melissa at the MedSpa is incredible. My Botox results look natural and last longer than anywhere else. The fact that she's a mental health provider gives me so much confidence.",
    service: 'Medical Spa',
  },
  {
    name: 'David K.',
    initials: 'DK',
    location: 'Cedar Park, TX',
    rating: 5,
    text: "I came to Victory for ketamine therapy after struggling with treatment-resistant depression for years. I can't overstate how much it changed my quality of life.",
    service: 'Ketamine Therapy',
  },
  {
    name: 'Linda P.',
    initials: 'LP',
    location: 'Austin, TX',
    rating: 4,
    text: "The compounding pharmacy is a game-changer. My hormone formulation is customized exactly to my needs, and the pharmacists take time to explain everything.",
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
  {
    name: 'Christine B.',
    initials: 'CB',
    location: 'Austin, TX',
    rating: 5,
    text: "The CoolSculpting results were better than I expected. The team made the whole process comfortable and the follow-up care was excellent.",
    service: 'Medical Spa',
  },
  {
    name: 'Michael S.',
    initials: 'MS',
    location: 'Round Rock, TX',
    rating: 5,
    text: "Dr. Franklin has been my doctor for 15 years. His approach to integrative medicine is what keeps me coming back. Victory is genuinely different from any clinic I've been to.",
    service: 'Primary Care',
  },
]

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div style={{
      backgroundColor: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '12px',
      padding: '28px',
      width: '320px',
      flexShrink: 0,
      margin: '0 10px',
    }}>
      <div style={{ display: 'flex', gap: '3px', marginBottom: '12px' }}>
        {Array.from({ length: t.rating }).map((_, i) => (
          <svg key={i} width="13" height="13" viewBox="0 0 14 14" fill="#f5c518">
            <path d="M7 1L8.8 5.2L13.4 5.6L10 8.6L11 13.2L7 10.8L3 13.2L4 8.6L0.6 5.6L5.2 5.2L7 1Z" />
          </svg>
        ))}
      </div>
      <div style={{
        display: 'inline-block', fontSize: '0.6rem',
        letterSpacing: '0.1em', textTransform: 'uppercase',
        color: 'var(--copper)', border: '1px solid rgba(201,122,60,0.3)',
        borderRadius: '20px', padding: '2px 10px', marginBottom: '12px',
      }}>
        {t.service}
      </div>
      <p style={{
        fontSize: '0.875rem', color: 'rgba(255,255,255,0.72)',
        lineHeight: 1.7, marginBottom: '20px', fontStyle: 'italic',
      }}>
        &ldquo;{t.text}&rdquo;
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '36px', height: '36px', borderRadius: '50%',
          backgroundColor: 'var(--lightest-teal)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.7rem', fontWeight: 600, color: 'var(--gold)', flexShrink: 0,
        }}>
          {t.initials}
        </div>
        <div>
          <div style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--white)' }}>{t.name}</div>
          <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>{t.location}</div>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)
  const ratingRef = useRef<HTMLSpanElement>(null)
  const row1TweenRef = useRef<gsap.core.Tween | null>(null)
  const row2TweenRef = useRef<gsap.core.Tween | null>(null)

  // Duplicate for seamless loop — triple to ensure coverage
  const row1Items = [...testimonials, ...testimonials, ...testimonials]
  const row2Items = [...testimonials.slice(3), ...testimonials, ...testimonials, ...testimonials.slice(0, 3)]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section label clipPath wipe
      gsap.fromTo('.testimonials-label',
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.testimonials-label', start: 'top 85%' },
        }
      )

      // Rating counter
      if (ratingRef.current) {
        const obj = { val: 0 }
        gsap.to(obj, {
          val: 4.1, duration: 1.5, ease: 'power3.out',
          scrollTrigger: { trigger: ratingRef.current, start: 'top 85%', once: true },
          onUpdate: () => {
            if (ratingRef.current) ratingRef.current.textContent = obj.val.toFixed(1)
          },
        })
      }

      // Row 1: scroll left
      if (row1Ref.current) {
        const itemWidth = 340 // card width + margin
        const totalWidth = itemWidth * testimonials.length
        row1TweenRef.current = gsap.to(row1Ref.current, {
          x: -totalWidth,
          duration: totalWidth / 35,
          ease: 'none',
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
          },
        })
      }

      // Row 2: scroll right (opposite direction)
      if (row2Ref.current) {
        const itemWidth = 340
        const totalWidth = itemWidth * testimonials.length
        gsap.set(row2Ref.current, { x: -totalWidth / 2 })
        row2TweenRef.current = gsap.to(row2Ref.current, {
          x: 0,
          duration: totalWidth / 28,
          ease: 'none',
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => {
              const val = parseFloat(x) % totalWidth
              return val > 0 ? val - totalWidth : val
            }),
          },
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleRowHover = (rowNum: number, paused: boolean) => {
    const tween = rowNum === 1 ? row1TweenRef.current : row2TweenRef.current
    if (tween) paused ? tween.pause() : tween.resume()
  }

  return (
    <section ref={sectionRef} className="section" style={{ backgroundColor: 'var(--teal)', overflow: 'hidden' }}>
      <div className="container">
        {/* Header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', marginBottom: '60px',
          flexWrap: 'wrap', gap: '24px',
        }}>
          <div>
            <div className="section-label testimonials-label" style={{ marginBottom: '16px' }}>
              Patient Stories
            </div>
            <h2 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400, color: 'var(--white)',
            }}>
              What Our Patients Say
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '2.5rem', fontWeight: 600,
                color: 'var(--white)', lineHeight: 1,
              }}>
                <span ref={ratingRef}>0.0</span>
              </div>
              <div style={{ display: 'flex', gap: '2px', marginTop: '4px' }}>
                {[1,2,3,4].map(i => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#f5c518">
                    <path d="M7 1L8.8 5.2L13.4 5.6L10 8.6L11 13.2L7 10.8L3 13.2L4 8.6L0.6 5.6L5.2 5.2L7 1Z"/>
                  </svg>
                ))}
              </div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>341 reviews</div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 1 - scrolls left */}
      <div
        style={{ overflow: 'hidden', marginBottom: '16px', cursor: 'grab' }}
        onMouseEnter={() => handleRowHover(1, true)}
        onMouseLeave={() => handleRowHover(1, false)}
      >
        <div ref={row1Ref} style={{ display: 'flex', willChange: 'transform' }}>
          {row1Items.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div
        style={{ overflow: 'hidden', cursor: 'grab' }}
        onMouseEnter={() => handleRowHover(2, true)}
        onMouseLeave={() => handleRowHover(2, false)}
      >
        <div ref={row2Ref} style={{ display: 'flex', willChange: 'transform' }}>
          {row2Items.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
