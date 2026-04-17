import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServicesMarquee from '@/components/ServicesMarquee'
import StatsStrip from '@/components/StatsStrip'
import TreatmentShowcase from '@/components/TreatmentShowcase'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import ServiceFinder from '@/components/ServiceFinder'
import TeamSection from '@/components/TeamSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import LocationsSection from '@/components/LocationsSection'
import NewsletterSection from '@/components/NewsletterSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesMarquee />
        <StatsStrip />
        <TreatmentShowcase />
        <ServicesSection />
        <WhyChooseSection />
        <ServiceFinder />
        <TeamSection />
        <TestimonialsSection />
        <LocationsSection />
        <NewsletterSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
