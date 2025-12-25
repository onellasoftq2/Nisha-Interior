'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Ruler, CheckCircle, Gem } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Header from '@/components/header';
import Footer from '@/components/footer';

const features = [
  {
    icon: Ruler,
    title: 'Precision Engineering',
    description: 'Using advanced machinery, we craft furniture to your exact specifications. This means a perfect, built-in look that maximizes every inch of your space.',
  },
  {
    icon: CheckCircle,
    title: 'Hands-On Quality Control',
    description: 'Because we make it ourselves, we can stand behind it. We inspect every joint, hinge, and surface to ensure your furniture is flawless and built to last a lifetime.',
  },
  {
    icon: Gem,
    title: 'Limitless Customization',
    description: 'Your home should be a reflection of you. Our factory allows us to offer an extensive range of materials, finishes, and hardware to create a look that’s entirely your own.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function FactoryPage() {
  const factoryImage = PlaceHolderImages.find((img) => img.id === 'factory-process');
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="pt-24 pb-16 md:pt-32 md:pb-24"
        >
          <div className="container px-4 md:px-6 text-center">
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline"
            >
              Where Design Meets Craft
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground"
            >
              Our state-of-the-art factory is where your vision takes shape. It's how we guarantee quality, offer true customization, and deliver on our promises.
            </motion.p>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="py-16 md:py-24 border-t"
        >
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 items-center gap-16">
              <motion.div variants={itemVariants} className="space-y-8">
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-headline">
                  The Art of Making
                </h2>
                <p className="text-lg text-muted-foreground">
                  Owning our manufacturing isn't just a business model—it's our commitment to you. It means we're not just designers; we are makers. This control allows us to deliver bespoke solutions without compromising on quality.
                </p>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-4"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut', delay: index * 0.1 } },
                      }}
                    >
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{feature.title}</h3>
                        <p className="mt-1 text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                variants={imageVariants}
                className="rounded-lg overflow-hidden shadow-xl aspect-w-4 aspect-h-3"
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
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
