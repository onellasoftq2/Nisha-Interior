'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/header';
import Footer from '@/components/footer';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
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
          className="pt-24 pb-16 md:pt-32 md:pb-24"
        >
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
              From Our Family to Yours.
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
              What started as a small workshop in Pune has grown into a leading name in interior design, but our core values remain the same: quality craftsmanship and a commitment to the families we serve.
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
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-headline">Our Design Philosophy</h2>
                <p>
                  We see every home as a canvas for life’s moments. Our philosophy is simple: create spaces that are not only beautiful and functional but also deeply personal. It's about designing a backdrop for your family's story.
                </p>
                <p>
                  By listening carefully and collaborating closely, we translate your needs and dreams into a tangible reality. Our factory-backed model gives us the freedom to perfect every detail, ensuring your home is a place you’ll love for years to come.
                </p>
                <p>
                  It’s more than just furniture; it’s about building trust and crafting a home that is as unique and enduring as your family.
                </p>
              </div>
              <motion.div 
                className="rounded-lg overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
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
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
