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
import TransformationSection from '@/components/transformation-section';
const faqs = [
  {
    id: 1,
    question: "What is included in your interior service?",
    answer:
      "Our service covers everything from design consultation and space planning to manufacturing, delivery, and installation. This includes modular furniture, wardrobes, storage units, finishes, and on-site execution, ensuring a seamless end-to-end experience."
  },
  {
    id: 2,
    question: "How does the pricing work and is it fixed?",
    answer:
      "Pricing is based on your layout, material selections, finishes, and level of customization. After the design is finalized, we share a detailed quotation. Once approved, the price remains fixed unless you request design or material changes."
  },
  {
    id: 3,
    question: "How long does it take to complete a full home interior?",
    answer:
      "Most projects are completed within 6–8 weeks after design sign-off. Since manufacturing happens in our own factory, timelines are more predictable and delays are minimized."
  },
  {
    id: 4,
    question: "Can I customize sizes, materials, and finishes?",
    answer:
      "Yes. All furniture is made to measure in our factory. You can customize dimensions, materials, colors, hardware, and finishes to match your space and preferences."
  },
  {
    id: 5,
    question: "Do you handle installation and quality checks?",
    answer:
      "Yes. Our trained installation team handles on-site execution, followed by quality checks to ensure proper fit, finish, and functionality before final handover."
  },
  {
    id: 6,
    question: "What kind of warranty or support do you provide?",
    answer:
      "We provide a warranty on manufacturing and fittings, along with post-installation support. Our team is available for any service or adjustments required after handover."
  },
  {
    id: 7,
    question: "Can I proceed in phases instead of doing the full home at once?",
    answer:
      "Absolutely. Many clients choose to complete interiors room by room. We can plan and execute the project in phases based on your budget and timeline."
  },
  {
    id: 8,
    question: "How is your approach different from marketplace interior brands?",
    answer:
      "Unlike marketplace models, we design and manufacture in-house. This gives us better quality control, accurate sizing, fewer middlemen, transparent pricing, and consistent execution."
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
        <TransformationSection />
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
