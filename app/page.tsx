'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { WhatToExpectSection } from '@/components/sections/WhatToExpectSection';
import { WhoComesToMeSection } from '@/components/sections/WhoComesToMeSection';
import { WhyMyWorkSection } from '@/components/sections/WhyMyWorkSection';
import { CTASection } from '@/components/sections/CTASection';
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <WhatToExpectSection />
        <WhoComesToMeSection />
        <WhyMyWorkSection />
        <CTASection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
}
