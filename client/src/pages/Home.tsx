import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Box, Wind, Printer, Microchip, Code, Zap, Lightbulb, Award, Settings, Headphones, ArrowRight, Upload } from "lucide-react";
import { useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import StatsCard from "@/components/StatsCard";
import ProjectCard from "@/components/ProjectCard";
import TechnologyCarousel from "@/components/TechnologyCarousel";
import ProjectModal from "@/components/ProjectModal";
import ScrollAnimation from "@/components/ScrollAnimation";
import heroGearImage from '@assets/generated_images/dynamic_3d_mechanical_engineering_assembly.png';
import cadImage from '@assets/generated_images/CAD_design_service_background_19e6e5df.png';
import feaImage from '@assets/generated_images/FEA_CFD_simulation_background_275ed2b3.png';
import printingImage from '@assets/generated_images/3D_printing_service_background_5fcbe0f4.png';
import pcbImage from '@assets/generated_images/PCB_design_service_background_f2880d46.png';
import matlabImage from '@assets/generated_images/MATLAB_Simulink_background_26512f57.png';
import optimizationImage from '@assets/generated_images/Product_optimization_background_2334833a.png';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const services = [
    { title: "3D CAD Design", description: "Professional mechanical design services using industry-leading CAD software", href: "/services/cad", backgroundImage: cadImage },
    { title: "FEA/CFD Simulation", description: "Advanced structural and fluid dynamics analysis for optimal performance", href: "/services/fea", backgroundImage: feaImage },
    { title: "3D Printing", description: "Rapid prototyping and additive manufacturing solutions", href: "/services/printing", backgroundImage: printingImage },
    { title: "PCB Design", description: "Custom circuit board design and layout for electronic systems", href: "/services/pcb", backgroundImage: pcbImage },
    { title: "MATLAB & Simulink", description: "Control systems, data analysis, and simulation modeling", href: "/services/matlab", backgroundImage: matlabImage },
    { title: "Product Optimization", description: "Performance enhancement through advanced engineering analysis", href: "/services/optimization", backgroundImage: optimizationImage },
  ];

  const features = [
    { icon: Lightbulb, label: "Innovative Designs" },
    { icon: Award, label: "Industry Expertise" },
    { icon: Settings, label: "Precision Engineering" },
    { icon: Headphones, label: "Dedicated Support" },
  ];

  const projects = [
    {
      title: "Automotive Suspension Design",
      category: "Mechanical Design",
      description: "Complete suspension system design and optimization for high-performance vehicle applications with advanced kinematics analysis.",
      image: cadImage,
      tools: ["SolidWorks", "ANSYS", "MATLAB"],
      metrics: [
        { label: "Design Accuracy", value: "0.05mm" }
      ],
      details: [
        "Detailed 3D CAD modeling of suspension components",
        "Finite Element Analysis for stress optimization",
        "Dynamic simulation and kinematics analysis",
        "Manufacturing drawings and BOM generation"
      ]
    },
    {
      title: "Heat Exchanger CFD Analysis",
      category: "Thermal Engineering",
      description: "Computational fluid dynamics study for optimizing heat transfer efficiency and reducing pressure drop.",
      image: feaImage,
      tools: ["ANSYS Fluent", "SolidWorks"],
      metrics: [
        { label: "Flow Optimization", value: "+27%" }
      ],
      details: [
        "3D flow simulation and thermal analysis",
        "Pressure drop optimization",
        "Heat transfer coefficient calculations",
        "Design iteration and performance comparison"
      ]
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[100vh] overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-purple-500/5 to-cyan-400/5 rounded-full blur-[200px]" />
        </div>

        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />

        <div className="absolute top-32 left-[15%] w-3 h-3 bg-primary/40 rounded-full animate-pulse hidden lg:block" style={{ animationDuration: '3s' }} />
        <div className="absolute top-48 right-[20%] w-2 h-2 bg-purple-500/50 rounded-full animate-pulse hidden lg:block" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        <div className="absolute bottom-[30%] left-[10%] w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse hidden lg:block" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute top-[40%] right-[10%] w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse hidden lg:block" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }} />
        <div className="absolute bottom-[40%] right-[25%] w-2.5 h-2.5 bg-purple-400/30 rounded-full animate-pulse hidden lg:block" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 rounded-full px-5 py-2.5 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-muted-foreground">Open for Projects</span>
                  </div>
                  <div className="w-px h-4 bg-border" />
                  <Link href="/contact">
                    <span className="text-sm font-semibold text-primary hover:text-primary/80 cursor-pointer flex items-center gap-1.5 transition-colors" data-testid="link-get-quote-badge">
                      Get a Quote <ArrowRight size={14} />
                    </span>
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight">
                  <span className="text-foreground">Transform</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    Your Vision
                  </span>
                  <br />
                  <span className="text-foreground">Into Reality</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                  Professional CAD design, advanced simulations, and rapid prototyping. 
                  We bring engineering excellence to students, startups, and innovators.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/services">
                  <Button size="lg" className="gap-2.5 px-8 text-base shadow-lg shadow-primary/25" data-testid="button-explore-services">
                    Explore Services <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="gap-2.5 px-8 text-base backdrop-blur-sm" data-testid="button-upload-project">
                    <Upload size={18} /> Start a Project
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-foreground">50+</span>
                  <span className="text-sm text-muted-foreground">Projects Done</span>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-foreground">100%</span>
                  <span className="text-sm text-muted-foreground">On-Time Delivery</span>
                </div>
                <div className="w-px h-12 bg-border hidden sm:block" />
                <div className="flex-col hidden sm:flex">
                  <span className="text-3xl font-bold text-foreground">24/7</span>
                  <span className="text-sm text-muted-foreground">Support</span>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-xl">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-purple-500/20 to-cyan-400/20 rounded-3xl blur-3xl opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-3xl" />
                
                <div className="relative bg-card/50 backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-3xl p-8 shadow-2xl">
                  <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-primary to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  
                  <img 
                    src={heroGearImage} 
                    alt="3D Engineering Visualization" 
                    className="relative z-10 w-full rounded-xl animate-float"
                    data-testid="img-hero"
                  />
                  
                  <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <Box className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">CAD Ready</p>
                      <p className="text-xs text-muted-foreground">Production Files</p>
                    </div>
                  </div>
                  
                  <div className="absolute -top-4 -left-4 bg-card border border-border rounded-xl px-4 py-2.5 shadow-xl">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-[10px] font-bold text-primary">E</div>
                        <div className="w-6 h-6 rounded-full bg-purple-500/20 border-2 border-background flex items-center justify-center text-[10px] font-bold text-purple-500">D</div>
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">Engineers Online</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path 
              d="M0 100L48 91.7C96 83.3 192 66.7 288 58.3C384 50 480 50 576 54.2C672 58.3 768 66.7 864 70.8C960 75 1056 75 1152 70.8C1248 66.7 1344 58.3 1392 54.2L1440 50V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0Z" 
              className="fill-primary"
            />
          </svg>
        </div>
      </section>

      <section className="bg-primary py-8 -mt-px">
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

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                About <span className="text-primary">Edinite</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                We help students, startups, and early-stage innovators convert ideas into research-backed designs, CAD models, simulations, and PCB layouts — without fabrication or manufacturing.
              </p>
              <p className="text-muted-foreground">
                We believe innovation begins on the computer. Our work ensures products are perfect in the virtual world before anyone invests in production.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <ScrollAnimation delay={0}>
                <StatsCard value="50+" label="Successful Projects" />
              </ScrollAnimation>
              <ScrollAnimation delay={100}>
                <StatsCard value="10+" label="Industries Served" />
              </ScrollAnimation>
              <ScrollAnimation delay={200}>
                <StatsCard value="100%" label="On-Time Delivery" />
              </ScrollAnimation>
              <ScrollAnimation delay={300}>
                <StatsCard value="24/7" label="Support Available" />
              </ScrollAnimation>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-20 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-full blur-[200px] pointer-events-none" />
            
            <div className="absolute top-32 left-20 w-2 h-2 bg-primary/60 rounded-full animate-pulse hidden lg:block" style={{ animationDuration: '3s' }} />
            <div className="absolute top-48 right-32 w-1.5 h-1.5 bg-purple-500/60 rounded-full animate-pulse hidden lg:block" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
            <div className="absolute bottom-40 left-40 w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse hidden lg:block" style={{ animationDuration: '2s', animationDelay: '1s' }} />
            <div className="absolute bottom-32 right-20 w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse hidden lg:block" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }} />
            
            <ScrollAnimation>
              <div className="text-center mb-16 relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-primary">What We Offer</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                  Our <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">Services</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive engineering solutions from concept to validated design
                </p>
                
                <div className="flex justify-center mt-6 gap-1">
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full" />
                  <div className="w-3 h-1 bg-purple-500 rounded-full animate-pulse" />
                  <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                </div>
              </div>
            </ScrollAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {services.map((service, index) => (
                <ScrollAnimation key={service.title} delay={index * 80}>
                  <ServiceCard {...service} />
                </ScrollAnimation>
              ))}
            </div>
            
            <ScrollAnimation delay={600}>
              <div className="mt-12 flex justify-center">
                <Link href="/services">
                  <div className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/30 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    <span className="text-foreground font-medium">Explore All Services</span>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary">Our Tools</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Technology <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">Stack</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Industry-leading tools and software we use to deliver exceptional results
              </p>
              <div className="flex justify-center mt-6 gap-1">
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full" />
                <div className="w-3 h-1 bg-purple-500 rounded-full animate-pulse" />
                <div className="w-1 h-1 bg-cyan-400 rounded-full" />
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <TechnologyCarousel />
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary">Engineering Excellence</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Featured <span className="bg-gradient-to-r from-primary via-purple-500 to-cyan-400 bg-clip-text text-transparent">Projects</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our recent engineering successes and see how we transform complex challenges into elegant solutions
              </p>
              <div className="flex justify-center mt-6 gap-1">
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full" />
                <div className="w-3 h-1 bg-purple-500 rounded-full animate-pulse" />
                <div className="w-1 h-1 bg-cyan-400 rounded-full" />
              </div>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimation key={project.title} delay={index * 150}>
                <ProjectCard
                  {...project}
                  onClick={() => setSelectedProject(index)}
                />
              </ScrollAnimation>
            ))}
          </div>
          
          <ScrollAnimation delay={400}>
            <div className="mt-16 flex justify-center">
              <Link href="/portfolio">
                <div className="group relative cursor-pointer">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-cyan-400 rounded-full opacity-0 group-hover:opacity-70 blur-lg transition-all duration-500" />
                  <div className="relative inline-flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-primary/10 via-purple-500/10 to-cyan-400/10 border border-primary/30 group-hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </div>
                    <span className="text-lg font-semibold text-foreground group-hover:text-white transition-colors">View All Projects</span>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 group-hover:scale-110 transition-all">
                      <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {selectedProject !== null && (
        <ProjectModal
          isOpen={true}
          onClose={() => setSelectedProject(null)}
          project={projects[selectedProject]}
        />
      )}
    </div>
  );
}
