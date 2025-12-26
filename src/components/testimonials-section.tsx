'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

// --- Types ---
interface Testimonial {
  id: number;
  quote: string;
  name: string;
  project: string;
  location: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
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
    quote: 'As an architect, I appreciate their technical skill. The precision of the custom furniture built in their own factory is something you don’t find with aggregators.',
    name: 'Meera Desai',
    project: 'Custom Furniture',
    location: 'Pune',
  },
  {
    id: 5,
    quote: 'Visiting their experience center was a game-changer. Seeing the materials and quality in person gave us the confidence to go ahead. We couldn’t be happier with the result.',
    name: 'The Joshi Family',
    project: 'Complete Home Interior',
    location: 'Kharadi Annex, Pune',
  },
  {
    id: 6,
    quote: 'The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.',
    name: 'Aliza Khan',
    project: 'Business Analyst',
    location: 'Pune',
  },
  {
    id: 7,
    quote: 'Our business functions improved with a user-friendly design and positive customer feedback.',
    name: 'Farhan Siddiqui',
    project: 'Marketing Director',
    location: 'Pune',
  },
  {
    id: 8,
    quote: 'They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.',
    name: 'Sana Sheikh',
    project: 'Sales Manager',
    location: 'Pune',
  },
  {
    id: 9,
    quote: 'Using this ERP, our online presence and conversions significantly improved, boosting business performance.',
    name: 'Hassan Ali',
    project: 'E-commerce Manager',
    location: 'Pune',
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ quote, name, project, location }, i) => (
                <motion.li 
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileFocus={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-8 rounded-2xl border border-white/10 shadow-lg max-w-xs w-full bg-secondary/40 backdrop-blur-sm transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-primary/30" 
                >
                  <blockquote className="m-0 p-0">
                    <Quote className="w-8 h-8 text-primary/30 mb-4" />
                    <p className="text-muted-foreground leading-relaxed font-normal m-0 transition-colors duration-300">
                      {quote}
                    </p>
                    <footer className="mt-6">
                      <div className="flex flex-col">
                        <cite className="font-semibold not-italic tracking-tight leading-5 text-foreground transition-colors duration-300">
                          {name}
                        </cite>
                        <span className="text-sm leading-5 tracking-tight text-muted-foreground mt-0.5 transition-colors duration-300">
                          {project} &bull; {location}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section 
      aria-labelledby="testimonials-heading"
      className="bg-background py-16 md:py-24 relative overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="container px-4 z-10 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-16 text-center">
          <h2 id="testimonials-heading" className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline transition-colors">
            Homes We’ve Been Trusted With
          </h2>
          <p className="text-center mt-4 text-muted-foreground text-lg leading-relaxed transition-colors">
            What our clients say about designing and building their homes with us.
          </p>
        </div>

        <div 
          className="flex justify-center gap-8 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={30} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={28} />
        </div>
      </motion.div>
    </section>
  );
};
