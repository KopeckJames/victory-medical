'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FEATURED_TEAM } from '@/lib/team-data'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section label clipPath wipe
      gsap.fromTo('.team-section-label',
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.team-section-label', start: 'top 85%' },
        }
      )

      const cards = sectionRef.current?.querySelectorAll('.team-card')
      if (!cards?.length) return

      gsap.set(cards, { willChange: 'transform' })

      cards.forEach((card, i) => {
        const curtain = card.querySelector('.photo-curtain') as HTMLElement
        const img = card.querySelector('img, .avatar-placeholder') as HTMLElement
        const tags = card.querySelectorAll('.specialty-tag')

        // Curtain wipe reveal
        if (curtain) {
          gsap.fromTo(curtain,
            { yPercent: 0 },
            {
              yPercent: -100, duration: 1, ease: 'power4.inOut',
              scrollTrigger: { trigger: card, start: 'top 80%', once: true },
              delay: i * 0.2,
            }
          )
        }

        // GSAP hover
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -6, boxShadow: '0 20px 40px rgba(5,15,21,0.5)', duration: 0.4, ease: 'power3.out' })
          if (img) gsap.to(img, { scale: 1.04, duration: 0.6, ease: 'power2.out' })
          if (tags.length) {
            gsap.fromTo(tags,
              { opacity: 0.4, x: -8 },
              { opacity: 1, x: 0, stagger: 0.04, duration: 0.3, ease: 'power2.out' }
            )
          }
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, boxShadow: 'none', duration: 0.4, ease: 'power3.inOut' })
          if (img) gsap.to(img, { scale: 1, duration: 0.5, ease: 'power2.inOut' })
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section" style={{ backgroundColor: 'var(--teal)' }}>
      <div className="container">
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', marginBottom: '60px',
          flexWrap: 'wrap', gap: '24px',
        }}>
          <div>
            <div className="section-label team-section-label" style={{ marginBottom: '16px' }}>
              Our Providers
            </div>
            <h2 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400, color: 'var(--white)',
            }}>
              Meet Your Care Team
            </h2>
          </div>
          <Link href="/about" className="btn-outline" style={{ padding: '12px 24px', fontSize: '0.75rem' }}>
            Full Team
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {FEATURED_TEAM.map((member, i) => (
            <div
              key={i}
              className="team-card"
              style={{
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              {/* Photo area with curtain */}
              <div style={{
                height: '200px',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'var(--dark-teal)',
              }}>
                {member.imageUrl ? (
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    sizes="200px"
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                ) : (
                  <div
                    className="avatar-placeholder"
                    style={{
                      width: '100%', height: '100%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'linear-gradient(135deg, var(--light-teal) 0%, var(--dark-teal) 100%)',
                    }}
                  >
                    <div style={{
                      width: '80px', height: '80px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--lightest-teal)',
                      border: '2px solid rgba(201,122,60,0.4)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-playfair)',
                      fontSize: '1.8rem', color: 'var(--gold)',
                    }}>
                      {member.initials}
                    </div>
                  </div>
                )}
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  height: '60px',
                  background: 'linear-gradient(to top, rgba(14,45,60,0.8), transparent)',
                }} />
                {/* Curtain overlay */}
                <div
                  className="photo-curtain"
                  style={{
                    position: 'absolute', inset: 0,
                    backgroundColor: 'var(--dark-teal)',
                    zIndex: 10,
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: '28px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '1.1rem', fontWeight: 400,
                  color: 'var(--white)', marginBottom: '4px',
                }}>
                  {member.name}
                </h3>
                <div style={{
                  fontSize: '0.75rem', color: 'var(--copper)',
                  marginBottom: '4px', fontWeight: 500,
                }}>
                  {member.title}
                </div>
                <div style={{
                  fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)',
                  marginBottom: '16px', lineHeight: 1.5,
                }}>
                  {member.credentials}
                </div>
                <p style={{
                  fontSize: '0.825rem', color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.7, marginBottom: '16px',
                }}>
                  {member.bio}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {member.specialties.map((s) => (
                    <span key={s} className="specialty-tag" style={{
                      fontSize: '0.65rem', padding: '3px 10px',
                      backgroundColor: 'rgba(201,122,60,0.08)',
                      border: '1px solid rgba(201,122,60,0.2)',
                      borderRadius: '20px', color: 'rgba(255,255,255,0.7)',
                      letterSpacing: '0.03em',
                    }}>
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
