import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Victory Medical Austin — Primary & Urgent Care | 4303 Victory Drive',
  description:
    'Victory Medical South Austin — family practice, urgent care, allergy treatment, weight loss, hormone therapy, ketamine, and on-site pharmacy at 4303 Victory Drive, Austin TX 78704. Walk-ins welcome. (512) 462-3627.',
}

const services = [
  {
    icon: '⊕',
    name: 'Family Practice',
    description:
      'Primary and preventive care for all ages. Annual physicals, chronic disease management, labs, vaccines, and telemedicine.',
    href: '/services#primary-care',
  },
  {
    icon: '⚡',
    name: 'Urgent Care',
    description:
      'Walk-in care for non-life-threatening conditions. Board-certified providers, no appointment needed.',
    href: '/services#urgent-care',
  },
  {
    icon: '◎',
    name: 'Allergy Services',
    description:
      'Full allergy testing for 75+ regional allergens using our unique Harvard-protocol rapid desensitization.',
    href: '/services#allergy',
  },
  {
    icon: '◇',
    name: 'Medical Weight Loss',
    description:
      'Physician-supervised programs with custom prescriptions, injections, and personal coaching.',
    href: '/services#weight-loss',
  },
  {
    icon: '⟳',
    name: 'Hormone Therapy',
    description:
      'Bioidentical hormone replacement, anti-aging medicine, and our Club Longevity program.',
    href: '/services#hormones',
  },
  {
    icon: '✦',
    name: 'Ketamine Therapy',
    description:
      'Licensed IV ketamine infusions for treatment-resistant depression, PTSD, and chronic pain.',
    href: '/services#ketamine',
  },
  {
    icon: '⬡',
    name: 'Pharmacy',
    description:
      'Full-service compounding pharmacy on-site. Custom formulations, allergen-free compounds, traditional prescriptions.',
    href: '/services#pharmacy',
  },
  {
    icon: '⊞',
    name: 'Physical Medicine',
    description:
      'Chiropractic, physical therapy, and massage therapy under one roof for injury recovery and prevention.',
    href: '/services#physical-medicine',
  },
]

const hours = [
  { days: 'Monday – Friday', time: '8:00 am – 7:00 pm' },
  { days: 'Saturday', time: '9:00 am – 5:00 pm' },
  { days: 'Sunday', time: '12:00 pm – 5:00 pm' },
]

export default function AustinLocationPage() {
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
                'radial-gradient(ellipse 60% 70% at 20% 60%, rgba(34,184,209,0.09) 0%, transparent 70%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(34,184,209,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(34,184,209,0.025) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              pointerEvents: 'none',
            }}
          />
          <div className="container" style={{ position: 'relative' }}>
            {/* Breadcrumb */}
            <div
              style={{
                fontSize: '0.75rem',
                color: 'rgba(26,58,71,0.4)',
                marginBottom: '24px',
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
              }}
            >
              <a href="/locations" style={{ color: 'var(--gold)', textDecoration: 'none' }}>
                Locations
              </a>
              <span>/</span>
              <span>Austin</span>
            </div>

            <div className="section-label" style={{ marginBottom: '16px' }}>
              South Austin
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 400,
                color: 'var(--white)',
                maxWidth: '680px',
                marginBottom: '20px',
                lineHeight: 1.15,
              }}
            >
              Victory Medical —{' '}
              <span style={{ color: 'var(--copper)' }}>South Austin</span>
            </h1>

            {/* Address + phone row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '32px',
                marginBottom: '32px',
                alignItems: 'center',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    marginBottom: '4px',
                  }}
                >
                  Address
                </div>
                <div style={{ fontSize: '1rem', color: 'rgba(26,58,71,0.9)' }}>
                  4303 Victory Drive, Austin TX 78704
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    marginBottom: '4px',
                  }}
                >
                  Phone
                </div>
                <a
                  href="tel:5124623627"
                  style={{
                    fontSize: '1.1rem',
                    color: 'var(--copper)',
                    textDecoration: 'none',
                    fontWeight: 500,
                  }}
                >
                  (512) 462-3627
                </a>
              </div>
            </div>

            {/* Walk-ins badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                backgroundColor: 'rgba(34,184,209,0.15)',
                border: '1px solid rgba(34,184,209,0.4)',
                borderRadius: '24px',
                fontSize: '0.8rem',
                color: 'var(--copper)',
                fontWeight: 500,
                letterSpacing: '0.04em',
                marginBottom: '40px',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: '#4caf50',
                  boxShadow: '0 0 6px #4caf50',
                  flexShrink: 0,
                }}
              />
              Walk-ins Welcome — No Appointment Needed
            </div>

            {/* CTA buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="https://www.priviahealth.com/practice/victory-medical/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Online
              </a>
              <a href="tel:5124623627" className="btn-outline">
                Call (512) 462-3627
              </a>
            </div>
          </div>
        </section>

        {/* ── Breadcrumb ───────────────────────────────────────── */}
        <div className="container" style={{ paddingTop: '24px', paddingBottom: '8px' }}>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Locations', href: '/locations' },
              { label: 'Austin' },
            ]}
          />
        </div>

        {/* ── At a Glance ──────────────────────────────────────── */}
        <section style={{ backgroundColor: 'var(--light-teal)', padding: '64px 0' }}>
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '40px',
              }}
            >
              {/* Hours */}
              <div>
                <div
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    fontWeight: 600,
                    marginBottom: '16px',
                  }}
                >
                  Hours of Operation
                </div>
                {hours.map((h) => (
                  <div
                    key={h.days}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.875rem',
                      color: 'rgba(26,58,71,0.75)',
                      marginBottom: '8px',
                      paddingBottom: '8px',
                      borderBottom: '1px solid rgba(26,58,71,0.06)',
                    }}
                  >
                    <span>{h.days}</span>
                    <span style={{ color: 'var(--white)', fontWeight: 500 }}>{h.time}</span>
                  </div>
                ))}
              </div>

              {/* Draw station */}
              <div>
                <div
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    fontWeight: 600,
                    marginBottom: '16px',
                  }}
                >
                  Draw Station
                </div>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(26,58,71,0.75)',
                    lineHeight: 1.7,
                    marginBottom: '12px',
                  }}
                >
                  On-site phlebotomy draw station for lab work — no external lab trip required.
                </p>
                <div
                  style={{
                    display: 'inline-block',
                    fontSize: '0.75rem',
                    color: 'var(--copper)',
                    backgroundColor: 'rgba(34,184,209,0.1)',
                    border: '1px solid rgba(34,184,209,0.25)',
                    borderRadius: '20px',
                    padding: '4px 12px',
                  }}
                >
                  Available during clinic hours
                </div>
              </div>

              {/* Parking & access */}
              <div>
                <div
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    fontWeight: 600,
                    marginBottom: '16px',
                  }}
                >
                  Parking & Accessibility
                </div>
                {[
                  'Free on-site parking',
                  'ADA accessible entrance',
                  'Wheelchair accessible throughout',
                  'On-site compounding pharmacy',
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.85rem',
                      color: 'rgba(26,58,71,0.7)',
                      marginBottom: '8px',
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
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Services at this location ─────────────────────────── */}
        <section style={{ backgroundColor: 'var(--teal)', padding: '80px 0' }}>
          <div className="container">
            <div style={{ marginBottom: '48px' }}>
              <div className="section-label" style={{ marginBottom: '16px' }}>
                What We Offer
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                  fontWeight: 400,
                  color: 'var(--white)',
                }}
              >
                Services at South Austin
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '20px',
              }}
            >
              {services.map((svc) => (
                <a
                  key={svc.name}
                  href={svc.href}
                  className="hover-card-lift"
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    backgroundColor: 'rgba(26,58,71,0.03)',
                    border: '1px solid rgba(26,58,71,0.07)',
                    borderRadius: '12px',
                    padding: '28px',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(34,184,209,0.12)',
                      border: '1px solid rgba(34,184,209,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.1rem',
                      color: 'var(--copper)',
                      marginBottom: '16px',
                    }}
                  >
                    {svc.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: '1.1rem',
                      fontWeight: 400,
                      color: 'var(--white)',
                      marginBottom: '10px',
                    }}
                  >
                    {svc.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'rgba(26,58,71,0.6)',
                      lineHeight: 1.65,
                    }}
                  >
                    {svc.description}
                  </p>
                  <div
                    style={{
                      marginTop: '16px',
                      fontSize: '0.72rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--copper)',
                      fontWeight: 500,
                    }}
                  >
                    Learn more →
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Providers ─────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: 'var(--dark-teal)',
            padding: '64px 0',
            borderTop: '1px solid rgba(26,58,71,0.05)',
          }}
        >
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '60px',
                alignItems: 'center',
              }}
            >
              <div>
                <div className="section-label" style={{ marginBottom: '16px' }}>
                  Our Providers
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                    fontWeight: 400,
                    color: 'var(--white)',
                    marginBottom: '20px',
                  }}
                >
                  A Full Team of Specialists
                </h2>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--muted-text)',
                    lineHeight: 1.75,
                    marginBottom: '28px',
                  }}
                >
                  Our complete roster of 20+ physicians, nurse practitioners, physician
                  assistants, and specialists serves this location. Board-certified providers
                  across primary care, allergy, integrative medicine, mental health, and more.
                </p>
                <a href="/about" className="btn-outline">
                  Meet the Full Team
                </a>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                }}
              >
                {[
                  { icon: '⊕', label: 'Primary Care' },
                  { icon: '⚡', label: 'Urgent Care' },
                  { icon: '◎', label: 'Allergy' },
                  { icon: '✦', label: 'Ketamine' },
                  { icon: '⟳', label: 'Hormones' },
                  { icon: '⬡', label: 'Pharmacy' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="card-depth"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '16px',
                      borderRadius: '10px',
                    }}
                  >
                    <span style={{ fontSize: '1rem', color: 'var(--copper)' }}>{item.icon}</span>
                    <span style={{ fontSize: '0.825rem', color: 'rgba(26,58,71,0.75)' }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Getting Here ──────────────────────────────────────── */}
        <section style={{ backgroundColor: 'var(--teal)', padding: '80px 0' }}>
          <div className="container">
            <div style={{ marginBottom: '40px' }}>
              <div className="section-label" style={{ marginBottom: '16px' }}>
                Getting Here
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  fontWeight: 400,
                  color: 'var(--white)',
                }}
              >
                4303 Victory Drive, Austin TX 78704
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '48px',
                alignItems: 'start',
              }}
            >
              <div>
                <div
                  style={{
                    backgroundColor: 'rgba(26,58,71,0.04)',
                    border: '1px solid rgba(26,58,71,0.08)',
                    borderRadius: '16px',
                    padding: '32px',
                    marginBottom: '24px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.65rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      fontWeight: 600,
                      marginBottom: '12px',
                    }}
                  >
                    Neighborhood
                  </div>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'rgba(26,58,71,0.7)',
                      lineHeight: 1.7,
                      marginBottom: '16px',
                    }}
                  >
                    Located in South Austin, near the intersection of Oltorf and S Lamar Blvd.
                    Easily accessible from Travis Heights, Barton Hills, Zilker, and Downtown
                    Austin. Victory Drive runs between S Congress and S 1st St.
                  </p>
                  <div
                    style={{
                      fontSize: '0.65rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      fontWeight: 600,
                      marginBottom: '10px',
                    }}
                  >
                    Parking
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(26,58,71,0.65)', lineHeight: 1.6 }}>
                    Free on-site parking lot. Additional street parking available on Victory Drive.
                    ADA accessible spaces located at the main entrance.
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=4303+Victory+Drive+Austin+TX+78704"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Open in Google Maps →
                </a>
              </div>

              {/* Contact block */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  {
                    label: 'Main Phone',
                    value: '(512) 462-3627',
                    href: 'tel:5124623627',
                    isLink: true,
                  },
                  {
                    label: 'Address',
                    value: '4303 Victory Drive\nAustin, TX 78704',
                    href: null,
                    isLink: false,
                  },
                  {
                    label: 'Compounding Pharmacy Portal',
                    value: 'vmc.pharmetika.com',
                    href: 'https://vmc.pharmetika.com',
                    isLink: true,
                  },
                  {
                    label: 'Privia Patient Portal',
                    value: 'priviahealth.com',
                    href: 'https://www.priviahealth.com/practice/victory-medical/',
                    isLink: true,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="card-depth"
                    style={{ borderRadius: '12px', padding: '20px 24px' }}
                  >
                    <div
                      style={{
                        fontSize: '0.65rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--gold)',
                        marginBottom: '6px',
                      }}
                    >
                      {item.label}
                    </div>
                    {item.isLink && item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        style={{
                          fontSize: '0.95rem',
                          color: 'var(--copper)',
                          textDecoration: 'none',
                          fontWeight: 500,
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div
                        style={{
                          fontSize: '0.95rem',
                          color: 'rgba(26,58,71,0.85)',
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {item.value}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: 'var(--dark-teal)',
            padding: '80px 0',
            borderTop: '1px solid rgba(26,58,71,0.06)',
          }}
        >
          <div className="container" style={{ textAlign: 'center' }}>
            <div className="section-label" style={{ justifyContent: 'center', marginBottom: '16px' }}>
              Ready to Visit?
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
              Book Your Appointment Today
            </h2>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--muted-text)',
                maxWidth: '480px',
                margin: '0 auto 36px',
                lineHeight: 1.7,
              }}
            >
              Same-day and next-day appointments available. Walk-ins welcome for urgent care —
              no appointment needed.
            </p>
            <div
              style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <a
                href="https://www.priviahealth.com/practice/victory-medical/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Online via Privia
              </a>
              <a href="tel:5124623627" className="btn-outline">
                Call (512) 462-3627
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .austin-glance { grid-template-columns: 1fr !important; }
          .austin-providers { grid-template-columns: 1fr !important; gap: 32px !important; }
          .austin-directions { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
