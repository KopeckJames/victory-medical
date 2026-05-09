import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import MagneticCursor from '@/components/MagneticCursor'
import SocialProof from '@/components/SocialProof'
import AIHealthChat from '@/components/AIHealthChat'
import StickyBookingBar from '@/components/StickyBookingBar'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://victorymed.com'),
  title: {
    default: 'Victory Medical | Complete Healthcare in Austin, TX',
    template: '%s | Victory Medical Austin TX',
  },
  description: 'Victory Medical provides integrated primary care, urgent care, MedSpa, allergy treatment, ketamine therapy, peptide therapy, and more in Austin and Westlake Hills, TX since 1996.',
  keywords: 'family practice Austin, urgent care Austin, medical spa Austin, allergy testing Austin, ketamine therapy Austin, peptide therapy Austin, Semax Austin, BPC-157 Austin, Sermorelin Austin, regenerative medicine Austin',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    siteName: 'Victory Medical',
    locale: 'en_US',
    type: 'website',
    url: 'https://victorymed.com',
    title: 'Victory Medical | Complete Healthcare in Austin, TX',
    description: 'Victory Medical provides integrated primary care, urgent care, MedSpa, allergy treatment, ketamine therapy, peptide therapy, and more in Austin and Westlake Hills, TX since 1996.',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Victory Medical — Complete Healthcare in Austin, TX' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Victory Medical | Complete Healthcare in Austin, TX',
    description: 'Victory Medical provides integrated primary care, urgent care, MedSpa, allergy treatment, ketamine therapy, peptide therapy, and more in Austin and Westlake Hills, TX since 1996.',
    images: ['/og-default.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Victory Medical',
    description: 'Comprehensive healthcare in Austin and Westlake Hills, TX since 1996.',
    url: 'https://victorymed.com',
    telephone: '+15124623627',
    email: 'info@victorymed.com',
    foundingDate: '1996',
    medicalSpecialty: ['Family Practice', 'Urgent Care', 'Aesthetics', 'Mental Health', 'Allergy', 'Regenerative Medicine', 'Peptide Therapy'],
    location: [
      {
        '@type': 'MedicalClinic',
        name: 'Victory Medical Main',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '4303 Victory Drive',
          addressLocality: 'Austin',
          addressRegion: 'TX',
          postalCode: '78704',
        },
      },
      {
        '@type': 'MedicalClinic',
        name: 'Victory Westlake Hills',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '3811 Bee Caves Rd',
          addressLocality: 'Westlake Hills',
          addressRegion: 'TX',
          postalCode: '78746',
        },
      },
      {
        '@type': 'MedicalClinic',
        name: 'Victory MedSpa',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '2108 W Ben White Blvd',
          addressLocality: 'Austin',
          addressRegion: 'TX',
          postalCode: '78704',
        },
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.1',
      reviewCount: '341',
    },
  }

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <MagneticCursor />
        <SocialProof />
        <div id="main-content">{children}</div>
        <StickyBookingBar />
        <AIHealthChat />
        <Analytics />
      </body>
    </html>
  )
}
