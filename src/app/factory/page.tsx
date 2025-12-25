'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Ruler, CheckCircle, Gem, ClipboardList, Package, Truck, Layers, ShieldCheck, Palette, Users } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const processSteps = [
  {
    icon: ClipboardList,
    title: '1. Design & Planning',
    description: 'Every project begins with a detailed plan. Our engineers translate your approved designs into precise technical drawings for our factory floor.',
  },
  {
    icon: Layers,
    title: '2. Material Sourcing',
    description: 'We carefully select and source high-grade raw materials, including calibrated plywood, premium laminates, and trusted hardware.',
  },
  {
    icon: Gem,
    title: '3. Precision Crafting',
    description: 'Using advanced machinery, each component is cut, finished, and assembled with meticulous attention to detail by our skilled craftsmen.',
  },
  {
    icon: ShieldCheck,
    title: '4. Quality Assurance',
    description: 'Every single piece undergoes a rigorous 3-stage quality check to ensure it meets our exacting standards for durability and finish.',
  },
  {
    icon: Package,
    title: '5. Secure Packaging',
    description: 'Once approved, your custom furniture is carefully packaged to ensure it arrives at your home in pristine condition.',
  },
  {
    icon: Truck,
    title: '6. Site Delivery',
    description: 'Our logistics team coordinates a timely and efficient delivery, ready for our installation experts to take over.',
  },
];

const glanceItems = [
    {
        icon: Layers,
        title: "Advanced Machinery",
        description: "Precision engineering for a flawless fit and finish."
    },
    {
        icon: ShieldCheck,
        title: "Rigorous QA",
        description: "Multi-stage checks to ensure lifelong durability."
    },
    {
        icon: Palette,
        title: "Limitless Finishes",
        description: "An extensive library of materials and finishes."
    },
    {
        icon: Users,
        title: "Skilled Craftsmen",
        description: "Decades of combined experience in furniture making."
    }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const glanceItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

const glanceHoverVariants = {
  rest: { y: 0, scale: 1 },
  hover: { y: -6, scale: 1.03 },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function FactoryPage() {
  const factoryImage = PlaceHolderImages.find((img) => img.id === 'factory-process');
  const materialsImage = PlaceHolderImages.find((img) => img.id === 'factory-materials');
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="pt-24 pb-16 md:pt-32 md:pb-20"
        >
          <div className="container px-4 md:px-6 text-center">
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline"
            >
              The Heart of Our Craft
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground"
            >
              Our state-of-the-art factory isn't just a facility—it's the core of our promise. It's how we guarantee exceptional quality, deliver true customization, and build furniture designed to last a lifetime.
            </motion.p>
          </div>
        </motion.section>
        
        {/* Factory at a Glance */}
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="pb-16 md:pb-24"
        >
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {glanceItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={glanceItemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="group h-full"
                    variants={glanceHoverVariants}
                    whileHover="hover"
                    initial="rest"
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    <Card className="h-full bg-card border-none shadow-none text-center p-0 transition-colors duration-300 group-hover:bg-secondary">
                        <CardHeader className="items-center p-0">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                            <item.icon className="h-7 w-7" />
                        </div>
                        <CardTitle className="font-headline text-lg md:text-xl relative">
                            {item.title}
                            <motion.span 
                                className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-primary origin-center"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                            />
                        </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mt-2">
                        <p className="text-muted-foreground text-sm md:text-base">{item.description}</p>
                        </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Manufacturing Process */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="py-16 md:py-24 bg-secondary text-secondary-foreground"
        >
          <div className="container px-4 md:px-6">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl font-headline">
                From Raw Material to Refined Reality
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-secondary-foreground/80">
                Our manufacturing process is a blend of precision technology and hands-on craftsmanship, ensuring every piece is built to our exacting standards.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-background text-primary">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl font-headline text-foreground">{step.title}</h3>
                    <p className="mt-1 text-secondary-foreground/80">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Quality & Materials */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="py-16 md:py-24"
        >
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 items-center gap-16">
              <motion.div variants={itemVariants} className="space-y-6">
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-headline">
                  A Foundation of Quality
                </h2>
                <p className="text-lg text-muted-foreground">
                  True luxury is not just about looks; it's about longevity. We build furniture that withstands the rigors of daily life. Our commitment starts with sourcing the finest materials—from moisture-resistant plywood to premium hardware—and continues through every stage of production.
                </p>
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <h4 className='font-semibold text-foreground'>Durability Standards</h4>
                            <p className='text-muted-foreground'>Engineered to resist wear, moisture, and daily use for years of reliability.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Ruler className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <h4 className='font-semibold text-foreground'>Material Selection</h4>
                            <p className='text-muted-foreground'>We partner with trusted suppliers for certified woods, laminates, and hardware.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <h4 className='font-semibold text-foreground'>Final Inspection</h4>
                            <p className='text-muted-foreground'>Every finished product is inspected for flawless functionality and finish before it leaves our factory.</p>
                        </div>
                    </div>
                </div>
              </motion.div>
              <motion.div
                variants={imageVariants}
                className="rounded-lg overflow-hidden shadow-xl"
              >
                {materialsImage && (
                  <Image
                    src={materialsImage.imageUrl}
                    alt={materialsImage.description}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    data-ai-hint={materialsImage.imageHint}
                  />
                )}
              </motion.div>
            </div>
          </div>
        </motion.section>

      </main>
      <Footer />
    </div>
  );
}
