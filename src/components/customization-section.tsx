'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.section 
      className="bg-secondary text-secondary-foreground py-20 md:py-32"
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
              Our own manufacturing unit gives us the unique ability to create furniture that fits your dimensions perfectly. No compromises, no wasted space—just flawless integration into your home.
            </p>
            <p className="text-lg text-secondary-foreground/80">
              From material selection to the final finish, we control every step of the process to ensure the highest quality standards.
            </p>
            <Button size="lg" asChild variant="outline" className="border-white/80 text-white hover:bg-white hover:text-black">
                <Link href="/factory">
                    Explore Our Factory
                </Link>
            </Button>
          </motion.div>
          <motion.div variants={imageVariants} className="rounded-lg overflow-hidden shadow-2xl">
            {customImage && (
              <Image
                src={customImage.imageUrl}
                alt={customImage.description}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                data-ai-hint={customImage.imageHint}
              />
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CustomizationSection;
