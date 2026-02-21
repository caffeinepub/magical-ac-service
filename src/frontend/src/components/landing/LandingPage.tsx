import LandingNav from './LandingNav';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import WaterJetFoamSection from './WaterJetFoamSection';
import SofaCleaningSection from './SofaCleaningSection';
import CoverageSection from './CoverageSection';
import ServiceAreasSection from '../ServiceAreasSection';
import LocalSeoPhrasesSection from './LocalSeoPhrasesSection';
import OurWorkSection from './OurWorkSection';
import BookingSection from './BookingSection';
import LandingFooter from './LandingFooter';
import FloatingWhatsAppButton from './FloatingWhatsAppButton';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-cyan-100 dark:from-gray-900 dark:via-cyan-950 dark:to-teal-950">
      <LandingNav />
      <HeroSection />
      <ServicesSection />
      <WaterJetFoamSection />
      <SofaCleaningSection />
      <CoverageSection />
      <ServiceAreasSection />
      <LocalSeoPhrasesSection />
      <OurWorkSection />
      <BookingSection />
      <LandingFooter />
      <FloatingWhatsAppButton />
    </div>
  );
}
