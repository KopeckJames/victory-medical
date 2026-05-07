'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { type TeamMember, FILTER_CATEGORIES } from '@/lib/team-data'
import TeamDrawer from './TeamDrawer'

// Category accent colors
const CATEGORY_COLORS: Record<string, string> = {
  Physicians: '#22b8d1',
  'Nurse Practitioners': '#226d7a',
  'Physician Assistants': '#8ba8b8',
  Aesthetics: '#4fc8dd',
  'Ketamine & Mental Health': '#a08ab8',
  'Physical Medicine': '#6aa88a',
  MDVIP: '#22b8d1',
  Pharmacy: '#8bb8a8',
}

function getCategoryColor(categories: string[]) {
  for (const cat of categories) {
    if (CATEGORY_COLORS[cat]) return CATEGORY_COLORS[cat]
  }
  return 'var(--copper)'
}

interface TeamCardProps {
  member: TeamMember
  index: number
  onClick: () => void
}

function TeamCard({ member, index, onClick }: TeamCardProps) {
  const color = getCategoryColor(member.categories)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', delay: (index % 4) * 0.06 }
    )
  }, [index])

  return (
    <div
      ref={cardRef}
      className="card-depth"
      onClick={onClick}
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        opacity: 0,
        position: 'relative',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        gsap.to(e.currentTarget, { y: -5, duration: 0.3, ease: 'power2.out' })
      }}
      onMouseLeave={e => {
        gsap.to(e.currentTarget, { y: 0, duration: 0.3, ease: 'power2.in' })
      }}
    >
      {/* Color accent top bar */}
      <div style={{
        height: '3px',
        background: `linear-gradient(90deg, ${color}, transparent)`,
        flexShrink: 0,
      }} />

      {/* Card header */}
      <div style={{
        padding: '24px 24px 16px',
        display: 'flex',
        gap: '14px',
        alignItems: 'flex-start',
        flexShrink: 0,
      }}>
        {/* Avatar */}
        <div style={{
          width: '52px', height: '52px',
          borderRadius: '50%', flexShrink: 0,
          overflow: 'hidden',
          position: 'relative',
          border: `2px solid ${color}40`,
          boxShadow: `0 0 0 4px ${color}15`,
        }}>
          {member.imageUrl ? (
            <Image
              src={member.imageUrl}
              alt={member.name}
              fill
              sizes="52px"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          ) : (
            <div style={{
              width: '100%', height: '100%',
              background: `linear-gradient(135deg, ${color}30, ${color}10)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-playfair)',
              fontSize: '1rem', fontWeight: 700,
              color,
            }}>
              {member.initials.length > 2 ? member.initials.slice(0, 2) : member.initials}
            </div>
          )}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <h3 style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '0.95rem', fontWeight: 600,
            color: 'var(--white)', lineHeight: 1.3,
            marginBottom: '3px',
          }}>
            {member.name}
          </h3>
          <div style={{
            fontSize: '0.7rem', color,
            fontWeight: 500, lineHeight: 1.3,
            marginBottom: '2px',
          }}>
            {member.title}
          </div>
          <div style={{
            fontSize: '0.6rem', color: 'rgba(26,58,71,0.35)',
            lineHeight: 1.4,
          }}>
            {member.location}
          </div>
        </div>
      </div>

      {/* Bio */}
      <div style={{ padding: '0 24px 16px', flex: 1 }}>
        {member.notable && (
          <div style={{
            fontSize: '0.65rem',
            color: `${color}`,
            marginBottom: '10px',
            fontWeight: 500,
            letterSpacing: '0.02em',
            display: 'flex', alignItems: 'center', gap: '6px',
          }}>
            <span style={{
              width: '4px', height: '4px', borderRadius: '50%',
              backgroundColor: color, flexShrink: 0,
            }} />
            {member.notable}
          </div>
        )}
        <p style={{
          fontSize: '0.78rem',
          color: 'rgba(26,58,71,0.55)',
          lineHeight: 1.65,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {member.bio}
        </p>
      </div>

      {/* Specialties */}
      <div style={{
        padding: '0 24px 20px',
        display: 'flex', flexWrap: 'wrap', gap: '5px',
      }}>
        {member.specialties.slice(0, 3).map(s => (
          <span key={s} style={{
            fontSize: '0.6rem', padding: '3px 8px',
            backgroundColor: `${color}12`,
            border: `1px solid ${color}25`,
            borderRadius: '20px',
            color: 'rgba(26,58,71,0.65)',
            letterSpacing: '0.02em',
          }}>
            {s}
          </span>
        ))}
        {member.specialties.length > 3 && (
          <span style={{
            fontSize: '0.6rem', padding: '3px 8px',
            backgroundColor: 'rgba(26,58,71,0.04)',
            border: '1px solid rgba(26,58,71,0.08)',
            borderRadius: '20px',
            color: 'rgba(26,58,71,0.3)',
          }}>
            +{member.specialties.length - 3}
          </span>
        )}
      </div>

      {/* Languages */}
      {member.languages && member.languages.length > 1 && (
        <div style={{
          padding: '8px 24px 16px',
          borderTop: '1px solid rgba(26,58,71,0.05)',
          display: 'flex', alignItems: 'center', gap: '6px',
        }}>
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5" stroke={color} strokeWidth="1" strokeOpacity="0.6"/>
            <path d="M6 1C6 1 4 3.5 4 6C4 8.5 6 11 6 11" stroke={color} strokeWidth="1" strokeOpacity="0.6"/>
            <path d="M1 6H11" stroke={color} strokeWidth="1" strokeOpacity="0.6"/>
          </svg>
          <span style={{ fontSize: '0.6rem', color: 'rgba(26,58,71,0.4)' }}>
            {member.languages.join(' · ')}
          </span>
        </div>
      )}

      {/* Booking CTA */}
      {member.booking && (
        <div style={{
          padding: '12px 24px',
          borderTop: '1px solid rgba(26,58,71,0.05)',
          flexShrink: 0,
        }}>
          <a
            href={member.booking}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              fontSize: '0.68rem', letterSpacing: '0.08em',
              textTransform: 'uppercase', color,
              textDecoration: 'none', fontWeight: 600,
              transition: 'gap 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = '10px' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = '6px' }}
          >
            Book appointment
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 5H8M5.5 2.5L8 5L5.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      )}
    </div>
  )
}

interface TeamGridProps {
  team: TeamMember[]
}

export default function TeamGrid({ team }: TeamGridProps) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return team.filter(m => !m.anchor)
    return team.filter(m => !m.anchor && m.categories.includes(activeFilter))
  }, [activeFilter, team])

  // Re-animate grid on filter change with exit animation
  useEffect(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll('.card-depth')

    const runEntrance = () => {
      gsap.set(cards, { opacity: 0, y: 20 })
      gsap.to(cards, {
        opacity: 1, y: 0,
        duration: 0.45, stagger: 0.04,
        ease: 'power3.out', delay: 0.05,
      })
    }

    // If any cards are currently visible, fade them out first
    const visibleCards = Array.from(cards).filter(
      card => parseFloat((card as HTMLElement).style.opacity || '0') > 0
    )

    if (visibleCards.length > 0) {
      gsap.to(visibleCards, {
        opacity: 0, y: -12,
        duration: 0.2, stagger: 0.02,
        ease: 'power2.in',
        onComplete: runEntrance,
      })
    } else {
      runEntrance()
    }
  }, [filtered])

  return (
    <div>
      {/* Filter chips */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: '8px',
        marginBottom: '40px',
      }}>
        {FILTER_CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className="team-filter-chip"
            style={{
              padding: '7px 16px',
              borderRadius: '24px',
              border: `1px solid ${activeFilter === cat ? 'rgba(34,184,209,0.6)' : 'rgba(26,58,71,0.1)'}`,
              backgroundColor: activeFilter === cat ? 'rgba(34,184,209,0.15)' : 'transparent',
              color: activeFilter === cat ? 'var(--copper)' : 'rgba(26,58,71,0.5)',
              fontSize: '0.72rem', letterSpacing: '0.04em',
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontWeight: activeFilter === cat ? 600 : 400,
            }}
            onMouseEnter={e => {
              if (activeFilter !== cat) {
                e.currentTarget.style.borderColor = 'rgba(26,58,71,0.2)'
                e.currentTarget.style.color = 'rgba(26,58,71,0.75)'
              }
            }}
            onMouseLeave={e => {
              if (activeFilter !== cat) {
                e.currentTarget.style.borderColor = 'rgba(26,58,71,0.1)'
                e.currentTarget.style.color = 'rgba(26,58,71,0.5)'
              }
            }}
          >
            {cat}
            {cat !== 'All' && (
              <span style={{
                marginLeft: '6px', fontSize: '0.6rem',
                color: activeFilter === cat ? 'var(--copper)' : 'rgba(26,58,71,0.25)',
              }}>
                {team.filter(m => !m.anchor && m.categories.includes(cat)).length}
              </span>
            )}
          </button>
        ))}
        <span style={{
          marginLeft: 'auto', fontSize: '0.72rem',
          color: 'rgba(26,58,71,0.25)',
          display: 'flex', alignItems: 'center',
        }}>
          {filtered.length} provider{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '16px',
        }}
      >
        {filtered.map((member, i) => (
          <TeamCard key={member.name} member={member} index={i} onClick={() => setSelectedMember(member)} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{
          textAlign: 'center', padding: '80px 40px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px',
        }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: '50%',
            backgroundColor: 'rgba(34,184,209,0.08)',
            border: '1px solid rgba(34,184,209,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.4rem', color: 'rgba(34,184,209,0.5)',
          }}>
            ◎
          </div>
          <div style={{ fontSize: '1rem', color: 'rgba(26,58,71,0.5)', fontFamily: 'var(--font-playfair)' }}>
            No providers in this category
          </div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(26,58,71,0.3)', maxWidth: '300px', lineHeight: 1.6 }}>
            Try selecting a different department or view all providers.
          </div>
        </div>
      )}

      <TeamDrawer member={selectedMember} onClose={() => setSelectedMember(null)} />
    </div>
  )
}
