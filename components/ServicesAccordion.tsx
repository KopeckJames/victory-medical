'use client'

import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export interface Service {
  id: string
  icon: string
  title: string
  subtitle: string
  description: string
  features: string[]
  callout?: string
}

interface ServicesAccordionProps {
  services: Service[]
}

export default function ServicesAccordion({ services }: ServicesAccordionProps) {
  const [openId, setOpenId] = useState<string | null>('primary-care')
  const prevOpenId = useRef<string | null>(null)
  const panelRefs = useRef<Map<string, HTMLDivElement>>(new Map())

  // Run open/close animations whenever openId changes
  useEffect(() => {
    const prev = prevOpenId.current

    // Close the previously open panel
    if (prev && prev !== openId) {
      const prevPanel = panelRefs.current.get(prev)
      if (prevPanel) {
        gsap.to(prevPanel, {
          height: 0,
          opacity: 0,
          duration: 0.32,
          ease: 'power2.inOut',
          onComplete: () => {
            prevPanel.style.overflow = 'hidden'
          },
        })
      }
    }

    // Open the new panel
    if (openId) {
      const panel = panelRefs.current.get(openId)
      if (panel) {
        // Measure natural height
        panel.style.height = 'auto'
        panel.style.overflow = 'visible'
        const targetHeight = panel.scrollHeight
        panel.style.height = '0px'
        panel.style.overflow = 'hidden'

        gsap.fromTo(
          panel,
          { height: 0, opacity: 0 },
          {
            height: targetHeight,
            opacity: 1,
            duration: 0.38,
            ease: 'power2.out',
            onComplete: () => {
              panel.style.height = 'auto'
              panel.style.overflow = 'visible'
            },
          }
        )
      }
    }

    prevOpenId.current = openId
  }, [openId])

  // Initialize: set all panels to height:0 except the default open one
  useEffect(() => {
    panelRefs.current.forEach((panel, id) => {
      if (id === 'primary-care') {
        panel.style.height = 'auto'
        panel.style.overflow = 'visible'
        panel.style.opacity = '1'
      } else {
        panel.style.height = '0px'
        panel.style.overflow = 'hidden'
        panel.style.opacity = '0'
      }
    })
    prevOpenId.current = 'primary-care'
  }, [])

  const handleHeaderMouseEnter = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    if (id !== openId) {
      gsap.to(e.currentTarget, {
        backgroundColor: 'rgba(255,255,255,0.02)',
        duration: 0.2,
        ease: 'power1.out',
      })
    }
  }

  const handleHeaderMouseLeave = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    if (id !== openId) {
      gsap.to(e.currentTarget, {
        backgroundColor: 'rgba(255,255,255,0)',
        duration: 0.2,
        ease: 'power1.out',
      })
    }
  }

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <>
      <style>{`
        .accordion-header:focus-visible {
          outline: 2px solid var(--copper);
          outline-offset: -2px;
        }
        @media (max-width: 860px) {
          .acc-content-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 640px) {
          .acc-header-inner { padding: 16px 18px !important; }
          .acc-content-inner { padding: 0 18px 24px !important; }
          .acc-features-grid { grid-template-columns: 1fr !important; }
          .acc-title { font-size: 1rem !important; white-space: normal !important; overflow: visible !important; text-overflow: clip !important; }
          .acc-category-tag { display: none !important; }
        }
      `}</style>

      <div
        style={{
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {services.map((service) => {
          const isOpen = openId === service.id

          return (
            <div
              key={service.id}
              id={service.id}
              style={{
                borderLeft: isOpen ? '3px solid var(--copper)' : '3px solid transparent',
                transition: 'border-color 0.25s ease',
              }}
            >
              {/* Header Row */}
              <div
                role="button"
                tabIndex={0}
                className="accordion-header acc-header-inner"
                onClick={() => handleToggle(service.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleToggle(service.id)
                  }
                }}
                onMouseEnter={(e) => handleHeaderMouseEnter(e, service.id)}
                onMouseLeave={(e) => handleHeaderMouseLeave(e, service.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 28px',
                  cursor: 'pointer',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  backgroundColor: isOpen ? 'rgba(201,122,60,0.05)' : 'rgba(255,255,255,0)',
                  transition: 'background-color 0.25s ease',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                }}
              >
                {/* Left side: icon + title + subtitle */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', minWidth: 0 }}>
                  {/* Icon box */}
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      flexShrink: 0,
                      borderRadius: '10px',
                      backgroundColor: 'rgba(201,122,60,0.15)',
                      border: '1px solid rgba(201,122,60,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      color: 'var(--copper)',
                    }}
                  >
                    {service.icon}
                  </div>

                  {/* Title + subtitle */}
                  <div style={{ minWidth: 0 }}>
                    <div
                      className="acc-title"
                      style={{
                        fontFamily: 'var(--font-playfair)',
                        fontSize: '1.1rem',
                        fontWeight: 400,
                        color: 'var(--white)',
                        lineHeight: 1.3,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {service.title}
                    </div>
                    <div
                      style={{
                        fontSize: '0.7rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--copper)',
                        marginTop: '2px',
                        fontWeight: 500,
                      }}
                    >
                      {service.subtitle}
                    </div>
                  </div>
                </div>

                {/* Right side: category tag + chevron */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
                  <div
                    className="acc-category-tag"
                    style={{
                      fontSize: '0.65rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: isOpen ? 'var(--copper)' : 'var(--gold)',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '4px',
                      backgroundColor: isOpen
                        ? 'rgba(201,122,60,0.12)'
                        : 'rgba(196,168,122,0.08)',
                      border: `1px solid ${isOpen ? 'rgba(201,122,60,0.25)' : 'rgba(196,168,122,0.15)'}`,
                      transition: 'all 0.25s ease',
                    }}
                  >
                    {service.id === 'primary-care' && 'Primary Care'}
                    {service.id === 'urgent-care' && 'Urgent Care'}
                    {service.id === 'allergy' && 'Allergy'}
                    {service.id === 'weight-loss' && 'Weight Loss'}
                    {service.id === 'hormones' && 'Longevity'}
                    {service.id === 'ketamine' && 'Mental Health'}
                    {service.id === 'physical-medicine' && 'Rehab'}
                    {service.id === 'pharmacy' && 'Pharmacy'}
                    {service.id === 'acupuncture' && 'Integrative'}
                    {service.id === 'regenerative-medicine' && 'Regenerative'}
                    {service.id === 'additional' && 'Specialty'}
                  </div>

                  {/* Animated chevron */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      color: isOpen ? 'var(--copper)' : 'rgba(255,255,255,0.4)',
                    }}
                  >
                    <path
                      d="M4.5 6.75L9 11.25L13.5 6.75"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Content Panel (GSAP-animated) */}
              <div
                ref={(el) => {
                  if (el) panelRefs.current.set(service.id, el)
                  else panelRefs.current.delete(service.id)
                }}
                style={{
                  height: 0,
                  overflow: 'hidden',
                  opacity: 0,
                }}
              >
                <div
                  className="acc-content-inner"
                  style={{ padding: '0 28px 28px' }}
                >
                  {/* Divider */}
                  <div
                    style={{
                      height: '1px',
                      backgroundColor: 'rgba(201,122,60,0.15)',
                      marginBottom: '28px',
                    }}
                  />

                  {/* 2-column content grid */}
                  <div
                    className="acc-content-grid"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1.2fr',
                      gap: '48px',
                      alignItems: 'start',
                    }}
                  >
                    {/* Left: description + callout */}
                    <div>
                      <p
                        style={{
                          fontSize: '1rem',
                          color: 'rgba(255,255,255,0.7)',
                          lineHeight: 1.75,
                          marginBottom: '24px',
                        }}
                      >
                        {service.description}
                      </p>
                      {service.callout && (
                        <div
                          style={{
                            padding: '16px 20px',
                            backgroundColor: 'rgba(201,122,60,0.08)',
                            borderLeft: '3px solid var(--copper)',
                            borderRadius: '0 8px 8px 0',
                            fontSize: '0.875rem',
                            color: 'rgba(255,255,255,0.75)',
                            fontStyle: 'italic',
                            marginBottom: '28px',
                          }}
                        >
                          {service.callout}
                        </div>
                      )}
                      <a
                        href="https://www.priviahealth.com/practice/victory-medical/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ padding: '12px 24px', fontSize: '0.8rem' }}
                      >
                        Book This Service
                      </a>
                    </div>

                    {/* Right: features grid */}
                    <div>
                      <div
                        style={{
                          fontSize: '0.65rem',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'var(--gold)',
                          marginBottom: '18px',
                          fontWeight: 600,
                        }}
                      >
                        What&apos;s Included
                      </div>
                      <div
                        className="acc-features-grid"
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: '10px',
                        }}
                      >
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '10px',
                              fontSize: '0.875rem',
                              color: 'rgba(255,255,255,0.7)',
                            }}
                          >
                            <span
                              style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--copper)',
                                marginTop: '7px',
                                flexShrink: 0,
                              }}
                            />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
