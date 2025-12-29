'use client';
import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { GripVertical } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const TransformationSection = () => {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const beforeImage = PlaceHolderImages.find((img) => img.id === 'transform-living-decor');
  const afterImage = PlaceHolderImages.find((img) => img.id === 'transform-living-base');

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }
    
    const percentage = (x / rect.width) * 100;
    setInset(Math.max(0, Math.min(100, percentage)));
  };
  
  const handleInteractionStart = (e: React.MouseEvent | React.TouchEvent) => {
    setOnMouseDown(true);
    onMouseMove(e);
  };

  const handleInteractionEnd = () => {
    setOnMouseDown(false);
  };

  if (!beforeImage || !afterImage) {
    return null; // Or a fallback UI
  }

  return (
    <div className="w-full py-20 lg:py-40 bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl tracking-tighter font-semibold font-headline text-secondary-foreground">
              From Empty to Elevated
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto leading-relaxed tracking-tight text-secondary-foreground/80">
              Watch how thoughtful design and craftsmanship transform everyday spaces. Drag the slider to see the change.
            </p>
          </div>
          <div className="pt-12 w-full">
            <div
              className="relative aspect-video w-full h-full overflow-hidden rounded-2xl select-none"
              onMouseMove={onMouseMove}
              onMouseLeave={handleInteractionEnd}
              onMouseUp={handleInteractionEnd}
              onTouchMove={onMouseMove}
              onTouchEnd={handleInteractionEnd}
            >
              <div
                className="bg-primary h-full w-1 absolute z-20 top-0 -ml-0.5 select-none"
                style={{
                  left: inset + "%",
                }}
              >
                <button
                  className="bg-primary rounded-full text-primary-foreground hover:scale-110 transition-all w-10 h-10 select-none -translate-y-1/2 absolute top-1/2 -ml-5 z-30 cursor-ew-resize flex justify-center items-center"
                  onTouchStart={handleInteractionStart}
                  onMouseDown={handleInteractionStart}
                >
                  <GripVertical className="h-5 w-5 select-none" />
                </button>
              </div>
              <Image
                src={beforeImage.imageUrl}
                alt={beforeImage.description}
                width={1920}
                height={1080}
                priority
                className="absolute left-0 top-0 z-10 w-full h-full aspect-video rounded-2xl select-none"
                style={{
                  clipPath: `inset(0 ${100 - inset}% 0 0)`,
                }}
                data-ai-hint={beforeImage.imageHint}
              />
              <Image
                src={afterImage.imageUrl}
                alt={afterImage.description}
                width={1920}
                height={1080}
                priority
                className="absolute left-0 top-0 w-full h-full aspect-video rounded-2xl select-none"
                data-ai-hint={afterImage.imageHint}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransformationSection;
