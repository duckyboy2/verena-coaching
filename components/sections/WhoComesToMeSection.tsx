'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';

export function WhoComesToMeSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-20 bg-neutral-50" id="my-work">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="border-4 border-neutral-900 p-8 sm:p-12 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4 tracking-wide">
                {t.whoComesToMe.title}
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {t.whoComesToMe.subtitle}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-neutral-900">
              {t.whoComesToMe.listTitle}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.whoComesToMe.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 border-l-4 border-amber-700 shadow-sm"
                >
                  <p className="text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
