'use client';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Gravity, MatterBody } from './ui/gravity';

const words = [
    { text: 'Design', x: '20%', y: '15%', angle: -15, className: 'bg-primary text-primary-foreground' },
    { text: 'Craft', x: '80%', y: '20%', angle: 10, className: 'bg-foreground text-background' },
    { text: 'Quality', x: '50%', y: '10%', angle: 5, className: 'bg-background text-foreground border' },
    { text: 'Beauty', x: '15%', y: '40%', angle: 15, className: 'bg-primary/80 text-primary-foreground' },
    { text: 'Trust', x: '85%', y: '45%', angle: -10, className: 'bg-foreground/90 text-background' },
];

const ConsultationCtaSection = () => {
  return (
    <motion.section 
        id="contact" 
        className="bg-secondary text-secondary-foreground relative overflow-hidden min-h-[500px] flex items-center justify-center py-24 md:py-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
       <Gravity gravity={{ x: 0, y: 0.4 }} className="w-full h-full">
            {words.map((word) => (
                <MatterBody
                    key={word.text}
                    x={word.x}
                    y={word.y}
                    angle={word.angle}
                    matterBodyOptions={{ friction: 0.1, restitution: 0.6 }}
                >
                    <div className={`text-sm md:text-base rounded-full hover:cursor-grab px-5 py-2 font-semibold select-none ${word.className}`}>
                        {word.text}
                    </div>
                </MatterBody>
            ))}
        </Gravity>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
                className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl font-headline"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
            >
                Let’s Design Your Home, Together
            </motion.h2>
            <motion.p 
                className="mt-6 max-w-2xl mx-auto text-lg text-secondary-foreground/80"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
            >
                Ready to take the next step? Our design consultants are here to help you bring your vision to life.
            </motion.p>
            <motion.div 
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
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
