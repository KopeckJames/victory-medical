import type { ServiceContent } from '@/components/ServicePageTemplate'

const content: ServiceContent = {
  path: '/coolsculpting',
  metaTitle: 'CoolSculpting Austin TX | Non-Surgical Fat Reduction',
  metaDescription: 'CoolSculpting® at Victory MedSpa in Austin — the FDA-cleared, non-surgical fat-reduction treatment that uses controlled cooling to eliminate stubborn fat, with little to no downtime.',

  eyebrow: 'Victory MedSpa · Ben White Blvd',
  h1: 'Freeze the Fat That',
  h1Accent: 'Will Not Move',
  lede: 'Controlled cooling, no surgery, little to no downtime — and treated fat cells do not come back.',
  intro: 'Almost everyone has a pocket of fat that resists diet and exercise entirely. CoolSculpting® is the FDA-cleared, non-surgical fat-reduction procedure that uses controlled cooling to target and eliminate those cells specifically. In the weeks following treatment your body processes and clears them naturally — and because the treated cells are gone, results are long term.',
  stats: [
    { stat: 'FDA-cleared', label: 'Non-surgical fat reduction' },
    { stat: 'No surgery', label: 'Little to no downtime' },
    { stat: 'Long term', label: 'Treated fat cells are eliminated' },
    { stat: 'Ben White', label: 'At our MedSpa location' },
  ],
  heroPrimary: { label: 'Book a Consultation', href: 'https://www.priviahealth.com/practice/victory-medical/', external: true },
  heroSecondary: { label: 'Call (512) 462-3627', href: 'tel:5124623627' },
  breadcrumbLabel: 'CoolSculpting®',
  visual: { src: '/generated/coolsculpt-wl.jpg', alt: 'CoolSculpting body contouring treatment room at Victory MedSpa' },

  overview: {
    label: 'The Science',
    heading: 'How cryolipolysis works',
    paragraphs: [
      'Fat cells are more vulnerable to cold than the surrounding skin, nerves, and muscle. Cryolipolysis exploits that difference: controlled cooling is applied to a targeted area at a temperature that affects fat cells while leaving the surrounding tissue intact.',
      'Those cells are then processed and eliminated by the body over the following weeks. The distinction that matters is between shrinking fat cells and removing them — with CoolSculpting the treated cells are gone, which is why results are described as long term rather than temporary.',
    ],
    checklist: {
      heading: 'What sets the procedure apart',
      items: [
        'The only FDA-cleared cryolipolysis fat-reduction treatment',
        'Freeze-detection sensors monitor skin throughout treatment',
        'Software shuts the applicator down automatically if a freeze is detected',
        'Non-surgical — no incisions, no anesthesia',
        'Little to no downtime afterward',
        'Backed by extensive published research',
        'High reported patient satisfaction',
      ],
      note: 'CoolSculpting is a contouring treatment for stubborn fat, not a weight loss program. Candidacy is determined at consultation.',
    },
  },

  benefits: {
    label: 'Why Patients Choose It',
    heading: 'What CoolSculpting offers',
    items: [
      { icon: '⊕', title: 'No Surgery', description: 'No incisions, no anesthesia, no surgical recovery — the reason most patients consider it in the first place.' },
      { icon: '◎', title: 'Targeted Reduction', description: 'Controlled cooling is applied to a specific area, targeting the fat that has resisted diet and exercise there.' },
      { icon: '◇', title: 'Built-In Safety', description: 'Freeze-detection sensors and software monitor changes in the skin throughout and shut down automatically if a freeze is detected.' },
      { icon: '⟳', title: 'Little Downtime', description: 'Most patients return to normal activity right away rather than planning recovery around the procedure.' },
      { icon: '✦', title: 'Long-Term Results', description: 'Treated fat cells are eliminated rather than shrunk, so the result persists — provided overall weight stays stable.' },
      { icon: '◈', title: 'Proven Technology', description: 'The procedure rests on published research from leading researchers and physicians rather than on marketing claims alone.' },
    ],
  },

  process: {
    label: 'What to Expect',
    heading: 'From consultation to result',
    steps: [
      { step: '01', title: 'Consultation', description: 'An assessment of the areas that concern you and whether CoolSculpting is the right tool — some concerns are better served by other treatments or by a medical weight loss program.' },
      { step: '02', title: 'Your Treatment Plan', description: 'Which areas, how many applicators, and how many sessions, along with a realistic picture of what results to expect.' },
      { step: '03', title: 'The Session', description: 'The applicator is positioned and controlled cooling applied. Most patients describe the treatment itself as not uncomfortable, and many read or work through it.' },
      { step: '04', title: 'Natural Elimination', description: 'Over the following weeks your body processes and clears the treated fat cells — the results appear gradually rather than immediately.' },
      { step: '05', title: 'Follow-Up', description: 'Results are assessed and additional sessions planned if the area would benefit from further treatment.' },
    ],
  },

  faqs: {
    label: 'Frequently Asked',
    heading: 'CoolSculpting Questions',
    items: [
      { q: 'Does CoolSculpting hurt?', a: 'Most patients describe the treatment as not uncomfortable, with an initial period of intense cold that subsides as the area numbs. Many read or work during the session, and most feel fine afterward.' },
      { q: 'Is it a weight loss treatment?', a: 'No. CoolSculpting is a body contouring treatment for stubborn pockets of fat that resist diet and exercise. If your goal is overall weight reduction, our medical weight loss program is the appropriate starting point — and the two are sometimes used in sequence.' },
      { q: 'How long until I see results?', a: 'Results develop gradually as your body processes and eliminates the treated cells over the weeks following treatment, rather than appearing immediately.' },
      { q: 'Are the results permanent?', a: 'Treated fat cells are eliminated and do not return. Remaining fat cells elsewhere can still enlarge with weight gain, so results are best maintained alongside stable weight.' },
      { q: 'Is there downtime?', a: 'Little to none. Because the procedure is non-surgical, most patients resume normal activity immediately.' },
      { q: 'Is financing available?', a: 'Financing options are available for MedSpa treatments. Ask during your consultation and our team will walk you through what applies.' },
    ],
  },

  related: [
    { label: 'Medical Weight Loss', href: '/weight-loss' },
    { label: 'MedSpa Treatments', href: '/medspa' },
    { label: 'Peptide Therapy', href: '/peptides' },
    { label: 'MedSpa — Ben White', href: '/locations/ben-white' },
  ],

  cta: {
    label: 'Book a Consultation',
    heading: 'Find out whether you are a candidate',
    body: 'A consultation at Victory MedSpa establishes whether CoolSculpting suits the areas you want treated, and what results are realistic for you.',
    address: '2108 W Ben White Blvd, Austin TX 78704',
    primary: { label: 'Book a Consultation', href: 'https://www.priviahealth.com/practice/victory-medical/', external: true },
    secondary: { label: 'Explore the MedSpa', href: '/medspa' },
  },
}

export default content
