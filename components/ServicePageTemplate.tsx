import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import PageVisual from '@/components/PageVisual'
import JsonLd from '@/components/JsonLd'

/* ────────────────────────────────────────────────────────────────────────
   Shared shell for the individual service pages. Carries the same section
   system as /mdvip — hero with stats, comparison block, benefit cards,
   process timeline, who-it's-for, FAQ, CTA — so every service page reads at
   the same level of finish while keeping its own substance.
   ──────────────────────────────────────────────────────────────────────── */

export interface ServiceStat { stat: string; label: string }
export interface ServiceBenefit { icon: string; title: string; description: string }
export interface ServiceStep { step: string; title: string; description: string }
export interface ServiceAudience { label: string; description: string }
export interface ServiceFaq { q: string; a: string }
export interface ComparisonRow { label: string; them: string; us: string }
export interface ServiceLink { label: string; href: string; external?: boolean }

export interface ServiceContent {
  path: string
  metaTitle: string
  metaDescription: string

  /** Hero */
  eyebrow: string
  h1: string
  h1Accent: string
  lede: string
  intro: string
  stats: ServiceStat[]
  heroPrimary: ServiceLink
  heroSecondary?: ServiceLink
  breadcrumbLabel: string
  visual?: { src: string; alt: string }

  /** Overview — two columns */
  overview: {
    label: string
    heading: string
    paragraphs: string[]
    callout?: { label: string; value: string; note: string }
    comparison?: { rows: ComparisonRow[]; themHeading: string; usHeading: string }
    checklist?: { heading: string; note?: string; items: string[] }
  }

  benefits?: { label: string; heading: string; intro?: string; items: ServiceBenefit[] }
  process?: { label: string; heading: string; intro?: string; steps: ServiceStep[] }
  audience?: { label: string; heading: string; intro?: string; items: ServiceAudience[] }
  faqs?: { label: string; heading: string; items: ServiceFaq[] }
  related?: ServiceLink[]

  cta: {
    label: string
    heading: string
    body: string
    address?: string
    primary: ServiceLink
    secondary?: ServiceLink
    badge?: { value: string; label: string }
  }
}

const PHONE = '(512) 462-3627'
const PHONE_HREF = 'tel:5124623627'

function Cta({ link, variant }: { link: ServiceLink; variant: 'primary' | 'outline' }) {
  const className = variant === 'primary' ? 'btn-primary' : 'btn-outline'
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        {link.label}
      </a>
    )
  }
  if (link.href.startsWith('tel:') || link.href.startsWith('mailto:')) {
    return <a href={link.href} className={className}>{link.label}</a>
  }
  return <Link href={link.href} className={className}>{link.label}</Link>
}

const h2Style: React.CSSProperties = {
  fontFamily: 'var(--font-playfair)',
  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
  fontWeight: 400,
  color: 'var(--white)',
  marginBottom: '12px',
}

export default function ServicePageTemplate({ content }: { content: ServiceContent }) {
  const { overview, benefits, process, audience, faqs, related, cta } = content

  const faqSchema = faqs && faqs.items.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.items.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: content.metaTitle,
    description: content.metaDescription,
    url: `https://victorymed.com${content.path}`,
    about: { '@type': 'MedicalProcedure', name: content.breadcrumbLabel },
    provider: {
      '@type': 'MedicalOrganization',
      name: 'Victory Medical',
      telephone: '+15124623627',
      url: 'https://victorymed.com',
    },
  }

  return (
    <>
      <Navbar />
      <JsonLd data={serviceSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section style={{
          backgroundColor: 'var(--dark-teal)',
          paddingTop: '160px',
          paddingBottom: '120px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 70% 70% at 80% 40%, rgba(34,184,209,0.12) 0%, transparent 65%)',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(34,109,122,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(34,109,122,0.02) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            pointerEvents: 'none',
          }} />

          <div className="container" style={{ position: 'relative' }}>
            <div className="section-label" style={{ marginBottom: '20px' }}>{content.eyebrow}</div>
            <h1 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)',
              fontWeight: 400,
              color: 'var(--white)',
              maxWidth: '760px',
              marginBottom: '32px',
              lineHeight: 1.1,
            }}>
              {content.h1}{' '}
              <span style={{ color: 'var(--copper)' }}>{content.h1Accent}</span>
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(26,58,71,0.8)',
              maxWidth: '600px',
              lineHeight: 1.75,
              marginBottom: '20px',
              fontFamily: 'var(--font-playfair)',
              fontStyle: 'italic',
            }}>
              {content.lede}
            </p>
            <p style={{
              fontSize: '1rem',
              color: 'var(--muted-text)',
              maxWidth: '580px',
              lineHeight: 1.8,
              marginBottom: '48px',
            }}>
              {content.intro}
            </p>

            {content.stats.length > 0 && (
              <div style={{
                display: 'flex',
                gap: '48px',
                flexWrap: 'wrap',
                marginBottom: '48px',
                paddingBottom: '48px',
                borderBottom: '1px solid rgba(26,58,71,0.08)',
              }}>
                {content.stats.map((item) => (
                  <div key={item.label}>
                    <div style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: '2.2rem',
                      fontWeight: 400,
                      color: 'var(--copper)',
                      lineHeight: 1,
                      marginBottom: '6px',
                    }}>{item.stat}</div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(26,58,71,0.5)' }}>{item.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Cta link={content.heroPrimary} variant="primary" />
              {content.heroSecondary && <Cta link={content.heroSecondary} variant="outline" />}
            </div>
          </div>
        </section>

        {/* ── Breadcrumb ───────────────────────────────────────────────── */}
        <div className="container" style={{ paddingTop: '24px', paddingBottom: '8px' }}>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: content.breadcrumbLabel },
            ]}
          />
        </div>

        {content.visual && <PageVisual src={content.visual.src} alt={content.visual.alt} />}

        {/* ── Overview ─────────────────────────────────────────────────── */}
        <section className="section" style={{ backgroundColor: 'var(--teal)' }}>
          <div className="container">
            <div
              className="responsive-two-col"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}
            >
              <div>
                <div className="section-label" style={{ marginBottom: '16px' }}>{overview.label}</div>
                <h2 style={{ ...h2Style, marginBottom: '24px' }}>{overview.heading}</h2>
                {overview.paragraphs.map((p, i) => (
                  <p key={i} style={{
                    fontSize: '1rem',
                    color: i === 0 ? 'rgba(26,58,71,0.75)' : 'rgba(26,58,71,0.65)',
                    lineHeight: 1.85,
                    marginBottom: i === overview.paragraphs.length - 1 ? '32px' : '20px',
                  }}>
                    {p}
                  </p>
                ))}
                {overview.callout && (
                  <div style={{
                    padding: '24px',
                    backgroundColor: 'rgba(34,184,209,0.08)',
                    border: '1px solid rgba(34,184,209,0.2)',
                    borderLeft: '3px solid var(--copper)',
                    borderRadius: '0 12px 12px 0',
                  }}>
                    <div style={{
                      fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'var(--gold)', marginBottom: '8px', fontWeight: 600,
                    }}>{overview.callout.label}</div>
                    <div style={{
                      fontSize: '1.3rem', fontFamily: 'var(--font-playfair)',
                      color: 'var(--white)', marginBottom: '6px',
                    }}>{overview.callout.value}</div>
                    <div style={{ fontSize: '0.825rem', color: 'rgba(26,58,71,0.55)', lineHeight: 1.6 }}>
                      {overview.callout.note}
                    </div>
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {overview.comparison && (
                  <>
                    <div style={{
                      display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px',
                      padding: '0 20px',
                      fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600,
                    }}>
                      <span />
                      <span style={{ color: 'rgba(26,58,71,0.35)' }}>{overview.comparison.themHeading}</span>
                      <span style={{ color: 'var(--gold)' }}>{overview.comparison.usHeading}</span>
                    </div>
                    {overview.comparison.rows.map((row) => (
                      <div key={row.label} style={{
                        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px',
                        padding: '16px 20px',
                        backgroundColor: 'rgba(26,58,71,0.03)',
                        border: '1px solid rgba(26,58,71,0.06)',
                        borderRadius: '10px',
                        alignItems: 'center',
                      }}>
                        <div style={{ fontSize: '0.8rem', color: 'rgba(26,58,71,0.5)', fontWeight: 500 }}>{row.label}</div>
                        <div style={{ fontSize: '0.8rem', color: 'rgba(26,58,71,0.4)' }}>{row.them}</div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--copper)', fontWeight: 600 }}>{row.us}</div>
                      </div>
                    ))}
                  </>
                )}

                {overview.checklist && (
                  <div className="card-depth" style={{ borderRadius: '16px', padding: '36px' }}>
                    <div style={{
                      fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'var(--gold)', marginBottom: '20px', fontWeight: 600,
                    }}>{overview.checklist.heading}</div>
                    <div style={{ display: 'grid', gap: '12px' }}>
                      {overview.checklist.items.map((item) => (
                        <div key={item} style={{
                          display: 'flex', alignItems: 'flex-start', gap: '12px',
                          fontSize: '0.9rem', color: 'rgba(26,58,71,0.7)', lineHeight: 1.6,
                        }}>
                          <span style={{
                            width: '6px', height: '6px', borderRadius: '50%',
                            backgroundColor: 'var(--copper)', marginTop: '8px', flexShrink: 0,
                          }} />
                          {item}
                        </div>
                      ))}
                    </div>
                    {overview.checklist.note && (
                      <p style={{
                        fontSize: '0.825rem', color: 'rgba(26,58,71,0.5)',
                        lineHeight: 1.7, marginTop: '24px', marginBottom: 0, fontStyle: 'italic',
                      }}>
                        {overview.checklist.note}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Benefits ─────────────────────────────────────────────────── */}
        {benefits && (
          <section className="section" style={{ backgroundColor: 'var(--dark-teal)' }}>
            <div className="container">
              <div style={{ marginBottom: '64px', textAlign: 'center' }}>
                <div className="section-label" style={{ justifyContent: 'center', marginBottom: '16px' }}>
                  {benefits.label}
                </div>
                <h2 style={h2Style}>{benefits.heading}</h2>
                {benefits.intro && (
                  <p style={{ fontSize: '1rem', color: 'var(--muted-text)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
                    {benefits.intro}
                  </p>
                )}
              </div>

              <div className="benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {benefits.items.map((benefit) => (
                  <div key={benefit.title} className="hover-card-copper" style={{
                    backgroundColor: 'rgba(26,58,71,0.03)',
                    border: '1px solid rgba(26,58,71,0.07)',
                    borderRadius: '16px',
                    padding: '36px 28px',
                  }}>
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '12px',
                      backgroundColor: 'rgba(34,184,209,0.12)',
                      border: '1px solid rgba(34,184,209,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.1rem', color: 'var(--copper)', marginBottom: '20px',
                    }}>{benefit.icon}</div>
                    <h3 style={{
                      fontFamily: 'var(--font-playfair)', fontSize: '1.15rem', fontWeight: 400,
                      color: 'var(--white)', marginBottom: '12px',
                    }}>{benefit.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(26,58,71,0.6)', lineHeight: 1.7, margin: 0 }}>
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Process ──────────────────────────────────────────────────── */}
        {process && (
          <section className="section" style={{ backgroundColor: 'var(--teal)' }}>
            <div className="container">
              <div style={{ marginBottom: '64px' }}>
                <div className="section-label" style={{ marginBottom: '16px' }}>{process.label}</div>
                <h2 style={h2Style}>{process.heading}</h2>
                {process.intro && (
                  <p style={{ fontSize: '1rem', color: 'var(--muted-text)', maxWidth: '520px', lineHeight: 1.7 }}>
                    {process.intro}
                  </p>
                )}
              </div>

              <div style={{ position: 'relative', paddingLeft: '48px' }}>
                <div style={{
                  position: 'absolute', left: '10px', top: '8px', bottom: '8px', width: '2px',
                  background: 'linear-gradient(to bottom, rgba(34,184,209,0.8), rgba(34,184,209,0.1))',
                }} />
                {process.steps.map((item, i) => (
                  <div key={item.step} style={{
                    position: 'relative',
                    paddingBottom: i < process.steps.length - 1 ? '40px' : 0,
                    display: 'grid', gridTemplateColumns: '80px 1fr', gap: '24px',
                    alignItems: 'flex-start',
                  }}>
                    <div style={{
                      position: 'absolute', left: '-39px', top: '4px',
                      width: '18px', height: '18px', borderRadius: '50%',
                      backgroundColor: i === 0 ? 'var(--copper)' : 'var(--teal)',
                      border: `2px solid ${i === 0 ? 'var(--copper)' : 'rgba(34,184,209,0.5)'}`,
                      boxShadow: i === 0
                        ? '0 0 0 4px rgba(34,184,209,0.15), 0 0 12px rgba(34,184,209,0.4)'
                        : '0 0 0 3px rgba(34,184,209,0.08)',
                    }} />
                    <div style={{
                      fontFamily: 'var(--font-playfair)', fontSize: '2rem', fontWeight: 400,
                      color: 'rgba(34,184,209,0.4)', lineHeight: 1, paddingTop: '2px',
                    }}>{item.step}</div>
                    <div>
                      <h3 style={{
                        fontFamily: 'var(--font-playfair)', fontSize: '1.1rem', fontWeight: 400,
                        color: 'var(--white)', marginBottom: '8px',
                      }}>{item.title}</h3>
                      <p style={{ fontSize: '0.9rem', color: 'rgba(26,58,71,0.6)', lineHeight: 1.75, margin: 0 }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Who it's for ─────────────────────────────────────────────── */}
        {audience && (
          <section className="section" style={{ backgroundColor: 'var(--dark-teal)' }}>
            <div className="container">
              <div style={{ marginBottom: '48px' }}>
                <div className="section-label" style={{ marginBottom: '16px' }}>{audience.label}</div>
                <h2 style={h2Style}>{audience.heading}</h2>
                {audience.intro && (
                  <p style={{ fontSize: '1rem', color: 'var(--muted-text)', maxWidth: '520px', lineHeight: 1.7 }}>
                    {audience.intro}
                  </p>
                )}
              </div>

              <div className="responsive-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {audience.items.map((item) => (
                  <div key={item.label} className="card-depth" style={{
                    borderRadius: '14px', padding: '32px',
                    display: 'flex', gap: '20px', alignItems: 'flex-start',
                  }}>
                    <div style={{
                      width: '8px', height: '8px', borderRadius: '50%',
                      backgroundColor: 'var(--copper)', flexShrink: 0, marginTop: '8px',
                    }} />
                    <div>
                      <h3 style={{
                        fontFamily: 'var(--font-playfair)', fontSize: '1rem', fontWeight: 400,
                        color: 'var(--white)', marginBottom: '10px',
                      }}>{item.label}</h3>
                      <p style={{ fontSize: '0.875rem', color: 'rgba(26,58,71,0.6)', lineHeight: 1.7, margin: 0 }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        {faqs && (
          <section className="section" style={{ backgroundColor: 'var(--teal)' }}>
            <div className="container">
              <div style={{ marginBottom: '48px' }}>
                <div className="section-label" style={{ marginBottom: '16px' }}>{faqs.label}</div>
                <h2 style={{ ...h2Style, marginBottom: 0 }}>{faqs.heading}</h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '820px' }}>
                {faqs.items.map((faq) => (
                  <div key={faq.q} style={{
                    backgroundColor: 'rgba(26,58,71,0.04)',
                    border: '1px solid rgba(26,58,71,0.07)',
                    borderRadius: '14px',
                    padding: '32px',
                  }}>
                    <h3 style={{
                      fontFamily: 'var(--font-playfair)', fontSize: '1.05rem', fontWeight: 400,
                      color: 'var(--white)', marginBottom: '14px',
                      display: 'flex', alignItems: 'flex-start', gap: '12px',
                    }}>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        width: '24px', height: '24px', borderRadius: '50%',
                        backgroundColor: 'rgba(34,184,209,0.15)',
                        border: '1px solid rgba(34,184,209,0.3)',
                        fontSize: '0.65rem', color: 'var(--copper)', fontWeight: 700,
                        flexShrink: 0, marginTop: '1px',
                      }}>Q</span>
                      {faq.q}
                    </h3>
                    <p style={{
                      fontSize: '0.9rem', color: 'rgba(26,58,71,0.65)', lineHeight: 1.8,
                      paddingLeft: '36px', margin: 0,
                    }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Related services ─────────────────────────────────────────── */}
        {related && related.length > 0 && (
          <section style={{ backgroundColor: 'var(--dark-teal)', padding: '64px 0' }}>
            <div className="container">
              <div className="section-label" style={{ marginBottom: '24px' }}>Related Care</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {related.map((item) => (
                  <Link key={item.href} href={item.href} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '12px 20px',
                    backgroundColor: 'rgba(26,58,71,0.03)',
                    border: '1px solid rgba(26,58,71,0.08)',
                    borderRadius: '999px',
                    fontSize: '0.85rem', color: 'rgba(26,58,71,0.7)',
                    textDecoration: 'none',
                  }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--copper)' }} />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: 'var(--dark-teal)', padding: '100px 0' }}>
          <div className="container">
            <div className="cta-grid" style={{
              background: 'linear-gradient(135deg, rgba(34,184,209,0.12) 0%, rgba(255,255,255,0.95) 100%)',
              border: '1px solid rgba(34,184,209,0.3)',
              borderRadius: '24px',
              padding: '80px',
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '60px',
              alignItems: 'center',
            }}>
              <div>
                <div className="section-label" style={{ marginBottom: '16px' }}>{cta.label}</div>
                <h2 style={{ ...h2Style, marginBottom: '20px' }}>{cta.heading}</h2>
                <p style={{ fontSize: '1rem', color: 'var(--muted-text)', maxWidth: '480px', lineHeight: 1.8, marginBottom: '32px' }}>
                  {cta.body}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', minWidth: '60px' }}>Phone</span>
                    <a href={PHONE_HREF} style={{ color: 'var(--copper)', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 600 }}>
                      {PHONE}
                    </a>
                  </div>
                  {cta.address && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', minWidth: '60px' }}>Address</span>
                      <span style={{ color: 'rgba(26,58,71,0.7)', fontSize: '0.9rem' }}>{cta.address}</span>
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <Cta link={cta.primary} variant="primary" />
                  {cta.secondary && <Cta link={cta.secondary} variant="outline" />}
                </div>
              </div>

              {cta.badge && (
                <div style={{ textAlign: 'center', flexShrink: 0 }}>
                  <div style={{
                    width: '160px', height: '160px', borderRadius: '50%',
                    border: '2px solid rgba(34,184,209,0.3)',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    background: 'radial-gradient(ellipse at center, rgba(34,184,209,0.08) 0%, transparent 70%)',
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-playfair)', fontSize: '2.5rem', fontWeight: 400,
                      color: 'var(--copper)', lineHeight: 1, marginBottom: '6px',
                    }}>{cta.badge.value}</div>
                    <div style={{ fontSize: '0.7rem', color: 'rgba(26,58,71,0.4)', textAlign: 'center', maxWidth: '110px', lineHeight: 1.4 }}>
                      {cta.badge.label}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 1000px) {
          .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 700px) {
          .benefits-grid { grid-template-columns: 1fr !important; }
          .responsive-two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
