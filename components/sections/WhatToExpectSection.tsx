'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';

export function WhatToExpectSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-24 bg-gradient-to-b from-stone-100 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-200/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-800 mb-20 text-center tracking-wide">
            {t.whatToExpect.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {t.whatToExpect.items.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-stone-200/50 
                           hover:bg-white hover:shadow-2xl hover:shadow-amber-900/10 hover:-translate-y-1
                           transition-all duration-500 ease-out overflow-hidden"
              >
                {/* Large number background */}
                <span className="absolute top-4 right-6 text-8xl font-serif font-bold text-amber-500/10 
                                select-none transition-all duration-500 group-hover:text-amber-500/20 group-hover:scale-110">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                {/* Accent line */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-amber-500 to-amber-700 
                               rounded-full transition-all duration-500 group-hover:h-full" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-stone-800 mb-3 group-hover:text-amber-800 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-stone-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom gradient decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
