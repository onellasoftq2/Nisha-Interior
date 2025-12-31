'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { InteractiveImage } from './interactive-image';
import { cn } from '@/lib/utils';

interface Highlight {
  id: string;
  imageId: string;
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    id: 'consultation',
    imageId: 'transform-living-base',
    title: 'Expert Consultation',
    description: 'Our experienced designers help you create a home that truly reflects your personal style and functional needs.',
  },
  {
    id: 'manufacturing',
    imageId: 'transform-living-sofa',
    title: 'Own Manufacturing',
    description: 'Quality control and timely delivery from our state-of-the-art facility gives you peace of mind and ensures perfection.',
  },
  {
    id: 'furniture',
    imageId: 'transform-living-storage',
    title: 'Custom Furniture',
    description: 'Perfectly fitting furniture for your unique spaces, crafted to your exact specifications for a truly bespoke home.',
  },
  {
    id: 'showrooms',
    imageId: 'transform-living-decor',
    title: '4 Pune Showrooms',
    description: 'Experience our craftsmanship firsthand at any of our convenient locations across Pune. See and feel the quality for yourself.',
  },
];

const imageLayers = [
  PlaceHolderImages.find((img) => img.id === 'transform-living-base'),
  PlaceHolderImages.find((img) => img.id === 'transform-living-sofa'),
  PlaceHolderImages.find((img) => img.id === 'transform-living-storage'),
  PlaceHolderImages.find((img) => img.id === 'transform-living-decor'),
].filter(Boolean) as any[];


const InteractiveHighlightsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const titleVariants = {
    inactive: { color: 'hsl(var(--muted-foreground))' },
    active: { color: 'hsl(var(--foreground))' },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 10, height: 0 },
    visible: { opacity: 1, y: 0, height: 'auto', transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, y: -10, height: 0, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeIn' } },
  };

  return (
    <section id="about" className="bg-background py-16 md:py-16">
      <div className="w-full px-4 sm:max-w-[700px] sm:mx-auto sm:px-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-8"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl font-headline">
            Why Choose Nisha Interior?
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-md text-muted-foreground">
            The four key pillars that define our commitment to excellence.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left Side - Titles */}
          <div className="relative flex flex-col justify-center gap-2 md:pt-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.id}
                onViewportEnter={() => setActiveIndex(index)}
                viewport={{ amount: 0.5 }}
                className="relative cursor-default p-4 rounded-lg h-[18rem] md:h-[24rem] flex flex-col justify-center"
              >
                <motion.h3
                  className="text-2xl sm:text-3xl font-semibold font-headline"
                  variants={titleVariants}
                  animate={activeIndex === index ? 'active' : 'inactive'}
                  initial={false}
                  transition={{ duration: 0.3 }}
                >
                  {highlight.title}
                </motion.h3>
                <AnimatePresence mode="wait">
                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: activeIndex === index ? 'auto' : 0, opacity: activeIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  >
                    <p className="text-muted-foreground mt-2 pr-4">
                      {highlight.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 h-full w-1 bg-primary"
                    layoutId="active-highlight-indicator"
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Side - Image */}
          <div className="hidden md:block sticky top-24 h-[330px]">
            <div className="relative w-[320px] h-[330px]">
              {imageLayers.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="absolute inset-0 w-[320px] h-[330px]"
                  variants={imageVariants}
                  initial="hidden"
                  animate={index <= activeIndex ? 'visible' : 'hidden'}
                >
                  <InteractiveImage
                    src={image.imageUrl}
                    alt={image.description}
                    width={320}
                    height={330}
                    className="w-[320px] h-[330px] object-cover"
                    data-ai-hint={image.imageHint}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveHighlightsSection;
