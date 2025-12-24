'use client';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { MapPin, Phone, ArrowRight } from 'lucide-react';

const showrooms = [
  { name: 'Wakad', address: '123 Sunshine Plaza, 411057' },
  { name: 'Kharadi', address: '456 Urban Square, 411014' },
  { name: 'New Kharadi', address: '789 Galaxy Galleria, 411014' },
  { name: 'Nanded City', address: '101 Aspire Towers, 411041' },
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
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

const cardHoverVariants = {
  rest: { y: 0, boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' },
  hover: { y: -6, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' },
};

const ShowroomsSection = () => {
  return (
    <motion.section
      id="showrooms"
      className="bg-secondary"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container px-4 md:px-6">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
            Visit Our Showrooms
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Experience our quality and designs in person. Find the Nisha Interior showroom nearest to you.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {showrooms.map((showroom) => (
            <motion.div
              key={showroom.name}
              variants={itemVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="relative"
            >
              <motion.div
                variants={cardHoverVariants}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="flex flex-col h-full rounded-lg bg-background/50 shadow-md border border-border/60 overflow-hidden"
              >
                <div className="flex-grow p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-headline mb-2">{showroom.name}</h3>
                    <p className="text-muted-foreground">{showroom.address}, Pune</p>
                  </div>
                  <div className="mt-8 space-y-3">
                    <Button variant="outline" className="w-full justify-between group bg-transparent border-foreground/20 hover:bg-background">
                      <span>Call Now</span>
                      <Phone className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                    <Button variant="outline" className="w-full justify-between group bg-transparent border-foreground/20 hover:bg-background">
                      <span>Get Directions</span>
                      <MapPin className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ShowroomsSection;
