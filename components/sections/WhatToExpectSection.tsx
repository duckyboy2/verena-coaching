'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';

export function WhatToExpectSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-24 bg-gradient-to-b from-muted via-background to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-muted-foreground/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-primary mb-20 text-center tracking-wide">
            {t.whatToExpect.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {t.whatToExpect.items.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-card/70 backdrop-blur-sm p-8 rounded-2xl border border-border/50 
                           hover:bg-card hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1
                           transition-all duration-500 ease-out overflow-hidden"
              >
                {/* Large number background */}
                <span className="absolute top-4 right-6 text-8xl font-serif font-bold text-accent/5 
                                select-none transition-all duration-500 group-hover:text-accent/10 group-hover:scale-110">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                {/* Accent line */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-accent to-accent/80 
                               rounded-full transition-all duration-500 group-hover:h-full" />

                {/* Content */}
                <div className="relative z-10">


                  <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom gradient decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
