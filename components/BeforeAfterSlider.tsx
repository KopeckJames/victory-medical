'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface SlideItem {
  label: string
  beforeLabel: string
  afterLabel: string
  beforeImg: string
  afterImg: string
  treatment: string
  timeframe: string
}

const slides: SlideItem[] = [
  {
    label: 'Botox — Forehead Lines',
    beforeLabel: 'Before',
    afterLabel: '2 Weeks After',
    beforeImg: '/before-after/botox-before.jpg',
    afterImg: '/before-after/botox-after.jpg',
    treatment: 'Botox / Dysport',
    timeframe: '2–4 weeks for full results',
  },
  {
    label: 'CoolSculpting — Abdomen',
    beforeLabel: 'Before',
    afterLabel: '3 Months After',
    beforeImg: '/before-after/coolsculpting-before.jpg',
    afterImg: '/before-after/coolsculpting-after.jpg',
    treatment: 'CoolSculpting®',
    timeframe: '1–3 months for full results',
  },
  {
    label: 'HydraFacial — Skin Texture',
    beforeLabel: 'Before',
    afterLabel: 'Immediately After',
    beforeImg: '/before-after/hydrafacial-before.jpg',
    afterImg: '/before-after/hydrafacial-after.jpg',
    treatment: 'HydraFacial MD',
    timeframe: 'Immediate results, zero downtime',
  },
  {
    label: 'Dermal Fillers — Lips',
    beforeLabel: 'Before',
    afterLabel: '1 Week After',
    beforeImg: '/before-after/fillers-before.jpg',
    afterImg: '/before-after/fillers-after.jpg',
    treatment: 'Dermal Fillers',
    timeframe: '1–2 weeks for final look',
  },
]

interface SliderProps {
  slide: SlideItem
}

function Slider({ slide }: SliderProps) {
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const handleRef = useRef<HTMLDivElement>(null)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(5, Math.min(95, x)))
  }, [])

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  useEffect(() => {
    if (!isDragging) return
    const onMove = (e: MouseEvent) => updatePosition(e.clientX)
    const onUp = () => setIsDragging(false)
    const onTouchMove = (e: TouchEvent) => updatePosition(e.touches[0].clientX)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onTouchMove)
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onUp)
    }
  }, [isDragging, updatePosition])

  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    updatePosition(e.touches[0].clientX)
  }

  // Handle cursor style
  useEffect(() => {
    if (isDragging) {
      document.body.style.cursor = 'ew-resize'
      document.body.style.userSelect = 'none'
    } else {
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
    }
    return () => {
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
    }
  }, [isDragging])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '340px',
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'ew-resize',
        userSelect: 'none',
      }}
      onMouseDown={e => { setIsDragging(true); updatePosition(e.clientX) }}
      onTouchStart={onTouchStart}
    >
      {/* After (full width, behind) */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${slide.afterImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(5,15,21,0.45) 0%, transparent 50%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '16px', right: '16px',
          fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'var(--copper)', fontWeight: 600,
          backgroundColor: 'rgba(5,15,21,0.7)',
          padding: '4px 10px', borderRadius: '20px',
          border: '1px solid rgba(201,122,60,0.4)',
          backdropFilter: 'blur(8px)',
        }}>
          {slide.afterLabel}
        </div>
      </div>

      {/* Before (clipped) */}
      <div style={{
        position: 'absolute', inset: 0,
        clipPath: `inset(0 ${100 - position}% 0 0)`,
        backgroundImage: `url(${slide.beforeImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: isDragging ? 'none' : 'clip-path 0.05s',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(5,15,21,0.45) 0%, transparent 50%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '16px', left: '16px',
          fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.9)', fontWeight: 600,
          backgroundColor: 'rgba(5,15,21,0.7)',
          padding: '4px 10px', borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.2)',
          backdropFilter: 'blur(8px)',
        }}>
          {slide.beforeLabel}
        </div>
      </div>

      {/* Divider line */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0,
        left: `${position}%`,
        width: '2px',
        backgroundColor: 'white',
        transform: 'translateX(-1px)',
        zIndex: 10,
        boxShadow: '0 0 10px rgba(255,255,255,0.5)',
      }} />

      {/* Handle */}
      <div
        ref={handleRef}
        onMouseDown={onMouseDown}
        style={{
          position: 'absolute',
          top: '50%', left: `${position}%`,
          transform: 'translate(-50%, -50%)',
          width: '44px', height: '44px',
          borderRadius: '50%',
          backgroundColor: 'white',
          zIndex: 11,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          cursor: 'ew-resize',
          gap: '4px',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M5 3L2 8L5 13" stroke="#c97a3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 3L14 8L11 13" stroke="#c97a3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Drag hint (hidden after first interaction) */}
      {position === 50 && (
        <div style={{
          position: 'absolute', top: '12px', left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)', zIndex: 12,
          pointerEvents: 'none',
          animation: 'pulse-hint 2s ease-in-out infinite',
        }}>
          ← Drag to compare →
        </div>
      )}
    </div>
  )
}

export default function BeforeAfterGallery() {
  const [activeSlide, setActiveSlide] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.ba-label',
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.ba-label', start: 'top 85%' },
        }
      )
      gsap.fromTo('.ba-heading',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.ba-heading', start: 'top 80%' },
        }
      )
      gsap.fromTo('.ba-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.ba-card', start: 'top 80%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="section"
      style={{
        backgroundColor: 'var(--dark-teal)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(201,122,60,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ marginBottom: '48px' }}>
          <div className="section-label ba-label" style={{ marginBottom: '16px' }}>
            Real Results
          </div>
          <h2 className="ba-heading" style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400, color: 'var(--white)',
            marginBottom: '16px',
          }}>
            See the Difference{' '}
            <span style={{ color: 'var(--copper)' }}>Yourself</span>
          </h2>
          <p style={{
            fontSize: '1rem', color: 'var(--muted-text)',
            maxWidth: '480px', lineHeight: 1.7,
          }}>
            Drag the slider to compare before and after results from our most popular treatments. Results are typical — individual outcomes vary.
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px',
        }}>
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: `1px solid ${activeSlide === i ? 'rgba(201,122,60,0.6)' : 'rgba(255,255,255,0.1)'}`,
                backgroundColor: activeSlide === i ? 'rgba(201,122,60,0.15)' : 'transparent',
                color: activeSlide === i ? 'var(--copper)' : 'rgba(255,255,255,0.5)',
                fontSize: '0.75rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontWeight: activeSlide === i ? 600 : 400,
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Slider card */}
        <div
          className="ba-card"
          style={{
            backgroundColor: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(201,122,60,0.15)',
            borderRadius: '20px',
            padding: '32px',
          }}
        >
          <Slider slide={slides[activeSlide]} />

          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginTop: '24px', flexWrap: 'wrap', gap: '16px',
          }}>
            <div>
              <div style={{
                fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--gold)', marginBottom: '4px',
              }}>Treatment</div>
              <div style={{
                fontFamily: 'var(--font-playfair)', fontSize: '1.1rem',
                color: 'var(--white)',
              }}>{slides[activeSlide].treatment}</div>
            </div>
            <div>
              <div style={{
                fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--gold)', marginBottom: '4px',
              }}>Timeline</div>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>
                {slides[activeSlide].timeframe}
              </div>
            </div>
            <a
              href="https://victory.janeapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '12px 24px', fontSize: '0.8rem' }}
            >
              Book This Treatment
            </a>
          </div>
        </div>

        <div style={{
          marginTop: '16px', textAlign: 'center',
          fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', lineHeight: 1.5,
        }}>
          * Results illustrated are representative. Individual outcomes vary. Consult with our providers for personalized expectations.
        </div>
      </div>

      <style>{`
        @keyframes pulse-hint {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  )
}
