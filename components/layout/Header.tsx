'use client';

import { useState } from 'react';
import { Menu, X, Instagram, Linkedin, Globe } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = content[language];

  const navItems = [
    { label: t.nav.myWork, href: '/my-work' },
    { label: t.nav.aboutMe, href: '/about' },
    { label: t.nav.programs, href: '#programs' },
    { label: t.nav.contact, href: '#contact' },
    { label: t.nav.more, href: '#more' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-800/95 backdrop-blur-sm border-b border-neutral-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-10 w-32 sm:h-12 sm:w-40 lg:w-48">
                <img
                  src="/images/logo/logo.png" 
                  alt="Verena Wassermann Logo" 
                  className="h-full w-full object-contain object-left"
                />
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-neutral-300 hover:text-neutral-100 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-200 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-200 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <button className="text-neutral-400 hover:text-neutral-200 transition-colors">
              <Globe className="w-5 h-5" />
            </button>

            <div className="flex items-center bg-neutral-700 rounded-md p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  language === 'en'
                    ? 'bg-amber-700 text-white'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('de')}
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  language === 'de'
                    ? 'bg-amber-700 text-white'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                DE
              </button>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-neutral-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-800 border-t border-neutral-700">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-neutral-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center space-x-4 pt-4 border-t border-neutral-700">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-200 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-200 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <button className="text-neutral-400 hover:text-neutral-200 transition-colors">
                <Globe className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center bg-neutral-700 rounded-md p-1 w-fit">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  language === 'en'
                    ? 'bg-amber-700 text-white'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('de')}
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  language === 'de'
                    ? 'bg-amber-700 text-white'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                DE
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
