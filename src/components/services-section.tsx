'use client';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { InteractiveImage } from './interactive-image';

const services = [
  {
    title: 'Modular Kitchens',
    imageId: 'service-kitchens',
    description: 'Stylish modular kitchens designed for modern cooking lifestyles.',
    href: '/services/modular-kitchens'
  },
  {
    title: 'Wardrobes & Storage',
    imageId: 'service-wardrobes',
    description: 'Smart storage solutions maximizing space and bedroom organization.',
    href: '/services/wardrobes-bedroom-furniture'
  },
  {
    title: 'Home Interiors',
    imageId: 'service-interiors',
    description: 'Complete interior solutions creating personalized, functional living spaces.',
    href: '/services/complete-home-interiors'
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

const ServicesSection = () => {
  return (
    <motion.section
      id="services"
      className="bg-background py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container lg:max-w-[980px] px-4 md:px-6">
        <motion.div variants={itemVariants} className="text-center mb-8 md:mb-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl font-headline">
            Our Core Services
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-md text-muted-foreground">
            End-to-end solutions for your home, crafted with precision and care.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const image = PlaceHolderImages.find((img) => img.id === service.imageId);
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.1 }}
              >
                <Link href={service.href} className="group block">
                  <Card className="overflow-hidden rounded-lg shadow-sm transition-shadow duration-300 ease-out hover:shadow-xl">
                    <div className="aspect-[4/3] overflow-hidden">
                      {image && (
                        <InteractiveImage
                          src={image.imageUrl}
                          alt={image.description}
                          width={800}
                          height={600}
                          className="w-full h-full"
                          imageClassName="transition-transform duration-500 ease-out group-hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-md md:text-lg font-headline group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                      <p className="mt-1 text-muted-foreground md:text-[14px]">{service.description}</p>
                      <div className="mt-4 flex items-center text-primary font-medium">
                        <span>Explore</span>
                        <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
