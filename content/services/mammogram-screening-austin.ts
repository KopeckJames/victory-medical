import type { ServiceContent } from '@/components/ServicePageTemplate'

const content: ServiceContent = {
  path: '/mammogram-screening-austin',
  metaTitle: 'Mammogram Screening Austin TX | Victory Medical',
  metaDescription: 'Schedule a screening mammogram in Austin with Victory Medical. Annual screening is recommended from age 40, and earlier with family history — early detection remains the most effective tool available.',

  eyebrow: 'Austin · Breast Cancer Screening',
  h1: 'The Appointment That',
  h1Accent: 'Saves Lives',
  lede: 'Screening mammograms find cancer at its earliest stage — before you would ever notice it.',
  intro: 'Life is busy, you feel fine, and a mammogram is easy to postpone indefinitely. But screening exists precisely for the people who feel fine: its purpose is detecting cancer at the earliest and most treatable stage, well before symptoms appear. Victory Medical schedules screening mammograms in Austin, and booking one takes a fraction of the time you have already spent putting it off.',
  stats: [
    { stat: 'Age 40', label: 'When annual screening typically begins' },
    { stat: 'Yearly', label: 'Recommended screening interval' },
    { stat: 'Age 35', label: 'If a close relative was diagnosed at 45' },
    { stat: 'Early', label: 'Detection is the strongest tool' },
  ],
  heroPrimary: { label: 'Book a Mammogram', href: 'https://providers.priviahealth.com/search?provider_name=Screening%20Mammograms%20-%20Victory%20Medical&sort=networks%2Crelevance&tt=4591afd9-8b42-49dd-8b60-d85b63b65a0b&ut=fa48dace-da23-44bf-9a42-6fc5983813fe&timestamp=2023-01-09T16%3A43%3A47.774Z', external: true },
  heroSecondary: { label: 'Call (512) 462-3627', href: 'tel:5124623627' },
  breadcrumbLabel: 'Mammogram Screening',

  overview: {
    label: 'Why It Matters',
    heading: 'Screening is for people without symptoms',
    paragraphs: [
      'Most physicians agree that mammography remains the best screening tool available for early detection of breast cancer. Screening should generally begin at age 40 and continue annually, even with no risk factors and no symptoms — and family history moves that timeline earlier.',
      'A common guideline: if a close relative was diagnosed at 45, screening starts around 35 — roughly a decade before the age at which she was diagnosed. Screening recommendations do vary between organizations and by individual risk, so the interval that is right for you is a conversation with your provider.',
    ],
    checklist: {
      heading: 'Risk factors you cannot change',
      items: [
        'Getting older — age is the strongest risk factor',
        'Genetic mutations, including BRCA1 and BRCA2',
        'Reproductive history',
        'Dense breast tissue',
        'Personal or family history of breast cancer',
        'Previous treatment using radiation therapy',
        'Exposure to the drug DES (diethylstilbestrol)',
        'Previous exposure to certain chemicals',
      ],
      note: 'Source: CDC. Having a risk factor does not mean you will develop breast cancer, and risk factors do not all carry equal weight.',
    },
  },

  benefits: {
    label: 'Reducing Risk',
    heading: 'Risk factors you can change',
    intro: 'Some contributors to breast cancer risk are within your control, and your provider can help you address them.',
    items: [
      { icon: '⊕', title: 'Weight', description: 'Being overweight or obese is an established modifiable risk factor. Our medical weight loss program can help if this is where you want to start.' },
      { icon: '◎', title: 'Physical Activity', description: 'Inactivity raises risk. Regular movement is among the most reliably beneficial changes available.' },
      { icon: '◇', title: 'Hormone Use', description: 'Taking hormones affects risk. If you are on hormone therapy, this is worth discussing with the physician managing it.' },
      { icon: '⟳', title: 'Alcohol', description: 'Alcohol consumption is a recognized modifiable risk factor for breast cancer.' },
      { icon: '✦', title: 'Smoking', description: 'Smoking contributes to risk across many cancers, and cessation support is available through your primary care provider.' },
      { icon: '◈', title: 'Prescription Use', description: 'Overuse of narcotics and prescription medication is listed among modifiable risk factors — a medication review is part of routine care here.' },
    ],
  },

  faqs: {
    label: 'Frequently Asked',
    heading: 'Mammogram Questions',
    items: [
      { q: 'When should I start getting mammograms?', a: 'General guidance is annual screening beginning at age 40, even without risk factors or symptoms. With a close relative diagnosed young, screening usually starts about ten years before their age at diagnosis — if your mother was diagnosed at 45, that means starting around 35. Guidelines differ between organizations, so confirm the right interval with your provider.' },
      { q: 'How often do I need one?', a: 'Annually for most women once screening begins, and particularly between ages 45 and 54. Your provider may recommend a different interval based on your personal risk profile and breast density.' },
      { q: 'Does a mammogram hurt?', a: 'It can be uncomfortable and briefly awkward — compression is what produces a usable image. The discomfort lasts seconds, and it is the trade for detecting cancer years before you could feel it.' },
      { q: 'What if something is found?', a: 'A finding on a screening mammogram frequently turns out to be nothing, and additional imaging clarifies most cases. If further evaluation is needed, Victory Medical coordinates the next steps and your provider walks you through what the findings mean and what happens next.' },
      { q: 'Do I need a referral?', a: 'You can schedule a screening mammogram directly through our booking link. If you are unsure whether screening is appropriate for you yet, start with your primary care provider.' },
    ],
  },

  related: [
    { label: 'Preventative Care', href: '/preventative-care' },
    { label: 'Family Practice', href: '/family-practice' },
    { label: 'Heartwise Physical', href: '/victoryheartwise' },
    { label: 'Natural Hormone Replacement', href: '/natural-hormone-replacement' },
  ],

  cta: {
    label: 'Schedule Screening',
    heading: 'Book it while you are thinking about it',
    body: 'Screening mammograms can be booked directly online. It takes a few minutes now and buys the kind of certainty that is hard to get any other way.',
    address: '4303 Victory Drive, Austin TX 78704',
    primary: { label: 'Book a Mammogram', href: 'https://providers.priviahealth.com/search?provider_name=Screening%20Mammograms%20-%20Victory%20Medical&sort=networks%2Crelevance&tt=4591afd9-8b42-49dd-8b60-d85b63b65a0b&ut=fa48dace-da23-44bf-9a42-6fc5983813fe&timestamp=2023-01-09T16%3A43%3A47.774Z', external: true },
    secondary: { label: 'Call (512) 462-3627', href: 'tel:5124623627' },
  },
}

export default content
