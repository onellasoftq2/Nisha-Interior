'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useRouter } from 'next/navigation';

const heroImages = PlaceHolderImages.filter((img) =>
  img.id.startsWith('hero-background')
);

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();

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
        delayChildren: 0.3,
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
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: [0.42, 0, 0.58, 1] } },
    exit: { opacity: 0, scale: 1.05, transition: { duration: 1.5, ease: [0.42, 0, 0.58, 1] } },
  };

  return (
    <section className="relative h-[calc(100vh-56px)] w-full overflow-hidden p-0">
      <div className="absolute inset-0">
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
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
      <div className="relative z-10 flex h-full items-center justify-center text-center md:items-end md:justify-start md:text-left">
        <div className="container px-4 md:px-6 pb-12 md:pb-24">
          <motion.div
            className="max-w-2xl text-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl font-headline"
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
              className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
              variants={itemVariants}
            >
              <Button
                size="lg"
                onClick={() => router.push('/contact')}
                className="w-full sm:w-auto"
              >
                Get Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => router.push('/showrooms')}
                className="border-white text-white bg-transparent hover:bg-white hover:text-black w-full sm:w-auto"
              >
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
