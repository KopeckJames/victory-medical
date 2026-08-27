import type { ServiceContent } from '@/components/ServicePageTemplate'

const content: ServiceContent = {
  path: '/physical-medicine',
  metaTitle: 'Physical Medicine Austin TX | Chiropractic, PT & Massage',
  metaDescription: 'Physical medicine at Victory Medical — chiropractors, physical therapists, massage therapists, and rehabilitation staff working under one roof on pain, injury recovery, and restored function, coordinated with your primary care team.',

  eyebrow: 'Austin & Westlake Hills · Physical Medicine',
  h1: 'Rehabilitation That',
  h1Accent: 'Talks to Your Doctor',
  lede: 'Chiropractic, physical therapy, and massage in the same practice as the physician managing your care.',
  intro: 'Pain and injury rarely resolve through a single discipline. Victory Medical\'s physical medicine department brings physical therapists, chiropractors, massage therapists, and rehabilitation technicians together in one team — and because that team works inside a full medical practice, treatment is coordinated with the physician who knows the rest of your health picture.',
  stats: [
    { stat: '4', label: 'Disciplines in one department' },
    { stat: 'Coordinated', label: 'With your primary care team' },
    { stat: 'Non-surgical', label: 'Conservative care first' },
    { stat: 'On-site', label: 'Inside the same building' },
  ],
  heroPrimary: { label: 'Book an Evaluation', href: 'https://www.priviahealth.com/practice/victory-medical/', external: true },
  heroSecondary: { label: 'Call (512) 462-3627', href: 'tel:5124623627' },
  breadcrumbLabel: 'Physical Medicine',

  overview: {
    label: 'The Department',
    heading: 'One team, several disciplines',
    paragraphs: [
      'A back injury might need spinal manipulation, strengthening work, soft tissue therapy, and a conversation about the workstation that caused it. Handled by four separate practices, that becomes four intake forms and four partial pictures.',
      'Physical medicine at Victory Medical keeps those disciplines in one department focused on the same goal: restoring function and preventing the next injury. Progress notes stay in your medical record, and your primary provider sees exactly where recovery stands.',
    ],
    checklist: {
      heading: 'What the department covers',
      items: [
        'Chiropractic care and spinal manipulation',
        'Physical therapy and therapeutic exercise',
        'Massage and soft tissue therapy',
        'Sports medicine and injury evaluation',
        'Structured rehabilitation programs',
        'Acute injury treatment',
        'Chronic pain management',
        'Post-surgical rehabilitation',
        'Preventive and ergonomic wellness care',
      ],
      note: 'Workers compensation cases are supported, including physical rehab, functional capacity evaluation, and MMI documentation.',
    },
  },

  benefits: {
    label: 'Areas of Focus',
    heading: 'What physical medicine treats',
    items: [
      { icon: '⊕', title: 'Back and Neck Pain', description: 'Spinal alignment, decompression therapy, therapeutic massage, and strengthening work aimed at the cause rather than the symptom.' },
      { icon: '◎', title: 'Sports Injuries', description: 'Evaluation, rehab, and chiropractic care for the injuries that come with training — plus the conditioning work that prevents the repeat.' },
      { icon: '◇', title: 'Post-Surgical Recovery', description: 'Structured rehabilitation programs that rebuild strength and range of motion on a timeline matched to the procedure.' },
      { icon: '⟳', title: 'Arthritis and Joint Pain', description: 'Gentle realignment, trigger point therapy, ultrasound therapy, and mobility work for joints that hurt to use.' },
      { icon: '✦', title: 'Repetitive Strain', description: 'Carpal tunnel, tendon irritation, and the workplace injuries that build slowly — treated alongside the ergonomic changes that stop them recurring.' },
      { icon: '◈', title: 'Chronic Pain', description: 'Long-term pain management with a conservative, non-surgical emphasis, coordinated with your physician and medication plan.' },
    ],
  },

  process: {
    label: 'How It Works',
    heading: 'From evaluation to discharge',
    steps: [
      { step: '01', title: 'Evaluation', description: 'A full assessment of the injury or pain — mechanism, history, range of motion, and what daily activities it is preventing.' },
      { step: '02', title: 'A Coordinated Plan', description: 'Your care team determines which disciplines belong in your treatment and in what sequence, rather than defaulting to whichever door you walked through.' },
      { step: '03', title: 'Active Treatment', description: 'Hands-on therapy, therapeutic exercise, and modalities delivered on a schedule built around measurable progress.' },
      { step: '04', title: 'Strengthening & Prevention', description: 'As pain resolves, treatment shifts toward the strength, mobility, and ergonomic changes that keep the problem from returning.' },
      { step: '05', title: 'Discharge and Maintenance', description: 'A home program you can sustain, with your primary provider holding the full record of what was treated and how it resolved.' },
    ],
  },

  related: [
    { label: 'Chiropractic Care', href: '/chiropractic' },
    { label: 'Physical Therapy', href: '/physical-therapy' },
    { label: 'Urgent Care', href: '/urgent-care' },
    { label: 'Primary Care', href: '/general-medical-care' },
    { label: 'Peptide Therapy', href: '/peptides' },
  ],

  cta: {
    label: 'Start Recovery',
    heading: 'Get evaluated before you compensate around it',
    body: 'Most injuries get harder to treat once the body has spent months working around them. An evaluation establishes what is actually happening and what it will take to fix.',
    address: '4303 Victory Drive, Austin TX 78704 · 3811 Bee Caves Rd, Westlake Hills TX 78746',
    primary: { label: 'Book an Evaluation', href: 'https://www.priviahealth.com/practice/victory-medical/', external: true },
    secondary: { label: 'Call (512) 462-3627', href: 'tel:5124623627' },
  },
}

export default content
