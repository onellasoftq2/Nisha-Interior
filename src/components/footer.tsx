import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="font-bold text-lg font-headline">Nisha Interior</h3>
            <p className="text-muted-foreground text-sm">Designed for Your Space. Crafted to Last.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Factory Contact</h4>
            <p className="text-muted-foreground text-sm">Phone: +91 987 654 3210</p>
            <p className="text-muted-foreground text-sm">contact@nishainterior.com</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Showroom Enquiries</h4>
            <p className="text-muted-foreground text-sm">Phone: +91 123 456 7890</p>
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
