'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Building, Factory, Home, Quote } from 'lucide-react';
import { Separator } from './ui/separator';
import { useEffect, useRef } from 'react';

const testimonials = [
  {
    quote:
      'The attention to detail was remarkable. Our kitchen is now the heart of our home, both beautiful and incredibly functional. The team understood our vision perfectly.',
    name: 'Rohan & Priya Sharma',
    project: 'Modular Kitchen',
    location: 'Wakad, Pune',
  },
  {
    quote:
      'From design to handover, the process was seamless. Nisha Interior managed everything, and the quality of their in-house manufacturing is evident in every corner of our home.',
    name: 'Anjali Verma',
    project: 'Complete Home Interior',
    location: 'Kharadi, Pune',
  },
  {
    quote:
      'Our custom wardrobes are a dream come true. The team optimized the space brilliantly, and the finish is absolutely flawless. It’s beyond what we expected.',
    name: 'Sameer Patel',
    project: 'Wardrobes & Storage',
    location: 'Nanded City, Pune',
  },
  {
    quote:
      'As an architect, I appreciate their technical skill. The precision of the custom furniture built in their own factory is something you don’t find with aggregators.',
    name: 'Meera Desai',
    project: 'Custom Furniture',
    location: 'Pune',
  },
  {
    quote:
      'Visiting their experience center was a game-changer. Seeing the materials and quality in person gave us the confidence to go ahead. We couldn’t be happier with the result.',
    name: 'The Joshi Family',
    project: 'Complete Home Interior',
    location: 'Kharadi Annex, Pune',
  },
];

const metrics = [
    { icon: Award, value: 15, label: "Years of Experience", suffix: "+" },
    { icon: Home, value: 1200, label: "Homes Delivered", suffix: "+" },
    { icon: Building, value: 4, label: "Experience Centers" },
    { icon: Factory, value: 1, label: "In-House Factory" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const MetricCounter = ({ to, prefix = '', suffix = '' }: { to: number, prefix?: string, suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start({
        value: to,
        transition: { duration: 2, ease: "easeOut" },
      });
    }
  }, [isInView, to, controls]);

  return (
    <motion.div ref={ref}>
      <motion.span
        initial={{ value: 0 }}
        animate={controls}
        onUpdate={(latest) => {
          if (ref.current) {
            (ref.current as any).textContent = `${prefix}${Math.round(latest.value)}${suffix}`;
          }
        }}
      />
    </motion.div>
  );
};


const TestimonialsSection = () => {
  return (
    <motion.section
      className="bg-background py-16 md:py-24"
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

        <motion.div variants={itemVariants}>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    className="h-full p-1"
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <Card className="h-full bg-secondary/30 shadow-sm hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6 flex flex-col h-full">
                        <Quote className="w-8 h-8 text-primary/30 mb-4" />
                        <p className="flex-grow text-foreground/90 text-base mb-6">
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
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:inline-flex" />
            <CarouselNext className="hidden lg:inline-flex" />
          </Carousel>
        </motion.div>
        
        <motion.div 
            variants={itemVariants}
            className="mt-20"
        >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                 {metrics.map((metric, index) => (
                    <motion.div 
                        key={metric.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
                    >
                        <metric.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                        <div className="text-4xl md:text-5xl font-bold text-primary">
                          <MetricCounter to={metric.value} suffix={metric.suffix || ''} />
                        </div>
                        <p className="text-muted-foreground mt-1">{metric.label}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
