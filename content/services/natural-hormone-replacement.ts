import type { ServiceContent } from '@/components/ServicePageTemplate'

const content: ServiceContent = {
  path: '/natural-hormone-replacement',
  metaTitle: 'Natural Hormone Replacement Austin TX | Club Longevity',
  metaDescription: 'Bioidentical hormone replacement therapy in Austin and Westlake Hills. Custom-compounded hormones for menopause, low testosterone, and age-related decline — part of Victory Medical\'s Club Longevity program.',

  eyebrow: 'Austin & Westlake Hills · Club Longevity',
  h1: 'Hormones Are Not Drugs.',
  h1Accent: 'They Are Yours.',
  lede: 'Restoring what your body has always produced — measured, compounded, and monitored.',
  intro: 'Somewhere after 40, most people notice it: energy that does not return after a night\'s sleep, a mind that feels a half-step slower, a body composition that shifts despite unchanged habits. Much of that traces to declining hormone levels. Victory Medical\'s Club Longevity program combines custom-compounded natural hormone replacement with exercise, nutrition, peptides, and supplementation into one supervised regimen.',
  stats: [
    { stat: '40+', label: 'The age decline usually starts' },
    { stat: 'Bioidentical', label: 'Custom-compounded formulations' },
    { stat: 'Lab-guided', label: 'Dosing set by your bloodwork' },
    { stat: 'Men & women', label: 'Programs for both' },
  ],
  heroPrimary: { label: 'Book a Consultation', href: 'https://www.priviahealth.com/practice/victory-medical/', external: true },
  heroSecondary: { label: 'Call (512) 462-3627', href: 'tel:5124623627' },
  breadcrumbLabel: 'Natural Hormone Replacement',
  visual: { src: '/generated/core-peptides.jpg', alt: 'Clinical setting for hormone and longevity medicine consultation' },

  overview: {
    label: 'The Approach',
    heading: 'What longevity medicine actually means',
    paragraphs: [
      'Hormones are not foreign substances. They are compounds your body has produced since birth, and hormone replacement restores a naturally occurring process rather than introducing something new to it. That distinction shapes how the therapy is dosed and monitored.',
      'At Victory Medical, treatment begins with a complete physical examination and laboratory evaluation. Your physician then prescribes and monitors a personalized supplementation program intended to return your hormones to optimal levels — adjusting as your labs and symptoms respond, not on a fixed schedule.',
    ],
    checklist: {
      heading: 'What Club Longevity includes',
      items: [
        'Bioidentical hormone replacement therapy',
        'Menopause and perimenopause management',
        'Low testosterone evaluation and treatment',
        'Custom-compounded formulations from our own pharmacy',
        'CJC-1295 and Ipamorelin growth hormone peptides',
        'Semax for cognitive support',
        'Exercise, nutrition, and supplementation guidance',
        'Ongoing lab monitoring and dose adjustment',
      ],
      note: 'Hormone therapy is prescribed following examination and lab work. Candidacy and dosing are individual.',
    },
  },

  benefits: {
    label: 'What Patients Report',
    heading: 'Where hormone therapy tends to show up',
    intro: 'Results vary by individual and by starting hormone levels. These are the areas patients most often raise.',
    items: [
      { icon: '⊕', title: 'Energy and Fatigue', description: 'The persistent tiredness that sleep does not resolve is one of the most commonly reported changes when levels are restored.' },
      { icon: '◎', title: 'Sleep Quality', description: 'Hormonal decline and disrupted sleep reinforce each other. Addressing the first frequently improves the second.' },
      { icon: '◇', title: 'Mental Clarity', description: 'Focus and mental sharpness are a common reason patients seek evaluation — the sense of operating a step behind where you used to.' },
      { icon: '⟳', title: 'Libido and Sexual Health', description: 'Declining testosterone and estrogen affect sexual function in both men and women, and both are treatable.' },
      { icon: '✦', title: 'Body Composition', description: 'Hormones influence how the body builds muscle and stores fat, which is why hormone therapy often runs alongside a weight loss program.' },
      { icon: '◈', title: 'Skin and Appearance', description: 'Skin quality is affected by hormonal status, and improvement is among the changes patients notice over the course of treatment.' },
    ],
  },

  process: {
    label: 'How It Works',
    heading: 'From bloodwork to an optimized program',
    steps: [
      { step: '01', title: 'Consultation & History', description: 'A full discussion of symptoms, medical history, medications, and goals. Fatigue, sleep, mood, libido, and body composition changes all inform what gets tested.' },
      { step: '02', title: 'Physical Exam & Labs', description: 'A complete physical examination and laboratory evaluation establish your actual hormone levels — the baseline everything else is measured against.' },
      { step: '03', title: 'Your Prescribed Program', description: 'Your physician builds a personalized regimen: which hormones, at what dose, in what delivery form, alongside exercise, diet, and supplementation recommendations.' },
      { step: '04', title: 'Compounded Formulation', description: 'Prescriptions are compounded to your specification, which is what allows dosing to be matched to your labs rather than to a manufacturer\'s standard tablet.' },
      { step: '05', title: 'Monitoring & Optimization', description: 'Follow-up labs and symptom review guide adjustments. Hormone therapy is a managed, ongoing relationship rather than a one-time prescription.' },
    ],
  },

  faqs: {
    label: 'Frequently Asked',
    heading: 'Hormone Therapy Questions',
    items: [
      { q: 'What is the difference between bioidentical and synthetic hormones?', a: 'Bioidentical hormones are structurally identical to the hormones your body produces. Because they are compounded rather than mass-manufactured, dosing can be matched to your individual lab results and adjusted over time.' },
      { q: 'Is hormone replacement safe?', a: 'Hormone therapy carries real risks and real benefits, and both depend on your age, health history, family history, and the hormones involved. That is precisely why treatment here requires a physical examination and lab evaluation first, and why dosing is monitored rather than set and forgotten. Your physician will discuss your specific risk profile before prescribing.' },
      { q: 'How long before I notice a difference?', a: 'It varies by hormone, by delivery method, and by how far from optimal your levels are. Some patients report changes in energy and sleep within weeks; body composition and other changes develop over months. Follow-up labs give an objective measure alongside how you feel.' },
      { q: 'Do you treat men as well as women?', a: 'Yes. Club Longevity serves both — menopause and perimenopause management for women, low testosterone treatment for men, and age-related decline in both.' },
      { q: 'Is this covered by insurance?', a: 'The office visit and lab work are frequently covered. Compounded hormone formulations often are not, since compounded medications sit outside most formularies. Our team will review the specifics of your plan before you begin.' },
    ],
  },

  related: [
    { label: 'Peptide Therapy', href: '/peptides' },
    { label: 'Medical Weight Loss', href: '/weight-loss' },
    { label: 'On-Site Pharmacy', href: '/pharmacy' },
    { label: 'Preventative Care', href: '/preventative-care' },
    { label: 'MDVIP Concierge', href: '/mdvip' },
  ],

  cta: {
    label: 'Start With Labs',
    heading: 'Find out what your levels actually are',
    body: 'Every hormone program at Victory Medical starts the same way — an exam and a full laboratory evaluation, so treatment is built on numbers rather than assumptions.',
    address: '4303 Victory Drive, Austin TX 78704 · 3811 Bee Caves Rd, Westlake Hills TX 78746',
    primary: { label: 'Book a Consultation', href: 'https://www.priviahealth.com/practice/victory-medical/', external: true },
    secondary: { label: 'Explore Peptide Therapy', href: '/peptides' },
  },
}

export default content
