/**
 * RelatedLinks Component
 * 
 * Displays a grid of related services/pages for internal linking.
 * Used on service pages to cross-link to other services.
 */

import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { getRelatedServices, type RelatedLink } from '@/lib/linkingConfig';
import ScrollAnimation from './ScrollAnimation';

interface RelatedLinksProps {
    currentPath: string;
    title?: string;
    count?: number;
}

export default function RelatedLinks({
    currentPath,
    title = 'Related Services',
    count = 3,
}: RelatedLinksProps) {
    const relatedServices = getRelatedServices(currentPath, count);

    if (relatedServices.length === 0) return null;

    return (
        <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <ScrollAnimation>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                            {title}
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Explore our other engineering services to complete your project
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedServices.map((service, index) => (
                        <ScrollAnimation key={service.href} delay={index * 100}>
                            <Link href={service.href}>
                                <div
                                    className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer"
                                    data-testid={`related-link-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                >
                                    {/* Hover glow effect */}
                                    <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />

                                    <div className="relative">
                                        {/* Icon */}
                                        {service.icon && (
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <service.icon className="w-6 h-6 text-primary" />
                                            </div>
                                        )}

                                        {/* Content */}
                                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            {service.description}
                                        </p>

                                        {/* Arrow link indicator */}
                                        <div className="flex items-center gap-2 text-primary text-sm font-medium">
                                            <span>Learn more</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}
