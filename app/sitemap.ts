import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString()

  return [
    { url: 'https://victorymed.com/', lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://victorymed.com/about', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://victorymed.com/services', lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://victorymed.com/medspa', lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://victorymed.com/peptides', lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://victorymed.com/contact', lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://victorymed.com/locations', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://victorymed.com/locations/austin', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://victorymed.com/locations/westlake-hills', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://victorymed.com/locations/ben-white', lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://victorymed.com/blog', lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://victorymed.com/blog/ketamine-therapy-austin-what-to-expect', lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://victorymed.com/blog/harvard-allergy-protocol-explained', lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://victorymed.com/blog/medical-weight-loss-vs-diy-austin', lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://victorymed.com/blog/mdvip-concierge-medicine-worth-it', lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://victorymed.com/blog/coolsculpting-non-surgical-body-contouring', lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://victorymed.com/blog/peptide-therapy-austin-what-to-know', lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://victorymed.com/blog/semax-bpc-157-cognitive-recovery-peptides', lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://victorymed.com/insurance', lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://victorymed.com/mdvip', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://victorymed.com/reviews', lastModified, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
