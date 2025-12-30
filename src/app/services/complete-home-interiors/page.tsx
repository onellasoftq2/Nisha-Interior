'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Check, DraftingCompass, Factory, Handshake, MessagesSquare, Sparkles, Home, UserCheck, Sofa, Lamp, Tv, CookingPot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetStartedModal } from '@/hooks/use-get-started-modal';
import { InteractiveImage } from '@/components/interactive-image';
import Image from 'next/image';

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

const scopeItems = [
    { icon: Sofa, name: "Living Room" },
    { icon: CookingPot, name: "Modular Kitchen" },
    { icon: Lamp, name: "Bedroom" },
    { icon: Tv, name: "Entertainment Unit" },
    { icon: Home, name: "And more..." },
];

const idealFor = [
    { title: "New Homeowners", description: "Looking for a complete, hassle-free interior solution from a single, trusted partner." },
    { title: "Major Renovations", description: "Needing a unified design vision and execution for a whole-home transformation." },
    { title: "Busy Professionals", description: "Who value a streamlined process and expert management from concept to completion." }
];

const processSteps = [
    { icon: MessagesSquare, title: "1. Holistic Design", description: "We create a unified design language that flows seamlessly through every room in your home." },
    { icon: DraftingCompass, title: "2. Material Selection", description: "Choose from a curated library of materials that ensure a cohesive and premium finish." },
    { icon: Factory, title: "3. Factory-Made Precision", description: "All your furniture is manufactured in our own factory, guaranteeing consistent quality and fit." },
    { icon: Handshake, title: "4. Synchronized Installation", description: "Our in-house team manages the entire installation, ensuring a smooth and timely handover." }
];

export default function CompleteHomeInteriorsPage() {
  const { setShowGetStartedModal } = useGetStartedModal();
  const heroImage = PlaceHolderImages.find(img => img.id === 'complete-interiors-hero');
  const processImage = PlaceHolderImages.find(img => img.id === 'complete-interiors-process');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center text-center text-white"
        >
          {heroImage && (
             <InteractiveImage
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={1920}
                height={1080}
                className="absolute inset-0 w-full h-full"
                imageClassName="object-cover"
                data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="relative z-10 container px-4 md:px-6">
            <motion.h1 variants={itemVariants} className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl font-headline">
              One Home, One Vision, One Partner
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-6 max-w-2xl mx-auto text-lg text-white/90">
              Experience the simplicity and beauty of a complete home interior, designed and built end-to-end by a single, dedicated team.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
               <Button size="lg" onClick={() => setShowGetStartedModal(true)}>
                <Sparkles className="mr-2 h-5 w-5" />
                Start Your Home Project
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Scope Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="py-16 md:py-24"
        >
          <div className="container px-4 md:px-6">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl font-headline text-foreground">
                A Cohesive Design for Every Room
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                We bring a unified aesthetic to your entire home, ensuring every space feels connected and harmonious.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
              {scopeItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  transition={{ delay: index * 0.05 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{item.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="py-16 md:py-24 bg-secondary"
        >
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 items-center gap-16">
              <motion.div variants={itemVariants} className="space-y-6">
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-headline">
                  A Seamless Journey from Concept to Completion
                </h2>
                <p className="text-lg text-muted-foreground">
                  Our integrated process means you have one dedicated partner managing every detail, ensuring a stress-free experience and a result that exceeds your expectations.
                </p>
                <div className="space-y-6">
                  {processSteps.map(step => (
                    <div key={step.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                        <step.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className='font-semibold text-foreground text-lg'>{step.title}</h4>
                        <p className='text-muted-foreground'>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <div className="aspect-video md:aspect-[4/3]">
                {processImage && (
                  <InteractiveImage
                    src={processImage.imageUrl}
                    alt={processImage.description}
                    width={800}
                    height={600}
                    className="w-full h-full"
                    data-ai-hint={processImage.imageHint}
                  />
                )}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Ideal For Section */}
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="py-16 md:py-24"
        >
          <div className="container px-4 md:px-6">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl font-headline text-foreground">
                Is This Solution Right for You?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Our complete home interior service is perfect for...
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {idealFor.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="bg-secondary/50 rounded-lg p-8 transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1.5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                    <UserCheck className="h-7 w-7" />
                  </div>
                  <h3 className="font-headline text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Closing CTA */}
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="py-24 md:py-32"
        >
            <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                 <Card className="p-8 md:p-12 text-center bg-background border-2">
                    <CardHeader className="p-0">
                        <motion.h2 variants={itemVariants} className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-headline">Ready for a Home That Feels Like You?</motion.h2>
                        <motion.p variants={itemVariants} className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
                            Let's begin the journey. Book a free consultation to discuss your vision and get a personalized plan for your entire home.
                        </motion.p>
                    </CardHeader>
                    <CardContent className="p-0 mt-8">
                         <motion.div variants={itemVariants}>
                            <Button size="lg" className="text-lg" onClick={() => setShowGetStartedModal(true)}>
                                <Sparkles className="mr-2 h-5 w-5" />
                                Get a Free Consultation
                            </Button>
                         </motion.div>
                    </CardContent>
                 </Card>
            </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
