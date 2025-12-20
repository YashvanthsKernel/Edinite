/**
 * FAQ Component
 * 
 * Accordion-style FAQ section with JSON-LD FAQPage schema injection.
 * Designed for service pages to improve SEO with structured data.
 */

import { useState, useEffect } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { getFAQs, generateFAQSchema, type FAQItem } from '@/lib/linkingConfig';
import ScrollAnimation from './ScrollAnimation';

interface FAQProps {
    /** Current page path to get relevant FAQs */
    path?: string;
    /** Custom FAQs to display (overrides path-based FAQs) */
    faqs?: FAQItem[];
    /** Section title */
    title?: string;
    /** Whether to inject JSON-LD schema */
    injectSchema?: boolean;
}

export default function FAQ({
    path,
    faqs: customFaqs,
    title = 'Frequently Asked Questions',
    injectSchema = true,
}: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // Get FAQs from config or use custom ones
    const faqs = customFaqs || (path ? getFAQs(path) : []);

    // Inject FAQPage JSON-LD schema
    useEffect(() => {
        if (!injectSchema || faqs.length === 0) return;

        const schema = generateFAQSchema(faqs);
        if (!schema) return;

        const scriptId = 'faq-json-ld';
        let scriptTag = document.getElementById(scriptId) as HTMLScriptElement;

        if (!scriptTag) {
            scriptTag = document.createElement('script');
            scriptTag.id = scriptId;
            scriptTag.type = 'application/ld+json';
            document.head.appendChild(scriptTag);
        }

        scriptTag.textContent = JSON.stringify(schema);

        // Cleanup on unmount
        return () => {
            const tag = document.getElementById(scriptId);
            if (tag) tag.remove();
        };
    }, [faqs, injectSchema]);

    if (faqs.length === 0) return null;

    return (
        <section className="py-16 px-6 bg-gradient-to-b from-primary/5 to-transparent">
            <div className="max-w-4xl mx-auto">
                <ScrollAnimation>
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                            <HelpCircle className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">FAQ</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                            {title}
                        </h2>
                    </div>
                </ScrollAnimation>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <ScrollAnimation key={index} delay={index * 50}>
                            <div
                                className="rounded-xl border border-primary/20 bg-card/30 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/40"
                                data-testid={`faq-item-${index}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-5 text-left"
                                    aria-expanded={openIndex === index}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    <span className="font-medium text-foreground pr-4">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                <div
                                    id={`faq-answer-${index}`}
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                        }`}
                                >
                                    <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}
