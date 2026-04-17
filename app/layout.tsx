import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
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
  title: 'Victory Medical | Complete Healthcare in Austin, TX',
  description: 'Victory Medical provides integrated primary care, urgent care, MedSpa, allergy treatment, ketamine therapy, and more in Austin and Westlake Hills, TX since 1996.',
  keywords: 'family practice Austin, urgent care Austin, medical spa Austin, allergy testing Austin, ketamine therapy Austin',
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
    medicalSpecialty: ['Family Practice', 'Urgent Care', 'Aesthetics', 'Mental Health', 'Allergy'],
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
        <MagneticCursor />
        <SocialProof />
        {children}
        <StickyBookingBar />
        <AIHealthChat />
      </body>
    </html>
  )
}
