/**
 * ServiceCTA Component
 * 
 * Reusable call-to-action block for service pages.
 * Links to contact page with service context.
 */

import { Link } from 'wouter';
import { ArrowRight, Zap, MessageCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollAnimation from './ScrollAnimation';

interface ServiceCTAProps {
    /** Title of the CTA section */
    title?: string;
    /** Description text */
    description?: string;
    /** Primary button text */
    primaryButtonText?: string;
    /** Custom gradient classes */
    gradient?: string;
}

export default function ServiceCTA({
    title = 'Ready to Start Your Project?',
    description = 'Get in touch with our team to discuss your engineering needs. We respond within 24 hours.',
    primaryButtonText = 'Get a Free Quote',
    gradient = 'from-primary via-purple-500 to-cyan-400',
}: ServiceCTAProps) {
    return (
        <section className="py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <ScrollAnimation>
                    <div className="relative">
                        {/* Background glow */}
                        <div className={`absolute -inset-4 bg-gradient-to-r ${gradient} rounded-3xl blur-2xl opacity-20`} />

                        <div className="relative rounded-2xl border border-primary/30 bg-card/80 backdrop-blur-xl overflow-hidden">
                            {/* Top gradient bar */}
                            <div className={`h-1 bg-gradient-to-r ${gradient}`} />

                            <div className="p-8 md:p-12">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    {/* Left content */}
                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                                            {title}
                                        </h2>
                                        <p className="text-muted-foreground mb-6 leading-relaxed">
                                            {description}
                                        </p>

                                        {/* Trust indicators */}
                                        <div className="flex flex-wrap gap-4 mb-8">
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Clock className="w-4 h-4 text-primary" />
                                                <span>24h Response</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <MessageCircle className="w-4 h-4 text-primary" />
                                                <span>Free Consultation</span>
                                            </div>
                                        </div>

                                        {/* CTA Buttons */}
                                        <div className="flex flex-wrap gap-4">
                                            <Link href="/contact">
                                                <Button
                                                    size="lg"
                                                    className={`group bg-gradient-to-r ${gradient} hover:shadow-xl transition-all duration-300 border-0`}
                                                    data-testid="cta-primary-button"
                                                >
                                                    <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                                    {primaryButtonText}
                                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </Link>
                                            <Link href="/portfolio">
                                                <Button
                                                    size="lg"
                                                    variant="outline"
                                                    className="border-primary/30 hover:border-primary/50 hover:bg-primary/5"
                                                    data-testid="cta-secondary-button"
                                                >
                                                    View Our Work
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Right content - Stats or visual */}
                                    <div className="hidden lg:block">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 text-center">
                                                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                                                <div className="text-sm text-muted-foreground">Projects Delivered</div>
                                            </div>
                                            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 text-center">
                                                <div className="text-3xl font-bold text-primary mb-1">98%</div>
                                                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                                            </div>
                                            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 text-center">
                                                <div className="text-3xl font-bold text-primary mb-1">48h</div>
                                                <div className="text-sm text-muted-foreground">Avg. Turnaround</div>
                                            </div>
                                            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 text-center">
                                                <div className="text-3xl font-bold text-primary mb-1">5★</div>
                                                <div className="text-sm text-muted-foreground">Client Rating</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
