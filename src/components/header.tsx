'use client';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Video } from 'lucide-react';
import { LogoIcon } from './icons/logo-icon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { useBookingModal } from '@/hooks/use-booking-modal';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const { setShowBookingModal } = useBookingModal();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Factory', href: '/factory' },
    { name: 'Experience Centers', href: '/showrooms' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "border-b border-border/40 bg-background/95 backdrop-blur-sm" : "bg-background/80"
    )}>
      <div className="container flex h-20 items-center px-4 md:px-6">
        <div className="mr-8 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <LogoIcon className="h-6 w-6 text-primary" />
            <span className={cn("font-bold sm:inline-block", isScrolled ? "text-foreground" : "text-foreground")}>Nisha Interior</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navItems.slice(0, 5).map((item) => ( // Hide Contact from main nav
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'relative transition-colors hover:text-primary font-medium',
                  pathname === item.href
                    ? isScrolled ? 'text-primary' : 'text-primary'
                    : isScrolled ? 'text-foreground/70 hover:text-foreground' : 'text-foreground/80 hover:text-foreground',
                  'after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300',
                  pathname === item.href && 'after:scale-x-100'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden flex-1">
             <Link href="/" className="flex items-center space-x-2">
                <LogoIcon className="h-6 w-6 text-primary" />
                <span className={cn("font-bold", isScrolled ? "text-foreground" : "text-foreground")}>Nisha Interior</span>
            </Link>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn(isScrolled ? 'text-foreground' : 'text-foreground')}>
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-background">
                <Link href="/" className="mr-6 flex items-center space-x-2 mb-8">
                  <LogoIcon className="h-6 w-6 text-primary" />
                  <span className="font-bold">Nisha Interior</span>
                </Link>
                <nav className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        'text-lg transition-colors hover:text-primary',
                        pathname === item.href
                          ? 'text-primary font-semibold'
                          : 'text-foreground'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Separator />
                   <Button onClick={() => setShowBookingModal(true)} variant="outline" className="text-base">
                        <Video className="mr-2 h-5 w-5" />
                        Video Consultation
                    </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
           <div className="hidden md:flex items-center gap-2">
             <Button onClick={() => setShowBookingModal(true)} variant="outline" className="text-base">
                <Video /> Video Consultation
             </Button>
             <Button asChild className="text-base">
                <Link href="/contact">Get a Quote</Link>
             </Button>
           </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
