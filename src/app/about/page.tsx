'use client';
import { motion, useInView, useAnimation } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Award, Home, Building, Factory, Users, Heart, Lightbulb, Video } from 'lucide-react';
import { useBookingModal } from '@/hooks/use-booking-modal';
import { InteractiveImage } from '@/components/interactive-image';

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

const dividerVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.6, ease: 'easeOut', delay: 0.3 } },
};

const MetricCounter = ({ to, prefix = '', suffix = '' }: { to: number, prefix?: string, suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start({
        value: to,
        transition: { duration: 2, ease: "easeOut" },
      });
    }
  }, [isInView, to, controls]);

  return (
    <motion.div ref={ref}>
      <motion.span
        initial={{ value: 0 }}
        animate={controls}
        onUpdate={(latest) => {
          if (ref.current) {
            (ref.current as any).textContent = `${prefix}${Math.round(latest.value)}${suffix}`;
          }
        }}
      />
    </motion.div>
  );
};


const metrics = [
    { icon: Award, value: 15, label: "Years of Experience", suffix: "+" },
    { icon: Home, value: 1200, label: "Homes Delivered", suffix: "+" },
    { icon: Building, value: 4, label: "Experience Centers" },
    { icon: Factory, value: 1, label: "In-House Factory" }
];

const differentiators = [
    {
      icon: Users,
      title: "A Family-Driven Studio",
      description: "We are a family business, and we treat our clients like family. Our approach is built on trust, transparency, and a genuine commitment to bringing your vision to life."
    },
    {
      icon: Factory,
      title: "Makers, Not Resellers",
      description: "With our own state-of-the-art factory, we control every detail of the manufacturing process. This guarantees superior quality, millimeter-perfect customization, and fair pricing."
    },
    {
      icon: Heart,
      title: "End-to-End Ownership",
      description: "From the first design sketch to the final installation, our in-house team manages every step. This seamless process ensures a cohesive result and a hassle-free experience for you."
    }
];

export default function AboutUsPage() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-team');
  const valuesImage = PlaceHolderImages.find((img) => img.id === 'about-values');
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
              Designing Homes, Building Relationships.
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
              What started as a small Pune workshop has grown into a leading name in interior design, but our core values remain the same: an obsession with quality craftsmanship and a deep commitment to the families we serve.
            </p>
          </div>
        </motion.section>

        {/* Metrics Section */}
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="pb-16"
        >
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {metrics.map((metric, index) => (
                    <motion.div 
                        key={metric.label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
                    >
                        <metric.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                        <div className="text-4xl md:text-5xl font-bold text-foreground">
                          <MetricCounter to={metric.value} suffix={metric.suffix || ''} />
                        </div>
                        <p className="text-muted-foreground mt-1">{metric.label}</p>
                    </motion.div>
                ))}
            </div>
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

        {/* Our Story Section */}
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
                  Whether you visit us in-person or <Button variant="link" className="p-0 h-auto text-lg" onClick={() => setShowBookingModal(true)}>connect via video consultation</Button>, it’s more than just furniture; it’s about building trust and crafting a home that is as unique and enduring as your family.
                </p>
              </div>
              <div className="aspect-[4/5]">
                {aboutImage && (
                  <InteractiveImage
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={800}
                    height={1000}
                    className="w-full h-full"
                    data-ai-hint={aboutImage.imageHint}
                  />
                )}
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Differentiators Section */}
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="py-16 md:py-24 bg-secondary"
        >
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl font-headline text-secondary-foreground">
                What Sets Us Apart
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-secondary-foreground/80">
                We're not just another interior design service. We are makers, designers, and partners in your journey to a dream home.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
                  className="bg-background/80 rounded-lg p-8 text-center transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1.5"
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

        {/* Process and Promise */}
         <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          className="py-16 md:py-24"
        >
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 items-center gap-16">
              <div className="aspect-video md:aspect-[4/3] md:order-last">
                {valuesImage && (
                  <InteractiveImage
                    src={valuesImage.imageUrl}
                    alt={valuesImage.description}
                    width={800}
                    height={600}
                    className="w-full h-full"
                    data-ai-hint={valuesImage.imageHint}
                  />
                )}
              </div>
              <div className="space-y-8 text-muted-foreground">
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-headline">Our Process is Our Promise</h2>
                <p className="text-lg">
                  A beautiful home is the result of a thoughtful process. Ours is built on collaboration, transparency, and a relentless focus on quality—from the initial conversation to the final handover.
                </p>
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <h4 className='font-semibold text-foreground'>Collaborative Design</h4>
                            <p className='text-muted-foreground'>We listen first, then design. Your needs and vision are the foundation of everything we create.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Factory className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <h4 className='font-semibold text-foreground'>Transparent Production</h4>
                            <p className='text-muted-foreground'>Because we control our factory, we provide clear timelines and pricing, with no hidden surprises.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <h4 className='font-semibold text-foreground'>Assured Quality</h4>
                            <p className='text-muted-foreground'>Our commitment to you is backed by a 10-year warranty and a promise of lasting craftsmanship.</p>
                        </div>
                    </div>
                </div>
                 <Button asChild size="lg" variant="link" className="px-0 group text-lg">
                    <Link href="/services">
                        See Our Services
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
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
