import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Peptide Therapy Austin TX | Victory Medical',
  description:
    'Physician-supervised peptide therapy in Austin, TX. 10 protocols: Semax, CJC-1295/Ipamorelin, BPC-157, Tesamorelin, AOD-9604, GHK-CU, Sermorelin, Selank, KPV, and MOTS-c for cognitive enhancement, body optimization, and accelerated recovery.',
  keywords:
    'peptide therapy Austin, Semax Austin, BPC-157 Austin, CJC-1295 Ipamorelin Austin, Tesamorelin Austin, AOD-9604 Austin, GHK-CU Austin, Sermorelin Austin, Selank Austin, KPV peptide Austin, MOTS-c Austin, peptide therapy Texas',
  alternates: { canonical: '/peptides' },
  openGraph: {
    title: 'Peptide Therapy Austin TX | Victory Medical',
    description: 'Physician-supervised peptide therapy in Austin, TX. 10 protocols for cognitive enhancement, fat loss, tissue repair, and longevity.',
    url: '/peptides',
  },
}

const peptides = [
  {
    id: 'semax',
    name: 'Semax',
    tagline: 'Cognitive Enhancement & Neuroprotection',
    headline: 'Unlock Your Mental Edge',
    color: '#22b8d1',
    description:
      "Semax is a synthetic analogue of ACTH derived from the body's own adrenocorticotropic hormone. Originally developed in Russia for stroke recovery and cognitive rehabilitation, it has emerged as one of the most potent neuroprotective peptides available. Semax works primarily by increasing Brain-Derived Neurotrophic Factor (BDNF) — the protein your brain uses to form new connections, protect existing neurons, and regulate mood.",
    mechanism:
      'By elevating BDNF levels, Semax enhances synaptic plasticity (the foundation of learning and memory), improves cerebral blood flow for better oxygen and nutrient delivery, and shields neurons from oxidative stress and inflammation that drive long-term cognitive decline.',
    benefits: [
      { label: 'Enhanced Cognitive Function', description: 'Sharper focus, faster processing, and improved working memory.' },
      { label: 'Neuroprotective Effects', description: 'Guards neurons against oxidative damage and chronic inflammation.' },
      { label: 'Improved Focus & Clarity', description: 'Cuts through brain fog and sustains attention during demanding tasks.' },
      { label: 'Mood & Emotional Well-Being', description: 'Supports healthy dopamine and serotonin signaling for emotional stability.' },
      { label: 'Stress Resilience', description: 'Reduces the neurological impact of chronic stress on brain function.' },
      { label: 'Reduced Brain Fog', description: 'Restores mental sharpness after illness, sleep disruption, or burnout.' },
    ],
    whoFor: [
      'High-performance professionals',
      'Students & academics',
      'Athletes seeking a cognitive edge',
      'Aging adults protecting long-term brain health',
      'Anyone struggling with chronic fatigue or brain fog',
    ],
  },
  {
    id: 'cjc-ipamorelin',
    name: 'CJC-1295 + Ipamorelin',
    tagline: 'Growth Hormone Optimization',
    headline: 'Elevate Strength. Restore Vitality.',
    color: '#226d7a',
    description:
      "CJC-1295 is a Growth Hormone Releasing Hormone (GHRH) analogue that stimulates the pituitary gland to produce and release growth hormone. Ipamorelin is a selective Growth Hormone Secretagogue and ghrelin receptor agonist — it amplifies GH release without significantly raising cortisol or prolactin, ensuring a precisely targeted approach to hormone optimization. Together, they create a synergistic effect that mimics the body's natural pulsatile GH secretion patterns for superior efficacy.",
    mechanism:
      "When administered together, CJC-1295 and Ipamorelin complement each other's mechanisms to produce a more pronounced and sustained release of growth hormone than either peptide alone. The result is an optimized hormonal environment that supports tissue repair, metabolic efficiency, and whole-body performance.",
    benefits: [
      { label: 'Increased Lean Muscle Mass', description: 'Stimulates protein synthesis and supports muscle growth.' },
      { label: 'Enhanced Fat Metabolism', description: 'Accelerates lipolysis, targeting stubborn body fat more effectively.' },
      { label: 'Improved Recovery & Repair', description: 'Faster healing from training, injury, and daily physical stress.' },
      { label: 'Strengthened Cardiovascular System', description: 'Supports heart health and improves overall cardiovascular output.' },
      { label: 'Enhanced Bone Density', description: 'Stimulates osteoblast activity for stronger, more resilient bones.' },
      { label: 'Boosted Immune Function', description: 'GH plays a key role in immune cell production and activation.' },
      { label: 'Improved Sleep Quality', description: 'Growth hormone is primarily released during deep sleep — this protocol amplifies that cycle.' },
      { label: 'Anti-Aging Effects', description: 'Restores youthful GH levels that decline with age, addressing root causes of age-related decline.' },
    ],
    whoFor: [
      'Adults experiencing age-related decline in strength or energy',
      'Athletes pursuing body composition goals',
      'Those recovering from injury or surgery',
      'Anyone seeking anti-aging support at the hormonal level',
    ],
  },
  {
    id: 'bpc-157',
    name: 'BPC-157',
    tagline: 'Healing, Recovery & Gut Health',
    headline: 'Repair. Regenerate. Recover.',
    color: '#1a7a5e',
    description:
      'BPC-157 (Body Protection Compound 157) is a synthetic pentadecapeptide derived from a naturally occurring protein found in human gastric juice. It has been studied extensively for its remarkable regenerative properties — particularly its ability to accelerate the healing of tendons, ligaments, muscles, and the gastrointestinal lining. BPC-157 is one of the most versatile peptides in regenerative medicine, with a well-established safety profile.',
    mechanism:
      'BPC-157 works through multiple pathways simultaneously: it upregulates growth hormone receptors, promotes angiogenesis (new blood vessel formation) to deliver nutrients to damaged tissue, modulates nitric oxide production for anti-inflammatory effects, and directly supports the integrity of the gut-brain axis.',
    benefits: [
      { label: 'Accelerated Tissue Repair', description: 'Dramatically speeds healing of tendons, ligaments, muscles, and joints.' },
      { label: 'Gut Health & Mucosal Healing', description: 'Repairs the gut lining, reduces intestinal permeability, and alleviates GI conditions.' },
      { label: 'Anti-Inflammatory Action', description: 'Modulates inflammatory pathways without suppressing the immune system.' },
      { label: 'Neurological Support', description: 'Shows neuroprotective properties and may support recovery from brain injuries.' },
      { label: 'Cardiovascular Support', description: 'Promotes heart tissue repair and improves vascular integrity.' },
      { label: 'Faster Recovery from Injury', description: 'Reduces recovery time from sports injuries, surgical procedures, and trauma.' },
    ],
    whoFor: [
      'Athletes with chronic injuries or overuse conditions',
      'Post-surgical recovery patients',
      'Those with inflammatory bowel disease or leaky gut',
      'Anyone seeking faster physical recovery',
      'Patients with joint or tendon pain',
    ],
  },
  {
    id: 'tesamorelin',
    name: 'Tesamorelin',
    tagline: 'Visceral Fat Reduction & Metabolic Optimization',
    headline: 'Target Stubborn Fat. Restore Metabolic Health.',
    color: '#7a4fa0',
    description:
      'Tesamorelin is a synthetic analogue of growth hormone releasing hormone (GHRH) that stimulates the pituitary gland to produce growth hormone, leading to increased levels of insulin-like growth factor 1 (IGF-1). This hormonal activation promotes fat metabolism, specifically targeting visceral adipose tissue (VAT) — the dangerous fat that surrounds internal organs. Clinical trials demonstrate up to an 18% reduction in VAT after 6 months of therapy.',
    mechanism:
      "Tesamorelin activates the body's natural GH axis to preferentially mobilize visceral fat, while simultaneously improving critical metabolic markers. Unlike broad hormone therapies, it targets the pituitary's own production pathways, resulting in improvements in triglycerides, non-HDL cholesterol, and liver fat without disrupting lean muscle tissue.",
    benefits: [
      { label: 'Visceral Fat Reduction', description: 'Clinical trials show up to 18% reduction in VAT after 6 months of therapy.' },
      { label: 'Improved Metabolic Markers', description: 'Lowers triglycerides and non-HDL cholesterol for better cardiovascular health.' },
      { label: 'Liver Health Support', description: 'Decreases hepatic fat, reducing risk of non-alcoholic fatty liver disease (NAFLD).' },
      { label: 'Lean Mass Protection', description: 'Achieves fat loss without diminishing lean muscle mass.' },
      { label: 'Boosts IGF-1', description: 'Supports muscle growth and recovery through elevated insulin-like growth factor 1.' },
      { label: 'Workout Synergy', description: 'Enhanced results when combined with training and adequate protein intake.' },
    ],
    whoFor: [
      'Individuals with excess abdominal or visceral fat',
      'Those with elevated triglycerides or early signs of fatty liver',
      'Adults with metabolic resistance to diet and exercise alone',
      'Patients seeking clinically validated body composition improvement',
      'Anyone with long-term metabolic and wellness goals',
    ],
  },
  {
    id: 'aod-9604',
    name: 'AOD-9604',
    tagline: 'Non-Hormonal Fat Metabolism Support',
    headline: 'Burn Fat. Preserve Muscle. No Hormones.',
    color: '#a05a1a',
    description:
      'AOD-9604 is a modified fragment of the human growth hormone molecule, specifically isolating the fat-burning region of HGH without affecting its growth-promoting properties. Originally developed at Monash University in Australia, AOD-9604 stimulates fat breakdown (lipolysis) and inhibits the formation of new fat cells (lipogenesis) — especially in stubborn areas like the abdomen — without raising IGF-1 levels or disrupting insulin or glucose regulation.',
    mechanism:
      'AOD-9604 mimics the fat-burning region of natural growth hormone, activating lipolysis processes that break down stored fat while simultaneously blocking lipogenesis. Because it does not elevate IGF-1 or affect blood sugar, it offers a non-hormonal, metabolically clean approach to body composition support — suitable for patients who cannot or prefer not to use hormone-based therapies.',
    benefits: [
      { label: 'Targeted Fat Metabolism', description: 'Activates lipolysis to break down stored fat, especially stubborn abdominal fat.' },
      { label: 'No Hormonal Disruption', description: 'Does not raise IGF-1 or affect insulin and glucose levels.' },
      { label: 'Inhibits New Fat Formation', description: 'Blocks lipogenesis to prevent the body from creating new fat cells.' },
      { label: 'No Appetite Suppression or Nausea', description: 'Well-tolerated with no stimulant side effects common in other weight treatments.' },
      { label: 'Suitable for Long-Term Use', description: 'No receptor desensitization observed in early studies, supporting sustained use.' },
      { label: 'Combinable with Other Protocols', description: 'Works alongside CJC-1295, Tesamorelin, and other therapies for enhanced results.' },
    ],
    whoFor: [
      'Individuals seeking non-hormonal fat loss support',
      'Sensitive patients who cannot tolerate hormone-based therapies',
      'Adults targeting stubborn belly fat that resists diet and exercise',
      'Those wanting to combine with other peptide or weight loss protocols',
      'Anyone seeking clean, sustainable metabolic support',
    ],
  },
  {
    id: 'ghk-cu',
    name: 'GHK-CU',
    tagline: 'Skin Rejuvenation & Tissue Repair',
    headline: 'Renew Skin. Restore Tissue. Revitalize.',
    color: '#8a5c3a',
    description:
      'GHK-CU is a naturally occurring copper-binding peptide found in human plasma, first isolated in the 1970s. Concentrations are highest in youth and decline significantly with age — closely mirroring the deterioration of skin elasticity, tissue repair capacity, and hair density. By restoring these copper-peptide signals, GHK-CU triggers biological repair and rejuvenation at the cellular level across multiple body systems.',
    mechanism:
      'GHK-CU binds copper ions and acts as a master signal for tissue remodeling and repair. It stimulates collagen and elastin synthesis, promotes angiogenesis for accelerated wound healing, activates hair follicle stem cells to restore follicle function, and exerts neurotrophic effects that protect and support brain tissue. Its anti-inflammatory and antioxidant activity further amplifies the regenerative response.',
    benefits: [
      { label: 'Skin Rejuvenation', description: 'Stimulates collagen and elastin production, reducing wrinkles, sagging, and photoaging.' },
      { label: 'Wound Healing & Scar Reduction', description: 'Accelerates skin repair and minimizes scar formation after injury or surgery.' },
      { label: 'Hair Density & Appearance', description: 'Activates dormant follicles to support fuller, thicker hair and reduce shedding.' },
      { label: 'Connective Tissue Support', description: 'Promotes healing of ligaments, tendons, and joints at the structural level.' },
      { label: 'Brain & Cognitive Support', description: 'Demonstrates neurotrophic properties that protect neurons and reduce neuroinflammation.' },
      { label: 'Anti-Inflammatory & Antioxidant', description: 'Reduces oxidative cellular damage that drives aging and chronic tissue dysfunction.' },
    ],
    whoFor: [
      'Adults seeking skin rejuvenation and anti-aging support',
      'Individuals experiencing hair thinning or loss',
      'Post-injury or post-surgical recovery patients',
      'Anyone with chronic joint or connective tissue inflammation',
      'Those pursuing comprehensive cellular anti-aging protocols',
    ],
  },
  {
    id: 'sermorelin',
    name: 'Sermorelin',
    tagline: 'Natural Growth Hormone Release',
    headline: 'Restore Youth. Naturally.',
    color: '#226d7a',
    description:
      "Sermorelin is a bioidentical peptide that mimics Growth Hormone Releasing Hormone (GHRH), encouraging the pituitary gland to produce more growth hormone on its own. Rather than supplying synthetic GH directly, Sermorelin works with the body's own regulatory mechanisms — making it a gentler, more physiologically balanced option than traditional HGH injections. It promotes steady, natural hormone regulation that supports overall vitality.",
    mechanism:
      "Sermorelin activates the pituitary gland's own GH production pathways, stimulating natural pulsatile GH secretion that mirrors the body's youthful hormonal rhythms. Because it works through natural feedback loops rather than overriding them, it avoids the risks of hormone oversaturation while delivering sustainable anti-aging and body composition benefits. The body retains its ability to self-regulate hormone levels throughout therapy.",
    benefits: [
      { label: 'Youthful Skin & Anti-Aging', description: 'Stimulates collagen production for smoother, firmer skin over time.' },
      { label: 'Weight Management', description: 'Preserves lean muscle and improves fat metabolism without harsh interventions.' },
      { label: 'Increased Energy & Vitality', description: 'Patients report feeling more alert, active, and motivated as GH normalizes.' },
      { label: 'Improved Sleep Quality', description: 'Supports deeper, more restorative sleep — the cycle where GH is naturally released.' },
      { label: 'Sharper Mental Clarity & Mood', description: 'Reduces brain fog, boosts focus, and supports emotional well-being.' },
      { label: 'Stronger Immune Function', description: 'Elevated GH supports immune cell production and resilience to illness.' },
    ],
    whoFor: [
      'Adults experiencing age-related decline in energy or vitality',
      'Those seeking natural GH optimization without synthetic HGH',
      'Individuals with fatigue, poor sleep, or age-related weight gain',
      'Anyone wanting a safer, more balanced alternative to traditional HGH therapy',
      'Men and women pursuing comprehensive anti-aging support',
    ],
  },
  {
    id: 'selank',
    name: 'Selank',
    tagline: 'Anxiety Relief & Mental Clarity',
    headline: 'Clear the Fog. Calm the Mind.',
    color: '#5a4a9a',
    description:
      'Selank is a synthetic nootropic peptide designed to modulate key neurotransmitters — serotonin, dopamine, GABA, and norepinephrine — to support mental clarity, reduce anxious thinking, and promote emotional balance. Developed from tuftsin (a naturally occurring immune peptide), Selank works gradually without sedation, dependence, or the side effects common to conventional anxiety medications.',
    mechanism:
      'Selank influences the balance of neurotransmitter systems involved in stress response, mood regulation, and cognitive performance. It reduces the neurological burden of chronic stress and anxiety while sharpening focus and supporting emotional stability. Additionally, Selank demonstrates mild immunomodulatory and anti-inflammatory effects within the brain, protecting neurons from stress-related damage over time.',
    benefits: [
      { label: 'Boost Focus & Concentration', description: 'Sharpens cognitive performance and sustains attention under demanding conditions.' },
      { label: 'Reduce Stress & Anxiety', description: 'Modulates the stress response without sedation or dependency risk.' },
      { label: 'Emotional Balance & Mood Support', description: 'Promotes stable, positive mood through healthy neurotransmitter regulation.' },
      { label: 'Promote Brain Health', description: 'Exerts mild neuroprotective effects, supporting long-term cognitive resilience.' },
      { label: 'Mental Clarity Under Pressure', description: 'Helps professionals and students maintain clear thinking during high-demand periods.' },
      { label: 'No Dependence or Sedation', description: 'Works gradually without the risks associated with benzodiazepines or SSRIs.' },
    ],
    whoFor: [
      'Professionals managing workplace stress and mental fatigue',
      'Students experiencing anxiety that impairs focus or performance',
      'Anyone with frequent mood fluctuations or nervous tension',
      'Those seeking cognitive support without sedation or dependency',
      'Adults wanting proactive, long-term brain health protection',
    ],
  },
  {
    id: 'kpv',
    name: 'KPV',
    tagline: 'Anti-Inflammatory Gut & Immune Support',
    headline: 'Heal From the Inside Out.',
    color: '#1a6e52',
    description:
      'KPV is a short chain of amino acids derived from the larger hormone alpha-MSH, which regulates inflammation throughout the body. What makes KPV uniquely valuable is that it reduces inflammation without broadly suppressing the immune system — allowing the body to heal while maintaining its natural defenses. KPV addresses root-cause inflammation in the gut, joints, and tissues rather than simply masking symptoms.',
    mechanism:
      "KPV reduces key inflammatory markers including TNF-alpha and IL-6, the chemical signals that drive chronic inflammation and gut dysfunction. It actively protects and repairs the gut lining, preventing unwanted leakage that can trigger systemic inflammation. Simultaneously, it helps calibrate the immune response — calming overreactions while preserving the immune system's ability to respond to genuine threats.",
    benefits: [
      { label: 'Gut Lining Repair', description: 'Reduces intestinal inflammation and supports a healthy, intact gut barrier.' },
      { label: 'Reduced Gut Inflammation', description: 'Addresses IBS, bloating, and food sensitivities at the cellular level.' },
      { label: 'Balanced Immune Function', description: 'Calms overreacting immune responses without suppressing overall immune defense.' },
      { label: 'Improved Recovery', description: 'Supports muscle, joint, and tissue repair after exercise, illness, or injury.' },
      { label: 'Enhanced Physical Performance', description: 'Decreases oxidative stress and tissue inflammation for better sustained activity.' },
      { label: 'Anti-Aging Cellular Support', description: 'Protects skin and cells from oxidative damage that drives premature aging.' },
    ],
    whoFor: [
      'Those with gut issues such as IBS, bloating, or food sensitivities',
      'Individuals with autoimmune conditions or recurring illness',
      'Athletes recovering from injury, surgery, or intense training',
      'Anyone experiencing chronic fatigue or inflammation-related discomfort',
      'Those wanting to address the underlying cause of symptoms, not just mask them',
    ],
  },
  {
    id: 'mots-c',
    name: 'MOTS-c',
    tagline: 'Mitochondrial Energy & Metabolic Optimization',
    headline: 'Fuel Your Cells. Elevate Your Performance.',
    color: '#1e7a72',
    description:
      'MOTS-c is a naturally occurring peptide encoded directly by mitochondrial DNA — one of the few peptides with this origin. It plays a central role in how cells convert food into usable energy, regulate metabolism, and respond to stress. As mitochondrial function naturally declines with age, MOTS-c supplementation supports the cellular energy systems responsible for vitality, mental sharpness, and metabolic health.',
    mechanism:
      "MOTS-c activates AMPK, the body's master cellular energy sensor, to optimize how cells produce and utilize energy. It enhances mitochondrial efficiency, improves insulin sensitivity for better blood sugar regulation, promotes fat oxidation over glucose dependence, and reduces cellular inflammation that accumulates with aging. The result is more efficient energy production at the foundational level — without stimulants.",
    benefits: [
      { label: 'Sustained Energy Throughout the Day', description: 'Supports steady vitality from cellular energy optimization, not stimulants.' },
      { label: 'Enhanced Fat Burning & Weight Management', description: 'Improves fat oxidation and supports leaner body composition.' },
      { label: 'Improved Mental Clarity & Focus', description: 'Combat brain fog and maintain cognitive sharpness as mitochondrial function improves.' },
      { label: 'Faster Recovery from Exercise', description: 'Reduces inflammation and speeds recovery from workouts and physical activity.' },
      { label: 'Better Blood Sugar Control', description: 'Improves insulin sensitivity, helping prevent energy crashes and sugar cravings.' },
      { label: 'Cellular Health & Anti-Aging', description: 'Protects cells from damage, supports repair, and promotes longevity at the mitochondrial level.' },
    ],
    whoFor: [
      'Adults experiencing chronic fatigue or low energy',
      'Those with stubborn weight gain or metabolic resistance',
      'Anyone with brain fog or declining mental performance',
      'Individuals with blood sugar regulation concerns',
      'Adults noticing early signs of cellular aging seeking a longevity edge',
    ],
  },
]

const combinations = [
  {
    name: 'Weight Loss Stack',
    peptides: ['Tesamorelin', 'AOD-9604'],
    colors: ['#7a4fa0', '#a05a1a'],
    goal: 'Comprehensive Fat Loss',
    description:
      'Tesamorelin targets visceral adipose tissue through GH axis activation while AOD-9604 drives non-hormonal lipolysis and blocks new fat cell formation. Together they address both VAT reduction and systemic fat metabolism without hormonal disruption.',
    outcomes: [
      'Up to 18% visceral fat reduction (clinical data)',
      'Enhanced lipolysis in stubborn areas',
      'No IGF-1 elevation or blood sugar impact',
      'Preserves lean muscle throughout',
    ],
  },
  {
    name: 'Performance & Recovery Stack',
    peptides: ['CJC-1295 + Ipamorelin', 'BPC-157'],
    colors: ['#226d7a', '#1a7a5e'],
    goal: 'Muscle Growth & Injury Repair',
    description:
      'CJC-1295/Ipamorelin optimizes the GH axis for lean mass gain, fat metabolism, and deep sleep recovery. BPC-157 accelerates tissue repair at the cellular level — tendons, ligaments, gut lining — making this the go-to stack for athletes and post-surgical recovery.',
    outcomes: [
      'Accelerated soft tissue and tendon repair',
      'Amplified lean mass and strength gains',
      'Improved sleep quality and overnight recovery',
      'Reduced post-training inflammation',
    ],
  },
  {
    name: 'Cognitive & Mental Wellness Stack',
    peptides: ['Semax', 'Selank'],
    colors: ['#22b8d1', '#5a4a9a'],
    goal: 'Focus, Clarity & Stress Relief',
    description:
      'Semax elevates BDNF for enhanced cognitive performance and neuroprotection. Selank modulates serotonin, dopamine, and GABA to reduce anxious thinking and improve emotional stability. Combined, they sharpen performance while calming the noise that gets in the way.',
    outcomes: [
      'Enhanced focus and working memory',
      'Reduced anxiety without sedation or dependency',
      'Improved stress resilience and emotional balance',
      'Neuroprotection and long-term brain health',
    ],
  },
  {
    name: 'Anti-Aging & Longevity Stack',
    peptides: ['GHK-CU', 'Sermorelin'],
    colors: ['#8a5c3a', '#226d7a'],
    goal: 'Skin, Collagen & GH Restoration',
    description:
      'GHK-CU directly stimulates collagen and elastin synthesis, activates hair follicles, and repairs connective tissue. Sermorelin restores youthful growth hormone secretion through the pituitary. Together they address aging at both the structural tissue level and the hormonal root cause.',
    outcomes: [
      'Visible skin texture and firmness improvements',
      'Improved hair density and scalp health',
      'Restored energy and body composition',
      'Naturally elevated GH without synthetic hormones',
    ],
  },
  {
    name: 'Gut & Immune Stack',
    peptides: ['KPV', 'BPC-157'],
    colors: ['#1a6e52', '#1a7a5e'],
    goal: 'Gut Healing & Immune Balance',
    description:
      'KPV reduces TNF-alpha and IL-6 to calm gut inflammation and repair intestinal barrier integrity without suppressing immune function. BPC-157 accelerates mucosal healing and restores gut lining integrity. This combination addresses IBS, leaky gut, and inflammatory conditions at the cellular root.',
    outcomes: [
      'Repaired gut lining and reduced intestinal permeability',
      'Lowered systemic inflammatory markers',
      'Balanced immune response without immunosuppression',
      'Improved digestion, energy, and recovery',
    ],
  },
  {
    name: 'Metabolic Longevity Stack',
    peptides: ['MOTS-c', 'Tesamorelin'],
    colors: ['#1e7a72', '#7a4fa0'],
    goal: 'Cellular Energy & Metabolic Optimization',
    description:
      'MOTS-c activates AMPK to optimize mitochondrial energy production and insulin sensitivity at the cellular level. Tesamorelin reduces visceral fat and improves metabolic markers through GH axis activation. Together they target metabolism from both the cellular energy foundation and the hormonal fat-mobilization pathway.',
    outcomes: [
      'Sustained energy without stimulants',
      'Visceral fat reduction and improved triglycerides',
      'Better blood sugar regulation and insulin sensitivity',
      'Enhanced mental clarity and physical performance',
    ],
  },
]

const sciencePillars = [
  { area: 'Cognitive Enhancement',       desc: 'Semax — neuroprotection, BDNF, mental clarity',            color: '#22b8d1' },
  { area: 'Growth Hormone Optimization', desc: 'CJC-1295 + Ipamorelin — lean mass, recovery, anti-aging',   color: '#226d7a' },
  { area: 'Healing & Recovery',          desc: 'BPC-157 — tissue repair, gut integrity, anti-inflammation', color: '#1a7a5e' },
  { area: 'Visceral Fat Reduction',      desc: 'Tesamorelin — VAT targeting, metabolic optimization',       color: '#7a4fa0' },
  { area: 'Non-Hormonal Fat Loss',       desc: 'AOD-9604 — lipolysis, no IGF-1 impact, long-term use',     color: '#a05a1a' },
  { area: 'Skin & Tissue Rejuvenation',  desc: 'GHK-CU — collagen, wound healing, hair density',           color: '#8a5c3a' },
  { area: 'Natural GH Release',          desc: 'Sermorelin — pituitary-driven GH optimization',             color: '#226d7a' },
  { area: 'Anxiety Relief & Clarity',    desc: 'Selank — neurotransmitter balance, stress reduction',       color: '#5a4a9a' },
  { area: 'Gut & Immune Support',        desc: 'KPV — anti-inflammatory, gut lining repair',                color: '#1a6e52' },
  { area: 'Mitochondrial Energy',        desc: 'MOTS-c — cellular energy, metabolism, longevity',           color: '#1e7a72' },
]

const faqs = [
  {
    q: 'Are peptide therapies safe?',
    a: 'When prescribed and monitored by a licensed physician, peptide therapies have a strong safety profile. Victory Medical conducts thorough labs and health evaluations before initiating any protocol. All therapies are administered under direct physician supervision.',
  },
  {
    q: 'How are peptides administered?',
    a: 'Delivery varies by peptide and protocol. Semax is typically administered as a nasal spray. CJC-1295/Ipamorelin, Tesamorelin, and BPC-157 are most commonly given via subcutaneous injection. AOD-9604 can be administered subcutaneously or orally. Your provider will determine the optimal method.',
  },
  {
    q: 'How quickly will I notice results?',
    a: 'Semax users often report improved clarity and focus within days. CJC-1295/Ipamorelin results build over 4–12 weeks. Tesamorelin clinical trials show meaningful visceral fat reduction by 3–6 months. BPC-157 tissue repair effects are typically noticed within 2–4 weeks for acute injuries.',
  },
  {
    q: 'Do I need labs before starting?',
    a: 'Yes. Victory Medical requires baseline bloodwork before prescribing any peptide protocol. This ensures safety, establishes your baseline hormonal and metabolic profile, and allows us to track your progress and optimize dosing.',
  },
  {
    q: 'Can peptides be combined?',
    a: 'Yes — many protocols stack complementary peptides for enhanced outcomes. For example, AOD-9604 and Tesamorelin are frequently combined for comprehensive fat loss, while CJC-1295/Ipamorelin pairs well with BPC-157 for recovery-focused programs. Your physician will design the right combination for your goals.',
  },
  {
    q: 'Can peptides be combined with other treatments?',
    a: 'Peptide therapies often complement hormone replacement therapy, IV nutrition, medical weight loss programs, and other integrative protocols we offer at Victory Medical. Your physician will design a comprehensive plan tailored to your health goals.',
  },
]

export default function PeptidesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section
          aria-label="Peptide Therapy Overview"
          style={{
            backgroundColor: 'var(--dark-teal)',
            paddingTop: '160px',
            paddingBottom: '120px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div aria-hidden="true" style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 60% 70% at 80% 40%, rgba(34,184,209,0.09) 0%, transparent 55%), radial-gradient(ellipse 50% 50% at 10% 70%, rgba(34,184,209,0.05) 0%, transparent 55%)',
          }} />
          <div aria-hidden="true" style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(34,184,209,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(34,184,209,0.025) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            pointerEvents: 'none',
          }} />

          <div className="container" style={{ position: 'relative' }}>
            <div className="section-label" style={{ marginBottom: '16px' }}>
              Physician-Prescribed · Austin, TX
            </div>
            <h1 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)',
              fontWeight: 400,
              color: 'var(--white)',
              maxWidth: '700px',
              marginBottom: '28px',
              lineHeight: 1.1,
            }}>
              Peptide Therapy.{' '}
              <span style={{ color: 'var(--copper)' }}>Precision Medicine</span>{' '}
              for Peak Performance.
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--muted-text)',
              maxWidth: '560px',
              lineHeight: 1.75,
              marginBottom: '44px',
            }}>
              Peptides are short chains of amino acids that act as targeted biological messengers — signaling your body to repair tissue, optimize hormones, sharpen cognition, and recover faster. Victory Medical offers physician-supervised peptide protocols backed by clinical science.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '60px' }}>
              <a
                href="https://victory.janeapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label="Schedule a peptide therapy consultation (opens in new tab)"
              >
                Schedule a Consultation
              </a>
              <a href="#peptides" className="btn-outline" aria-label="Skip to peptide protocol list">
                Explore Peptides
              </a>
            </div>

            <div
              role="list"
              aria-label="Program highlights"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1px',
                backgroundColor: 'rgba(34,184,209,0.15)',
                border: '1px solid rgba(34,184,209,0.2)',
                borderRadius: '14px',
                overflow: 'hidden',
                maxWidth: '580px',
              }}
            >
              {[
                { stat: '10', label: 'Peptide Protocols' },
                { stat: '30+', label: 'Years Serving Austin' },
                { stat: 'MD', label: 'Supervised Therapy' },
              ].map((item) => (
                <div key={item.label} role="listitem" style={{ padding: '24px 20px', backgroundColor: 'var(--dark-teal)', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', color: 'var(--gold)', lineHeight: 1, marginBottom: '6px' }}>
                    {item.stat}
                  </div>
                  <div style={{ fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(26,58,71,0.55)', fontWeight: 600 }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Quick Nav ────────────────────────────────────────────────────── */}
        <nav
          aria-label="Jump to peptide section"
          style={{
            backgroundColor: 'var(--bg-primary)',
            borderTop: '1px solid var(--border-soft)',
            borderBottom: '1px solid var(--border-soft)',
            padding: '14px 0',
            position: 'sticky',
            top: '72px',
            zIndex: 10,
          }}
        >
          <div className="container">
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span
                aria-hidden="true"
                style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(26,58,71,0.45)', marginRight: '8px', fontWeight: 600 }}
              >
                Jump to:
              </span>
              {peptides.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  style={{
                    fontSize: '0.78rem',
                    padding: '5px 14px',
                    backgroundColor: 'rgba(34,184,209,0.07)',
                    border: '1px solid rgba(34,184,209,0.2)',
                    borderRadius: '20px',
                    color: 'var(--brand)',
                    textDecoration: 'none',
                    letterSpacing: '0.03em',
                    fontWeight: 600,
                    minHeight: '32px',
                    display: 'inline-flex',
                    alignItems: 'center',
                  }}
                >
                  {p.name}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* ── What Are Peptides ────────────────────────────────────────────── */}
        <section className="section" aria-labelledby="science-heading" style={{ backgroundColor: 'var(--teal)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
              <div>
                <div className="section-label" style={{ marginBottom: '16px' }}>The Science</div>
                <h2
                  id="science-heading"
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                    fontWeight: 400,
                    color: 'var(--white)',
                    marginBottom: '24px',
                    lineHeight: 1.2,
                  }}
                >
                  What Are Peptides,{' '}
                  <span style={{ color: 'var(--copper)' }}>and Why Do They Work?</span>
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--muted-text)', lineHeight: 1.8, marginBottom: '20px' }}>
                  Peptides are short sequences of amino acids — the same building blocks as proteins — that your body already produces naturally. They function as highly specific biological signals, binding to receptors and instructing cells to perform targeted actions: release a hormone, repair a tissue, protect a neuron.
                </p>
                <p style={{ fontSize: '1rem', color: 'var(--muted-text)', lineHeight: 1.8, marginBottom: '20px' }}>
                  As we age, natural peptide production declines. Therapeutic peptides restore these signals with precision, offering benefits that broad-spectrum hormone replacement cannot. Because peptides are small molecules that mimic the body&apos;s own communication system, they integrate naturally at the cellular level with a favorable safety profile.
                </p>
                <p style={{ fontSize: '1rem', color: 'var(--muted-text)', lineHeight: 1.8 }}>
                  At Victory Medical, every peptide protocol begins with comprehensive bloodwork and a physician consultation — ensuring the right peptide, the right dose, and the right timing for your biology.
                </p>
              </div>

              <ul aria-label="Peptide protocols overview" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {sciencePillars.map((item) => (
                  <li
                    key={item.area}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '13px 16px',
                      backgroundColor: 'rgba(26,58,71,0.03)',
                      border: '1px solid rgba(26,58,71,0.07)',
                      borderLeft: `3px solid ${item.color}`,
                      borderRadius: '8px',
                    }}
                  >
                    <div aria-hidden="true" style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: item.color, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--white)', fontWeight: 600, marginBottom: '2px' }}>{item.area}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--muted-text)' }}>{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Individual Peptide Sections ──────────────────────────────────── */}
        <div id="peptides">
          {peptides.map((peptide, idx) => (
            <section
              key={peptide.id}
              id={peptide.id}
              aria-labelledby={`peptide-heading-${peptide.id}`}
              className="section"
              style={{
                backgroundColor: idx % 2 === 0 ? 'var(--dark-teal)' : 'var(--teal)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '-80px',
                  right: idx % 2 === 0 ? '-120px' : 'auto',
                  left: idx % 2 !== 0 ? '-120px' : 'auto',
                  width: '400px',
                  height: '400px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${peptide.color}08 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }}
              />

              <div className="container" style={{ position: 'relative' }}>
                {/* header */}
                <div style={{ marginBottom: '52px', maxWidth: '720px' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '20px',
                    padding: '5px 14px',
                    backgroundColor: 'rgba(34,184,209,0.08)',
                    border: '1px solid rgba(34,184,209,0.2)',
                    borderRadius: '20px',
                  }}>
                    <div aria-hidden="true" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: peptide.color }} />
                    <span style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand)', fontWeight: 700 }}>
                      {peptide.tagline}
                    </span>
                  </div>

                  <h2
                    id={`peptide-heading-${peptide.id}`}
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      fontWeight: 400,
                      color: 'var(--white)',
                      marginBottom: '8px',
                      lineHeight: 1.1,
                    }}
                  >
                    {peptide.name}
                  </h2>
                  <p style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                    color: 'var(--copper)',
                    fontStyle: 'italic',
                    marginBottom: '28px',
                  }}>
                    {peptide.headline}
                  </p>
                  <p style={{ fontSize: '1rem', color: 'var(--muted-text)', lineHeight: 1.8, marginBottom: '20px' }}>
                    {peptide.description}
                  </p>

                  <div style={{
                    padding: '20px 24px',
                    backgroundColor: 'rgba(34,184,209,0.06)',
                    border: '1px solid rgba(34,184,209,0.15)',
                    borderRadius: '10px',
                    borderLeft: `3px solid ${peptide.color}`,
                  }}>
                    <div style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px', fontWeight: 700 }}>
                      How It Works
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted-text)', lineHeight: 1.75, margin: 0 }}>
                      {peptide.mechanism}
                    </p>
                  </div>
                </div>

                {/* benefits + who for */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', alignItems: 'start' }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--copper)', marginBottom: '20px', fontWeight: 700 }}>
                      Clinical Benefits
                    </div>
                    <ul
                      aria-label={`${peptide.name} benefits`}
                      style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '10px' }}
                    >
                      {peptide.benefits.map((b) => (
                        <li
                          key={b.label}
                          className="hover-card-copper"
                          style={{
                            padding: '16px 18px',
                            backgroundColor: 'rgba(26,58,71,0.04)',
                            border: '1px solid rgba(26,58,71,0.08)',
                            borderRadius: '8px',
                            display: 'flex',
                            gap: '12px',
                          }}
                        >
                          <div
                            aria-hidden="true"
                            style={{
                              width: '22px', height: '22px', borderRadius: '50%',
                              backgroundColor: 'rgba(34,184,209,0.12)',
                              border: '1px solid rgba(34,184,209,0.25)',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              flexShrink: 0, marginTop: '1px',
                            }}
                          >
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                              <path d="M2 5L4 7L8 3" stroke="var(--copper)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--white)', fontWeight: 600, marginBottom: '4px' }}>{b.label}</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--muted-text)', lineHeight: 1.6 }}>{b.description}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{
                    padding: '24px',
                    backgroundColor: 'rgba(26,58,71,0.04)',
                    border: '1px solid rgba(26,58,71,0.08)',
                    borderRadius: '12px',
                    position: 'sticky',
                    top: '140px',
                  }}>
                    <div style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px', fontWeight: 700 }}>
                      Who Benefits Most
                    </div>
                    <ul aria-label={`Who benefits from ${peptide.name}`} style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                      {peptide.whoFor.map((who) => (
                        <li key={who} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                          <span aria-hidden="true" style={{ color: 'var(--copper)', flexShrink: 0, marginTop: '2px', fontSize: '0.85rem' }}>▸</span>
                          <span style={{ fontSize: '0.875rem', color: 'var(--muted-text)', lineHeight: 1.5 }}>{who}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://victory.janeapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      aria-label={`Ask about ${peptide.name} therapy (opens in new tab)`}
                      style={{ display: 'block', textAlign: 'center', minHeight: '44px', lineHeight: '16px' }}
                    >
                      Ask About {peptide.name}
                    </a>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* ── Combination Protocols ────────────────────────────────────────── */}
        <section className="section" aria-labelledby="combos-heading" style={{ backgroundColor: 'var(--dark-teal)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div className="section-label" style={{ justifyContent: 'center', marginBottom: '16px' }}>
                Peptide Stacking
              </div>
              <h2
                id="combos-heading"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                  fontWeight: 400,
                  color: 'var(--white)',
                  marginBottom: '16px',
                }}
              >
                Combination Protocols for{' '}
                <span style={{ color: 'var(--copper)' }}>Enhanced Results</span>
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--muted-text)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.75 }}>
                Many peptides work synergistically — pairing complementary mechanisms to produce outcomes neither achieves alone. These are the most clinically effective combinations prescribed at Victory Medical.
              </p>
            </div>

            <ul
              aria-label="Peptide combination protocols"
              style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}
            >
              {combinations.map((combo) => (
                <li
                  key={combo.name}
                  className="hover-card-copper"
                  style={{
                    padding: '28px',
                    backgroundColor: 'rgba(26,58,71,0.04)',
                    border: '1px solid rgba(26,58,71,0.08)',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {combo.peptides.map((p, i) => (
                      <span
                        key={p}
                        style={{
                          fontSize: '0.7rem',
                          padding: '4px 10px',
                          backgroundColor: `${combo.colors[i]}12`,
                          border: `1px solid ${combo.colors[i]}35`,
                          borderRadius: '20px',
                          color: 'rgba(26,58,71,0.75)',
                          fontWeight: 600,
                          letterSpacing: '0.04em',
                        }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  <div>
                    <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px', fontWeight: 700 }}>
                      {combo.goal}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', fontWeight: 400, color: 'var(--white)', marginBottom: '10px' }}>
                      {combo.name}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted-text)', lineHeight: 1.75, margin: 0 }}>
                      {combo.description}
                    </p>
                  </div>

                  <ul aria-label={`${combo.name} outcomes`} style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {combo.outcomes.map((outcome) => (
                      <li key={outcome} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <span aria-hidden="true" style={{ color: 'var(--copper)', flexShrink: 0, fontSize: '0.8rem', marginTop: '3px' }}>▸</span>
                        <span style={{ fontSize: '0.83rem', color: 'var(--muted-text)', lineHeight: 1.5 }}>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted-text)', marginBottom: '24px' }}>
                Combination protocols are designed by your physician following comprehensive labs and a clinical evaluation.
              </p>
              <a
                href="https://victory.janeapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label="Discuss your peptide protocol with a physician (opens in new tab)"
              >
                Discuss Your Protocol
              </a>
            </div>
          </div>
        </section>

        {/* ── Process ──────────────────────────────────────────────────────── */}
        <section className="section" aria-labelledby="process-heading" style={{ backgroundColor: 'var(--teal)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div className="section-label" style={{ justifyContent: 'center', marginBottom: '16px' }}>Our Approach</div>
              <h2
                id="process-heading"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                  fontWeight: 400,
                  color: 'var(--white)',
                  marginBottom: '16px',
                }}
              >
                Your Peptide Journey at Victory Medical
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--muted-text)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.75 }}>
                Peptide therapy is not one-size-fits-all. Every protocol we prescribe is preceded by a thorough clinical evaluation and personalized to your physiology.
              </p>
            </div>

            <ol
              aria-label="Peptide therapy process steps"
              style={{
                listStyle: 'none',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1px',
                backgroundColor: 'rgba(26,58,71,0.08)',
                border: '1px solid rgba(26,58,71,0.1)',
                borderRadius: '14px',
                overflow: 'hidden',
              }}
            >
              {[
                { step: '01', title: 'Consultation', desc: 'A comprehensive visit with your Victory Medical physician to review goals, symptoms, and medical history.' },
                { step: '02', title: 'Labs & Evaluation', desc: 'Baseline bloodwork including hormonal panels, metabolic markers, and biomarkers relevant to your target peptide.' },
                { step: '03', title: 'Custom Protocol', desc: 'Your physician designs a personalized protocol: peptide selection, dosing, delivery method, and cycle length.' },
                { step: '04', title: 'Monitoring & Optimization', desc: 'Regular follow-ups and lab checks to assess response, adjust dosing, and ensure safety throughout your therapy.' },
              ].map((step) => (
                <li key={step.step} style={{ padding: '36px 28px', backgroundColor: 'var(--teal)' }}>
                  <div aria-hidden="true" style={{ fontFamily: 'var(--font-playfair)', fontSize: '2.5rem', color: 'rgba(34,184,209,0.35)', lineHeight: 1, marginBottom: '16px', fontWeight: 700 }}>
                    {step.step}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', fontWeight: 400, color: 'var(--white)', marginBottom: '12px' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted-text)', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section className="section" aria-labelledby="faq-heading" style={{ backgroundColor: 'var(--dark-teal)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}>
              <div style={{ position: 'sticky', top: '140px' }}>
                <div className="section-label" style={{ marginBottom: '16px' }}>FAQ</div>
                <h2
                  id="faq-heading"
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                    fontWeight: 400,
                    color: 'var(--white)',
                    marginBottom: '16px',
                    lineHeight: 1.2,
                  }}
                >
                  Common Questions About Peptide Therapy
                </h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted-text)', lineHeight: 1.7, marginBottom: '28px' }}>
                  Have more questions? Our team is happy to walk you through what to expect before your first appointment.
                </p>
                <a
                  href="tel:5124623627"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--copper)', textDecoration: 'none', fontWeight: 600 }}
                  aria-label="Call Victory Medical at (512) 462-3627"
                >
                  (512) 462-3627 →
                </a>
              </div>

              <dl style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '24px 28px',
                      backgroundColor: 'rgba(26,58,71,0.04)',
                      border: '1px solid rgba(26,58,71,0.08)',
                      borderRadius: '10px',
                    }}
                  >
                    <dt style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.05rem', fontWeight: 400, color: 'var(--white)', marginBottom: '10px' }}>
                      {faq.q}
                    </dt>
                    <dd style={{ fontSize: '0.9rem', color: 'var(--muted-text)', lineHeight: 1.75, margin: 0 }}>
                      {faq.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ── Disclaimer ───────────────────────────────────────────────────── */}
        <section
          aria-label="Medical disclaimer"
          style={{ backgroundColor: 'var(--teal)', padding: '40px 0', borderTop: '1px solid rgba(26,58,71,0.06)' }}
        >
          <div className="container">
            <p style={{ fontSize: '0.78rem', color: 'rgba(26,58,71,0.45)', lineHeight: 1.7, maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
              <strong style={{ color: 'rgba(26,58,71,0.6)', fontWeight: 600 }}>Medical Disclaimer:</strong>{' '}
              The information on this page is for educational purposes only and does not constitute medical advice. Peptide therapies are prescribed by licensed physicians following a clinical evaluation. Individual results vary. These statements have not been evaluated by the FDA. Peptide therapies are not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
