import Image from 'next/image';
import { Button } from './ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const CustomizationSection = () => {
  const customImage = PlaceHolderImages.find((img) => img.id === 'customization-image');

  return (
    <section className="bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
              Manufactured In-House. Made for Your Exact Space.
            </h2>
            <p className="text-lg text-muted-foreground">
              Our own manufacturing unit gives us the unique ability to create furniture that fits your dimensions perfectly. No compromises, no wasted space—just flawless integration into your home.
            </p>
            <p className="text-lg text-muted-foreground">
              From material selection to the final finish, we control every step of the process to ensure the highest quality standards.
            </p>
            <Button size="lg">Discuss Custom Requirements</Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            {customImage && (
              <Image
                src={customImage.imageUrl}
                alt={customImage.description}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                data-ai-hint={customImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizationSection;
