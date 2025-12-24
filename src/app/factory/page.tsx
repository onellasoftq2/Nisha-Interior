'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Ruler, CheckCircle, Gem } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Header from '@/components/header';
import Footer from '@/components/footer';

const features = [
  {
    icon: Ruler,
    title: 'Precision Sizing for a Perfect Fit',
    description: 'Our in-house manufacturing allows us to create furniture that fits your space with millimeter precision. No awkward gaps, no wasted space—just a flawless, integrated look.',
  },
  {
    icon: CheckCircle,
    title: 'Uncompromising Quality Control',
    description: 'We oversee every step of the production process, from sourcing premium materials to applying the final touches. This ensures your furniture meets the highest standards of quality and durability.',
  },
  {
    icon: Gem,
    title: 'Bespoke Finishes and Materials',
    description: 'Your vision is our blueprint. Choose from a curated selection of laminates, veneers, and finishes to create furniture that is a true reflection of your personal style.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function FactoryPage() {
  const factoryImage = PlaceHolderImages.find((img) => img.id === 'factory-process');
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="pt-24 pb-16 md:pt-32 md:pb-24"
        >
          <div className="container px-4 md:px-6 text-center">
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline"
            >
              Factory-Backed Precision
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground"
            >
              Our state-of-the-art factory is the heart of our operation, giving us unparalleled control over quality, customization, and delivery.
            </motion.p>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="py-16 md:py-24 border-t"
        >
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 items-center gap-16">
              <motion.div variants={itemVariants} className="space-y-8">
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-headline">
                  The Art of Custom Manufacturing
                </h2>
                <p className="text-lg text-muted-foreground">
                  Why settle for standard when you can have perfection? Our factory empowers us to move beyond one-size-fits-all solutions and create pieces that are truly made for you.
                </p>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-4"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut', delay: index * 0.1 } },
                      }}
                    >
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{feature.title}</h3>
                        <p className="mt-1 text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                variants={imageVariants}
                className="rounded-lg overflow-hidden shadow-xl aspect-w-4 aspect-h-3"
              >
                {factoryImage && (
                  <Image
                    src={factoryImage.imageUrl}
                    alt={factoryImage.description}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    data-ai-hint={factoryImage.imageHint}
                  />
                )}
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
