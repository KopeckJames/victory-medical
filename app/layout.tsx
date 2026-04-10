import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import PageTransition from '@/components/PageTransition'

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
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
