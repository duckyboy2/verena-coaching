import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

import localFont from 'next/font/local';
const gellatio = localFont({
  src: '../public/fonts/gellatio.ttf',
  variable: '--font-gellatio',
  display: 'swap',
});
// const gotham = localFont({
//   src: '../public/fonts/Gotham.ttf',
//   variable: '--font-gotham',
//   display: 'swap',
// });
// const avenir = localFont({
//   src: '../public/fonts/Avenir.ttf',
//   variable: '--font-avenir',
//   display: 'swap',
// });

export const metadata: Metadata = {
  title: 'Verena Wassermann - Mind & Body Coaching',
  description: 'Where Medicine Meets Soul. Physician & Mind-Body Coach specializing in nervous system regulation and somatic depth work.',
  openGraph: {
  },
  twitter: {
    card: 'summary_large_image',
  },
};

import { LanguageProvider } from '@/contexts/LanguageContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} ${gellatio.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
