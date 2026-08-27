import type { ServiceContent } from '@/components/ServicePageTemplate'

const content: ServiceContent = {
  path: '/general-medical-care',
  metaTitle: 'Primary Care Clinic Austin TX | Victory Medical',
  metaDescription: 'Primary care in Austin and Westlake Hills — acute illness, injury and pain, routine checkups, immunizations, medication management, workers comp, and sports injury care for patients of all ages.',

  eyebrow: 'Austin & Westlake Hills · Primary Care',
  h1: 'A Physician You Can',
  h1Accent: 'Actually Reach',
  lede: 'Broken bone or common cold — the same practice, the same record, the same people.',
  intro: 'Primary care is the front door to everything else in medicine. Victory Medical\'s team builds individualized treatment plans for patients of all ages across Austin and Westlake Hills, covering everything from acute infections and injuries through routine checkups, medication management, and the coordination that keeps specialty care from fragmenting.',
  stats: [
    { stat: 'Same day', label: 'And next-day appointments' },
    { stat: 'All ages', label: 'Pediatric through geriatric' },
    { stat: 'On-site', label: 'Labs, EKG, and pharmacy' },
    { stat: 'Telehealth', label: 'Available for many visits' },
  ],
  heroPrimary: { label: 'Book an Appointment', href: 'https://www.priviahealth.com/practice/victory-medical/', external: true },
  heroSecondary: { label: 'Call (512) 462-3627', href: 'tel:5124623627' },
  breadcrumbLabel: 'Primary Care',

  overview: {
    label: 'The Practice',
    heading: 'Everything a primary care clinic should handle',
    paragraphs: [
      'Throughout your life you need a physician you can trust — someone who knows your history well enough to notice when something is off. Victory Medical\'s primary care team is built around that relationship, then supported by the diagnostics, pharmacy, and specialty services that let most problems be solved without a referral.',
      'Our providers treat patients of every age with individualized plans rather than protocol defaults, drawing on integrated allergy, weight management, hormone, physical medicine, and behavioral health services that all sit inside the same practice.',
    ],
    checklist: {
      heading: 'What primary care covers here',
      items: [
        'Injury and acute pain — headaches, neck, back, muscle pain, arthritis',
        'Acute illness — eye, ear, throat, respiratory, urinary, GI infections',
        'Routine checkups, annual physicals, and EKG',
        'Blood work and on-site diagnostics',
        'Immunizations, flu shots, and CDC-schedule vaccines',
        'Medication management and nutritional counseling',
        'Workers compensation — on-the-job injury, physical rehab, FCE, MMI',
        'Sports injuries with rehab and chiropractic support',
        'Depression and behavioral health support',
      ],
      note: 'Telemedicine visits are available where appropriate. Anything needing an exam or labs is scheduled in person.',
    },
  },

  benefits: {
    label: 'What You Get',
    heading: 'Primary care inside an integrated practice',
    items: [
      { icon: '⊕', title: 'Individualized Plans', description: 'Treatment built around your history, medications, and goals rather than a default pathway applied to everyone with the same diagnosis.' },
      { icon: '◎', title: 'Diagnostics On Site', description: 'Blood work and EKG happen during your visit, so the provider who ordered them is the one who reads them back to you.' },
      { icon: '◇', title: 'Compounding Pharmacy', description: 'Prescriptions filled in the building, including compounded formulations no retail chain can produce.' },
      { icon: '⟳', title: 'Workers Compensation', description: 'On-the-job injury care including physical rehab, functional capacity evaluation, and maximum medical improvement documentation.' },
      { icon: '✦', title: 'Sports Injury Care', description: 'Evaluation plus the physical rehab and chiropractic care that recovery actually requires, coordinated in one practice.' },
      { icon: '◈', title: 'Behavioral Health', description: 'Depression and mental health support inside primary care, with ketamine therapy available for treatment-resistant cases.' },
    ],
  },

  audience: {
    label: 'Who We See',
    heading: 'Primary care for every stage',
    items: [
      { label: 'Families with children', description: 'Well-child visits, school and sports physicals, immunizations, and the acute illnesses that move through a household every winter.' },
      { label: 'Adults managing chronic conditions', description: 'Diabetes, hypertension, thyroid disorders, and cholesterol — managed with regular follow-up and lab monitoring rather than annual guesswork.' },
      { label: 'Working adults', description: 'Same-day availability, telemedicine where appropriate, and workers compensation care when an injury happens on the job.' },
      { label: 'Medicare patients', description: 'Annual wellness visits, medication review, and coordinated specialty referrals through the Privia network.' },
    ],
  },

  faqs: {
    label: 'Frequently Asked',
    heading: 'Primary Care Questions',
    items: [
      { q: 'How quickly can I be seen?', a: 'Same-day and next-day appointments are frequently available for established patients. For acute problems outside those windows, our urgent care operates inside the same practice with walk-in availability.' },
      { q: 'Do you offer telemedicine?', a: 'Yes, for medication follow-ups, results review, and many acute concerns. Anything requiring a physical exam, labs, or imaging is scheduled in person.' },
      { q: 'Can you handle workers compensation cases?', a: 'Yes. We treat on-the-job injuries and provide the associated documentation, including physical rehab, functional capacity evaluations, and maximum medical improvement determinations.' },
      { q: 'What insurance do you take?', a: 'Most major plans and Medicare. Coverage varies by plan and service, so our insurance page carries the current picture and our team can verify your specific plan before your visit.' },
      { q: 'Is primary care the same as family practice here?', a: 'They overlap heavily. Family practice emphasizes caring for every member of a household across their lifespan; primary care describes the same team handling your day-to-day medical needs. In practice at Victory Medical, it is the same providers and the same record.' },
    ],
  },

  related: [
    { label: 'Family Practice', href: '/family-practice' },
    { label: 'Preventative Care', href: '/preventative-care' },
    { label: 'Urgent Care', href: '/urgent-care' },
    { label: 'Physical Medicine', href: '/physical-medicine' },
    { label: 'On-Site Pharmacy', href: '/pharmacy' },
  ],

  cta: {
    label: 'Establish Care',
    heading: 'Start with a primary care visit',
    body: 'New patients are welcome at both clinical locations. Tell us whether you are transferring records or coming in for something specific and we will schedule accordingly.',
    address: '4303 Victory Drive, Austin TX 78704 · 3811 Bee Caves Rd, Westlake Hills TX 78746',
    primary: { label: 'Book an Appointment', href: 'https://www.priviahealth.com/practice/victory-medical/', external: true },
    secondary: { label: 'See All Locations', href: '/locations' },
  },
}

export default content
