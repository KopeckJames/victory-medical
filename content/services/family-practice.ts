import type { ServiceContent } from '@/components/ServicePageTemplate'

const content: ServiceContent = {
  path: '/family-practice',
  metaTitle: 'Family Practice Austin TX | Victory Medical Family Doctors',
  metaDescription: 'Family practice at Victory Medical in Austin and Westlake Hills — one team caring for every age, from newborn well visits to senior chronic care, with labs, pharmacy, and urgent care under the same roof. Since 1996.',

  eyebrow: 'Austin & Westlake Hills · Family Medicine',
  h1: 'One Practice for',
  h1Accent: 'Your Whole Family',
  lede: 'Newborns to grandparents, seen by a team that knows the whole household — not a chart number.',
  intro: 'Victory Medical has practiced family medicine in South Austin since 1996. Our board-certified physicians, nurse practitioners, and physician assistants care for every age under one roof, with on-site labs, an in-house pharmacy, allergy services, and urgent care just down the hall — so most of what your family needs is handled in a single visit, in a single building.',
  stats: [
    { stat: '1996', label: 'Caring for Austin families since' },
    { stat: '3', label: 'Austin-area locations' },
    { stat: 'All ages', label: 'Newborn through senior care' },
    { stat: '7 days', label: 'Urgent care available' },
  ],
  heroPrimary: { label: 'Book With a Provider', href: 'https://www.priviahealth.com/practice/victory-medical/', external: true },
  heroSecondary: { label: 'Call (512) 462-3627', href: 'tel:5124623627' },
  breadcrumbLabel: 'Family Practice',
  visual: { src: '/generated/core-services.jpg', alt: 'Family physician consulting with a patient in a Victory Medical exam room' },

  overview: {
    label: 'The Practice',
    heading: 'Primary care that follows you through life',
    paragraphs: [
      'Family medicine is the specialty of continuity. Rather than handing you off as your needs change, your Victory Medical provider follows your history across decades — the childhood asthma that shaped your adult lungs, the family history that changes which screenings matter at 45, the medication that worked for you in 2019.',
      'That continuity is worth more when the rest of care is close by. Bloodwork is drawn on site. Prescriptions are filled at our own pharmacy. Allergy testing, weight management, hormone therapy, and physical medicine are all colleagues down the hall rather than referrals across town.',
    ],
    checklist: {
      heading: 'What family practice covers here',
      items: [
        'Annual physicals and well visits for every age',
        'Pediatric care, school and sports physicals',
        "Women's health and routine gynecological care",
        'Chronic disease management — diabetes, hypertension, thyroid, cholesterol',
        'Acute illness: infections, flu, strep, bronchitis',
        'Immunizations and travel vaccines',
        'On-site lab work and diagnostics',
        'Medicare annual wellness visits',
        'Referral coordination when specialty care is needed',
      ],
      note: 'Same-day and walk-in availability for established patients at our Austin location.',
    },
  },

  benefits: {
    label: 'Why Victory',
    heading: 'What a family practice should feel like',
    intro: 'The advantages of an integrated practice show up in the small things — fewer trips, fewer handoffs, fewer repeated stories.',
    items: [
      { icon: '⊕', title: 'One Team, Every Age', description: 'Your child\'s sports physical and your parent\'s diabetes management happen in the same practice, with providers who can see the whole family picture.' },
      { icon: '◎', title: 'Labs Drawn On Site', description: 'Bloodwork is collected during your visit rather than at a separate facility, and results come back to the provider who ordered them.' },
      { icon: '◇', title: 'Pharmacy in the Building', description: 'Our Austin location fills prescriptions in house, including custom-compounded medications you cannot get at a retail chain.' },
      { icon: '⟳', title: 'Urgent Care Down the Hall', description: 'When something acute comes up after hours or on a weekend, you are not starting over with a stranger at a standalone clinic.' },
      { icon: '✦', title: 'Integrated Specialty Care', description: 'Allergy, weight management, hormone therapy, ketamine, and physical medicine are all in house — coordinated by your primary provider.' },
      { icon: '◈', title: 'Privia Medical Group', description: 'As part of Privia, your records, referrals, and billing run through one connected system, and you keep access to a broad specialist network.' },
    ],
  },

  process: {
    label: 'Getting Started',
    heading: 'Becoming a Victory Medical patient',
    steps: [
      { step: '01', title: 'Book Your First Visit', description: 'Schedule online through Privia or call (512) 462-3627. Tell us whether you are establishing care, transferring records, or coming in for something specific.' },
      { step: '02', title: 'Records and Intake', description: 'We request records from your previous practice and collect your history, medications, and insurance before you arrive, so the visit itself is spent on you.' },
      { step: '03', title: 'Your Establishing Visit', description: 'A full review of your health history, current medications, family risk factors, and any concerns — plus a physical exam and any lab work indicated.' },
      { step: '04', title: 'A Plan You Leave With', description: 'Screening schedule, medication adjustments, referrals if needed, and a clear picture of what happens next and when to come back.' },
      { step: '05', title: 'Ongoing Care', description: 'Annual physicals, chronic condition follow-ups, and acute visits when life happens — with the same practice holding the full record.' },
    ],
  },

  faqs: {
    label: 'Frequently Asked',
    heading: 'Family Practice Questions',
    items: [
      { q: 'Do you accept new patients?', a: 'Yes. Victory Medical accepts new family practice patients at both our Austin location (4303 Victory Drive) and Westlake Hills (3811 Bee Caves Rd). You can book online through Privia or call (512) 462-3627 to establish care.' },
      { q: 'What insurance do you accept?', a: 'We accept most major insurance plans as well as Medicare. Coverage varies by plan and by service, so our insurance page has current details — or call and our team will verify your specific plan before your visit.' },
      { q: 'Can you see my children as well as me?', a: 'Yes. Family practice is trained across the full age range, from newborn well-child visits and school physicals through adult and geriatric care. Many Victory Medical families see the same provider across three generations.' },
      { q: 'What is the difference between family practice and urgent care here?', a: 'Family practice is your ongoing relationship — physicals, chronic conditions, prevention, and the continuity of one record over time. Urgent care handles the unexpected: injuries, acute illness, and issues that cannot wait for the next available appointment. Both operate inside Victory Medical, so notes from an urgent care visit land in your primary chart automatically.' },
      { q: 'Do you offer telemedicine visits?', a: 'Yes, for appropriate concerns — medication follow-ups, results review, and many acute issues can be handled by video. Anything requiring an exam, labs, or imaging is scheduled in person.' },
    ],
  },

  related: [
    { label: 'Preventative Care', href: '/preventative-care' },
    { label: 'Urgent Care', href: '/urgent-care' },
    { label: 'MDVIP Concierge', href: '/mdvip' },
    { label: 'On-Site Pharmacy', href: '/pharmacy' },
    { label: 'Heartwise Physical', href: '/victoryheartwise' },
  ],

  cta: {
    label: 'Establish Care',
    heading: 'Find a family doctor in Austin',
    body: 'Whether you are new to Austin, changing practices, or bringing your whole household under one roof, our team will get your records transferred and your first visit scheduled.',
    address: '4303 Victory Drive, Austin TX 78704 · 3811 Bee Caves Rd, Westlake Hills TX 78746',
    primary: { label: 'Book an Appointment', href: 'https://www.priviahealth.com/practice/victory-medical/', external: true },
    secondary: { label: 'See All Locations', href: '/locations' },
    badge: { value: '30 yrs', label: 'caring for Austin families' },
  },
}

export default content
