'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { renderCanvas } from '@/components/ui/canvas';
import { useGetStartedModal } from '@/hooks/use-get-started-modal';

const heroImages = PlaceHolderImages.filter((img) =>
  img.id.startsWith('hero-background')
);

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { setShowGetStartedModal } = useGetStartedModal();

  useEffect(() => {
    renderCanvas();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Changed to 5 seconds for a calmer feel
    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  const heroImage = heroImages[currentImageIndex];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
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
    <section className="relative h-[85vh] min-h-[600px] md:min-h-[calc(100vh-64px)] w-full overflow-hidden">
      <canvas
        className="absolute inset-0 z-20 pointer-events-none"
        id="canvas"
      ></canvas>
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container px-4 md:px-6">
          <motion.div
            className="max-w-3xl text-left text-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl font-headline leading-none md:leading-[1.05]"
              variants={itemVariants}
            >
              <span>Designed.</span><br />
              <span className="text-white/80">Built In-House.</span><br />
              <span>Lived In.</span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-xl text-md leading-8 text-gray-200/90"
              variants={itemVariants}
            >
              Custom interiors crafted in our own factory & designed for real homes.
            </motion.p>
            <motion.div
              className="mt-6 flex flex-col sm:flex-row items-start justify-start gap-4"
              variants={itemVariants}
            >
              <Button size="lg" className="w-full sm:w-auto" onClick={() => setShowGetStartedModal(true)}>
                Get Free Consultation
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white bg-transparent border-white/80 hover:bg-white hover:text-black w-full sm:w-auto">
                <Link href="/showrooms">Visit Experience Centers</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
