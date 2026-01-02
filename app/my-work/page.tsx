'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Check, X } from 'lucide-react';

function MyWorkContent() {
  const { language } = useLanguage();
  const t = content[language];
  const page = t.myWorkPage;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-neutral-900 text-white py-24 md:py-32 text-center px-4">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 tracking-wide">
              {page.hero.slogan}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 font-light max-w-3xl mx-auto">
              {page.hero.subline}
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-12 text-center">
              {page.intro.title}
            </h2>
            <div className="space-y-6 text-lg text-neutral-700 leading-relaxed font-light">
              {page.intro.text.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Difference */}
        <section className="py-20 bg-neutral-50 border-y border-neutral-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-8 text-center">
              {page.difference.title}
            </h2>
            <p className="text-center text-xl text-neutral-600 mb-12">
                {page.difference.text}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {page.difference.items.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded shadow-sm flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-amber-600 mt-2.5 shrink-0" />
                  <span className="text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-lg italic text-neutral-600 font-medium max-w-2xl mx-auto">
              {page.difference.conclusion}
            </p>
          </div>
        </section>

        {/* For Whom / Not Do */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-serif font-light text-center mb-16">
              {page.forWhom.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              {/* For Whom Column */}
              <div>
                <h3 className="text-2xl font-light mb-8 text-neutral-900 border-b border-amber-200 pb-2 inline-block">
                  {page.forWhom.forWhomTitle}
                </h3>
                <p className="mb-6 text-neutral-600">{page.forWhom.forWhomText}</p>
                <ul className="space-y-4">
                  {page.forWhom.forWhomItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What I Don't Do Column */}
              <div className="bg-neutral-50 p-8 rounded-lg">
                <h3 className="text-2xl font-light mb-8 text-neutral-900 border-b border-neutral-300 pb-2 inline-block">
                  {page.forWhom.notDoTitle}
                </h3>
                <ul className="space-y-6">
                  {page.forWhom.notDoItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                      <span className="text-neutral-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-20 bg-amber-50/50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              {page.outcomes.title}
            </h2>
            <p className="text-xl text-neutral-600 mb-12">
              {page.outcomes.intro}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
              {page.outcomes.items.map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded border border-amber-100 text-neutral-700 font-medium">
                  {item}
                </div>
              ))}
            </div>

            <p className="text-xl md:text-2xl font-serif italic text-amber-800 leading-relaxed">
              {page.outcomes.conclusion}
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default function MyWorkPage() {
  return (
    <MyWorkContent />
  );
}
