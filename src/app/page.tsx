
'use client';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import InteractiveHighlightsSection from '@/components/interactive-highlights-section';
import ServicesSection from '@/components/services-section';
import CustomizationSection from '@/components/customization-section';
import ShowroomsSection from '@/components/showrooms-section';
import ConsultationCtaSection from '@/components/consultation-cta-section';
import Footer from '@/components/footer';
import TestimonialsSection from '@/components/testimonials-section';
import ScrollFAQAccordion from '@/components/ui/scroll-faq-accordion';

const faqs = [
    {
        id: 1,
        question: "How does your pricing work?",
        answer: "Our pricing is transparent and based on the materials, finishes, and complexity of your project. We provide a detailed quote after the design consultation, with no hidden costs. Because we own our factory, we can offer premium quality without the premium price tag."
    },
    {
        id: 2,
        question: "What is the typical timeline for a project?",
        answer: "A typical project, from design to handover, takes about 6-8 weeks. This includes design finalization, manufacturing in our factory, and on-site installation. We provide a more precise timeline once your design is confirmed."
    },
    {
        id: 3,
        question: "How much customization is possible?",
        answer: "Almost anything is possible. Since we manufacture everything in-house, we can customize dimensions to the millimeter, and you have a vast choice of materials, colors, and finishes. We build to fit your space and style perfectly."
    },
    {
        id: 4,
        question: "Can I just get a design consultation?",
        answer: "Absolutely. We offer a standalone Interior Design Consultation service where our experts help you refine your ideas, select materials, and create an actionable plan, whether you decide to proceed with us or not."
    },
    {
        id: 5,
        question: "Do I need to have a clear idea before the consultation?",
        answer: "Not at all! Many of our clients come to us with just a basic idea. Our designers are experts at helping you discover and refine your vision. The consultation is a collaborative process to explore possibilities."
    }
];


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <InteractiveHighlightsSection />
        <ServicesSection />
        <TestimonialsSection />
        <CustomizationSection />
        <ShowroomsSection />
        <ScrollFAQAccordion data={faqs} />
        <ConsultationCtaSection />
      </main>
      <Footer />
    </div>
  );
}
