'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Header from '@/components/header';
import Footer from '@/components/footer';

const services = [
  {
    id: 'modular-kitchens',
    title: 'Modular Kitchens',
    description: 'Experience the perfect blend of functionality and style with our custom modular kitchens. Designed for modern living, we create ergonomic spaces that make cooking a pleasure.',
    imageId: 'services-kitchens',
    imageAlt: 'Sleek and modern modular kitchen',
    cta: 'Explore Kitchen Designs',
  },
  {
    id: 'wardrobes-storage',
    title: 'Wardrobes & Storage',
    description: 'Maximize your space with intelligent and elegant storage solutions. Our custom wardrobes are designed to fit your lifestyle, offering a seamless blend of form and function.',
    imageId: 'services-wardrobes',
    imageAlt: 'Spacious and elegant wardrobe',
    cta: 'Discover Storage Solutions',
  },
  {
    id: 'complete-home-interiors',
    title: 'Complete Home Interiors',
    description: 'Transform your house into a dream home with our end-to-end interior design services. From concept to execution, we handle every detail to create a space that is uniquely yours.',
    imageId: 'services-interiors',
    imageAlt: 'Beautifully designed living room',
    cta: 'View Interior Projects',
  },
  {
    id: 'interior-design-consultation',
    title: 'Interior Design Consultation',
    description: 'Our expert designers work with you to bring your vision to life. We provide personalized consultations to help you create a home that reflects your taste and personality.',
    imageId: 'services-consultation',
    imageAlt: 'Interior designer consulting with a client',
    cta: 'Book a Consultation',
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
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
          className="py-16 md:py-24"
        >
          <div className="container text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
              Our Services
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              Crafting beautiful and functional spaces, tailored to your needs.
            </p>
          </div>
        </motion.section>

        <div className="container space-y-24 md:space-y-32 mb-24">
          {services.map((service, index) => {
            const image = PlaceHolderImages.find((img) => img.id === service.imageId);
            return (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
                className="grid grid-cols-1 items-center gap-12 md:grid-cols-2"
              >
                <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                  <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground">{service.description}</p>
                  <Button size="lg" variant="link" className="px-0 group">
                    {service.cta}
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Button>
                </div>
                <motion.div
                  variants={imageVariants}
                  className="rounded-lg overflow-hidden shadow-lg aspect-w-4 aspect-h-3"
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
