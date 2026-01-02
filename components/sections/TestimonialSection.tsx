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

          {t.testimonial.items.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.testimonial.items.map((item, idx) => (
                 <div key={idx} className="bg-white p-8 shadow-sm">
                   {/* Placeholder for future specific schema */}
                 </div>
              ))}
            </div>
          )}
          
          {/* Default/Placeholder if provided */}
          {t.testimonial.items.length === 0 && (
             <div className="text-neutral-400 italic">
               (Testimonials coming soon)
             </div>
          )}
        </div>
      </div>
    </section>
  );
}
