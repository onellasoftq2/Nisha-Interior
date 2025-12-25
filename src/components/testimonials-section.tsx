'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, ArrowRight } from 'lucide-react';

const initialTestimonials = [
  {
    id: 1,
    quote: 'The attention to detail was remarkable. Our kitchen is now the heart of our home, both beautiful and incredibly functional. The team understood our vision perfectly.',
    name: 'Rohan & Priya Sharma',
    project: 'Modular Kitchen',
    location: 'Wakad, Pune',
  },
  {
    id: 2,
    quote: 'From design to handover, the process was seamless. Nisha Interior managed everything, and the quality of their in-house manufacturing is evident in every corner of our home.',
    name: 'Anjali Verma',
    project: 'Complete Home Interior',
    location: 'Kharadi, Pune',
  },
  {
    id: 3,
    quote: 'Our custom wardrobes are a dream come true. The team optimized the space brilliantly, and the finish is absolutely flawless. It’s beyond what we expected.',
    name: 'Sameer Patel',
    project: 'Wardrobes & Storage',
    location: 'Nanded City, Pune',
  },
   {
    id: 4,
    quote:
      'As an architect, I appreciate their technical skill. The precision of the custom furniture built in their own factory is something you don’t find with aggregators.',
    name: 'Meera Desai',
    project: 'Custom Furniture',
    location: 'Pune',
  },
  {
    id: 5,
    quote:
      'Visiting their experience center was a game-changer. Seeing the materials and quality in person gave us the confidence to go ahead. We couldn’t be happier with the result.',
    name: 'The Joshi Family',
    project: 'Complete Home Interior',
    location: 'Kharadi Annex, Pune',
  },
];


const positionStyles = [
  { scale: 1, y: 0, opacity: 1 },
  { scale: 0.95, y: -40, opacity: 1 },
  { scale: 0.9, y: -80, opacity: 1 },
  { scale: 0.85, y: -120, opacity: 0 },
]

const exitAnimation = {
  y: 100,
  opacity: 0,
  scale: 0.9,
  transition: {
    duration: 0.2,
    ease: 'easeIn',
  },
};


const enterAnimation = (index: number) => ({
  y: positionStyles[index].y,
  scale: positionStyles[index].scale,
  opacity: positionStyles[index].opacity,
  transition: {
    type: 'spring',
    duration: 0.6,
    bounce: 0.2,
  },
});

function TestimonialCardContent({ testimonial }: { testimonial: typeof initialTestimonials[0] }) {
  return (
    <Card className="h-full bg-secondary/50 shadow-sm border-none">
      <CardContent className="p-6 flex flex-col h-full">
        <Quote className="w-8 h-8 text-primary/30 mb-4" />
        <p className="flex-grow text-foreground/90 text-base md:text-lg mb-6">
          "{testimonial.quote}"
        </p>
        <div className="text-right">
          <p className="font-semibold text-foreground">
            {testimonial.name}
          </p>
          <p className="text-sm text-muted-foreground">
            {testimonial.project} • {testimonial.location}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function AnimatedCard({
  testimonial,
  index,
}: {
  testimonial: typeof initialTestimonials[0]
  index: number
}) {
  const style = positionStyles[index] ?? positionStyles[positionStyles.length - 1];
  const zIndex = 3 - index

  return (
    <motion.div
      key={testimonial.id}
      initial={{ y: 0, scale: style.scale, opacity: 0 }}
      animate={enterAnimation(index)}
      exit={exitAnimation}
      style={{
        zIndex,
        left: "50%",
        x: "-50%",
        bottom: 0,
      }}
      className="absolute flex h-[320px] w-[90%] max-w-[500px] items-center justify-center overflow-hidden will-change-transform"
    >
      <TestimonialCardContent testimonial={testimonial} />
    </motion.div>
  )
}

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [nextId, setNextId] = useState(initialTestimonials.length + 1);

  const handleNext = () => {
    const newTestimonial = { 
        ...initialTestimonials[(nextId - 1) % initialTestimonials.length], 
        id: nextId 
    };

    setTestimonials((prev) => [...prev.slice(1), newTestimonial]);
    setNextId((prev) => prev + 1);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };


  return (
     <motion.section
      className="bg-background py-16 md:py-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container px-4 md:px-6">
        <motion.div
          variants={itemVariants}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
            Homes We’ve Been Trusted With
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            What our clients say about designing and building their homes with us.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex w-full flex-col items-center justify-center pt-2">
            <div className="relative h-[360px] w-full max-w-[644px]">
                <AnimatePresence initial={false}>
                {testimonials.slice(0, 3).map((testimonial, index) => (
                    <AnimatedCard key={testimonial.id} testimonial={testimonial} index={index} />
                ))}
                </AnimatePresence>
            </div>

            <div className="relative z-10 mt-6 flex w-full items-center justify-center">
                <button
                    onClick={handleNext}
                    className="flex h-11 cursor-pointer select-none items-center justify-center gap-2 overflow-hidden rounded-md border bg-card px-4 py-2 font-medium text-foreground transition-all hover:bg-secondary/80 active:scale-[0.98] shadow-sm"
                >
                    Next Review <ArrowRight className="h-4 w-4" />
                </button>
            </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
