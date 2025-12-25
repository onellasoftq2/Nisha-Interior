'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Check, DraftingCompass, Factory, Handshake, MessagesSquare, Smile } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    id: 'modular-kitchens',
    title: 'Modular Kitchens',
    description: 'The heart of your home, reimagined. We create ergonomic, stylish kitchens that blend clever storage with a beautiful aesthetic, making your daily routines a joy. Our designs are tailored to your cooking style and family needs, ensuring a perfect balance of form and function.',
    benefits: [
      'Perfectly optimized for your workflow and space.',
      'Durable, moisture-resistant materials for longevity.',
      'Endless customization of finishes, colors, and hardware.',
      'Smart storage solutions to keep your kitchen organized.',
    ],
    imageId: 'services-kitchens',
    cta: 'Explore Kitchen Designs',
  },
  {
    id: 'wardrobes-storage',
    title: 'Wardrobes & Storage',
    description: 'Bring calm and order to your home with our intelligent storage solutions. From luxurious walk-in closets to sleek, space-saving media units, we design storage that fits your life, not the other way around. Say goodbye to clutter and hello to seamless organization.',
    benefits: [
      'Customized to your exact space and storage needs.',
      'High-quality hinges and hardware for smooth operation.',
      'A wide range of finishes to match your room’s decor.',
      'Designed to maximize every inch of available space.',
    ],
    imageId: 'services-wardrobes',
    cta: 'Discover Storage Solutions',
  },
  {
    id: 'complete-home-interiors',
    title: 'Complete Home Interiors',
    description: 'A seamless, end-to-end journey from a blank canvas to your dream home. We manage every detail, ensuring a cohesive design that reflects your personality across every single room. Trust us to handle the entire process, so you can relax and watch your vision come to life.',
    benefits: [
      'A single point of contact for the entire project.',
      'Cohesive design language throughout your home.',
      'Hassle-free execution, from design to handover.',
      'Guaranteed quality, backed by our own factory.',
    ],
    imageId: 'services-interiors',
    cta: 'View Interior Projects',
  },
  {
    id: 'interior-design-consultation',
    title: 'Interior Design Consultation',
    description: 'Have a vision but need a professional guide? Our expert designers partner with you to refine your ideas, select materials, and create a clear, actionable roadmap for your project. We help you make confident decisions and avoid costly mistakes.',
    benefits: [
      'Expert guidance to refine your ideas and vision.',
      'Professional advice on material and color selection.',
      'Detailed 2D and 3D plans to visualize your space.',
      'A clear project plan to ensure a smooth process.',
    ],
    imageId: 'services-consultation',
    cta: 'Book a Consultation',
  },
];

const processSteps = [
    {
      icon: MessagesSquare,
      title: "Consultation & Design",
      description: "We start by listening. Our designers work with you to understand your needs, style, and budget to craft the perfect design concept."
    },
    {
      icon: DraftingCompass,
      title: "Material & Finish Selection",
      description: "With your design in place, we help you choose from our wide range of high-quality materials and finishes to bring your vision to life."
    },
    {
      icon: Factory,
      title: "In-House Manufacturing",
      description: "Your custom furniture is built in our state-of-the-art factory, ensuring precision, quality, and timely delivery."
    },
    {
      icon: Handshake,
      title: "Installation & Handover",
      description: "Our professional team handles the installation with care, and we walk you through the final space to ensure your complete satisfaction."
    }
  ];

  const differentiators = [
    {
      icon: Factory,
      title: 'Factory-Owned, Not an Aggregator',
      description: 'We manufacture our own products in Pune, giving us complete control over quality, timelines, and cost. No middlemen, no surprises.',
    },
    {
      icon: Check,
      title: 'True, Bespoke Customization',
      description: 'Since we are the makers, we can create furniture that fits your space to the millimeter. Your home, your dimensions, your style.',
    },
    {
      icon: Smile,
      title: 'Local Pune Expertise',
      description: 'With four showrooms across Pune, our team understands local tastes and is always available for in-person consultations and support.',
    },
  ];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 0.2,
    },
  },
};

export default function ServicesPage() {
  const factoryImage = PlaceHolderImages.find((img) => img.id === 'factory-process');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="pt-24 pb-16 md:pt-32 md:pb-24"
        >
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
              End-to-End Design Solutions
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
              From a single room to a complete home makeover, we offer personalized interior services tailored to your needs—all crafted with care in our own factory.
            </p>
          </div>
        </motion.section>

        <div className="container px-4 md:px-6 space-y-24 md:space-y-32 mb-24 md:mb-32">
          {services.map((service, index) => {
            const image = PlaceHolderImages.find((img) => img.id === service.imageId);
            return (
              <motion.div
                id={service.id}
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
                className="grid grid-cols-1 items-center gap-12 md:gap-16 md:grid-cols-2"
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                  <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-headline">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground">{service.description}</p>
                  <ul className="space-y-3 text-muted-foreground">
                    {service.benefits.map((benefit, i) =>(
                        <li key={i} className='flex items-start gap-3'>
                            <Check className='h-5 w-5 text-primary mt-1 flex-shrink-0'/>
                            <span>{benefit}</span>
                        </li>
                    ))}
                  </ul>
                   <Button size="lg" variant="link" className="px-0 group text-lg" asChild>
                     <Link href="/contact">
                        {service.cta}
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-2">→</span>
                     </Link>
                   </Button>
                </div>
                <motion.div
                  variants={imageVariants}
                  className="rounded-lg overflow-hidden shadow-xl"
                >
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={800}
                      height={533}
                      className="w-full h-full object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Our Process Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="py-24 md:py-32 bg-secondary text-secondary-foreground"
        >
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl font-headline">
                Our Simple, Transparent Process
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-secondary-foreground/80">
                We make turning your dream home into a reality a seamless and enjoyable experience.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-4">
                     <Badge variant="outline" className="absolute -top-3 -right-3 bg-background text-primary border-primary">{index + 1}</Badge>
                     <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background text-primary">
                        <step.icon className="h-8 w-8" />
                     </div>
                  </div>
                  <h3 className="text-xl font-semibold font-headline">{step.title}</h3>
                  <p className="mt-2 text-secondary-foreground/80">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="py-24 md:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl font-headline">
                Why Choose Nisha Interior?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                We're not just another interior design service. We are makers, committed to quality and your complete satisfaction.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
                >
                  <Card className="h-full text-center p-6 transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1">
                    <CardHeader className="items-center p-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                        <item.icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 mt-2">
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        {/* Factory Advantage Section */}
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="bg-secondary text-secondary-foreground"
        >
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 items-center gap-12 md:gap-24 py-20 md:py-24">
                    <motion.div 
                        className="rounded-lg overflow-hidden shadow-xl"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                        {factoryImage && (
                        <Image
                            src={factoryImage.imageUrl}
                            alt={factoryImage.description}
                            width={800}
                            height={600}
                            className="w-full h-full object-cover"
                            data-ai-hint={factoryImage.imageHint}
                        />
                        )}
                    </motion.div>
                    <motion.div 
                        className="space-y-6"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl font-headline">
                            The Factory Advantage
                        </h2>
                        <p className="text-lg text-secondary-foreground/80">
                            Our in-house manufacturing isn't just a feature—it's our promise of quality. By controlling the entire production process, we deliver superior, customized furniture that's built to last, without the premium price tag.
                        </p>
                        <Button asChild size="lg" variant="outline" className="border-white/80 text-white hover:bg-white hover:text-black">
                            <Link href="/factory">
                                Learn More About Our Craft
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
