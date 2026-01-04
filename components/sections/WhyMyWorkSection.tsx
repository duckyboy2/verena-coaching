'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Check } from 'lucide-react';

export function WhyMyWorkSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-center font-light mb-12 text-primary">
            {t.whyMyWorkDifference.title}
          </h2>

          <div className="bg-white p-8 md:p-12 shadow-sm rounded-sm">
            <p className="text-lg text-foreground mb-6">
              {t.whyMyWorkDifference.intro}
            </p>
            
            <ul className="mb-12 space-y-4">
              {t.whyMyWorkDifference.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                  <span className="text-muted-foreground italic">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-medium text-primary mb-6 border-b border-accent/20 pb-2 inline-block">
              {t.whyMyWorkDifference.integrationTitle}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {t.whyMyWorkDifference.integrations.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="p-1 bg-accent/10 rounded text-accent shrink-0">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-foreground font-medium text-center border-t border-border pt-8">
              {t.whyMyWorkDifference.conclusion}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
