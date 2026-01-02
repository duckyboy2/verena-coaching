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
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundPosition: '65% center'
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-2 tracking-wide">
            {t.hero.title}
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-2 tracking-wide">
            {t.hero.titleHighlight}
          </h2>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif italic text-amber-600 mb-8">
            {t.hero.titleScript}
          </h2>

          <Button
            className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 text-lg rounded-none shadow-lg"
          >
            {t.hero.cta}
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
