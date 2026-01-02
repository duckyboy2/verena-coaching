'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';

export function TestimonialSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 mb-2">
            {t.testimonial.title}
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 mb-12">
            {t.testimonial.subtitle}
          </h3>

          <div className="relative">
            <div className="w-24 h-1 bg-amber-700 mx-auto mb-12" />

            <blockquote className="text-lg sm:text-xl text-neutral-700 leading-relaxed mb-6 italic">
              {t.testimonial.quote}
            </blockquote>

            <cite className="text-sm text-amber-700 not-italic font-medium">
              {t.testimonial.author}
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
