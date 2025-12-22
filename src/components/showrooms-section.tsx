import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './ui/button';
import { MapPin, Phone } from 'lucide-react';

const showrooms = [
  { name: 'Wakad', phone: '+91 123 456 7890' },
  { name: 'Kharadi', phone: '+91 123 456 7891' },
  { name: 'New Kharadi', phone: '+91 123 456 7892' },
  { name: 'Nanded City', phone: '+91 123 456 7893' },
];

const ShowroomsSection = () => {
  return (
    <section id="showrooms" className="bg-background/80 border-y">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Visit Our Showrooms
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Experience our quality and designs in person. Find the HomeCraft Studio showroom nearest to you.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {showrooms.map((showroom) => (
            <Card key={showroom.name} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-center">{showroom.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <p className="text-muted-foreground">Pune, Maharashtra</p>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Button className="w-full">
                  <Phone className="mr-2 h-4 w-4" /> Call Now
                </Button>
                <Button variant="outline" className="w-full">
                  <MapPin className="mr-2 h-4 w-4" /> Directions
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowroomsSection;
