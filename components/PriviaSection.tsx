// Privia Medical Group affiliation notice — closes the home page above the footer.
export default function PriviaSection() {
  return (
    <section
      style={{
        backgroundColor: 'var(--teal)',
        padding: '72px 0 96px',
        borderTop: '1px solid var(--border-soft)',
      }}
      aria-labelledby="privia-heading"
    >
      <div className="container">
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '56px 48px',
            background: 'linear-gradient(135deg, rgba(34,184,209,0.07) 0%, rgba(255,255,255,0.9) 100%)',
            border: '1px solid rgba(34,184,209,0.22)',
            borderRadius: '20px',
          }}
        >
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '18px' }}>
            Privia Medical Group
          </div>

          <h2
            id="privia-heading"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontWeight: 400,
              color: 'var(--white)',
              marginBottom: '24px',
              lineHeight: 1.25,
            }}
          >
            Proud to Be Part of{' '}
            <span style={{ color: 'var(--copper)' }}>Privia Medical Group</span>
          </h2>

          <p
            style={{
              fontSize: '1rem',
              color: 'rgba(26,58,71,0.7)',
              lineHeight: 1.85,
              maxWidth: '660px',
              margin: '0 auto 32px',
            }}
          >
            Victory Medical is a proud member of Privia Medical Group. The best doctors in our
            community have joined together to form Privia Medical Group (PMG), a multi-specialty,
            high-performance medical group that puts patients first. Our physicians are united by
            the mission of providing better, more coordinated care for their patients. To learn
            more about Privia Medical Group and find other Privia doctors, please{' '}
            <a
              href="https://www.priviahealth.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--copper)', fontWeight: 600, textDecoration: 'none' }}
            >
              visit our website
            </a>
            .
          </p>

          <a
            href="https://www.priviahealth.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Visit Privia Medical Group ↗
          </a>
        </div>
      </div>
    </section>
  )
}
