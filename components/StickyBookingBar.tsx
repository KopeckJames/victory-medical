'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function StickyBookingBar() {
  const barRef = useRef<HTMLDivElement>(null)
  const bookBtnRef = useRef<HTMLAnchorElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: document.body,
        start: 'top -80vh',
        onEnter: () => {
          setVisible(true)
          if (barRef.current) {
            gsap.fromTo(barRef.current,
              { y: 80, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.4)' }
            )
          }
        },
        onLeaveBack: () => {
          if (barRef.current) {
            gsap.to(barRef.current, {
              y: 80, opacity: 0, duration: 0.3, ease: 'power2.in',
              onComplete: () => setVisible(false),
            })
          }
        },
      })
    })

    // Pulse the Book Now button every 30s to re-attract attention
    const pulseInterval = setInterval(() => {
      if (bookBtnRef.current) {
        gsap.timeline()
          .to(bookBtnRef.current, { scale: 1.06, duration: 0.18, ease: 'power2.out' })
          .to(bookBtnRef.current, { scale: 1, duration: 0.28, ease: 'elastic.out(1.2, 0.5)' })
      }
    }, 30000)

    return () => {
      ctx.revert()
      clearInterval(pulseInterval)
    }
  }, [])

  return (
    <div
      ref={barRef}
      id="sticky-booking-bar"
      style={{
        position: 'fixed',
        bottom: '92px',  // Above the AI chat button
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 8500,
        opacity: 0,
        pointerEvents: visible ? 'all' : 'none',
        transition: 'opacity 0.2s ease, transform 0.2s ease',
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        backgroundColor: 'var(--dark-teal)',
        border: '1px solid rgba(201,122,60,0.3)',
        borderRadius: '40px',
        padding: '10px 10px 10px 20px',
        boxShadow: '0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
        backdropFilter: 'blur(20px)',
      }}>
        <div className="booking-bar-text" style={{
          display: 'flex', alignItems: 'center', gap: '8px',
        }}>
          <span style={{
            width: '7px', height: '7px', borderRadius: '50%',
            backgroundColor: '#22c55e', flexShrink: 0,
            boxShadow: '0 0 6px rgba(34,197,94,0.6)',
          }} />
          <span style={{
            fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)',
            letterSpacing: '0.03em', whiteSpace: 'nowrap',
          }}>
            Accepting new patients
          </span>
        </div>

        <div className="booking-bar-text" style={{
          width: '1px', height: '16px',
          backgroundColor: 'rgba(255,255,255,0.1)',
        }} />

        <div style={{ display: 'flex', gap: '8px' }}>
          <a
            href="tel:5124623627"
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '8px 14px',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.12)',
              fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(201,122,60,0.4)'
              e.currentTarget.style.color = 'var(--copper)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
            }}
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M14.5 11.5L12 14C9.5 11.5 4.5 6.5 2 4l2.5-2.5L7 5l-1.5 1.5C6.5 7.5 8.5 9.5 9.5 10.5L11 9l3.5 2.5z" fill="currentColor"/>
            </svg>
            (512) 462-3627
          </a>
          <a
            ref={bookBtnRef}
            href="https://www.priviahealth.com/practice/victory-medical/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '8px 18px', fontSize: '0.75rem', borderRadius: '24px', display: 'inline-block' }}
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  )
}
