import type { ServiceContent } from '@/components/ServicePageTemplate'

const content: ServiceContent = {
  path: '/ketamine',
  metaTitle: 'Ketamine Infusion Therapy Austin TX | Victory Medical',
  metaDescription: 'Physician-monitored ketamine infusion therapy in Austin for treatment-resistant depression, PTSD, OCD, and related conditions. Every infusion supervised, in a treatment room built for the experience.',

  eyebrow: 'Austin · Ketamine Infusion Therapy',
  h1: 'When Other Treatments',
  h1Accent: "Haven't Worked",
  lede: 'A different mechanism entirely — rapid-acting, physician-monitored, and delivered in a room designed for it.',
  intro: 'PTSD, chronic depression, OCD, postpartum depression, and bipolar disorder are exhausting to carry, and conventional antidepressants do not reach everyone. Ketamine works through a different pathway than SSRIs, acts rapidly, and has been the subject of expanding research as a therapeutic option. Victory Medical is licensed to offer ketamine infusion therapy, and every infusion is monitored by a trained provider from start to finish.',
  stats: [
    { stat: '1:1', label: 'Provider-monitored infusions' },
    { stat: 'Rapid', label: 'Fast-acting by mechanism' },
    { stat: 'Custom', label: 'Each infusion individualized' },
    { stat: 'Since 1996', label: 'Victory Medical in Austin' },
  ],
  heroPrimary: { label: 'Request a Consultation', href: 'tel:5124623627' },
  heroSecondary: { label: 'Book Online', href: 'https://www.priviahealth.com/practice/victory-medical/', external: true },
  breadcrumbLabel: 'Ketamine Therapy',

  overview: {
    label: 'The Therapy',
    heading: 'Why ketamine, and why now',
    paragraphs: [
      'Ketamine has a long clinical history — in use since the 1950s, primarily as an anesthetic, with a well-characterized safety profile at anesthetic doses. Its therapeutic use at much lower doses is more recent, and it draws attention for a straightforward reason: it is rapid-acting, short in duration, and works through a mechanism unrelated to the serotonin pathway that most antidepressants target.',
      'That last point is what matters to someone who has cycled through medications without relief. A different mechanism means a different chance of response. Victory Medical is among a limited number of clinics licensed to offer ketamine as a therapeutic protocol, and physicians customize each infusion to the individual rather than running a fixed dose.',
    ],
    checklist: {
      heading: 'Conditions this is used for',
      items: [
        'Treatment-resistant depression',
        'PTSD — military and non-military',
        'Chronic and acute depression',
        'Obsessive-compulsive disorder',
        'Postpartum depression',
        'Bipolar disorder',
        'Fibromyalgia',
        'Suicidal ideation',
      ],
      note: 'Candidacy is determined through consultation. Ketamine therapy is not appropriate for everyone, and evaluation comes before any treatment plan.',
    },
  },

  benefits: {
    label: 'How We Do It',
    heading: 'What sets the experience apart',
    intro: 'The clinical protocol matters. So does the room, the pace, and who is sitting with you.',
    items: [
      { icon: '⊕', title: 'Monitored Throughout', description: 'A trained provider monitors every infusion from beginning to end. Starting an unfamiliar treatment for a chronic condition is hard enough without being left alone in it.' },
      { icon: '◎', title: 'A Room Built for This', description: 'Our infusion room is designed specifically to complement treatment — the purpose of the session is to remove stress, not add a clinical fluorescent one.' },
      { icon: '◇', title: 'Individualized Infusions', description: 'Physicians customize each infusion to the person receiving it rather than administering a standardized protocol to everyone who walks in.' },
      { icon: '⟳', title: 'Scheduled Around Your Life', description: 'Sessions are arranged to be as non-invasive as possible, with time built in to ease into and back out of the effects rather than being rushed through.' },
      { icon: '✦', title: 'Inside a Full Medical Practice', description: 'Ketamine therapy sits within a complete medical practice — your other providers, records, and care are in the same building, not disconnected from it.' },
      { icon: '◈', title: 'Licensed Program', description: 'Victory Medical is licensed to offer ketamine therapeutically, which remains uncommon among clinics in the United States.' },
    ],
  },

  process: {
    label: 'What to Expect',
    heading: 'From first call to follow-up',
    steps: [
      { step: '01', title: 'Consultation & Evaluation', description: 'A full review of your diagnosis, treatment history, current medications, and medical history to determine whether ketamine therapy is appropriate for you.' },
      { step: '02', title: 'Your Treatment Plan', description: 'If you are a candidate, your provider outlines the number of sessions, spacing, and dosing approach, plus what to expect during and after each infusion.' },
      { step: '03', title: 'Preparing for a Session', description: 'Practical guidance — eating, medications, arranging transportation home — along with what the experience itself is typically like.' },
      { step: '04', title: 'The Infusion', description: 'You settle into the infusion room and the session proceeds at an unhurried pace, monitored throughout by a trained provider who stays with you.' },
      { step: '05', title: 'Recovery & Reflection', description: 'Time to come back down before you leave. Effects and impressions are discussed rather than being sent home with you unprocessed.' },
      { step: '06', title: 'Follow-Up & Adjustment', description: 'Response is reviewed between sessions and the plan adjusted — including how maintenance looks if the initial series helps.' },
    ],
  },

  faqs: {
    label: 'Frequently Asked',
    heading: 'Ketamine Therapy Questions',
    items: [
      { q: 'Is ketamine therapy safe?', a: 'Ketamine has been in clinical use since the 1950s with a well-documented safety profile, and therapeutic infusions use doses far below anesthetic levels. That said, it is not appropriate for everyone — certain cardiac conditions, blood pressure issues, psychiatric presentations, and medication interactions affect candidacy. This is exactly what the consultation and evaluation exist to determine, and every infusion here is monitored by a trained provider.' },
      { q: 'How many sessions will I need?', a: 'It depends on your condition, your history, and how you respond to the initial series. Your provider will outline an expected course during your consultation and adjust based on what actually happens rather than committing you to a fixed number up front.' },
      { q: 'What does an infusion feel like?', a: 'Most patients describe a relaxed, dissociative state during the infusion — sensations of floating or altered perception are common. It is not painful, and you remain monitored and able to communicate. Your provider will walk you through what to expect before your first session.' },
      { q: 'Can I drive myself home?', a: 'No. You will need someone to drive you home after each infusion. This is arranged as part of preparing for your session.' },
      { q: 'Does insurance cover ketamine infusions?', a: 'Coverage for ketamine infusion therapy is limited and varies considerably by plan, since therapeutic use for these conditions is often considered off-label. Our team will review costs and any potential coverage with you before you commit to a course of treatment.' },
      { q: 'Do I stop my current antidepressants?', a: 'Not on your own. Medication decisions are made with your provider and, where relevant, in coordination with your prescribing psychiatrist. Bring a complete medication list to your consultation.' },
    ],
  },

  related: [
    { label: 'Family Practice', href: '/family-practice' },
    { label: 'Peptide Therapy', href: '/peptides' },
    { label: 'Natural Hormone Replacement', href: '/natural-hormone-replacement' },
    { label: 'Austin Location', href: '/locations/austin' },
  ],

  cta: {
    label: 'Take the First Step',
    heading: 'Start with a conversation',
    body: 'The first step is an evaluation — a real discussion of your history, what you have already tried, and whether ketamine therapy makes sense for you. If it does not, we will tell you.',
    address: '4303 Victory Drive, Austin TX 78704',
    primary: { label: 'Call (512) 462-3627', href: 'tel:5124623627' },
    secondary: { label: 'Book Online', href: 'https://www.priviahealth.com/practice/victory-medical/', external: true },
  },
}

export default content
