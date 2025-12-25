'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface Highlight {
  id: string;
  imageId: string;
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    id: 'manufacturing',
    imageId: 'highlight-manufacturing',
    title: 'Own Manufacturing',
    description: 'Quality control and timely delivery from our state-of-the-art facility gives you peace of mind and ensures perfection.',
  },
  {
    id: 'furniture',
    imageId: 'highlight-furniture',
    title: 'Custom Furniture',
    description: 'Perfectly fitting furniture for your unique spaces, crafted to your exact specifications for a truly bespoke home.',
  },
  {
    id: 'showrooms',
    imageId: 'highlight-showrooms',
    title: '4 Pune Showrooms',
    description: 'Experience our craftsmanship firsthand at any of our convenient locations across Pune. See and feel the quality for yourself.',
  },
  {
    id: 'consultation',
    imageId: 'services-consultation',
    title: 'Expert Consultation',
    description: 'Our experienced designers help you create a home that truly reflects your personal style and functional needs.',
  },
];

const InteractiveHighlightsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeHighlight = highlights[activeIndex];
  const activeImage = PlaceHolderImages.find((img) => img.id === activeHighlight.imageId);

  const titleVariants = {
    inactive: { color: 'hsl(var(--muted-foreground))' },
    active: { color: 'hsl(var(--foreground))' },
  };
  
  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="bg-background py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
              Why Choose Nisha Interior?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              The four key pillars that define our commitment to excellence.
            </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center min-h-[30rem]">
          {/* Left Side - Titles */}
          <div className="relative flex flex-col justify-center gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.id}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className="relative cursor-pointer p-4 -m-4 rounded-lg"
                initial={{x: -20, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                viewport={{once: true, amount: 0.2}}
                transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.1 }}
              >
                <motion.h3
                  className="text-2xl sm:text-3xl font-semibold font-headline"
                  variants={titleVariants}
                  animate={activeIndex === index ? 'active' : 'inactive'}
                  initial={false}
                  transition={{duration: 0.3}}
                >
                  {highlight.title}
                </motion.h3>
                <AnimatePresence>
                  {activeIndex === index && (
                    <div className="block md:hidden mt-2">
                       <motion.p
                          className="text-muted-foreground"
                          variants={contentVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        >
                          {highlight.description}
                        </motion.p>
                    </div>
                  )}
                </AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 h-full w-1 bg-primary hidden md:block"
                    layoutId="active-highlight-indicator"
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Side - Content */}
          <div className="hidden md:flex flex-col items-start justify-center text-left min-h-[20rem] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col items-center justify-center text-center w-full"
              >
                {activeImage && (
                    <motion.div 
                        className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg mb-8"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        <Image
                            src={activeImage.imageUrl}
                            alt={activeImage.description}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            data-ai-hint={activeImage.imageHint}
                        />
                    </motion.div>
                )}
                <p className="text-xl text-foreground/90 leading-relaxed max-w-md">
                  {activeHighlight.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveHighlightsSection;
