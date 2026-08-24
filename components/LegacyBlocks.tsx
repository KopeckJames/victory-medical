import Link from 'next/link'
import type { LegacyBlock } from '@/lib/legacy'

// Renders content blocks extracted from the old WordPress pages in the
// new site's visual language. Styling lives in .legacy-body (see
// app/[slug]/page.tsx) so blocks stay markup-only.

function CtaLink({ href, text }: { href: string; text: string }) {
  const external = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')
  if (external) {
    return (
      <a href={href} className="btn-primary" target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {text}
      </a>
    )
  }
  return (
    <Link href={href} className="btn-primary">
      {text}
    </Link>
  )
}

export default function LegacyBlocks({ blocks }: { blocks: LegacyBlock[] }) {
  return (
    <div className="legacy-body">
      {blocks.map((b, i) => {
        switch (b.t) {
          case 'h2':
            return <h2 key={i}>{b.text}</h2>
          case 'h3':
            return <h3 key={i}>{b.text}</h3>
          case 'h4':
          case 'h5':
            return <h4 key={i}>{b.text}</h4>
          case 'p':
            return <p key={i} dangerouslySetInnerHTML={{ __html: b.html ?? '' }} />
          case 'ul':
            return (
              <ul key={i}>
                {b.items?.map((item, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            )
          case 'ol':
            return (
              <ol key={i}>
                {b.items?.map((item, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ol>
            )
          case 'img':
            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={b.src} alt={b.alt ?? ''} loading="lazy" className="legacy-img" />
            )
          case 'quote':
            return <blockquote key={i}>{b.text}</blockquote>
          case 'cta':
            return (
              <div key={i} className="legacy-cta">
                <CtaLink href={b.href ?? '/contact'} text={b.text ?? 'Contact Us'} />
              </div>
            )
          case 'video':
            return (
              <div key={i} className="legacy-video">
                <iframe src={b.src} title="Video" allowFullScreen loading="lazy" />
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
