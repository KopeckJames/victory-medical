import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import BeforeAfterGallery from '@/components/BeforeAfterSlider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medical Spa Austin TX | Victory Medical MedSpa',
  description: 'Physician-supervised aesthetic treatments in Austin, TX. Botox, dermal fillers, CoolSculpting, laser treatments, HydraFacial, IV therapy, and more at Victory Medical MedSpa.',
  alternates: { canonical: '/medspa' },
  openGraph: {
    title: 'Medical Spa Austin TX | Victory Medical MedSpa',
    description: 'Physician-supervised aesthetic treatments in Austin, TX. Botox, dermal fillers, CoolSculpting, laser treatments, HydraFacial, IV therapy, and more at Victory Medical MedSpa.',
    url: '/medspa',
  },
}

const medSpaServices = [
  {
    category: 'Injectables',
    id: 'injectables',
    icon: '💉',
    intro: 'Physician-supervised neurotoxin and filler treatments for natural, lasting results.',
    treatments: [
      {
        name: 'Botox & Dysport',
        description: 'Neuromodulator injections to smooth fine lines and wrinkles, prevent new creases, and treat medical conditions like TMJ and migraines. Results last 3–6 months.',
        areas: ['Forehead', 'Crow\'s feet', 'Frown lines', 'Brow lift', 'Lip flip', 'TMJ/migraines'],
      },
      {
        name: 'Dermal Fillers',
        description: 'Hyaluronic acid and other fillers to restore volume, define contours, and rejuvenate facial features. Results are immediate and can last 6–24 months depending on product.',
        areas: ['Cheeks', 'Lips', 'Nasolabial folds', 'Under-eye', 'Jawline', 'Hands'],
      },
      {
        name: 'Sculptra',
        description: 'Poly-L-lactic acid biostimulator that gradually restores lost collagen and facial volume. Results develop over weeks and can last 2+ years.',
        areas: ['Temples', 'Cheeks', 'Jawline', 'Full-face volume'],
      },
      {
        name: 'PRP Therapy',
        description: 'Platelet-Rich Plasma therapy uses your own growth factors to stimulate natural collagen production and skin renewal. Can be combined with microneedling for enhanced results.',
        areas: ['Face', 'Under-eye', 'Scalp (hair restoration)', 'Neck & décolleté'],
      },
      {
        name: 'PDO Threading',
        description: 'Minimally invasive lift using absorbable PDO threads to tighten and lift sagging skin. Stimulates natural collagen as threads dissolve over 4–6 months.',
        areas: ['Brow lift', 'Midface lift', 'Neck & jowls', 'Nasolabial folds'],
      },
    ],
  },
  {
    category: 'Face Treatments',
    id: 'face',
    icon: '✦',
    intro: 'Advanced facial treatments from medical-grade peels to precision laser therapy.',
    treatments: [
      {
        name: 'HydraFacial',
        description: 'The gold standard in non-invasive facial rejuvenation. This multi-step treatment cleanses, exfoliates, extracts, and infuses your skin with hydrating serums. Zero downtime, immediate glow.',
        areas: ['Full face', 'Neck', 'Décolleté'],
      },
      {
        name: 'Facials (Face & Neck)',
        description: 'Customized medical-grade facials tailored to your skin type and concerns — from deep cleansing and hydration to anti-aging and brightening protocols.',
        areas: ['Face', 'Neck', 'Décolleté'],
      },
      {
        name: 'Chemical Peels',
        description: 'Medical-grade chemical exfoliation to address hyperpigmentation, uneven texture, acne scarring, and signs of aging. We offer superficial to medium-depth peels based on your skin goals.',
        areas: ['Face', 'Neck', 'Hands'],
      },
      {
        name: 'Laser Treatments',
        description: 'Precision laser therapy to address skin tone, texture, sun damage, vascular lesions, and hair removal. Our providers customize laser parameters for your skin type and target concern.',
        areas: ['Face', 'Neck', 'Body', 'Hair removal'],
      },
      {
        name: 'Microneedling',
        description: 'Collagen induction therapy using fine needles to trigger your skin\'s natural healing response. Dramatically improves texture, pore size, scarring, and fine lines.',
        areas: ['Full face', 'Neck', 'Scalp'],
      },
      {
        name: 'Scarlet RF Microneedling',
        description: 'Next-generation radiofrequency microneedling that delivers RF energy at precise depths for superior skin tightening, contouring, and collagen remodeling compared to standard microneedling.',
        areas: ['Face', 'Neck', 'Body'],
      },
    ],
  },
  {
    category: 'Body Treatments',
    id: 'body',
    icon: '◈',
    intro: 'Non-surgical body contouring and skin treatment for lasting physical transformation.',
    treatments: [
      {
        name: 'CoolSculpting®',
        description: 'The #1 non-surgical fat reduction treatment. Cryolipolysis targets and permanently eliminates stubborn fat cells through controlled cooling — no surgery, no downtime. Results in 1–3 months.',
        areas: ['Abdomen', 'Flanks/love handles', 'Inner & outer thighs', 'Upper arms', 'Chin/submental', 'Back fat', 'Bra fat'],
      },
      {
        name: 'Chemical Peels (Body)',
        description: 'Medical-grade body peels to address uneven tone, rough texture, ingrown hairs, and hyperpigmentation on larger body areas.',
        areas: ['Back', 'Chest', 'Arms', 'Legs'],
      },
      {
        name: 'Laser Treatments (Body)',
        description: 'Body laser therapy for hair removal, vascular lesions, skin tightening, and tone correction across all body areas.',
        areas: ['Legs', 'Back', 'Chest', 'Arms', 'Bikini area'],
      },
      {
        name: 'Facials (Chest & Back)',
        description: 'Professional-grade treatments for the chest (décolleté) and back to address acne, congestion, uneven texture, and aging changes in hard-to-treat areas.',
        areas: ['Chest/décolleté', 'Back'],
      },
    ],
  },
  {
    category: 'IV Therapies',
    id: 'iv-therapy',
    icon: '⊕',
    intro: 'IV infusion therapies delivered directly into the bloodstream for maximum absorption and rapid effect.',
    treatments: [
      {
        name: 'IV Vitamin Infusion',
        description: 'Custom-blended vitamin and mineral infusions delivered intravenously for 100% absorption. Protocols for energy, immunity, hydration, anti-aging, athletic recovery, and more. Results felt within hours.',
        areas: ['Energy & fatigue', 'Immune support', 'Athletic recovery', 'Hangover recovery', 'Skin glow', 'Anti-aging'],
      },
      {
        name: 'IV Ketamine Infusion',
        description: 'Licensed ketamine infusion therapy for treatment-resistant depression, PTSD, anxiety, and chronic pain conditions. Physician-monitored 40-minute sessions in a clinical setting.',
        areas: ['Depression', 'PTSD', 'Anxiety', 'Chronic pain', 'OCD', 'Postpartum depression'],
      },
    ],
  },
]

const providers = [
  {
    name: 'Melissa Gabrielli, DNP, APRN, FNP-BC, PMHNP-BC',
    role: 'Ketamine Therapist & MedSpa Injector',
    note: 'Dual board-certified in family practice and mental health. Expert in Botox, fillers, and IV ketamine therapy. Available Mon–Fri 9–5, Saturdays by appointment.',
    booking: 'https://victory.janeapp.com/',
  },
  {
    name: 'Ola Zylka, MSN, FNP-C',
    role: 'Nurse Practitioner & Nurse Injector',
    note: 'Neurotoxin certified. Specializes in injectables, lasers, and advanced facial treatments. Available Mon–Fri 9–5, Saturdays by appointment.',
    booking: 'https://victory.janeapp.com/',
  },
]

export default function MedSpaPage() {
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
              background: 'radial-gradient(ellipse 70% 60% at 70% 50%, rgba(34,184,209,0.1) 0%, transparent 60%)',
            }}
          />
          <div className="container" style={{ position: 'relative' }}>
            <div className="section-label" style={{ marginBottom: '16px' }}>
              Physician-Supervised Aesthetics
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 400,
                color: 'var(--white)',
                maxWidth: '640px',
                marginBottom: '24px',
                lineHeight: 1.15,
              }}
            >
              Medical-Grade Aesthetics.{' '}
              <span style={{ color: 'var(--copper)' }}>Exceptional Safety.</span>
            </h1>
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--muted-text)',
                maxWidth: '520px',
                lineHeight: 1.7,
                marginBottom: '40px',
              }}
            >
              Every treatment at Victory MedSpa is performed or supervised by board-certified physicians and nurse practitioners. The confidence of medicine. The luxury of a spa.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="https://victory.janeapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book MedSpa Appointment
              </a>
              <a
                href="https://victory.janeapp.com/#/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Free Consultation
              </a>
            </div>

            {/* Location note */}
            <div
              style={{
                marginTop: '48px',
                padding: '20px 24px',
                backgroundColor: 'rgba(34,184,209,0.08)',
                border: '1px solid rgba(34,184,209,0.2)',
                borderRadius: '12px',
                display: 'inline-flex',
                gap: '24px',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>MedSpa Location</div>
                <div style={{ fontSize: '0.875rem', color: 'rgba(26,58,71,0.8)' }}>2108 W Ben White Blvd, Austin TX</div>
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>MedSpa Phone</div>
                <a href="tel:5129696900" style={{ fontSize: '0.875rem', color: 'var(--copper)', textDecoration: 'none' }}>(512) 969-6900</a>
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '4px' }}>Hours</div>
                <div style={{ fontSize: '0.875rem', color: 'rgba(26,58,71,0.8)' }}>Mon 9–4 · Tue–Fri 9–5</div>
              </div>
            </div>
          </div>
        </section>

        {/* Providers strip */}
        <section
          style={{
            backgroundColor: 'var(--light-teal)',
            padding: '40px 0',
            borderTop: '1px solid var(--glass-border)',
            borderBottom: '1px solid var(--glass-border)',
          }}
        >
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
              {providers.map((p) => (
                <div
                  key={p.name}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--lightest-teal)',
                      border: '2px solid rgba(34,184,209,0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-playfair)',
                      fontSize: '1rem',
                      color: 'var(--gold)',
                      flexShrink: 0,
                    }}
                  >
                    {p.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.95rem', color: 'var(--white)', marginBottom: '2px' }}>{p.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--copper)', marginBottom: '6px' }}>{p.role}</div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(26,58,71,0.6)', lineHeight: 1.5 }}>{p.note}</div>
                    <a
                      href={p.booking}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        marginTop: '8px',
                        fontSize: '0.7rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--copper)',
                        textDecoration: 'none',
                        fontWeight: 500,
                      }}
                    >
                      Book with this provider →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services by category */}
        {medSpaServices.map((category, ci) => (
          <section
            key={category.id}
            id={category.id}
            className="section"
            style={{
              backgroundColor: ci % 2 === 0 ? 'var(--teal)' : 'var(--dark-teal)',
            }}
          >
            <div className="container">
              {/* Category header */}
              <div style={{ marginBottom: '48px' }}>
                <div className="section-label" style={{ marginBottom: '12px' }}>
                  {category.category}
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                    fontWeight: 400,
                    color: 'var(--white)',
                    marginBottom: '12px',
                  }}
                >
                  {category.category}
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--muted-text)', maxWidth: '480px' }}>
                  {category.intro}
                </p>
              </div>

              {/* Treatments grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                  gap: '20px',
                }}
              >
                {category.treatments.map((treatment) => (
                  <div
                    key={treatment.name}
                    className="hover-card-copper"
                    style={{
                      backgroundColor: 'rgba(26,58,71,0.04)',
                      border: '1px solid rgba(26,58,71,0.08)',
                      borderRadius: '12px',
                      padding: '28px',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-playfair)',
                        fontSize: '1.2rem',
                        fontWeight: 400,
                        color: 'var(--white)',
                        marginBottom: '12px',
                      }}
                    >
                      {treatment.name}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'rgba(26,58,71,0.65)',
                        lineHeight: 1.7,
                        marginBottom: '16px',
                      }}
                    >
                      {treatment.description}
                    </p>
                    <div>
                      <div
                        style={{
                          fontSize: '0.65rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'var(--gold)',
                          marginBottom: '8px',
                        }}
                      >
                        Treatment Areas
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {treatment.areas.map((area) => (
                          <span
                            key={area}
                            style={{
                              fontSize: '0.7rem',
                              padding: '3px 10px',
                              backgroundColor: 'rgba(34,184,209,0.1)',
                              border: '1px solid rgba(34,184,209,0.2)',
                              borderRadius: '20px',
                              color: 'rgba(26,58,71,0.75)',
                            }}
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Book CTA */}
              <div style={{ marginTop: '40px', textAlign: 'center' }}>
                <a
                  href="https://victory.janeapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book {category.category} Treatment
                </a>
              </div>
            </div>
          </section>
        ))}

        {/* Skincare Products */}
        <section
          style={{
            backgroundColor: 'var(--teal)',
            padding: '100px 0',
            borderTop: '1px solid rgba(26,58,71,0.06)',
          }}
        >
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div className="section-label" style={{ justifyContent: 'center', marginBottom: '16px' }}>
                Professional Skincare
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                  fontWeight: 400,
                  color: 'var(--white)',
                  marginBottom: '16px',
                }}
              >
                Medical-Grade Products We Trust
              </h2>
              <p style={{ fontSize: '1rem', color: 'rgba(26,58,71,0.55)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
                We carry only physician-recommended, clinically proven skincare lines — the same brands our providers use in-treatment and prescribe for home maintenance.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
              {[
                {
                  brand: 'EltaMD',
                  tagline: 'The dermatologist-recommended sunscreen',
                  description: 'EltaMD is the #1 dermatologist-recommended professional sunscreen brand. Their zinc oxide-based formulas provide broad-spectrum UVA/UVB protection without irritation — perfect before and after aesthetic treatments.',
                  products: ['UV Clear SPF 46', 'UV Physical SPF 41', 'UV Facial SPF 30', 'Barrier Renewal Complex', 'Foaming Facial Cleanser'],
                  color: '#8bb8c8',
                },
                {
                  brand: 'IMAGE Skincare',
                  tagline: 'Clinical skincare with proven results',
                  description: 'IMAGE Skincare combines cutting-edge science with clean, responsible ingredients. Their professional lines address everything from active acne and hyperpigmentation to advanced anti-aging and barrier repair.',
                  products: ['VITAL C Hydrating Serum', 'ILUMA Brightening Serum', 'AGELESS Total Retinol-A', 'CLEAR CELL Salicylic Cleanser', 'MAX Stem Cell Serum'],
                  color: '#226d7a',
                },
                {
                  brand: 'PCA Skin',
                  tagline: 'Science-backed correction & prevention',
                  description: 'PCA Skin has specialized in professional-grade chemical peels and corrective skincare since 1990. Their formulas are clinically proven to deliver visible improvements in tone, texture, and signs of aging.',
                  products: ['Hyaluronic Acid Boosting Serum', 'C-Quench Antioxidant Serum', 'Intensive Age Refining Treatment', 'Weightless Protection SPF 45', 'Hydrating Serum'],
                  color: '#22b8d1',
                },
              ].map((brand) => (
                <div
                  key={brand.brand}
                  className="hover-card-lift"
                  style={{
                    backgroundColor: 'rgba(26,58,71,0.04)',
                    border: '1px solid rgba(26,58,71,0.08)',
                    borderRadius: '16px',
                    padding: '32px',
                    borderTop: `3px solid ${brand.color}50`,
                  }}
                >
                  <div style={{
                    fontSize: '0.6rem', letterSpacing: '0.15em',
                    textTransform: 'uppercase', color: brand.color,
                    marginBottom: '8px', fontWeight: 600,
                  }}>
                    {brand.tagline}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.6rem', fontWeight: 400,
                    color: 'var(--white)', marginBottom: '16px',
                  }}>
                    {brand.brand}
                  </h3>
                  <p style={{
                    fontSize: '0.875rem', color: 'rgba(26,58,71,0.6)',
                    lineHeight: 1.7, marginBottom: '24px',
                  }}>
                    {brand.description}
                  </p>
                  <div style={{
                    fontSize: '0.6rem', letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: 'var(--gold)',
                    marginBottom: '12px', fontWeight: 600,
                  }}>
                    Featured Products
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {brand.products.map(p => (
                      <div key={p} style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        fontSize: '0.8rem', color: 'rgba(26,58,71,0.65)',
                      }}>
                        <span style={{
                          width: '5px', height: '5px', borderRadius: '50%',
                          backgroundColor: brand.color, flexShrink: 0, opacity: 0.7,
                        }} />
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p style={{
              textAlign: 'center', marginTop: '40px',
              fontSize: '0.8rem', color: 'rgba(26,58,71,0.3)',
            }}>
              Products available for purchase at our Ben White location or ask your provider at your next appointment.
            </p>
          </div>
        </section>

        <BeforeAfterGallery />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
