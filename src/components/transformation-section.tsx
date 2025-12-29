'use client';
import { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { GripVertical } from 'lucide-react';

type RoomType = 'living' | 'kitchen' | 'bedroom';

const transformationData: Record<RoomType, { before: string; after: string }> = {
  living: {
    before: 'transform-living-decor', // Furnished
    after: 'transform-living-base',   // Empty
  },
  kitchen: {
    before: 'transform-kitchen-lighting', // Furnished
    after: 'transform-kitchen-base',    // Empty
  },
  bedroom: {
    before: 'transform-bedroom-details', // Furnished
    after: 'transform-bedroom-base',    // Empty
  },
};

const ComparisonSlider = ({ room }: { room: RoomType }) => {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const beforeImage = PlaceHolderImages.find((img) => img.id === transformationData[room].before);
  const afterImage = PlaceHolderImages.find((img) => img.id === transformationData[room].after);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ('touches' in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ('clientX' in e) {
      x = (e as React.MouseEvent).clientX - rect.left;
    }

    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setInset(percentage);
  };

  if (!beforeImage || !afterImage) {
    return <div className="aspect-video w-full bg-muted rounded-2xl flex items-center justify-center"><p>Images not found.</p></div>;
  }
  
  return (
    <div
      className="relative aspect-video w-full max-w-6xl h-full overflow-hidden rounded-2xl select-none cursor-ew-resize"
      onMouseMove={onMouseMove}
      onMouseLeave={() => setOnMouseDown(false)}
      onMouseUp={() => setOnMouseDown(false)}
      onTouchMove={onMouseMove}
      onTouchEnd={() => setOnMouseDown(false)}
      onMouseDown={(e) => {
        setOnMouseDown(true);
        onMouseMove(e);
      }}
      onTouchStart={(e) => {
        setOnMouseDown(true);
        onMouseMove(e);
      }}
    >
      {/* After Image (Bottom Layer) */}
      <Image
        src={afterImage.imageUrl}
        alt={afterImage.description}
        width={1920}
        height={1080}
        priority
        className="absolute left-0 top-0 w-full h-full object-cover"
        data-ai-hint={afterImage.imageHint}
      />
      
      {/* Before Image (Top Layer, Clipped) */}
      <div
        className="absolute left-0 top-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - inset}% 0 0)` }}
      >
        <Image
          src={beforeImage.imageUrl}
          alt={beforeImage.description}
          width={1920}
          height={1080}
          priority
          className="absolute left-0 top-0 w-full h-full object-cover"
          data-ai-hint={beforeImage.imageHint}
        />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 h-full w-1 bg-white/80 shadow-md z-10 select-none pointer-events-none"
        style={{ left: `calc(${inset}% - 2px)` }}
      >
        <div
          className="bg-white rounded-md w-10 h-10 absolute top-1/2 -translate-y-1/2 -ml-5 flex justify-center items-center shadow-xl text-foreground"
        >
          <GripVertical className="h-6 w-6" />
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
              Drag the slider to see how thoughtful design and craftsmanship transform everyday spaces.
            </p>
          </div>
          <Tabs defaultValue={activeTab} onValueChange={(value) => setActiveTab(value as RoomType)} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="living">Living Room</TabsTrigger>
              <TabsTrigger value="kitchen">Kitchen</TabsTrigger>
              <TabsTrigger value="bedroom">Bedroom</TabsTrigger>
            </TabsList>
            <div className="pt-8 w-full flex justify-center">
                <TabsContent value="living" forceMount={true} className={cn("w-full", activeTab !== 'living' && 'hidden')}>
                    <ComparisonSlider room="living" />
                </TabsContent>
                <TabsContent value="kitchen" forceMount={true} className={cn("w-full", activeTab !== 'kitchen' && 'hidden')}>
                    <ComparisonSlider room="kitchen" />
                </TabsContent>
                <TabsContent value="bedroom" forceMount={true} className={cn("w-full", activeTab !== 'bedroom' && 'hidden')}>
                    <ComparisonSlider room="bedroom" />
                </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TransformationSection;
