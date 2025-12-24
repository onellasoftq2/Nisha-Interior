'use client';
import { Separator } from "./ui/separator";
import { LogoIcon } from "./icons/logo-icon";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
                <LogoIcon className="h-6 w-6 text-primary" />
                <h3 className="font-bold text-xl font-headline">Nisha Interior</h3>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm mx-auto md:mx-0">
                Designing personalized spaces that combine functionality and beauty, crafted with precision in our own factory.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Factory Contact</h4>
            <p className="text-muted-foreground text-sm hover:text-primary transition-colors cursor-pointer">Phone: +91 987 654 3210</p>
            <p className="text-muted-foreground text-sm hover:text-primary transition-colors cursor-pointer">contact@nishainterior.com</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Showroom Enquiries</h4>
            <p className="text-muted-foreground text-sm hover:text-primary transition-colors cursor-pointer">Phone: +91 123 456 7890</p>
            <p className="text-muted-foreground text-sm">Visit our locations in Pune</p>
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
