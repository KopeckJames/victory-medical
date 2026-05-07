import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Victory Medical Westlake Hills — MDVIP & Primary Care | Bee Caves Rd',
  description:
    'Victory Medical Westlake Hills — primary care, urgent care, allergy, MedSpa, and exclusive MDVIP concierge medicine at 3811 Bee Caves Rd, Westlake Hills TX 78746. Walk-ins welcome. (512) 462-3627.',
}

const services = [
  {
    icon: '⊕',
    name: 'Family Practice',
    description:
      'Comprehensive primary and preventive care for adults and children. Annual physicals, chronic disease management, vaccines, and telemedicine.',
    href: '/services#primary-care',
  },
  {
    icon: '⚡',
    name: 'Urgent Care',
    description:
      'Walk-in urgent care for non-life-threatening illnesses and injuries. Board-certified providers, extended evening and weekend hours.',
    href: '/services#urgent-care',
  },
  {
    icon: '◎',
    name: 'Allergy Services',
    description:
      'Complete allergy testing for 75+ regional allergens, rapid desensitization immunotherapy, and asthma management.',
    href: '/services#allergy',
  },
  {
    icon: '◆',
    name: 'MedSpa Treatments',
    description:
      'Select aesthetic treatments available at this location — Botox, fillers, and skin rejuvenation in a convenient Westlake Hills setting.',
    href: '/medspa',
  },
  {
    icon: '★',
    name: 'MDVIP Concierge',
    description:
      'Exclusive concierge medicine membership with your own dedicated physician, same-day access, and comprehensive annual wellness program.',
    href: '/mdvip',
  },
  {
    icon: '◇',
    name: 'Medical Weight Loss',
    description:
      'Physician-supervised weight loss with custom prescriptions, injection therapy, nutritional guidance, and personal coaching.',
    href: '/services#weight-loss',
  },
]

const hours = [
  { days: 'Monday – Thursday', time: '8:00 am – 7:00 pm' },
  { days: 'Friday', time: '8:00 am – 5:00 pm' },
  { days: 'Saturday', time: '9:00 am – 5:00 pm' },
  { days: 'Sunday', time: 'Closed' },
]

export default function WestlakeHillsLocationPage() {
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
                'radial-gradient(ellipse 60% 70% at 75% 50%, rgba(34,184,209,0.08) 0%, transparent 70%)',
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
              <span>Westlake Hills</span>
            </div>

            <div className="section-label" style={{ marginBottom: '16px' }}>
              Westlake Hills
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
              <span style={{ color: 'var(--copper)' }}>Westlake Hills</span>
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
                  3811 Bee Caves Rd, Suite 100 &amp; 101, Westlake Hills TX 78746
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

            {/* Badges row */}
            <div
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}
            >
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
                Walk-ins Welcome
              </div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 18px',
                  backgroundColor: 'rgba(34,109,122,0.12)',
                  border: '1px solid rgba(34,109,122,0.3)',
                  borderRadius: '24px',
                  fontSize: '0.8rem',
                  color: 'var(--gold)',
                  fontWeight: 500,
                }}
              >
                ★ MDVIP Concierge Medicine Available
              </div>
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
              { label: 'Westlake Hills' },
            ]}
          />
        </div>

        {/* ── Hours & Details ───────────────────────────────────── */}
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
                      color: h.time === 'Closed' ? 'rgba(26,58,71,0.35)' : 'rgba(26,58,71,0.75)',
                      marginBottom: '8px',
                      paddingBottom: '8px',
                      borderBottom: '1px solid rgba(26,58,71,0.06)',
                    }}
                  >
                    <span>{h.days}</span>
                    <span
                      style={{
                        color: h.time === 'Closed' ? 'rgba(26,58,71,0.3)' : 'var(--white)',
                        fontWeight: 500,
                      }}
                    >
                      {h.time}
                    </span>
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
                  On-site phlebotomy draw station for blood work — skip the external lab trip.
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
                    marginBottom: '8px',
                  }}
                >
                  Mon – Fri · 8:00 am – 4:00 pm
                </div>
              </div>

              {/* Parking */}
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
                  'Free parking in shared lot',
                  'ADA accessible entrance',
                  'Suite 100 & 101 — ground floor',
                  'Easy access from Bee Caves Rd',
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

        {/* ── What Makes Westlake Hills Special ─────────────────── */}
        <section style={{ backgroundColor: 'var(--teal)', padding: '80px 0' }}>
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '64px',
                alignItems: 'center',
              }}
            >
              <div>
                <div className="section-label" style={{ marginBottom: '16px' }}>
                  What Sets This Location Apart
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                    fontWeight: 400,
                    color: 'var(--white)',
                    marginBottom: '24px',
                  }}
                >
                  Full-Spectrum Care in{' '}
                  <span style={{ color: 'var(--copper)' }}>Westlake Hills</span>
                </h2>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--muted-text)',
                    lineHeight: 1.75,
                    marginBottom: '20px',
                  }}
                >
                  The Westlake Hills location offers the same comprehensive services as our
                  flagship South Austin campus — family practice, urgent care, allergy treatment,
                  weight loss, and MedSpa aesthetics — with the added exclusivity of{' '}
                  <strong style={{ color: 'var(--white)' }}>MDVIP concierge medicine</strong>.
                </p>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'rgba(26,58,71,0.6)',
                    lineHeight: 1.7,
                  }}
                >
                  Walk-ins are always welcome for urgent care. Schedule same-day appointments
                  for primary care. For MDVIP members, your physician is personally accessible
                  with unparalleled attention and priority scheduling.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  {
                    icon: '⊕',
                    title: 'Same Core Services',
                    text: 'All the primary and urgent care services of our flagship location are available here in Westlake Hills.',
                  },
                  {
                    icon: '★',
                    title: 'MDVIP Concierge — Exclusive Here',
                    text: 'Westlake Hills is the only Victory Medical location offering the full MDVIP concierge membership program.',
                  },
                  {
                    icon: '◎',
                    title: 'Allergy Program',
                    text: 'Full allergy testing and Harvard-protocol rapid desensitization available at this location.',
                  },
                  {
                    icon: '◆',
                    title: 'MedSpa Services',
                    text: 'Select aesthetic treatments available on-site — Botox, fillers, and more from certified injectors.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="card-depth"
                    style={{
                      display: 'flex',
                      gap: '16px',
                      padding: '20px 24px',
                      borderRadius: '12px',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '1rem',
                        color: 'var(--copper)',
                        flexShrink: 0,
                        width: '24px',
                        textAlign: 'center',
                        marginTop: '2px',
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          color: 'var(--white)',
                          marginBottom: '5px',
                          fontFamily: 'var(--font-playfair)',
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontSize: '0.825rem',
                          color: 'rgba(26,58,71,0.55)',
                          lineHeight: 1.6,
                        }}
                      >
                        {item.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Services ──────────────────────────────────────────── */}
        <section style={{ backgroundColor: 'var(--dark-teal)', padding: '80px 0' }}>
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
                Services at Westlake Hills
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

        {/* ── MDVIP Callout ─────────────────────────────────────── */}
        <section style={{ backgroundColor: 'var(--teal)', padding: '80px 0' }}>
          <div className="container">
            <div
              style={{
                border: '1px solid rgba(34,184,209,0.45)',
                borderRadius: '20px',
                overflow: 'hidden',
                background:
                  'linear-gradient(135deg, rgba(34,184,209,0.08) 0%, rgba(255,255,255,0.95) 60%)',
                padding: '56px',
                position: 'relative',
              }}
            >
              {/* Decorative top bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background:
                    'linear-gradient(90deg, var(--copper), rgba(34,184,209,0.3))',
                }}
              />

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '48px',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-block',
                      fontSize: '0.65rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--copper)',
                      backgroundColor: 'rgba(34,184,209,0.15)',
                      border: '1px solid rgba(34,184,209,0.35)',
                      borderRadius: '20px',
                      padding: '5px 14px',
                      marginBottom: '20px',
                      fontWeight: 600,
                    }}
                  >
                    Exclusive at Westlake Hills
                  </div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                      fontWeight: 400,
                      color: 'var(--white)',
                      marginBottom: '20px',
                    }}
                  >
                    MDVIP Concierge Medicine
                  </h2>
                  <p
                    style={{
                      fontSize: '1rem',
                      color: 'var(--muted-text)',
                      lineHeight: 1.75,
                      marginBottom: '28px',
                    }}
                  >
                    MDVIP is a premium membership-based concierge medicine program available
                    exclusively at our Westlake Hills location. As an MDVIP member you get your
                    own dedicated physician, same-day or next-day appointments, unhurried visits,
                    and a comprehensive annual wellness program tailored to your health goals.
                  </p>
                  <a href="/mdvip" className="btn-primary">
                    Learn About MDVIP
                  </a>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    'Your own dedicated physician',
                    'Same-day and next-day access',
                    'Unhurried appointments — no rushed visits',
                    'Comprehensive annual wellness program',
                    'Direct physician phone and email access',
                    'Coordination of specialist referrals',
                    'Priority scheduling for urgent needs',
                    'Available at 3811 Bee Caves Rd',
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        fontSize: '0.875rem',
                        color: 'rgba(26,58,71,0.75)',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
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
          </div>
        </section>

        {/* ── Getting Here ──────────────────────────────────────── */}
        <section style={{ backgroundColor: 'var(--dark-teal)', padding: '80px 0' }}>
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
                3811 Bee Caves Rd, Westlake Hills TX 78746
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
                    Located on Bee Caves Road in the heart of Westlake Hills. Convenient to
                    Rollingwood, West Lake Hills, Barton Creek, and Lakeway. Easy access from
                    Loop 360 (Capital of Texas Hwy) and Mopac (Loop 1).
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
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(26,58,71,0.65)',
                      lineHeight: 1.6,
                    }}
                  >
                    Free parking in shared lot directly in front of the building. Suites 100
                    and 101 are on the ground floor — no elevator required.
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=3811+Bee+Caves+Rd+Westlake+Hills+TX+78746"
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
                    label: 'Suite',
                    value: 'Suite 100 & 101 — Ground Floor',
                    href: null,
                    isLink: false,
                  },
                  {
                    label: 'Address',
                    value: '3811 Bee Caves Rd\nWestlake Hills, TX 78746',
                    href: null,
                    isLink: false,
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
                        rel={
                          item.href.startsWith('http') ? 'noopener noreferrer' : undefined
                        }
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
            backgroundColor: 'var(--teal)',
            padding: '80px 0',
            borderTop: '1px solid rgba(26,58,71,0.06)',
          }}
        >
          <div className="container" style={{ textAlign: 'center' }}>
            <div
              className="section-label"
              style={{ justifyContent: 'center', marginBottom: '16px' }}
            >
              Westlake Hills
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
              Same-day and next-day appointments available. Walk-ins welcome for urgent care.
              Ask about MDVIP concierge membership for premium access.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="https://www.priviahealth.com/practice/victory-medical/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Online via Privia
              </a>
              <a href="/mdvip" className="btn-outline">
                Learn About MDVIP
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .wh-glance { grid-template-columns: 1fr !important; }
          .wh-special { grid-template-columns: 1fr !important; gap: 32px !important; }
          .wh-mdvip { grid-template-columns: 1fr !important; }
          .wh-directions { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
