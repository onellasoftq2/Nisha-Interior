'use client';
import React from 'react';
import { useAnimate } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';
import { WhatsappIcon } from './icons/whatsapp-icon';
import { Button } from './ui/button';

const showrooms = [
  {
    name: 'Wakad Center',
    address: '123 Sunshine Plaza, Wakad',
    phone: '+911234567890',
    mapLink: 'https://maps.google.com',
    whatsappLink: 'https://wa.me/919876543210',
  },
  {
    name: 'Kharadi Center',
    address: '456 Urban Square, Kharadi',
    phone: '+911234567891',
    mapLink: 'https://maps.google.com',
    whatsappLink: 'https://wa.me/919876543210',
  },
  {
    name: 'New Kharadi Annex',
    address: '789 Galaxy Galleria, New Kharadi',
    phone: '+911234567892',
    mapLink: 'https://maps.google.com',
    whatsappLink: 'https://wa.me/919876543210',
  },
  {
    name: 'Nanded City Hub',
    address: '101 Aspire Towers, Nanded City',
    phone: '+911234567893',
    mapLink: 'https://maps.google.com',
    whatsappLink: 'https://wa.me/919876543210',
  },
];

const ShowroomsSection = () => {
  return (
    <section id="showrooms" className="bg-background py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl font-headline">
            Visit Our Experience Centers
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-md text-muted-foreground">
            Experience our quality and designs in person. Find the Nisha Interior center nearest to you.
          </p>
        </div>
        <div className="divide-y border divide-border border-border rounded-lg overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
            {showrooms.map(showroom => (
              <ShowroomBox key={showroom.name} {...showroom} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ShowroomBox = ({ name, address, phone, mapLink, whatsappLink }: { name: string; address: string; phone: string; mapLink: string, whatsappLink: string }) => {
  return (
    <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between p-8 bg-background">
      <div>
        <h3 className="text-xl font-semibold font-headline text-foreground">{name}</h3>
        <p className="text-muted-foreground mt-1 text-sm">{address}</p>
      </div>
      <div className="flex-1 lg:hidden" />
      {/* Mobile/Tablet Buttons */}
      <div className="grid grid-cols-3 divide-x divide-border border border-border rounded-md overflow-hidden mt-6 lg:hidden">
        <LinkBox Icon={Phone} text="Call Now" href={`tel:${phone}`} />
        <LinkBox Icon={WhatsappIcon} text="WhatsApp" href={whatsappLink} />
        <LinkBox Icon={MapPin} text="Directions" href={mapLink} />
      </div>
      {/* Desktop Icon Buttons */}
      <div className="hidden lg:flex items-center gap-2 mt-4 lg:mt-0">
          <a href={`tel:${phone}`} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="border-foreground/20">
                <Phone className="h-4 w-4" />
                <span className="sr-only">Call Now</span>
            </Button>
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="border-foreground/20">
                <WhatsappIcon className="h-4 w-4" />
                <span className="sr-only">WhatsApp</span>
            </Button>
          </a>
          <a href={mapLink} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="border-foreground/20">
                <MapPin className="h-4 w-4" />
                <span className="sr-only">Directions</span>
            </Button>
          </a>
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES: Record<string, string[]> = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: Record<string, string[]> = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

type LinkBoxProps = {
  Icon: LucideIcon | typeof WhatsappIcon;
  href?: string;
  text: string;
};

const LinkBox = ({ Icon, href, text }: LinkBoxProps) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const box = e.currentTarget.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-10 w-full place-content-center text-foreground bg-background"
    >
      <div className="flex items-center gap-3">
        <Icon className="text-sm h-4 w-4" />
        <span className="text-sm font-medium">{text}</span>
      </div>

      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-primary text-primary-foreground"
      >
        <div className="flex items-center gap-3">
          <Icon className="text-sm h-4 w-4" />
          <span className="text-sm font-medium">{text}</span>
        </div>
      </div>
    </a>
  );
};

export default ShowroomsSection;
