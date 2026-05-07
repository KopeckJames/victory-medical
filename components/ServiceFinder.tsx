'use client'

import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'

interface Step {
  question: string
  options: { label: string; value: string; icon: string }[]
}

const steps: Step[] = [
  {
    question: 'What brings you to Victory Medical?',
    options: [
      { label: 'I need medical care', value: 'medical', icon: '⚕' },
      { label: 'I want aesthetic treatments', value: 'aesthetic', icon: '✦' },
      { label: 'Mental health or wellness', value: 'wellness', icon: '◎' },
      { label: 'Weight management', value: 'weight', icon: '◈' },
    ],
  },
  {
    question: 'How urgent is your need?',
    options: [
      { label: 'I need help today', value: 'urgent', icon: '⚡' },
      { label: 'Within the next week', value: 'soon', icon: '◷' },
      { label: 'Planning ahead (1+ month)', value: 'planned', icon: '◑' },
      { label: 'Just exploring options', value: 'exploring', icon: '◌' },
    ],
  },
  {
    question: 'What\'s most important to you?',
    options: [
      { label: 'Fast, convenient access', value: 'convenience', icon: '▷' },
      { label: 'Expert, specialized care', value: 'expertise', icon: '★' },
      { label: 'Natural, minimal approach', value: 'natural', icon: '◉' },
      { label: 'Comprehensive solution', value: 'comprehensive', icon: '⊛' },
    ],
  },
]

interface Recommendation {
  service: string
  description: string
  href: string
  cta: string
  booking: string
}

function getRecommendation(answers: string[]): Recommendation[] {
  const [category, urgency] = answers

  if (category === 'aesthetic') {
    return [
      {
        service: 'Medical Spa',
        description: 'Physician-supervised aesthetic treatments including injectables, laser treatments, CoolSculpting, and more. Free consultation available.',
        href: '/medspa',
        cta: 'Explore MedSpa',
        booking: 'https://victory.janeapp.com/',
      },
    ]
  }
  if (category === 'wellness') {
    return [
      {
        service: 'Ketamine Therapy',
        description: 'IV ketamine infusion for treatment-resistant depression, PTSD, anxiety, and chronic pain. Physician-monitored with 70%+ response rates.',
        href: '/services#ketamine',
        cta: 'Learn About Ketamine',
        booking: 'https://www.priviahealth.com/practice/victory-medical/',
      },
      {
        service: 'Hormone Replacement (Club Longevity)',
        description: 'Bioidentical hormone therapy to restore vitality, energy, and mental clarity. Comprehensive bloodwork and personalized protocols.',
        href: '/services#hormones',
        cta: 'Explore Club Longevity',
        booking: 'https://www.priviahealth.com/practice/victory-medical/',
      },
    ]
  }
  if (category === 'weight') {
    return [
      {
        service: 'Medical Weight Loss',
        description: 'Physician-supervised programs with GLP-1 medications, metabolic testing, and ongoing support. Science-backed, sustainable results.',
        href: '/services#weight-loss',
        cta: 'Learn About Weight Loss',
        booking: 'https://www.priviahealth.com/practice/victory-medical/',
      },
    ]
  }
  // Medical
  if (urgency === 'urgent') {
    return [
      {
        service: 'Urgent Care',
        description: 'Walk-ins welcome, extended hours, on-site labs and X-ray. We see you today — no appointment needed.',
        href: '/services#urgent-care',
        cta: 'Find Urgent Care',
        booking: 'https://www.priviahealth.com/practice/victory-medical/',
      },
    ]
  }
  return [
    {
      service: 'Family & Primary Care',
      description: 'Comprehensive primary care with your dedicated provider. Annual physicals, chronic disease management, and personalized preventive care.',
      href: '/services#primary-care',
      cta: 'Book Primary Care',
      booking: 'https://www.priviahealth.com/practice/victory-medical/',
    },
    {
      service: 'Allergy Services',
      description: 'Our exclusive Harvard Protocol provides lasting allergy relief in months, not years. Unique to Victory Medical in Central Texas.',
      href: '/services#allergy',
      cta: 'Learn About Allergy Care',
      booking: 'https://www.priviahealth.com/practice/victory-medical/',
    },
  ]
}

export default function ServiceFinder() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [done, setDone] = useState(false)
  const [hoveredOption, setHoveredOption] = useState<string | null>(null)

  const containerRef = useRef<HTMLDivElement>(null)
  const stepRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Section entrance
  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.finder-label',
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.finder-label', start: 'top 85%' },
        }
      )
      gsap.fromTo('.finder-heading',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.finder-heading', start: 'top 80%' },
        }
      )
      gsap.fromTo(containerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const animateTransition = (cb: () => void) => {
    if (stepRef.current) {
      gsap.to(stepRef.current, {
        opacity: 0, x: -20, duration: 0.25, ease: 'power2.in',
        onComplete: () => {
          cb()
          gsap.fromTo(stepRef.current,
            { opacity: 0, x: 20 },
            { opacity: 1, x: 0, duration: 0.35, ease: 'power2.out' }
          )
        },
      })
    } else {
      cb()
    }
  }

  const handleSelect = (value: string) => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)

    // Update progress bar
    if (progressRef.current) {
      const progress = ((currentStep + 1) / steps.length) * 100
      gsap.to(progressRef.current, {
        width: `${progress}%`, duration: 0.4, ease: 'power2.out',
      })
    }

    animateTransition(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(s => s + 1)
      } else {
        setDone(true)
      }
    })
  }

  const reset = () => {
    animateTransition(() => {
      setAnswers([])
      setCurrentStep(0)
      setDone(false)
      if (progressRef.current) {
        gsap.to(progressRef.current, { width: '0%', duration: 0.3 })
      }
    })
  }

  const recommendations = done ? getRecommendation(answers) : []

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
      {/* Background glow */}
      <div style={{
        position: 'absolute', bottom: '-200px', left: '50%',
        transform: 'translateX(-50%)',
        width: '800px', height: '600px',
        background: 'radial-gradient(ellipse, rgba(34,184,209,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-label finder-label" style={{
            marginBottom: '16px', justifyContent: 'center',
          }}>
            Find Your Treatment
          </div>
          <h2 className="finder-heading" style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400, color: 'var(--white)',
            marginBottom: '16px',
          }}>
            Not sure where to start?{' '}
            <span style={{ color: 'var(--copper)' }}>We&apos;ll guide you.</span>
          </h2>
          <p style={{
            fontSize: '1rem', color: 'var(--muted-text)',
            maxWidth: '480px', margin: '0 auto', lineHeight: 1.7,
          }}>
            Answer 3 quick questions and we&apos;ll match you with the perfect Victory Medical service.
          </p>
        </div>

        {/* Quiz Card */}
        <div
          ref={containerRef}
          style={{
            maxWidth: '680px', margin: '0 auto',
            backgroundColor: 'rgba(26,58,71,0.04)',
            border: '1px solid rgba(34,184,209,0.2)',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(0,0,0,0.3)',
          }}
        >
          {/* Progress bar */}
          <div style={{
            height: '3px', backgroundColor: 'rgba(26,58,71,0.06)',
          }}>
            <div
              ref={progressRef}
              style={{
                height: '100%', width: '0%',
                background: 'linear-gradient(90deg, var(--copper), var(--gold))',
                transition: 'none',
              }}
            />
          </div>

          <div ref={stepRef} style={{ padding: '48px' }}>
            {!done ? (
              <>
                {/* Step indicator */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  marginBottom: '28px',
                }}>
                  {steps.map((_, i) => (
                    <div key={i} style={{
                      height: '4px', flex: 1, borderRadius: '2px',
                      backgroundColor: i <= currentStep
                        ? 'var(--copper)'
                        : 'rgba(26,58,71,0.1)',
                      transition: 'background-color 0.3s',
                    }} />
                  ))}
                  <span style={{
                    fontSize: '0.7rem', color: 'rgba(26,58,71,0.4)',
                    letterSpacing: '0.05em', flexShrink: 0, marginLeft: '4px',
                  }}>{currentStep + 1}/{steps.length}</span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '1.4rem', fontWeight: 400,
                  color: 'var(--white)', marginBottom: '32px',
                  lineHeight: 1.35,
                }}>
                  {steps[currentStep].question}
                </h3>

                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px',
                }}>
                  {steps[currentStep].options.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => handleSelect(opt.value)}
                      onMouseEnter={() => setHoveredOption(opt.value)}
                      onMouseLeave={() => setHoveredOption(null)}
                      style={{
                        padding: '20px',
                        background: hoveredOption === opt.value
                          ? 'rgba(34,184,209,0.15)'
                          : 'rgba(26,58,71,0.04)',
                        border: `1px solid ${hoveredOption === opt.value
                          ? 'rgba(34,184,209,0.5)'
                          : 'rgba(26,58,71,0.08)'}`,
                        borderRadius: '14px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        transform: hoveredOption === opt.value ? 'translateY(-2px)' : 'none',
                      }}
                    >
                      <div style={{
                        fontSize: '1.3rem', marginBottom: '8px',
                        color: hoveredOption === opt.value ? 'var(--copper)' : 'var(--gold)',
                      }}>{opt.icon}</div>
                      <div style={{
                        fontSize: '0.875rem', fontWeight: 500,
                        color: hoveredOption === opt.value ? 'var(--white)' : 'rgba(26,58,71,0.85)',
                        lineHeight: 1.4,
                      }}>{opt.label}</div>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              // Results
              <div>
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--copper), #4fc8dd)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 16px',
                    fontSize: '1.4rem',
                  }}>✓</div>
                  <h3 style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.4rem', fontWeight: 400,
                    color: 'var(--white)', marginBottom: '8px',
                  }}>
                    Your Personalized Match
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(26,58,71,0.5)' }}>
                    Based on your answers, we recommend:
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {recommendations.map((rec, i) => (
                    <div key={i} style={{
                      padding: '24px',
                      backgroundColor: 'rgba(34,184,209,0.08)',
                      border: '1px solid rgba(34,184,209,0.25)',
                      borderRadius: '14px',
                    }}>
                      <div style={{
                        fontSize: '0.65rem', letterSpacing: '0.12em',
                        textTransform: 'uppercase', color: 'var(--copper)',
                        marginBottom: '8px', fontWeight: 600,
                      }}>Recommended Service</div>
                      <h4 style={{
                        fontFamily: 'var(--font-playfair)',
                        fontSize: '1.1rem', fontWeight: 400,
                        color: 'var(--white)', marginBottom: '10px',
                      }}>{rec.service}</h4>
                      <p style={{
                        fontSize: '0.825rem', color: 'rgba(26,58,71,0.65)',
                        lineHeight: 1.6, marginBottom: '16px',
                      }}>{rec.description}</p>
                      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        <Link href={rec.href} className="btn-outline" style={{ padding: '10px 18px', fontSize: '0.75rem' }}>
                          {rec.cta}
                        </Link>
                        <a
                          href={rec.booking}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                          style={{ padding: '10px 18px', fontSize: '0.75rem' }}
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={reset}
                  style={{
                    marginTop: '24px', width: '100%', padding: '12px',
                    background: 'none', border: '1px solid rgba(26,58,71,0.1)',
                    borderRadius: '10px', color: 'rgba(26,58,71,0.4)',
                    cursor: 'pointer', fontSize: '0.8rem',
                    transition: 'all 0.2s', letterSpacing: '0.05em',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(26,58,71,0.25)'
                    e.currentTarget.style.color = 'rgba(26,58,71,0.7)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(26,58,71,0.1)'
                    e.currentTarget.style.color = 'rgba(26,58,71,0.4)'
                  }}
                >
                  ← Start over
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
