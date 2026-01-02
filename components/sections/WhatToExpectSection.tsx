'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';

export function WhatToExpectSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 mb-16 text-center tracking-wide">
              {t.whatToExpect.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.whatToExpect.items.map((item, idx) => (
                <div key={idx} className="bg-neutral-50 p-6 rounded-sm border-t-2 border-amber-700 hover:shadow-lg transition-shadow duration-300">
                  <span className="text-4xl font-serif text-amber-200/50 absolute -mt-10 -ml-2 select-none">
                    0{idx + 1}
                  </span>
                  <h3 className="text-xl font-medium text-neutral-900 mb-3 relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed relative z-10 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
