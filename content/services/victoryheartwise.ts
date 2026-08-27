import type { ServiceContent } from '@/components/ServicePageTemplate'

const content: ServiceContent = {
  path: '/victoryheartwise',
  metaTitle: 'Heartwise Physical | Executive Health Screening Austin TX',
  metaDescription: 'The Heartwise Physical at Victory Medical — a comprehensive, non-invasive executive health screening built from 26 tests in 90 minutes, analyzing cardiovascular risk and returning itemized results. Covered by most insurance.',

  eyebrow: 'Victory Medical · Executive Physical',
  h1: 'Twenty-Six Tests.',
  h1Accent: 'Ninety Minutes.',
  lede: 'A non-invasive screening built to find what a routine annual is not designed to catch.',
  intro: 'The Heartwise Physical is a specialized health screening that analyzes your risk of heart disease and related conditions in far more depth than a standard annual exam. A specialized clinician performs 26 separate tests in a single 90-minute appointment; the results are then evaluated against established benchmarks and returned to you as an itemized report with your physician\'s guidance attached.',
  stats: [
    { stat: '26', label: 'Tests in a single exam' },
    { stat: '90 min', label: 'Total appointment time' },
    { stat: 'Non-invasive', label: 'No surgical procedures' },
    { stat: 'Most plans', label: 'Covered as preventative care' },
  ],
  heroPrimary: { label: 'Schedule Heartwise', href: 'tel:5124623627' },
  heroSecondary: { label: 'Book Online', href: 'https://www.priviahealth.com/practice/victory-medical/', external: true },
  breadcrumbLabel: 'Heartwise Physical',

  overview: {
    label: 'The Exam',
    heading: 'Preventative care, taken seriously',
    paragraphs: [
      'Heart disease remains the leading cause of death in the United States, and it develops for years without producing symptoms that would send anyone to a doctor. A standard annual physical is not built to detect it early — it is built to be efficient.',
      'Heartwise takes the opposite approach. It is a state-of-the-art, non-invasive exam that draws on 26 tests to detect issues that routine screening misses, then runs the complete data set through a proprietary analysis comparing your results against established health benchmarks.',
    ],
    comparison: {
      themHeading: 'Routine Annual',
      usHeading: 'Heartwise Physical',
      rows: [
        { label: 'Duration', them: '15–30 minutes', us: '90 minutes' },
        { label: 'Scope', them: 'Standard panel', us: '26 separate tests' },
        { label: 'Analysis', them: 'Values flagged high or low', us: 'Benchmarked full data set' },
        { label: 'Results', them: 'A portal message', us: 'Itemized report with guidance' },
        { label: 'Focus', them: 'General wellness', us: 'Cardiovascular risk detection' },
      ],
    },
  },

  benefits: {
    label: 'What Makes It Different',
    heading: 'Inside the Heartwise Physical',
    items: [
      { icon: '⊕', title: 'Head-to-Toe Examination', description: 'Considerably more than a routine physical — a comprehensive, non-invasive assessment drawing on 26 tests to detect issues early.' },
      { icon: '◎', title: 'Ninety Minutes, One Visit', description: 'A specialized clinician performs every test needed for a full picture inside a single appointment rather than across weeks of referrals.' },
      { icon: '◇', title: 'Benchmarked Analysis', description: 'Your complete data set is evaluated by a proprietary program that compares your health status against established standards.' },
      { icon: '⟳', title: 'Itemized Results', description: 'Your physician reviews the findings with you point by point and builds a treatment plan around your specific results.' },
      { icon: '✦', title: 'Cardiovascular Focus', description: 'Designed specifically to assess heart disease risk, the condition most likely to be advancing silently in an otherwise healthy adult.' },
      { icon: '◈', title: 'Usually Covered', description: 'As a preventative measure, Heartwise is covered by most insurance plans. Call ahead and we will confirm your coverage first.' },
    ],
  },

  audience: {
    label: 'Is It Right For You?',
    heading: 'Who Heartwise is built for',
    items: [
      { label: 'Adults over 40', description: 'The age at which cardiovascular risk factors typically begin accumulating measurably, and the point where early detection changes outcomes most.' },
      { label: 'Family history of heart disease', description: 'Inherited risk does not announce itself. A deeper baseline is worth more when your genetics are already working against you.' },
      { label: 'Executives and high-stress roles', description: 'The demographic most likely to postpone screening and most exposed to the stress, sleep, and lifestyle factors that compound cardiac risk.' },
      { label: 'Anyone wanting a real baseline', description: 'A comprehensive data set now makes every future test more meaningful, because change over time is more informative than a single reading.' },
    ],
  },

  faqs: {
    label: 'Frequently Asked',
    heading: 'Heartwise Questions',
    items: [
      { q: 'What is the Heartwise Physical?', a: 'A specialized, non-invasive health screening built from 26 tests performed in a single 90-minute appointment, designed to assess your risk of heart disease and detect issues a routine physical is not structured to find. Results are analyzed against established benchmarks and reviewed with you item by item.' },
      { q: 'Is it covered by insurance?', a: 'As a preventative measure, Heartwise is covered by most insurance plans. Coverage does vary, so call (512) 462-3627 before scheduling and our team will verify your specific plan.' },
      { q: 'How long does it take?', a: 'About 90 minutes from start to finish. Every test needed for the full assessment is performed in that one appointment.' },
      { q: 'Is anything invasive?', a: 'The exam is non-invasive. Blood work is drawn as part of the panel, but there are no surgical or invasive procedures involved.' },
      { q: 'How do I get my results?', a: 'Your data is evaluated by a proprietary analysis program, and your physician then walks you through the itemized findings and builds a treatment plan around what they show.' },
    ],
  },

  related: [
    { label: 'Preventative Care', href: '/preventative-care' },
    { label: 'Family Practice', href: '/family-practice' },
    { label: 'MDVIP Concierge', href: '/mdvip' },
    { label: 'Natural Hormone Replacement', href: '/natural-hormone-replacement' },
  ],

  cta: {
    label: 'Book Heartwise',
    heading: 'Get a real baseline on your heart',
    body: 'Call to schedule your Heartwise Physical and we will verify your insurance coverage at the same time.',
    address: '4303 Victory Drive, Austin TX 78704 · 3811 Bee Caves Rd, Westlake Hills TX 78746',
    primary: { label: 'Call (512) 462-3627', href: 'tel:5124623627' },
    secondary: { label: 'Book Online', href: 'https://www.priviahealth.com/practice/victory-medical/', external: true },
    badge: { value: '26', label: 'tests in one 90-minute exam' },
  },
}

export default content
