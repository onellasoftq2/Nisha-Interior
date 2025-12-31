'use client';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const ConsultationCtaSection = () => {
    return (
        <motion.section
            id="contact"
            className="bg-secondary text-secondary-foreground relative overflow-hidden flex items-center justify-center py-16 md:py-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="container relative z-10 px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">

                    <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-6 text-center">
                        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl font-headline">
                            Let’s Design Your Home, Together
                        </h2>
                        <p className="mt-3 max-w-2xl mx-auto text-md text-muted-foreground">
                            Our design consultants are here to help you bring your vision to life.
                        </p>
                    </div>
                    <motion.div
                        className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
                    >
                        <Button size="lg" className="w-full sm:w-auto" asChild>
                            <Link href="tel:+919876543210">
                                <Phone /> Call Now
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto text-secondary-foreground border-secondary-foreground/50 hover:bg-secondary-foreground hover:text-secondary" asChild>
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
