'use client';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const ConsultationCtaSection = () => {
  return (
    <motion.section 
        id="contact" 
        className="bg-secondary text-secondary-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
                className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl font-headline"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
            >
                Let’s Design Your Home, Together
            </motion.h2>
            <motion.p 
                className="mt-6 max-w-2xl mx-auto text-lg text-secondary-foreground/80"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
            >
                Ready to take the next step? Our design consultants are here to help you bring your vision to life.
            </motion.p>
            <motion.div 
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
            >
                <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary-hover" asChild>
                    <Link href="tel:+919876543210">
                        <Phone /> Call Now
                    </Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/80 text-white hover:bg-white hover:text-black" asChild>
                    <Link href="https://wa.me/919876543210" target="_blank">
                        <MessageCircle /> WhatsApp Us
                    </Link>
                </Button>
            </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ConsultationCtaSection;
