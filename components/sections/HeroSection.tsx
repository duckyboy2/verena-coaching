'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Fragment } from 'react';

export function HeroSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <>
    <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center sm:justify-start overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-[25%_center] sm:bg-[65%_center]"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(/images/hero/hero1.jpeg)',
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto sm:mx-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-24 tracking-wide leading-tight text-center sm:text-left">
            {t.hero.sloganParts.map((part, index) => (
              <Fragment key={index}>
                {(part as any).newline && <br />}
                <span
                  className={`
                    ${(part as any).newline ? 'block sm:inline-block w-full sm:w-auto sm:ml-16' : ''}
                    ${((part as any).newline && part.type !== 'script') || (part as any).raised ? 'transform sm:-translate-y-12 inline-block' : ''}
                    ${part.type === 'script' ? `font-gellatio text-6xl sm:text-7xl lg:text-8xl xl:text-9xl ml-2 inline-block transform sm:translate-y-20 leading-none h-0 text-[#D4AF37] ${(part as any).newline ? 'translate-y-4' : 'translate-y-12'}` : ''}
                  `}
                >
                  {part.text}
                </span>
              </Fragment>
            ))}
          </h1>


          <div className="flex flex-col items-center sm:items-start">
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-none shadow-lg mb-8"
            >
              {t.hero.cta}
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            
            <p className="text-xs text-white/60 max-w-md font-light tracking-wide text-center sm:text-left">
              {t.hero.legal}
            </p>
          </div>
        </div>
      </div>
      </section>

      {/* Subline Banner */}
      <div className="w-full bg-gradient-to-r from-primary via-accent to-primary text-accent-foreground py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg sm:text-xl font-light tracking-wide whitespace-nowrap overflow-x-auto no-scrollbar">
            {t.hero.subline}
          </p>
        </div>
      </div>
    </>
  );
}
