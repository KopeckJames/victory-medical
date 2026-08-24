import type { MetadataRoute } from 'next'
import { getLegacyIndex } from '@/lib/legacy'

const BASE = 'https://victorymed.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString()

  const core: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/medspa`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/peptides`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/locations`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/locations/austin`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/locations/westlake-hills`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/locations/ben-white`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/blog/ketamine-therapy-austin-what-to-expect`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/blog/harvard-allergy-protocol-explained`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/blog/medical-weight-loss-vs-diy-austin`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/blog/mdvip-concierge-medicine-worth-it`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/blog/coolsculpting-non-surgical-body-contouring`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/insurance`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/mdvip`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/reviews`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
  ]

  // Every page cloned from the old site, at its exact old URL.
  const legacy: MetadataRoute.Sitemap = getLegacyIndex().map((e) => ({
    url: `${BASE}${e.path}`,
    lastModified: e.dateModified ?? lastModified,
    changeFrequency: 'monthly',
    priority: e.type === 'post' ? 0.5 : 0.6,
  }))

  return [...core, ...legacy]
}
