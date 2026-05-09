import type { NextConfig } from 'next'

// Old WordPress path → new Next.js path
// Each entry generates both /path and /path/ redirects
const legacyRoutes: [string, string][] = [
  // ── Clinical services (all consolidated under /services) ──────────────
  ['/family-practice',              '/services'],
  ['/preventative-care',            '/services'],
  ['/general-medical-care',         '/services'],
  ['/urgent-care',                  '/services'],
  ['/weight-loss',                  '/services'],
  ['/mammogram-screening',          '/services'],
  ['/allergy-services',             '/services'],
  ['/natural-hormone-replacement',  '/services'],
  ['/pharmacy',                     '/services'],
  ['/ketamine',                     '/services'],
  ['/physical-medicine',            '/services'],
  ['/chiropractic',                 '/services'],
  ['/physical-therapy',             '/services'],
  ['/telemedicine',                 '/services'],
  ['/remote-patient-monitoring',    '/services'],
  ['/victoryheartwise',             '/services'],
  ['/acupuncture',                  '/services'],

  // ── MedSpa (consolidated under /medspa) ──────────────────────────────
  ['/coolsculpting',                    '/medspa'],
  ['/medspa-austin',                    '/medspa'],
  ['/medspa-treatments',               '/medspa'],
  ['/medspa-specials',                  '/medspa'],
  ['/medspa-gallery',                   '/medspa'],
  ['/botox-and-dysport-in-austin',      '/medspa'],
  ['/medspa-injectables',               '/medspa'],
  ['/medspa-facials',                   '/medspa'],
  ['/medspa-chemical-peels-face',       '/medspa'],
  ['/medspa-laser-treatments-face',     '/medspa'],
  ['/medspa-prp-therapy',               '/medspa'],
  ['/medspa-fillers',                   '/medspa'],
  ['/medspa-pdo-threading-face',        '/medspa'],
  ['/medspa-microneedling',             '/medspa'],
  ['/scarlet-rf-microneedling-treatments', '/medspa'],
  ['/medspa-products',                  '/medspa'],
  ['/medspa-elta-md',                   '/medspa'],
  ['/medspa-image-skincare',            '/medspa'],
  ['/medspa-pca-skin',                  '/medspa'],
  ['/medspa-contact',                   '/contact'],

  // ── About / team ─────────────────────────────────────────────────────
  ['/our-team', '/about'],
  ['/careers',  '/about'],

  // ── Blog ──────────────────────────────────────────────────────────────
  ['/victoryblog', '/blog'],
  ['/podcasts',    '/blog'],

  // ── Contact ──────────────────────────────────────────────────────────
  ['/contact-us', '/contact'],

  // ── Patient resources → /insurance ───────────────────────────────────
  ['/patient-portals',   '/insurance'],
  ['/patient-forms',     '/insurance'],
  ['/patient-resources', '/insurance'],

  // ── MDVIP (same slug, only trailing-slash variant needed) ────────────
  ['/mdvip/', '/mdvip'],
]

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'victorymed.com' },
      { protocol: 'https', hostname: 'www.victorymed.com' },
      { protocol: 'https', hostname: 'thevictorymedspa.com' },
      { protocol: 'https', hostname: 'www.thevictorymedspa.com' },
      { protocol: 'https', hostname: 'www.priviahealth.com' },
    ],
  },

  async redirects() {
    const staticRedirects = legacyRoutes.flatMap(([source, destination]) => {
      // Already includes trailing slash (mdvip entry) — skip doubling it
      if (source.endsWith('/')) {
        return [{ source, destination, permanent: true }]
      }
      return [
        { source, destination, permanent: true },
        { source: `${source}/`, destination, permanent: true },
      ]
    })

    const blogRedirects = [
      // Preserve any ranked individual blog post URLs from old WordPress blog
      { source: '/victoryblog/:slug', destination: '/blog/:slug', permanent: true },
      { source: '/victoryblog/:slug/', destination: '/blog/:slug', permanent: true },
    ]

    return [...staticRedirects, ...blogRedirects]
  },
}

export default nextConfig
