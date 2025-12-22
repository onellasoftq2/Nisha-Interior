'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/header';
import Footer from '@/components/footer';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const dividerVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.6, ease: 'easeOut', delay: 0.3 } },
};

export default function AboutUsPage() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-team');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="py-16 md:py-24"
        >
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
              Designing Spaces, Building Trust.
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
              Based in Pune, Nisha Interior is a leading name in custom furniture and interior design, known for our commitment to quality and a customer-first approach.
            </p>
          </div>
        </motion.section>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={dividerVariants}
          className="container max-w-lg px-4 md:px-6"
        >
          <Separator />
        </motion.div>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          className="py-16 md:py-24"
        >
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 items-center gap-16">
              <div className="space-y-6 text-lg text-muted-foreground">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Our Philosophy</h2>
                <p>
                  We believe that a home is more than just a place to live; it's a reflection of who you are. Our philosophy is rooted in creating personalized, functional, and beautiful spaces that stand the test of time.
                </p>
                <p>
                  By combining expert craftsmanship with a deep understanding of our clients' needs, we deliver interiors that are not only aesthetically pleasing but also a joy to live in.
                </p>
                <p>
                  Our factory-backed model ensures that every piece of furniture is crafted with precision and care, giving you a home that is both elegant and enduring.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                {aboutImage && (
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={800}
                    height={900}
                    className="w-full h-full object-cover"
                    data-ai-hint={aboutImage.imageHint}
                  />
                )}
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
