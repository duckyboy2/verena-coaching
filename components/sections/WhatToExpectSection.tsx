'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';

export function WhatToExpectSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="border-4 border-neutral-900 p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6 tracking-wide">
              {t.whatToExpect.title}
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {t.whatToExpect.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
