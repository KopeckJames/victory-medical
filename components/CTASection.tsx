'use client'

import { useRef, useEffect } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const blobRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const leftContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section label clipPath wipe
      gsap.fromTo('.cta-section-label',
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.cta-section-label', start: 'top 85%' },
        }
      )

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      })

      // Left content lines stagger
      const leftLines = leftContentRef.current?.querySelectorAll('[data-line]')
      if (leftLines?.length) {
        tl.fromTo(leftLines,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out' }
        )
      }

      // Card entrance
      tl.fromTo(cardRef.current,
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      )

      // Ambient blob breathe (infinite)
      gsap.to(blobRef.current, {
        scale: 1.15,
        duration: 6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })

      // Button shimmer on hover
      const btns = sectionRef.current?.querySelectorAll('.shimmer-btn')
      btns?.forEach((btn) => {
        const shimmer = btn.querySelector('.btn-shimmer') as HTMLElement
        if (!shimmer) return
        btn.addEventListener('mouseenter', () => {
          gsap.fromTo(shimmer,
            { x: '-100%', opacity: 0.4 },
            { x: '150%', opacity: 0, duration: 0.6, ease: 'power2.in' }
          )
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
        backgroundColor: 'var(--teal)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient blob */}
      <div
        ref={blobRef}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(34,184,209,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
          willChange: 'transform',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="cta-grid">
          {/* Left */}
          <div ref={leftContentRef}>
            <div data-line className="section-label cta-section-label" style={{ marginBottom: '20px' }}>
              Your Health Journey Starts Here
            </div>
            <h2 data-line style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400, color: 'var(--white)',
              marginBottom: '24px', lineHeight: 1.2,
            }}>
              Ready to Experience{' '}
              <span style={{ color: 'var(--copper)' }}>Integrated Healthcare?</span>
            </h2>
            <p data-line style={{
              fontSize: '1rem', color: 'var(--muted-text)',
              lineHeight: 1.8, maxWidth: '480px',
            }}>
              Whether you need same-day urgent care, a physician-supervised peptide therapy protocol, hormone optimization, or aesthetic treatment — Victory Medical is here for you.
            </p>
          </div>

          {/* Right — booking card */}
          <div
            ref={cardRef}
            className="cta-card"
            style={{
              backgroundColor: 'rgba(26,58,71,0.04)',
              border: '1px solid rgba(34,184,209,0.2)',
              borderRadius: '20px',
              padding: '48px',
            }}
          >
            <h3 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '1.4rem', fontWeight: 400,
              color: 'var(--white)', marginBottom: '8px',
            }}>
              Book Your Appointment
            </h3>
            <p style={{
              fontSize: '0.875rem', color: 'rgba(26,58,71,0.5)',
              marginBottom: '32px',
            }}>
              Available online 24/7 or call us during business hours
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href="https://www.priviahealth.com/practice/victory-medical/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shimmer-btn"
                style={{ justifyContent: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
              >
                <span className="btn-shimmer" style={{
                  position: 'absolute', top: 0, left: 0,
                  width: '60%', height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(26,58,71,0.25), transparent)',
                  transform: 'translateX(-100%)',
                  pointerEvents: 'none',
                }} />
                Book Primary Care / Urgent Care
              </a>
              <a
                href="https://victory.janeapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline shimmer-btn"
                style={{ justifyContent: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
              >
                <span className="btn-shimmer" style={{
                  position: 'absolute', top: 0, left: 0,
                  width: '60%', height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(26,58,71,0.12), transparent)',
                  transform: 'translateX(-100%)',
                  pointerEvents: 'none',
                }} />
                Book MedSpa Appointment
              </a>
              <a
                href="tel:5124623627"
                style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', gap: '8px',
                  padding: '14px', fontSize: '0.875rem',
                  color: 'var(--gold)', textDecoration: 'none',
                  borderTop: '1px solid rgba(26,58,71,0.08)',
                  marginTop: '8px', paddingTop: '20px', fontWeight: 500,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14.5 11.5L12 14C9.5 11.5 4.5 6.5 2 4l2.5-2.5L7 5l-1.5 1.5C6.5 7.5 8.5 9.5 9.5 10.5L11 9l3.5 2.5z" fill="currentColor"/>
                </svg>
                Or call (512) 462-3627
              </a>
            </div>

            <div style={{
              marginTop: '28px', paddingTop: '24px',
              borderTop: '1px solid rgba(26,58,71,0.08)',
              display: 'flex', gap: '16px', flexWrap: 'wrap',
            }}>
              {['Privia Medical Group', 'Walk-ins Welcome', 'All Insurance'].map((badge) => (
                <span key={badge} style={{
                  fontSize: '0.7rem', letterSpacing: '0.05em',
                  color: 'rgba(26,58,71,0.4)',
                  display: 'flex', alignItems: 'center', gap: '6px',
                }}>
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    backgroundColor: 'var(--copper)', flexShrink: 0,
                  }} />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
