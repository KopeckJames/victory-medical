import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import ReadingProgress from '@/components/ReadingProgress'
import { BLOG_POSTS } from '@/lib/blog-data'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'Article Not Found | Victory Medical',
    }
  }

  return {
    title: `${post.title} | Victory Medical Austin TX`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <>
      <Navbar />
      <main>
        <ReadingProgress />
        {/* ── Article prose styles ─────────────────────────────────────── */}
        <style>{`
          .article-body h2 {
            font-family: var(--font-playfair);
            font-size: 1.5rem;
            font-weight: 600;
            color: #ffffff;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            line-height: 1.3;
            letter-spacing: -0.01em;
          }
          .article-body h3 {
            font-family: var(--font-playfair);
            font-size: 1.15rem;
            font-weight: 600;
            color: rgba(255,255,255,0.9);
            margin-top: 2rem;
            margin-bottom: 0.75rem;
            line-height: 1.35;
          }
          .article-body p {
            font-size: 1.05rem;
            line-height: 1.85;
            color: rgba(255,255,255,0.75);
            margin-bottom: 1.25rem;
          }
          .article-body ul {
            margin: 0 0 1.25rem 0;
            padding-left: 0;
            list-style: none;
          }
          .article-body ul li {
            font-size: 1.05rem;
            line-height: 1.75;
            color: rgba(255,255,255,0.72);
            padding: 5px 0 5px 22px;
            position: relative;
          }
          .article-body ul li::before {
            content: '';
            position: absolute;
            left: 0;
            top: 14px;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background-color: var(--copper);
          }
          .article-body strong {
            color: rgba(255,255,255,0.92);
            font-weight: 600;
          }
          .article-body h2:first-child,
          .article-body h3:first-child {
            margin-top: 0;
          }
        `}</style>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section
          className="noise-overlay"
          style={{
            backgroundColor: 'var(--dark-teal)',
            paddingTop: '140px',
            paddingBottom: '80px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse 50% 70% at 20% 60%, rgba(201,122,60,0.08) 0%, transparent 65%)',
              pointerEvents: 'none',
            }}
          />
          <div className="container" style={{ position: 'relative' }}>
            {/* Back link */}
            <Link
              href="/blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.45)',
                textDecoration: 'none',
                marginBottom: '32px',
                transition: 'color 0.2s ease',
              }}
              className="hover-back-link"
            >
              ← Back to Blog
            </Link>

            {/* Category badge */}
            <div style={{ marginBottom: '20px' }}>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--copper)',
                  backgroundColor: 'rgba(201,122,60,0.1)',
                  border: '1px solid rgba(201,122,60,0.25)',
                  borderRadius: '20px',
                  padding: '5px 14px',
                }}
              >
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1
              className="heading-display"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                color: 'var(--white)',
                maxWidth: '780px',
                marginBottom: '32px',
              }}
            >
              {post.title}
            </h1>

            {/* Author + metadata row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '8px 20px',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--white)',
                    marginBottom: '2px',
                  }}
                >
                  {post.author}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--gold)' }}>
                  {post.authorTitle}
                </div>
              </div>

              <div
                style={{
                  width: '1px',
                  height: '32px',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  flexShrink: 0,
                }}
              />

              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)' }}>
                {post.date}
              </div>

              <div
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.25)',
                  flexShrink: 0,
                }}
              />

              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)' }}>
                {post.readTime}
              </div>
            </div>
          </div>
        </section>

        {/* ── Breadcrumb ───────────────────────────────────────────────── */}
        <div className="container" style={{ paddingTop: '24px', paddingBottom: '8px' }}>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
          />
        </div>

        {/* ── Article Body + Sidebar Layout ────────────────────────────── */}
        <section
          style={{
            backgroundColor: 'var(--teal)',
            padding: '80px 0 100px',
          }}
        >
          <div className="container">
            <div
              className="article-layout"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 320px',
                gap: '60px',
                alignItems: 'start',
              }}
            >
              {/* Article content */}
              <div>
                <div
                  className="article-body"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Bottom CTA */}
                <div
                  style={{
                    marginTop: '60px',
                    padding: '40px',
                    background:
                      'linear-gradient(135deg, rgba(201,122,60,0.1) 0%, rgba(14,45,60,0.8) 100%)',
                    border: '1px solid rgba(201,122,60,0.25)',
                    borderRadius: '16px',
                  }}
                >
                  <div className="section-label" style={{ marginBottom: '12px' }}>
                    Victory Medical, Austin TX
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: '1.4rem',
                      fontWeight: 600,
                      color: 'var(--white)',
                      marginBottom: '12px',
                    }}
                  >
                    Ready to take the next step?
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'rgba(255,255,255,0.65)',
                      lineHeight: 1.75,
                      marginBottom: '24px',
                    }}
                  >
                    Victory Medical has served Austin patients since 1996. Our integrative team — physicians, NPs, and specialists — is ready to help. Walk-ins welcome at our South Austin clinic.
                  </p>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <a
                      href="https://www.priviahealth.com/practice/victory-medical/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Book an Appointment
                    </a>
                    <Link href="/contact" className="btn-outline">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside style={{ position: 'sticky', top: '100px' }}>
                <div style={{ marginBottom: '8px' }}>
                  <div
                    style={{
                      fontSize: '0.65rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      fontWeight: 600,
                      marginBottom: '20px',
                    }}
                  >
                    More Articles
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="hover-card-lift"
                        style={{
                          display: 'block',
                          backgroundColor: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: '10px',
                          padding: '20px',
                          textDecoration: 'none',
                          color: 'inherit',
                        }}
                      >
                        <span
                          style={{
                            display: 'inline-block',
                            fontSize: '0.6rem',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'var(--copper)',
                            marginBottom: '8px',
                          }}
                        >
                          {related.category}
                        </span>
                        <h4
                          style={{
                            fontFamily: 'var(--font-playfair)',
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            color: 'var(--white)',
                            lineHeight: 1.4,
                            marginBottom: '8px',
                          }}
                        >
                          {related.title}
                        </h4>
                        <div
                          style={{
                            fontSize: '0.7rem',
                            color: 'rgba(255,255,255,0.35)',
                          }}
                        >
                          {related.readTime} · {related.author}
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div style={{ marginTop: '24px' }}>
                    <Link
                      href="/blog"
                      style={{
                        display: 'block',
                        textAlign: 'center',
                        padding: '12px 20px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--copper)',
                        border: '1px solid rgba(201,122,60,0.3)',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        transition: 'background-color 0.2s ease, border-color 0.2s ease',
                      }}
                      className="hover-card-copper"
                    >
                      View All Articles →
                    </Link>
                  </div>
                </div>

                {/* Quick contact card */}
                <div
                  style={{
                    marginTop: '28px',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '10px',
                    padding: '20px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      marginBottom: '12px',
                    }}
                  >
                    Questions?
                  </div>
                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: 'rgba(255,255,255,0.55)',
                      lineHeight: 1.6,
                      marginBottom: '14px',
                    }}
                  >
                    Our team is available Monday–Friday 8 AM – 7 PM and weekends.
                  </p>
                  <a
                    href="tel:5124623627"
                    style={{
                      display: 'block',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--white)',
                      textDecoration: 'none',
                    }}
                  >
                    (512) 462-3627
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .hover-back-link:hover {
          color: rgba(255,255,255,0.75) !important;
        }
        @media (max-width: 900px) {
          .article-layout {
            grid-template-columns: 1fr !important;
          }
          .article-layout aside {
            position: static !important;
          }
        }
      `}</style>
    </>
  )
}
