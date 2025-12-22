import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
  {
    title: 'Modular Kitchens',
    imageId: 'service-kitchens',
    description: 'Ergonomic and stylish kitchens designed for modern living and culinary creativity.',
  },
  {
    title: 'Wardrobes & Storage',
    imageId: 'service-wardrobes',
    description: 'Smart storage solutions that maximize space and complement your bedroom aesthetics.',
  },
  {
    title: 'Complete Home Interiors',
    imageId: 'service-interiors',
    description: 'From concept to completion, we transform your house into a personalized dream home.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-background/80 border-y">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We provide end-to-end solutions for your home interior needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const image = PlaceHolderImages.find((img) => img.id === service.imageId);
            return (
              <Card
                key={service.title}
                className="overflow-hidden transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-2"
              >
                <CardHeader className="p-0">
                  {image && (
                    <div className="aspect-w-3 aspect-h-2">
                       <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                  <p className="mt-2 text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
