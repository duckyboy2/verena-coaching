'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { LeadMagnetSection } from '@/components/sections/LeadMagnetSection';
import { WhatToExpectSection } from '@/components/sections/WhatToExpectSection';
import { WhoComesToMeSection } from '@/components/sections/WhoComesToMeSection';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <TestimonialSection />
          <AboutSection />
          <LeadMagnetSection />
          <WhatToExpectSection />
          <WhoComesToMeSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
