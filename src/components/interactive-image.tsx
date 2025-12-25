'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

type InteractiveImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imageClassName?: string;
  'data-ai-hint'?: string;
};

const revealVariants = {
  hidden: { opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' },
  visible: { 
    opacity: 1, 
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 0.7, ease: [0.45, 0, 0.55, 1], delay: 0.1 }
  },
};

export function InteractiveImage({ src, alt, width, height, className, imageClassName, 'data-ai-hint': aiHint }: InteractiveImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // A very subtle parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ['-2%', '2%']);

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn('group relative overflow-hidden rounded-lg shadow-lg', className)}
    >
      <motion.div 
        className="absolute inset-0"
        variants={revealVariants}
      >
        <motion.div 
          className="relative h-full w-full" 
          style={{ y }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={cn('h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105', imageClassName)}
            data-ai-hint={aiHint}
          />
          {/* Subtle texture overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[url('/grain.png')] bg-repeat opacity-15 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-20" />
        </motion.div>
      </motion.div>
       {/* Light and shadow effect on hover */}
      <motion.div 
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.2) 100%)',
        }}
      />
    </motion.div>
  );
}
