'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export function HeroSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="relative h-[600px] lg:h-[700px] flex items-center justify-start overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(/images/hero/hero1.jpeg)',
          backgroundPosition: '65% center'
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 tracking-wide leading-tight">
            {t.hero.slogan}
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-neutral-200 mb-12 tracking-wide">
            {t.hero.subline}
          </h2>

          <div className="flex flex-col items-start">
            <Button
              variant="gradient"
              size="lg"
            >
              {t.hero.cta}
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>

            <p className="text-xs text-neutral-400 max-w-md font-light tracking-wide opacity-80">
              {t.hero.legal}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
