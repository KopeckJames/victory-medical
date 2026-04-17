import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Victory MedSpa Austin — Ben White Blvd | Botox, CoolSculpting, IV Therapy',
  description:
    'Victory MedSpa on W Ben White Blvd, Austin TX — physician-supervised Botox, dermal fillers, CoolSculpting, HydraFacial, laser treatments, IV vitamin therapy, and ketamine consultations. Book via Jane App. (512) 969-6900.',
}

const treatments = [
  {
    icon: '◈',
    name: 'Botox & Dysport',
    description:
      'Neuromodulator injections to smooth fine lines, prevent new creases, and treat TMJ or migraines. Results last 3–6 months.',
  },
  {
    icon: '◎',
    name: 'Dermal Fillers',
    description:
      'Hyaluronic acid and collagen-stimulating fillers to restore volume, define contours, and rejuvenate facial features. Immediate results lasting 6–24 months.',
  },
  {
    icon: '✦',
    name: 'Sculptra',
    description:
      'Poly-L-lactic acid biostimulator that gradually rebuilds lost collagen. Results develop over weeks and can last 2+ years.',
  },
  {
    icon: '⟡',
    name: 'PRP Therapy',
    description:
      'Platelet-Rich Plasma therapy using your own growth factors to stimulate natural collagen production and skin renewal.',
  },
  {
    icon: '⊞',
    name: 'CoolSculpting',
    description:
      'The #1 non-surgical fat reduction treatment. Cryolipolysis permanently eliminates stubborn fat cells — no surgery, no downtime.',
  },
  {
    icon: '⊕',
    name: 'HydraFacial',
    description:
      'The gold standard non-invasive facial. Cleanses, exfoliates, extracts, and infuses your skin with hydrating serums. Zero downtime, immediate glow.',
  },
  {
    icon: '⚡',
    name: 'Laser Treatments',
    description:
      'Precision laser therapy for skin tone, texture, sun damage, vascular lesions, and hair removal — customized for your skin type.',
  },
  {
    icon: '◇',
    name: 'Microneedling',
    description:
      'Collagen induction therapy that triggers your skin\'s natural healing response. Dramatically improves texture, pore size, scarring, and fine lines.',
  },
  {
    icon: '⬡',
    name: 'IV Vitamin Therapy',
    description:
      'Custom-blended vitamin and mineral infusions for 100% absorption. Protocols for energy, immunity, skin glow, athletic recovery, and more.',
  },
  {
    icon: '⟳',
    name: 'Ketamine Consultations',
    description:
      'Initial ketamine therapy consultations and infusion coordination for treatment-resistant depression, PTSD, anxiety, and chronic pain.',
  },
]

const providers = [
  {
    name: 'Melissa Gabrielli, DNP, APRN, FNP-BC, PMHNP-BC',
    shortName: 'Melissa Gabrielli',
    initials: 'MG',
    role: 'Ketamine Therapist & MedSpa Injector',
    description:
      'Dual board-certified in both family practice and mental health nursing (FNP-BC and PMHNP-BC). Expert in Botox, dermal fillers, and IV ketamine therapy. Melissa brings a rare combination of aesthetic precision and psychiatric expertise to every treatment.',
    specialties: ['Botox & Fillers', 'IV Ketamine', 'Mental Health', 'Aesthetic Medicine'],
  },
  {
    name: 'Ola Zylka, MSN, FNP-C',
    shortName: 'Ola Zylka',
    initials: 'OZ',
    role: 'Nurse Practitioner & Nurse Injector',
    description:
      'Neurotoxin-certified nurse practitioner specializing in injectables, laser treatments, and advanced facial aesthetics. Ola is known for her precise, natural-looking results and thorough consultation process.',
    specialties: ['Botox & Dysport', 'Laser Treatments', 'Injectables', 'Facial Aesthetics'],
  },
]

const hours = [
  { days: 'Monday', time: '9:00 am – 4:00 pm' },
  { days: 'Tuesday – Friday', time: '9:00 am – 5:00 pm' },
  { days: 'Saturday', time: 'By appointment' },
  { days: 'Sunday', time: 'Closed' },
]

export default function BenWhiteLocationPage() {
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
                'radial-gradient(ellipse 70% 60% at 70% 50%, rgba(201,122,60,0.1) 0%, transparent 60%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(201,122,60,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,122,60,0.025) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              pointerEvents: 'none',
            }}
          />
          <div className="container" style={{ position: 'relative' }}>
            {/* Breadcrumb */}
            <div
              style={{
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.4)',
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
              <span>Ben White</span>
            </div>

            <div className="section-label" style={{ marginBottom: '16px' }}>
              Medical Aesthetics — Ben White
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 400,
                color: 'var(--white)',
                maxWidth: '700px',
                marginBottom: '20px',
                lineHeight: 1.15,
              }}
            >
              Victory MedSpa —{' '}
              <span style={{ color: 'var(--copper)' }}>Ben White</span>
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
                <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)' }}>
                  2108 W Ben White Blvd, Austin TX 78704
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
                  MedSpa Phone
                </div>
                <a
                  href="tel:5129696900"
                  style={{
                    fontSize: '1.1rem',
                    color: 'var(--copper)',
                    textDecoration: 'none',
                    fontWeight: 500,
                  }}
                >
                  (512) 969-6900
                </a>
              </div>
            </div>

            {/* Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 20px',
                backgroundColor: 'rgba(201,122,60,0.12)',
                border: '1px solid rgba(201,122,60,0.35)',
                borderRadius: '28px',
                fontSize: '0.825rem',
                color: 'var(--copper)',
                fontWeight: 500,
                letterSpacing: '0.03em',
                marginBottom: '40px',
              }}
            >
              <span style={{ fontSize: '1rem' }}>◈</span>
              Physician-Supervised Aesthetics
            </div>

            {/* CTA buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="https://victory.janeapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book via Jane App
              </a>
              <a
                href="https://victory.janeapp.com/#/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* ── Hours & Booking ───────────────────────────────────── */}
        <section style={{ backgroundColor: 'var(--light-teal)', padding: '64px 0' }}>
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '40px',
                alignItems: 'start',
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
                      color:
                        h.time === 'Closed'
                          ? 'rgba(255,255,255,0.3)'
                          : 'rgba(255,255,255,0.75)',
                      marginBottom: '8px',
                      paddingBottom: '8px',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <span>{h.days}</span>
                    <span
                      style={{
                        color:
                          h.time === 'Closed' ? 'rgba(255,255,255,0.3)' : 'var(--white)',
                        fontWeight: 500,
                      }}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Booking */}
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
                  How to Book
                </div>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.75)',
                    lineHeight: 1.7,
                    marginBottom: '16px',
                  }}
                >
                  All MedSpa appointments are booked through the Jane App platform — simple,
                  fast online scheduling with your choice of provider and treatment.
                </p>
                <a
                  href="https://victory.janeapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    fontSize: '0.75rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--copper)',
                    textDecoration: 'none',
                    fontWeight: 500,
                  }}
                >
                  Book at victory.janeapp.com →
                </a>
              </div>

              {/* Contact */}
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
                  Contact
                </div>
                {[
                  { label: 'Phone', value: '(512) 969-6900', href: 'tel:5129696900' },
                  {
                    label: 'Address',
                    value: '2108 W Ben White Blvd',
                    href: 'https://maps.google.com/?q=2108+W+Ben+White+Blvd+Austin+TX+78704',
                  },
                ].map((item) => (
                  <div key={item.label} style={{ marginBottom: '12px' }}>
                    <div
                      style={{
                        fontSize: '0.65rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.4)',
                        marginBottom: '3px',
                      }}
                    >
                      {item.label}
                    </div>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={
                        item.href.startsWith('http') ? 'noopener noreferrer' : undefined
                      }
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--copper)',
                        textDecoration: 'none',
                        fontWeight: 500,
                      }}
                    >
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Treatments ────────────────────────────────────────── */}
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
                  marginBottom: '16px',
                }}
              >
                Treatments at Ben White
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--muted-text)',
                  maxWidth: '540px',
                  lineHeight: 1.7,
                }}
              >
                Every aesthetic service at this location is performed or supervised by our
                board-certified physicians and nurse practitioners.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '20px',
              }}
            >
              {treatments.map((t) => (
                <div
                  key={t.name}
                  className="hover-card-lift"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '12px',
                    padding: '28px',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(201,122,60,0.12)',
                      border: '1px solid rgba(201,122,60,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.1rem',
                      color: 'var(--copper)',
                      marginBottom: '16px',
                    }}
                  >
                    {t.icon}
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
                    {t.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.6)',
                      lineHeight: 1.65,
                    }}
                  >
                    {t.description}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <a href="/medspa" style={{
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                textDecoration: 'none',
                fontWeight: 500,
              }}>
                View Full MedSpa Treatment Menu →
              </a>
            </div>
          </div>
        </section>

        {/* ── Why Medical-Grade ─────────────────────────────────── */}
        <section style={{ backgroundColor: 'var(--dark-teal)', padding: '80px 0' }}>
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
                  Why It Matters
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
                  Medical-Grade Aesthetics.{' '}
                  <span style={{ color: 'var(--copper)' }}>Not a Day Spa.</span>
                </h2>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--muted-text)',
                    lineHeight: 1.75,
                    marginBottom: '20px',
                  }}
                >
                  Every treatment at Victory MedSpa is performed or supervised by board-certified
                  physicians and nurse practitioners. We are a medical-grade aesthetic clinic —
                  not a day spa — which means superior outcomes, safer protocols, and providers
                  trained to handle any complication.
                </p>
                <blockquote
                  style={{
                    borderLeft: '3px solid var(--copper)',
                    paddingLeft: '20px',
                    marginBottom: '28px',
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'rgba(255,255,255,0.65)',
                      fontStyle: 'italic',
                      lineHeight: 1.7,
                    }}
                  >
                    &ldquo;Every treatment supervised by board-certified physicians and NPs. Not
                    a day spa — a medical-grade aesthetic clinic.&rdquo;
                  </p>
                </blockquote>
                <a
                  href="https://victory.janeapp.com/#/consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Book Free Consultation
                </a>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  {
                    icon: '⊕',
                    title: 'Physician Oversight',
                    text: 'All treatments are performed or directly supervised by board-certified physicians or dual-certified NPs.',
                  },
                  {
                    icon: '◎',
                    title: 'FDA-Approved Products Only',
                    text: 'We use only FDA-approved injectables, devices, and pharmaceutical-grade products — never diluted or counterfeit.',
                  },
                  {
                    icon: '✦',
                    title: 'Complication Management',
                    text: 'Our clinical team is trained to manage any aesthetic complication on-site — a safety level no day spa can match.',
                  },
                  {
                    icon: '⬡',
                    title: 'Integrated with Medical Care',
                    text: 'Your aesthetic provider has access to your full medical history and can coordinate with our primary care team.',
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
                          color: 'rgba(255,255,255,0.55)',
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

        {/* ── Providers ─────────────────────────────────────────── */}
        <section style={{ backgroundColor: 'var(--teal)', padding: '80px 0' }}>
          <div className="container">
            <div style={{ marginBottom: '48px' }}>
              <div className="section-label" style={{ marginBottom: '16px' }}>
                Your Providers
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                  fontWeight: 400,
                  color: 'var(--white)',
                }}
              >
                Meet the MedSpa Team
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '32px',
              }}
            >
              {providers.map((p) => (
                <div
                  key={p.name}
                  className="hover-card-lift"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '16px',
                    padding: '36px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Top bar */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background:
                        'linear-gradient(90deg, var(--copper), rgba(201,122,60,0.2))',
                    }}
                  />

                  <div
                    style={{
                      display: 'flex',
                      gap: '20px',
                      alignItems: 'flex-start',
                      marginBottom: '20px',
                    }}
                  >
                    {/* Avatar */}
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--light-teal)',
                        border: '2px solid rgba(201,122,60,0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-playfair)',
                        fontSize: '1.2rem',
                        color: 'var(--gold)',
                        flexShrink: 0,
                      }}
                    >
                      {p.initials}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-playfair)',
                          fontSize: '1.1rem',
                          color: 'var(--white)',
                          marginBottom: '4px',
                        }}
                      >
                        {p.name}
                      </div>
                      <div
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--copper)',
                          fontWeight: 500,
                        }}
                      >
                        {p.role}
                      </div>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255,255,255,0.65)',
                      lineHeight: 1.7,
                      marginBottom: '20px',
                    }}
                  >
                    {p.description}
                  </p>

                  {/* Specialties */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                    {p.specialties.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontSize: '0.68rem',
                          padding: '3px 10px',
                          backgroundColor: 'rgba(201,122,60,0.1)',
                          border: '1px solid rgba(201,122,60,0.2)',
                          borderRadius: '20px',
                          color: 'rgba(255,255,255,0.7)',
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://victory.janeapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      fontSize: '0.72rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--copper)',
                      textDecoration: 'none',
                      fontWeight: 500,
                    }}
                  >
                    Book with {p.shortName.split(' ')[0]} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: 'var(--dark-teal)',
            padding: '80px 0',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="container" style={{ textAlign: 'center' }}>
            <div
              className="section-label"
              style={{ justifyContent: 'center', marginBottom: '16px' }}
            >
              Ready to Begin?
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
              Book Your MedSpa Appointment
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
              Complimentary consultations available for all new aesthetic patients. Book
              online through Jane App or call our dedicated MedSpa line.
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
                href="https://victory.janeapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book via Jane App
              </a>
              <a
                href="https://victory.janeapp.com/#/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .bw-hours { grid-template-columns: 1fr !important; }
          .bw-medical { grid-template-columns: 1fr !important; gap: 32px !important; }
          .bw-providers { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
