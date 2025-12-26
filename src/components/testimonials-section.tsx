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
        className="flex flex-col gap-8 pb-8 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ quote, name, project, location }, i) => (
                <li
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  className="group h-[300px] w-[320px] [perspective:1000px]"
                >
                  <div className="relative flex flex-col h-full rounded-[50px] bg-gradient-to-br from-secondary/40 to-background/30 shadow-2xl transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[box-shadow:rgba(0,0,0,0.3)_30px_50px_25px_-40px,rgba(0,0,0,0.1)_0px_25px_30px_0px] group-hover:[transform:rotate3d(1,1,0,15deg)]">
                    <div className="absolute inset-2 rounded-[40px] border-b border-l border-white/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm [transform-style:preserve-3d] [transform:translate3d(0,0,25px)]"></div>
                    
                    <div className="absolute top-0 right-0 [transform-style:preserve-3d]">
                      <div
                        className="absolute grid aspect-square w-[50px] place-content-center rounded-full bg-white/80 shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] transition-all duration-500 ease-in-out [transform:translate3d(0,0,90px)] group-hover:[transform:translate3d(0,0,120px)]"
                        style={{ top: "30px", right: "30px" }}
                      >
                         <Quote className="w-5 h-5 fill-black/80 stroke-none" />
                      </div>
                    </div>
                    
                    <div className="flex flex-col flex-1 p-8 [transform:translate3d(0,0,26px)]">
                      <div className="flex-1 pt-8">
                        <p className="text-foreground/80 text-lg leading-relaxed">
                          {quote}
                        </p>
                      </div>
                      <footer className="mt-auto flex-shrink-0">
                        <div className="flex flex-col">
                          <cite className="font-bold not-italic tracking-tight leading-5 text-foreground">
                            {name}
                          </cite>
                          <span className="text-sm leading-5 tracking-tight text-muted-foreground mt-0.5">
                            {project} &bull; {location}
                          </span>
                        </div>
                      </footer>
                    </div>
                  </div>
                </li>
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
