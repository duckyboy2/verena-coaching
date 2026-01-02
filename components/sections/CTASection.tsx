'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-24 bg-neutral-900 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
          {t.ctaSection.title}
        </h2>
        <p className="text-xl md:text-2xl text-neutral-300 font-light mb-12">
          {t.ctaSection.subtitle}
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <Button 
            className="bg-amber-700 hover:bg-amber-600 text-white text-lg px-8 py-6 rounded-none transition-all duration-300 transform hover:scale-105"
          >
            {t.ctaSection.buttonText}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <p className="text-sm text-neutral-500 max-w-md">
            {t.ctaSection.legal}
          </p>
        </div>
      </div>
    </section>
  );
}
