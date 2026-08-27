import type { ServiceContent } from '@/components/ServicePageTemplate'

const content: ServiceContent = {
  path: '/allergy-services',
  metaTitle: 'Allergy Testing & Immunotherapy Austin TX | Victory Medical',
  metaDescription: 'Comprehensive allergy testing and rapid desensitization immunotherapy in Austin. Skin prick, intradermal, blood, and food elimination testing, plus asthma control with spirometry — at 4303 Victory Drive.',

  eyebrow: 'Austin · Allergy & Asthma',
  h1: 'Find the Cause,',
  h1Accent: 'Not Just the Symptom',
  lede: 'Antihistamines mask allergies. Testing identifies them, and immunotherapy retrains the response.',
  intro: 'Central Texas is one of the hardest places in the country to have allergies — cedar, oak, ragweed, and mold keep the season running most of the year. Victory Medical tests for regional allergens across skin, blood, and food, then treats the underlying sensitivity through immunotherapy, including a rapid desensitization protocol developed from Harvard research that is unique to our practice.',
  stats: [
    { stat: '75+', label: 'Regional allergens tested' },
    { stat: '4', label: 'Testing methods available' },
    { stat: 'Rapid', label: 'Desensitization protocol' },
    { stat: 'Option 6', label: 'Direct allergy line' },
  ],
  heroPrimary: { label: 'Book Allergy Testing', href: 'https://www.priviahealth.com/practice/victory-medical/', external: true },
  heroSecondary: { label: 'Call Option 6', href: 'tel:5124623627' },
  breadcrumbLabel: 'Allergy Services',

  overview: {
    label: 'The Approach',
    heading: 'Testing first, then treatment that lasts',
    paragraphs: [
      'For many people allergies are not an annoyance — they are draining, and the medications meant to help bring their own fog and side effects. Over-the-counter antihistamines suppress a reaction that keeps happening; they do not change why it happens.',
      'Allergy testing identifies exactly which substances trigger your symptoms. From there, immunotherapy gradually introduces increasing amounts of that allergen so your immune system stops treating it as a threat — building tolerance rather than masking a reaction.',
    ],
    checklist: {
      heading: 'Testing available at Victory',
      items: [
        'Skin prick testing across 75+ regional allergens',
        'Intradermal testing for finer sensitivity detection',
        'Blood testing for allergen-specific antibodies',
        'Food elimination testing with a guided food diary',
        'Spirometry and lung function testing',
        'Asthma evaluation and personalized control plans',
      ],
      note: 'Allergy services are offered at our Austin location, 4303 Victory Drive. Call (512) 462-DOCS and select option 6.',
    },
  },

  benefits: {
    label: 'How We Test',
    heading: 'Four ways to identify a trigger',
    intro: 'Different allergens reveal themselves through different methods. Your provider selects based on your symptoms and history.',
    items: [
      { icon: '⊕', title: 'Skin Prick Testing', description: 'An extract of each allergen is applied to the skin and lightly pricked. Reactions appear within minutes, screening a wide panel of regional allergens in a single visit.' },
      { icon: '◎', title: 'Intradermal Testing', description: 'A small amount of allergen is injected into the outer layer of skin and the reaction monitored — useful when skin prick results are inconclusive.' },
      { icon: '◇', title: 'Blood Testing', description: 'Measures allergen-specific antibodies in your blood. An option when skin testing is unsuitable, such as with certain medications or skin conditions.' },
      { icon: '⟳', title: 'Food Elimination', description: 'A structured food diary and elimination plan built by your provider, documenting reactions to isolate the foods driving symptoms.' },
      { icon: '✦', title: 'Spirometry', description: 'Measures how much and how quickly you move air, giving a clear picture of lung function and how well asthma is controlled.' },
      { icon: '◈', title: 'Asthma Evaluation', description: 'History, physical exam, and lung function testing together, producing a personalized control plan rather than a rescue inhaler alone.' },
    ],
  },

  process: {
    label: 'Rapid Desensitization',
    heading: 'The Harvard protocol, unique to Victory',
    intro: 'Traditional immunotherapy can take years to reach a maintenance dose. Rapid desensitization compresses that build-up phase considerably.',
    steps: [
      { step: '01', title: 'Comprehensive Testing', description: 'Your specific allergens are identified through skin, intradermal, blood, or food testing — immunotherapy is only as good as the accuracy of what precedes it.' },
      { step: '02', title: 'Custom Serum', description: 'A treatment serum is formulated to your results, containing the specific allergens driving your symptoms at concentrations matched to your sensitivity.' },
      { step: '03', title: 'Accelerated Build-Up', description: 'Gradually increasing doses are administered under supervision. This is where the rapid protocol departs from conventional weekly shots stretched across years.' },
      { step: '04', title: 'Immune Tolerance', description: 'As exposure increases, the immune system stops overreacting to the allergen — the goal being reduced symptoms and reduced dependence on daily medication.' },
      { step: '05', title: 'Maintenance & Monitoring', description: 'Ongoing dosing at a maintenance level, with your provider tracking symptom response and adjusting as your tolerance develops.' },
    ],
  },

  faqs: {
    label: 'Frequently Asked',
    heading: 'Allergy Questions',
    items: [
      { q: 'How long does allergy testing take?', a: 'Skin prick testing produces readable results within about 15–20 minutes of application, so most patients complete testing and review results in a single visit. Blood testing requires lab processing, and food elimination testing runs over a longer period by design.' },
      { q: 'What is rapid desensitization?', a: 'It is a form of immunotherapy that administers gradually increasing amounts of your specific allergens over a compressed timeline, prompting the immune system to build tolerance. Victory Medical\'s protocol is derived from Harvard research and is not offered at most Austin practices. Your provider will explain what results are realistic for your particular sensitivities.' },
      { q: 'Is allergy testing covered by insurance?', a: 'Most insurance plans cover allergy testing and immunotherapy, though coverage details and prior-authorization requirements vary. Our team verifies your benefits before testing so there are no surprises.' },
      { q: 'Which allergens do you test for?', a: 'Our panel covers 75+ allergens weighted toward Central Texas — cedar, oak, ash, elm, grasses, ragweed, molds, dust mites, animal dander, and common food allergens. Testing regionally matters: a national panel misses what actually grows here.' },
      { q: 'Can you treat my asthma too?', a: 'Yes. Allergy and asthma are frequently the same problem expressed differently. We evaluate lung function with spirometry, diagnose and manage asthma, and build a control plan alongside allergy treatment.' },
    ],
  },

  related: [
    { label: 'Family Practice', href: '/family-practice' },
    { label: 'Urgent Care', href: '/urgent-care' },
    { label: 'On-Site Pharmacy', href: '/pharmacy' },
    { label: 'Austin Location', href: '/locations/austin' },
  ],

  cta: {
    label: 'Start Testing',
    heading: 'Stop guessing what you are allergic to',
    body: 'Allergy services run out of our Austin location on Victory Drive. Call and select option 6 to reach the allergy team directly, or book online.',
    address: '4303 Victory Drive, Austin TX 78704 · (512) 462-DOCS, option 6',
    primary: { label: 'Book an Appointment', href: 'https://www.priviahealth.com/practice/victory-medical/', external: true },
    secondary: { label: 'Call (512) 462-3627', href: 'tel:5124623627' },
    badge: { value: '75+', label: 'regional allergens tested' },
  },
}

export default content
