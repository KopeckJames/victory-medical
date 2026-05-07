import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: 'calc(100vh - 80px)',
          backgroundColor: '#f5fbfc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="container" style={{ textAlign: 'center', padding: '4rem 1.5rem' }}>
          {/* Decorative copper line */}
          <div
            style={{
              width: '60px',
              height: '2px',
              backgroundColor: '#22b8d1',
              margin: '0 auto 2rem',
              opacity: 0.6,
            }}
          />

          {/* Large 404 */}
          <p
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(7rem, 20vw, 14rem)',
              fontWeight: 700,
              color: '#22b8d1',
              opacity: 0.15,
              lineHeight: 1,
              margin: 0,
              userSelect: 'none',
            }}
          >
            404
          </p>

          {/* Heading */}
          <h1
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 600,
              color: '#ffffff',
              marginTop: '-2rem',
              marginBottom: '1rem',
            }}
          >
            Page Not Found
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1rem',
              color: 'rgba(26,58,71,0.6)',
              maxWidth: '480px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.7,
            }}
          >
            You may have followed an old link or the page may have moved. Let us
            help you find what you&apos;re looking for.
          </p>

          {/* Decorative copper line */}
          <div
            style={{
              width: '40px',
              height: '1px',
              backgroundColor: '#22b8d1',
              margin: '0 auto 2.5rem',
              opacity: 0.4,
            }}
          />

          {/* Navigation suggestions */}
          <nav
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Link href="/" className="btn-primary">
              Return Home
            </Link>

            <Link href="/services" className="btn-outline">
              View Our Services
            </Link>

            <a
              href="https://www.priviahealth.com/practice/victory-medical/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book an Appointment
            </a>

            <a
              href="tel:5124623627"
              className="btn-outline"
            >
              Call Us
            </a>
          </nav>

          {/* Bottom copper accent */}
          <div
            style={{
              width: '60px',
              height: '2px',
              backgroundColor: '#22b8d1',
              margin: '3rem auto 0',
              opacity: 0.6,
            }}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
