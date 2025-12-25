'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';

const services = [
  {
    id: 'modular-kitchens',
    title: 'Modular Kitchens',
    description: 'The heart of your home, reimagined. We create ergonomic, stylish kitchens that blend clever storage with a beautiful aesthetic, making your daily routines a joy.',
    imageId: 'services-kitchens',
    cta: 'Explore Kitchen Designs',
  },
  {
    id: 'wardrobes-storage',
    title: 'Wardrobes & Storage',
    description: 'Bring calm and order to your home with our intelligent storage solutions. From walk-in closets to sleek media units, we design storage that fits your life, not the other way around.',
    imageId: 'services-wardrobes',
    cta: 'Discover Storage Solutions',
  },
  {
    id: 'complete-home-interiors',
    title: 'Complete Home Interiors',
    description: 'A seamless journey from a blank canvas to your dream home. We manage every detail, ensuring a cohesive design that reflects your personality across every single room.',
    imageId: 'services-interiors',
    cta: 'View Interior Projects',
  },
  {
    id: 'interior-design-consultation',
    title: 'Interior Design Consultation',
    description: 'Have a vision but need a guide? Our expert designers partner with you to refine your ideas, select materials, and create a clear roadmap for your project.',
    imageId: 'services-consultation',
    cta: 'Book a Consultation',
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 0.2,
    },
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="pt-24 pb-16 md:pt-32 md:pb-24"
        >
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
              End-to-End Design Solutions
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              From a single room to a complete home makeover, we tailor our services to fit your unique needs, all backed by our own factory.
            </p>
          </div>
        </motion.section>

        <div className="container px-4 md:px-6 space-y-24 md:space-y-32 mb-24 md:mb-32">
          {services.map((service, index) => {
            const image = PlaceHolderImages.find((img) => img.id === service.imageId);
            return (
              <motion.div
                id={service.id}
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
                className="grid grid-cols-1 items-center gap-12 md:gap-16 md:grid-cols-2"
              >
                <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                  <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-headline">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground">{service.description}</p>
                   <Button size="lg" variant="link" className="px-0 group" asChild>
                     <Link href="/contact">
                        {service.cta}
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-2">→</span>
                     </Link>
                   </Button>
                </div>
                <motion.div
                  variants={imageVariants}
                  className="rounded-lg overflow-hidden shadow-xl aspect-w-4 aspect-h-3"
                >
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
