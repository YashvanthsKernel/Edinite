import { 
  Palette, Waves, Cpu, GraduationCap, Target, Lightbulb, 
  Users, Award, ArrowRight, ChevronRight, Sparkles,
  TrendingUp, Shield, Clock, CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import GlassPanel from "@/components/GlassPanel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollAnimation from "@/components/ScrollAnimation";
import { useState, useEffect } from "react";

function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${target}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [target, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(target * easeOut));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <span id={`counter-${target}`} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

function HexagonGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <polygon 
              points="25,0 50,14.4 50,43.4 25,57.7 0,43.4 0,14.4" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  );
}

export default function About() {
  const leadership = [
    {
      name: "Karthikeyan R",
      position: "Founder & CEO",
      description: "Mechanical engineering innovator dedicated to making advanced design accessible",
      specialties: ["CAD Design", "ISRO Projects", "EV Systems"],
      initials: "KR"
    },
    {
      name: "Shrivatsav Tamil Kumaran",
      position: "COO & CSO",
      description: "Product design expert with strong passion for engineering solutions",
      specialties: ["Product Design", "Leadership", "Strategy"],
      initials: "ST"
    },
    {
      name: "Prasanth Kannan",
      position: "CFO & Sales Director",
      description: "Driving financial vision and bridging technical needs with business solutions",
      specialties: ["Financial Planning", "Client Strategy", "Business Growth"],
      initials: "PK"
    },
    {
      name: "Dhinessh Raj S",
      position: "Engineering Director",
      description: "FEA, prototyping, and CAD expert transforming complex ideas into solutions",
      specialties: ["FEA Analysis", "Prototyping", "CAD Expertise"],
      initials: "DR"
    }
  ];

  const services = [
    {
      title: "3D CAD Design & Rendering",
      description: "Professional CAD modeling and photorealistic visualization that brings your concepts to life",
      icon: Palette,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "CFD & FEA Simulation",
      description: "Advanced structural and thermal analysis for optimization and validation",
      icon: Waves,
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      title: "Electronics & PCB Design",
      description: "Complete circuit design and PCB layout for sophisticated electronic systems",
      icon: Cpu,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Edu-Tech Training",
      description: "Comprehensive engineering education, workshops, and skill development programs",
      icon: GraduationCap,
      gradient: "from-orange-500 to-amber-500"
    }
  ];

  const stats = [
    { value: 50, suffix: "+", label: "Projects Delivered", icon: CheckCircle2 },
    { value: 10, suffix: "+", label: "Industries Served", icon: TrendingUp },
    { value: 100, suffix: "%", label: "Client Satisfaction", icon: Shield },
    { value: 24, suffix: "/7", label: "Support Available", icon: Clock }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Cutting-edge tools and methodologies for breakthrough engineering solutions"
    },
    {
      icon: Target,
      title: "Precision Driven",
      description: "Industry-standard processes ensuring accuracy in every deliverable"
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Working alongside clients to transform their vision into reality"
    },
    {
      icon: Award,
      title: "Excellence Standard",
      description: "Committed to delivering exceptional quality in every project"
    }
  ];

  const timeline = [
    { year: "Vision", title: "The Beginning", description: "Founded with a mission to democratize engineering excellence" },
    { year: "Growth", title: "Expanding Horizons", description: "Extended services across CAD, simulation, and PCB design" },
    { year: "Impact", title: "Industry Recognition", description: "Trusted partner for students, startups, and enterprises" },
    { year: "Future", title: "Scaling Innovation", description: "Building India's premier digital engineering ecosystem" }
  ];

  return (
    <div className="min-h-screen pt-24 overflow-hidden">
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-600/5" />
        <HexagonGrid />
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px] animate-pulse" 
             style={{ animationDuration: '12s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <ScrollAnimation>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Digital Engineering Excellence</span>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={100}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-foreground mb-8 leading-tight">
              Transforming Ideas Into
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Where engineering precision meets innovation. We craft validated designs, 
              simulations, and prototypes that set the foundation for tomorrow's products.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="group" data-testid="button-start-your-journey">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" data-testid="button-view-our-work">
                  View Our Work
                </Button>
              </Link>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={400}>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                const statId = stat.label.toLowerCase().replace(/\s+/g, '-');
                return (
                  <div key={index} className="group" data-testid={`card-stat-${statId}`}>
                    <GlassPanel className="p-6 text-center hover-elevate transition-all duration-300">
                      <div className="flex justify-center mb-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <p className="text-3xl md:text-4xl font-bold text-foreground mb-1" data-testid={`text-counter-${statId}`}>
                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                      </p>
                      <p className="text-sm text-muted-foreground" data-testid={`text-label-${statId}`}>{stat.label}</p>
                    </GlassPanel>
                  </div>
                );
              })}
            </div>
          </ScrollAnimation>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-2.5 bg-primary/50 rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation>
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="outline" className="w-fit">Who We Are</Badge>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
                    Engineering Excellence
                    <span className="block text-primary">Meets Innovation</span>
                  </h2>
                </div>
                
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    <span className="text-foreground font-semibold">Edinite</span> is a digital engineering studio 
                    dedicated to converting bold ideas into research-backed designs, CAD models, and validated 
                    simulations — without the constraints of physical fabrication.
                  </p>
                  <p>
                    We believe innovation begins on the computer. Our mission is to help students, startups, 
                    and visionary innovators ensure their products achieve perfection in the virtual world 
                    before any investment in production.
                  </p>
                </div>

                <div className="pt-4">
                  <Link href="/services">
                    <Button size="lg" className="group" data-testid="button-explore-our-services">
                      Explore Our Services
                      <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={150}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-3xl blur-2xl opacity-50" />
                
                <GlassPanel className="relative p-8">
                  <div className="absolute top-0 left-0 w-20 h-20 bg-primary/10 rounded-br-3xl" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-purple-500/10 rounded-tl-3xl" />
                  
                  <div className="relative space-y-6">
                    <div className="p-5 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/10">
                      <p className="text-lg text-foreground font-medium italic">
                        "Perfect designs before fabrication"
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">— Our Philosophy</p>
                    </div>

                    <div className="grid gap-3">
                      {[
                        "Professional engineering standards",
                        "Industry-grade simulation tools",
                        "Comprehensive technical documentation",
                        "Client-focused collaboration"
                      ].map((item, index) => (
                        <div 
                          key={index} 
                          className="flex items-center gap-3 p-3 bg-background/50 rounded-lg group hover:bg-background transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassPanel>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative overflow-hidden">
        <HexagonGrid />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <ScrollAnimation>
              <Badge variant="outline" className="mb-4">Our Journey</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Vision & <span className="text-primary">Mission</span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Guiding principles that drive every decision and innovation at Edinite
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <ScrollAnimation>
              <div className="relative group h-full" data-testid="card-vision">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
                <GlassPanel className="relative p-10 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-foreground mb-4" data-testid="text-vision-title">Vision</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed flex-grow" data-testid="text-vision-description">
                    To become India's leading digital engineering studio, where ideas evolve into 
                    validated designs with industry-standard precision, setting new benchmarks for 
                    engineering excellence across the nation.
                  </p>
                </GlassPanel>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={150}>
              <div className="relative group h-full" data-testid="card-mission">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-primary rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
                <GlassPanel className="relative p-10 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-primary flex items-center justify-center mb-6">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-foreground mb-4" data-testid="text-mission-title">Mission</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed flex-grow" data-testid="text-mission-description">
                    Make advanced design, simulation, and engineering R&D accessible to all — 
                    enabling students, startups, and innovators to build smarter, optimized 
                    solutions that shape the future of technology.
                  </p>
                </GlassPanel>
              </div>
            </ScrollAnimation>
          </div>

          <div className="relative py-12">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {timeline.map((item, index) => {
                const timelineId = item.year.toLowerCase();
                return (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <div className="relative" data-testid={`card-timeline-${timelineId}`}>
                      <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                      <div className="lg:pt-8 text-center">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3" data-testid={`badge-timeline-${timelineId}`}>
                          {item.year}
                        </span>
                        <h4 className="text-lg font-bold text-foreground mb-2" data-testid={`text-timeline-title-${timelineId}`}>{item.title}</h4>
                        <p className="text-sm text-muted-foreground" data-testid={`text-timeline-desc-${timelineId}`}>{item.description}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                );
              })}
            </div>
          </div>

          <ScrollAnimation delay={200}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                const valueId = value.title.toLowerCase().replace(/\s+/g, '-');
                return (
                  <div 
                    key={index}
                    className="group p-6 rounded-2xl bg-card/50 border border-primary/10 hover:border-primary/30 hover-elevate transition-all"
                    data-testid={`card-value-${valueId}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2" data-testid={`text-value-title-${valueId}`}>{value.title}</h4>
                    <p className="text-sm text-muted-foreground" data-testid={`text-value-desc-${valueId}`}>{value.description}</p>
                  </div>
                );
              })}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-card/30 via-card/50 to-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <ScrollAnimation>
              <Badge variant="outline" className="mb-4">Our Expertise</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                What We <span className="text-primary">Specialize In</span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                End-to-end digital engineering services tailored to your unique needs
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card 
                    className="group hover-elevate transition-all cursor-pointer border-primary/10 hover:border-primary/30 overflow-visible" 
                    data-testid={`card-service-${index}`}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="text-white" size={28} />
                        </div>
                        <div className="flex-1 space-y-3">
                          <h3 className="text-xl font-bold text-foreground" data-testid={`text-service-title-${index}`}>{service.title}</h3>
                          <p className="text-muted-foreground leading-relaxed" data-testid={`text-service-desc-${index}`}>{service.description}</p>
                          <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                            <span>Learn more</span>
                            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
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

      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <ScrollAnimation>
              <Badge variant="outline" className="mb-4">Our Team</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Meet Our <span className="text-primary">Leadership</span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Visionary experts driving innovation in digital engineering
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {leadership.map((leader, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="group relative" data-testid={`card-leader-${index}`}>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                  <GlassPanel className="relative p-8 hover:border-primary/40 transition-colors overflow-hidden">
                    <div className="flex items-stretch gap-8">
                      <div className="flex-1 space-y-4 py-4">
                        <div className="relative">
                          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-3xl font-bold text-white shadow-lg" data-testid={`avatar-leader-${index}`}>
                            {leader.initials}
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-green-500 border-2 border-background" data-testid={`status-leader-${index}`} />
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="text-2xl font-heading font-bold text-foreground" data-testid={`text-leader-name-${index}`}>
                            {leader.name}
                          </h3>
                          <p className="text-primary font-semibold text-lg" data-testid={`text-leader-position-${index}`}>
                            {leader.position}
                          </p>
                        </div>
                        
                        <p className="text-lg text-muted-foreground leading-relaxed" data-testid={`text-leader-description-${index}`}>
                          {leader.description}
                        </p>
                      </div>

                      <div className="w-56 h-56 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-600/20 border border-primary/30 flex items-center justify-center flex-shrink-0" data-testid={`photo-column-leader-${index}`}>
                        <div className="text-center">
                          <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white">
                            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            </svg>
                          </div>
                          <p className="text-sm text-muted-foreground mt-4">Professional Photo</p>
                        </div>
                      </div>
                    </div>
                  </GlassPanel>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative overflow-hidden" data-testid="section-cta">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollAnimation>
            <GlassPanel className="p-12 md:p-16 text-center relative overflow-visible" data-testid="card-cta">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 mt-4" data-testid="text-cta-title">
                Ready to <span className="text-primary">Collaborate?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed" data-testid="text-cta-description">
                Transform your engineering ideas into reality with our expert team of digital 
                engineers and innovators. Let's build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="group" data-testid="button-start-project">
                    Start Your Project
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
