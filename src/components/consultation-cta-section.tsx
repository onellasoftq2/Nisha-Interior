import { Button } from './ui/button';
import { Phone } from 'lucide-react';
import { WhatsappIcon } from './icons/whatsapp-icon';

const ConsultationCtaSection = () => {
  return (
    <section id="contact" className="bg-background">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
          Let’s Design Your Home, Together
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Ready to take the next step? Our design consultants are here to help you bring your vision to life.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg">
            <Phone className="mr-2 h-4 w-4" /> Call Now
          </Button>
          <Button size="lg" variant="secondary" className="bg-green-500 text-white hover:bg-green-600">
            <WhatsappIcon className="mr-2 h-5 w-5" /> WhatsApp Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCtaSection;
