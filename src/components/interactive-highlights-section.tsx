'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, Scissors, Store, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Highlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    icon: Factory,
    title: 'Own Manufacturing',
    description: 'Quality control and timely delivery from our state-of-the-art facility gives you peace of mind and ensures perfection.',
  },
  {
    icon: Scissors,
    title: 'Custom Furniture',
    description: 'Perfectly fitting furniture for your unique spaces, crafted to your exact specifications for a truly bespoke home.',
  },
  {
    icon: Store,
    title: '4 Pune Showrooms',
    description: 'Experience our craftsmanship firsthand at any of our convenient locations across Pune. See and feel the quality for yourself.',
  },
  {
    icon: Users,
    title: 'Expert Consultation',
    description: 'Our experienced designers help you create a home that truly reflects your personal style and functional needs.',
  },
];

const InteractiveHighlightsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeHighlight = highlights[activeIndex];

  const titleVariants = {
    inactive: { color: 'hsl(var(--muted-foreground))' },
    active: { color: 'hsl(var(--foreground))' },
  };
  
  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center min-h-[30rem]">
          {/* Left Side - Titles */}
          <div className="space-y-4 md:space-y-0 relative">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline mb-8 md:hidden">Why Choose Us?</h2>
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className="relative cursor-pointer p-4 -m-4 md:p-6 md:-m-6 rounded-lg transition-colors duration-300"
              >
                <motion.h3
                  className="text-2xl sm:text-3xl font-bold font-headline"
                  variants={titleVariants}
                  animate={activeIndex === index ? 'active' : 'inactive'}
                  initial={false}
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
                className="flex flex-col items-center justify-center text-center max-w-sm mx-auto"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                  <activeHighlight.icon className="h-10 w-10" />
                </div>
                <p className="text-xl text-foreground leading-relaxed">
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
