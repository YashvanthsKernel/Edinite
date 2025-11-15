import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import GlassPanel from "@/components/GlassPanel";
import { Link } from "wouter";
import heroImage from '@assets/generated_images/Product_optimization_background_2334833a.png';

export default function Buying() {
  const packages = [
    {
      name: "Starter",
      price: "$499",
      duration: "per project",
      description: "Perfect for small projects and quick prototypes",
      features: [
        "Single CAD design iteration",
        "Basic 3D model delivery",
        "Up to 2 revisions",
        "Standard file formats (STEP, STL)",
        "Email support",
        "7-day delivery"
      ],
      popular: false,
      testId: "package-starter"
    },
    {
      name: "Professional",
      price: "$1,499",
      duration: "per project",
      description: "Comprehensive engineering solutions for product development",
      features: [
        "Complete CAD design package",
        "FEA/CFD analysis included",
        "Up to 5 revisions",
        "All file formats + documentation",
        "Priority email & phone support",
        "2-week delivery",
        "Free consultation call",
        "Manufacturing-ready drawings"
      ],
      popular: true,
      testId: "package-professional"
    },
    {
      name: "Enterprise",
      price: "Custom",
      duration: "per project",
      description: "End-to-end solutions for complex engineering projects",
      features: [
        "Full engineering lifecycle support",
        "Advanced simulation & optimization",
        "Unlimited revisions",
        "Complete documentation suite",
        "Dedicated project manager",
        "Flexible timeline",
        "On-site consultation available",
        "Custom licensing agreements",
        "Ongoing technical support"
      ],
      popular: false,
      testId: "package-enterprise"
    }
  ];

  const services = [
    {
      title: "3D CAD Design",
      price: "$75/hour",
      description: "Professional mechanical design and modeling services"
    },
    {
      title: "FEA/CFD Simulation",
      price: "$100/hour",
      description: "Advanced structural and fluid dynamics analysis"
    },
    {
      title: "3D Printing",
      price: "From $50",
      description: "Rapid prototyping with various materials and technologies"
    },
    {
      title: "PCB Design",
      price: "$85/hour",
      description: "Custom circuit board design and layout"
    },
    {
      title: "MATLAB Projects",
      price: "$90/hour",
      description: "Control systems and simulation modeling"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <section 
        className="relative py-20"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(1,0,48,0.85), rgba(1,0,48,0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-heading font-bold text-foreground mb-6" data-testid="text-page-title">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground" data-testid="text-page-subtitle">
            Choose the package that fits your project needs or pay as you go with our hourly rates
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-foreground text-center mb-4" data-testid="text-section-packages">
            Project <span className="text-primary">Packages</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12" data-testid="text-section-packages-subtitle">
            Fixed-price packages for common project types
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {packages.map((pkg) => (
              <GlassPanel 
                key={pkg.name} 
                className={`p-8 relative ${pkg.popular ? 'border-primary border-2' : ''}`}
                data-testid={pkg.testId}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-purple-600 text-white px-4 py-1 rounded-full text-sm font-subheading font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2" data-testid={`text-package-name-${pkg.name.toLowerCase()}`}>
                    {pkg.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-4xl font-heading font-bold text-primary" data-testid={`text-price-${pkg.name.toLowerCase()}`}>
                      {pkg.price}
                    </span>
                    <span className="text-muted-foreground ml-2" data-testid={`text-duration-${pkg.name.toLowerCase()}`}>
                      {pkg.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm" data-testid={`text-description-${pkg.name.toLowerCase()}`}>
                    {pkg.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href="/request-quote">
                  <Button 
                    className="w-full" 
                    variant={pkg.popular ? "default" : "outline"}
                    data-testid={`button-select-${pkg.name.toLowerCase()}`}
                  >
                    Get Started <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </GlassPanel>
            ))}
          </div>

          <h2 className="text-4xl font-heading font-bold text-foreground text-center mb-4" data-testid="text-section-hourly">
            Hourly <span className="text-primary">Rates</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12" data-testid="text-section-hourly-subtitle">
            Flexible pricing for ongoing projects and specific tasks
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service) => (
              <GlassPanel key={service.title} className="p-6" data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <h3 className="text-xl font-subheading font-semibold text-foreground mb-2" data-testid={`text-service-title-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {service.title}
                </h3>
                <div className="text-2xl font-heading font-bold text-primary mb-2" data-testid={`text-service-price-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {service.price}
                </div>
                <p className="text-muted-foreground text-sm" data-testid={`text-service-desc-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {service.description}
                </p>
              </GlassPanel>
            ))}
          </div>

          <GlassPanel className="p-8 max-w-4xl mx-auto" data-testid="card-help-section">
            <div className="text-center">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4" data-testid="text-help-title">
                Not Sure Which Package to Choose?
              </h3>
              <p className="text-muted-foreground mb-6" data-testid="text-help-desc">
                Our team can help you determine the best solution for your specific needs and budget. Get a custom quote tailored to your project requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/request-quote">
                  <Button size="lg" data-testid="button-custom-quote">
                    Request Custom Quote
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" data-testid="button-talk-expert">
                    Talk to an Expert
                  </Button>
                </Link>
              </div>
            </div>
          </GlassPanel>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6" data-testid="text-section-included">
            What's Included in Every Project?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Regular progress updates and communication",
              "Industry-standard file formats",
              "Quality assurance and validation",
              "Technical documentation",
              "Post-delivery support (30 days)",
              "Confidentiality agreement (NDA)"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 justify-start">
                <Check className="text-primary flex-shrink-0" size={20} />
                <span className="text-muted-foreground text-left">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
