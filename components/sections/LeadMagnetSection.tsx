'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Mail, Instagram, Linkedin, Globe } from 'lucide-react';

export function LeadMagnetSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-xl text-neutral-700">
                {t.leadMagnet.prefix}{' '}
                <span className="font-bold text-neutral-900">{t.leadMagnet.highlight}</span>{' '}
                {t.leadMagnet.suffix}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="amber" size="lg">
                <Mail className="mr-2 w-5 h-5" />
                {t.leadMagnet.cta}
              </Button>

              <div className="flex items-center gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
