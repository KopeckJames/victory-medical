import type { ServiceContent } from '@/components/ServicePageTemplate'

const content: ServiceContent = {
  path: '/weight-loss',
  metaTitle: 'Medical Weight Loss Austin TX | Physician-Supervised Programs',
  metaDescription: 'Physician-supervised medical weight loss in Austin — custom-compounded appetite suppressants, B-12 and Lipo-B injections, peptide protocols, nutrition consultation, and counseling built around your metabolism.',

  eyebrow: 'Austin & Westlake Hills · Medical Weight Loss',
  h1: 'Weight Loss Built Around',
  h1Accent: 'Your Biology',
  lede: 'Not a diet plan. A physician-supervised program built from your labs, your history, and your metabolism.',
  intro: 'Whether the battle has been lifelong or the last stubborn fifteen pounds will not move, the difference between a program that works and one that does not is usually specificity. Victory Medical builds each weight loss program from an initial consultation covering your current health, medical history, eating patterns, and lab work — then combines prescription therapy, compounded formulations, injections, nutrition guidance, and coaching around what your body actually needs.',
  stats: [
    { stat: 'Custom', label: 'Compounded to your profile' },
    { stat: 'On-site', label: 'Pharmacy compounds in house' },
    { stat: 'MD-led', label: 'Physician-supervised throughout' },
    { stat: 'Body + mind', label: 'Nutrition and counseling included' },
  ],
  heroPrimary: { label: 'Book a Consultation', href: 'https://www.priviahealth.com/practice/victory-medical/', external: true },
  heroSecondary: { label: 'Call (512) 462-3627', href: 'tel:5124623627' },
  breadcrumbLabel: 'Medical Weight Loss',
  visual: { src: '/generated/coolsculpt-wl.jpg', alt: 'Provider reviewing a personalized weight loss plan with a patient' },

  overview: {
    label: 'The Program',
    heading: 'Why medical weight loss is different',
    paragraphs: [
      'Commercial diet programs sell the same plan to everyone. Medical weight loss starts from the opposite premise: that appetite, metabolism, hormones, sleep, medication side effects, and thyroid function differ from person to person, and that the plan should follow the findings.',
      'Your initial consultation covers current health, past medical history, eating habits, and the factors that shape how your body handles food and stores fat. What follows is prescribed and supervised — compounded appetite suppressants chosen ingredient by ingredient, metabolic peptides, injections, nutrition planning, and counseling for the psychological side that maintenance depends on.',
    ],
    comparison: {
      themHeading: 'Commercial Programs',
      usHeading: 'Victory Medical',
      rows: [
        { label: 'Starting point', them: 'One plan for everyone', us: 'Labs, history, and exam' },
        { label: 'Supervision', them: 'A coach or an app', us: 'Physician-supervised' },
        { label: 'Medication', them: 'Off-the-shelf supplements', us: 'Compounded to your profile' },
        { label: 'Adjustments', them: 'Fixed program', us: 'Adjusted as you progress' },
        { label: 'Maintenance', them: 'You are on your own', us: 'Counseling and follow-up' },
      ],
    },
  },

  benefits: {
    label: 'What Is Available',
    heading: 'Tools in the program',
    intro: 'Which of these you use — and in what combination — is decided with your provider, not chosen from a menu.',
    items: [
      { icon: '⊕', title: 'Compounded Appetite Suppressants', description: 'Formulated at our own pharmacy with active ingredients selected for effectiveness and safety profile, including chromium, L-carnitine, L-theanine, and vitamin B-6.' },
      { icon: '◎', title: 'B-12 Injections', description: 'Low B-12 is common with excess weight and leaves the body short on the raw material for energy production. Injections restore levels directly.' },
      { icon: '◇', title: 'Lipo-B Injections', description: 'Lipotropic injections support the liver in processing and clearing fat, which matters because a fat-burdened liver does its job less efficiently.' },
      { icon: '⟳', title: 'Metabolic Peptides', description: 'Tesamorelin for visceral fat and AOD-9604 for non-hormonal fat metabolism, prescribed where clinically appropriate as part of a supervised protocol.' },
      { icon: '✦', title: 'Nutrition Consultation', description: 'A working plan for how you actually eat, built with specialists rather than handed over as a printed sheet of forbidden foods.' },
      { icon: '◈', title: 'Weight Loss Counseling', description: 'The psychological side of eating and maintenance — the part most programs skip, and the part that most often determines whether results hold.' },
    ],
  },

  process: {
    label: 'How It Works',
    heading: 'From consultation to maintenance',
    steps: [
      { step: '01', title: 'Initial Consultation', description: 'A thorough review of your current health, medical history, medications, eating habits, previous attempts, and goals — plus lab work to identify metabolic or hormonal factors.' },
      { step: '02', title: 'Your Program Is Built', description: 'Your provider designs the combination that fits your findings: which medications, which injections, what nutrition approach, and what pace is realistic and safe.' },
      { step: '03', title: 'Compounding & Start', description: 'Prescriptions compounded at our own pharmacy to your formulation, with clear instruction on how and when to take everything.' },
      { step: '04', title: 'Monitoring & Adjustment', description: 'Regular follow-ups to track progress, watch for side effects, and adjust dosing — because the plan that works at the start is rarely the plan that works at month four.' },
      { step: '05', title: 'Maintenance', description: 'Counseling and nutritional support shift toward holding your results, which is a different problem from losing the weight in the first place.' },
    ],
  },

  faqs: {
    label: 'Frequently Asked',
    heading: 'Weight Loss Questions',
    items: [
      { q: 'How fast will I lose weight?', a: 'That depends on your starting point, metabolism, and which components of the program you are using — and a responsible answer requires seeing your labs first. Physician supervision exists partly to keep the pace safe: rapid loss without monitoring tends to cost muscle mass and rebound.' },
      { q: 'What is in the compounded appetite suppressants?', a: 'Formulations are individualized, but common active ingredients include chromium, which supports carbohydrate and fat metabolism; L-carnitine, which transports fat into cells to be burned; L-theanine, an amino acid from green tea; and vitamin B-6, needed to metabolize the proteins used to synthesize carnitine. Your provider selects the combination and concentration for your profile.' },
      { q: 'Do you prescribe GLP-1 medications?', a: 'Prescription weight loss medications, including GLP-1 therapies, are prescribed where clinically appropriate following your consultation and lab work. Availability of specific medications changes with supply and coverage, so this is a conversation for your visit.' },
      { q: 'Is medical weight loss covered by insurance?', a: 'Coverage varies widely by plan. Some elements — the office visit, lab work, and certain prescriptions — are frequently covered, while compounded medications and injections often are not. Our team will verify your specific benefits before you commit.' },
      { q: 'What happens after I reach my goal?', a: 'The program shifts to maintenance: nutrition guidance and counseling focused on holding results, with continued provider follow-up. Maintenance is treated as part of the program rather than the point at which care stops.' },
    ],
  },

  related: [
    { label: 'Natural Hormone Replacement', href: '/natural-hormone-replacement' },
    { label: 'Peptide Therapy', href: '/peptides' },
    { label: 'CoolSculpting®', href: '/coolsculpting' },
    { label: 'On-Site Pharmacy', href: '/pharmacy' },
    { label: 'Family Practice', href: '/family-practice' },
  ],

  cta: {
    label: 'Get Started',
    heading: 'Start with a consultation, not a diet',
    body: 'The first appointment is a full picture of your health, your history, and what your body is actually doing — everything else follows from that.',
    address: '4303 Victory Drive, Austin TX 78704 · 3811 Bee Caves Rd, Westlake Hills TX 78746',
    primary: { label: 'Book a Consultation', href: 'https://www.priviahealth.com/practice/victory-medical/', external: true },
    secondary: { label: 'Call (512) 462-3627', href: 'tel:5124623627' },
  },
}

export default content
