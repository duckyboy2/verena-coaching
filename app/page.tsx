'use client';

import { useState, useEffect, useCallback } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FirstScreenBlob } from '@/components/sections/FirstScreenBlob';
import { HeroSection } from '@/components/sections/HeroSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { WhatToExpectSection } from '@/components/sections/WhatToExpectSection';
import { WhoComesToMeSection } from '@/components/sections/WhoComesToMeSection';
import { WhyMyWorkSection } from '@/components/sections/WhyMyWorkSection';
import { CTASection } from '@/components/sections/CTASection';

export default function Home() {
  const [isFirstScreenHidden, setIsFirstScreenHidden] = useState(false);

  // const handleScrollDown = useCallback(() => {
  //   setIsFirstScreenHidden(true);
  // }, []);

  // Listen for scroll-up when at the top of the page to bring back first screen
  useEffect(() => {
    let accumulatedScroll = 0;
    const threshold = -150; // Need to scroll up this much to trigger

    const handleWheel = (e: WheelEvent) => {
      // Only if first screen is hidden and we're at top of page
      if (isFirstScreenHidden && window.scrollY === 0 && e.deltaY < 0) {
        accumulatedScroll += e.deltaY;

        if (accumulatedScroll < threshold) {
          setIsFirstScreenHidden(false);
          accumulatedScroll = 0;
        }
      } else {
        accumulatedScroll = 0;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isFirstScreenHidden]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* <FirstScreenBlob
        isHidden={isFirstScreenHidden}
        onScrollDown={handleScrollDown}
      /> */}
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
