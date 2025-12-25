'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useBookingModal } from '@/hooks/use-booking-modal';
import { Button } from './ui/button';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Calendar } from './ui/calendar';
import { CheckCircle2, DraftingCompass, Home, Users, Video } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = ['Type', 'Interest', 'Schedule', 'Confirmed'];

const consultationTypes = [
  { id: 'video', label: 'Video Consultation', icon: Video },
  { id: 'in-person', label: 'In-Person (Experience Center)', icon: Users },
];

const areasOfInterest = [
  { id: 'kitchen', label: 'Modular Kitchen' },
  { id: 'wardrobes', label: 'Wardrobes & Storage' },
  { id: 'full-home', label: 'Complete Home Interiors' },
  { id: 'custom-furniture', label: 'Custom Furniture' },
];

const timeSlots = [
  "09:00 AM - 09:45 AM",
  "10:00 AM - 10:45 AM",
  "11:00 AM - 11:45 AM",
  "02:00 PM - 02:45 PM",
  "03:00 PM - 03:45 PM",
  "04:00 PM - 04:45 PM",
];

const modalVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.96, transition: { duration: 0.2, ease: 'easeIn' } },
};

export const BookingModalProvider = ({ children }: { children: React.ReactNode }) => {
  const { showModal, setShowBookingModal } = useBookingModal();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: '',
    interest: '',
    date: new Date(),
    time: '',
  });

  const handleNext = () => setStep((s) => Math.min(s + 1, steps.length));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));
  const handleClose = () => {
    setShowBookingModal(false);
    // Reset after a delay to allow for exit animation
    setTimeout(() => {
        setStep(1);
        setFormData({ type: '', interest: '', date: new Date(), time: '' });
    }, 300);
  };
  
  const renderStep = () => {
    switch (step) {
      case 1: // Consultation Type
        return (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-2xl font-semibold font-headline mb-6 text-center">How would you like to consult?</h2>
                <RadioGroup
                    value={formData.type}
                    onValueChange={(value) => setFormData({ ...formData, type: value })}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    {consultationTypes.map(({ id, label, icon: Icon }) => (
                    <Label
                        key={id}
                        htmlFor={id}
                        className={cn(
                        "flex flex-col items-center justify-center p-6 rounded-lg border-2 cursor-pointer transition-all duration-300",
                        formData.type === id ? "bg-primary/10 border-primary shadow-md" : "bg-secondary/50 border-secondary hover:border-primary/50",
                        "motion-safe:hover:-translate-y-1"
                        )}
                    >
                        <RadioGroupItem value={id} id={id} className="sr-only" />
                        <Icon className={cn("h-10 w-10 mb-3", formData.type === id ? "text-primary" : "text-muted-foreground")} />
                        <span className="font-semibold text-center">{label}</span>
                    </Label>
                    ))}
                </RadioGroup>
          </motion.div>
        );
      case 2: // Area of Interest
        return (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-2xl font-semibold font-headline mb-6 text-center">What is your area of interest?</h2>
                 <div className="grid grid-cols-2 gap-4">
                    {areasOfInterest.map((area) => (
                        <Button
                            key={area.id}
                            variant={formData.interest === area.id ? 'default' : 'outline'}
                            onClick={() => setFormData({ ...formData, interest: area.id })}
                            className="h-auto py-4 text-base justify-start"
                        >
                           {area.label}
                        </Button>
                    ))}
                </div>
            </motion.div>
        );
      case 3: // Schedule
        return (
          <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h2 className="text-2xl font-semibold font-headline mb-6 text-center">Select a Date & Time</h2>
            <p className="text-muted-foreground text-center mb-6 -mt-4">All times are in your local timezone.</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex justify-center">
                 <Calendar
                    mode="single"
                    selected={formData.date}
                    onSelect={(date) => setFormData({ ...formData, date: date || new Date() })}
                    disabled={(date) => date < new Date(new Date().toDateString())}
                    className="rounded-md border"
                    />
              </div>
              <div className="grid grid-cols-2 gap-2 content-start">
                  {timeSlots.map(slot => (
                      <Button 
                        key={slot}
                        variant={formData.time === slot ? 'default' : 'outline'}
                        onClick={() => setFormData({ ...formData, time: slot })}
                        className="transition-all duration-200 ease-out motion-safe:hover:shadow-md"
                      >
                        {slot}
                      </Button>
                  ))}
              </div>
            </div>
          </motion.div>
        );
      case 4: // Confirmed
        return (
          <motion.div key="step4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center flex flex-col items-center justify-center p-8">
            <CheckCircle2 className="h-16 w-16 text-green-500 mb-6" />
            <h2 className="text-2xl font-semibold font-headline text-foreground">Consultation Booked!</h2>
            <p className="text-muted-foreground mt-2 max-w-md mx-auto">
              A designer will connect with you at your selected time. A meeting link will be sent to you via email and SMS shortly.
            </p>
            <div className="mt-6 text-left bg-secondary/50 rounded-lg p-4 w-full max-w-sm">
                <p><strong>Type:</strong> {formData.type === 'video' ? 'Video Consultation' : 'In-Person'}</p>
                <p><strong>Interest:</strong> {areasOfInterest.find(a => a.id === formData.interest)?.label}</p>
                <p><strong>Date:</strong> {formData.date.toLocaleDateString()}</p>
                <p><strong>Time:</strong> {formData.time}</p>
            </div>
             <p className="text-sm text-muted-foreground mt-8 max-w-md mx-auto">
                <strong>To prepare:</strong> Collect a few reference images and have a rough idea of your space dimensions. This will help our designer guide you better.
            </p>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
      <>
        {children}
        <Dialog open={showModal} onOpenChange={handleClose}>
        <AnimatePresence>
        {showModal && (
            <DialogContent className="max-w-2xl p-0 border-0 shadow-2xl bg-background overflow-hidden" asChild>
                 <motion.div
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                 >
                    <div className="p-8">
                        <AnimatePresence mode="wait">
                            {renderStep()}
                        </AnimatePresence>
                    </div>

                    {/* Footer with navigation */}
                    {step < 4 && <div className="flex justify-between items-center bg-secondary/30 p-4 border-t">
                        <div>
                            {step > 1 && <Button variant="ghost" onClick={handleBack}>Back</Button>}
                        </div>
                        <div className="flex items-center gap-2">
                             <span className="text-sm text-muted-foreground">Step {step} of 3</span>
                            <Button onClick={handleNext} disabled={step === 1 && !formData.type || step === 2 && !formData.interest || step === 3 && !formData.time}>
                                {step === 3 ? 'Confirm Booking' : 'Next'}
                            </Button>
                        </div>
                    </div>}
                    {step === 4 && <div className="flex justify-center p-4 bg-secondary/30 border-t">
                        <Button onClick={handleClose}>Done</Button>
                    </div>}
                </motion.div>
            </DialogContent>
        )}
        </AnimatePresence>
      </Dialog>
    </>
  );
};
