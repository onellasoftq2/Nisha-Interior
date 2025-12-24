'use client';

import { motion } from 'framer-motion';
import { Factory, Scissors, Store, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';

interface Highlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    icon: Factory,
    title: 'Own Manufacturing',
    description: 'Quality control and timely delivery from our state-of-the-art facility.',
  },
  {
    icon: Scissors,
    title: 'Custom Furniture',
    description: 'Perfectly fitting furniture for your unique spaces, crafted to your specifications.',
  },
  {
    icon: Store,
    title: '4 Pune Showrooms',
    description: 'Experience our craftsmanship firsthand at any of our convenient locations.',
  },
  {
    icon: Users,
    title: 'Expert Consultation',
    description: 'Our designers help you create a home that truly reflects your personal style.',
  },
];

const TrustHighlightsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="about" className="bg-secondary">
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {highlights.map((highlight) => (
            <motion.div key={highlight.title} variants={itemVariants}>
              <Card className="h-full text-center bg-background/50 border-0 shadow-sm transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1.5">
                <CardHeader className="items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <highlight.icon className="h-8 w-8" />
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-medium leading-6 text-foreground font-headline">
                    {highlight.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustHighlightsSection;
