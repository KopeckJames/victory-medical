import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insurance & Coverage | Victory Medical Austin TX',
  description: 'Victory Medical accepts most major insurance plans in Austin and Westlake Hills, TX. Blue Cross Blue Shield, Aetna, Cigna, Medicare, Medicaid, and more. Transparent self-pay rates for urgent care starting at $75.',
}

const insurers = [
  'Blue Cross Blue Shield',
  'Aetna',
  'Cigna',
  'UnitedHealthcare',
  'Humana',
  'Medicare',
  'Medicaid / CHIP',
  'Tricare',
  'Scott & White Health Plan',
  'Ambetter',
  'Molina Healthcare',
  'BCBS Federal Employee Program',
]

const selfPayRates = [
  { service: 'Urgent Care Visit', price: '$75 – $150', note: 'Walk-in, no appointment needed' },
  { service: 'Annual Physical', price: 'Call for pricing', note: 'Comprehensive preventive exam' },
  { service: 'MedSpa Consultation', price: 'Free', note: 'No obligation' },
  { service: 'Botox', price: 'Starting at $11/unit', note: 'Physician-supervised' },
  { service: 'IV Vitamin Therapy', price: 'Starting at $125', note: 'Custom-blended infusions' },
  { service: 'Ketamine Consultation', price: 'Call for pricing', note: 'Covered by some plans' },
]

const faqs = [
  {
    q: 'Do you accept my insurance?',
    a: 'We accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, Humana, Medicare, Medicaid/CHIP, Tricare, Scott & White, Ambetter, Molina, and more. The best way to confirm your specific plan is to call us at (512) 462-3627 — our billing team will verify your coverage before your visit.',
  },
  {
    q: 'What if I don\'t have insurance?',
    a: 'No problem. Victory Medical offers transparent self-pay rates for all services. Our urgent care visits start at $75–$150 — 50–300% less than the average ER visit. We also offer payment plans and can discuss pricing for any service upfront so there are no surprises.',
  },
  {
    q: 'Is MedSpa covered by insurance?',
    a: 'Most cosmetic MedSpa services (Botox for aesthetics, fillers, CoolSculpting, etc.) are not covered by insurance and are self-pay. However, some treatments such as therapeutic Botox for migraines or TMJ, IV therapy for documented deficiencies, and certain allergy treatments may be covered. Ask your provider at your consultation.',
  },
  {
    q: 'How does MDVIP differ from regular insurance?',
    a: 'MDVIP is a concierge medicine membership program, not an insurance replacement. You pay an annual membership fee ($1,800–$2,200/year) directly to participate, and your regular insurance still applies for services, labs, and specialist referrals. MDVIP simply gives you dramatically enhanced access — same-day appointments, 24/7 physician contact, and a smaller patient panel.',
  },
  {
    q: 'Can I use HSA/FSA for treatments?',
    a: 'Yes — HSA (Health Savings Account) and FSA (Flexible Spending Account) funds can be used for most medically necessary services at Victory Medical, including urgent care, primary care visits, labs, allergy testing, and many other treatments. Some MedSpa cosmetic treatments may not qualify. Check with your HSA/FSA administrator if you\'re unsure about a specific service.',
  },
]

export default function InsurancePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: 'var(--dark-teal)',
            paddingTop: '160px',
            paddingBottom: '100px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute',
            inset: 0,
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
            <div className="section-label" style={{ marginBottom: '16px' }}>Insurance &amp; Coverage</div>
            <h1
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 400,
                color: 'var(--white)',
                maxWidth: '680px',
                marginBottom: '28px',
                lineHeight: 1.15,
              }}
            >
              We Work With{' '}
              <span style={{ color: 'var(--copper)' }}>Your Insurance</span>
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--muted-text)',
              maxWidth: '580px',
              lineHeight: 1.85,
              marginBottom: '16px',
            }}>
              Victory Medical accepts most major insurance plans through our Privia Health partnership, making it easy to see a board-certified provider without the billing headaches.
            </p>
            <p style={{
              fontSize: '0.95rem',
              color: 'rgba(26,58,71,0.5)',
              maxWidth: '560px',
              lineHeight: 1.8,
              marginBottom: '40px',
            }}>
              Our billing team works directly with your insurer so you can focus on your health. Transparent self-pay rates also available for every service — no surprises.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="tel:5124623627" className="btn-primary">
                Call to Verify Coverage
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
              { label: 'Patients' },
              { label: 'Insurance & Coverage' },
            ]}
          />
        </div>

        {/* ── Accepted Plans Grid ───────────────────────────────────────── */}
        <section className="section" style={{ backgroundColor: 'var(--teal)' }}>
          <div className="container">
            <div style={{ marginBottom: '48px' }}>
              <div className="section-label" style={{ marginBottom: '16px' }}>Accepted Plans</div>
              <h2 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 400,
                color: 'var(--white)',
                marginBottom: '12px',
              }}>
                Insurance We Accept
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--muted-text)', maxWidth: '500px', lineHeight: 1.7 }}>
                We are in-network with the plans listed below and continuously expand our accepted insurance network.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '12px',
              marginBottom: '32px',
            }}
              className="insurance-grid"
            >
              {insurers.map((insurer) => (
                <div
                  key={insurer}
                  style={{
                    padding: '14px 20px',
                    backgroundColor: 'rgba(26,58,71,0.04)',
                    border: '1px solid rgba(34,184,209,0.25)',
                    borderRadius: '50px',
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    color: 'rgba(26,58,71,0.85)',
                    fontWeight: 500,
                  }}
                >
                  {insurer}
                </div>
              ))}
            </div>

            <div style={{
              padding: '20px 28px',
              backgroundColor: 'rgba(34,184,209,0.07)',
              border: '1px solid rgba(34,184,209,0.2)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}>
              <span style={{ fontSize: '1rem', color: 'var(--copper)' }}>&#9432;</span>
              <p style={{ fontSize: '0.875rem', color: 'rgba(26,58,71,0.7)', lineHeight: 1.6, margin: 0 }}>
                <strong style={{ color: 'var(--white)', fontWeight: 600 }}>List updated regularly</strong> — individual plans and sub-networks vary. Call{' '}
                <a href="tel:5124623627" style={{ color: 'var(--copper)', textDecoration: 'none' }}>(512) 462-3627</a>{' '}
                to verify your specific plan before your visit.
              </p>
            </div>
          </div>
        </section>

        {/* ── Self-Pay & Pricing ────────────────────────────────────────── */}
        <section className="section" style={{ backgroundColor: 'var(--dark-teal)' }}>
          <div className="container">
            <div style={{ marginBottom: '48px' }}>
              <div className="section-label" style={{ marginBottom: '16px' }}>Transparent Pricing</div>
              <h2 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 400,
                color: 'var(--white)',
                marginBottom: '16px',
              }}>
                Self-Pay &amp; Transparent Pricing
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--muted-text)', maxWidth: '560px', lineHeight: 1.7 }}>
                No insurance? No problem. Our urgent care visits cost{' '}
                <strong style={{ color: 'var(--copper)' }}>50–300% less than the average ER visit</strong> — and you know the price before you walk in.
              </p>
            </div>

            <div style={{
              backgroundColor: 'rgba(26,58,71,0.03)',
              border: '1px solid rgba(26,58,71,0.07)',
              borderRadius: '16px',
              overflow: 'hidden',
            }}>
              {/* Table header */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                padding: '14px 32px',
                backgroundColor: 'rgba(34,184,209,0.08)',
                borderBottom: '1px solid rgba(26,58,71,0.06)',
              }}>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600 }}>Service</div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600 }}>Self-Pay Rate</div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600 }}>Notes</div>
              </div>

              {selfPayRates.map((row, i) => (
                <div
                  key={row.service}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    padding: '20px 32px',
                    borderBottom: i < selfPayRates.length - 1 ? '1px solid rgba(26,58,71,0.05)' : 'none',
                    backgroundColor: i % 2 === 0 ? 'transparent' : 'rgba(26,58,71,0.015)',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ fontSize: '0.95rem', color: 'var(--white)', fontWeight: 500 }}>{row.service}</div>
                  <div style={{
                    fontSize: '1rem',
                    color: row.price === 'Free' ? '#6bcb8f' : 'var(--copper)',
                    fontWeight: 600,
                    fontFamily: 'var(--font-playfair)',
                  }}>{row.price}</div>
                  <div style={{ fontSize: '0.825rem', color: 'rgba(26,58,71,0.5)' }}>{row.note}</div>
                </div>
              ))}
            </div>

            <p style={{ marginTop: '20px', fontSize: '0.8rem', color: 'rgba(26,58,71,0.3)', lineHeight: 1.6 }}>
              Prices are approximate and may vary based on complexity. Final pricing discussed before treatment. HSA and FSA accepted for most medical services.
            </p>
          </div>
        </section>

        {/* ── MDVIP Callout ─────────────────────────────────────────────── */}
        <section style={{ backgroundColor: 'var(--teal)', padding: '80px 0' }}>
          <div className="container">
            <div style={{
              background: 'linear-gradient(135deg, rgba(34,184,209,0.1) 0%, rgba(255,255,255,0.6) 100%)',
              border: '1px solid rgba(34,184,209,0.3)',
              borderRadius: '20px',
              padding: '60px',
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '60px',
              alignItems: 'center',
            }}
              className="mdvip-callout"
            >
              <div>
                <div className="section-label" style={{ marginBottom: '16px' }}>Westlake Hills Exclusive</div>
                <h2 style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '2rem',
                  fontWeight: 400,
                  color: 'var(--white)',
                  marginBottom: '16px',
                }}>
                  Upgrade to MDVIP Concierge Care
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--muted-text)', maxWidth: '520px', lineHeight: 1.8 }}>
                  Westlake Hills patients can upgrade to MDVIP concierge medicine — same-day access, 24/7 direct physician contact, and a comprehensive 90-minute annual exam. Your insurance still applies; MDVIP is an annual membership that unlocks a fundamentally better doctor-patient relationship.
                </p>
              </div>
              <div style={{ flexShrink: 0, textAlign: 'center' }}>
                <a href="/mdvip" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
                  Learn About MDVIP
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section className="section" style={{ backgroundColor: 'var(--dark-teal)' }}>
          <div className="container">
            <div style={{ marginBottom: '48px' }}>
              <div className="section-label" style={{ marginBottom: '16px' }}>Common Questions</div>
              <h2 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 400,
                color: 'var(--white)',
              }}>
                Insurance FAQ
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '820px' }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="card-depth"
                  style={{
                    borderRadius: '14px',
                    padding: '32px',
                    border: '1px solid rgba(26,58,71,0.07)',
                  }}
                >
                  <h3 style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.1rem',
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
                      marginTop: '2px',
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
        <section style={{ backgroundColor: 'var(--teal)', padding: '100px 0' }}>
          <div className="container">
            <div style={{
              background: 'linear-gradient(135deg, rgba(34,184,209,0.08) 0%, rgba(255,255,255,0.9) 100%)',
              border: '1px solid rgba(34,184,209,0.2)',
              borderRadius: '24px',
              padding: '80px',
              textAlign: 'center',
            }}>
              <div className="section-label" style={{ justifyContent: 'center', marginBottom: '16px' }}>
                Ready to Schedule?
              </div>
              <h2 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                fontWeight: 400,
                color: 'var(--white)',
                marginBottom: '20px',
              }}>
                Questions About Your Coverage?
              </h2>
              <p style={{
                fontSize: '1rem',
                color: 'var(--muted-text)',
                maxWidth: '480px',
                margin: '0 auto 40px',
                lineHeight: 1.8,
              }}>
                Our billing team is happy to verify your insurance before your visit — no obligation. Or book online and we&apos;ll handle the rest.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="tel:5124623627" className="btn-primary">
                  Call (512) 462-3627
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
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .insurance-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .mdvip-callout { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 600px) {
          .insurance-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
