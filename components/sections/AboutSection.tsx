'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export function AboutSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div
              className="aspect-[3/4] rounded-lg bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage: 'url(/images/hero/image1.jpeg)',
              }}
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-neutral-900">
              {t.intro.greeting}
            </h2>

            <div className="space-y-1">
              <div className="w-16 h-1 bg-amber-700" />
              <p className="text-xl text-neutral-700 font-medium">
                {t.intro.title}
              </p>
            </div>

            <div className="space-y-4 text-neutral-600 leading-relaxed">
              {t.intro.description.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* Buttons removed as per new design spec for Intro section */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
