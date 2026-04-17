import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact & Locations | Victory Medical Austin TX',
  description: 'Contact Victory Medical. Three locations in Austin and Westlake Hills, TX. Call (512) 462-3627. Book appointments online with Privia Health or Jane App for MedSpa.',
}

const locations = [
  {
    name: 'Victory Main — Austin',
    address: '4303 Victory Drive',
    city: 'Austin, TX 78704',
    phone: '(512) 462-3627',
    email: 'info@victorymed.com',
    fax: '512.462.2898',
    hours: [
      { days: 'Monday – Friday', time: '8:00 AM – 7:00 PM' },
      { days: 'Saturday', time: '9:00 AM – 5:00 PM' },
      { days: 'Sunday', time: '12:00 PM – 5:00 PM' },
    ],
    drawStation: 'Mon–Fri 8:00 AM – 5:30 PM (no appointment needed)',
    services: ['Family Practice', 'Urgent Care', 'Allergy', 'MedSpa', 'Pharmacy', 'Weight Loss', 'Walk-ins Welcome'],
    mapUrl: 'https://maps.google.com/?q=4303+Victory+Drive+Austin+TX+78704',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.8!2d-97.7909401!3d30.2322525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE0JzExLjMiTiA5N8KwNDcnMjcuNCJX!5e0!3m2!1sen!2sus!4v1',
    featured: true,
  },
  {
    name: 'Victory MedSpa — Austin',
    address: '2108 W Ben White Blvd',
    city: 'Austin, TX 78704',
    phone: '(512) 969-6900',
    email: null,
    fax: null,
    hours: [
      { days: 'Monday', time: '9:00 AM – 4:00 PM' },
      { days: 'Tuesday – Friday', time: '9:00 AM – 5:00 PM' },
      { days: 'Saturday – Sunday', time: 'Closed' },
    ],
    drawStation: null,
    services: ['Botox & Dysport', 'Dermal Fillers', 'CoolSculpting®', 'Laser Treatments', 'IV Therapy'],
    mapUrl: 'https://maps.google.com/?q=2108+W+Ben+White+Blvd+Austin+TX+78704',
    mapEmbed: null,
    featured: false,
  },
  {
    name: 'Victory — Westlake Hills',
    address: '3811 Bee Caves Rd, Suite 100 & 101',
    city: 'Westlake Hills, TX 78746',
    phone: '(512) 462-3627',
    email: 'info@victorymed.com',
    fax: null,
    hours: [
      { days: 'Monday – Thursday', time: '8:00 AM – 7:00 PM' },
      { days: 'Friday', time: '8:00 AM – 5:00 PM' },
      { days: 'Saturday', time: '9:00 AM – 5:00 PM' },
      { days: 'Sunday', time: 'Closed' },
    ],
    drawStation: 'Mon–Fri 8:00 AM – 4:00 PM (no appointment needed)',
    services: ['Family Practice', 'Urgent Care', 'Allergy', 'MedSpa', 'MDVIP', 'Walk-ins Welcome'],
    mapUrl: 'https://maps.google.com/?q=3811+Bee+Caves+Rd+Westlake+Hills+TX+78746',
    mapEmbed: null,
    featured: false,
  },
]

const bookingOptions = [
  {
    title: 'Primary Care & Urgent Care',
    description: 'Book with our physicians, PAs, and NPs for family medicine, urgent care, allergy services, weight loss, hormone therapy, and more.',
    cta: 'Book Online with Privia Health',
    url: 'https://www.priviahealth.com/practice/victory-medical/',
    note: 'Available 24/7 online',
  },
  {
    title: 'MedSpa Appointments',
    description: 'Book aesthetic treatments, IV therapy, ketamine consultations, and other MedSpa services with our nurse injectors and NPs.',
    cta: 'Book MedSpa Online',
    url: 'https://victory.janeapp.com/',
    note: 'Powered by Jane App',
  },
  {
    title: 'MedSpa Consultation',
    description: 'Not sure which treatment is right for you? Schedule a free consultation with one of our MedSpa providers.',
    cta: 'Schedule Free Consultation',
    url: 'https://victory.janeapp.com/#/consultation',
    note: 'Complimentary — no obligation',
  },
  {
    title: 'Patient Portal',
    description: 'Access your health records, prescription history, lab results, and communicate directly with your care team.',
    cta: 'Access Patient Portal',
    url: 'https://vmc.pharmetika.com/patient_access/portal/login',
    note: 'Secure — HIPAA compliant',
  },
]

export default function ContactPage() {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .contact-booking-grid { grid-template-columns: 1fr !important; }
          .contact-location-cols { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          style={{
            backgroundColor: 'var(--dark-teal)',
            paddingTop: '160px',
            paddingBottom: '80px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse 50% 60% at 80% 40%, rgba(201,122,60,0.08) 0%, transparent 70%)',
            }}
          />
          <div className="container" style={{ position: 'relative' }}>
            <div className="section-label" style={{ marginBottom: '16px' }}>
              Get In Touch
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 400,
                color: 'var(--white)',
                maxWidth: '600px',
                marginBottom: '24px',
              }}
            >
              Contact & <span style={{ color: 'var(--copper)' }}>Locations</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted-text)', maxWidth: '500px', lineHeight: 1.7, marginBottom: '40px' }}>
              Three locations across Austin and Westlake Hills. Walk-ins always welcome at our main clinic and urgent care locations.
            </p>

            {/* Quick contact */}
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              <a
                href="tel:5124623627"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  textDecoration: 'none',
                  padding: '16px 24px',
                  backgroundColor: 'rgba(201,122,60,0.1)',
                  border: '1px solid rgba(201,122,60,0.3)',
                  borderRadius: '10px',
                  transition: 'all 0.3s ease',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '2px' }}>Main Phone</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--copper)' }}>(512) 462-3627</div>
                </div>
              </a>
              <a
                href="tel:5129696900"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  textDecoration: 'none',
                  padding: '16px 24px',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '10px',
                  transition: 'all 0.3s ease',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '2px' }}>MedSpa Direct</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--white)' }}>(512) 969-6900</div>
                </div>
              </a>
              <a
                href="mailto:info@victorymed.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  textDecoration: 'none',
                  padding: '16px 24px',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '10px',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '2px' }}>Email</div>
                  <div style={{ fontSize: '1rem', color: 'var(--white)' }}>info@victorymed.com</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Booking Options */}
        <section className="section" style={{ backgroundColor: 'var(--teal)' }}>
          <div className="container">
            <div style={{ marginBottom: '48px' }}>
              <div className="section-label" style={{ marginBottom: '16px' }}>Book an Appointment</div>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 400, color: 'var(--white)' }}>
                Schedule Your Visit
              </h2>
            </div>

            <div className="contact-booking-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              {bookingOptions.map((option) => (
                <div
                  key={option.title}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '16px',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                  className="hover-card-copper"
                >
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--white)', marginBottom: '8px' }}>
                      {option.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                      {option.description}
                    </p>
                  </div>
                  <div>
                    <a
                      href={option.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ padding: '12px 20px', fontSize: '0.75rem', display: 'inline-flex' }}
                    >
                      {option.cta}
                    </a>
                    <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', marginTop: '8px' }}>
                      {option.note}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="section" style={{ backgroundColor: 'var(--dark-teal)' }}>
          <div className="container">
            <div style={{ marginBottom: '60px' }}>
              <div className="section-label" style={{ marginBottom: '16px' }}>Find Us</div>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 400, color: 'var(--white)' }}>
                Our Locations
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {locations.map((loc, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    border: `1px solid ${loc.featured ? 'rgba(201,122,60,0.3)' : 'rgba(255,255,255,0.07)'}`,
                    borderRadius: '16px',
                    padding: '40px',
                  }}
                >
                  {loc.featured && (
                    <div
                      style={{
                        display: 'inline-block',
                        fontSize: '0.65rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--copper)',
                        border: '1px solid rgba(201,122,60,0.4)',
                        borderRadius: '20px',
                        padding: '3px 12px',
                        marginBottom: '16px',
                      }}
                    >
                      Main Location
                    </div>
                  )}
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--white)', marginBottom: '24px' }}>
                    {loc.name}
                  </h3>

                  <div className="contact-location-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
                    {/* Contact */}
                    <div>
                      <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px', fontWeight: 600 }}>
                        Address & Phone
                      </div>
                      <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>{loc.address}</div>
                      <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>{loc.city}</div>
                      <a href={`tel:${loc.phone.replace(/\D/g, '')}`} style={{ display: 'block', fontSize: '1.1rem', color: 'var(--copper)', textDecoration: 'none', fontWeight: 600, marginBottom: '8px' }}>
                        {loc.phone}
                      </a>
                      {loc.email && (
                        <a href={`mailto:${loc.email}`} style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: '6px' }}>
                          {loc.email}
                        </a>
                      )}
                      {loc.fax && (
                        <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>Fax: {loc.fax}</div>
                      )}
                    </div>

                    {/* Hours */}
                    <div>
                      <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px', fontWeight: 600 }}>
                        Hours
                      </div>
                      {loc.hours.map((h) => (
                        <div key={h.days} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', gap: '16px' }}>
                          <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)' }}>{h.days}</span>
                          <span style={{ fontSize: '0.85rem', color: h.time === 'Closed' ? 'rgba(255,255,255,0.3)' : 'var(--white)', fontWeight: 500, flexShrink: 0 }}>{h.time}</span>
                        </div>
                      ))}
                      {loc.drawStation && (
                        <div style={{ marginTop: '12px', padding: '10px 14px', backgroundColor: 'rgba(196,168,122,0.08)', border: '1px solid rgba(196,168,122,0.15)', borderRadius: '8px', fontSize: '0.75rem', color: 'var(--gold)', lineHeight: 1.5 }}>
                          🩸 Draw Station: {loc.drawStation}
                        </div>
                      )}
                    </div>

                    {/* Services & Actions */}
                    <div>
                      <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px', fontWeight: 600 }}>
                        Services Here
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                        {loc.services.map((s) => (
                          <span key={s} style={{ fontSize: '0.7rem', padding: '3px 10px', backgroundColor: 'rgba(201,122,60,0.08)', border: '1px solid rgba(201,122,60,0.2)', borderRadius: '20px', color: 'rgba(255,255,255,0.75)' }}>
                            {s}
                          </span>
                        ))}
                      </div>
                      <a
                        href={loc.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ padding: '10px 18px', fontSize: '0.75rem', display: 'inline-flex' }}
                      >
                        Get Directions ↗
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section style={{ backgroundColor: 'var(--teal)', padding: '60px 0' }}>
          <div className="container">
            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: '40px',
                textAlign: 'center',
              }}
            >
              <div className="section-label" style={{ justifyContent: 'center', marginBottom: '16px' }}>
                Service Area
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.8rem', fontWeight: 400, color: 'var(--white)', marginBottom: '16px' }}>
                Serving All of Central Texas
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', marginBottom: '20px' }}>
                In-person visits at our Austin and Westlake Hills locations. Telemedicine available statewide across Texas.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
                {['Austin', 'Westlake Hills', 'Cedar Park', 'Round Rock', 'Pflugerville', 'Georgetown', 'Lakeway', 'Buda', 'Bastrop', 'San Marcos', 'Marble Falls', 'All of Texas (Telehealth)'].map((city) => (
                  <span key={city} style={{ fontSize: '0.8rem', padding: '5px 14px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', color: 'rgba(255,255,255,0.65)' }}>
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
