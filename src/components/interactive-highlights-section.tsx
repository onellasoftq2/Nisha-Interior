'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { InteractiveImage } from './interactive-image';

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
    hidden: { opacity: 0, y: 10, height: 0 },
    visible: { opacity: 1, y: 0, height: 'auto', transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, y: -10, height: 0, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <section id="about" className="bg-background py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12 md:mb-16"
        >
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
              Why Choose Nisha Interior?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
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
                viewport={{ amount: 0.5, root: null }}
                className="relative cursor-default p-4 rounded-lg h-[18rem] md:h-[24rem] flex flex-col justify-center"
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
          <div className="hidden md:block sticky top-24 h-[calc(100vh-12rem)] min-h-[500px]">
            <AnimatePresence mode='wait'>
                {activeImage && (
                    <motion.div
                        key={activeIndex}
                        className="w-full h-full"
                        variants={imageContainerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <InteractiveImage
                            src={activeImage.imageUrl}
                            alt={activeImage.description}
                            width={800}
                            height={600}
                            className="w-full h-full"
                            data-ai-hint={activeImage.imageHint}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveHighlightsSection;
