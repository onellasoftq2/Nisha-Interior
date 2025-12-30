'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useGetStartedModal } from '@/hooks/use-get-started-modal';
import { Button } from './ui/button';
import { Phone } from 'lucide-react';
import { WhatsappIcon } from './icons/whatsapp-icon';
import Link from 'next/link';
import { LogoIcon } from './icons/logo-icon';

const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: 'easeIn' } },
};

export const GetStartedModalProvider = ({ children }: { children: React.ReactNode }) => {
  const { showModal, setShowGetStartedModal } = useGetStartedModal();

  const handleClose = () => {
    setShowGetStartedModal(false);
  };
  
  return (
      <>
        {children}
        <Dialog open={showModal} onOpenChange={handleClose}>
        <AnimatePresence>
        {showModal && (
            <DialogContent className="max-w-md p-0 border-0 shadow-2xl bg-background overflow-hidden" asChild>
                 <motion.div
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                 >
                    <div className="p-8 text-center flex flex-col items-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                            <LogoIcon className="h-8 w-8" />
                        </div>
                        <h2 className="text-2xl font-semibold font-headline mb-4 text-foreground">Let's build your dream home.</h2>
                        <p className="text-muted-foreground mb-8">
                            Ready to start the conversation? Reach out to our expert design consultants today. We're excited to hear your ideas.
                        </p>
                        <div className="w-full space-y-4">
                             <Button asChild size="lg" className="w-full text-lg">
                                <Link href="tel:+919561311757">
                                    <Phone className="mr-3" /> Call Now
                                </Link>
                            </Button>
                             <Button asChild size="lg" variant="outline" className="w-full text-lg border-foreground/30">
                                <Link href="https://wa.me/919561311757" target="_blank">
                                    <WhatsappIcon className="mr-3" /> WhatsApp Us
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </DialogContent>
        )}
        </AnimatePresence>
      </Dialog>
    </>
  );
};
