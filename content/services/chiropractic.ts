import type { ServiceContent } from '@/components/ServicePageTemplate'

const content: ServiceContent = {
  path: '/chiropractic',
  metaTitle: 'Chiropractic Care Austin TX | Back, Neck & Joint Pain',
  metaDescription: 'Chiropractic care at Victory Medical in Austin — spinal alignment, spinal decompression, therapeutic massage, and trigger point therapy for back pain, neck pain, arthritis, pregnancy discomfort, and scoliosis.',

  eyebrow: 'Austin & Westlake Hills · Chiropractic',
  h1: 'Manage Pain,',
  h1Accent: 'Heal Faster',
  lede: 'Every function of the body is routed through the spine. Alignment is not a metaphor.',
  intro: 'The central nervous system controls the body through the spine, and when vertebrae fall out of alignment the nerve signals passing from brain to body are affected. Victory Medical\'s chiropractic team treats back and neck pain, arthritis, pregnancy-related discomfort, and scoliosis — inside a medical practice, so care is coordinated with your physician rather than running parallel to it.',
  stats: [
    { stat: 'Non-surgical', label: 'Conservative treatment first' },
    { stat: '5+', label: 'Conditions routinely treated' },
    { stat: 'Coordinated', label: 'With your medical record' },
    { stat: 'In-house', label: 'PT and massage alongside' },
  ],
  heroPrimary: { label: 'Book an Evaluation', href: 'https://www.priviahealth.com/practice/victory-medical/', external: true },
  heroSecondary: { label: 'Call (512) 462-3627', href: 'tel:5124623627' },
  breadcrumbLabel: 'Chiropractic Care',

  overview: {
    label: 'The Approach',
    heading: 'Treating the structure, not just the ache',
    paragraphs: [
      'Pain is a symptom of something mechanical. A misaligned spine changes how load moves through the body, which changes which muscles compensate, which is often where the pain actually shows up — some distance from its cause.',
      'Chiropractic care at Victory Medical addresses that structure through alignment, decompression, soft tissue work, and targeted strengthening, with physical therapy and massage available in the same department when recovery calls for more than adjustment alone.',
    ],
    checklist: {
      heading: 'Treatments offered',
      items: [
        'Spinal alignment and manipulation',
        'Spinal decompression — non-surgical traction',
        'Therapeutic and chiropractic massage',
        'Trigger point therapy',
        'Ultrasound therapy for deep soft tissue heating',
        'Cervical traction for neck pain and radiculopathy',
        'Rehabilitative and strengthening exercise',
        'Ergonomic assessment and workspace changes',
      ],
      note: 'Treatment plans are built per patient. Not every condition calls for every modality.',
    },
  },

  benefits: {
    label: 'What We Treat',
    heading: 'Conditions we see most',
    items: [
      { icon: '⊕', title: 'Back Pain', description: 'Constant or intermittent, dull or sharp, sometimes radiating down a leg. Treated with alignment, decompression, massage, and strengthening work.' },
      { icon: '◎', title: 'Neck Pain', description: 'Whether it followed an auto accident or arrived one morning without warning — spinal alignment, decompression, cervical traction, and rehab exercise.' },
      { icon: '◇', title: 'Arthritis', description: 'Gentle realignment through pressure points, massage to restore joint mobility, trigger point therapy, and ultrasound to soothe painful areas.' },
      { icon: '⟳', title: 'Pregnancy Discomfort', description: 'Care for the postural and structural changes pregnancy brings — rarely on the to-do list, frequently worth adding to it.' },
      { icon: '✦', title: 'Scoliosis', description: 'Abnormal spinal curvature, where care typically focuses on monitoring for change, with treatment recommended case by case.' },
      { icon: '◈', title: 'Sports & Work Injuries', description: 'Acute injury care and the rehab that follows, including workers compensation cases and ergonomic correction.' },
    ],
  },

  faqs: {
    label: 'Frequently Asked',
    heading: 'Chiropractic Questions',
    items: [
      { q: 'What is spinal decompression?', a: 'A modern, non-surgical traction procedure used for lower back pain, neck pain, and radiating leg or arm pain. It gently relieves pressure on spinal structures without surgery.' },
      { q: 'Is chiropractic care safe during pregnancy?', a: 'Care during pregnancy is a routine part of our practice, addressing the postural changes that come with a shifting center of gravity. Your provider will adapt technique and positioning to your stage of pregnancy, and will coordinate with your obstetric care.' },
      { q: 'How many visits will I need?', a: 'It depends on the condition, how long it has been present, and how your body responds. Acute injuries often resolve in a handful of visits; chronic issues that developed over years typically need longer. Your provider will outline an expected course after evaluating you.' },
      { q: 'Do you treat scoliosis?', a: 'When scoliosis is detected, the care plan usually focuses on monitoring for changes rather than active treatment. In some cases your physician may recommend other approaches, including surgery, depending on factors such as age, sex, and the degree of curvature.' },
      { q: 'Is chiropractic covered by insurance?', a: 'Many plans cover chiropractic care, often with a visit limit per year. Coverage varies, and workers compensation cases follow different rules — our team will verify your specific benefits before you begin.' },
    ],
  },

  related: [
    { label: 'Physical Medicine', href: '/physical-medicine' },
    { label: 'Physical Therapy', href: '/physical-therapy' },
    { label: 'Urgent Care', href: '/urgent-care' },
    { label: 'Primary Care', href: '/general-medical-care' },
  ],

  cta: {
    label: 'Book Chiropractic',
    heading: 'Stop working around the pain',
    body: 'An evaluation determines whether your pain is structural, muscular, or something that needs a physician first — and all three are available in this building.',
    address: '4303 Victory Drive, Austin TX 78704 · 3811 Bee Caves Rd, Westlake Hills TX 78746',
    primary: { label: 'Book an Appointment', href: 'https://www.priviahealth.com/practice/victory-medical/', external: true },
    secondary: { label: 'Call (512) 462-3627', href: 'tel:5124623627' },
  },
}

export default content
