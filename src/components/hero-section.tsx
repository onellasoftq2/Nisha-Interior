'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImages = PlaceHolderImages.filter((img) =>
  img.id.startsWith('hero-background')
);

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  const heroImage = heroImages[currentImageIndex];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1, ease: 'easeInOut' } },
    exit: { opacity: 0, transition: { duration: 1, ease: 'easeInOut' } },
  };

  return (
    <section className="relative h-[calc(100vh-56px)] w-full overflow-hidden p-0">
      <AnimatePresence initial={false}>
        {heroImage && (
          <motion.div
            key={heroImage.id}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0"
          >
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority={currentImageIndex === 0}
              data-ai-hint={heroImage.imageHint}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full items-center">
        <div className="container px-4 md:px-6">
          <motion.div
            className="max-w-2xl text-left text-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-headline"
              variants={itemVariants}
            >
              Designed for Your Space. Crafted to Last.
            </motion.h1>
            <motion.p
              className="mt-6 text-lg leading-8 text-gray-200"
              variants={itemVariants}
            >
              Custom modular kitchens and interiors, manufactured in our own factory in Pune.
            </motion.p>
            <motion.div
              className="mt-10 flex items-center gap-x-6"
              variants={itemVariants}
            >
              <Button size="lg">Get Free Consultation</Button>
              <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-black">
                Visit Showrooms
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
