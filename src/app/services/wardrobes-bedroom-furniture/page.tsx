'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Check, DraftingCompass, Factory, Handshake, MessagesSquare, Sparkles, Bed, Box, Droplets, Ruler, ShieldCheck, DoorOpen, Archive, PanelRightOpen } from 'lucide-react';
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

const benefits = [
    { icon: Ruler, title: "Perfectly Fitted", description: "Furniture built to the millimeter for your unique space." },
    { icon: Box, title: "Intelligent Storage", description: "Clever solutions to keep your life organized and serene." },
    { icon: Droplets, title: "Lasting Quality", description: "Durable, premium materials for lifelong peace of mind." },
];

const wardrobeTypes = [
    { name: "Sliding Wardrobes", imageId: "wardrobe-sliding", icon: PanelRightOpen, description: "Sleek and modern, perfect for saving space in compact rooms." },
    { name: "Hinged Wardrobes", imageId: "wardrobe-hinged", icon: DoorOpen, description: "Classic and versatile, offering full access to your closet." },
    { name: "Walk-in Closets", imageId: "wardrobe-walk-in", icon: Archive, description: "The ultimate luxury for organizing your apparel and accessories." },
];

const bedroomEssentials = [
    { name: "Beds", description: "Custom beds designed for comfort and style." },
    { name: "Bedside Tables", description: "Functional and elegant tables for your essentials." },
    { name: "Dressers", description: "Beautifully crafted dressers with ample storage." },
    { name: "Study & Vanity Units", description: "Integrated units for work or personal care." }
];

const processSteps = [
    { icon: MessagesSquare, title: "1. Consultation", description: "We listen to your needs to craft a personalized bedroom concept." },
    { icon: DraftingCompass, title: "2. Material Selection", description: "Choose from our vast library of premium finishes and materials." },
    { icon: Factory, title: "3. Precision Crafting", description: "Your custom furniture is built to perfection in our own factory." },
    { icon: Handshake, title: "4. Seamless Installation", description: "Our expert team ensures a flawless fit and finish in your home." }
];

export default function WardrobesAndBedroomPage() {
  const { setShowGetStartedModal } = useGetStartedModal();
  const heroImage = PlaceHolderImages.find(img => img.id === 'service-wardrobes-hero');
  const essentialsImage = PlaceHolderImages.find(img => img.id === 'bedroom-essentials');
  const materialsImage = PlaceHolderImages.find(img => img.id === 'factory-materials');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-center text-white"
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
              Your Personal Sanctuary, Perfected
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-6 max-w-2xl mx-auto text-lg text-white/90">
              Create a calm, organized, and beautiful bedroom with our custom-made wardrobes and furniture.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
               <Button size="lg" onClick={() => setShowGetStartedModal(true)}>
                <Sparkles className="mr-2 h-5 w-5" />
                Design Your Bedroom
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white bg-transparent border-white/80 hover:bg-white hover:text-black">
                <Link href="/showrooms">Visit a Showroom</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Benefits Section */}
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
                A Place for Everything
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                We design and build bedroom furniture that brings tranquility and order to your most personal space.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="bg-secondary/50 rounded-lg p-8 text-center transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1.5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-6 mx-auto">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-headline text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Wardrobe Types Section */}
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="py-16 md:py-24 bg-secondary"
        >
            <div className="container px-4 md:px-6">
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl font-headline text-secondary-foreground">
                        Wardrobes for Every Need
                    </h2>
                     <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Find the perfect style to match your space and storage requirements.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {wardrobeTypes.map(item => {
                        const image = PlaceHolderImages.find(img => img.id === item.imageId);
                        return (
                            <motion.div key={item.name} variants={itemVariants}>
                                <Card className="h-full bg-background/80 hover:bg-background transition-colors duration-300 overflow-hidden group">
                                    {image && (
                                        <div className="aspect-video overflow-hidden">
                                            <Image
                                                src={image.imageUrl}
                                                alt={image.description}
                                                width={600}
                                                height={400}
                                                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                                data-ai-hint={image.imageHint}
                                            />
                                        </div>
                                    )}
                                    <CardHeader className="p-6">
                                        <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors flex items-center gap-3">
                                            <item.icon className="h-6 w-6 text-primary/80" />
                                            {item.name}
                                        </CardTitle>
                                        <CardContent className="p-0 pt-2">
                                            <p className="text-muted-foreground">{item.description}</p>
                                        </CardContent>
                                    </CardHeader>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.section>

        {/* Bedroom Essentials Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="py-16 md:py-24"
        >
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 items-center gap-16">
                <div className="aspect-video md:aspect-[4/3] md:order-last">
                    {essentialsImage && (
                    <InteractiveImage
                        src={essentialsImage.imageUrl}
                        alt={essentialsImage.description}
                        width={800}
                        height={600}
                        className="w-full h-full"
                        data-ai-hint={essentialsImage.imageHint}
                    />
                    )}
                </div>
                <motion.div variants={itemVariants} className="space-y-6">
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-headline">
                        More Than Just Wardrobes
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We craft a complete ecosystem of bedroom furniture, ensuring a cohesive and harmonious design.
                    </p>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                        {bedroomEssentials.map(item => (
                            <div key={item.name} className="flex items-start gap-3">
                                <Bed className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className='font-semibold text-foreground'>{item.name}</h4>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* Process Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
          className="py-16 md:py-24 bg-secondary"
        >
          <div className="container px-4 md:px-6">
             <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl font-headline text-foreground">
                Our Simple Path to Your Perfect Bedroom
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {processSteps.map((step) => (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl font-headline text-foreground">{step.title}</h3>
                    <p className="mt-1 text-muted-foreground">{step.description}</p>
                  </div>
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
                        <motion.h2 variants={itemVariants} className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-headline">Ready for a Restful Retreat?</motion.h2>
                        <motion.p variants={itemVariants} className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
                            Let's design a bedroom that's perfectly organized and uniquely you. Get a free quote and 3D designs today.
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
