'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './ui/button';
import { MapPin, Phone } from 'lucide-react';

const showrooms = [
  { name: 'Wakad', phone: '+91 123 456 7890' },
  { name: 'Kharadi', phone: '+91 123 456 7891' },
  { name: 'New Kharadi', phone: '+91 123 456 7892' },
  { name: 'Nanded City', phone: '+91 123 456 7893' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: 'easeOut' },
    },
  };

const ShowroomsSection = () => {
  return (
    <motion.section 
        id="showrooms" 
        className="bg-background"
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
            <motion.div key={showroom.name} variants={itemVariants}>
                <Card className="flex flex-col h-full rounded-lg shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1.5">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl text-center">{showroom.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow text-center">
                        <p className="text-muted-foreground">Pune, Maharashtra</p>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-2 p-4">
                        <Button className="w-full">
                        <Phone /> Call Now
                        </Button>
                        <Button variant="outline" className="w-full">
                        <MapPin /> Directions
                        </Button>
                    </CardFooter>
                </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ShowroomsSection;
