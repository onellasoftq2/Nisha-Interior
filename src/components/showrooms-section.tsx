'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  MapPin,
  Building,
  ChevronRight,
  Palette,
  DraftingCompass,
  Users,
  LucideIcon,
  Phone,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';

// =========================================
// 1. CONFIGURATION & DATA TYPES
// =========================================

export type ShowroomId = 'wakad' | 'kharadi' | 'new-kharadi' | 'nanded-city';

export interface FeatureMetric {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface ShowroomData {
  id: ShowroomId;
  label: string; // Display name for the switcher
  title: string;
  description: string;
  imageId: string;
  colors: {
    gradient: string; // Tailwind gradient classes
    glow: string;     // Tailwind color class for accents
    ring: string;     // Tailwind border color for rings
  };
  stats: {
    address: string;
    phone: string;
  };
  features: FeatureMetric[];
}

const SHOWROOM_DATA: Record<ShowroomId, ShowroomData> = {
  wakad: {
    id: 'wakad',
    label: 'Wakad',
    title: 'Wakad Experience Center',
    description: 'Our flagship center in the heart of Wakad, showcasing a wide range of modular kitchens, living room setups, and innovative storage solutions.',
    imageId: 'highlight-showrooms',
    colors: {
      gradient: 'from-blue-600 to-indigo-900',
      glow: 'bg-blue-500',
      ring: 'border-blue-500/50',
    },
    stats: { address: '123 Sunshine Plaza, 411057', phone: '+91 123 456 7890' },
    features: [
      { label: 'Full Kitchen & Living Setups', value: 'Explore', icon: Building },
      { label: 'Material & Finish Library', value: 'Touch & Feel', icon: Palette },
      { label: 'On-Site Design Consultants', value: 'Meet', icon: Users },
    ],
  },
  kharadi: {
    id: 'kharadi',
    label: 'Kharadi',
    title: 'Kharadi Design Hub',
    description: 'Located in the bustling IT corridor, this center focuses on bespoke home office and compact living solutions, perfect for modern apartments.',
    imageId: 'customization-image',
    colors: {
      gradient: 'from-emerald-600 to-teal-900',
      glow: 'bg-emerald-500',
      ring: 'border-emerald-500/50',
    },
    stats: { address: '456 Urban Square, 411014', phone: '+91 123 456 7891' },
    features: [
      { label: 'Model Apartment Layouts', value: 'Visualize', icon: Building },
      { label: 'Extensive Wardrobe Displays', value: 'Discover', icon: Palette },
      { label: 'Personalized Consultations', value: 'Book', icon: Users },
    ],
  },
   'new-kharadi': {
    id: 'new-kharadi',
    label: 'New Kharadi',
    title: 'New Kharadi Annex',
    description: 'Our newest and largest center, featuring interactive design stations and a comprehensive look at our factory-to-home process.',
    imageId: 'service-wardrobes',
    colors: {
      gradient: 'from-purple-600 to-violet-900',
      glow: 'bg-purple-500',
      ring: 'border-purple-500/50',
    },
    stats: { address: '789 Galaxy Galleria, 411014', phone: '+91 123 456 7892' },
    features: [
      { label: 'Interactive 3D Design Stations', value: 'Create', icon: DraftingCompass },
      { label: 'Behind-the-Scenes Factory Insights', value: 'Learn', icon: Palette },
      { label: 'Expert Technical Guidance', value: 'Consult', icon: Users },
    ],
  },
  'nanded-city': {
    id: 'nanded-city',
    label: 'Nanded City',
    title: 'Nanded City Boutique',
    description: 'A cozy, boutique-style showroom perfect for personalized consultations and exploring our curated collection of finishes and materials.',
    imageId: 'services-kitchens',
    colors: {
      gradient: 'from-amber-600 to-yellow-900',
      glow: 'bg-amber-500',
      ring: 'border-amber-500/50',
    },
    stats: { address: '101 Aspire Towers, 411041', phone: '+91 123 456 7893' },
    features: [
      { label: 'Curated Material Palettes', value: 'Select', icon: Palette },
      { label: 'One-on-One Design Sessions', value: 'Focus', icon: Users },
      { label: 'Smart Storage Solutions', value: 'Organize', icon: Building },
    ],
  },
};

const showroomIds: ShowroomId[] = ['wakad', 'kharadi', 'new-kharadi', 'nanded-city'];

// =========================================
// 2. ANIMATION VARIANTS
// =========================================

const ANIMATIONS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
    exit: { opacity: 0, y: -10, filter: 'blur(5px)' },
  },
  image: (isReversed: boolean): Variants => ({
    initial: {
      opacity: 0,
      scale: 1.2,
      filter: 'blur(15px)',
      rotate: isReversed ? 15 : -15,
      x: isReversed ? 80 : -80,
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      rotate: 0,
      x: 0,
      transition: { type: 'spring', stiffness: 260, damping: 20, delay: 0.1 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      filter: 'blur(20px)',
      transition: { duration: 0.25 },
    },
  }),
};

// =========================================
// 3. SUB-COMPONENTS
// =========================================

const BackgroundGradient = ({ activeId }: { activeId: ShowroomId }) => {
  const { colors } = SHOWROOM_DATA[activeId];

  return (
    <div className="absolute inset-0 pointer-events-none -z-10">
      <motion.div
        key={activeId}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`absolute inset-0 bg-gradient-to-b ${colors.gradient} opacity-20 blur-3xl`}
      />
    </div>
  );
};

const ShowroomVisual = ({ data, isReversed }: { data: ShowroomData; isReversed: boolean }) => {
  const image = PlaceHolderImages.find(img => img.id === data.imageId);
  return (
    <motion.div layout="position" className="relative group shrink-0">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className={`absolute inset-[-15%] rounded-full border border-dashed border-foreground/10 ${data.colors.ring}`}
      />
      
      <div className="relative h-80 w-80 md:h-[450px] md:w-[450px] rounded-lg border border-foreground/5 shadow-2xl flex items-center justify-center overflow-hidden bg-background/20 backdrop-blur-sm">
        <AnimatePresence mode="wait">
          {image && (
            <motion.div
              key={data.id}
              variants={ANIMATIONS.image(isReversed)}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full h-full"
            >
              <Image
                src={image.imageUrl}
                alt={data.title}
                width={800}
                height={600}
                className="w-full h-full object-cover"
                draggable={false}
                data-ai-hint={image.imageHint}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

       <motion.div
        layout="position"
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
      >
        <Link href={`tel:${data.stats.phone}`} className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground bg-background/80 px-4 py-2 rounded-full border border-foreground/5 backdrop-blur-sm transition-colors hover:text-foreground">
          <span className={`h-1.5 w-1.5 rounded-full ${data.colors.glow} animate-pulse`} />
          Call Now
        </Link>
      </motion.div>
    </motion.div>
  );
};

const ShowroomDetails = ({ data, isReversed }: { data: ShowroomData; isReversed: boolean }) => {
  const alignClass = isReversed ? 'items-end text-right' : 'items-start text-left';

  return (
    <motion.div
      key={data.id}
      variants={ANIMATIONS.container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`flex flex-col ${alignClass}`}
    >
      {/* All content has been removed as per the user's request for a minimal design. */}
    </motion.div>
  );
};

const Switcher = ({ 
  activeId, 
  onToggle 
}: { 
  activeId: ShowroomId; 
  onToggle: (id: ShowroomId) => void 
}) => {
  const options = Object.values(SHOWROOM_DATA).map(p => ({ id: p.id, label: p.label }));

  return (
    <div className="absolute bottom-12 inset-x-0 flex justify-center z-50 pointer-events-none">
      <motion.div layout className="pointer-events-auto flex items-center gap-1 p-1.5 rounded-full bg-background/80 backdrop-blur-2xl border border-foreground/10 shadow-lg ring-1 ring-foreground/5">
        {options.map((opt) => (
          <motion.button
            key={opt.id}
            onClick={() => onToggle(opt.id)}
            whileTap={{ scale: 0.96 }}
            className="relative w-24 h-12 rounded-full flex items-center justify-center text-sm font-medium focus:outline-none"
          >
            {activeId === opt.id && (
              <motion.div
                layoutId="island-surface"
                className="absolute inset-0 rounded-full bg-foreground/10 shadow-inner"
                transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              />
            )}
            <span className={`relative z-10 transition-colors duration-300 ${activeId === opt.id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
              {opt.label}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

// =========================================
// 4. MAIN COMPONENT
// =========================================

export default function ShowroomsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeId = showroomIds[activeIndex];

  const currentData = SHOWROOM_DATA[activeId];
  const isReversed = (activeIndex % 2) === 1;

  const handleToggle = (id: ShowroomId) => {
    const newIndex = showroomIds.indexOf(id);
    setActiveIndex(newIndex);
  };

  return (
    <section id="showrooms" className="relative min-h-[100vh] w-full bg-background text-foreground overflow-hidden flex flex-col items-center justify-center py-24">
      
      <BackgroundGradient activeId={activeId} />

      <div className="text-center mb-16 px-4 md:px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
            Visit Our Experience Centers
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Experience our quality and designs in person. Find the Nisha Interior center nearest to you.
          </p>
      </div>

      <main className="relative z-10 w-full px-6 flex flex-col justify-center max-w-7xl mx-auto">
        <motion.div
          layout
          transition={{ type: 'spring', bounce: 0.1, duration: 0.9 }}
          className={`flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 lg:gap-32 w-full ${
            isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
          }`}
        >
          <ShowroomVisual data={currentData} isReversed={isReversed} />

          <motion.div layout="position" className="w-full max-w-md">
            <AnimatePresence mode="wait">
              <ShowroomDetails 
                key={activeId}
                data={currentData} 
                isReversed={isReversed} 
              />
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </main>

      <Switcher activeId={activeId} onToggle={handleToggle} />
    </section>
  );
}

    