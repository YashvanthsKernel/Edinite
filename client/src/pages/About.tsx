import { Palette, Waves, Cpu, GraduationCap, Zap, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import GlassPanel from "@/components/GlassPanel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function About() {
  const leadership = [
    {
      name: "Karthikeyan R",
      position: "Founder & CEO",
      description: "Mechanical engineering innovator dedicated to making advanced design accessible",
      specialties: ["CAD Design", "ISRO Projects", "EV Systems"]
    },
    {
      name: "Shrivatsav Tamil Kumaran",
      position: "COO & CSO",
      description: "Product design expert with strong passion for engineering solutions",
      specialties: ["Product Design", "Leadership", "Strategy"]
    },
    {
      name: "Prasanth Kannan",
      position: "CFO & Sales Director",
      description: "Driving financial vision and bridging technical needs with business solutions",
      specialties: ["Financial Planning", "Client Strategy", "Business Growth"]
    },
    {
      name: "Dhinessh Raj S",
      position: "Engineering Director",
      description: "FEA, prototyping, and CAD expert transforming complex ideas into solutions",
      specialties: ["FEA Analysis", "Prototyping", "CAD Expertise"]
    }
  ];

  const services = [
    {
      title: "3D CAD Design & Rendering",
      description: "Professional CAD modeling and photorealistic visualization",
      icon: Palette,
      color: "from-blue-500/20"
    },
    {
      title: "CFD & FEA Simulation",
      description: "Advanced structural and thermal analysis for optimization",
      icon: Waves,
      color: "from-cyan-500/20"
    },
    {
      title: "Electronics & PCB Design",
      description: "Circuit design and PCB layout for electronic systems",
      icon: Cpu,
      color: "from-purple-500/20"
    },
    {
      title: "Edu-Tech Training",
      description: "Comprehensive engineering education and workshops",
      icon: GraduationCap,
      color: "from-orange-500/20"
    }
  ];

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "10+", label: "Industries Served" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "4", label: "Expert Leaders" }
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <ScrollAnimation>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6">
                About <span className="text-primary">Edinite</span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Transforming engineering ideas into digital reality through advanced design, simulation, and innovation
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => {
              return (
                <ScrollAnimation key={index} delay={index * 75}>
                  <div className="group cursor-pointer">
                    <GlassPanel className="p-6 text-center hover-elevate transition-all duration-300">
                      <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </GlassPanel>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-primary/5 via-transparent to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-fit">Who We Are</Badge>
                  <h2 className="text-4xl font-heading font-bold text-foreground">
                    Engineering Excellence Meets Innovation
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Edinite is a digital engineering studio dedicated to converting ideas into research-backed designs, CAD models, and validated simulations — without fabrication or manufacturing.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe innovation begins on the computer. We help students, startups, and innovators ensure their products are perfect in the virtual world before any investment in production.
                </p>
                <div className="pt-4">
                  <Link href="/services">
                    <Button size="lg" data-testid="button-explore-our-services">
                      Explore Our Services
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={150}>
              <div className="space-y-4">
                <div className="p-6 bg-card/50 border border-primary/20 rounded-2xl hover-elevate transition-all">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <span className="text-foreground font-semibold">Our Philosophy: </span>
                    "Perfect designs before fabrication"
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Professional engineering standards",
                    "Industry-grade simulation tools",
                    "Comprehensive technical documentation",
                    "Client-focused collaboration"
                  ].map((item, index) => (
                    <ScrollAnimation key={index} delay={200 + index * 50}>
                      <div className="flex items-center gap-3 p-3 bg-card/30 rounded-lg hover:bg-card/50 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <ScrollAnimation>
              <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                Our <span className="text-primary">Vision & Mission</span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Guiding principles that drive every decision and innovation
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 lg:mb-0">
            <ScrollAnimation>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <GlassPanel className="relative p-12 h-full flex flex-col justify-between hover-elevate transition-all duration-300">
                  <div>
                    <h3 className="text-3xl font-heading font-bold text-foreground mb-4">Vision</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      To become India's leading digital engineering studio, where ideas evolve into validated designs with industry-standard precision and excellence.
                    </p>
                  </div>
                </GlassPanel>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={150}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <GlassPanel className="relative p-12 h-full flex flex-col justify-between hover-elevate transition-all duration-300">
                  <div>
                    <h3 className="text-3xl font-heading font-bold text-foreground mb-4">Mission</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Make advanced design, simulation, and engineering R&D accessible to all — enabling students, startups, and innovators to build smarter, optimized solutions.
                    </p>
                  </div>
                </GlassPanel>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={200}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group p-6 rounded-2xl bg-card/30 border border-primary/10 hover:border-primary/30 hover-elevate transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">01</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Innovation First</h4>
                </div>
                <p className="text-sm text-muted-foreground">Cutting-edge tools and methodologies for breakthrough solutions</p>
              </div>
              <div className="group p-6 rounded-2xl bg-card/30 border border-primary/10 hover:border-primary/30 hover-elevate transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">02</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Quality Driven</h4>
                </div>
                <p className="text-sm text-muted-foreground">Industry standards and rigorous validation processes</p>
              </div>
              <div className="group p-6 rounded-2xl bg-card/30 border border-primary/10 hover:border-primary/30 hover-elevate transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">03</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Accessibility</h4>
                </div>
                <p className="text-sm text-muted-foreground">Making advanced engineering accessible to everyone</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <ScrollAnimation>
              <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                What We <span className="text-primary">Specialize In</span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                End-to-end digital engineering services tailored to your needs
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="group hover-elevate overflow-hidden transition-all cursor-pointer border-primary/10 hover:border-primary/30" data-testid={`card-service-${index}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <IconComponent className="text-primary" size={28} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                          <p className="text-muted-foreground text-sm">{service.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <ScrollAnimation>
              <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                Meet Our <span className="text-primary">Leadership</span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <p className="text-xl text-muted-foreground">
                Visionary experts driving innovation in digital engineering
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <GlassPanel className="p-8 group hover:border-primary/50 transition-colors" data-testid={`card-leader-${index}`}>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-1" data-testid={`text-leader-name-${index}`}>
                        {leader.name}
                      </h3>
                      <p className="text-primary font-semibold" data-testid={`text-leader-position-${index}`}>
                        {leader.position}
                      </p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`text-leader-description-${index}`}>
                      {leader.description}
                    </p>
                  </div>
                </GlassPanel>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-primary/10 via-transparent to-primary/10">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <GlassPanel className="p-12 text-center">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                Ready to Collaborate?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Transform your engineering ideas into reality with our expert team of digital engineers and innovators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" data-testid="button-start-project">
                    Start Your Project
                  </Button>
                </Link>
                <a 
                  href="mailto:edinite.official@gmail.com" 
                  className="inline-flex items-center justify-center"
                >
                  <Button size="lg" variant="outline" data-testid="link-email-button">
                    Get In Touch
                  </Button>
                </a>
              </div>
            </GlassPanel>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
