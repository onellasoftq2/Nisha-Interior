'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Check, DraftingCompass, Factory, Handshake, MessagesSquare, Sparkles, Users, ShieldCheck, Ruler, Gem, Layers } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetStartedModal } from '@/hooks/use-get-started-modal';
import { InteractiveImage } from '@/components/interactive-image';

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
    { icon: Ruler, title: "Perfect Fit", description: "Factory-made to your exact room dimensions." },
    { icon: Gem, title: "Unmatched Durability", description: "High-grade, moisture-resistant materials." },
    { icon: Factory, title: "Factory-Direct Price", description: "Superior quality at a fair, transparent price." },
];

const layouts = [
    { name: "L-Shaped", imageId: "layout-l-shaped" },
    { name: "U-Shaped", imageId: "layout-u-shaped" },
    { name: "Straight Line", imageId: "layout-straight" },
    { name: "Parallel", imageId: "layout-parallel" },
];

const processSteps = [
    {
      icon: MessagesSquare,
      title: "1. Design Consultation",
      description: "We work with you to understand your needs and create the perfect layout.",
    },
    {
      icon: DraftingCompass,
      title: "2. Material Selection",
      description: "Choose from hundreds of finishes and materials at our experience centers.",
    },
    {
      icon: Factory,
      title: "3. Precision Manufacturing",
      description: "Your design is crafted to perfection using advanced machinery in our factory.",
    },
    {
      icon: Handshake,
      title: "4. Flawless Installation",
      description: "Our professional team installs your kitchen with meticulous care and a final quality check.",
    }
];

export default function ModularKitchensPage() {
  const { setShowGetStartedModal } = useGetStartedModal();
  const heroImage = PlaceHolderImages.find(img => img.id === 'service-kitchens');
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
              The Heart of Your Home, Reimagined
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-6 max-w-2xl mx-auto text-lg text-white/90">
              Discover modular kitchens that blend stunning aesthetics with unparalleled functionality.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
               <Button size="lg" onClick={() => setShowGetStartedModal(true)}>
                <Sparkles className="mr-2 h-5 w-5" />
                Book a Free Consultation
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white bg-transparent border-white/80 hover:bg-white hover:text-black">
                <Link href="/showrooms">Visit a Showroom</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Our Kitchens */}
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
                Engineered for Life, Designed for You
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Our kitchens are complete systems built to enhance your daily life.
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

        {/* Kitchen Layouts */}
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
                        Layouts for Every Space
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-secondary-foreground/80">
                        We design kitchens to perfectly suit your room's shape and your family's workflow.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {layouts.map(layout => {
                        const image = PlaceHolderImages.find(img => img.id === layout.imageId);
                        return (
                            <motion.div key={layout.name} variants={itemVariants}>
                                <Card className="h-full text-center bg-background/80 hover:bg-background transition-colors duration-300 overflow-hidden group">
                                    {image && (
                                        <div className="aspect-video">
                                            <InteractiveImage
                                                src={image.imageUrl}
                                                alt={image.description}
                                                width={600}
                                                height={400}
                                                className="w-full h-full"
                                                data-ai-hint={image.imageHint}
                                            />
                                        </div>
                                    )}
                                    <CardHeader>
                                        <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">{layout.name}</CardTitle>
                                    </CardHeader>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.section>

        {/* Materials and Finishes */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="py-16 md:py-24"
        >
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 items-center gap-16">
              <motion.div variants={itemVariants} className="space-y-6">
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-headline">
                  A World of Materials & Finishes
                </h2>
                <p className="text-lg text-muted-foreground">
                  Your kitchen should reflect your taste. Choose from a vast library of laminates, veneers, and countertops to create a look that is uniquely yours.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" /><span>Hundreds of laminate shades and textures.</span></li>
                    <li className="flex items-start gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" /><span>Premium veneers for a natural wood finish.</span></li>
                    <li className="flex items-start gap-3"><Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" /><span>Durable quartz, granite, and solid surface countertops.</span></li>
                </ul>
                 <Button asChild size="lg" variant="link" className="px-0 group text-lg">
                    <Link href="/showrooms">
                        Explore Materials in Person
                        <motion.span className="inline-block ml-2" initial={{ x: 0 }} whileHover={{ x: 4 }} transition={{ duration: 0.2, ease: 'easeOut' }}>→</motion.span>
                    </Link>
                </Button>
              </motion.div>
              <div className="aspect-video md:aspect-[4/3]">
                {materialsImage && (
                  <InteractiveImage
                    src={materialsImage.imageUrl}
                    alt={materialsImage.description}
                    width={800}
                    height={600}
                    className="w-full h-full"
                    data-ai-hint={materialsImage.imageHint}
                  />
                )}
              </div>
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
                Our Four-Step Kitchen Journey
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                From first sketch to final installation, our process is simple, transparent, and exciting.
              </p>
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
                        <motion.h2 variants={itemVariants} className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-headline">Ready to Cook Up Your Dream Kitchen?</motion.h2>
                        <motion.p variants={itemVariants} className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
                            Let's talk possibilities. Book a free design consultation to get a personalized quote and 3D designs.
                        </motion.p>
                    </CardHeader>
                    <CardContent className="p-0 mt-8">
                         <motion.div variants={itemVariants}>
                            <Button size="lg" className="text-lg" onClick={() => setShowGetStartedModal(true)}>
                                <Sparkles className="mr-2 h-5 w-5" />
                                Get a Free Quote
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

    