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
import SectionDivider from '@/components/SectionDivider'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesMarquee />
        <StatsStrip />
        <SectionDivider fromColor="var(--dark-teal)" toColor="var(--teal)" />
        <TreatmentShowcase />
        <ServicesSection />
        <SectionDivider fromColor="var(--teal)" toColor="var(--dark-teal)" flip />
        <WhyChooseSection />
        <ServiceFinder />
        <TeamSection />
        <SectionDivider fromColor="var(--teal)" toColor="var(--dark-teal)" />
        <TestimonialsSection />
        <LocationsSection />
        <NewsletterSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
