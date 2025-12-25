'use client';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { InteractiveImage } from './interactive-image';

const CustomizationSection = () => {
  const customImage = PlaceHolderImages.find((img) => img.id === 'customization-image');

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.section 
      className="bg-secondary text-secondary-foreground py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <motion.div variants={textVariants} className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-secondary-foreground sm:text-4xl md:text-5xl font-headline">
              Manufactured In-House.
              <br />
              Made for Your Exact Space.
            </h2>
            <p className="text-lg text-secondary-foreground/80">
              Our own factory gives us the unique ability to create furniture that fits your space to the millimeter. From material selection to final finish, we control every step to ensure superior quality and a perfect fit.
            </p>
            <Button size="lg" asChild variant="outline" className="border-secondary-foreground/50 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                <Link href="/factory">
                    Explore Our Factory
                </Link>
            </Button>
          </motion.div>
          <div className="aspect-video md:aspect-[4/3]">
            {customImage && (
              <InteractiveImage
                src={customImage.imageUrl}
                alt={customImage.description}
                width={800}
                height={600}
                className="w-full h-full"
                data-ai-hint={customImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CustomizationSection;
