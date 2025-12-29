
'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Check, DraftingCompass, Factory, Handshake, MessagesSquare, Smile, Video, Wallet, Clock, Ruler, ShieldCheck, Users, Lightbulb, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useBookingModal } from '@/hooks/use-booking-modal';
import { InteractiveImage } from '@/components/interactive-image';
import ScrollFAQAccordion from '@/components/ui/scroll-faq-accordion';

const services = [
  {
    id: 'modular-kitchens',
    title: 'Modular Kitchens',
    description: 'The heart of your home, reimagined. We create ergonomic, stylish kitchens that blend clever storage with a beautiful aesthetic, making daily routines a joy.',
    benefits: [
      'Optimized for your workflow and space.',
      'Durable, moisture-resistant materials.',
      'Endless customization of finishes and hardware.',
    ],
    whoItIsFor: [
        "Homeowners looking to maximize kitchen functionality and storage.",
        "Families wanting a durable, easy-to-maintain kitchen for daily use.",
        "Individuals who love cooking and desire a beautiful, inspiring culinary space.",
    ],
    imageId: 'service-kitchens',
    cta: 'Explore Kitchen Designs',
  },
  {
    id: 'wardrobes-storage',
    title: 'Wardrobes & Storage',
    description: 'Bring calm and order to your home with our intelligent storage solutions, from luxurious walk-in closets to sleek, space-saving media units.',
    benefits: [
      'Customized to your exact space and needs.',
      'High-quality hardware for smooth operation.',
      'Wide range of finishes to match your decor.',
    ],
    whoItIsFor: [
        "Anyone needing to organize clothes and belongings efficiently.",
        "Homeowners with awkward spaces that require custom-fit solutions.",
        "Design-conscious individuals who want storage to be a feature, not an afterthought."
    ],
    imageId: 'service-wardrobes',
    cta: 'Discover Storage Solutions',
  },
  {
    id: 'complete-home-interiors',
    title: 'Complete Home Interiors',
    description: 'A seamless, end-to-end journey from a blank canvas to your dream home. We manage every detail, ensuring a cohesive design that reflects your personality.',
    benefits: [
      'A single point of contact for the entire project.',
      'Cohesive design language throughout your home.',
      'Hassle-free execution, from design to handover.',
    ],
    whoItIsFor: [
        "New homeowners wanting a turnkey solution to furnish their entire space.",
        "Clients undertaking a major renovation who need a unified design vision.",
        "Busy professionals who value a single, reliable partner to manage the entire process."
    ],
    imageId: 'service-interiors',
    cta: 'View Interior Projects',
  },
];

const whatYouGet = [
    {
        icon: Users,
        label: "Designer-Led Planning"
    },
    {
        icon: Factory,
        label: "Factory-Made Furniture"
    },
    {
        icon: Handshake,
        label: "End-to-End Execution"
    },
    {
        icon: ShieldCheck,
        label: "Post-Installation Support"
    }
];

const processSteps = [
    {
      icon: MessagesSquare,
      title: "Consultation & Design",
      description: "We start by listening to craft the perfect design concept for your needs, style, and budget.",
      duration: "1-2 Weeks"
    },
    {
      icon: DraftingCompass,
      title: "Material & Finish Selection",
      description: "We help you choose from our wide range of high-quality materials to bring your vision to life.",
      duration: "1 Week"
    },
    {
      icon: Factory,
      title: "In-House Manufacturing",
      description: "Your custom furniture is built in our state-of-the-art factory, ensuring precision and quality.",
      duration: "3-4 Weeks"
    },
    {
      icon: Handshake,
      title: "Installation & Handover",
      description: "Our professional team handles the installation with care, ensuring your complete satisfaction.",
      duration: "1-2 Weeks"
    }
  ];

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const textVariants = (direction: 'left' | 'right') => ({
    hidden: { opacity: 0, x: direction === 'left' ? -30 : 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 } },
});


export default function ServicesPage() {
  const { setShowBookingModal } = useBookingModal();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="pt-24 pb-16"
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

        <div className="container px-4 md:px-6">
          {services.map((service, index) => {
            const image = PlaceHolderImages.find((img) => img.id === service.imageId);
            const isReversed = index % 2 === 1;
            return (
              <motion.div
                id={service.id}
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
                className="w-full flex items-center md:min-h-[90vh] py-16 md:py-24"
              >
                <div className="w-full grid grid-cols-1 items-center gap-12 md:gap-16 md:grid-cols-2">
                  <motion.div 
                      className={`space-y-8 ${isReversed ? 'md:order-last' : ''}`}
                      variants={textVariants(isReversed ? 'right' : 'left')}
                  >
                    <div>
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-headline">
                        {service.title}
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">{service.description}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-3">Who This Service Is For:</h3>
                        <ul className="space-y-2 text-muted-foreground">
                        {service.whoItIsFor.map((item, i) =>(
                            <li key={i} className='flex items-start gap-3'>
                                <Check className='h-5 w-5 text-primary mt-1 flex-shrink-0'/>
                                <span>{item}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                    
                    <Button size="lg" variant="link" className="px-0 group text-lg" asChild>
                        <Link href="/contact">
                            {service.cta}
                            <motion.span 
                                className="inline-block ml-2"
                                initial={{ x: 0 }}
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                            >
                                →
                            </motion.span>
                        </Link>
                      </Button>
                  </motion.div>
                  <div className="aspect-video md:aspect-[4/3]">
                    {image && (
                      <InteractiveImage
                        src={image.imageUrl}
                        alt={image.description}
                        width={800}
                        height={600}
                        className="w-full h-full"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* What You Get Section */}
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="py-16 md:py-24"
        >
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {whatYouGet.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
                >
                  <item.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground">{item.label}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Our Process Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="py-16 md:py-24 bg-secondary text-secondary-foreground"
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
            <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
               {/* Dashed Line Connector for Desktop */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2">
                <svg width="100%" height="2">
                  <line x1="0" y1="1" x2="100%" y2="1" strokeWidth="2" className="stroke-current text-border" strokeDasharray="8, 8"/>
                </svg>
              </div>
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
                  className="relative flex flex-col items-center text-center z-10"
                >
                  <div className="relative mb-4">
                     <div className="flex h-20 w-20 items-center justify-center rounded-full bg-background text-primary border-4 border-secondary">
                        <step.icon className="h-8 w-8" />
                     </div>
                  </div>
                  <h3 className="text-xl font-semibold font-headline text-foreground">{step.title}</h3>
                  <p className="mt-2 text-secondary-foreground/80">{step.description}</p>
                   <Badge variant="outline" className="mt-4 bg-background/20 border-foreground/30 text-foreground">
                        {step.duration}
                    </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Consultation CTA Block */}
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="py-16 md:py-24"
        >
            <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                 <Card className="p-8 md:p-12 text-center bg-secondary border-none">
                    <CardHeader className="p-0">
                        <h2 className="text-3xl font-semibold tracking-tight text-secondary-foreground sm:text-4xl font-headline">Ready to Start Your Project?</h2>
                        <p className="mt-4 text-lg text-secondary-foreground/80 max-w-xl mx-auto">
                            Book a free, no-obligation consultation with one of our expert designers.
                        </p>
                    </CardHeader>
                    <CardContent className="p-0 mt-8">
                         <Button size="lg" className="text-lg" onClick={() => setShowBookingModal(true)}>
                            <Video className="mr-2 h-5 w-5" />
                            Book Free Designer-Led Consultation
                        </Button>
                        <div className='text-secondary-foreground/80 mt-6 text-sm'>
                            <p className='font-semibold'>What happens next?</p>
                            <p>We'll discuss your vision, explain our process, and answer all your questions. It's a supportive conversation, not a sales pitch.</p>
                        </div>
                    </CardContent>
                 </Card>
            </div>
        </motion.section>
        
      </main>
      <Footer />
    </div>
  );
}
