import LandingNav from './LandingNav';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import CoverageSection from './CoverageSection';
import ServiceAreasSection from '../ServiceAreasSection';
import BookingSection from './BookingSection';
import LandingFooter from './LandingFooter';
import FloatingWhatsAppButton from './FloatingWhatsAppButton';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <LandingNav />
      <HeroSection />
      <ServicesSection />
      <CoverageSection />
      <ServiceAreasSection />
      <BookingSection />
      <LandingFooter />
      <FloatingWhatsAppButton />
    </div>
  );
}
