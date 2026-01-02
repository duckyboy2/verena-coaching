'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Send, MapPin, Mail, Phone, Clock, CheckCircle } from 'lucide-react';

const contactContent = {
    en: {
        title: 'Get in Touch',
        subtitle: 'I\'d love to hear from you. Send me a message and I\'ll respond as soon as possible.',
        form: {
            name: 'Your Name',
            email: 'Email Address',
            phone: 'Phone Number (optional)',
            subject: 'Subject',
            message: 'Your Message',
            submit: 'Send Message',
            sending: 'Sending...',
            success: 'Message sent successfully! I\'ll get back to you soon.',
        },
        info: {
            title: 'Contact Information',
            location: 'Munich, Germany',
            email: 'hello@verenawassermann.de',
            phone: '+49 123 456 789',
            hours: 'Mon - Fri: 9:00 - 18:00',
        },
        subjects: [
            'General Inquiry',
            '1:1 Coaching',
            'Group Programs',
            'Corporate Wellness',
            'Other',
        ],
    },
    de: {
        title: 'Kontakt aufnehmen',
        subtitle: 'Ich freue mich von Ihnen zu hören. Schreiben Sie mir und ich antworte so schnell wie möglich.',
        form: {
            name: 'Ihr Name',
            email: 'E-Mail-Adresse',
            phone: 'Telefonnummer (optional)',
            subject: 'Betreff',
            message: 'Ihre Nachricht',
            submit: 'Nachricht senden',
            sending: 'Wird gesendet...',
            success: 'Nachricht erfolgreich gesendet! Ich melde mich bald bei Ihnen.',
        },
        info: {
            title: 'Kontaktinformationen',
            location: 'München, Deutschland',
            email: 'hello@verenawassermann.de',
            phone: '+49 123 456 789',
            hours: 'Mo - Fr: 9:00 - 18:00',
        },
        subjects: [
            'Allgemeine Anfrage',
            '1:1 Coaching',
            'Gruppenprogramme',
            'Betriebliches Gesundheitsmanagement',
            'Sonstiges',
        ],
    },
};

export default function ContactPage() {
    const { language } = useLanguage();
    const t = contactContent[language];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-stone-50">
            <Header />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-stone-100 via-amber-50/30 to-stone-100 py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-stone-800 mb-6">
                                {t.title}
                            </h1>
                            <p className="text-lg text-stone-600 leading-relaxed">
                                {t.subtitle}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Form & Info */}
                <section className="py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

                                {/* Contact Form */}
                                <div className="lg:col-span-3">
                                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                                        {isSubmitted ? (
                                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                                    <CheckCircle className="w-8 h-8 text-green-600" />
                                                </div>
                                                <p className="text-lg text-stone-700">{t.form.success}</p>
                                                <Button
                                                    variant="outline"
                                                    className="mt-6"
                                                    onClick={() => setIsSubmitted(false)}
                                                >
                                                    Send another message
                                                </Button>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {/* Name */}
                                                    <div>
                                                        <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                                                            {t.form.name} *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            required
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none"
                                                        />
                                                    </div>

                                                    {/* Email */}
                                                    <div>
                                                        <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                                                            {t.form.email} *
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            required
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {/* Phone */}
                                                    <div>
                                                        <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                                                            {t.form.phone}
                                                        </label>
                                                        <input
                                                            type="tel"
                                                            id="phone"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none"
                                                        />
                                                    </div>

                                                    {/* Subject */}
                                                    <div>
                                                        <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">
                                                            {t.form.subject} *
                                                        </label>
                                                        <select
                                                            id="subject"
                                                            name="subject"
                                                            required
                                                            value={formData.subject}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none bg-white"
                                                        >
                                                            <option value="">--</option>
                                                            {t.subjects.map((subject, idx) => (
                                                                <option key={idx} value={subject}>{subject}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>

                                                {/* Message */}
                                                <div>
                                                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                                                        {t.form.message} *
                                                    </label>
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        required
                                                        rows={6}
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none resize-none"
                                                    />
                                                </div>

                                                {/* Submit */}
                                                <Button
                                                    type="submit"
                                                    variant="gradient"
                                                    size="lg"
                                                    className="w-full md:w-auto"
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? t.form.sending : t.form.submit}
                                                    <Send className="ml-2 w-5 h-5" />
                                                </Button>
                                            </form>
                                        )}
                                    </div>
                                </div>

                                {/* Contact Info */}
                                <div className="lg:col-span-2">
                                    <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-8 md:p-10 text-white h-full">
                                        <h2 className="text-2xl font-serif mb-8">{t.info.title}</h2>

                                        <div className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center shrink-0">
                                                    <MapPin className="w-5 h-5 text-amber-400" />
                                                </div>
                                                <div>
                                                    <p className="text-white/60 text-sm mb-1">Location</p>
                                                    <p className="text-white">{t.info.location}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center shrink-0">
                                                    <Mail className="w-5 h-5 text-amber-400" />
                                                </div>
                                                <div>
                                                    <p className="text-white/60 text-sm mb-1">Email</p>
                                                    <a href={`mailto:${t.info.email}`} className="text-white hover:text-amber-300 transition-colors">
                                                        {t.info.email}
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center shrink-0">
                                                    <Phone className="w-5 h-5 text-amber-400" />
                                                </div>
                                                <div>
                                                    <p className="text-white/60 text-sm mb-1">Phone</p>
                                                    <a href={`tel:${t.info.phone}`} className="text-white hover:text-amber-300 transition-colors">
                                                        {t.info.phone}
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center shrink-0">
                                                    <Clock className="w-5 h-5 text-amber-400" />
                                                </div>
                                                <div>
                                                    <p className="text-white/60 text-sm mb-1">Working Hours</p>
                                                    <p className="text-white">{t.info.hours}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Decorative Element */}
                                        <div className="mt-12 pt-8 border-t border-white/10">
                                            <p className="text-white/60 text-sm leading-relaxed">
                                                {language === 'en'
                                                    ? 'I typically respond within 24-48 hours during business days.'
                                                    : 'Ich antworte in der Regel innerhalb von 24-48 Stunden an Werktagen.'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
