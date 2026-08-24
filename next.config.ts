import type { NextConfig } from 'next'
import { legacyRoutes } from './redirects'

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
    // Old WordPress URLs all carried trailing slashes. Next strips the slash
    // with its own 308 before this table is consulted, so only the bare form
    // can ever match — the old URL resolves via two permanent hops, which
    // Google consolidates fully.
    const staticRedirects = legacyRoutes.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }))

    const blogRedirects = [
      // Old WP posts lived at the root, not under /victoryblog — that prefix
      // only held the paginated index. Send anything under it to the blog hub
      // rather than minting /blog/:slug URLs that may not exist.
      { source: '/victoryblog/:path+', destination: '/blog', permanent: true },
    ]

    const hostRedirects = [
      // Old canonical host was www; new site is apex-canonical.
      {
        source: '/:path*',
        has: [{ type: 'host' as const, value: 'www.victorymed.com' }],
        destination: 'https://victorymed.com/:path*',
        permanent: true,
      },
    ]

    return [...hostRedirects, ...staticRedirects, ...blogRedirects]
  },
}

export default nextConfig
