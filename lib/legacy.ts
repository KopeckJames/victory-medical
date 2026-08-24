import fs from 'node:fs'
import path from 'node:path'

// Content cloned from the old WordPress site (see content/legacy/).
// Each page is served at its exact old URL so rankings carry over 1:1.

export type LegacyBlock = {
  t: 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'ul' | 'ol' | 'img' | 'cta' | 'quote' | 'video'
  text?: string
  html?: string
  items?: string[]
  src?: string
  alt?: string
  href?: string
}

export type LegacyPage = {
  slug: string
  path: string
  type: 'page' | 'post'
  metaTitle: string
  metaDescription: string
  h1: string | null
  datePublished: string | null
  dateModified: string | null
  blocks: LegacyBlock[]
}

export type LegacyIndexEntry = {
  slug: string
  path: string
  type: 'page' | 'post'
  category: string
  title: string
  metaTitle: string
  datePublished: string | null
  dateModified: string | null
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'legacy')

let indexCache: LegacyIndexEntry[] | null = null

export function getLegacyIndex(): LegacyIndexEntry[] {
  if (!indexCache) {
    indexCache = JSON.parse(
      fs.readFileSync(path.join(CONTENT_DIR, 'index.json'), 'utf-8')
    ) as LegacyIndexEntry[]
  }
  return indexCache
}

export function getLegacyPosts(): LegacyIndexEntry[] {
  return getLegacyIndex()
    .filter((e) => e.type === 'post')
    .sort((a, b) => (b.datePublished ?? '').localeCompare(a.datePublished ?? ''))
}

export function getLegacyPage(slug: string): LegacyPage | null {
  const entry = getLegacyIndex().find((e) => e.slug === slug)
  if (!entry) return null
  return JSON.parse(
    fs.readFileSync(path.join(CONTENT_DIR, `${slug}.json`), 'utf-8')
  ) as LegacyPage
}

export function formatLegacyDate(iso: string | null): string | null {
  if (!iso) return null
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return null
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
