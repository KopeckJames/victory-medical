import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MDVIP Concierge Medicine Austin TX | Victory Medical Westlake Hills',
  description: 'MDVIP concierge medicine at Victory Medical Westlake Hills. Same-day appointments, 24/7 direct physician access, and a patient panel capped at 150. Experience relationship-based medicine in Austin TX at 3811 Bee Caves Rd.',
}

const benefits = [
  {
    icon: '⊕',
    title: 'Same-Day Appointments',
    description: 'No waiting weeks for a routine visit. MDVIP members are seen same-day or next-day — often within hours of calling.',
  },
  {
    icon: '◎',
    title: '24/7 Direct Physician Access',
    description: 'Your physician\'s personal cell number. Call, text, or message any time — evenings, weekends, and holidays.',
  },
  {
    icon: '◇',
    title: '90-Minute Annual Wellness Exam',
    description: 'A comprehensive annual exam that actually takes time — labs, heart health, screenings, and a personalized prevention plan built around you.',
  },
  {
    icon: '⟳',
    title: 'Coordinated Specialist Referrals',
    description: 'Your physician personally coordinates specialist care and follows up on every referral — no getting lost in the system.',
  },
  {
    icon: '✦',
    title: 'Personalized Prevention Plan',
    description: 'A living health plan updated every year with your goals, risk factors, screening schedule, and lifestyle recommendations.',
  },
  {
    icon: '◈',
    title: 'MDVIP National Network',
    description: 'Access to 1,100+ MDVIP-affiliated physicians nationwide. When you travel, you have concierge-level access wherever you are.',
  },
]

const timeline = [
  {
    step: '01',
    title: 'Enrollment & Welcome',
    description: 'Complete your MDVIP enrollment. Your physician reviews your full medical history, current medications, and health goals before your first appointment.',
  },
  {
    step: '02',
    title: '90-Minute Comprehensive Exam',
    description: 'The centerpiece of MDVIP. A thorough physical with advanced labs, cardiovascular screening, and a deep discussion of your health — all with no time pressure.',
  },
  {
    step: '03',
    title: 'Your Personalized Health Plan',
    description: 'Your physician builds a customized prevention and wellness plan covering your top health risks, recommended screenings, fitness goals, and nutrition guidance.',
  },
  {
    step: '04',
    title: '24/7 Ongoing Access',
    description: 'Direct access to your physician — any time, any day. Same-day appointments, quick answers over the phone, and a provider who knows you by name.',
  },
  {
    step: '05',
    title: 'Quarterly Check-Ins',
    description: 'Proactive check-ins throughout the year to track your progress, adjust your health plan, and address any changes before they become problems.',
  },
  {
    step: '06',
    title: 'Annual Renewal',
    description: 'Each year your comprehensive exam is repeated, your plan is refreshed, and your physician reviews your full-year health trajectory with you.',
  },
]

const whoIsItFor = [
  {
    label: 'Executives & Busy Professionals',
    description: 'Your time is valuable. Same-day access and 24/7 communication means healthcare that works around your schedule — not the other way around.',
  },
  {
    label: 'Frequent Travelers',
    description: 'Medical questions and minor issues arise on the road. Direct physician access and the MDVIP national network keep you covered wherever you are.',
  },
  {
    label: 'Chronic Condition Management',
    description: 'Diabetes, hypertension, heart disease — complex conditions benefit from a physician who has the time to truly manage your care proactively.',
  },
  {
    label: 'Relationship-Based Medicine',
    description: 'Anyone who\'s tired of rushed 7-minute appointments with a doctor who doesn\'t remember them. MDVIP restores the old-fashioned doctor-patient relationship.',
  },
]

const faqs = [
  {
    q: 'Is MDVIP covered by insurance?',
    a: 'MDVIP is not a replacement for insurance — it is an annual membership fee ($1,800–$2,200/year, paid to MDVIP) that enhances your access to your physician. Your regular health insurance still covers office visits, labs, imaging, specialist referrals, and hospitalizations exactly as it always has. Medicare and most private insurance plans apply as usual.',
  },
  {
    q: 'What is included in the MDVIP annual membership?',
    a: 'The membership includes your annual 90-minute comprehensive wellness exam, a personalized prevention plan, same-day appointment access, 24/7 direct physician contact, and access to the MDVIP national network of affiliated physicians. Your regular insurance continues to cover all clinical services beyond that enhanced access.',
  },
  {
    q: 'How is MDVIP different from regular care at Victory Medical?',
    a: 'Victory Medical\'s standard practice serves thousands of patients across three locations. MDVIP at our Westlake Hills location caps your physician\'s patient panel at 150–200 people — compared to the national average of 2,500 patients per physician. That smaller panel is what enables same-day access, unhurried appointments, and genuine relationship-based care.',
  },
]

export default function MDVIPPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: 'var(--dark-teal)',
            paddingTop: '160px',
            paddingBottom: '120px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background accents */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 70% 70% at 80% 40%, rgba(34,184,209,0.12) 0%, transparent 65%)',
          }} />
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(34,109,122,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(34,109,122,0.02) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            pointerEvents: 'none',
          }} />

          <div className="container" style={{ position: 'relative' }}>
            <div className="section-label" style={{ marginBottom: '20px' }}>
              Westlake Hills · Concierge Medicine
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)',
                fontWeight: 400,
                color: 'var(--white)',
                maxWidth: '720px',
                marginBottom: '32px',
                lineHeight: 1.1,
              }}
            >
              A Doctor Who Has{' '}
              <span style={{ color: 'var(--copper)' }}>Time For You</span>
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(26,58,71,0.8)',
              maxWidth: '580px',
              lineHeight: 1.75,
              marginBottom: '20px',
              fontFamily: 'var(--font-playfair)',
              fontStyle: 'italic',
            }}>
              Same-day appointments. 24/7 direct physician access. A patient panel of 150 — not 2,500.
            </p>
            <p style={{
              fontSize: '1rem',
              color: 'var(--muted-text)',
              maxWidth: '560px',
              lineHeight: 1.8,
              marginBottom: '48px',
            }}>
              The average American physician manages 2,500 patients. Your MDVIP physician at Victory Westlake Hills manages fewer than 200 — which means every visit is unhurried, every question gets answered, and your physician actually knows your name.
            </p>

            {/* Stats row */}
            <div style={{
              display: 'flex',
              gap: '48px',
              flexWrap: 'wrap',
              marginBottom: '48px',
              paddingBottom: '48px',
              borderBottom: '1px solid rgba(26,58,71,0.08)',
            }}>
              {[
                { stat: '150', label: 'Max patients per physician' },
                { stat: '2,500', label: 'Average traditional practice' },
                { stat: '90 min', label: 'Annual comprehensive exam' },
                { stat: '24/7', label: 'Direct physician access' },
              ].map((item) => (
                <div key={item.stat}>
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

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="tel:5124623627" className="btn-primary">
                Request MDVIP Information
              </a>
              <a
                href="https://www.priviahealth.com/practice/victory-medical/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Book Online
              </a>
            </div>
          </div>
        </section>

        {/* ── Breadcrumb ────────────────────────────────────────────────── */}
        <div className="container" style={{ paddingTop: '24px', paddingBottom: '8px' }}>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'MDVIP Concierge' },
            ]}
          />
        </div>

        {/* ── What is MDVIP ─────────────────────────────────────────────── */}
        <section className="section" style={{ backgroundColor: 'var(--teal)' }}>
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
                <div className="section-label" style={{ marginBottom: '16px' }}>The Program</div>
                <h2 style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: 400,
                  color: 'var(--white)',
                  marginBottom: '24px',
                }}>
                  What is MDVIP?
                </h2>
                <p style={{ fontSize: '1rem', color: 'rgba(26,58,71,0.75)', lineHeight: 1.85, marginBottom: '20px' }}>
                  MDVIP is a national concierge medicine partnership that allows select physicians to dramatically reduce their patient panel. Instead of seeing 25–30 patients per day in rushed 7-minute appointments, MDVIP physicians serve a maximum of 150–200 patients with the time and attention each one deserves.
                </p>
                <p style={{ fontSize: '1rem', color: 'rgba(26,58,71,0.65)', lineHeight: 1.85, marginBottom: '32px' }}>
                  At Victory Medical&apos;s Westlake Hills location — 3811 Bee Caves Rd — our MDVIP program combines this elevated access model with Victory&apos;s 28-year legacy of integrated, whole-person care.
                </p>
                <div style={{
                  padding: '24px',
                  backgroundColor: 'rgba(34,184,209,0.08)',
                  border: '1px solid rgba(34,184,209,0.2)',
                  borderLeft: '3px solid var(--copper)',
                  borderRadius: '0 12px 12px 0',
                }}>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px', fontWeight: 600 }}>Membership Cost</div>
                  <div style={{ fontSize: '1.3rem', fontFamily: 'var(--font-playfair)', color: 'var(--white)', marginBottom: '6px' }}>
                    $1,800 – $2,200 / year
                  </div>
                  <div style={{ fontSize: '0.825rem', color: 'rgba(26,58,71,0.55)', lineHeight: 1.6 }}>
                    Annual fee paid directly to MDVIP. Your insurance continues to apply for all clinical services. HSA/FSA may be applicable — ask your administrator.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { label: 'Patient Panel', traditional: 'Avg. 2,500 patients', mdvip: 'Max 150–200 patients' },
                  { label: 'Appointment Wait', traditional: 'Days to weeks', mdvip: 'Same day or next day' },
                  { label: 'Appointment Length', traditional: '7–15 minutes', mdvip: 'As long as needed' },
                  { label: 'After-Hours Contact', traditional: 'Nurse line or ER', mdvip: '24/7 direct physician' },
                  { label: 'Annual Exam', traditional: '15–30 minutes', mdvip: '90-minute comprehensive exam' },
                ].map((row) => (
                  <div
                    key={row.label}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr 1fr',
                      gap: '16px',
                      padding: '16px 20px',
                      backgroundColor: 'rgba(26,58,71,0.03)',
                      border: '1px solid rgba(26,58,71,0.06)',
                      borderRadius: '10px',
                      alignItems: 'center',
                    }}
                  >
                    <div style={{ fontSize: '0.8rem', color: 'rgba(26,58,71,0.5)', fontWeight: 500 }}>{row.label}</div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(26,58,71,0.4)', textDecoration: 'line-through' }}>{row.traditional}</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--copper)', fontWeight: 600 }}>{row.mdvip}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Benefits Grid ─────────────────────────────────────────────── */}
        <section className="section" style={{ backgroundColor: 'var(--dark-teal)' }}>
          <div className="container">
            <div style={{ marginBottom: '64px', textAlign: 'center' }}>
              <div className="section-label" style={{ justifyContent: 'center', marginBottom: '16px' }}>What You Get</div>
              <h2 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 400,
                color: 'var(--white)',
                marginBottom: '12px',
              }}>
                MDVIP Member Benefits
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--muted-text)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
                Every MDVIP membership includes the following — in addition to your regular insurance coverage for all clinical services.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            }}
              className="benefits-grid"
            >
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="hover-card-copper"
                  style={{
                    backgroundColor: 'rgba(26,58,71,0.03)',
                    border: '1px solid rgba(26,58,71,0.07)',
                    borderRadius: '16px',
                    padding: '36px 28px',
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(34,184,209,0.12)',
                    border: '1px solid rgba(34,184,209,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    color: 'var(--copper)',
                    marginBottom: '20px',
                  }}>
                    {benefit.icon}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.15rem',
                    fontWeight: 400,
                    color: 'var(--white)',
                    marginBottom: '12px',
                  }}>
                    {benefit.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(26,58,71,0.6)', lineHeight: 1.7, margin: 0 }}>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline ──────────────────────────────────────────────────── */}
        <section className="section" style={{ backgroundColor: 'var(--teal)' }}>
          <div className="container">
            <div style={{ marginBottom: '64px' }}>
              <div className="section-label" style={{ marginBottom: '16px' }}>Your First Year</div>
              <h2 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 400,
                color: 'var(--white)',
              }}>
                The MDVIP Experience
              </h2>
            </div>

            <div style={{ position: 'relative', paddingLeft: '48px' }}>
              {/* Vertical line */}
              <div style={{
                position: 'absolute',
                left: '10px',
                top: '8px',
                bottom: '8px',
                width: '2px',
                background: 'linear-gradient(to bottom, rgba(34,184,209,0.8), rgba(34,184,209,0.1))',
              }} />

              {timeline.map((item, i) => (
                <div
                  key={item.step}
                  style={{
                    position: 'relative',
                    paddingBottom: i < timeline.length - 1 ? '40px' : 0,
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr',
                    gap: '24px',
                    alignItems: 'flex-start',
                  }}
                >
                  {/* Dot */}
                  <div style={{
                    position: 'absolute',
                    left: '-39px',
                    top: '4px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: i === 0 ? 'var(--copper)' : 'var(--teal)',
                    border: `2px solid ${i === 0 ? 'var(--copper)' : 'rgba(34,184,209,0.5)'}`,
                    boxShadow: i === 0
                      ? '0 0 0 4px rgba(34,184,209,0.15), 0 0 12px rgba(34,184,209,0.4)'
                      : '0 0 0 3px rgba(34,184,209,0.08)',
                  }} />

                  <div style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '2rem',
                    fontWeight: 400,
                    color: 'rgba(34,184,209,0.4)',
                    lineHeight: 1,
                    paddingTop: '2px',
                  }}>
                    {item.step}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: '1.1rem',
                      fontWeight: 400,
                      color: 'var(--white)',
                      marginBottom: '8px',
                    }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(26,58,71,0.6)', lineHeight: 1.75, margin: 0 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who is MDVIP For ──────────────────────────────────────────── */}
        <section className="section" style={{ backgroundColor: 'var(--dark-teal)' }}>
          <div className="container">
            <div style={{ marginBottom: '48px' }}>
              <div className="section-label" style={{ marginBottom: '16px' }}>Is It Right For You?</div>
              <h2 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 400,
                color: 'var(--white)',
                marginBottom: '12px',
              }}>
                Who is MDVIP For?
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--muted-text)', maxWidth: '480px', lineHeight: 1.7 }}>
                MDVIP is a meaningful upgrade for patients who want more from their healthcare relationship.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
            }}
              className="responsive-two-col"
            >
              {whoIsItFor.map((item) => (
                <div
                  key={item.label}
                  className="card-depth"
                  style={{
                    borderRadius: '14px',
                    padding: '32px',
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                  }}
                >
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--copper)',
                    flexShrink: 0,
                    marginTop: '8px',
                  }} />
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: '1rem',
                      fontWeight: 400,
                      color: 'var(--white)',
                      marginBottom: '10px',
                    }}>
                      {item.label}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(26,58,71,0.6)', lineHeight: 1.7, margin: 0 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section className="section" style={{ backgroundColor: 'var(--teal)' }}>
          <div className="container">
            <div style={{ marginBottom: '48px' }}>
              <div className="section-label" style={{ marginBottom: '16px' }}>Frequently Asked</div>
              <h2 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 400,
                color: 'var(--white)',
              }}>
                MDVIP Questions
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '820px' }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: 'rgba(26,58,71,0.04)',
                    border: '1px solid rgba(26,58,71,0.07)',
                    borderRadius: '14px',
                    padding: '32px',
                  }}
                >
                  <h3 style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.05rem',
                    fontWeight: 400,
                    color: 'var(--white)',
                    marginBottom: '14px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(34,184,209,0.15)',
                      border: '1px solid rgba(34,184,209,0.3)',
                      fontSize: '0.65rem',
                      color: 'var(--copper)',
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: '1px',
                    }}>Q</span>
                    {faq.q}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'rgba(26,58,71,0.65)',
                    lineHeight: 1.8,
                    paddingLeft: '36px',
                    margin: 0,
                  }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: 'var(--dark-teal)', padding: '100px 0' }}>
          <div className="container">
            <div style={{
              background: 'linear-gradient(135deg, rgba(34,184,209,0.12) 0%, rgba(255,255,255,0.95) 100%)',
              border: '1px solid rgba(34,184,209,0.3)',
              borderRadius: '24px',
              padding: '80px',
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '60px',
              alignItems: 'center',
            }}
              className="cta-grid"
            >
              <div>
                <div className="section-label" style={{ marginBottom: '16px' }}>Request Information</div>
                <h2 style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: 400,
                  color: 'var(--white)',
                  marginBottom: '20px',
                }}>
                  Ready to Experience Concierge Care?
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--muted-text)', maxWidth: '480px', lineHeight: 1.8, marginBottom: '32px' }}>
                  Spaces are limited — MDVIP panels cap at 150–200 patients by design. Contact our Westlake Hills team to learn about availability and schedule your enrollment consultation.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', minWidth: '60px' }}>Phone</span>
                    <a href="tel:5124623627" style={{ color: 'var(--copper)', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 600 }}>
                      (512) 462-3627
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', minWidth: '60px' }}>Address</span>
                    <span style={{ color: 'rgba(26,58,71,0.7)', fontSize: '0.9rem' }}>
                      3811 Bee Caves Rd, Westlake Hills TX 78746
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <a
                    href="https://www.priviahealth.com/practice/victory-medical/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Book a Consultation
                  </a>
                  <a href="tel:5124623627" className="btn-outline">
                    Call to Learn More
                  </a>
                </div>
              </div>

              <div style={{ textAlign: 'center', flexShrink: 0 }}>
                <div style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  border: '2px solid rgba(34,184,209,0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'radial-gradient(ellipse at center, rgba(34,184,209,0.08) 0%, transparent 70%)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '2.5rem',
                    fontWeight: 400,
                    color: 'var(--copper)',
                    lineHeight: 1,
                    marginBottom: '6px',
                  }}>150</div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(26,58,71,0.4)', textAlign: 'center', maxWidth: '100px', lineHeight: 1.4 }}>
                    max patients per physician
                  </div>
                </div>
              </div>
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
