import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import TrustHighlightsSection from '@/components/trust-highlights-section';
import ServicesSection from '@/components/services-section';
import CustomizationSection from '@/components/customization-section';
import ShowroomsSection from '@/components/showrooms-section';
import ConsultationCtaSection from '@/components/consultation-cta-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustHighlightsSection />
        <ServicesSection />
        <CustomizationSection />
        <ShowroomsSection />
        <ConsultationCtaSection />
      </main>
      <Footer />
    </div>
  );
}
