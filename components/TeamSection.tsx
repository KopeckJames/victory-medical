'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const team = [
  {
    name: 'Dr. William Franklin, MD',
    title: 'Founder & Medical Director',
    credentials: 'MD — UTMB Galveston · Provider Since 1983',
    bio: 'Dr. Franklin founded Victory Medical in 1996 with a vision for integrated healthcare that treats the whole person. He has specialized training in Natural Hormone Replacement Therapy and Anti-Aging Medicine.',
    initials: 'WF',
    imageUrl: 'https://victorymed.com/wp-content/uploads/2018/12/img_0779-crop-u60940.jpg',
    specialties: ['Integrative Medicine', 'Hormone Therapy', 'Anti-Aging', 'Primary Care'],
  },
  {
    name: 'Melissa Gabrielli, DNP',
    title: 'Ketamine Therapist & MedSpa Injector',
    credentials: 'APRN, FNP-BC, PMHNP-BC · Dual Board-Certified',
    bio: 'Doctorate in Nursing from University of South Alabama. Dual board-certified in mental health and family practice. Expert in ketamine therapy for PTSD, trauma, and complex psychiatric conditions.',
    initials: 'MG',
    imageUrl: null,
    specialties: ['Ketamine Therapy', 'Botox', 'Dermal Fillers', 'Mental Health'],
  },
  {
    name: 'Ola Zylka, MSN, FNP-C',
    title: 'Nurse Practitioner & Nurse Injector',
    credentials: 'MSN · Aesthetic Specialist · Neurotoxin Certified',
    bio: 'Five-plus years in nursing and aesthetics. Texas Laser and Aesthetics certified. Passionate about combining injectables, lasers, and advanced facial treatments for natural, comprehensive results.',
    initials: 'OZ',
    imageUrl: null,
    specialties: ['Botox & Dysport', 'Sculptra', 'Lasers', 'Advanced Facials'],
  },
]

export default function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.team-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.team-card', start: 'top 85%' },
        }
      )
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
        <div
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
              Our Providers
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 400,
                color: 'var(--white)',
              }}
            >
              Meet Your Care Team
            </h2>
          </div>
          <Link href="/about" className="btn-outline" style={{ padding: '12px 24px', fontSize: '0.75rem' }}>
            Full Team
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
        >
          {team.map((member, i) => (
            <div
              key={i}
              className="team-card"
              style={{
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(201,122,60,0.4)'
                el.style.transform = 'translateY(-6px)'
                el.style.boxShadow = '0 20px 40px rgba(5,15,21,0.4)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(255,255,255,0.08)'
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
              }}
            >
              {/* Photo/Avatar area */}
              <div
                style={{
                  height: '200px',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: 'var(--dark-teal)',
                }}
              >
                {member.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `linear-gradient(135deg, var(--light-teal) 0%, var(--dark-teal) 100%)`,
                    }}
                  >
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--lightest-teal)',
                        border: '2px solid rgba(201,122,60,0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-playfair)',
                        fontSize: '1.8rem',
                        color: 'var(--gold)',
                      }}
                    >
                      {member.initials}
                    </div>
                  </div>
                )}
                {/* Gradient overlay on image */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '60px',
                    background: 'linear-gradient(to top, rgba(14,45,60,0.8), transparent)',
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: '28px' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.1rem',
                    fontWeight: 400,
                    color: 'var(--white)',
                    marginBottom: '4px',
                  }}
                >
                  {member.name}
                </h3>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--copper)',
                    marginBottom: '4px',
                    fontWeight: 500,
                  }}
                >
                  {member.title}
                </div>
                <div
                  style={{
                    fontSize: '0.7rem',
                    color: 'rgba(255,255,255,0.4)',
                    marginBottom: '16px',
                    lineHeight: 1.5,
                  }}
                >
                  {member.credentials}
                </div>
                <p
                  style={{
                    fontSize: '0.825rem',
                    color: 'rgba(255,255,255,0.65)',
                    lineHeight: 1.7,
                    marginBottom: '16px',
                  }}
                >
                  {member.bio}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {member.specialties.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontSize: '0.65rem',
                        padding: '3px 10px',
                        backgroundColor: 'rgba(201,122,60,0.08)',
                        border: '1px solid rgba(201,122,60,0.2)',
                        borderRadius: '20px',
                        color: 'rgba(255,255,255,0.7)',
                        letterSpacing: '0.03em',
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
