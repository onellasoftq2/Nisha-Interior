'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Palette, DraftingCompass, Users, Video } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useBookingModal } from '@/hooks/use-booking-modal';
import { Separator } from '@/components/ui/separator';
import { InteractiveImage } from '@/components/interactive-image';

const experienceCenters = [
  {
    name: 'Wakad Center',
    address: '123 Sunshine Plaza, Wakad, Pune, Maharashtra 411057',
    phone: '+91 123 456 7890',
    mapLink: 'https://maps.google.com',
    imageId: 'highlight-showrooms'
  },
  {
    name: 'Kharadi Center',
    address: '456 Urban Square, Kharadi, Pune, Maharashtra 411014',
    phone: '+91 123 456 7891',
    mapLink: 'https://maps.google.com',
    imageId: 'customization-image'
  },
  {
    name: 'New Kharadi Annex',
    address: '789 Galaxy Galleria, New Kharadi, Pune, Maharashtra 411014',
    phone: '+91 123 456 7892',
    mapLink: 'https://maps.google.com',
    imageId: 'service-wardrobes'
  },
  {
    name: 'Nanded City Hub',
    address: '101 Aspire Towers, Nanded City, Pune, Maharashtra 411041',
    phone: '+91 123 456 7893',
    mapLink: 'https://maps.google.com',
    imageId: 'services-kitchens'
  },
];

const benefits = [
    {
        icon: Palette,
        title: "Touch & Feel Materials",
        description: "Experience the quality of our laminates, woods, and hardware firsthand."
    },
    {
        icon: DraftingCompass,
        title: "Explore Full Setups",
        description: "Visualize your future home by walking through our model kitchens and living spaces."
    },
    {
        icon: Users,
        title: "Meet Our Designers",
        description: "Get free, personalized advice from our experts to kickstart your project."
    }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2, ease: 'easeOut' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function ExperienceCentersPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'highlight-showrooms');
  const { setShowBookingModal } = useBookingModal();
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="pt-24 pb-16"
        >
          <div className="container px-4 md:px-6 text-center">
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline"
            >
              Step Into Your Future Home
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground"
            >
              Our Experience Centers are more than just showrooms. They are creative spaces designed to inspire you and help you visualize the endless possibilities for your home interior.
            </motion.p>
          </div>
        </motion.section>
        
        {/* Remote Consultation CTA */}
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            className="pb-16 md:pb-24"
        >
            <div className="container px-4 md:px-6">
                <Card className="bg-secondary border-none overflow-hidden">
                    <div className="grid md:grid-cols-2 items-center">
                        <div className="p-8 md:p-12">
                             <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-secondary-foreground font-headline">Can't Visit in Person?</h2>
                             <p className="mt-4 text-lg text-secondary-foreground/80">No problem. Get the same expert guidance and explore our designs from the comfort of your home with a one-on-one video consultation.</p>
                             <Button size="lg" className="mt-6" onClick={() => setShowBookingModal(true)}>
                                <Video className="mr-2" />
                                Book a Video Consultation
                            </Button>
                        </div>
                        <div className="hidden md:block h-full min-h-[250px] relative">
                             <Image
                                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNvbnN1bHRhdGlvbnxlbnwwfHx8fDE3MjE5MzA5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="A person having a video consultation with a designer"
                                fill
                                className="object-cover"
                                data-ai-hint="video consultation"
                            />
                        </div>
                    </div>
                </Card>
            </div>
        </motion.section>

        <div className="container px-4 md:px-6"><Separator/></div>

        {/* Why Visit Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="py-16 md:py-24"
        >
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
                 <motion.h2
                    variants={itemVariants}
                    className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-headline"
                >
                    Why Visit an Experience Center?
                </motion.h2>
                <motion.p
                    variants={itemVariants}
                    className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground"
                >
                    Designing a home is a tactile experience. See the quality, feel the textures, and get expert guidance all in one place.
                </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full text-center p-6 transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 border-transparent bg-secondary/50">
                    <CardHeader className="items-center p-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                        <benefit.icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="font-headline text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 mt-2">
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="pb-16 md:pb-24 bg-secondary"
        >
          <div className="container px-4 md:px-6 py-16 md:py-24 space-y-16">
             {experienceCenters.map((center, index) => {
                 const image = PlaceHolderImages.find((img) => img.id === center.imageId);
                 const isReversed = index % 2 === 1;

                 return (
                    <motion.div 
                        key={center.name} 
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16"
                    >
                         <div className={`aspect-video md:aspect-[4/3] ${isReversed ? 'md:order-last' : ''}`}>
                            {image && (
                                <InteractiveImage
                                    src={image.imageUrl}
                                    alt={center.name}
                                    width={800}
                                    height={600}
                                    className="w-full h-full"
                                    data-ai-hint={image.imageHint}
                                />
                            )}
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-3xl font-semibold tracking-tight text-foreground font-headline">{center.name}</h3>
                            <p className="text-lg text-muted-foreground">{center.address}</p>
                            <p className="text-muted-foreground">{center.phone}</p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" className="w-full sm:w-auto" asChild>
                                    <Link href={`tel:${center.phone}`}>
                                        <Phone className="mr-2" /> Call Now
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="w-full sm:w-auto border-foreground/30" asChild>
                                    <Link href={center.mapLink} target="_blank">
                                        <MapPin className="mr-2" /> Get Directions
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                 );
             })}
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
