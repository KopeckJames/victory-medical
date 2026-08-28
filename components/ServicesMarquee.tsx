'use client'

import Link from 'next/link'

const services: { label: string; href: string }[] = [
  { label: 'Family Practice', href: '/family-practice' },
  { label: 'Urgent Care', href: '/urgent-care' },
  { label: 'Allergy Testing', href: '/allergy-services' },
  { label: 'Ketamine Therapy', href: '/ketamine' },
  { label: 'Medical Weight Loss', href: '/weight-loss' },
  { label: 'Hormone Replacement', href: '/natural-hormone-replacement' },
  { label: 'Peptide Therapy', href: '/peptides' },
  { label: 'Physical Medicine', href: '/physical-medicine' },
  { label: 'MedSpa', href: '/medspa' },
  { label: 'Botox & Fillers', href: '/botox-and-dysport-in-austin' },
  { label: 'CoolSculpting®', href: '/coolsculpting' },
  { label: 'IV Vitamin Therapy', href: '/medspa#iv-therapy' },
  { label: 'Semax', href: '/peptides#semax' },
  { label: 'BPC-157', href: '/peptides#bpc-157' },
  { label: 'Compounding Pharmacy', href: '/pharmacy' },
  { label: 'Telemedicine', href: '/austin-telemedicine-service' },
  { label: 'Sermorelin', href: '/peptides#sermorelin' },
  { label: 'Mammogram Screening', href: '/mammogram-screening-austin' },
  { label: 'Chiropractor', href: '/chiropractic' },
  { label: 'Scarlet RF Microneedling', href: '/scarlet-rf-microneedling-treatments' },
  { label: 'HydraFacial', href: '/austin-hydrafacial-treatments' },
  { label: 'Laser Treatments', href: '/medspa-laser-treatments-face' },
  { label: 'Regenerative Medicine', href: '/peptides' },
  { label: 'PDO Threading', href: '/austin-pdo-threading' },
  { label: 'Sculptra', href: '/medspa-injectables' },
]

export default function ServicesMarquee() {
  return (
    <div
      style={{
        backgroundColor: 'var(--light-teal)',
        borderTop: '1px solid var(--glass-border)',
        borderBottom: '1px solid var(--glass-border)',
        padding: '16px 0',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', overflow: 'hidden' }}>
        <div
          className="marquee-track"
          style={{
            display: 'flex',
            gap: '0',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          {/* Rendered twice for a seamless loop — the second pass is hidden from
              assistive tech and taken out of the tab order so every service is
              announced and focusable exactly once. */}
          {[0, 1].map((pass) =>
            services.map((service) => (
              <span
                key={`${pass}-${service.label}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '0 20px',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}
                {...(pass === 1 ? { 'aria-hidden': true } : {})}
              >
                <Link
                  href={service.href}
                  tabIndex={pass === 1 ? -1 : undefined}
                  className="marquee-link"
                  style={{
                    color: 'rgba(26,58,71,0.7)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {service.label}
                </Link>
                <span
                  aria-hidden="true"
                  style={{
                    display: 'inline-block',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--copper)',
                  }}
                />
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
