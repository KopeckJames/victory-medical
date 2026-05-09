'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    id: 'primary-care',
    title: 'Family & Primary Care',
    subtitle: 'Board-certified physicians for the whole family',
    description: 'Comprehensive primary and preventative care for all ages — in-person or via telemedicine. Includes routine checkups, immunizations, chronic disease management, and same-day appointments.',
    links: ['Annual Physicals', 'Chronic Care', 'Telemedicine', 'Immunizations', 'Workers Comp'],
    bg: '#ffffff',
  },
  {
    id: 'urgent-care',
    title: 'Urgent Care',
    subtitle: '50–300% less than the average ER',
    description: 'Walk-in, no appointment needed. Board-certified providers treat all ages for non-life-threatening conditions. Extended hours, including evenings and weekends.',
    links: ['Walk-ins Welcome', 'Extended Hours', 'All Ages', 'Injuries & Illness'],
    bg: '#f5fbfc',
  },
  {
    id: 'medspa',
    title: 'Medical Spa',
    subtitle: 'Physician-supervised aesthetics',
    description: 'From Botox and fillers to CoolSculpting and laser treatments — all performed or supervised by board-certified providers. Beauty with the safety of medicine.',
    links: ['Botox & Dysport', 'Dermal Fillers', 'CoolSculpting®', 'Laser Treatments', 'HydraFacial'],
    href: '/medspa',
    bg: '#f5fbfc',
  },
  {
    id: 'ketamine',
    title: 'Ketamine Therapy',
    subtitle: 'Licensed infusion therapy',
    description: 'One of few licensed ketamine infusion clinics in the US. Physician-monitored treatment for PTSD, depression, anxiety, chronic pain, and more. Results within hours.',
    links: ['PTSD', 'Depression', 'Chronic Pain', 'OCD', 'Anxiety'],
    bg: '#f5fbfc',
  },
  {
    id: 'allergy',
    title: 'Allergy Services',
    subtitle: 'Harvard Protocol — Unique to Victory',
    description: 'Full allergy testing for 75+ regional allergens. Rapid desensitization protocol unique to Victory — most patients see relief in months, not years.',
    links: ['Allergy Testing', 'Immunotherapy', 'Asthma', 'Rapid Desensitization'],
    bg: '#f5fbfc',
  },
  {
    id: 'peptides',
    title: 'Peptide Therapy',
    subtitle: 'Precision medicine for performance & longevity',
    description: 'Physician-prescribed peptide protocols targeting cognitive enhancement, body composition, accelerated recovery, and metabolic optimization. Five science-backed peptides, one physician-supervised program.',
    links: ['Semax', 'CJC-1295 + Ipamorelin', 'BPC-157', 'Sermorelin', 'Selank', 'KPV', 'MOTS-c'],
    href: '/peptides',
    bg: '#f5fbfc',
  },
]

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const prevActiveIndex = useRef(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading entrance
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 80%' },
        }
      )

      // Section label clipPath reveal
      const label = headingRef.current?.querySelector('.section-label')
      if (label) {
        gsap.fromTo(label,
          { clipPath: 'inset(0 100% 0 0)' },
          {
            clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: label, start: 'top 85%' },
          }
        )
      }

      // Cards scaleY entrance from bottom
      const cards = cardsContainerRef.current?.querySelectorAll('.service-accordion-card')
      if (cards?.length) {
        gsap.set(cards, { willChange: 'transform' })
        gsap.fromTo(cards,
          { scaleY: 0, transformOrigin: 'bottom center', opacity: 0 },
          {
            scaleY: 1, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power4.out',
            scrollTrigger: { trigger: cardsContainerRef.current, start: 'top 65%' },
            onComplete: () => {
              // After entrance, auto-open first card
              setTimeout(() => {
                const revealEls = document.querySelectorAll('[data-reveal]')
                gsap.fromTo(revealEls,
                  { opacity: 0, y: 12 },
                  { opacity: 1, y: 0, duration: 0.4, stagger: 0.07, ease: 'power3.out' }
                )
              }, 200)
            }
          }
        )
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  // Animate active card content on index change
  useEffect(() => {
    if (!cardsContainerRef.current) return
    const revealEls = cardsContainerRef.current.querySelectorAll('[data-reveal]')
    if (!revealEls.length) return
    gsap.fromTo(revealEls,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.07, ease: 'power3.out', delay: 0.2 }
    )
    prevActiveIndex.current = activeIndex
  }, [activeIndex])

  return (
    <section ref={sectionRef} className="section" style={{ backgroundColor: 'var(--teal)' }}>
      <div className="container">
        <div ref={headingRef} style={{ marginBottom: '60px' }}>
          <div className="section-label" style={{ marginBottom: '16px' }}>
            What We Offer
          </div>
          <h2 style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400,
            color: 'var(--white)',
            maxWidth: '500px',
          }}>
            Integrated Care,{' '}
            <span style={{ color: 'var(--copper)' }}>All Under One Roof</span>
          </h2>
        </div>

        {/* Accordion Cards */}
        <div
          ref={cardsContainerRef}
          className="services-accordion-container"
          style={{ display: 'flex', gap: '12px', height: '460px' }}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-accordion-card${activeIndex === index ? ' service-accordion-card--active' : ''}`}
              onClick={() => setActiveIndex(index)}
              style={{
                flex: activeIndex === index ? 4 : 1,
                transition: 'flex 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
                backgroundColor: service.bg,
                borderRadius: '16px',
                border: `1px solid ${activeIndex === index ? 'rgba(34,184,209,0.5)' : 'rgba(26,58,71,0.08)'}`,
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                boxShadow: activeIndex === index ? '0 0 30px rgba(34,184,209,0.15)' : 'none',
                willChange: 'transform',
              }}
            >
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.3) 100%)',
                zIndex: 1,
              }} />

              {/* Collapsed vertical title */}
              <div className="svc-collapsed-label" style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 2,
                opacity: activeIndex === index ? 0 : 1,
                transition: 'opacity 0.3s ease',
              }}>
                <div className="svc-collapsed-title" style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  transform: 'rotate(180deg)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(26,58,71,0.7)',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}>
                  {service.title}
                </div>
              </div>

              {/* Expanded content */}
              <div className="svc-expanded-content" style={{
                position: 'absolute', inset: 0,
                padding: '40px',
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                zIndex: 3,
                opacity: activeIndex === index ? 1 : 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: activeIndex === index ? 'auto' : 'none',
              }}>
                <div data-reveal style={{
                  fontSize: '0.7rem', letterSpacing: '0.15em',
                  textTransform: 'uppercase', color: 'var(--copper)',
                  marginBottom: '8px', fontWeight: 500,
                }}>
                  {service.subtitle}
                </div>
                <h3 data-reveal style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '1.8rem', fontWeight: 400,
                  color: 'var(--white)', marginBottom: '12px',
                }}>
                  {service.title}
                </h3>
                <p data-reveal style={{
                  fontSize: '0.875rem', color: 'rgba(26,58,71,0.75)',
                  lineHeight: 1.6, marginBottom: '20px', maxWidth: '360px',
                }}>
                  {service.description}
                </p>
                <div data-reveal style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {service.links.map((item) => (
                    <span key={item} style={{
                      fontSize: '0.7rem', padding: '4px 12px',
                      border: '1px solid rgba(34,184,209,0.4)',
                      borderRadius: '20px', color: 'rgba(26,58,71,0.75)',
                      letterSpacing: '0.05em',
                    }}>
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  data-reveal
                  href={service.href || `/services#${service.id}`}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    fontSize: '0.75rem', letterSpacing: '0.08em',
                    textTransform: 'uppercase', color: 'var(--copper)',
                    textDecoration: 'none', fontWeight: 500,
                  }}
                >
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/services" className="btn-outline">View All Services</Link>
        </div>
      </div>
    </section>
  )
}
