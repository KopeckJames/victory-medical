import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import ServicesAccordion from '@/components/ServicesAccordion'
import type { Metadata, NextPage } from 'next'
import type { Service } from '@/components/ServicesAccordion'

export const metadata: Metadata = {
  title: 'Medical Services | Victory Medical Austin TX',
  description:
    'Comprehensive medical services in Austin and Westlake Hills, TX. Family practice, urgent care, allergy treatment, ketamine therapy, weight loss, hormone therapy, physical medicine, and more.',
}

const services: Service[] = [
  {
    id: 'primary-care',
    icon: '⊕',
    title: 'Family & Primary Care',
    subtitle: 'Board-certified physicians for the whole family',
    description:
      'Comprehensive primary and preventative care for all ages — in-person or via telemedicine. Our board-certified physicians, physician assistants, and nurse practitioners provide personalized care tailored to your health goals.',
    features: [
      'Annual physicals and wellness exams',
      'Chronic disease management (diabetes, hypertension)',
      'Routine blood work and labs',
      'Immunizations and vaccines',
      'Medication management',
      'EKG and diagnostic testing',
      'Nutritional counseling',
      'Sports injury evaluation',
      'Workers compensation',
      'Telemedicine available',
    ],
    callout: 'Same-day and next-day appointments available.',
  },
  {
    id: 'urgent-care',
    icon: '⚡',
    title: 'Urgent Care',
    subtitle: '50–300% less than the average ER visit',
    description:
      'Walk-in, no appointment needed. Board-certified doctors, NPs, and PAs treat patients of all ages for non-life-threatening conditions. Extended hours including evenings and weekends at all locations.',
    features: [
      'Walk-ins welcome — no appointment needed',
      'Extended hours including evenings',
      'Weekend availability',
      'Injuries and acute pain',
      'Respiratory illness, flu, COVID',
      'Eye, ear, and throat infections',
      'Sprains, strains, minor fractures',
      'Burns and lacerations',
      'UTIs and GI issues',
      'All ages treated',
    ],
    callout: 'See a board-certified provider for a fraction of ER cost.',
  },
  {
    id: 'allergy',
    icon: '◎',
    title: 'Allergy Services',
    subtitle: 'Harvard Protocol — Unique to Victory Medical',
    description:
      'Full-spectrum allergy testing and immunotherapy for 75+ regional allergens. Our unique rapid desensitization protocol, developed from Harvard research, helps most patients find relief within months — not years.',
    features: [
      'Skin prick testing (75+ regional allergens)',
      'Intradermal allergy testing',
      'Blood allergy testing',
      'Food elimination testing',
      'Rapid desensitization immunotherapy',
      'Traditional allergy immunotherapy',
      'Asthma diagnosis and management',
      'Spirometry and lung function testing',
      'Available at Austin and Westlake Hills',
    ],
    callout: 'Most patients report significant relief within the first few months of treatment.',
  },
  {
    id: 'weight-loss',
    icon: '◇',
    title: 'Medical Weight Loss',
    subtitle: 'Medically supervised, personalized programs',
    description:
      'Physician-supervised weight loss programs combining prescription therapy, nutritional guidance, and personal coaching. Custom appetite suppressants and injection therapy accelerate and sustain your results.',
    features: [
      'Custom appetite suppressant prescriptions',
      'Compounded weight loss medications',
      'B-12 injections',
      'Lipo-B injections',
      'Nutritional consultation',
      'Personal weight loss coaches',
      'Weight loss counseling and surveillance',
      'HCG therapy',
      'Ongoing progress monitoring',
    ],
    callout: 'Your program is built around your metabolism, lifestyle, and goals.',
  },
  {
    id: 'hormones',
    icon: '⟳',
    title: 'Natural Hormone Replacement',
    subtitle: 'Club Longevity — Holistic anti-aging medicine',
    description:
      'Custom-compounded natural hormone therapy for menopause, low testosterone, and anti-aging. Our "Club Longevity" program takes a comprehensive approach combining hormones, exercise, diet, and supplements.',
    features: [
      'Bioidentical hormone therapy',
      'Menopause management',
      'Low testosterone treatment',
      'Custom-compounded formulations',
      'Anti-aging and longevity medicine',
      'Fatigue and energy optimization',
      'Sleep quality improvement',
      'Libido and mood support',
      'Cognitive clarity optimization',
      'Ongoing labs and monitoring',
    ],
    callout: '"Club Longevity" — a holistic alternative to traditional HRT.',
  },
  {
    id: 'ketamine',
    icon: '✦',
    title: 'Ketamine Therapy',
    subtitle: 'One of few licensed infusion clinics in the US',
    description:
      'Physician-monitored ketamine infusion therapy for treatment-resistant mental health conditions and chronic pain. 40-minute infusions with results that begin within hours. Sustained relief over a series of sessions.',
    features: [
      'Licensed IV ketamine infusions',
      'Physician-monitored sessions',
      '40-minute infusion protocol',
      'Treatment-resistant depression',
      'PTSD and trauma',
      'Bipolar disorder',
      'OCD and anxiety',
      'Postpartum depression',
      'Fibromyalgia',
      'Chronic pain management',
    ],
    callout: 'Results begin within hours. Effects sustained over multiple sessions.',
  },
  {
    id: 'physical-medicine',
    icon: '⊞',
    title: 'Physical Medicine',
    subtitle: 'Chiropractic, PT, and massage under one roof',
    description:
      'A multidisciplinary team of physical therapists, chiropractors, massage therapists, and rehabilitation technicians focused on restoring function and preventing future injury.',
    features: [
      'Chiropractic care',
      'Physical therapy',
      'Massage therapy',
      'Sports medicine',
      'Rehabilitation programs',
      'Acute injury treatment',
      'Chronic pain management',
      'Preventive wellness care',
      'Post-surgical rehabilitation',
    ],
    callout: 'Coordinated with your primary care team for comprehensive recovery.',
  },
  {
    id: 'pharmacy',
    icon: '⬡',
    title: 'On-Site Compounding Pharmacy',
    subtitle: 'Custom medications formulated for you',
    description:
      'Full-service compounding pharmacy at our main Austin location. We create custom medications precisely tailored to your needs — allergen-free, unique dosage forms, and formulations unavailable commercially.',
    features: [
      'Custom dosage formulations',
      'Allergen-free compounds (no dyes, lactose, gluten)',
      'Unavailable commercial dosage forms',
      'Combination medications',
      'Traditional prescriptions',
      'Vitamins and supplements',
      'OTC medications',
      'Hormone therapy compounds',
      'Weight loss compounds',
      'Online prescription portal',
    ],
    callout: 'Pharmacy located at 4303 Victory Drive, Austin TX. Portal: vmc.pharmetika.com',
  },
  {
    id: 'acupuncture',
    icon: '⊛',
    title: 'Acupuncture',
    subtitle: 'Traditional medicine meets integrative care',
    description:
      "Licensed acupuncture integrated within Victory Medical's comprehensive wellness model. Our licensed acupuncturist and nurse practitioner Jason Spees combines traditional Chinese medicine with modern integrative care to address pain, mental health, and systemic wellness.",
    features: [
      'Traditional acupuncture therapy',
      'Chronic pain management',
      'Musculoskeletal conditions',
      'Anxiety and stress reduction',
      'Insomnia and sleep disorders',
      'Headache and migraine relief',
      'Digestive health support',
      'Fertility and hormonal balance',
      'Post-injury rehabilitation',
      'Integrative wellness protocols',
    ],
    callout: 'Provided by Jason Spees, NP — a dual-licensed Nurse Practitioner and Licensed Acupuncturist.',
  },
  {
    id: 'regenerative-medicine',
    icon: '⟡',
    title: 'Regenerative Medicine & Peptide Therapy',
    subtitle: 'Cutting-edge cellular health optimization',
    description:
      'Advanced regenerative therapies designed to support cellular repair, longevity, and peak performance. Led by Judith Chedville, Director of Regenerative Medicine, our peptide protocols and regenerative treatments offer a forward-looking approach to health optimization.',
    features: [
      'Peptide therapy protocols',
      'BPC-157 tissue repair',
      'Thymosin Alpha-1 immune support',
      'Sermorelin and growth hormone peptides',
      'NAD+ infusion therapy',
      'Cellular health optimization',
      'Longevity and anti-aging protocols',
      'Athletic performance support',
      'Post-surgery recovery acceleration',
      'Comprehensive labs and monitoring',
    ],
    callout: 'Judith Chedville, Director of Regenerative Medicine, designs every protocol to your individual biology.',
  },
  {
    id: 'additional',
    icon: '◈',
    title: 'Additional Services',
    subtitle: 'Comprehensive care for every need',
    description:
      'Victory Medical offers a full spectrum of specialty and preventive services to keep you and your family healthy at every stage of life.',
    features: [
      'Telemedicine visits',
      'Mammogram screening',
      'MDVIP concierge medicine (Westlake Hills)',
      'Heartwise physical (26-test cardiovascular screening)',
      'Remote patient monitoring (RPM)',
      'Chronic care management (CCM)',
      'Super-Meds compounded prescriptions',
      'IV vitamin infusion',
      'Privia Health partnership',
    ],
    callout: 'Ask your provider about the Heartwise Physical — 26 tests in 90 minutes.',
  },
]

const ServicesPage: NextPage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
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
              background:
                'radial-gradient(ellipse 60% 60% at 30% 50%, rgba(34,184,209,0.08) 0%, transparent 70%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(34,184,209,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(34,184,209,0.02) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          <div className="container" style={{ position: 'relative' }}>
            <div className="section-label" style={{ marginBottom: '16px' }}>
              What We Offer
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 400,
                color: 'var(--white)',
                maxWidth: '600px',
                marginBottom: '24px',
              }}
            >
              Complete Medical Services in{' '}
              <span style={{ color: 'var(--copper)' }}>Central Texas</span>
            </h1>
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--muted-text)',
                maxWidth: '560px',
                lineHeight: 1.7,
              }}
            >
              From your family&apos;s primary care to cutting-edge ketamine therapy and medical
              aesthetics — Victory Medical brings integrated, comprehensive medicine under one roof
              at three Austin-area locations.
            </p>
          </div>
        </section>

        {/* Services Accordion */}
        <section style={{ backgroundColor: 'var(--teal)', padding: '80px 0' }}>
          <div className="container">
            <ServicesAccordion services={services} />
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}

export default ServicesPage
