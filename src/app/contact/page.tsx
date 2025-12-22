'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MapPin } from 'lucide-react';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/header';
import Footer from '@/components/footer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, duration: 0.4, ease: 'easeOut' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="py-16 md:py-24"
        >
          <div className="container px-4 md:px-6 text-center">
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground"
            >
              Ready to start your project or have a question? We're here to help. Reach out via your preferred method.
            </motion.p>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="pb-24"
        >
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Methods */}
              <div className="space-y-8">
                <motion.div variants={itemVariants}>
                  <Card className="overflow-hidden transition-all duration-300 ease-out hover:shadow-xl hover:bg-card/90">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-2xl font-headline">
                        <Phone />
                        Give Us a Call
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Speak directly with our design consultants.
                      </p>
                      <Button size="lg" className="w-full sm:w-auto">
                        +91 987 654 3210
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="overflow-hidden transition-all duration-300 ease-out hover:shadow-xl hover:bg-card/90">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-2xl font-headline">
                        <WhatsappIcon className="h-6 w-6" />
                        Chat on WhatsApp
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Prefer texting? Send us a message for a quick response.
                      </p>
                      <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-green-500 text-white hover:bg-green-600">
                        Message Us
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="overflow-hidden transition-all duration-300 ease-out hover:shadow-xl hover:bg-card/90">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-2xl font-headline">
                        <MapPin />
                        Visit a Showroom
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        See our quality and designs firsthand.
                      </p>
                      <Button size="lg" variant="outline" className="w-full sm:w-auto">
                        Find Locations
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Consultation Form */}
              <motion.div variants={itemVariants}>
                <Card className="h-full p-4 sm:p-6 transition-all duration-300 ease-out hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-headline">
                      Request a Free Consultation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="e.g. John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="e.g. +91 98765 43210" />
                      </div>
                      <Button type="submit" size="lg" className="w-full">
                        Schedule Call
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
