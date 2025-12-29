'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

const transformationData = {
  living: [
    { id: 'transform-living-base', zIndex: 0, label: 'Empty Room' },
    { id: 'transform-living-sofa', zIndex: 1, label: 'Sofa' },
    { id: 'transform-living-storage', zIndex: 2, label: 'Storage Unit' },
    { id: 'transform-living-decor', zIndex: 3, label: 'Final Touches' },
  ],
  kitchen: [
    { id: 'transform-kitchen-base', zIndex: 0, label: 'Empty Room' },
    { id: 'transform-kitchen-cabinets', zIndex: 1, label: 'Cabinets' },
    { id: 'transform-kitchen-countertops', zIndex: 2, label: 'Countertops' },
    { id: 'transform-kitchen-lighting', zIndex: 3, label: 'Lighting & Decor' },
  ],
  bedroom: [
    { id: 'transform-bedroom-base', zIndex: 0, label: 'Empty Room' },
    { id: 'transform-bedroom-bed', zIndex: 1, label: 'Bed' },
    { id: 'transform-bedroom-wardrobe', zIndex: 2, label: 'Wardrobe' },
    { id: 'transform-bedroom-details', zIndex: 3, label: 'Decor & Details' },
  ],
};

type RoomType = keyof typeof transformationData;

const TransformationStage = ({ room }: { room: RoomType }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageLayers = transformationData[room].map(item => ({
    ...item,
    data: PlaceHolderImages.find((img) => img.id === item.id)
  }));
  
  const [activeStep, setActiveStep] = useState(0);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    const layers = gsap.utils.toArray('.reveal-layer') as HTMLElement[];
    if (layers.length <= 1) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${layers.length * 700}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const step = Math.min(layers.length - 1, Math.floor(progress * layers.length));
          setActiveStep(step);
        },
      },
      defaults: {
        ease: 'power1.inOut',
        duration: 1,
      },
    });

    layers.forEach((layer, index) => {
      if (index > 0) { // Don't animate the base layer
        tl.fromTo(
          layer,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0 },
          index * 0.8 // Stagger the animations
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

  }, [room]);


  return (
    <div ref={containerRef} className="w-full min-h-screen flex flex-col items-center justify-center">
        <div className="relative aspect-video w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl bg-secondary">
          {imageLayers.map((layer, index) => (
            layer.data && (
              <div 
                key={layer.id} 
                className={cn("absolute inset-0 reveal-layer", index > 0 && "opacity-0")}
                style={{ zIndex: layer.zIndex }}
              >
                <Image
                  src={layer.data.imageUrl}
                  alt={layer.data.description}
                  width={1920}
                  height={1080}
                  priority
                  className="w-full h-full object-cover"
                  data-ai-hint={layer.data.imageHint}
                />
              </div>
            )
          ))}
        </div>
        <div className="w-full max-w-4xl mt-8">
            <div className="flex justify-between items-center px-4">
                {imageLayers.map((step, index) => (
                    <div key={step.id} className="flex flex-col items-center gap-2 relative flex-1">
                        <div className={cn(
                            "w-4 h-4 rounded-full transition-colors duration-300",
                            index <= activeStep ? "bg-primary" : "bg-border"
                        )} />
                        <p className={cn(
                            "text-sm font-medium transition-colors duration-300",
                             index <= activeStep ? "text-primary" : "text-muted-foreground"
                        )}>
                            {step.label}
                        </p>
                    </div>
                ))}
            </div>
            <div className="w-full h-1 bg-border rounded-full mt-[-1.5rem] relative -z-10">
                <div 
                    className="h-1 bg-primary rounded-full transition-all duration-300 ease-linear"
                    style={{ width: `${(activeStep / (imageLayers.length - 1)) * 100}%` }}
                />
            </div>
        </div>
    </div>
  );
};


const TransformationSection = () => {
  const [activeTab, setActiveTab] = useState<RoomType>('living');
  
  return (
    <div className="w-full py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl tracking-tighter font-semibold font-headline text-secondary-foreground">
              From Empty to Elevated
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto leading-relaxed tracking-tight text-secondary-foreground/80">
              Watch how thoughtful design and craftsmanship transform everyday
              spaces. Scroll to see the change.
            </p>
          </div>
          <Tabs defaultValue={activeTab} onValueChange={(value) => setActiveTab(value as RoomType)} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="living">Living Room</TabsTrigger>
              <TabsTrigger value="kitchen">Kitchen</TabsTrigger>
              <TabsTrigger value="bedroom">Bedroom</TabsTrigger>
            </TabsList>
            <div className="pt-8 w-full">
                <TabsContent value="living" forceMount={true} className={cn(activeTab !== 'living' && 'hidden')}>
                    <TransformationStage room="living" />
                </TabsContent>
                <TabsContent value="kitchen" forceMount={true} className={cn(activeTab !== 'kitchen' && 'hidden')}>
                    <TransformationStage room="kitchen" />
                </TabsContent>
                <TabsContent value="bedroom" forceMount={true} className={cn(activeTab !== 'bedroom' && 'hidden')}>
                    <TransformationStage room="bedroom" />
                </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TransformationSection;
