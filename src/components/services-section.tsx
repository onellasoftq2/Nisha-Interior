'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
  {
    title: 'Modular Kitchens',
    imageId: 'service-kitchens',
    description: 'Ergonomic and stylish kitchens designed for modern living and culinary creativity.',
  },
  {
    title: 'Wardrobes & Storage',
    imageId: 'service-wardrobes',
    description: 'Smart storage solutions that maximize space and complement your bedroom aesthetics.',
  },
  {
    title: 'Complete Home Interiors',
    imageId: 'service-interiors',
    description: 'From concept to completion, we transform your house into a personalized dream home.',
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
      transition: { duration: 0.35, ease: 'easeOut' },
    },
  };

const ServicesSection = () => {
  return (
    <motion.section 
        id="services" 
        className="bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
    >
      <div className="container px-4 md:px-6">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We provide end-to-end solutions for your home interior needs.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const image = PlaceHolderImages.find((img) => img.id === service.imageId);
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <Card
                  className="group block overflow-hidden rounded-lg shadow-sm transition-all duration-350 ease-out hover:shadow-xl"
                >
                  <CardHeader className="p-0">
                    {image && (
                      <div className="overflow-hidden aspect-[4/3]">
                         <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={600}
                          height={450}
                          className="object-cover w-full h-full transition-transform duration-350 ease-out group-hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                    <p className="mt-2 text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
