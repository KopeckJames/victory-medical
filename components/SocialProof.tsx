'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const NOTIFICATIONS = [
  { name: 'Sarah M.', location: 'Austin', service: 'Botox consultation', time: '2 min ago', icon: '✦' },
  { name: 'James R.', location: 'Westlake Hills', service: 'Primary Care appointment', time: '5 min ago', icon: '♥' },
  { name: 'Emily T.', location: 'Austin', service: 'CoolSculpting session', time: '8 min ago', icon: '◈' },
  { name: 'David K.', location: 'Austin', service: 'Ketamine therapy consult', time: '12 min ago', icon: '⊕' },
  { name: 'Maria L.', location: 'South Austin', service: 'HydraFacial treatment', time: '14 min ago', icon: '✦' },
  { name: 'Tom B.', location: 'Round Rock', service: 'Allergy testing', time: '18 min ago', icon: '♥' },
  { name: 'Ashley W.', location: 'Austin', service: 'Medical weight loss program', time: '22 min ago', icon: '◈' },
  { name: 'Chris N.', location: 'Westlake', service: 'Hormone therapy consult', time: '25 min ago', icon: '⊕' },
]

export default function SocialProof() {
  const [current, setCurrent] = useState<number | null>(null)
  const [visible, setVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const indexRef = useRef(0)

  useEffect(() => {
    // Start after 4 seconds
    const startTimer = setTimeout(() => {
      showNext()
    }, 4000)

    return () => clearTimeout(startTimer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const showNext = () => {
    const i = indexRef.current % NOTIFICATIONS.length
    indexRef.current++
    setCurrent(i)
    setVisible(true)

    // Animate in
    setTimeout(() => {
      if (containerRef.current) {
        gsap.fromTo(containerRef.current,
          { x: -30, opacity: 0, scale: 0.95 },
          { x: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.4)' }
        )
      }
    }, 10)

    // Auto-dismiss after 4.5s
    setTimeout(() => {
      dismiss()
    }, 4500)
  }

  const dismiss = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        x: -20, opacity: 0, scale: 0.95,
        duration: 0.35, ease: 'power2.in',
        onComplete: () => {
          setVisible(false)
          // Show next after 6-10s delay
          const delay = 6000 + Math.random() * 4000
          setTimeout(showNext, delay)
        },
      })
    }
  }

  if (!visible || current === null) return null

  const notif = NOTIFICATIONS[current]

  return (
    <div
      ref={containerRef}
      onClick={dismiss}
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 8000,
        cursor: 'pointer',
        opacity: 0,
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        backgroundColor: '#071820',
        border: '1px solid rgba(201,122,60,0.25)',
        borderRadius: '14px',
        padding: '12px 16px',
        boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
        maxWidth: '320px',
        backdropFilter: 'blur(20px)',
      }}>
        {/* Avatar */}
        <div style={{
          width: '40px', height: '40px', borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--copper) 0%, #e09a5c 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.7rem', fontWeight: 700, color: 'white',
          flexShrink: 0,
          fontFamily: 'var(--font-playfair)',
        }}>
          {notif.name.split(' ').map(w => w[0]).join('')}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: '0.75rem', fontWeight: 600,
            color: 'var(--white)', marginBottom: '2px',
            display: 'flex', alignItems: 'center', gap: '6px',
          }}>
            {notif.name}
            <span style={{
              fontSize: '0.6rem', color: 'var(--gold)',
              letterSpacing: '0.05em',
            }}>· {notif.location}</span>
          </div>
          <div style={{
            fontSize: '0.72rem',
            color: 'rgba(255,255,255,0.6)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            <span style={{ color: 'var(--copper)' }}>Just booked</span> a {notif.service}
          </div>
        </div>

        <div style={{
          fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)',
          flexShrink: 0, letterSpacing: '0.05em',
        }}>
          {notif.time}
        </div>
      </div>
    </div>
  )
}
