import type { ServiceContent } from '@/components/ServicePageTemplate'

const content: ServiceContent = {
  path: '/physical-therapy',
  metaTitle: 'Physical Therapy Austin TX | Joint & Muscle Pain Rehabilitation',
  metaDescription: 'Physical therapy and rehabilitation at Victory Medical in Austin — pain management, musculoskeletal injury, carpal tunnel, post-surgical and post-injury strengthening, kinesiology education, and workplace ergonomics.',

  eyebrow: 'Austin & Westlake Hills · Physical Therapy',
  h1: 'Rebuild the Function,',
  h1Accent: 'Not Just the Comfort',
  lede: 'Patient education, therapeutic exercise, and prevention — the parts that make recovery hold.',
  intro: 'Victory Medical provides physical therapy and rehabilitation for pain management, neurological conditions, and musculoskeletal injuries. The approach is comprehensive by design: hands-on treatment gets you out of pain, while education, therapeutic exercise, and prevention strategies address why the injury happened and what keeps it from happening again.',
  stats: [
    { stat: 'Non-invasive', label: 'Conservative treatment first' },
    { stat: 'Post-surgical', label: 'And post-injury programs' },
    { stat: 'Education', label: 'Kinesiology and ergonomics' },
    { stat: 'Coordinated', label: 'With chiropractic and primary care' },
  ],
  heroPrimary: { label: 'Book an Evaluation', href: 'https://www.priviahealth.com/practice/victory-medical/', external: true },
  heroSecondary: { label: 'Call (512) 462-3627', href: 'tel:5124623627' },
  breadcrumbLabel: 'Physical Therapy',

  overview: {
    label: 'The Approach',
    heading: 'Therapy that outlasts the appointment',
    paragraphs: [
      'Physical therapy that only happens in the clinic tends to fade once visits end. Ours is built around three components working together — treatment for the current problem, education so you understand how your body is meant to move, and prevention strategies aimed at the habits and environments that produced the injury.',
      'That is why kinesiology and ergonomics sit alongside therapeutic exercise here. The stronger your muscles, the more support your body has to move through life without injury; the better you understand your own mechanics, the more of that support you maintain on your own.',
    ],
    checklist: {
      heading: 'Areas of treatment',
      items: [
        'Pain management and musculoskeletal injury',
        'Carpal tunnel syndrome and repetitive strain',
        'Post-surgical rehabilitation',
        'Post-injury strengthening',
        'Age-related strength and mobility loss',
        'Neurological rehabilitation',
        'Kinesiology education and movement retraining',
        'Workplace ergonomic assessment',
      ],
      note: 'Workers compensation cases are supported, including physical rehab, FCE, and MMI documentation.',
    },
  },

  benefits: {
    label: 'Specialties',
    heading: 'Where physical therapy helps most',
    items: [
      { icon: '⊕', title: 'Carpal Tunnel', description: 'Tingling or numbness from years of typing or repetitive hand motion — treated non-invasively with bracing, stretch therapy, injections, and acupuncture.' },
      { icon: '◎', title: 'Muscle Strengthening', description: 'Structured strengthening after surgery, after injury, or against age-related decline, so the body has the support to move without re-injury.' },
      { icon: '◇', title: 'Kinesiology', description: 'Education in how your body is designed to move, which makes you aware of the everyday mechanics that were quietly causing damage.' },
      { icon: '⟳', title: 'Ergonomics', description: 'Sedentary work injures people slowly. Workstation assessment and correction addresses the setup rather than repeatedly treating its effects.' },
      { icon: '✦', title: 'Post-Surgical Rehab', description: 'Programs matched to the procedure and its timeline, rebuilding range of motion and strength in the right order.' },
      { icon: '◈', title: 'Sports Rehabilitation', description: 'Return-to-activity programs that restore performance rather than stopping at the absence of pain.' },
    ],
  },

  process: {
    label: 'How It Works',
    heading: 'A course of physical therapy',
    steps: [
      { step: '01', title: 'Evaluation', description: 'Assessment of strength, range of motion, and mechanics, plus the history of how the injury occurred and what it currently prevents you from doing.' },
      { step: '02', title: 'Treatment Plan', description: 'A plan with defined goals and a realistic timeline, coordinated with your physician and with chiropractic care where both are indicated.' },
      { step: '03', title: 'Hands-On Therapy', description: 'Manual therapy and modalities to reduce pain and restore mobility enough that productive exercise becomes possible.' },
      { step: '04', title: 'Therapeutic Exercise', description: 'Progressive strengthening and mobility work — the phase that produces durable change rather than temporary relief.' },
      { step: '05', title: 'Education & Prevention', description: 'Kinesiology, ergonomic correction, and a home program, so what you gained in the clinic survives without it.' },
    ],
  },

  faqs: {
    label: 'Frequently Asked',
    heading: 'Physical Therapy Questions',
    items: [
      { q: 'Do I need a referral for physical therapy?', a: 'Requirements depend on your insurance plan rather than on us. Some plans allow direct access; others require a physician referral. Since Victory Medical has physicians in the same practice, obtaining one when needed is straightforward.' },
      { q: 'How is physical therapy different from chiropractic care?', a: 'Chiropractic focuses on spinal alignment and joint manipulation; physical therapy focuses on restoring strength, mobility, and function through therapeutic exercise and manual therapy. Many patients benefit from both, which is why they sit in the same department here.' },
      { q: 'Can you treat carpal tunnel without surgery?', a: 'Non-invasive treatment is the first approach: wrist bracing or splinting, particularly during sleep; steroid injections or cortisone to reduce swelling and inflammation; stretch therapy for the hand and wrist; and acupuncture. Whether surgery becomes necessary depends on severity and response.' },
      { q: 'How long is a course of therapy?', a: 'It varies with the injury, the procedure if you are post-surgical, and your response. Your therapist will give you a goal-based timeline at evaluation and adjust it against actual progress.' },
      { q: 'Is physical therapy covered by insurance?', a: 'Most plans cover it, frequently with a visit cap per year and sometimes with prior authorization. Our team verifies your benefits before you start so you know what you have.' },
    ],
  },

  related: [
    { label: 'Physical Medicine', href: '/physical-medicine' },
    { label: 'Chiropractic Care', href: '/chiropractic' },
    { label: 'Primary Care', href: '/general-medical-care' },
    { label: 'Peptide Therapy', href: '/peptides' },
  ],

  cta: {
    label: 'Start Therapy',
    heading: 'Get moving properly again',
    body: 'An evaluation establishes where your strength and mobility actually are, and what a realistic recovery looks like from there.',
    address: '4303 Victory Drive, Austin TX 78704 · 3811 Bee Caves Rd, Westlake Hills TX 78746',
    primary: { label: 'Book an Evaluation', href: 'https://www.priviahealth.com/practice/victory-medical/', external: true },
    secondary: { label: 'Call (512) 462-3627', href: 'tel:5124623627' },
  },
}

export default content
