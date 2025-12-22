'use client';

import { motion } from 'framer-motion';
import { Factory, Scissors, Store, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Highlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    icon: Factory,
    title: 'Own Manufacturing Factory',
    description: 'Ensuring quality control and timely delivery from our state-of-the-art facility.',
  },
  {
    icon: Scissors,
    title: 'Custom Size Furniture',
    description: 'Perfectly fitting furniture for your unique spaces, crafted to your exact specifications.',
  },
  {
    icon: Store,
    title: '4 Showrooms in Pune',
    description: 'Experience our craftsmanship firsthand at any of our conveniently located showrooms.',
  },
  {
    icon: Users,
    title: 'Interior Design Consultation',
    description: 'Our expert designers help you create a home that reflects your personal style.',
  },
];

const TrustHighlightsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="about" className="bg-background">
      <div className="container">
        <motion.div
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {highlights.map((highlight, index) => (
            <motion.div key={index} className="text-center" variants={itemVariants}>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <highlight.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-lg font-medium leading-6 text-foreground font-headline">
                {highlight.title}
              </h3>
              <p className="mt-2 text-base text-muted-foreground">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustHighlightsSection;
