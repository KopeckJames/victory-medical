import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import { BLOG_POSTS } from '@/lib/blog-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Health & Wellness Blog | Victory Medical Austin TX',
  description:
    'Expert insights on ketamine therapy, allergy treatment, medical weight loss, concierge medicine, and MedSpa services from the providers at Victory Medical in Austin, TX.',
  keywords:
    'Victory Medical blog, Austin healthcare, ketamine therapy Austin, allergy treatment Austin, medical weight loss Austin, CoolSculpting Austin',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Health & Wellness Blog | Victory Medical Austin TX',
    description: 'Expert health and wellness insights from Victory Medical providers in Austin, TX.',
    url: '/blog',
  },
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section
          className="noise-overlay"
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
                'radial-gradient(ellipse 60% 60% at 80% 40%, rgba(34,184,209,0.09) 0%, transparent 70%)',
              pointerEvents: 'none',
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
            <div className="section-label" style={{ marginBottom: '16px' }}>
              Health &amp; Wellness
            </div>
            <h1
              className="heading-display"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: 'var(--white)',
                maxWidth: '700px',
                marginBottom: '24px',
              }}
            >
              Clinical Insights from{' '}
              <span style={{ color: 'var(--copper)' }}>Austin&apos;s Integrative Team</span>
            </h1>
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--muted-text)',
                maxWidth: '580px',
                lineHeight: 1.85,
              }}
            >
              Evidence-based articles from Victory Medical&apos;s physicians, nurse practitioners,
              and specialists — on the topics Austin patients ask about most.
            </p>
          </div>
        </section>

        {/* ── Breadcrumb ───────────────────────────────────────────────── */}
        <div className="container" style={{ paddingTop: '24px', paddingBottom: '8px' }}>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Health Blog' },
            ]}
          />
        </div>

        {/* ── Post Grid ────────────────────────────────────────────────── */}
        <section
          className="section noise-overlay"
          style={{ backgroundColor: 'var(--teal)' }}
        >
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: '28px',
              }}
            >
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="hover-card-lift"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(26,58,71,0.04)',
                    border: '1px solid rgba(26,58,71,0.09)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  {/* Featured image */}
                  <div style={{
                    width: '100%',
                    height: '200px',
                    backgroundImage: `url(${post.featuredImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    flexShrink: 0,
                  }} />

                  {/* Card content */}
                  <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>

                  {/* Category badge */}
                  <div style={{ marginBottom: '16px' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--copper)',
                        backgroundColor: 'rgba(34,184,209,0.1)',
                        border: '1px solid rgba(34,184,209,0.25)',
                        borderRadius: '20px',
                        padding: '4px 12px',
                      }}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: 'var(--white)',
                      lineHeight: 1.35,
                      marginBottom: '12px',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(26,58,71,0.6)',
                      lineHeight: 1.7,
                      marginBottom: '24px',
                      flexGrow: 1,
                    }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Meta row */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px 16px',
                      alignItems: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    <span
                      style={{ fontSize: '0.75rem', color: 'rgba(26,58,71,0.38)' }}
                    >
                      {post.date}
                    </span>
                    <span
                      style={{
                        width: '3px',
                        height: '3px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(26,58,71,0.2)',
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{ fontSize: '0.75rem', color: 'rgba(26,58,71,0.38)' }}
                    >
                      {post.readTime}
                    </span>
                    <span
                      style={{
                        width: '3px',
                        height: '3px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(26,58,71,0.2)',
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{ fontSize: '0.75rem', color: 'rgba(26,58,71,0.45)' }}
                    >
                      {post.author}
                    </span>
                  </div>

                  {/* CTA link */}
                  <div
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'var(--copper)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    Read Article
                    <span
                      style={{
                        fontSize: '1rem',
                        transition: 'transform 0.2s ease',
                        display: 'inline-block',
                      }}
                    >
                      →
                    </span>
                  </div>
                  </div>{/* end card content */}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
