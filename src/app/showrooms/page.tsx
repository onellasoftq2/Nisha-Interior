'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

const showrooms = [
  {
    name: 'Wakad Showroom',
    address: '123 Sunshine Plaza, Wakad, Pune, Maharashtra 411057',
    phone: '+91 123 456 7890',
  },
  {
    name: 'Kharadi Showroom',
    address: '456 Urban Square, Kharadi, Pune, Maharashtra 411014',
    phone: '+91 123 456 7891',
  },
  {
    name: 'New Kharadi Annex',
    address: '789 Galaxy Galleria, New Kharadi, Pune, Maharashtra 411014',
    phone: '+91 123 456 7892',
  },
  {
    name: 'Nanded City Hub',
    address: '101 Aspire Towers, Nanded City, Pune, Maharashtra 411041',
    phone: '+91 123 456 7893',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, duration: 0.4, ease: 'easeOut' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function ShowroomsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="py-16 md:py-24"
        >
          <div className="container text-center">
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline"
            >
              Visit Our Showrooms
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground"
            >
              Experience our craftsmanship and design philosophy in person. Our teams are ready to welcome you and discuss your vision.
            </motion.p>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="pb-24"
        >
          <div className="container">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {showrooms.map((showroom) => (
                <motion.div key={showroom.name} variants={itemVariants}>
                  <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-2">
                    <CardHeader>
                      <CardTitle className="font-headline text-2xl">{showroom.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-2">
                      <p className="text-muted-foreground">{showroom.address}</p>
                      <p className="text-sm text-muted-foreground">{showroom.phone}</p>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-2 pt-4">
                      <Button className="w-full">
                        <Phone className="mr-2" /> Call Now
                      </Button>
                      <Button variant="outline" className="w-full">
                        <MapPin className="mr-2" /> Directions
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
