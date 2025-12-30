'use client';
import { Separator } from "./ui/separator";
import { LogoIcon } from "./icons/logo-icon";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center justify-center md:justify-start gap-2">
                <LogoIcon className="h-6 w-6 text-primary" />
                <h3 className="font-bold text-xl font-headline">Nisha Interior</h3>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mx-auto md:mx-0">
                Designing personalized spaces that combine functionality and beauty, crafted with precision in our own factory.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-1 text-sm">
                <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
                <li><Link href="/factory" className="text-muted-foreground hover:text-primary transition-colors">Factory</Link></li>
                <li><Link href="/showrooms" className="text-muted-foreground hover:text-primary transition-colors">Experience Centers</Link></li>
                <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Contact Us</h4>
            <ul className="space-y-1 text-sm">
                <li><a href="tel:+919561311757" className="text-muted-foreground hover:text-primary transition-colors">Phone: +91 9561311757</a></li>
                <li><a href="mailto:contact@nishainterior.com" className="text-muted-foreground hover:text-primary transition-colors">contact@nishainterior.com</a></li>
                <li><p className="text-muted-foreground">Pune, Maharashtra</p></li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nisha Interior. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
