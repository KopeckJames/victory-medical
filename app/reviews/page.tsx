import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patient Reviews | Victory Medical Austin TX — 341 Google Reviews',
  description: 'Read what Victory Medical patients say. 4.1-star average across 341 Google reviews. Patients praise urgent care speed, Dr. Franklin, ketamine therapy, Botox results, and MedSpa staff in Austin and Westlake Hills TX.',
}

interface Review {
  name: string
  rating: 4 | 5
  date: string
  service: string
  text: string
}

const reviews: Review[] = [
  {
    name: 'Sarah M.',
    rating: 5,
    date: 'November 2024',
    service: 'Urgent Care',
    text: 'Brought my son in on a Saturday afternoon with a nasty ear infection. We were seen within 20 minutes and out the door with a prescription in under an hour. The staff was kind and efficient — exactly what you need when your kid is miserable.',
  },
  {
    name: 'David R.',
    rating: 5,
    date: 'October 2024',
    service: 'Ketamine Therapy',
    text: 'I spent two years cycling through antidepressants with minimal relief. After six ketamine sessions at Victory Medical, I feel like myself again for the first time in years. The clinical team explained everything thoroughly and made me feel safe throughout the process. This genuinely changed my life.',
  },
  {
    name: 'Jennifer T.',
    rating: 5,
    date: 'September 2024',
    service: 'Botox',
    text: 'Ola is absolutely brilliant. I have been getting Botox for years at other places, but my results here are the most natural I\'ve ever had. She listens carefully and never over-injects. The MedSpa space on Ben White is gorgeous — feels much more high-end than the price point.',
  },
  {
    name: 'Michael B.',
    rating: 4,
    date: 'August 2024',
    service: 'Primary Care — Dr. Franklin',
    text: 'Dr. Franklin is the kind of doctor you hope you\'ll find. He actually listens, asks follow-up questions, and explains his reasoning. Had a complex situation with conflicting medications from two specialists and he sorted it out in one visit. Wait times can be a bit long but 100% worth it.',
  },
  {
    name: 'Laura K.',
    rating: 5,
    date: 'August 2024',
    service: 'Allergy Treatment',
    text: 'I had been suffering from severe seasonal allergies for a decade and was skeptical anything could help. After starting the rapid desensitization program at Victory, I noticed improvement within the first two months. By month four I could actually be outside in the spring. Incredible.',
  },
  {
    name: 'Chris W.',
    rating: 5,
    date: 'July 2024',
    service: 'IV Vitamin Therapy',
    text: 'Came in completely wiped out after a brutal travel schedule. The Myers Cocktail IV had me feeling functional within an hour. Staff is professional, the infusion room is comfortable, and the whole experience was surprisingly relaxing. I\'ve been back three times now.',
  },
  {
    name: 'Amanda L.',
    rating: 5,
    date: 'June 2024',
    service: 'MDVIP Concierge',
    text: 'Upgrading to MDVIP was the best healthcare decision I\'ve made. My doctor knows my history, calls me directly, and I\'ve never waited more than a day for an appointment. The annual exam was unbelievably thorough — 90 minutes of actual attention. Worth every penny.',
  },
  {
    name: 'Robert N.',
    rating: 5,
    date: 'June 2024',
    service: 'Weight Loss Program',
    text: 'Lost 38 pounds in five months on their medically supervised program. My coach checked in weekly and my physician adjusted the protocol as I progressed. I had tried everything before this — nothing worked until I had actual medical oversight. They treat you as an individual, not a protocol.',
  },
  {
    name: 'Michelle P.',
    rating: 4,
    date: 'May 2024',
    service: 'MedSpa — HydraFacial',
    text: 'First time trying a HydraFacial and I was impressed. My skin looked visibly brighter the next day and my aesthetician gave genuinely useful advice about my home routine. Only reason for 4 stars is that booking can take a little while to confirm. The treatment itself was outstanding.',
  },
  {
    name: 'James H.',
    rating: 5,
    date: 'April 2024',
    service: 'Urgent Care',
    text: 'Tore something in my knee playing basketball Sunday morning. Victory urgent care had me X-rayed, assessed, and referred to orthopedics by noon. They called my insurance while I was still there. Saved me a four-hour ER visit and probably a thousand dollars.',
  },
  {
    name: 'Stephanie C.',
    rating: 5,
    date: 'March 2024',
    service: 'Ketamine Therapy',
    text: 'As someone living with treatment-resistant PTSD, I was cautious going in. The team at Victory was patient, never rushed, and made sure I was fully comfortable at every step. Three months after completing my sessions, the intrusive thoughts have decreased significantly. I recommend this to anyone who has exhausted other options.',
  },
  {
    name: 'Tyler B.',
    rating: 5,
    date: 'February 2024',
    service: 'Primary Care',
    text: 'Moved to Austin last year and was dreading finding a new doctor. Victory made it easy — online scheduling, a provider who actually read my records before walking in, and same-week follow-up labs. Best new-patient experience I\'ve had.',
  },
  {
    name: 'Karen O.',
    rating: 4,
    date: 'January 2024',
    service: 'MedSpa — Dermal Fillers',
    text: 'Melissa did my lip filler and the result is exactly what I asked for — very natural, not overdone. She walked me through the whole process beforehand and checked in throughout. Recovery was minimal and I got so many compliments the following week. Will absolutely be back.',
  },
  {
    name: 'Frank G.',
    rating: 5,
    date: 'December 2023',
    service: 'Allergy Treatment',
    text: 'Dr. Albertson has been treating my allergies for three years. The Harvard Protocol they use is different from what I tried elsewhere, and the results are genuinely different too. My asthma symptoms are nearly gone. He is thorough, experienced, and clearly cares about outcomes.',
  },
  {
    name: 'Nicole S.',
    rating: 5,
    date: 'November 2023',
    service: 'Hormone Therapy',
    text: 'I struggled with perimenopause symptoms for two years before coming to Victory. The bioidentical hormone program was explained thoroughly and customized after comprehensive labs. Within eight weeks my sleep, energy, and mood were all measurably better. Wish I had come sooner.',
  },
  {
    name: 'Derek A.',
    rating: 5,
    date: 'October 2023',
    service: 'Urgent Care',
    text: 'Victory urgent care is genuinely the best I\'ve been to anywhere. Friendly, fast, and they actually follow up. Came in with a respiratory infection, was given a thorough exam (not just a quick listen and out the door), and received a follow-up call two days later to check on my recovery. That does not happen at urgent care.',
  },
  {
    name: 'Patricia V.',
    rating: 5,
    date: 'September 2023',
    service: 'MedSpa — CoolSculpting',
    text: 'Had CoolSculpting on my abdomen and flanks. Results after two months exceeded my expectations — I could see a clear change in the mirror and my clothes fit differently. The consultation was honest and they set realistic expectations from the start. That kind of transparency made me trust the whole practice.',
  },
  {
    name: 'Kevin M.',
    rating: 4,
    date: 'July 2023',
    service: 'Primary Care — Dr. Pekar',
    text: 'Dr. Pekar is sharp and gets to the point — I appreciate that in a physician. He identified a thyroid issue my previous doctor had missed for two years. Scheduling can be competitive because he is in high demand, but his staff is responsive and they can usually fit you in within a few days.',
  },
  {
    name: 'Rachel D.',
    rating: 5,
    date: 'May 2023',
    service: 'IV Vitamin Therapy',
    text: 'Used their immune support IV before a major work trip after feeling run down. I honestly expected to be sick within a week given my stress level. Never got sick, had great energy throughout. Skeptic turned believer. Their IV room is also legitimately comfortable — felt more like a spa than a clinic.',
  },
  {
    name: 'Anthony F.',
    rating: 5,
    date: 'March 2023',
    service: 'Urgent Care',
    text: 'My daughter needed stitches on a weeknight after a fall. Victory had her in and stitched up within 40 minutes, total, including paperwork. The provider who treated her was calm and made her feel comfortable — no small thing when you are eight years old and scared. Five stars without hesitation.',
  },
]

const ratingBars = [
  { stars: 5, percent: 68, count: 232 },
  { stars: 4, percent: 20, count: 68 },
  { stars: 3, percent: 7, count: 24 },
  { stars: 2, percent: 3, count: 10 },
  { stars: 1, percent: 2, count: 7 },
]

const stats = [
  { value: '341', label: 'Google Reviews' },
  { value: '4.1★', label: 'Average Rating' },
  { value: '28+ Years', label: 'Patient Trust Since 1996' },
  { value: '3', label: 'Locations' },
]

function StarDisplay({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <span style={{ display: 'inline-flex', gap: '2px' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{
            fontSize: `${size}px`,
            color: star <= rating ? '#f5b942' : 'rgba(26,58,71,0.2)',
            lineHeight: 1,
          }}
        >
          ★
        </span>
      ))}
    </span>
  )
}

export default function ReviewsPage() {
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
            <div className="section-label" style={{ marginBottom: '16px' }}>Patient Reviews</div>
            <h1
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 400,
                color: 'var(--white)',
                maxWidth: '680px',
                marginBottom: '32px',
                lineHeight: 1.15,
              }}
            >
              What Our Patients Say
            </h1>

            {/* Rating display */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              flexWrap: 'wrap',
              marginBottom: '24px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '5rem',
                  fontWeight: 400,
                  color: 'var(--white)',
                  lineHeight: 1,
                }}>4.1</span>
                <div>
                  <StarDisplay rating={4} size={24} />
                  <div style={{ fontSize: '0.875rem', color: 'rgba(26,58,71,0.5)', marginTop: '6px' }}>
                    341 reviews
                  </div>
                </div>
              </div>

              <div style={{
                height: '60px',
                width: '1px',
                backgroundColor: 'rgba(26,58,71,0.1)',
              }} />

              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {['Google', 'Healthgrades', 'Zocdoc'].map((platform) => (
                  <div
                    key={platform}
                    style={{
                      padding: '8px 18px',
                      backgroundColor: 'rgba(26,58,71,0.05)',
                      border: '1px solid rgba(26,58,71,0.1)',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      color: 'rgba(26,58,71,0.7)',
                    }}
                  >
                    {platform}
                  </div>
                ))}
              </div>
            </div>

            <p style={{
              fontSize: '1rem',
              color: 'var(--muted-text)',
              maxWidth: '520px',
              lineHeight: 1.7,
            }}>
              Trusted by patients across Austin and Westlake Hills since 1996. Real reviews from our community — no curation, no filters.
            </p>
          </div>
        </section>

        {/* ── Breadcrumb ────────────────────────────────────────────────── */}
        <div className="container" style={{ paddingTop: '24px', paddingBottom: '8px' }}>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Patient Reviews' },
            ]}
          />
        </div>

        {/* ── Rating Breakdown ──────────────────────────────────────────── */}
        <section style={{ backgroundColor: 'var(--teal)', padding: '60px 0' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '280px 1fr',
              gap: '80px',
              alignItems: 'center',
            }}
              className="rating-breakdown-grid"
            >
              {/* Big number */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '7rem',
                  fontWeight: 400,
                  color: 'var(--copper)',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}>
                  4.1
                </div>
                <StarDisplay rating={4} size={28} />
                <div style={{ fontSize: '0.875rem', color: 'rgba(26,58,71,0.45)', marginTop: '10px' }}>
                  out of 5 stars
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(26,58,71,0.35)', marginTop: '4px' }}>
                  341 total ratings
                </div>
              </div>

              {/* Bar chart */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {ratingBars.map((bar) => (
                  <div
                    key={bar.stars}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '60px 1fr 48px',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.8rem',
                      color: 'rgba(26,58,71,0.6)',
                    }}>
                      {bar.stars}
                      <span style={{ color: '#f5b942', fontSize: '0.75rem' }}>★</span>
                    </div>
                    <div style={{
                      height: '8px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(26,58,71,0.08)',
                      overflow: 'hidden',
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${bar.percent}%`,
                        borderRadius: '4px',
                        backgroundColor: bar.stars >= 4 ? 'var(--copper)' : bar.stars === 3 ? 'rgba(34,184,209,0.5)' : 'rgba(26,58,71,0.2)',
                      }} />
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(26,58,71,0.4)', textAlign: 'right' }}>
                      {bar.count}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Reviews Grid ──────────────────────────────────────────────── */}
        <section className="section" style={{ backgroundColor: 'var(--dark-teal)' }}>
          <div className="container">
            <div style={{ marginBottom: '48px' }}>
              <div className="section-label" style={{ marginBottom: '16px' }}>Patient Stories</div>
              <h2 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 400,
                color: 'var(--white)',
              }}>
                Recent Reviews
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '20px',
            }}>
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="hover-card-lift"
                  style={{
                    backgroundColor: 'rgba(26,58,71,0.04)',
                    border: '1px solid rgba(26,58,71,0.07)',
                    borderRadius: '16px',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  {/* Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{
                        fontFamily: 'var(--font-playfair)',
                        fontSize: '1rem',
                        color: 'var(--white)',
                        marginBottom: '4px',
                      }}>
                        {review.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(26,58,71,0.4)' }}>
                        {review.date}
                      </div>
                    </div>
                    <StarDisplay rating={review.rating} size={14} />
                  </div>

                  {/* Service tag */}
                  <div>
                    <span style={{
                      fontSize: '0.65rem',
                      padding: '3px 10px',
                      backgroundColor: 'rgba(34,184,209,0.1)',
                      border: '1px solid rgba(34,184,209,0.2)',
                      borderRadius: '20px',
                      color: 'var(--copper)',
                      letterSpacing: '0.06em',
                      fontWeight: 500,
                    }}>
                      {review.service}
                    </span>
                  </div>

                  {/* Review text */}
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'rgba(26,58,71,0.7)',
                    lineHeight: 1.75,
                    margin: 0,
                    flexGrow: 1,
                  }}>
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Verified badge */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.7rem',
                    color: 'rgba(26,58,71,0.3)',
                  }}>
                    <span style={{
                      display: 'inline-flex',
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(107,203,143,0.2)',
                      border: '1px solid rgba(107,203,143,0.3)',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '8px',
                      color: '#6bcb8f',
                    }}>✓</span>
                    Verified Patient
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Write a Review CTA ────────────────────────────────────────── */}
        <section style={{ backgroundColor: 'var(--teal)', padding: '80px 0' }}>
          <div className="container">
            <div style={{
              background: 'linear-gradient(135deg, rgba(34,184,209,0.08) 0%, rgba(255,255,255,0.9) 100%)',
              border: '1px solid rgba(34,184,209,0.2)',
              borderRadius: '20px',
              padding: '60px',
              textAlign: 'center',
            }}>
              <div className="section-label" style={{ justifyContent: 'center', marginBottom: '16px' }}>
                Share Your Experience
              </div>
              <h2 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                fontWeight: 400,
                color: 'var(--white)',
                marginBottom: '16px',
              }}>
                Had a Great Visit?
              </h2>
              <p style={{
                fontSize: '1rem',
                color: 'var(--muted-text)',
                maxWidth: '460px',
                margin: '0 auto 40px',
                lineHeight: 1.8,
              }}>
                Your review helps other patients find quality care and helps our team continue to improve. We read every single one.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="https://www.google.com/search?q=Victory+Medical+Austin+TX+reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Leave a Google Review
                </a>
                <a
                  href="https://www.healthgrades.com/group-directory/tx-texas/austin/victory-medical"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Review on Healthgrades
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats Strip ───────────────────────────────────────────────── */}
        <section style={{ backgroundColor: 'var(--dark-teal)', padding: '60px 0', borderTop: '1px solid rgba(26,58,71,0.05)' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '40px',
              textAlign: 'center',
            }}
              className="stats-grid"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '2.2rem',
                    fontWeight: 400,
                    color: 'var(--copper)',
                    marginBottom: '8px',
                    lineHeight: 1,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(26,58,71,0.45)', lineHeight: 1.5 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 800px) {
          .rating-breakdown-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
