'use client';
import React from 'react';
import { motion, useAnimate } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';
import { WhatsappIcon } from './icons/whatsapp-icon';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';


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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border rounded-lg overflow-hidden shadow-lg">
            {showrooms.map((showroom, index) => (
              <ShowroomBox 
                key={showroom.name} 
                {...showroom} 
                className={cn(
                    index > 0 && "border-t", // Top border for all but first on mobile
                    index % 2 !== 0 && "md:border-l", // Left border for second item in row on md
                    index > 1 && "md:border-t", // Top border for second row on md
                    index > 0 && "lg:border-l lg:border-t-0" // Left border for all but first on lg, remove top border
                )}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

const ShowroomBox = ({ name, address, phone, mapLink, whatsappLink, className }: { name: string; address: string; phone: string; mapLink: string, whatsappLink: string, className?: string }) => {
  return (
    <div className={cn("relative flex flex-col justify-between p-8 bg-background", className)}>
      <div>
        <h3 className="text-xl font-semibold font-headline text-foreground">{name}</h3>
        <p className="text-muted-foreground mt-1 text-sm">{address}</p>
      </div>
      
      {/* Action buttons for lg and larger screens with tooltips */}
      <div className="hidden lg:flex items-center gap-2 mt-6">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a href={`tel:${phone}`} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" size="icon" className="w-full border-foreground/20">
                  <Phone className="h-4 w-4" />
                  <span className="sr-only">Call Now</span>
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Call Now</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" size="icon" className="w-full border-foreground/20">
                  <WhatsappIcon className="h-5 w-5" />
                  <span className="sr-only">WhatsApp</span>
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>WhatsApp</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a href={mapLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" size="icon" className="w-full border-foreground/20">
                  <MapPin className="h-4 w-4" />
                  <span className="sr-only">Directions</span>
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Get Directions</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Action buttons for smaller than lg screens */}
      <div className="flex lg:hidden items-center gap-2 mt-6">
        <a href={`tel:${phone}`} target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button variant="outline" size="icon" className="w-full border-foreground/20">
            <Phone className="h-4 w-4" />
            <span className="sr-only">Call Now</span>
          </Button>
        </a>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button variant="outline" size="icon" className="w-full border-foreground/20">
            <WhatsappIcon className="h-5 w-5" />
            <span className="sr-only">WhatsApp</span>
          </Button>
        </a>
        <a href={mapLink} target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button variant="outline" size="icon" className="w-full border-foreground/20">
            <MapPin className="h-4 w-4" />
            <span className="sr-only">Directions</span>
          </Button>
        </a>
      </div>
    </div>
  );
};


export default ShowroomsSection;
