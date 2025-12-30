import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Libre_Baskerville, Nunito } from 'next/font/google';
import { cn } from '@/lib/utils';
import { GetStartedModalProvider } from '@/components/get-started-modal';

const libre_baskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: 'Nisha Interior',
  description: 'Designed for Your Space. Crafted to Last.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-sans antialiased", libre_baskerville.variable, nunito.variable)}>
        <GetStartedModalProvider>
            {children}
        </GetStartedModalProvider>
        <Toaster />
      </body>
    </html>
  );
}
