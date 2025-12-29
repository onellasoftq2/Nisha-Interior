'use client';
import { useState } from 'react';
import Image from 'next/image';
import { GripVertical } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const transformationData = {
  living: {
    before: PlaceHolderImages.find((img) => img.id === 'transform-living-base'),
    after: PlaceHolderImages.find((img) => img.id === 'transform-living-decor'),
  },
  kitchen: {
    before: PlaceHolderImages.find((img) => img.id === 'transform-kitchen-base'),
    after: PlaceHolderImages.find((img) => img.id === 'transform-kitchen-lighting'),
  },
  bedroom: {
    before: PlaceHolderImages.find((img) => img.id === 'transform-bedroom-base'),
    after: PlaceHolderImages.find((img) => img.id === 'transform-bedroom-details'),
  },
};

const TransformationSlider = ({
  beforeImage,
  afterImage,
}: {
  beforeImage: (typeof PlaceHolderImages)[0];
  afterImage: (typeof PlaceHolderImages)[0];
}) => {
  const [inset, setInset] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ('touches' in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ('clientX' in e) {
      x = e.clientX - rect.left;
    }

    const percentage = (x / rect.width) * 100;
    setInset(Math.max(0, Math.min(100, percentage)));
  };

  const handleInteractionStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    // Call mouseMove directly to handle click-to-move
    handleMouseMove(e);
  };

  const handleInteractionEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="relative aspect-video w-full h-full overflow-hidden rounded-2xl select-none"
      onMouseLeave={handleInteractionEnd}
      onMouseUp={handleInteractionEnd}
      onMouseMove={handleMouseMove}
      onTouchEnd={handleInteractionEnd}
      onTouchMove={handleMouseMove}
    >
      <Image
        src={beforeImage.imageUrl}
        alt={beforeImage.description}
        width={1920}
        height={1080}
        priority
        className="absolute left-0 top-0 w-full h-full aspect-video rounded-2xl select-none object-cover"
        data-ai-hint={beforeImage.imageHint}
      />
      <Image
        src={afterImage.imageUrl}
        alt={afterImage.description}
        width={1920}
        height={1080}
        priority
        className="absolute left-0 top-0 z-10 w-full h-full aspect-video rounded-2xl select-none object-cover"
        style={{
          clipPath: `inset(0 0 0 ${inset}%)`,
        }}
        data-ai-hint={afterImage.imageHint}
      />
      <div
        className="bg-primary h-full w-1 absolute z-20 top-0 -ml-0.5 select-none cursor-ew-resize"
        style={{
          left: `calc(${inset}% - 1px)`,
        }}
        onMouseDown={handleInteractionStart}
        onTouchStart={handleInteractionStart}
      >
        <div className="bg-primary rounded-full text-primary-foreground h-10 w-10 select-none absolute top-1/2 -translate-y-1/2 -left-1/2 -translate-x-1/2 flex justify-center items-center pointer-events-none">
          <GripVertical className="h-5 w-5 select-none" />
        </div>
      </div>
    </div>
  );
};

const TransformationSection = () => {
  const { living, kitchen, bedroom } = transformationData;
  if (!living.before || !living.after || !kitchen.before || !kitchen.after || !bedroom.before || !bedroom.after) {
    return null;
  }

  return (
    <div className="w-full py-20 lg:py-40 bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl tracking-tighter font-semibold font-headline text-secondary-foreground">
              From Empty to Elevated
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto leading-relaxed tracking-tight text-secondary-foreground/80">
              Watch how thoughtful design and craftsmanship transform everyday
              spaces. Drag the slider to see the change.
            </p>
          </div>
          <Tabs defaultValue="living" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="living">Living Room</TabsTrigger>
              <TabsTrigger value="kitchen">Kitchen</TabsTrigger>
              <TabsTrigger value="bedroom">Bedroom</TabsTrigger>
            </TabsList>
            <div className="pt-8 w-full">
                <TabsContent value="living">
                  <TransformationSlider
                    beforeImage={living.before}
                    afterImage={living.after}
                  />
                </TabsContent>
                <TabsContent value="kitchen">
                  <TransformationSlider
                    beforeImage={kitchen.before}
                    afterImage={kitchen.after}
                  />
                </TabsContent>
                <TabsContent value="bedroom">
                  <TransformationSlider
                    beforeImage={bedroom.before}
                    afterImage={bedroom.after}
                  />
                </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TransformationSection;
