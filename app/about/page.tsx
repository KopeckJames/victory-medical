import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Victory Medical Austin TX',
  description: 'Learn about Victory Medical — providing integrated healthcare in Central Texas since 1996. Meet our team of physicians, nurse practitioners, and specialists.',
}

const team = [
  {
    name: 'Dr. William Franklin, MD',
    title: 'Founder & Medical Director',
    credentials: 'MD — University of Texas Medical Branch (UTMB), Galveston',
    bio: 'Dr. Franklin has been a healthcare provider since 1983 and founded Victory Medical in 1996 with a vision that has never wavered: comprehensive, integrated healthcare that treats the whole person. He holds specialized training in Natural Hormone Replacement Therapy and Anti-Aging Medicine, and his philosophy — that healing requires both science and compassion — is embedded in every aspect of Victory Medical\'s care.',
    quote: '"Healing is a matter of time, but it is sometimes also a matter of opportunity."',
    quoteAuthor: '— Hippocrates',
    specialties: ['Integrative Medicine', 'Hormone Therapy', 'Anti-Aging', 'Primary Care', 'Longevity Medicine'],
    imageUrl: 'https://victorymed.com/wp-content/uploads/2018/12/img_0779-crop-u60940.jpg',
    initials: 'WF',
  },
  {
    name: 'Melissa Gabrielli, DNP, APRN, FNP-BC, PMHNP-BC',
    title: 'Ketamine Therapist & MedSpa Injector',
    credentials: 'Doctorate in Nursing — University of South Alabama',
    bio: 'Dual board-certified in both family practice and mental health, Melissa brings a uniquely comprehensive perspective to patient care. Her background spans oncology, pediatric transplants, and emergency medicine, giving her exceptional clinical depth. She began using Botox therapeutically for TMJ and migraines in 2014 and is certified through the American Academy of Facial Esthetics. Today she serves as one of Victory\'s most sought-after providers for both therapeutic ketamine infusions and aesthetic treatments.',
    specialties: ['Ketamine Therapy', 'PTSD', 'Depression', 'Botox', 'Dermal Fillers', 'IV Vitamin Therapy'],
    imageUrl: null,
    initials: 'MG',
    booking: 'https://victory.janeapp.com/',
  },
  {
    name: 'Ola Zylka, MSN, FNP-C',
    title: 'Nurse Practitioner & Nurse Injector',
    credentials: 'MSN (4.0 GPA) — Neurotoxin Certified, Texas Laser and Aesthetics',
    bio: 'With over five years in nursing and three-plus years specializing in medical aesthetics, Ola brings a comprehensive, science-driven approach to every treatment. A former travel nurse who chose to plant roots in Austin, she completed her MSN with a 4.0 GPA and is preparing for board certification. Her philosophy: the best aesthetic outcomes integrate injectables, lasers, and advanced facial treatments as a cohesive regimen, not isolated procedures.',
    specialties: ['Botox & Dysport', 'Dermal Fillers', 'Sculptra', 'Laser Treatments', 'Advanced Facials'],
    imageUrl: null,
    initials: 'OZ',
    booking: 'https://victory.janeapp.com/',
  },
  {
    name: 'Dr. John Kim, MD',
    title: 'MDVIP Physician — Westlake Hills',
    credentials: 'MDVIP Concierge Medicine',
    bio: 'Dr. John Kim brings the MDVIP concierge medicine model to Victory Medical\'s Westlake Hills location, providing highly personalized, relationship-based primary care combined with comprehensive annual executive physicals. MDVIP members benefit from same-day access, extended appointments, and proactive preventive care.',
    specialties: ['Concierge Medicine', 'Preventive Care', 'Executive Physical', 'Chronic Disease Management'],
    imageUrl: null,
    initials: 'JK',
  },
  {
    name: 'Dr. Nomita Kim, MD',
    title: 'MDVIP Physician — Westlake Hills',
    credentials: 'MDVIP Concierge Medicine',
    bio: 'Alongside Dr. John Kim, Dr. Nomita Kim offers MDVIP concierge medicine at Victory Medical\'s Westlake Hills location. Her practice prioritizes time, attention, and personalized care that goes beyond what traditional primary care can provide.',
    specialties: ['Concierge Medicine', 'Preventive Care', 'Women\'s Health', 'Internal Medicine'],
    imageUrl: null,
    initials: 'NK',
  },
]

const milestones = [
  { year: '1983', event: 'Dr. William Franklin begins his medical career' },
  { year: '1996', event: 'Victory Medical founded in Austin, TX' },
  { year: '2010s', event: 'MedSpa services added — physician-supervised aesthetics' },
  { year: '2014', event: 'Therapeutic Botox program launched for migraines and TMJ' },
  { year: '2019', event: 'Expansion to Westlake Hills location' },
  { year: '2020', event: 'Telemedicine services launched' },
  { year: '2021', event: 'Ketamine therapy program initiated — one of few licensed US clinics' },
  { year: '2022', event: 'Joined Privia Medical Group' },
  { year: '2024', event: 'Victory MedSpa expands at dedicated 2108 W Ben White Blvd location' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
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
              background: 'radial-gradient(ellipse 60% 60% at 20% 60%, rgba(201,122,60,0.08) 0%, transparent 70%)',
            }}
          />
          <div className="container" style={{ position: 'relative' }}>
            <div className="section-label" style={{ marginBottom: '16px' }}>
              Our Story
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 400,
                color: 'var(--white)',
                maxWidth: '700px',
                marginBottom: '32px',
                lineHeight: 1.15,
              }}
            >
              Integrated Medicine in{' '}
              <span style={{ color: 'var(--copper)' }}>Central Texas Since 1996</span>
            </h1>
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--muted-text)',
                maxWidth: '600px',
                lineHeight: 1.8,
                marginBottom: '24px',
              }}
            >
              Victory Medical was built on a simple but powerful belief: that the best healthcare treats the whole person — not just the symptom. For nearly three decades, we&apos;ve combined traditional medicine with holistic wellness, building a team and a practice that puts patients first at every turn.
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.55)',
                maxWidth: '560px',
                lineHeight: 1.8,
              }}
            >
              From a single clinic in Austin to three locations serving all of Central Texas, our mission has never changed: provide every patient with the best medical care possible, delivered with experience, knowledge, passion, and professionalism.
            </p>
          </div>
        </section>

        {/* Mission Values */}
        <section className="section" style={{ backgroundColor: 'var(--teal)' }}>
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '80px',
                alignItems: 'center',
              }}
            >
              <div>
                <div className="section-label" style={{ marginBottom: '16px' }}>
                  Our Mission
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                    fontWeight: 400,
                    color: 'var(--white)',
                    marginBottom: '24px',
                  }}
                >
                  One Ultimate Goal
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--muted-text)', lineHeight: 1.8, marginBottom: '20px' }}>
                  &ldquo;At Victory Medical, we have but one ultimate goal: to provide for all of our patients&apos; needs with the best medical care possible.&rdquo;
                </p>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}>
                  Our caring team of physicians and staff bring experience, knowledge, passion, and professionalism to every patient interaction. We are a one-stop shop for all your healthcare needs — from routine checkups to cutting-edge therapies.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { label: 'Integrated Approach', text: 'Traditional and holistic medicine working together for better outcomes.' },
                  { label: 'Patient First', text: 'Every decision starts with what is best for you — not protocols or quotas.' },
                  { label: 'Accessible Care', text: 'Walk-ins welcome. Extended hours. Three convenient locations.' },
                  { label: 'Comprehensive Team', text: 'Physicians, NPs, pharmacists, and specialists under one roof.' },
                ].map((value) => (
                  <div
                    key={value.label}
                    style={{
                      display: 'flex',
                      gap: '20px',
                      padding: '24px',
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: '4px',
                        minHeight: '100%',
                        backgroundColor: 'var(--copper)',
                        borderRadius: '2px',
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          color: 'var(--white)',
                          marginBottom: '6px',
                          fontFamily: 'var(--font-playfair)',
                        }}
                      >
                        {value.label}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                        {value.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section" style={{ backgroundColor: 'var(--dark-teal)' }}>
          <div className="container">
            <div style={{ marginBottom: '60px' }}>
              <div className="section-label" style={{ marginBottom: '16px' }}>Our History</div>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 400, color: 'var(--white)' }}>
                Nearly 3 Decades of <span style={{ color: 'var(--copper)' }}>Integrated Care</span>
              </h2>
            </div>
            <div style={{ position: 'relative', paddingLeft: '40px', borderLeft: '1px solid rgba(201,122,60,0.3)' }}>
              {milestones.map((m, i) => (
                <div
                  key={i}
                  style={{
                    position: 'relative',
                    paddingBottom: i < milestones.length - 1 ? '32px' : 0,
                    display: 'flex',
                    gap: '24px',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: '-48px',
                      top: '4px',
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--copper)',
                      border: '2px solid var(--dark-teal)',
                    }}
                  />
                  <div
                    style={{
                      fontSize: '0.75rem',
                      letterSpacing: '0.08em',
                      color: 'var(--copper)',
                      fontWeight: 600,
                      minWidth: '60px',
                      paddingTop: '2px',
                    }}
                  >
                    {m.year}
                  </div>
                  <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
                    {m.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section" style={{ backgroundColor: 'var(--teal)' }}>
          <div className="container">
            <div style={{ marginBottom: '60px' }}>
              <div className="section-label" style={{ marginBottom: '16px' }}>Our Providers</div>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 400, color: 'var(--white)' }}>
                Meet the Team
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {team.map((member, i) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '280px 1fr',
                    gap: '48px',
                    padding: '40px',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '16px',
                    alignItems: 'start',
                  }}
                >
                  {/* Photo/Avatar */}
                  <div>
                    <div
                      style={{
                        height: '280px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        backgroundColor: 'var(--dark-teal)',
                        marginBottom: '20px',
                      }}
                    >
                      {member.imageUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={member.imageUrl}
                          alt={member.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                        />
                      ) : (
                        <div
                          style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'linear-gradient(135deg, var(--light-teal) 0%, var(--dark-teal) 100%)',
                          }}
                        >
                          <div
                            style={{
                              width: '100px',
                              height: '100px',
                              borderRadius: '50%',
                              backgroundColor: 'var(--lightest-teal)',
                              border: '2px solid rgba(201,122,60,0.4)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontFamily: 'var(--font-playfair)',
                              fontSize: '2.5rem',
                              color: 'var(--gold)',
                            }}
                          >
                            {member.initials}
                          </div>
                        </div>
                      )}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {member.specialties.map((s) => (
                        <span
                          key={s}
                          style={{
                            fontSize: '0.65rem',
                            padding: '3px 10px',
                            backgroundColor: 'rgba(201,122,60,0.1)',
                            border: '1px solid rgba(201,122,60,0.2)',
                            borderRadius: '20px',
                            color: 'rgba(255,255,255,0.7)',
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bio */}
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.5rem', fontWeight: 400, color: 'var(--white)', marginBottom: '6px' }}>
                      {member.name}
                    </h3>
                    <div style={{ fontSize: '0.875rem', color: 'var(--copper)', fontWeight: 500, marginBottom: '4px' }}>
                      {member.title}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginBottom: '24px', lineHeight: 1.5 }}>
                      {member.credentials}
                    </div>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '24px' }}>
                      {member.bio}
                    </p>
                    {member.quote && (
                      <blockquote
                        style={{
                          borderLeft: '3px solid var(--copper)',
                          paddingLeft: '20px',
                          marginBottom: '24px',
                        }}
                      >
                        <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '6px' }}>
                          {member.quote}
                        </p>
                        <cite style={{ fontSize: '0.75rem', color: 'var(--gold)' }}>{member.quoteAuthor}</cite>
                      </blockquote>
                    )}
                    {member.booking && (
                      <a
                        href={member.booking}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ padding: '10px 20px', fontSize: '0.75rem' }}
                      >
                        Book with {member.name.split(',')[0].split(' ')[1]}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privia */}
        <section style={{ backgroundColor: 'var(--dark-teal)', padding: '80px 0' }}>
          <div className="container">
            <div
              style={{
                backgroundColor: 'rgba(201,122,60,0.06)',
                border: '1px solid rgba(201,122,60,0.2)',
                borderRadius: '20px',
                padding: '60px',
                textAlign: 'center',
              }}
            >
              <div className="section-label" style={{ justifyContent: 'center', marginBottom: '16px' }}>
                Our Network
              </div>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', fontWeight: 400, color: 'var(--white)', marginBottom: '20px' }}>
                A Proud Member of Privia Medical Group
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--muted-text)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
                The best doctors in our community have joined together to form Privia Medical Group (PMG), a multi-specialty, high-performance medical group that puts patients first. Our physicians are united by the mission of providing better, more coordinated care.
              </p>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
