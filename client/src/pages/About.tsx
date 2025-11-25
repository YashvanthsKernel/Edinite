import { Mail, Target, Eye, Lightbulb, CheckCircle, Users, Palette, Waves, Cpu, GraduationCap } from "lucide-react";
import GlassPanel from "@/components/GlassPanel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  // TODO: Replace with actual names once provided by user
  const leadership = [
    {
      name: "Founder Name",
      position: "Founder & CEO",
      description: "Visionary leader driving innovation in digital engineering solutions"
    },
    {
      name: "Co-Founder Name",
      position: "Co-Founder & COO",
      description: "Strategic operations expert ensuring seamless project delivery"
    },
    {
      name: "CFO Name",
      position: "Chief Financial Officer",
      description: "Financial strategist managing company growth and sustainability"
    },
    {
      name: "CTO Name",
      position: "Chief Technology Officer",
      description: "Technology leader overseeing all engineering solutions and innovations"
    }
  ];

  const services = [
    {
      title: "3D CAD Design & Rendering",
      description: "Concept models, assemblies, design documentation, and photorealistic product rendering",
      icon: Palette
    },
    {
      title: "CFD & FEA Simulation",
      description: "Aerodynamics, thermal study, load & stress analysis for optimal design validation",
      icon: Waves
    },
    {
      title: "Electronics & PCB Design",
      description: "Circuit design, PCB layout, and MATLAB simulation for electronic systems",
      icon: Cpu
    },
    {
      title: "Edu-Tech Training",
      description: "CAD, Simulation, MATLAB, and PCB basics for engineering students",
      icon: GraduationCap
    }
  ];

  const whyWeExist = [
    {
      title: "Clarity Before Spending",
      description: "We ensure your design is perfect in the virtual world before any investment in fabrication"
    },
    {
      title: "Professional Documentation",
      description: "Comprehensive reports and design documentation that meet industry standards"
    },
    {
      title: "Industry-Expert Standards",
      description: "Advanced design and simulation standards used by professionals worldwide"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 px-6 bg-gradient-to-b from-background via-card/20 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 -top-20 flex items-center justify-center opacity-10">
              <div className="w-96 h-96 bg-gradient-to-br from-primary to-purple-600 rounded-full blur-3xl"></div>
            </div>
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 tracking-tight">
                About <span className="text-primary">Edinite</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 font-light">
                A Design & Simulation company specializing in digital engineering solutions
              </p>
              <Badge variant="outline" className="text-base md:text-lg px-6 py-3 border-primary/50 backdrop-blur-sm bg-primary/5" data-testid="badge-company-status">
                Bridging Classroom Learning & Industry-Grade Product Development
              </Badge>
            </div>
          </div>

          <GlassPanel className="p-8 md:p-12 mb-12 relative overflow-hidden group hover-elevate transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8 text-center">
                Who We Are
              </h2>
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-lg md:text-xl text-muted-foreground text-center leading-relaxed">
                  Edinite helps students, startups, and early-stage innovators convert ideas into research-backed designs, CAD models, simulations, and PCB layouts — <span className="text-foreground font-medium">without fabrication or manufacturing</span>.
                </p>
                <div className="py-6">
                  <p className="text-xl md:text-2xl text-primary text-center font-semibold mb-2">
                    We believe innovation begins on the computer
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground text-center">
                    Our work ensures products are perfect in the virtual world before anyone invests in production.
                  </p>
                </div>
                <div className="flex justify-center items-center gap-3 md:gap-6 mt-10 flex-wrap">
                  <div className="flex flex-col items-center gap-2">
                    <Badge variant="default" className="text-sm md:text-base px-4 md:px-6 py-2" data-testid="badge-process-design">Design</Badge>
                  </div>
                  <span className="text-primary text-2xl">→</span>
                  <div className="flex flex-col items-center gap-2">
                    <Badge variant="default" className="text-sm md:text-base px-4 md:px-6 py-2" data-testid="badge-process-simulate">Simulate</Badge>
                  </div>
                  <span className="text-primary text-2xl">→</span>
                  <div className="flex flex-col items-center gap-2">
                    <Badge variant="default" className="text-sm md:text-base px-4 md:px-6 py-2" data-testid="badge-process-optimize">Optimize</Badge>
                  </div>
                  <span className="text-primary text-2xl">→</span>
                  <div className="flex flex-col items-center gap-2">
                    <Badge variant="default" className="text-sm md:text-base px-4 md:px-6 py-2" data-testid="badge-process-validate">Validate</Badge>
                  </div>
                </div>
              </div>
            </div>
          </GlassPanel>

          <div className="relative bg-gradient-to-r from-background via-card/50 to-background rounded-3xl p-12 md:p-16 mb-16 overflow-hidden border border-primary/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
            
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
              <div className="text-left space-y-4">
                <div className="inline-block px-4 py-1 bg-primary/10 rounded-full border border-primary/30 mb-2">
                  <span className="text-primary font-semibold text-sm">Vision</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Our Vision
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become India's leading digital engineering studio, where ideas evolve into validated engineering designs without touching manufacturing floors.
                </p>
              </div>

              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-full blur-2xl animate-pulse"></div>
                  <div className="absolute inset-4 bg-gradient-to-tr from-primary/30 to-purple-500/30 rounded-full blur-xl"></div>
                  <div className="absolute inset-8 flex items-center justify-center">
                    <Target className="text-primary w-16 h-16 drop-shadow-[0_0_15px_rgba(114,38,255,0.5)]" />
                    <Eye className="text-primary w-16 h-16 absolute opacity-50 drop-shadow-[0_0_15px_rgba(114,38,255,0.3)]" />
                  </div>
                </div>
              </div>

              <div className="text-left md:text-right space-y-4">
                <div className="inline-block px-4 py-1 bg-primary/10 rounded-full border border-primary/30 mb-2">
                  <span className="text-primary font-semibold text-sm">Mission</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To make advanced design, simulation, and engineering R&D accessible to students, startups, and innovators — and help them build smarter, optimized, and validated solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              What We <span className="text-primary">Do</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              End-to-end digital engineering services
            </p>
            <div className="flex justify-center items-center gap-4 flex-wrap">
              <Badge variant="destructive" className="text-sm" data-testid="badge-no-manufacturing">✗ We do not manufacture</Badge>
              <Badge variant="default" className="text-sm" data-testid="badge-what-we-do">✓ We design, analyze, optimize</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover-elevate" data-testid={`card-service-${index}`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-primary" size={24} />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <GlassPanel className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Lightbulb className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">Why We Exist</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Most engineering ideas fail not because of lack of potential — but because of lack of guidance on design, simulation, and feasibility. Edinite bridges that gap.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whyWeExist.map((item, index) => (
                <div key={index} className="space-y-2" data-testid={`reason-${index}`}>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="text-primary" size={32} />
              <h2 className="text-4xl font-heading font-bold text-foreground">
                Our <span className="text-primary">Leadership</span>
              </h2>
            </div>
            <p className="text-xl text-muted-foreground">
              Meet the visionaries behind Edinite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <GlassPanel key={index} className="p-8 hover-elevate" data-testid={`card-leader-${index}`}>
                <div className="space-y-3">
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
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <GlassPanel className="p-12 text-center">
            <Mail className="text-primary mx-auto mb-4" size={48} />
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground mb-6">
              Ready to transform your engineering ideas into reality?
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2">
                <Mail className="text-primary" size={20} />
                <a 
                  href="mailto:edinite.official@gmail.com" 
                  className="text-lg text-foreground hover:text-primary transition-colors"
                  data-testid="link-email"
                >
                  edinite.official@gmail.com
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                Email us for consultations, project inquiries, or training workshops
              </p>
            </div>
          </GlassPanel>
        </div>
      </section>
    </div>
  );
}
