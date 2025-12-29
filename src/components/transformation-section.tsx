'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const roomTransformations = {
  livingRoom: {
    title: 'Living Room',
    layers: [
      { id: 'living-base', label: 'Empty Room', imageId: 'transform-living-base' },
      { id: 'living-sofa', label: 'Comfortable Seating', imageId: 'transform-living-sofa' },
      { id: 'living-storage', label: 'Custom Storage', imageId: 'transform-living-storage' },
      { id: 'living-decor', label: 'Finishing Touches', imageId: 'transform-living-decor' },
    ],
  },
  kitchen: {
    title: 'Kitchen',
    layers: [
      { id: 'kitchen-base', label: 'Empty Space', imageId: 'transform-kitchen-base' },
      { id: 'kitchen-cabinets', label: 'Ergonomic Cabinetry', imageId: 'transform-kitchen-cabinets' },
      { id: 'kitchen-countertops', label: 'Durable Countertops', imageId: 'transform-kitchen-countertops' },
      { id: 'kitchen-lighting', label: 'Ambient Lighting', imageId: 'transform-kitchen-lighting' },
    ],
  },
  bedroom: {
    title: 'Bedroom',
    layers: [
      { id: 'bedroom-base', label: 'Bare Walls', imageId: 'transform-bedroom-base' },
      { id: 'bedroom-bed', label: 'Serene Bed Area', imageId: 'transform-bedroom-bed' },
      { id: 'bedroom-wardrobe', label: 'Seamless Wardrobe', imageId: 'transform-bedroom-wardrobe' },
      { id: 'bedroom-details', label: 'Personal Details', imageId: 'transform-bedroom-details' },
    ],
  },
};

const TransformationLayer = ({ imageId, isVisible }: { imageId: string, isVisible: boolean }) => {
  const image = PlaceHolderImages.find((img) => img.id === imageId);

  if (!image) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }}
          exit={{ opacity: 0, y: -12, transition: { duration: 0.4, ease: 'easeIn' } }}
          className="absolute inset-0"
        >
          <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            className="object-cover"
            data-ai-hint={image.imageHint}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const RoomTransformation = ({ transformation }: { transformation: typeof roomTransformations.livingRoom }) => {
  const isMobile = useIsMobile();
  const targetRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    if (!isMobile) {
      const unsubscribe = scrollYProgress.on('change', (latest) => {
        const step = Math.min(
          transformation.layers.length - 1,
          Math.floor(latest * transformation.layers.length)
        );
        setActiveStep(step);
      });
      return () => unsubscribe();
    }
  }, [scrollYProgress, transformation.layers.length, isMobile]);

  const handleNextStep = () => {
    setActiveStep((prev) => (prev + 1) % transformation.layers.length);
  };
  
  const currentStepLabel = transformation.layers[activeStep]?.label || '';

  return (
    <div className="relative" ref={targetRef} style={{ height: isMobile ? 'auto' : '300vh' }}>
      <div className="sticky top-0 h-screen w-full flex flex-col">
        <div className="relative flex-grow w-full overflow-hidden rounded-lg shadow-lg">
          {transformation.layers.map((layer, index) => (
            <TransformationLayer key={layer.id} imageId={layer.imageId} isVisible={activeStep >= index} />
          ))}
        </div>
        {isMobile ? (
          <div className="mt-4">
             <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-muted-foreground">{currentStepLabel}</span>
                <span className="text-sm text-muted-foreground">{activeStep + 1} / {transformation.layers.length}</span>
            </div>
            <Button onClick={handleNextStep} className="w-full">
              {activeStep === transformation.layers.length - 1 ? 'Reset' : 'Reveal Next Step'}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="hidden md:flex justify-center items-center py-6">
            <div className="flex items-center gap-4 text-sm">
              {transformation.layers.map((layer, index) => (
                <div key={layer.id} className="flex items-center gap-2">
                  <motion.div
                    className="h-2 w-2 rounded-full"
                    animate={{
                      backgroundColor: activeStep >= index ? 'hsl(var(--primary))' : 'hsl(var(--muted))',
                    }}
                  />
                  <motion.span
                    className="font-medium"
                    animate={{
                      color: activeStep >= index ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
                    }}
                  >
                    {layer.label}
                  </motion.span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


const TransformationSection = () => {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-secondary-foreground sm:text-4xl md:text-5xl font-headline">
            From Empty to Elevated
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-secondary-foreground/80">
            Watch how thoughtful design and craftsmanship transform everyday spaces.
          </p>
        </motion.div>

        <Tabs defaultValue="livingRoom" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="livingRoom">{roomTransformations.livingRoom.title}</TabsTrigger>
              <TabsTrigger value="kitchen">{roomTransformations.kitchen.title}</TabsTrigger>
              <TabsTrigger value="bedroom">{roomTransformations.bedroom.title}</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="livingRoom">
            <RoomTransformation transformation={roomTransformations.livingRoom} />
          </TabsContent>
          <TabsContent value="kitchen">
            <RoomTransformation transformation={roomTransformations.kitchen} />
          </TabsContent>
          <TabsContent value="bedroom">
            <RoomTransformation transformation={roomTransformations.bedroom} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TransformationSection;
