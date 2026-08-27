import type { ServiceContent } from '@/components/ServicePageTemplate'

const content: ServiceContent = {
  path: '/pharmacy',
  metaTitle: 'Compounding Pharmacy Austin TX | VMC Pharmacy at Victory Medical',
  metaDescription: 'VMC Pharmacy is a full-service compounding pharmacy at 4303 Victory Drive in Austin — custom dosages, allergen-free formulations, dosage forms unavailable commercially, plus traditional prescriptions, vitamins, and supplements.',

  eyebrow: 'Austin · Full-Service Compounding Pharmacy',
  h1: 'Medication Made for',
  h1Accent: 'One Patient',
  lede: 'Commercial manufacturing produces a limited number of strengths. Compounding produces yours.',
  intro: 'VMC Pharmacy sits inside our Austin clinic at 4303 Victory Drive, filling traditional prescriptions alongside custom-compounded medications you cannot get at a retail chain. That means dosages formulated to your body rather than to a manufacturing run, formulations free of dyes and fillers you react to, and delivery forms that do not exist commercially.',
  stats: [
    { stat: 'Option 1', label: 'Direct pharmacy line' },
    { stat: 'In-house', label: 'Inside the Austin clinic' },
    { stat: 'Custom', label: 'Dosages compounded to order' },
    { stat: '7 days', label: 'Open weekends' },
  ],
  heroPrimary: { label: 'Call (512) 462-3627', href: 'tel:5124623627' },
  heroSecondary: { label: 'Prescription Portal', href: 'https://vmc.pharmetika.com', external: true },
  breadcrumbLabel: 'On-Site Pharmacy',

  overview: {
    label: 'Compounding',
    heading: 'What compounding actually does for you',
    paragraphs: [
      'Commercially manufactured medications come in a limited set of strengths and dosage forms, chosen because they suit the largest number of patients — not because they suit you. Demand for professional compounding has grown as both providers and patients have run into the limits of that model.',
      'A compounding pharmacy formulates medication to a specific prescription: the exact strength your provider wants, without an ingredient you react to, in a form you can actually take, sometimes combining several compatible medications into a single dose.',
    ],
    checklist: {
      heading: 'What VMC Pharmacy provides',
      items: [
        'Custom formulations at the exact dose you need',
        'Dosage forms that are not commercially available',
        'Medications free of dyes, sugar, lactose, and gluten',
        'Multiple compatible medications combined into one dose',
        'Hormone replacement compounds',
        'Weight loss compounds and injections',
        'Traditional prescriptions',
        'Vitamins, nutritional supplements, and OTC remedies',
        'Online prescription portal at vmc.pharmetika.com',
      ],
      note: 'First-time users — providers and patients — can request an account setup invitation at (512) 279-0985 or info@vmcpharmacy.com.',
    },
  },

  benefits: {
    label: 'Why It Matters',
    heading: 'Where compounding changes the outcome',
    items: [
      { icon: '⊕', title: 'Dose Precision', description: 'Hormone therapy in particular depends on matching dose to lab values, which off-the-shelf tablet strengths cannot always do.' },
      { icon: '◎', title: 'Allergen-Free Formulations', description: 'Dyes, lactose, gluten, and preservatives cause real problems for some patients. Compounded medication leaves them out.' },
      { icon: '◇', title: 'Alternative Delivery Forms', description: 'A medication that only exists as a large tablet becomes a cream, a liquid, or a lozenge when someone cannot swallow pills.' },
      { icon: '⟳', title: 'Combination Dosing', description: 'Several compatible medications combined into a single dose, which does more for adherence than any reminder app.' },
      { icon: '✦', title: 'Same-Building Convenience', description: 'Your prescription is filled where it was written, so questions between provider and pharmacist happen in person.' },
      { icon: '◈', title: 'Beyond Prescriptions', description: 'A curated selection of vitamins, nutritional supplements, and over-the-counter remedies chosen by the clinical team.' },
    ],
  },

  faqs: {
    label: 'Frequently Asked',
    heading: 'Pharmacy Questions',
    items: [
      { q: 'Do I have to be a Victory Medical patient to use the pharmacy?', a: 'No. VMC Pharmacy fills prescriptions from outside providers as well. Prescribers new to the pharmacy can request an account setup invitation at (512) 279-0985 or info@vmcpharmacy.com.' },
      { q: 'How do I refill a prescription?', a: 'Through the online portal at vmc.pharmetika.com, or by calling (512) 462-DOCS and selecting option 1 for the pharmacy.' },
      { q: 'Does insurance cover compounded medications?', a: 'Often not. Compounded formulations sit outside most insurance formularies because they are made to order rather than manufactured commercially. Traditional prescriptions filled here are billed to insurance normally. The pharmacy team will tell you the cost before filling anything.' },
      { q: 'What are the pharmacy hours?', a: 'The pharmacy operates inside our Austin clinic at 4303 Victory Drive and follows clinic hours, including weekends. Times can shift around holidays, so calling ahead is safest.' },
      { q: 'Can you compound medication my doctor prescribes elsewhere?', a: 'Yes, with a valid prescription specifying the formulation. Your prescriber can contact the pharmacy directly to set up an account and discuss the compound.' },
    ],
  },

  related: [
    { label: 'Natural Hormone Replacement', href: '/natural-hormone-replacement' },
    { label: 'Medical Weight Loss', href: '/weight-loss' },
    { label: 'Peptide Therapy', href: '/peptides' },
    { label: 'Family Practice', href: '/family-practice' },
    { label: 'Austin Location', href: '/locations/austin' },
  ],

  cta: {
    label: 'Contact the Pharmacy',
    heading: 'Reach VMC Pharmacy directly',
    body: 'Call the main line and select option 1, or set up portal access for refills and prescription tracking.',
    address: '4303 Victory Drive, Austin TX 78704 · (512) 462-DOCS, option 1',
    primary: { label: 'Call (512) 462-3627', href: 'tel:5124623627' },
    secondary: { label: 'Open the Portal', href: 'https://vmc.pharmetika.com', external: true },
  },
}

export default content
