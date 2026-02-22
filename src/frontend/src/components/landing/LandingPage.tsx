import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import SofaCleaningSection from './SofaCleaningSection';
import WaterJetFoamSection from './WaterJetFoamSection';
import BookingSection from './BookingSection';
import CoverageSection from './CoverageSection';
import ServiceAreasSection from '../ServiceAreasSection';
import LocalSeoPhrasesSection from './LocalSeoPhrasesSection';
import OurWorkSection from './OurWorkSection';
import LandingNav from './LandingNav';
import LandingFooter from './LandingFooter';
import FloatingWhatsAppButton from './FloatingWhatsAppButton';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <LandingNav />
      <HeroSection />
      <ServicesSection />
      <SofaCleaningSection />
      <WaterJetFoamSection />
      <BookingSection />
      <CoverageSection />
      <ServiceAreasSection />
      <LocalSeoPhrasesSection />
      <OurWorkSection />
      <LandingFooter />
      <FloatingWhatsAppButton />
    </div>
  );
}
