import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Locations | Victory Medical — Austin & Westlake Hills TX',
  description:
    'Three Victory Medical locations serving Central Texas — South Austin on Victory Drive, Ben White MedSpa, and Westlake Hills on Bee Caves Rd. Walk-ins welcome. Primary care, urgent care, MedSpa, and more.',
}

const locations = [
  {
    id: 'austin',
    slug: '/locations/austin',
    featured: true,
    name: 'Victory Medical Main',
    badge: 'Main Campus · Est. 1996',
    address: '4303 Victory Drive',
    cityState: 'Austin, TX 78704',
    phone: '(512) 462-3627',
    phoneHref: 'tel:5124623627',
    hours: [
      { days: 'Mon – Fri', time: '8am – 7pm' },
      { days: 'Saturday', time: '9am – 5pm' },
      { days: 'Sunday', time: '12pm – 5pm' },
    ],
    services: [
      'Family Practice',
      'Urgent Care',
      'Allergy Services',
      'Medical Weight Loss',
      'Hormone Therapy',
      'Ketamine Therapy',
      'Compounding Pharmacy',
      'Physical Medicine',
    ],
    highlights: ['Walk-ins welcome', 'Draw station on-site', 'On-site pharmacy'],
    directionsUrl: 'https://maps.google.com/?q=4303+Victory+Drive+Austin+TX+78704',
  },
  {
    id: 'ben-white',
    slug: '/locations/ben-white',
    featured: false,
    name: 'Victory MedSpa',
    badge: 'Aesthetic Medicine',
    address: '2108 W Ben White Blvd',
    cityState: 'Austin, TX 78704',
    phone: '(512) 969-6900',
    phoneHref: 'tel:5129696900',
    hours: [
      { days: 'Monday', time: '9am – 4pm' },
      { days: 'Tue – Fri', time: '9am – 5pm' },
      { days: 'Saturday', time: 'By appointment' },
    ],
    services: [
      'Botox & Dysport',
      'Dermal Fillers',
      'Sculptra & PRP',
      'CoolSculpting',
      'HydraFacial',
      'Laser Treatments',
      'Microneedling',
      'IV Vitamin Therapy',
      'Ketamine Consultations',
    ],
    highlights: ['Book via Jane App', 'Physician-supervised', 'Free consultations'],
    directionsUrl: 'https://maps.google.com/?q=2108+W+Ben+White+Blvd+Austin+TX+78704',
  },
  {
    id: 'westlake-hills',
    slug: '/locations/westlake-hills',
    featured: false,
    name: 'Victory Westlake Hills',
    badge: 'MDVIP Concierge Available',
    address: '3811 Bee Caves Rd, Suite 100 & 101',
    cityState: 'Westlake Hills, TX 78746',
    phone: '(512) 462-3627',
    phoneHref: 'tel:5124623627',
    hours: [
      { days: 'Mon – Thu', time: '8am – 7pm' },
      { days: 'Friday', time: '8am – 5pm' },
      { days: 'Saturday', time: '9am – 5pm' },
    ],
    services: [
      'Family Practice',
      'Urgent Care',
      'Allergy Services',
      'MedSpa Treatments',
      'MDVIP Concierge',
      'Medical Weight Loss',
    ],
    highlights: ['Walk-ins welcome', 'Draw station Mon–Fri 8am–4pm', 'MDVIP available'],
    directionsUrl:
      'https://maps.google.com/?q=3811+Bee+Caves+Rd+Westlake+Hills+TX+78746',
  },
]

const serviceAreas = [
  'South Austin',
  'Downtown Austin',
  'Westlake Hills',
  'West Lake Hills',
  'Rollingwood',
  'Barton Hills',
  'Travis Heights',
  'Zilker',
  'Oak Hill',
  'Sunset Valley',
  'Lakeway',
  'Bee Cave',
  'Dripping Springs',
  'Buda',
  'Kyle',
  'Round Rock',
  'Cedar Park',
  'Georgetown',
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
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse 60% 60% at 30% 50%, rgba(201,122,60,0.08) 0%, transparent 70%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(201,122,60,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(201,122,60,0.02) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              pointerEvents: 'none',
            }}
          />
          <div className="container" style={{ position: 'relative' }}>
            <div className="section-label" style={{ marginBottom: '16px' }}>
              3 Convenient Locations
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 400,
                color: 'var(--white)',
                maxWidth: '680px',
                marginBottom: '24px',
                lineHeight: 1.15,
              }}
            >
              Find Your Nearest{' '}
              <span style={{ color: 'var(--copper)' }}>Victory Medical</span>
            </h1>
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--muted-text)',
                maxWidth: '580px',
                lineHeight: 1.7,
              }}
            >
              Three Central Texas locations — South Austin, Ben White MedSpa, and Westlake
              Hills — plus statewide telemedicine. Walk-ins always welcome at our primary care
              and urgent care campuses.
            </p>
          </div>
        </section>

        {/* ── Location Cards ────────────────────────────────────── */}
        <section style={{ backgroundColor: 'var(--teal)', padding: '80px 0' }}>
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
                alignItems: 'start',
              }}
            >
              {locations.map((loc) => (
                <div
                  key={loc.id}
                  className="card-depth hover-card-lift"
                  style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: loc.featured
                      ? '1px solid rgba(201,122,60,0.45)'
                      : '1px solid rgba(255,255,255,0.07)',
                    backgroundColor: loc.featured
                      ? 'rgba(201,122,60,0.06)'
                      : 'rgba(255,255,255,0.03)',
                    transform: loc.featured ? 'scale(1.02)' : 'none',
                    position: 'relative',
                  }}
                >
                  {/* Top accent bar */}
                  <div
                    style={{
                      height: '3px',
                      background: loc.featured
                        ? 'var(--copper)'
                        : 'linear-gradient(90deg, rgba(196,168,122,0.4), transparent)',
                    }}
                  />

                  <div style={{ padding: '32px' }}>
                    {/* Badge */}
                    <div
                      style={{
                        display: 'inline-block',
                        fontSize: '0.6rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        color: loc.featured ? 'var(--copper)' : 'var(--gold)',
                        backgroundColor: loc.featured
                          ? 'rgba(201,122,60,0.12)'
                          : 'rgba(196,168,122,0.08)',
                        border: loc.featured
                          ? '1px solid rgba(201,122,60,0.3)'
                          : '1px solid rgba(196,168,122,0.2)',
                        borderRadius: '20px',
                        padding: '4px 12px',
                        marginBottom: '16px',
                      }}
                    >
                      {loc.badge}
                    </div>

                    {/* Name */}
                    <h2
                      style={{
                        fontFamily: 'var(--font-playfair)',
                        fontSize: '1.5rem',
                        fontWeight: 400,
                        color: 'var(--white)',
                        marginBottom: '16px',
                        lineHeight: 1.2,
                      }}
                    >
                      {loc.name}
                    </h2>

                    {/* Address & phone */}
                    <div style={{ marginBottom: '20px' }}>
                      <div
                        style={{
                          fontSize: '0.875rem',
                          color: 'rgba(255,255,255,0.8)',
                          marginBottom: '4px',
                        }}
                      >
                        {loc.address}
                      </div>
                      <div
                        style={{
                          fontSize: '0.875rem',
                          color: 'rgba(255,255,255,0.8)',
                          marginBottom: '10px',
                        }}
                      >
                        {loc.cityState}
                      </div>
                      <a
                        href={loc.phoneHref}
                        style={{
                          fontSize: '0.95rem',
                          color: 'var(--copper)',
                          textDecoration: 'none',
                          fontWeight: 500,
                        }}
                      >
                        {loc.phone}
                      </a>
                    </div>

                    {/* Hours */}
                    <div style={{ marginBottom: '20px' }}>
                      <div
                        style={{
                          fontSize: '0.6rem',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'var(--gold)',
                          fontWeight: 600,
                          marginBottom: '8px',
                        }}
                      >
                        Hours
                      </div>
                      {loc.hours.map((h) => (
                        <div
                          key={h.days}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            fontSize: '0.8rem',
                            color: 'rgba(255,255,255,0.65)',
                            marginBottom: '4px',
                          }}
                        >
                          <span>{h.days}</span>
                          <span style={{ color: 'rgba(255,255,255,0.85)' }}>{h.time}</span>
                        </div>
                      ))}
                    </div>

                    {/* Services */}
                    <div style={{ marginBottom: '20px' }}>
                      <div
                        style={{
                          fontSize: '0.6rem',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'var(--gold)',
                          fontWeight: 600,
                          marginBottom: '10px',
                        }}
                      >
                        Services at this location
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {loc.services.map((s) => (
                          <span
                            key={s}
                            style={{
                              fontSize: '0.68rem',
                              padding: '3px 10px',
                              backgroundColor: 'rgba(255,255,255,0.05)',
                              border: '1px solid rgba(255,255,255,0.1)',
                              borderRadius: '20px',
                              color: 'rgba(255,255,255,0.7)',
                            }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div style={{ marginBottom: '28px' }}>
                      {loc.highlights.map((h) => (
                        <div
                          key={h}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '0.775rem',
                            color: 'rgba(255,255,255,0.6)',
                            marginBottom: '5px',
                          }}
                        >
                          <span
                            style={{
                              width: '5px',
                              height: '5px',
                              borderRadius: '50%',
                              backgroundColor: 'var(--copper)',
                              flexShrink: 0,
                            }}
                          />
                          {h}
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      <a
                        href={loc.slug}
                        className="btn-primary"
                        style={{ padding: '10px 20px', fontSize: '0.75rem' }}
                      >
                        View Location
                      </a>
                      <a
                        href={loc.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                        style={{ padding: '10px 20px', fontSize: '0.75rem' }}
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Service Area ──────────────────────────────────────── */}
        <section style={{ backgroundColor: 'var(--dark-teal)', padding: '80px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div
                className="section-label"
                style={{ justifyContent: 'center', marginBottom: '16px' }}
              >
                Our Coverage Area
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: 400,
                  color: 'var(--white)',
                  marginBottom: '16px',
                }}
              >
                Serving All of Central Texas
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--muted-text)',
                  maxWidth: '520px',
                  margin: '0 auto',
                  lineHeight: 1.7,
                }}
              >
                Our three locations put comprehensive medical care within reach of the entire
                Austin metro area. Telemedicine available statewide across Texas.
              </p>
            </div>

            {/* Cities grid */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                justifyContent: 'center',
                marginBottom: '48px',
              }}
            >
              {serviceAreas.map((city) => (
                <span
                  key={city}
                  style={{
                    fontSize: '0.8rem',
                    padding: '8px 18px',
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '24px',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  {city}
                </span>
              ))}
            </div>

            {/* Telemedicine note */}
            <div
              style={{
                maxWidth: '600px',
                margin: '0 auto',
                padding: '32px 40px',
                backgroundColor: 'rgba(201,122,60,0.07)',
                border: '1px solid rgba(201,122,60,0.22)',
                borderRadius: '16px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '1.4rem',
                  marginBottom: '12px',
                  color: 'var(--copper)',
                }}
              >
                ◎
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '1.3rem',
                  fontWeight: 400,
                  color: 'var(--white)',
                  marginBottom: '12px',
                }}
              >
                Telemedicine — Available Statewide
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--muted-text)',
                  lineHeight: 1.7,
                  marginBottom: '24px',
                }}
              >
                Can&apos;t make it in? Victory Medical offers secure video visits for primary
                care, follow-ups, prescription refills, and more — anywhere in Texas.
              </p>
              <a
                href="https://www.priviahealth.com/practice/victory-medical/"
                target="_blank"
                rel="noopener noreferrer"
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
        @media (max-width: 1024px) {
          .locations-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .locations-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
