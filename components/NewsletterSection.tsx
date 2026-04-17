'use client'

import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function NewsletterSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const blobRef = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: cardRef.current, start: 'top 80%' },
        }
      )

      // Blob float
      gsap.to(blobRef.current, {
        y: -30, x: 20, scale: 1.1,
        duration: 8, ease: 'sine.inOut',
        yoyo: true, repeat: -1,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    // Simulate submission (replace with your actual email service)
    try {
      await new Promise(r => setTimeout(r, 800))
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: 'var(--dark-teal)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated blob */}
      <div
        ref={blobRef}
        style={{
          position: 'absolute',
          top: '-100px', right: '-150px',
          width: '500px', height: '500px',
          background: 'radial-gradient(ellipse, rgba(201,122,60,0.09) 0%, transparent 70%)',
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      />
      <div style={{
        position: 'absolute',
        bottom: '-80px', left: '-100px',
        width: '400px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(196,168,122,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <div
          ref={cardRef}
          style={{
            background: 'linear-gradient(135deg, rgba(201,122,60,0.08) 0%, rgba(14,45,60,0.95) 50%, rgba(196,168,122,0.05) 100%)',
            border: '1px solid rgba(201,122,60,0.2)',
            borderRadius: '28px',
            padding: 'clamp(40px, 6vw, 72px)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
            boxShadow: '0 40px 100px rgba(0,0,0,0.3)',
          }}
          className="newsletter-grid"
        >
          {/* Left */}
          <div>
            <div className="section-label" style={{ marginBottom: '16px' }}>
              Stay Informed
            </div>
            <h2 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 400, color: 'var(--white)',
              marginBottom: '16px', lineHeight: 1.25,
            }}>
              Your Health,{' '}
              <span style={{ color: 'var(--copper)' }}>Your Inbox</span>
            </h2>
            <p style={{
              fontSize: '1rem', color: 'var(--muted-text)',
              lineHeight: 1.75, marginBottom: '28px',
            }}>
              Get expert health tips, exclusive MedSpa offers, and the latest Victory Medical news — delivered monthly. No spam, unsubscribe anytime.
            </p>

            {/* Benefits list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Monthly health & wellness insights from our physicians',
                'Exclusive MedSpa promotions and seasonal offers',
                'New service announcements and event invitations',
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '10px',
                }}>
                  <div style={{
                    width: '18px', height: '18px', borderRadius: '50%',
                    background: 'rgba(201,122,60,0.2)',
                    border: '1px solid rgba(201,122,60,0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: '2px',
                  }}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4L3 5.5L6.5 2" stroke="var(--copper)" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '20px',
            padding: '40px',
          }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  background: 'rgba(34,197,94,0.15)',
                  border: '1px solid rgba(34,197,94,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px', fontSize: '1.5rem',
                }}>✓</div>
                <h3 style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '1.3rem', color: 'var(--white)', marginBottom: '12px',
                }}>You&apos;re on the list!</h3>
                <p style={{
                  fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6,
                }}>
                  Welcome to the Victory Medical community. Check your inbox for a welcome message.
                </p>
              </div>
            ) : (
              <>
                <h3 style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '1.2rem', fontWeight: 400,
                  color: 'var(--white)', marginBottom: '8px',
                }}>
                  Free Consultation Offer
                </h3>
                <p style={{
                  fontSize: '0.8rem', color: 'var(--copper)',
                  marginBottom: '24px', fontWeight: 500,
                }}>
                  Subscribe and receive a complimentary 15-min consultation
                </p>

                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '12px' }}>
                    <input
                      type="text"
                      placeholder="Your name"
                      style={{
                        width: '100%', padding: '12px 16px',
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '10px',
                        fontSize: '0.875rem', color: 'white',
                        outline: 'none', transition: 'border-color 0.2s',
                      }}
                      onFocus={e => { e.target.style.borderColor = 'rgba(201,122,60,0.4)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
                    />
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      style={{
                        width: '100%', padding: '12px 16px',
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '10px',
                        fontSize: '0.875rem', color: 'white',
                        outline: 'none', transition: 'border-color 0.2s',
                      }}
                      onFocus={e => { e.target.style.borderColor = 'rgba(201,122,60,0.4)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Subscribe & Claim Offer
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                </form>

                {status === 'error' && (
                  <p style={{
                    marginTop: '12px', fontSize: '0.8rem',
                    color: 'rgba(239,68,68,0.8)', textAlign: 'center',
                  }}>
                    Something went wrong. Please try again.
                  </p>
                )}

                <p style={{
                  marginTop: '16px', fontSize: '0.65rem',
                  color: 'rgba(255,255,255,0.25)', textAlign: 'center', lineHeight: 1.5,
                }}>
                  We respect your privacy. Unsubscribe at any time. No spam — ever.
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .newsletter-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  )
}
