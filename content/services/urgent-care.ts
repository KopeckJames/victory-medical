import type { ServiceContent } from '@/components/ServicePageTemplate'

const content: ServiceContent = {
  path: '/urgent-care',
  metaTitle: 'Urgent Care Austin TX | Walk-In Clinic at Victory Medical',
  metaDescription: 'Walk-in urgent care in South Austin at 50–300% less than the average emergency room visit. Board-certified providers, on-site labs and X-ray referral, extended evening and weekend hours at 4303 Victory Drive.',

  eyebrow: 'South Austin · Walk-Ins Welcome',
  h1: 'Urgent Care Without the',
  h1Accent: 'Emergency Room Bill',
  lede: 'Board-certified care for the injuries and illnesses that cannot wait — at a fraction of ER cost.',
  intro: 'A sprained ankle, a fever that will not break, a cut that needs stitches. None of it belongs in an emergency department, and none of it can wait two weeks for an appointment. Victory Medical\'s urgent care is staffed by the same board-certified physicians, nurse practitioners, and physician assistants who run our family practice — with on-site labs, extended evening hours, and weekend availability.',
  stats: [
    { stat: '50–300%', label: 'Less than average ER visit cost' },
    { stat: '7 days', label: 'Open weekends and evenings' },
    { stat: 'Walk-in', label: 'No appointment required' },
    { stat: 'All ages', label: 'Pediatric through senior' },
  ],
  heroPrimary: { label: 'Call Before You Come', href: 'tel:5124623627' },
  heroSecondary: { label: 'Get Directions', href: '/locations/austin' },
  breadcrumbLabel: 'Urgent Care',

  overview: {
    label: 'When to Come In',
    heading: 'The gap between your doctor and the ER',
    paragraphs: [
      'Emergency departments are built for emergencies — and priced accordingly. When your problem is urgent but not life-threatening, an ER visit means hours in a waiting room and a bill several times what the same care costs in a clinic.',
      'Urgent care fills that gap. You are seen by a board-certified provider, in a clinic that can draw labs on site, treat the problem, and put the visit notes directly into your Victory Medical chart if you are already a patient here.',
    ],
    comparison: {
      themHeading: 'Emergency Room',
      usHeading: 'Victory Urgent Care',
      rows: [
        { label: 'Typical cost', them: 'Full ER facility fee', us: '50–300% less' },
        { label: 'Wait time', them: 'Hours, triaged by severity', us: 'Walk in and be seen' },
        { label: 'Who sees you', them: 'Whoever is on shift', us: 'Board-certified provider' },
        { label: 'Your records', them: 'Separate system', us: 'Straight into your chart' },
        { label: 'Follow-up', them: '"See your doctor"', us: 'Your doctor is down the hall' },
      ],
    },
  },

  benefits: {
    label: 'What We Treat',
    heading: 'Urgent care services',
    intro: 'If it needs attention today but is not life-threatening, start here.',
    items: [
      { icon: '⊕', title: 'Minor Injuries', description: 'Sprains and strains, burns, lacerations needing stitches, minor fractures, and the everyday injuries that need a professional look.' },
      { icon: '◎', title: 'Acute Illness', description: 'Fever, flu, strep throat, bronchitis, sinus and ear infections, UTIs, stomach illness, and rashes.' },
      { icon: '◇', title: 'Sports Injuries', description: 'Evaluation and treatment, with physical rehab and chiropractic care available in house for the recovery that follows.' },
      { icon: '⟳', title: 'Allergic Reactions', description: 'Acute allergy symptoms and reactions, with Victory\'s full allergy testing and immunotherapy program available for what comes next.' },
      { icon: '✦', title: 'On-Site Diagnostics', description: 'Lab work drawn during your visit rather than sent across town, so treatment decisions happen while you are still here.' },
      { icon: '◈', title: 'Extended Hours', description: 'Open evenings and weekends at our Austin location, for the problems that reliably happen outside business hours.' },
    ],
  },

  audience: {
    label: 'Know Where to Go',
    heading: 'Urgent care or emergency room?',
    intro: 'Some symptoms belong in an emergency department. Knowing which is which protects both your health and your wallet.',
    items: [
      { label: 'Come to urgent care for', description: 'Fever, sore throat, cough, ear pain, urinary symptoms, sprains, minor cuts, rashes, mild allergic reactions, sports injuries, and illness that will not resolve on its own.' },
      { label: 'Go to the ER for', description: 'Chest pain, difficulty breathing, stroke symptoms, severe bleeding, head injury with loss of consciousness, major trauma, or any symptom you believe is life-threatening. Call 911.' },
      { label: 'Established patients', description: 'If you already see a Victory Medical provider, an urgent care visit here stays inside your record — your primary provider sees exactly what was found and prescribed.' },
      { label: 'Not a patient yet', description: 'Walk-ins are welcome regardless. Many people meet Victory Medical during an urgent visit and establish primary care afterward.' },
    ],
  },

  faqs: {
    label: 'Frequently Asked',
    heading: 'Urgent Care Questions',
    items: [
      { q: 'Do I need an appointment?', a: 'No. Walk-ins are welcome at our Austin location, 4303 Victory Drive. Calling ahead at (512) 462-3627 lets us tell you the current wait and confirm the right provider is available for your concern.' },
      { q: 'How much does an urgent care visit cost?', a: 'Substantially less than an equivalent emergency room visit — the old rule of thumb is 50–300% less, largely because you are not paying an ER facility fee. Most insurance plans cover urgent care with a standard copay. Our team can verify your specific plan before you are seen.' },
      { q: 'What are your urgent care hours?', a: 'Our Austin location keeps extended hours, including evenings and weekends. Hours vary by day and can change around holidays, so the locations page carries current times and calling ahead is always safest.' },
      { q: 'Can you do X-rays?', a: 'Lab work is drawn on site. For imaging, we coordinate the referral and read results back with you — rather than sending you off to figure out the next step alone.' },
      { q: 'Do you treat children?', a: 'Yes. Our providers are trained across the full age range and see pediatric patients for acute illness and injury.' },
    ],
  },

  related: [
    { label: 'Family Practice', href: '/family-practice' },
    { label: 'Allergy Services', href: '/allergy-services' },
    { label: 'Physical Medicine', href: '/physical-medicine' },
    { label: 'On-Site Pharmacy', href: '/pharmacy' },
    { label: 'Austin Location', href: '/locations/austin' },
  ],

  cta: {
    label: 'Need Care Today',
    heading: 'Walk in, or call ahead',
    body: 'Our Austin clinic at 4303 Victory Drive takes walk-ins during open hours. Calling first means we can tell you the wait and have the right provider ready.',
    address: '4303 Victory Drive, Austin TX 78704',
    primary: { label: 'Call (512) 462-3627', href: 'tel:5124623627' },
    secondary: { label: 'Directions & Hours', href: '/locations/austin' },
    badge: { value: '50%+', label: 'less than an average ER visit' },
  },
}

export default content
