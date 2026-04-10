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
    description:
      'Comprehensive primary and preventative care for all ages — in-person or via telemedicine. Includes routine checkups, immunizations, chronic disease management, and same-day appointments.',
    links: ['Annual Physicals', 'Chronic Care', 'Telemedicine', 'Immunizations', 'Workers Comp'],
    gradient: 'linear-gradient(to top, rgba(5,15,21,0.95) 0%, rgba(5,15,21,0.4) 100%)',
    bg: '#0e2d3c',
    accentColor: '#c97a3c',
  },
  {
    id: 'urgent-care',
    title: 'Urgent Care',
    subtitle: '50-300% less than the ER',
    description:
      'Walk-in, no appointment needed. Board-certified providers treat all ages for non-life-threatening conditions. Extended hours, including evenings and weekends.',
    links: ['Walk-ins Welcome', 'Extended Hours', 'All Ages', 'Injuries & Illness'],
    gradient: 'linear-gradient(to top, rgba(5,15,21,0.95) 0%, rgba(5,15,21,0.4) 100%)',
    bg: '#162b38',
    accentColor: '#c97a3c',
  },
  {
    id: 'medspa',
    title: 'Medical Spa',
    subtitle: 'Physician-supervised aesthetics',
    description:
      'From Botox and fillers to CoolSculpting and laser treatments — all performed or supervised by board-certified providers. Beauty with the safety of medicine.',
    links: ['Botox & Dysport', 'Dermal Fillers', 'CoolSculpting®', 'Laser Treatments', 'HydraFacial'],
    gradient: 'linear-gradient(to top, rgba(5,15,21,0.95) 0%, rgba(5,15,21,0.4) 100%)',
    bg: '#1a2d38',
    accentColor: '#c97a3c',
    href: '/medspa',
  },
  {
    id: 'ketamine',
    title: 'Ketamine Therapy',
    subtitle: 'Licensed infusion therapy',
    description:
      'One of few licensed ketamine infusion clinics in the US. Physician-monitored treatment for PTSD, depression, anxiety, chronic pain, and more. Results within hours.',
    links: ['PTSD', 'Depression', 'Chronic Pain', 'OCD', 'Anxiety'],
    gradient: 'linear-gradient(to top, rgba(5,15,21,0.95) 0%, rgba(5,15,21,0.4) 100%)',
    bg: '#0d2230',
    accentColor: '#c97a3c',
  },
  {
    id: 'allergy',
    title: 'Allergy Services',
    subtitle: 'Unique rapid desensitization protocol',
    description:
      'Full allergy testing (skin prick, intradermal, blood test) for 75+ regional allergens. Rapid desensitization protocol unique to Victory — most patients see relief in months, not years.',
    links: ['Allergy Testing', 'Immunotherapy', 'Asthma', 'Rapid Desensitization'],
    gradient: 'linear-gradient(to top, rgba(5,15,21,0.95) 0%, rgba(5,15,21,0.4) 100%)',
    bg: '#132635',
    accentColor: '#c97a3c',
  },
]

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section" style={{ backgroundColor: 'var(--teal)' }}>
      <div className="container">
        {/* Heading */}
        <div ref={headingRef} style={{ marginBottom: '60px' }}>
          <div className="section-label" style={{ marginBottom: '16px' }}>
            What We Offer
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              color: 'var(--white)',
              maxWidth: '500px',
            }}
          >
            Integrated Care,{' '}
            <span style={{ color: 'var(--copper)' }}>All Under One Roof</span>
          </h2>
        </div>

        {/* Accordion Cards */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            height: '460px',
          }}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => setActiveIndex(index)}
              style={{
                flex: activeIndex === index ? 4 : 1,
                transition: 'flex 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
                backgroundColor: service.bg,
                borderRadius: '16px',
                border: `1px solid ${activeIndex === index ? 'rgba(201,122,60,0.5)' : 'rgba(255,255,255,0.08)'}`,
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                boxShadow:
                  activeIndex === index
                    ? '0 0 30px rgba(201,122,60,0.2)'
                    : 'none',
              }}
            >
              {/* Background gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: service.gradient,
                  zIndex: 1,
                }}
              />

              {/* Collapsed: vertical title */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  opacity: activeIndex === index ? 0 : 1,
                  transition: 'opacity 0.3s ease',
                }}
              >
                <div
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    transform: 'rotate(180deg)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.7)',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {service.title}
                </div>
              </div>

              {/* Expanded content */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  zIndex: 3,
                  opacity: activeIndex === index ? 1 : 0,
                  transform: `translateY(${activeIndex === index ? 0 : 20}px)`,
                  transition: 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s',
                }}
              >
                <div
                  style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--copper)',
                    marginBottom: '8px',
                    fontWeight: 500,
                  }}
                >
                  {service.subtitle}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.8rem',
                    fontWeight: 400,
                    color: 'var(--white)',
                    marginBottom: '12px',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.75)',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                    maxWidth: '360px',
                  }}
                >
                  {service.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {service.links.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontSize: '0.7rem',
                        padding: '4px 12px',
                        border: '1px solid rgba(201,122,60,0.4)',
                        borderRadius: '20px',
                        color: 'rgba(255,255,255,0.75)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  href={service.href || `/services#${service.id}`}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.75rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--copper)',
                    textDecoration: 'none',
                    fontWeight: 500,
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

        {/* View all services link */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/services" className="btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
