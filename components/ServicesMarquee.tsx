'use client'

const services = [
  'Family Practice',
  'Urgent Care',
  'Allergy Testing',
  'Ketamine Therapy',
  'Medical Weight Loss',
  'Hormone Replacement',
  'Physical Medicine',
  'MedSpa',
  'Botox & Fillers',
  'CoolSculpting®',
  'IV Vitamin Therapy',
  'Compounding Pharmacy',
  'Telemedicine',
  'Mammogram Screening',
  'Chiropractor',
  'Scarlet RF Microneedling',
  'HydraFacial',
  'Laser Treatments',
  'PDO Threading',
  'Sculptra',
]

export default function ServicesMarquee() {
  const items = [...services, ...services] // duplicate for seamless loop

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
          {items.map((service, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '20px',
                padding: '0 20px',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(26,58,71,0.7)',
                fontWeight: 500,
              }}
            >
              {service}
              <span
                style={{
                  display: 'inline-block',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--copper)',
                }}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
