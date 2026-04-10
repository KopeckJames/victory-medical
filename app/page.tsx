import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServicesMarquee from '@/components/ServicesMarquee'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import TeamSection from '@/components/TeamSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import LocationsSection from '@/components/LocationsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesMarquee />
        <ServicesSection />
        <WhyChooseSection />
        <TeamSection />
        <TestimonialsSection />
        <LocationsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
