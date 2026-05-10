'use client'

import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const locations = [
  {
    name: 'Victory Main — Austin',
    address: '4303 Victory Drive',
    city: 'Austin, TX 78704',
    phone: '(512) 462-3627',
    hours: [
      { days: 'Mon–Fri', time: '8AM – 7PM' },
      { days: 'Saturday', time: '9AM – 5PM' },
      { days: 'Sunday', time: '12PM – 5PM' },
    ],
    services: ['Family Practice', 'Urgent Care', 'Allergy', 'MedSpa', 'Pharmacy', 'Walk-ins'],
    drawStation: 'Mon–Fri 8AM–5:30PM (no appt.)',
    mapUrl: 'https://maps.google.com/?q=4303+Victory+Drive+Austin+TX+78704',
  },
  {
    name: 'Victory MedSpa — Austin',
    address: '2108 W Ben White Blvd',
    city: 'Austin, TX 78704',
    phone: '(512) 969-6900',
    hours: [
      { days: 'Monday', time: '9AM – 4PM' },
      { days: 'Tue–Fri', time: '9AM – 5PM' },
      { days: 'Sat–Sun', time: 'CLOSED' },
    ],
    services: ['Botox & Fillers', 'Laser Treatments', 'CoolSculpting®', 'IV Therapy'],
    drawStation: null,
    mapUrl: 'https://maps.google.com/?q=2108+W+Ben+White+Blvd+Austin+TX+78704',
  },
  {
    name: 'Victory — Westlake Hills',
    address: '3811 Bee Caves Rd, Ste 100 & 101',
    city: 'Westlake Hills, TX 78746',
    phone: '(512) 462-3627',
    hours: [
      { days: 'Mon–Thu', time: '8AM – 7PM' },
      { days: 'Friday', time: '8AM – 5PM' },
      { days: 'Saturday', time: '9AM – 5PM' },
    ],
    services: ['Family Practice', 'Urgent Care', 'Allergy', 'MedSpa', 'MDVIP', 'Walk-ins'],
    drawStation: 'Mon–Fri 8AM–4PM (no appt.)',
    mapUrl: 'https://maps.google.com/?q=3811+Bee+Caves+Rd+Westlake+Hills+TX+78746',
  },
]

export default function LocationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const detailRef = useRef<HTMLDivElement>(null)
  const [activeLocation, setActiveLocation] = useState(0)
  const isFirstRender = useRef(true)

  // Section entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.locations-label',
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.locations-label', start: 'top 85%' },
        }
      )
      gsap.fromTo('.locations-heading',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.locations-heading', start: 'top 80%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  function animateDetailIn() {
    if (!detailRef.current) return
    gsap.fromTo(detailRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' }
    )
    // Hours stagger
    const hoursRows = detailRef.current.querySelectorAll('.hours-row')
    gsap.fromTo(hoursRows,
      { opacity: 0, x: -16 },
      { opacity: 1, x: 0, stagger: 0.06, duration: 0.3, ease: 'power2.out', delay: 0.15 }
    )
    // Service tags clip-path wipe
    const tags = detailRef.current.querySelectorAll('.service-tag')
    gsap.fromTo(tags,
      { clipPath: 'inset(0 100% 0 0)' },
      { clipPath: 'inset(0 0% 0 0)', stagger: 0.05, duration: 0.35, ease: 'power3.out', delay: 0.2 }
    )
  }

  // Cross-fade on location change
  useEffect(() => {
    if (!detailRef.current) return
    if (isFirstRender.current) {
      isFirstRender.current = false
      // First render: just animate in
      animateDetailIn()
      return
    }
    // Cross-fade out then in
    gsap.to(detailRef.current, {
      opacity: 0, y: -12, duration: 0.2, ease: 'power2.in',
      onComplete: animateDetailIn,
    })
  }, [activeLocation])

  const loc = locations[activeLocation]

  return (
    <section ref={sectionRef} className="section" style={{ backgroundColor: 'var(--dark-teal)' }}>
      <div className="container">
        <div className="locations-heading" style={{ marginBottom: '60px' }}>
          <div className="section-label locations-label" style={{ marginBottom: '16px' }}>
            Find Us
          </div>
          <h2 style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400, color: 'var(--white)',
          }}>
            3 Locations Across{' '}
            <span style={{ color: 'var(--copper)' }}>Central Texas</span>
          </h2>
        </div>

        <div className="loc-section-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1.5fr',
          gap: '40px', alignItems: 'start',
        }}>
          {/* Location Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {locations.map((location, i) => (
              <button
                key={i}
                onClick={() => setActiveLocation(i)}
                style={{
                  padding: '24px',
                  backgroundColor: activeLocation === i ? 'rgba(34,184,209,0.1)' : 'rgba(26,58,71,0.04)',
                  border: `1px solid ${activeLocation === i ? 'rgba(34,184,209,0.4)' : 'rgba(26,58,71,0.08)'}`,
                  borderRadius: '12px', cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{
                  fontSize: '0.875rem', fontWeight: 600,
                  color: activeLocation === i ? 'var(--copper)' : 'var(--white)',
                  marginBottom: '4px', fontFamily: 'var(--font-playfair)',
                  transition: 'color 0.3s ease',
                }}>
                  {location.name}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(26,58,71,0.5)' }}>
                  {location.address}, {location.city}
                </div>
              </button>
            ))}
          </div>

          {/* Location Detail */}
          <div
            ref={detailRef}
            className="loc-detail-panel"
            style={{
              backgroundColor: 'rgba(26,58,71,0.04)',
              border: '1px solid rgba(34,184,209,0.2)',
              borderRadius: '16px', padding: '40px',
            }}
          >
            <h3 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '1.5rem', fontWeight: 400,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {loc.name}
            </h3>

            <div className="loc-detail-inner-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '32px' }}>
              {/* Contact */}
              <div>
                <div style={{
                  fontSize: '0.65rem', letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--gold)',
                  marginBottom: '12px', fontWeight: 600,
                }}>
                  Contact
                </div>
                <div style={{ fontSize: '0.875rem', color: 'rgba(26,58,71,0.7)', marginBottom: '6px' }}>{loc.address}</div>
                <div style={{ fontSize: '0.875rem', color: 'rgba(26,58,71,0.7)', marginBottom: '12px' }}>{loc.city}</div>
                <a href={`tel:${loc.phone.replace(/\D/g, '')}`} style={{
                  fontSize: '1rem', color: 'var(--copper)',
                  textDecoration: 'none', fontWeight: 500,
                }}>
                  {loc.phone}
                </a>
              </div>

              {/* Hours */}
              <div>
                <div style={{
                  fontSize: '0.65rem', letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--gold)',
                  marginBottom: '12px', fontWeight: 600,
                }}>
                  Hours
                </div>
                {loc.hours.map((h) => (
                  <div key={h.days} className="hours-row" style={{
                    display: 'flex', justifyContent: 'space-between',
                    fontSize: '0.825rem', marginBottom: '6px',
                  }}>
                    <span style={{ color: 'rgba(26,58,71,0.6)' }}>{h.days}</span>
                    <span style={{ color: 'var(--white)', fontWeight: 500 }}>{h.time}</span>
                  </div>
                ))}
                {loc.drawStation && (
                  <div style={{
                    marginTop: '12px', fontSize: '0.75rem',
                    color: 'var(--gold)',
                    backgroundColor: 'rgba(34,109,122,0.1)',
                    border: '1px solid rgba(34,109,122,0.2)',
                    borderRadius: '6px', padding: '8px 12px',
                  }}>
                    Draw Station: {loc.drawStation}
                  </div>
                )}
              </div>
            </div>

            {/* Services */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{
                fontSize: '0.65rem', letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--gold)',
                marginBottom: '12px', fontWeight: 600,
              }}>
                Services at This Location
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {loc.services.map((s) => (
                  <span key={s} className="service-tag" style={{
                    fontSize: '0.75rem', padding: '5px 12px',
                    backgroundColor: 'rgba(34,184,209,0.1)',
                    border: '1px solid rgba(34,184,209,0.25)',
                    borderRadius: '20px', color: 'rgba(26,58,71,0.8)',
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={loc.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '12px 20px', fontSize: '0.75rem' }}
              >
                Get Directions
              </a>
              <a
                href="https://www.priviahealth.com/practice/victory-medical/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ padding: '12px 20px', fontSize: '0.75rem' }}
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
