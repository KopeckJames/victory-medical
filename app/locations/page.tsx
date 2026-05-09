import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Locations | Victory Medical — Austin & Westlake Hills TX',
  description:
    'Three Victory Medical locations serving Central Texas — South Austin on Victory Drive, Ben White MedSpa, and Westlake Hills on Bee Caves Rd. Walk-ins welcome. Primary care, urgent care, MedSpa, and more.',
  alternates: { canonical: '/locations' },
  openGraph: {
    title: 'Locations | Victory Medical — Austin & Westlake Hills TX',
    description: 'Three Victory Medical locations serving Central Texas. Walk-ins welcome.',
    url: '/locations',
  },
}

const serviceAreas = [
  'South Austin', 'Downtown Austin', 'Westlake Hills', 'West Lake Hills',
  'Rollingwood', 'Barton Hills', 'Travis Heights', 'Zilker', 'Oak Hill',
  'Sunset Valley', 'Lakeway', 'Bee Cave', 'Dripping Springs', 'Buda',
  'Kyle', 'Round Rock', 'Cedar Park', 'Georgetown',
]

export default function LocationsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: 'var(--dark-teal)',
            paddingTop: '160px',
            paddingBottom: '100px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 60% 60% at 30% 50%, rgba(34,184,209,0.08) 0%, transparent 70%)',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(34,184,209,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(34,184,209,0.02) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            pointerEvents: 'none',
          }} />
          <div className="container" style={{ position: 'relative' }}>
            <div className="section-label" style={{ marginBottom: '16px' }}>
              3 Convenient Locations
            </div>
            <h1 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 400,
              color: 'var(--white)',
              maxWidth: '680px',
              marginBottom: '24px',
              lineHeight: 1.15,
            }}>
              Find Your Nearest{' '}
              <span style={{ color: 'var(--copper)' }}>Victory Medical</span>
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--muted-text)',
              maxWidth: '580px',
              lineHeight: 1.7,
            }}>
              Three Central Texas locations — South Austin, Ben White MedSpa, and Westlake
              Hills — plus statewide telemedicine. Walk-ins always welcome at our primary care
              and urgent care campuses.
            </p>
          </div>
        </section>

        {/* ── Location Cards ────────────────────────────────────── */}
        <section style={{ backgroundColor: 'var(--teal)', padding: '80px 0' }}>
          <div className="container">

            {/* ── Featured: Victory Medical Main (full-width horizontal) ── */}
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(34,184,209,0.4)',
              backgroundColor: 'rgba(34,184,209,0.04)',
              marginBottom: '24px',
            }}>
              {/* Copper gradient bar */}
              <div style={{ height: '3px', background: 'linear-gradient(90deg, var(--copper), var(--gold), transparent)' }} />

              <div className="loc-featured-grid">
                {/* Left — identity + hours */}
                <div className="loc-featured-left" style={{ padding: '44px' }}>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                    fontWeight: 600, color: 'var(--copper)',
                    backgroundColor: 'rgba(34,184,209,0.12)',
                    border: '1px solid rgba(34,184,209,0.3)',
                    borderRadius: '20px', padding: '4px 14px', marginBottom: '20px',
                  }}>
                    Main Campus · Est. 1996
                  </span>

                  <h2 style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                    fontWeight: 400,
                    color: 'var(--white)', marginBottom: '20px', lineHeight: 1.2,
                  }}>
                    Victory Medical Main
                  </h2>

                  <div style={{ marginBottom: '28px' }}>
                    <div style={{ fontSize: '0.95rem', color: 'rgba(26,58,71,0.8)', marginBottom: '2px' }}>
                      4303 Victory Drive
                    </div>
                    <div style={{ fontSize: '0.95rem', color: 'rgba(26,58,71,0.8)', marginBottom: '14px' }}>
                      Austin, TX 78704
                    </div>
                    <a href="tel:5124623627" style={{
                      fontSize: '1.2rem', fontWeight: 600,
                      color: 'var(--copper)', textDecoration: 'none',
                    }}>
                      (512) 462-3627
                    </a>
                  </div>

                  {/* Hours table */}
                  <div style={{
                    fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'var(--gold)', fontWeight: 600, marginBottom: '10px',
                  }}>
                    Hours
                  </div>
                  {[
                    { days: 'Mon – Fri', time: '8am – 7pm' },
                    { days: 'Saturday', time: '9am – 5pm' },
                    { days: 'Sunday', time: '12pm – 5pm' },
                  ].map((h) => (
                    <div key={h.days} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '8px 0',
                      borderBottom: '1px solid rgba(26,58,71,0.06)',
                      fontSize: '0.875rem',
                    }}>
                      <span style={{ color: 'rgba(26,58,71,0.5)' }}>{h.days}</span>
                      <span style={{ color: 'var(--white)', fontWeight: 500 }}>{h.time}</span>
                    </div>
                  ))}
                </div>

                {/* Right — highlights + services + CTAs */}
                <div className="loc-featured-right" style={{ padding: '44px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    {/* Highlights with checkmarks */}
                    <div style={{ marginBottom: '32px' }}>
                      {['Walk-ins welcome', 'Draw station on-site', 'On-site compounding pharmacy'].map((h) => (
                        <div key={h} style={{
                          display: 'flex', alignItems: 'center', gap: '12px',
                          fontSize: '0.9rem', color: 'rgba(26,58,71,0.8)',
                          marginBottom: '12px',
                        }}>
                          <div style={{
                            width: '22px', height: '22px', borderRadius: '50%', flexShrink: 0,
                            backgroundColor: 'rgba(34,184,209,0.15)',
                            border: '1px solid rgba(34,184,209,0.35)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                          }}>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M2 5L4 7.5L8 2.5" stroke="var(--copper)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          {h}
                        </div>
                      ))}
                    </div>

                    {/* Services */}
                    <div style={{ marginBottom: '36px' }}>
                      <div style={{
                        fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                        color: 'var(--gold)', fontWeight: 600, marginBottom: '12px',
                      }}>
                        Services at this location
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {['Family Practice', 'Urgent Care', 'Allergy Services', 'Weight Loss', 'Hormone Therapy', 'Ketamine Therapy', 'Pharmacy', 'Physical Medicine'].map((s) => (
                          <span key={s} style={{
                            fontSize: '0.72rem', padding: '4px 12px',
                            backgroundColor: 'rgba(34,184,209,0.08)',
                            border: '1px solid rgba(34,184,209,0.2)',
                            borderRadius: '20px', color: 'rgba(26,58,71,0.8)',
                          }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <a href="/locations/austin" className="btn-primary" style={{ padding: '12px 28px', fontSize: '0.8rem' }}>
                      View Location Details
                    </a>
                    <a
                      href="https://maps.google.com/?q=4303+Victory+Drive+Austin+TX+78704"
                      target="_blank" rel="noopener noreferrer"
                      className="btn-outline"
                      style={{ padding: '12px 28px', fontSize: '0.8rem' }}
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Two supporting locations ── */}
            <div className="loc-sub-grid">
              {/* MedSpa */}
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(26,58,71,0.09)',
                backgroundColor: 'rgba(26,58,71,0.025)',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{ height: '3px', background: 'linear-gradient(90deg, rgba(34,109,122,0.6), transparent)' }} />
                <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                    fontWeight: 600, color: 'var(--gold)',
                    backgroundColor: 'rgba(34,109,122,0.08)',
                    border: '1px solid rgba(34,109,122,0.2)',
                    borderRadius: '20px', padding: '4px 12px', marginBottom: '16px',
                  }}>
                    Aesthetic Medicine
                  </span>

                  <h2 style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.5rem', fontWeight: 400,
                    color: 'var(--white)', marginBottom: '16px', lineHeight: 1.2,
                  }}>
                    Victory MedSpa
                  </h2>

                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '0.875rem', color: 'rgba(26,58,71,0.75)', marginBottom: '2px' }}>
                      2108 W Ben White Blvd
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'rgba(26,58,71,0.75)', marginBottom: '12px' }}>
                      Austin, TX 78704
                    </div>
                    <a href="tel:5129696900" style={{
                      fontSize: '1rem', fontWeight: 600, color: 'var(--copper)', textDecoration: 'none',
                    }}>
                      (512) 969-6900
                    </a>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <div style={{
                      fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'var(--gold)', fontWeight: 600, marginBottom: '8px',
                    }}>
                      Hours
                    </div>
                    {[
                      { days: 'Monday', time: '9am – 4pm' },
                      { days: 'Tue – Fri', time: '9am – 5pm' },
                      { days: 'Saturday', time: 'By appointment' },
                    ].map((h) => (
                      <div key={h.days} style={{
                        display: 'flex', justifyContent: 'space-between',
                        padding: '6px 0', borderBottom: '1px solid rgba(26,58,71,0.05)',
                        fontSize: '0.8rem',
                      }}>
                        <span style={{ color: 'rgba(26,58,71,0.5)' }}>{h.days}</span>
                        <span style={{ color: 'rgba(26,58,71,0.85)', fontWeight: 500 }}>{h.time}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    {['Book via Jane App', 'Physician-supervised', 'Free consultations'].map((h) => (
                      <div key={h} style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        fontSize: '0.8rem', color: 'rgba(26,58,71,0.65)', marginBottom: '6px',
                      }}>
                        <span style={{
                          width: '5px', height: '5px', borderRadius: '50%',
                          backgroundColor: 'var(--gold)', flexShrink: 0,
                        }} />
                        {h}
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '28px', flex: 1 }}>
                    {['Botox & Dysport', 'Dermal Fillers', 'CoolSculpting', 'HydraFacial', 'Laser Treatments', 'Microneedling', 'IV Therapy', 'Ketamine Consults'].map((s) => (
                      <span key={s} style={{
                        fontSize: '0.68rem', padding: '3px 10px',
                        backgroundColor: 'rgba(26,58,71,0.05)',
                        border: '1px solid rgba(26,58,71,0.1)',
                        borderRadius: '20px', color: 'rgba(26,58,71,0.65)',
                      }}>
                        {s}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <a href="/locations/ben-white" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.75rem' }}>
                      View Location
                    </a>
                    <a
                      href="https://maps.google.com/?q=2108+W+Ben+White+Blvd+Austin+TX+78704"
                      target="_blank" rel="noopener noreferrer"
                      className="btn-outline"
                      style={{ padding: '10px 20px', fontSize: '0.75rem' }}
                    >
                      Directions
                    </a>
                  </div>
                </div>
              </div>

              {/* Westlake Hills */}
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(26,58,71,0.09)',
                backgroundColor: 'rgba(26,58,71,0.025)',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{ height: '3px', background: 'linear-gradient(90deg, rgba(138,168,184,0.6), transparent)' }} />
                <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                    fontWeight: 600, color: 'rgba(138,168,184,0.9)',
                    backgroundColor: 'rgba(138,168,184,0.08)',
                    border: '1px solid rgba(138,168,184,0.2)',
                    borderRadius: '20px', padding: '4px 12px', marginBottom: '16px',
                  }}>
                    MDVIP Concierge Available
                  </span>

                  <h2 style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.5rem', fontWeight: 400,
                    color: 'var(--white)', marginBottom: '16px', lineHeight: 1.2,
                  }}>
                    Victory Westlake Hills
                  </h2>

                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '0.875rem', color: 'rgba(26,58,71,0.75)', marginBottom: '2px' }}>
                      3811 Bee Caves Rd, Suite 100 & 101
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'rgba(26,58,71,0.75)', marginBottom: '12px' }}>
                      Westlake Hills, TX 78746
                    </div>
                    <a href="tel:5124623627" style={{
                      fontSize: '1rem', fontWeight: 600, color: 'var(--copper)', textDecoration: 'none',
                    }}>
                      (512) 462-3627
                    </a>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <div style={{
                      fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'var(--gold)', fontWeight: 600, marginBottom: '8px',
                    }}>
                      Hours
                    </div>
                    {[
                      { days: 'Mon – Thu', time: '8am – 7pm' },
                      { days: 'Friday', time: '8am – 5pm' },
                      { days: 'Saturday', time: '9am – 5pm' },
                    ].map((h) => (
                      <div key={h.days} style={{
                        display: 'flex', justifyContent: 'space-between',
                        padding: '6px 0', borderBottom: '1px solid rgba(26,58,71,0.05)',
                        fontSize: '0.8rem',
                      }}>
                        <span style={{ color: 'rgba(26,58,71,0.5)' }}>{h.days}</span>
                        <span style={{ color: 'rgba(26,58,71,0.85)', fontWeight: 500 }}>{h.time}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    {['Walk-ins welcome', 'Draw station Mon–Fri 8am–4pm', 'MDVIP concierge available'].map((h) => (
                      <div key={h} style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        fontSize: '0.8rem', color: 'rgba(26,58,71,0.65)', marginBottom: '6px',
                      }}>
                        <span style={{
                          width: '5px', height: '5px', borderRadius: '50%',
                          backgroundColor: 'rgba(138,168,184,0.8)', flexShrink: 0,
                        }} />
                        {h}
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '28px', flex: 1 }}>
                    {['Family Practice', 'Urgent Care', 'Allergy Services', 'MedSpa Treatments', 'MDVIP Concierge', 'Weight Loss'].map((s) => (
                      <span key={s} style={{
                        fontSize: '0.68rem', padding: '3px 10px',
                        backgroundColor: 'rgba(26,58,71,0.05)',
                        border: '1px solid rgba(26,58,71,0.1)',
                        borderRadius: '20px', color: 'rgba(26,58,71,0.65)',
                      }}>
                        {s}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <a href="/locations/westlake-hills" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.75rem' }}>
                      View Location
                    </a>
                    <a
                      href="https://maps.google.com/?q=3811+Bee+Caves+Rd+Westlake+Hills+TX+78746"
                      target="_blank" rel="noopener noreferrer"
                      className="btn-outline"
                      style={{ padding: '10px 20px', fontSize: '0.75rem' }}
                    >
                      Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Service Area ──────────────────────────────────────── */}
        <section style={{ backgroundColor: 'var(--dark-teal)', padding: '80px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="section-label" style={{ justifyContent: 'center', marginBottom: '16px' }}>
                Our Coverage Area
              </div>
              <h2 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 400, color: 'var(--white)', marginBottom: '16px',
              }}>
                Serving All of Central Texas
              </h2>
              <p style={{
                fontSize: '1rem', color: 'var(--muted-text)',
                maxWidth: '520px', margin: '0 auto', lineHeight: 1.7,
              }}>
                Our three locations put comprehensive medical care within reach of the entire
                Austin metro area. Telemedicine available statewide across Texas.
              </p>
            </div>

            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '10px',
              justifyContent: 'center', marginBottom: '48px',
            }}>
              {serviceAreas.map((city) => (
                <span key={city} style={{
                  fontSize: '0.8rem', padding: '8px 18px',
                  backgroundColor: 'rgba(26,58,71,0.04)',
                  border: '1px solid rgba(26,58,71,0.1)',
                  borderRadius: '24px', color: 'rgba(26,58,71,0.7)',
                }}>
                  {city}
                </span>
              ))}
            </div>

            <div style={{
              maxWidth: '600px', margin: '0 auto',
              padding: '36px 44px',
              backgroundColor: 'rgba(34,184,209,0.07)',
              border: '1px solid rgba(34,184,209,0.22)',
              borderRadius: '16px', textAlign: 'center',
            }}>
              <div style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--copper)' }}>◎</div>
              <h3 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '1.3rem', fontWeight: 400,
                color: 'var(--white)', marginBottom: '12px',
              }}>
                Telemedicine — Available Statewide
              </h3>
              <p style={{
                fontSize: '0.9rem', color: 'var(--muted-text)',
                lineHeight: 1.7, marginBottom: '24px',
              }}>
                Can&apos;t make it in? Victory Medical offers secure video visits for primary
                care, follow-ups, prescription refills, and more — anywhere in Texas.
              </p>
              <a
                href="https://www.priviahealth.com/practice/victory-medical/"
                target="_blank" rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '12px 28px', fontSize: '0.8rem' }}
              >
                Book Telemedicine Visit
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        /* Featured card: side-by-side on desktop */
        .loc-featured-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .loc-featured-left {
          border-right: 1px solid rgba(26,58,71,0.07);
        }

        /* Two sub-cards: side-by-side on desktop */
        .loc-sub-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: stretch;
        }

        /* Tablet: featured stacks, sub-cards stay 2-col */
        @media (max-width: 900px) {
          .loc-featured-grid { grid-template-columns: 1fr; }
          .loc-featured-left {
            border-right: none;
            border-bottom: 1px solid rgba(26,58,71,0.07);
          }
        }

        /* Mobile: everything single column */
        @media (max-width: 640px) {
          .loc-sub-grid { grid-template-columns: 1fr; }
          .loc-featured-left,
          .loc-featured-right { padding: 28px !important; }
        }
      `}</style>
    </>
  )
}
