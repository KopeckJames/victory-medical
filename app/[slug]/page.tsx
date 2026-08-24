import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import ReadingProgress from '@/components/ReadingProgress'
import LegacyBlocks from '@/components/LegacyBlocks'
import JsonLd from '@/components/JsonLd'
import { getLegacyIndex, getLegacyPage, formatLegacyDate } from '@/lib/legacy'

// Pages cloned from the old WordPress site, served at their exact old URLs
// so organic rankings carry over 1:1. Static routes (about, services, …)
// always win over this dynamic segment.

export const dynamicParams = false

export async function generateStaticParams() {
  return getLegacyIndex().map((e) => ({ slug: e.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getLegacyPage(slug)
  if (!page) return { title: 'Page Not Found | Victory Medical' }
  return {
    // absolute: keep the old page's exact title — the layout template would
    // append the site suffix onto titles that already carry their own branding
    title: { absolute: page.metaTitle },
    description: page.metaDescription || undefined,
    alternates: { canonical: page.path },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription || undefined,
      url: page.path,
      type: page.type === 'post' ? 'article' : 'website',
      ...(page.type === 'post' && page.datePublished
        ? { publishedTime: page.datePublished }
        : {}),
    },
  }
}

const CATEGORY_HUB: Record<string, { label: string; href: string }> = {
  'Health Article': { label: 'Blog', href: '/blog' },
  MedSpa: { label: 'MedSpa', href: '/medspa' },
  'Ketamine Therapy': { label: 'Services', href: '/services' },
  'Medical Services': { label: 'Services', href: '/services' },
  Legal: { label: 'Home', href: '/' },
}

export default async function LegacyPageRoute({ params }: Props) {
  const { slug } = await params
  const entry = getLegacyIndex().find((e) => e.slug === slug)
  const page = getLegacyPage(slug)
  if (!entry || !page) notFound()

  const hub = CATEGORY_HUB[entry.category] ?? CATEGORY_HUB['Medical Services']
  const title = page.h1 || entry.title
  const date = formatLegacyDate(page.datePublished)
  // Circular window over the category so every page receives inbound links
  // (a fixed "top 3" would leave most of the category orphaned)
  const peers = getLegacyIndex().filter(
    (e) => e.slug !== slug && e.category === entry.category
  )
  const pos = peers.findIndex((e) => e.slug > slug)
  const start = pos === -1 ? 0 : pos
  const related = peers.length <= 3
    ? peers
    : [0, 1, 2].map((i) => peers[(start + i) % peers.length])

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://victorymed.com/' },
      { '@type': 'ListItem', position: 2, name: hub.label, item: `https://victorymed.com${hub.href}` },
      { '@type': 'ListItem', position: 3, name: title },
    ],
  }
  const articleLd =
    page.type === 'post'
      ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: title,
          description: page.metaDescription || undefined,
          datePublished: page.datePublished || undefined,
          dateModified: page.dateModified || undefined,
          author: { '@type': 'MedicalOrganization', name: 'Victory Medical' },
          publisher: { '@type': 'MedicalOrganization', name: 'Victory Medical', url: 'https://victorymed.com' },
          mainEntityOfPage: `https://victorymed.com${page.path}`,
        }
      : null

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      {articleLd && <JsonLd data={articleLd} />}
      <Navbar />
      <main>
        {page.type === 'post' && <ReadingProgress />}

        {/* ── Prose styles for cloned content ─────────────────────────── */}
        <style>{`
          .legacy-body h2 {
            font-family: var(--font-playfair);
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            line-height: 1.3;
            letter-spacing: -0.01em;
          }
          .legacy-body h3 {
            font-family: var(--font-playfair);
            font-size: 1.15rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-top: 2rem;
            margin-bottom: 0.75rem;
            line-height: 1.35;
          }
          .legacy-body h4 {
            font-size: 1rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-top: 1.5rem;
            margin-bottom: 0.6rem;
          }
          .legacy-body p {
            font-size: 1.05rem;
            line-height: 1.85;
            color: var(--text-muted);
            margin-bottom: 1.25rem;
          }
          .legacy-body a {
            color: var(--brand);
            text-decoration: underline;
            text-underline-offset: 3px;
          }
          .legacy-body ul, .legacy-body ol {
            margin: 0 0 1.25rem 0;
            padding-left: 0;
            list-style: none;
          }
          .legacy-body li {
            font-size: 1.05rem;
            line-height: 1.75;
            color: var(--text-muted);
            padding: 5px 0 5px 22px;
            position: relative;
          }
          .legacy-body li::before {
            content: '';
            position: absolute;
            left: 0;
            top: 14px;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background-color: var(--accent);
          }
          .legacy-body strong { color: var(--text-primary); font-weight: 600; }
          .legacy-body blockquote {
            border-left: 3px solid var(--accent);
            margin: 1.5rem 0;
            padding: 8px 0 8px 20px;
            font-style: italic;
            color: var(--text-secondary);
          }
          .legacy-img {
            max-width: 100%;
            height: auto;
            border-radius: 12px;
            margin: 1.5rem auto;
            display: block;
          }
          .legacy-cta { margin: 1.75rem 0; }
          .legacy-video {
            position: relative;
            aspect-ratio: 16 / 9;
            margin: 1.5rem 0;
            border-radius: 12px;
            overflow: hidden;
          }
          .legacy-video iframe {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            border: 0;
          }
          .legacy-body h2:first-child, .legacy-body h3:first-child { margin-top: 0; }
        `}</style>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section
          className="noise-overlay"
          style={{
            backgroundColor: 'var(--bg-soft)',
            paddingTop: '140px',
            paddingBottom: '64px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse 50% 70% at 20% 60%, rgba(34,184,209,0.08) 0%, transparent 65%)',
              pointerEvents: 'none',
            }}
          />
          <div className="container" style={{ position: 'relative' }}>
            <div style={{ marginBottom: '20px' }}>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  backgroundColor: 'rgba(34,184,209,0.1)',
                  border: '1px solid rgba(34,184,209,0.25)',
                  borderRadius: '20px',
                  padding: '5px 14px',
                }}
              >
                {entry.category}
              </span>
            </div>
            <h1
              className="heading-display"
              style={{
                fontSize: 'clamp(1.9rem, 4vw, 3rem)',
                color: 'var(--text-primary)',
                maxWidth: '820px',
                marginBottom: date ? '20px' : '0',
              }}
            >
              {title}
            </h1>
            {page.type === 'post' && date && (
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {date} · Victory Medical
              </div>
            )}
          </div>
        </section>

        {/* ── Breadcrumb ───────────────────────────────────────────────── */}
        <div className="container" style={{ paddingTop: '24px', paddingBottom: '8px' }}>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: hub.label, href: hub.href },
              { label: title },
            ]}
          />
        </div>

        {/* ── Content ──────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: 'var(--bg-primary)', padding: '48px 0 100px' }}>
          <div className="container">
            <div style={{ maxWidth: '820px', margin: '0 auto' }}>
              <LegacyBlocks blocks={page.blocks} />

              {/* Bottom CTA card */}
              <div
                style={{
                  marginTop: '60px',
                  padding: '40px',
                  background:
                    'linear-gradient(135deg, rgba(34,184,209,0.1) 0%, rgba(255,255,255,0.8) 100%)',
                  border: '1px solid rgba(34,184,209,0.25)',
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
                    color: 'var(--text-primary)',
                    marginBottom: '12px',
                  }}
                >
                  Ready to take the next step?
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.75,
                    marginBottom: '24px',
                  }}
                >
                  Victory Medical has served Austin patients since 1996. Our integrative
                  team — physicians, NPs, and specialists — is ready to help. Call{' '}
                  <a href="tel:5124623627" style={{ color: 'var(--brand)', fontWeight: 600 }}>
                    (512) 462-3627
                  </a>{' '}
                  or book online.
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

              {/* Related pages */}
              {related.length > 0 && (
                <div style={{ marginTop: '48px' }}>
                  <div
                    style={{
                      fontSize: '0.65rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--brand)',
                      fontWeight: 600,
                      marginBottom: '16px',
                    }}
                  >
                    Related Reading
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                      gap: '14px',
                    }}
                  >
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={r.path}
                        className="hover-card-lift"
                        style={{
                          display: 'block',
                          backgroundColor: 'rgba(26,58,71,0.03)',
                          border: '1px solid rgba(26,58,71,0.08)',
                          borderRadius: '10px',
                          padding: '18px',
                          textDecoration: 'none',
                          color: 'inherit',
                        }}
                      >
                        <div
                          style={{
                            fontFamily: 'var(--font-playfair)',
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                            lineHeight: 1.4,
                          }}
                        >
                          {r.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
