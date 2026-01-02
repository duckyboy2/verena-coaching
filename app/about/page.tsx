'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

function AboutContent() {
  const { language } = useLanguage();
  const t = content[language];
  const page = t.aboutPage;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Simple Hero */}
        <section className="bg-neutral-100 py-20 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-light text-neutral-900 mb-6 tracking-wide">
              {page.hero.slogan}
            </h1>
            <p className="text-xl text-neutral-600 font-light italic">
              {page.hero.subline}
            </p>
          </div>
        </section>

        {/* Content & Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
               {/* Image Column */}
              <div className="lg:col-span-5 space-y-8 sticky top-24">
                <div className="aspect-[3/4] rounded-sm overflow-hidden bg-neutral-200">
                    <img src="/images/hero/image1.jpeg" alt="Verena Wassermann" className="w-full h-full object-cover" />
                </div>
                <blockquote className="text-xl font-serif italic text-amber-800 leading-relaxed border-l-4 border-amber-700 pl-6 py-2">
                  {page.slogan}
                </blockquote>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6 text-lg text-neutral-700 leading-relaxed font-light">
                {page.content.map((paragraph, idx) => (
                  <p key={idx} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function AboutPage() {
  return (
    <AboutContent />
  );
}
