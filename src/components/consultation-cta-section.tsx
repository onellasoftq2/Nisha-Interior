'use client';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Phone } from 'lucide-react';
import { WhatsappIcon } from './icons/whatsapp-icon';

const ConsultationCtaSection = () => {
  return (
    <section id="contact" className="bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
            Let’s Design Your Home, Together
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Ready to take the next step? Our design consultants are here to help you bring your vision to life.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="w-full sm:w-auto">
                        <Phone /> Call Now
                    </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-foreground/20 hover:bg-background">
                        <WhatsappIcon className="mr-2 h-5 w-5" /> WhatsApp Us
                    </Button>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCtaSection;
