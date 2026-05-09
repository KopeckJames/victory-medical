import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import TeamGrid from '@/components/TeamGrid'
import Image from 'next/image'
import { TEAM, FOUNDER } from '@/lib/team-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us & Our Providers | Victory Medical Austin TX',
  description: 'Meet our team of 20+ physicians, nurse practitioners, and specialists. Victory Medical — integrated healthcare in Central Texas since 1996.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us & Our Providers | Victory Medical Austin TX',
    description: 'Meet our team of 20+ physicians, nurse practitioners, and specialists. Victory Medical — integrated healthcare in Central Texas since 1996.',
    url: '/about',
  },
}

const milestones = [
  { year: '1983', event: 'Dr. William Franklin begins his medical career' },
  { year: '1996', event: 'Victory Medical founded in Austin, TX — and Ralph Hadley joins on Day 1' },
  { year: '2005', event: 'Dr. Gary Albertson joins, bringing 37+ years of allergy expertise' },
  { year: '2009', event: 'Dr. Nathan Pekar joins following Air Force service' },
  { year: '2010s', event: 'MedSpa services added — physician-supervised aesthetics' },
  { year: '2014', event: 'Therapeutic Botox program launched for migraines and TMJ' },
  { year: '2016', event: 'Charity Green joins; allergy program expands' },
  { year: '2019', event: 'Expansion to Westlake Hills location' },
  { year: '2020', event: 'MDVIP concierge program launches · Telemedicine services added' },
  { year: '2021', event: 'Ketamine therapy program launches · Ola Zylka joins as nurse injector' },
  { year: '2022', event: 'Victory Medical joins Privia Medical Group' },
  { year: '2023', event: 'Regenerative Medicine program launched under Judith Chedville · Dr. Prajapati named Top Doctor' },
  { year: '2024', event: 'Victory MedSpa moves to dedicated location at 2108 W Ben White Blvd' },
]

export default function AboutPage() {
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
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 60% 60% at 20% 60%, rgba(34,184,209,0.09) 0%, transparent 70%)',
          }} />
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(34,184,209,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(34,184,209,0.025) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            pointerEvents: 'none',
          }} />
          <div className="container" style={{ position: 'relative' }}>
            <div className="section-label" style={{ marginBottom: '16px' }}>Our Story</div>
            <h1 className="heading-display" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--white)',
              maxWidth: '700px',
              marginBottom: '32px',
            }}>
              Integrated Medicine in{' '}
              <span style={{ color: 'var(--copper)' }}>Central Texas Since 1996</span>
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--muted-text)',
              maxWidth: '600px',
              lineHeight: 1.85,
              marginBottom: '24px',
            }}>
              Victory Medical was built on a simple belief: the best healthcare treats the whole person — not just the symptom. For nearly three decades we&apos;ve combined traditional medicine with holistic wellness, assembling a team of 20+ physicians, NPs, and specialists who put patients first.
            </p>
            <p style={{
              fontSize: '1rem',
              color: 'rgba(26,58,71,0.5)',
              maxWidth: '560px',
              lineHeight: 1.8,
            }}>
              From a single clinic on Victory Drive to three locations serving all of Central Texas — our mission has never changed: exceptional care, delivered with experience, knowledge, passion, and professionalism.
            </p>
          </div>
        </section>

        {/* ── Mission Values ───────────────────────────────────────────── */}
        <section className="section noise-overlay" style={{ backgroundColor: 'var(--teal)' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'center',
            }}
              className="responsive-two-col"
            >
              <div>
                <div className="section-label" style={{ marginBottom: '16px' }}>Our Mission</div>
                <h2 className="heading-section" style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  color: 'var(--white)',
                  marginBottom: '24px',
                }}>
                  One Ultimate Goal
                </h2>
                <blockquote style={{
                  borderLeft: '3px solid var(--copper)',
                  paddingLeft: '24px',
                  marginBottom: '24px',
                }}>
                  <p style={{
                    fontSize: '1.05rem',
                    color: 'var(--muted-text)',
                    lineHeight: 1.8,
                    fontStyle: 'italic',
                  }}>
                    &ldquo;At Victory Medical, we have but one ultimate goal: to provide for all of our patients&apos; needs with the best medical care possible.&rdquo;
                  </p>
                </blockquote>
                <p style={{ fontSize: '0.95rem', color: 'rgba(26,58,71,0.5)', lineHeight: 1.8 }}>
                  Our caring team of physicians and staff bring experience, knowledge, passion, and professionalism to every patient interaction — whether you&apos;re here for a routine checkup or cutting-edge regenerative therapy.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { label: 'Integrated Approach', text: 'Traditional and holistic medicine working together for better outcomes — including acupuncture, peptide therapy, and functional medicine.', icon: '⊕' },
                  { label: 'Patient First', text: 'Every clinical decision starts with what is best for you. No protocols over patients.', icon: '♥' },
                  { label: 'Accessible Care', text: 'Walk-ins always welcome. Extended hours. Three convenient Central Texas locations.', icon: '◎' },
                  { label: 'Complete Team', text: 'Physicians, NPs, PAs, pharmacists, physical therapists, and a chiropractor — all under one roof.', icon: '◈' },
                ].map((value) => (
                  <div
                    key={value.label}
                    className="card-depth"
                    style={{
                      display: 'flex',
                      gap: '16px',
                      padding: '20px 24px',
                      borderRadius: '12px',
                    }}
                  >
                    <div style={{
                      fontSize: '1rem', color: 'var(--copper)',
                      flexShrink: 0, width: '24px',
                      textAlign: 'center', marginTop: '2px',
                    }}>{value.icon}</div>
                    <div>
                      <div style={{
                        fontSize: '0.875rem', fontWeight: 600,
                        color: 'var(--white)', marginBottom: '5px',
                        fontFamily: 'var(--font-playfair)',
                      }}>{value.label}</div>
                      <div style={{ fontSize: '0.825rem', color: 'rgba(26,58,71,0.55)', lineHeight: 1.6 }}>
                        {value.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Founder Feature Card ─────────────────────────────────────── */}
        {FOUNDER && (
          <section style={{
            backgroundColor: 'var(--dark-teal)',
            padding: '80px 0',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse 50% 70% at 80% 50%, rgba(34,184,209,0.07) 0%, transparent 60%)',
              pointerEvents: 'none',
            }} />
            <div className="container" style={{ position: 'relative' }}>
              <div className="section-label" style={{ marginBottom: '32px' }}>Our Founder</div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '300px 1fr',
                gap: '60px',
                alignItems: 'start',
              }}
                className="founder-grid"
              >
                {/* Photo */}
                <div>
                  <div style={{
                    height: '320px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    backgroundColor: 'var(--light-teal)',
                    border: '1px solid rgba(34,184,209,0.25)',
                    marginBottom: '20px',
                    position: 'relative',
                  }}>
                    {FOUNDER.imageUrl ? (
                      <Image
                        src={FOUNDER.imageUrl}
                        alt={FOUNDER.name}
                        fill
                        sizes="300px"
                        style={{ objectFit: 'cover', objectPosition: 'center top' }}
                      />
                    ) : (
                      <div style={{
                        width: '100%', height: '100%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'linear-gradient(135deg, var(--light-teal), var(--dark-teal))',
                      }}>
                        <span style={{
                          fontFamily: 'var(--font-playfair)',
                          fontSize: '3rem', color: 'var(--gold)',
                        }}>{FOUNDER.initials}</span>
                      </div>
                    )}
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      height: '80px',
                      background: 'linear-gradient(to top, rgba(255,255,255,0.8), transparent)',
                    }} />
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {FOUNDER.specialties.map(s => (
                      <span key={s} style={{
                        fontSize: '0.65rem', padding: '3px 10px',
                        backgroundColor: 'rgba(34,184,209,0.1)',
                        border: '1px solid rgba(34,184,209,0.2)',
                        borderRadius: '20px', color: 'rgba(26,58,71,0.7)',
                      }}>{s}</span>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <h2 className="heading-section" style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.8rem',
                    color: 'var(--white)', marginBottom: '6px',
                  }}>{FOUNDER.name}</h2>
                  <div style={{ fontSize: '0.875rem', color: 'var(--copper)', fontWeight: 500, marginBottom: '6px' }}>
                    {FOUNDER.title}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(26,58,71,0.4)', marginBottom: '28px' }}>
                    {FOUNDER.credentials}
                  </div>
                  <p style={{
                    fontSize: '1rem', color: 'rgba(26,58,71,0.75)',
                    lineHeight: 1.85, marginBottom: '28px',
                  }}>
                    {FOUNDER.bio}
                  </p>

                  {/* Affiliations */}
                  <div style={{ marginBottom: '28px' }}>
                    <div style={{
                      fontSize: '0.65rem', letterSpacing: '0.12em',
                      textTransform: 'uppercase', color: 'var(--gold)',
                      marginBottom: '12px', fontWeight: 600,
                    }}>Professional Affiliations</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {[
                        'American Academy of Anti-Aging Medicine',
                        'Society of Clinical Allergy',
                        'Privia Medical Group',
                        'UT Austin Nursing School (Assoc. Professor)',
                        'UTMB Teaching Faculty',
                        'Phi Chi Medical Fraternity',
                      ].map(a => (
                        <span key={a} style={{
                          fontSize: '0.68rem', padding: '4px 12px',
                          backgroundColor: 'rgba(34,109,122,0.08)',
                          border: '1px solid rgba(34,109,122,0.2)',
                          borderRadius: '20px', color: 'var(--gold)',
                        }}>{a}</span>
                      ))}
                    </div>
                  </div>

                  <blockquote style={{
                    borderLeft: '3px solid var(--copper)',
                    paddingLeft: '20px',
                  }}>
                    <p style={{
                      fontSize: '0.95rem', color: 'rgba(26,58,71,0.6)',
                      fontStyle: 'italic', lineHeight: 1.7, marginBottom: '6px',
                    }}>
                      &ldquo;Healing is a matter of time, but it is sometimes also a matter of opportunity.&rdquo;
                    </p>
                    <cite style={{ fontSize: '0.75rem', color: 'var(--gold)' }}>— Hippocrates</cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── Full Team Grid ───────────────────────────────────────────── */}
        <section className="section noise-overlay" style={{ backgroundColor: 'var(--teal)' }}>
          <div className="container">
            <div style={{ marginBottom: '48px' }}>
              <div className="section-label" style={{ marginBottom: '16px' }}>Our Providers</div>
              <div style={{
                display: 'flex', alignItems: 'flex-end',
                justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px',
              }}>
                <h2 className="heading-section" style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  color: 'var(--white)',
                }}>
                  Meet the Full Team
                </h2>
                <p style={{
                  fontSize: '0.875rem', color: 'rgba(26,58,71,0.4)',
                  maxWidth: '340px', lineHeight: 1.6,
                }}>
                  20+ physicians, nurse practitioners, PAs, and specialists across three Austin-area locations.
                </p>
              </div>
            </div>

            <TeamGrid team={TEAM} />
          </div>
        </section>

        {/* ── Timeline ─────────────────────────────────────────────────── */}
        <section className="section" style={{ backgroundColor: 'var(--dark-teal)' }}>
          <div className="container">
            <div style={{ marginBottom: '60px' }}>
              <div className="section-label" style={{ marginBottom: '16px' }}>Our History</div>
              <h2 className="heading-section" style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                color: 'var(--white)',
              }}>
                Nearly 3 Decades of{' '}
                <span style={{ color: 'var(--copper)' }}>Integrated Care</span>
              </h2>
            </div>

            <div style={{
              position: 'relative',
              paddingLeft: '48px',
            }}>
              {/* Vertical line */}
              <div style={{
                position: 'absolute',
                left: '10px',
                top: '8px', bottom: '8px',
                width: '2px',
                background: 'linear-gradient(to bottom, rgba(34,184,209,0.7), rgba(34,184,209,0.1))',
              }} />

              {milestones.map((m, i) => (
                <div
                  key={i}
                  style={{
                    position: 'relative',
                    paddingBottom: i < milestones.length - 1 ? '28px' : 0,
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                  }}
                >
                  {/* Dot */}
                  <div style={{
                    position: 'absolute',
                    left: '-39px',
                    top: '3px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: i === 0 ? 'var(--copper)' : 'var(--dark-teal)',
                    border: `2px solid ${i === 0 ? 'var(--copper)' : 'rgba(34,184,209,0.5)'}`,
                    boxShadow: i === 0
                      ? '0 0 0 4px rgba(34,184,209,0.15), 0 0 12px rgba(34,184,209,0.4)'
                      : '0 0 0 3px rgba(34,184,209,0.08)',
                  }} />

                  <div style={{
                    minWidth: '54px',
                    fontSize: '0.7rem',
                    letterSpacing: '0.08em',
                    color: 'var(--copper)',
                    fontWeight: 700,
                    paddingTop: '3px',
                  }}>{m.year}</div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'rgba(26,58,71,0.7)',
                    lineHeight: 1.55,
                    paddingTop: '2px',
                  }}>{m.event}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Privia Affiliation ───────────────────────────────────────── */}
        <section style={{ backgroundColor: 'var(--teal)', padding: '80px 0' }}>
          <div className="container">
            <div style={{
              background: 'linear-gradient(135deg, rgba(34,184,209,0.08) 0%, rgba(255,255,255,0.9) 100%)',
              border: '1px solid rgba(34,184,209,0.2)',
              borderRadius: '24px',
              padding: '60px',
              textAlign: 'center',
            }}>
              <div className="section-label" style={{ justifyContent: 'center', marginBottom: '16px' }}>
                Our Network
              </div>
              <h2 className="heading-section" style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '2rem',
                color: 'var(--white)', marginBottom: '20px',
              }}>
                A Proud Member of Privia Medical Group
              </h2>
              <p style={{
                fontSize: '1rem', color: 'var(--muted-text)',
                maxWidth: '600px', margin: '0 auto', lineHeight: 1.8,
              }}>
                The best doctors in our community have joined together to form Privia Medical Group (PMG) — a multi-specialty, high-performance physician network that puts patients first. Our providers are united by the mission of delivering better, more coordinated care.
              </p>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .founder-grid { grid-template-columns: 1fr !important; }
          .responsive-two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </>
  )
}
