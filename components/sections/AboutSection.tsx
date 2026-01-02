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
                backgroundImage: 'url(https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800)',
              }}
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-neutral-900">
              {t.about.greeting}
            </h2>

            <div className="space-y-1">
              <div className="w-16 h-1 bg-amber-700" />
              <p className="text-xl text-neutral-700 font-medium">
                {t.about.title}
              </p>
              <p className="text-xl text-neutral-700 font-medium">
                {t.about.subtitle}
              </p>
            </div>

            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>{t.about.intro}</p>
              <p>{t.about.description}</p>
              <p className="font-medium">{t.about.mission}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-6 rounded-none">
                {t.about.ctaPrimary}
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white px-6 py-6 rounded-none">
                {t.about.ctaSecondary}
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
