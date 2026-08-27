import type { ServiceContent } from '@/components/ServicePageTemplate'

const content: ServiceContent = {
  path: '/preventative-care',
  metaTitle: 'Preventative Care & Annual Physicals Austin TX | Victory Medical',
  metaDescription: 'Annual wellness exams and preventative health care in Austin and Westlake Hills — physicals for every age, on-site blood work, EKG, immunizations, and the comprehensive Heartwise Physical.',

  eyebrow: 'Austin & Westlake Hills · Preventative Medicine',
  h1: 'The Cheapest Medicine',
  h1Accent: 'Is the Kind You Skip',
  lede: 'Most of what shortens a life is detectable years before it becomes urgent.',
  intro: 'An annual wellness exam is the least dramatic appointment on your calendar and the one most likely to change your trajectory. Victory Medical provides routine wellness exams for all ages — history, vaccinations, blood work, pap smear, prostate exam, and referrals where indicated — plus the Heartwise Physical for patients who want a substantially deeper look.',
  stats: [
    { stat: 'All ages', label: 'Pediatric through Medicare' },
    { stat: 'On-site', label: 'Labs, EKG, and diagnostics' },
    { stat: '26 tests', label: 'In the Heartwise Physical' },
    { stat: 'Covered', label: 'Most plans cover annual wellness' },
  ],
  heroPrimary: { label: 'Book Your Annual Exam', href: 'https://www.priviahealth.com/practice/victory-medical/', external: true },
  heroSecondary: { label: 'Call (512) 462-3627', href: 'tel:5124623627' },
  breadcrumbLabel: 'Preventative Care',

  overview: {
    label: 'The Visit',
    heading: 'What an annual wellness exam covers',
    paragraphs: [
      'Preventative care works on a simple premise: conditions caught early are cheaper, less invasive, and more survivable than conditions caught late. High blood pressure, elevated blood sugar, thyroid dysfunction, and rising cholesterol are all silent for years — and all visible on a routine panel.',
      'Your annual exam covers medical history, a physical, blood work, indicated screenings, and vaccinations, with referrals arranged when something needs a specialist. Because labs and diagnostics are on site, most of it happens in a single visit rather than across three appointments and two buildings.',
    ],
    checklist: {
      heading: 'Included in routine wellness care',
      items: [
        'Annual physical exams for every age',
        'Comprehensive blood work drawn on site',
        'EKG and diagnostic testing',
        'Immunizations on the CDC schedule, plus flu shots',
        'Pap smear and prostate screening as indicated',
        'Medication review and management',
        'Nutritional counseling',
        'Referral coordination for specialty screening',
        'Medicare annual wellness visits',
      ],
      note: 'Most insurance plans cover annual preventative visits at no cost to you. Our team verifies before your appointment.',
    },
  },

  benefits: {
    label: 'Why It Matters',
    heading: 'What routine screening catches',
    intro: 'These are the conditions that develop quietly and respond best to early intervention.',
    items: [
      { icon: '⊕', title: 'Cardiovascular Risk', description: 'Blood pressure, cholesterol, and EKG findings build a picture of heart risk long before symptoms show up.' },
      { icon: '◎', title: 'Metabolic Changes', description: 'Blood sugar and A1c catch prediabetes at the stage where diet, activity, and medication can still reverse the trend.' },
      { icon: '◇', title: 'Thyroid Function', description: 'Fatigue, weight changes, and mood shifts are often dismissed for years when a thyroid panel would explain them.' },
      { icon: '⟳', title: 'Cancer Screening', description: 'Pap smears, prostate screening, mammogram referral, and colon screening scheduled on the intervals your age and history call for.' },
      { icon: '✦', title: 'Medication Review', description: 'An annual look at everything you take, including interactions and prescriptions that have quietly outlived their purpose.' },
      { icon: '◈', title: 'Immunization Status', description: 'Vaccines on the CDC schedule, boosters that have lapsed, and travel vaccines when you need them.' },
    ],
  },

  process: {
    label: 'Going Deeper',
    heading: 'The Heartwise Physical',
    intro: 'For patients who want more than a routine annual, Heartwise is a comprehensive, non-invasive executive physical.',
    steps: [
      { step: '01', title: '26 Tests, 90 Minutes', description: 'A state-of-the-art, non-invasive exam drawing on 26 separate tests, performed by a specialized clinician in a single 90-minute appointment.' },
      { step: '02', title: 'Head-to-Toe Assessment', description: 'Considerably more thorough than a routine physical, designed to surface issues that a standard annual is not built to detect.' },
      { step: '03', title: 'Proprietary Analysis', description: 'Results are evaluated by a program that analyzes the full data set and compares your health status against established benchmarks.' },
      { step: '04', title: 'Itemized Results & Guidance', description: 'Your physician walks you through the findings item by item and builds a treatment plan around your specific results — not a generic wellness handout.' },
      { step: '05', title: 'Covered by Most Insurance', description: 'As a preventative measure, the Heartwise Physical is covered by most plans. Call ahead and we will confirm yours before scheduling.' },
    ],
  },

  faqs: {
    label: 'Frequently Asked',
    heading: 'Preventative Care Questions',
    items: [
      { q: 'How often should I have a physical?', a: 'Annually for most adults, though frequency depends on your age, chronic conditions, and risk factors. Patients managing diabetes, hypertension, or heart disease typically need more frequent follow-up between annual exams.' },
      { q: 'Is my annual exam covered by insurance?', a: 'Preventative annual wellness visits are covered at no cost by most plans under standard preventative-care benefits. Additional testing beyond the preventative panel may be billed differently — our team will explain what applies to your plan.' },
      { q: 'What is the difference between a physical and the Heartwise Physical?', a: 'A routine annual covers history, exam, standard blood work, and indicated screenings. Heartwise is a far more comprehensive 90-minute exam built from 26 tests, with results run through a proprietary analysis and returned as an itemized report — closer to an executive physical.' },
      { q: 'Do I need to fast before my appointment?', a: 'If blood work is planned, usually yes — typically 8–12 hours for an accurate lipid and glucose panel. We will tell you when you schedule, so you are not surprised at check-in.' },
      { q: 'Can I get my vaccinations at the same visit?', a: 'Yes. Immunizations on the CDC schedule, flu shots, and travel vaccines can all be administered during your wellness visit.' },
    ],
  },

  related: [
    { label: 'Heartwise Physical', href: '/victoryheartwise' },
    { label: 'Family Practice', href: '/family-practice' },
    { label: 'Primary Care', href: '/general-medical-care' },
    { label: 'Mammogram Screening', href: '/mammogram-screening-austin' },
    { label: 'MDVIP Concierge', href: '/mdvip' },
  ],

  cta: {
    label: 'Schedule Screening',
    heading: 'Book the appointment you keep postponing',
    body: 'Annual wellness visits are available at both clinical locations, with labs and diagnostics on site so most of it finishes in one trip.',
    address: '4303 Victory Drive, Austin TX 78704 · 3811 Bee Caves Rd, Westlake Hills TX 78746',
    primary: { label: 'Book an Appointment', href: 'https://www.priviahealth.com/practice/victory-medical/', external: true },
    secondary: { label: 'Learn About Heartwise', href: '/victoryheartwise' },
  },
}

export default content
