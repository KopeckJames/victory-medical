'use client'

import Link from 'next/link'

const footerLinks = {
  services: [
    { label: 'Family Practice', href: '/services#primary-care' },
    { label: 'Urgent Care', href: '/services#urgent-care' },
    { label: 'Allergy Services', href: '/services#allergy' },
    { label: 'Weight Loss', href: '/services#weight-loss' },
    { label: 'Ketamine Therapy', href: '/services#ketamine' },
    { label: 'Pharmacy', href: '/services#pharmacy' },
  ],
  medspa: [
    { label: 'Botox & Dysport', href: '/medspa#injectables' },
    { label: 'Dermal Fillers', href: '/medspa#injectables' },
    { label: 'CoolSculpting®', href: '/medspa#body' },
    { label: 'Laser Treatments', href: '/medspa#face' },
    { label: 'IV Therapy', href: '/medspa#iv-therapy' },
    { label: 'HydraFacial', href: '/medspa#face' },
  ],
  resources: [
    { label: 'Patient Portal', href: 'https://vmc.pharmetika.com/patient_access/portal/login', external: true },
    { label: 'Book Appointment', href: 'https://www.priviahealth.com/practice/victory-medical/', external: true },
    { label: 'Book MedSpa', href: 'https://victory.janeapp.com/', external: true },
    { label: 'Buy Supplements', href: 'https://victoryselect.com', external: true },
    { label: 'Careers', href: '/about#careers' },
    { label: 'Blog', href: '/blog' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      style={{
        backgroundColor: 'var(--dark-teal)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* Pre-footer CTA strip */}
      <div style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '48px 0',
        background: 'linear-gradient(135deg, rgba(201,122,60,0.07) 0%, transparent 60%)',
      }}>
        <div className="container" style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px',
        }}>
          <div>
            <div style={{
              fontSize: '0.65rem', letterSpacing: '0.15em',
              textTransform: 'uppercase', color: 'var(--gold)',
              marginBottom: '8px', fontWeight: 600,
            }}>
              Same-day appointments available
            </div>
            <p style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
              fontWeight: 400, color: 'var(--white)',
              lineHeight: 1.2, margin: 0,
            }}>
              Ready to feel better?{' '}
              <span style={{ color: 'var(--copper)' }}>We&apos;re here for you.</span>
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="tel:5124623627"
              style={{
                padding: '11px 22px', borderRadius: '4px',
                border: '1px solid rgba(255,255,255,0.2)',
                fontSize: '0.8rem', fontWeight: 500,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                color: 'var(--white)', textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--copper)'
                e.currentTarget.style.color = 'var(--copper)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                e.currentTarget.style.color = 'var(--white)'
              }}
            >
              (512) 462-3627
            </a>
            <a
              href="https://www.priviahealth.com/practice/victory-medical/"
              target="_blank" rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '11px 24px' }}
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
      {/* Main Footer */}
      <div className="container" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
        <div className="footer-grid">
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  background: 'linear-gradient(135deg, var(--copper) 0%, #e09a5c 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'white',
                  fontFamily: 'var(--font-playfair)',
                  flexShrink: 0,
                }}
              >
                V
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--white)',
                    lineHeight: 1.1,
                  }}
                >
                  Victory Medical
                </div>
                <div
                  style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                  }}
                >
                  Since 1996
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--muted-text)',
                lineHeight: 1.7,
                maxWidth: '280px',
                marginBottom: '24px',
              }}
            >
              Providing integrated medicine in Central Texas since 1996. Complete healthcare — from primary care to medical spa — under one roof.
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="https://www.facebook.com/Victory-Medical-Center-139622742726335/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'var(--copper)'
                  el.style.color = 'var(--copper)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(255,255,255,0.15)'
                  el.style.color = 'rgba(255,255,255,0.6)'
                }}
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://www.instagram.com/victory_medical_center/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  fontSize: '0.75rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'var(--copper)'
                  el.style.color = 'var(--copper)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(255,255,255,0.15)'
                  el.style.color = 'rgba(255,255,255,0.6)'
                }}
                aria-label="Instagram"
              >
                ig
              </a>
            </div>

            {/* Locations Summary */}
            <div style={{ marginTop: '32px' }}>
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
                Our Locations
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[
                  '4303 Victory Drive, Austin TX',
                  '2108 W Ben White Blvd, Austin TX',
                  '3811 Bee Caves Rd, Westlake Hills TX',
                ].map((loc) => (
                  <div
                    key={loc}
                    style={{
                      fontSize: '0.78rem',
                      color: 'rgba(255,255,255,0.5)',
                    }}
                  >
                    {loc}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <div
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                fontWeight: 700,
                marginBottom: '20px',
              }}
            >
              Services
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerLinks.services.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.color = 'var(--copper)'
                    el.style.paddingLeft = '6px'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.color = 'rgba(255,255,255,0.6)'
                    el.style.paddingLeft = '0'
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* MedSpa Column */}
          <div>
            <div
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                fontWeight: 700,
                marginBottom: '20px',
              }}
            >
              MedSpa
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerLinks.medspa.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.color = 'var(--copper)'
                    el.style.paddingLeft = '6px'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.color = 'rgba(255,255,255,0.6)'
                    el.style.paddingLeft = '0'
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <div
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                fontWeight: 700,
                marginBottom: '20px',
              }}
            >
              Patient Resources
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerLinks.resources.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.color = 'var(--copper)'
                    el.style.paddingLeft = '6px'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.color = 'rgba(255,255,255,0.6)'
                    el.style.paddingLeft = '0'
                  }}
                >
                  {link.label}
                  {link.external && (
                    <span style={{ fontSize: '0.65rem', marginLeft: '4px', opacity: 0.5 }}>↗</span>
                  )}
                </a>
              ))}
            </div>

            {/* Contact Quick Info */}
            <div style={{ marginTop: '32px' }}>
              <div
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  fontWeight: 700,
                  marginBottom: '12px',
                }}
              >
                Contact
              </div>
              <a
                href="tel:5124623627"
                style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  color: 'var(--copper)',
                  textDecoration: 'none',
                  marginBottom: '6px',
                  fontWeight: 500,
                }}
              >
                (512) 462-3627
              </a>
              <a
                href="mailto:info@victorymed.com"
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                }}
              >
                info@victorymed.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Disclaimer */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          padding: '20px 0',
          backgroundColor: 'rgba(0,0,0,0.15)',
        }}
      >
        <div className="container">
          <p
            className="disclaimer-text"
            style={{
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.55)',
              textAlign: 'center',
              maxWidth: '900px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Victory Medical is a proud member of Privia Medical Group. The information on this site is for educational purposes only and is not intended as medical advice. Please consult with a qualified healthcare provider for diagnosis and treatment.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          padding: '20px 0',
          backgroundColor: 'rgba(0,0,0,0.2)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            © {currentYear} Victory Medical. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {['Privacy Policy', 'Terms & Conditions', 'HIPAA Notice', 'Sitemap'].map((item) => (
              <Link
                key={item}
                href="#"
                style={{
                  fontSize: '0.7rem',
                  color: 'rgba(255,255,255,0.35)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.35)')}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
