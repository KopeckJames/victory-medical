'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { type TeamMember } from '@/lib/team-data'

const CATEGORY_COLORS: Record<string, string> = {
  Physicians: '#c97a3c',
  'Nurse Practitioners': '#c4a87a',
  'Physician Assistants': '#8ba8b8',
  Aesthetics: '#e09a5c',
  'Ketamine & Mental Health': '#a08ab8',
  'Physical Medicine': '#6aa88a',
  MDVIP: '#c97a3c',
  Pharmacy: '#8bb8a8',
}

function getCategoryColor(categories: string[]) {
  for (const cat of categories) {
    if (CATEGORY_COLORS[cat]) return CATEGORY_COLORS[cat]
  }
  return 'var(--copper)'
}

interface TeamDrawerProps {
  member: TeamMember | null
  onClose: () => void
}

export default function TeamDrawer({ member, onClose }: TeamDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const isVisible = member !== null

  // Handle open animation when member changes to non-null
  useEffect(() => {
    if (!member || !drawerRef.current) return
    gsap.fromTo(
      drawerRef.current,
      { x: '100%' },
      { x: '0%', duration: 0.45, ease: 'power3.out' }
    )
  }, [member])

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && member) {
        handleClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [member])

  function handleClose() {
    if (!drawerRef.current) {
      onClose()
      return
    }
    gsap.to(drawerRef.current, {
      x: '100%',
      duration: 0.35,
      ease: 'power3.in',
      onComplete: onClose,
    })
  }

  if (!isVisible || !member) return null

  const color = getCategoryColor(member.categories)

  return (
    <>
      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={handleClose}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)',
          zIndex: 9000,
        }}
      />

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100vh',
          width: 'min(520px, 95vw)',
          backgroundColor: 'var(--dark-teal)',
          zIndex: 9001,
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Top bar */}
        <div style={{
          padding: '24px',
          display: 'flex',
          justifyContent: 'flex-end',
          flexShrink: 0,
        }}>
          <button
            onClick={handleClose}
            aria-label="Close"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.12)',
              backgroundColor: 'rgba(255,255,255,0.05)',
              color: 'rgba(255,255,255,0.7)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.color = 'var(--white)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Header section */}
        <div style={{
          padding: '0 32px 24px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            {/* Large avatar */}
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              flexShrink: 0,
              overflow: 'hidden',
              position: 'relative',
              border: `2px solid ${color}50`,
              boxShadow: `0 0 0 4px ${color}18`,
            }}>
              {member.imageUrl ? (
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  sizes="80px"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              ) : (
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(135deg, ${color}35, ${color}12)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color,
                }}>
                  {member.initials.length > 2 ? member.initials.slice(0, 2) : member.initials}
                </div>
              )}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <h2 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '1.4rem',
                fontWeight: 600,
                color: 'var(--white)',
                lineHeight: 1.25,
                marginBottom: '6px',
              }}>
                {member.name}
              </h2>
              <div style={{
                fontSize: '0.875rem',
                color: 'var(--copper)',
                fontWeight: 500,
                lineHeight: 1.35,
                marginBottom: '4px',
              }}>
                {member.title}
              </div>
              {member.credentials && (
                <div style={{
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.4)',
                  lineHeight: 1.45,
                  marginBottom: '10px',
                }}>
                  {member.credentials}
                </div>
              )}
              {/* Location pill */}
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '0.68rem',
                padding: '3px 10px',
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '20px',
                color: 'rgba(255,255,255,0.55)',
                letterSpacing: '0.02em',
              }}>
                <svg width="9" height="9" viewBox="0 0 10 12" fill="none">
                  <path d="M5 0C2.24 0 0 2.24 0 5C0 8.75 5 12 5 12C5 12 10 8.75 10 5C10 2.24 7.76 0 5 0ZM5 6.75C4.03 6.75 3.25 5.97 3.25 5C3.25 4.03 4.03 3.25 5 3.25C5.97 3.25 6.75 4.03 6.75 5C6.75 5.97 5.97 6.75 5 6.75Z" fill="currentColor" fillOpacity="0.6"/>
                </svg>
                {member.location}
              </span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '28px 32px', flex: 1 }}>

          {/* Notable callout */}
          {member.notable && (
            <div style={{
              borderLeft: `3px solid ${color}`,
              paddingLeft: '14px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
            }}>
              <span style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                backgroundColor: color,
                flexShrink: 0,
                marginTop: '5px',
              }} />
              <span style={{
                fontSize: '0.8rem',
                color: `${color}`,
                fontWeight: 500,
                lineHeight: 1.55,
                letterSpacing: '0.01em',
              }}>
                {member.notable}
              </span>
            </div>
          )}

          {/* Bio */}
          <div style={{ marginBottom: '24px' }}>
            <div className="section-label" style={{
              fontSize: '0.6rem',
              letterSpacing: '0.12em',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: '10px',
              textTransform: 'uppercase',
            }}>
              About
            </div>
            <p style={{
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.75,
            }}>
              {member.bio}
            </p>
          </div>

          {/* Specialties */}
          {member.specialties.length > 0 && (
            <div style={{ marginBottom: '24px' }}>
              <div style={{
                fontSize: '0.6rem',
                letterSpacing: '0.12em',
                color: 'rgba(255,255,255,0.3)',
                marginBottom: '10px',
                textTransform: 'uppercase',
              }}>
                Specialties
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {member.specialties.map(s => (
                  <span key={s} style={{
                    fontSize: '0.72rem',
                    padding: '4px 12px',
                    backgroundColor: `${color}12`,
                    border: `1px solid ${color}28`,
                    borderRadius: '20px',
                    color: 'rgba(255,255,255,0.7)',
                    letterSpacing: '0.02em',
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {member.languages && member.languages.length > 1 && (
            <div style={{ marginBottom: '24px' }}>
              <div style={{
                fontSize: '0.6rem',
                letterSpacing: '0.12em',
                color: 'rgba(255,255,255,0.3)',
                marginBottom: '10px',
                textTransform: 'uppercase',
              }}>
                Languages
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="5" stroke={color} strokeWidth="1" strokeOpacity="0.7"/>
                  <path d="M6 1C6 1 4 3.5 4 6C4 8.5 6 11 6 11" stroke={color} strokeWidth="1" strokeOpacity="0.7"/>
                  <path d="M1 6H11" stroke={color} strokeWidth="1" strokeOpacity="0.7"/>
                </svg>
                <span style={{
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.6)',
                }}>
                  {member.languages.join(' · ')}
                </span>
              </div>
            </div>
          )}

          {/* Location & Availability */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{
              fontSize: '0.6rem',
              letterSpacing: '0.12em',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: '10px',
              textTransform: 'uppercase',
            }}>
              Based At
            </div>
            <span style={{
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.6)',
            }}>
              {member.location}
            </span>
          </div>

          {/* Categories / Department */}
          {member.categories.length > 0 && (
            <div style={{ marginBottom: '8px' }}>
              <div style={{
                fontSize: '0.6rem',
                letterSpacing: '0.12em',
                color: 'rgba(255,255,255,0.3)',
                marginBottom: '10px',
                textTransform: 'uppercase',
              }}>
                Department
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {member.categories.map(cat => {
                  const catColor = CATEGORY_COLORS[cat] || 'var(--copper)'
                  return (
                    <span key={cat} style={{
                      fontSize: '0.7rem',
                      padding: '4px 12px',
                      backgroundColor: `${catColor}10`,
                      border: `1px solid ${catColor}30`,
                      borderRadius: '20px',
                      color: catColor,
                      letterSpacing: '0.02em',
                      fontWeight: 500,
                    }}>
                      {cat}
                    </span>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div style={{
          padding: '24px 32px',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          flexShrink: 0,
          position: 'sticky',
          bottom: 0,
          backgroundColor: 'var(--dark-teal)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          {member.booking && (
            <a
              href={member.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                display: 'block',
                textAlign: 'center',
                width: '100%',
                textDecoration: 'none',
                boxSizing: 'border-box',
              }}
            >
              Book Appointment
            </a>
          )}
          <Link
            href="/about"
            onClick={handleClose}
            style={{
              display: 'block',
              textAlign: 'center',
              fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.45)',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              padding: '8px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.75)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)' }}
          >
            View full team &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}
