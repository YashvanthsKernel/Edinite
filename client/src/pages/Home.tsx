import { Link } from "wouter";
import { Lightbulb, Award, Settings, Headphones, ArrowRight, Upload } from "lucide-react";
import HiddenSEO from "@/components/HiddenSEO";
import heroGearImage from '@assets/generated_images/dynamic_3d_mechanical_engineering_assembly.png';

export default function Home() {
  const features = [
    { icon: Lightbulb, label: "Innovative Designs" },
    { icon: Award, label: "Industry Expertise" },
    { icon: Settings, label: "Precision Engineering" },
    { icon: Headphones, label: "Dedicated Support" },
  ];

  return (
    <div className="min-h-screen">
      <HiddenSEO page="home" />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-24 overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-muted/50 dark:bg-white/5 border border-primary/20 rounded-full px-4 py-2">
                <span className="text-sm text-muted-foreground">Need a Quote?</span>
                <Link href="/contact">
                  <span className="text-sm font-semibold text-primary hover:underline cursor-pointer flex items-center gap-1" data-testid="link-get-quote-badge">
                    Get Now <ArrowRight size={14} />
                  </span>
                </Link>
              </div>

              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  BRING YOUR{" "}
                  <span className="text-primary">IDEAS TO REALITY</span>
                </h1>
              </div>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Where engineering excellence meets innovation. From bold concepts to detailed designs, we transform your vision into professional CAD models, simulations, and prototypes.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/services">
                  <div className="group relative inline-flex">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-cyan-400 rounded-full opacity-0 group-hover:opacity-70 blur-lg transition-all duration-500" />
                    <div className="relative inline-flex items-center gap-2 px-8 py-5 rounded-full bg-gradient-to-r from-primary/10 via-purple-500/10 to-cyan-400/10 border border-primary/30 group-hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                      <span className="text-lg font-semibold text-foreground group-hover:text-white transition-colors">Explore Services</span>
                      <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
                <Link href="/contact">
                  <div className="group relative inline-flex">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-cyan-400 rounded-full opacity-0 group-hover:opacity-70 blur-lg transition-all duration-500" />
                    <div className="relative inline-flex items-center gap-2 px-8 py-5 rounded-full bg-gradient-to-r from-primary/10 via-purple-500/10 to-cyan-400/10 border border-primary/30 group-hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                      <Upload size={18} className="group-hover:scale-110 transition-transform" />
                      <span className="text-lg font-semibold text-foreground group-hover:text-white transition-colors">Submit Project</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent rounded-full blur-3xl" />
                <img
                  src={heroGearImage}
                  alt="3D Engineering Visualization"
                  className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl animate-float"
                  data-testid="img-hero"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              className="fill-primary"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-primary py-16 -mt-px">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-4 text-primary-foreground group cursor-pointer"
                data-testid={`feature-${feature.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <feature.icon size={24} />
                </div>
                <span className="font-medium text-sm md:text-base">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                About <span className="text-primary">Edinite</span>
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We help students, startups, and early-stage innovators convert ideas into research-backed designs, CAD models, simulations, and PCB layouts — without fabrication or manufacturing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe innovation begins on the computer. Our work ensures products are perfect in the virtual world before anyone invests in production.
              </p>
              <div className="mt-8 flex gap-4">
                <Link href="/services">
                  <div className="group relative inline-flex">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-500 rounded-lg opacity-0 group-hover:opacity-70 blur-lg transition-all duration-300" />
                    <div className="relative px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
                      Learn More
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
              <div className="absolute bottom-20 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <div className="bg-card p-6 rounded-lg border border-primary/20">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Successful Projects Delivered</div>
                </div>
                <div className="bg-card p-6 rounded-lg border border-primary/20">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-muted-foreground">Industries Served</div>
                </div>
                <div className="bg-card p-6 rounded-lg border border-primary/20">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">On-Time Delivery Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Ready to Bring Your Ideas to Life?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's work together to transform your engineering concepts into reality. Get in touch today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/services">
              <div className="group relative inline-flex">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-cyan-400 rounded-full opacity-0 group-hover:opacity-70 blur-lg transition-all duration-500" />
                <div className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
                  Explore Services
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
            <Link href="/contact">
              <div className="group relative inline-flex">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-70 blur-lg transition-all duration-500" />
                <div className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-primary/50 text-foreground font-semibold group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all">
                  Get in Touch
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
