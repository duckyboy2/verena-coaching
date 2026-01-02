'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Instagram, Linkedin, Globe, Mail } from 'lucide-react';

export function Footer() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <div className="text-xs font-light tracking-wide text-neutral-400">Verena Newsome</div>
              <div className="text-sm font-semibold tracking-wider text-white">MIND & BODY COACHING</div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Where Medicine Meets Soul
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:contact@verena-newsome.com" className="flex items-center text-sm hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                contact@verena-newsome.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Follow</h3>
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-400">
              {t.footer.copyright}
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="hover:text-white transition-colors">
                {t.footer.privacy}
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
