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
      description: "Complete suspension system design and optimization for high-performance vehicle applications.",
      image: cadImage,
      tools: ["SolidWorks", "ANSYS", "MATLAB"],
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
      description: "Computational fluid dynamics study for optimizing heat transfer efficiency.",
      image: feaImage,
      tools: ["ANSYS Fluent", "SolidWorks"],
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
      <section className="relative min-h-[90vh] pt-24 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
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
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight">
                  BRING YOUR{" "}
                  <span className="text-primary">IDEAS</span>
                  <br />
                  TO REALITY
                </h1>
              </div>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Where engineering excellence meets innovation. From bold concepts to detailed designs, 
                we transform your vision into professional CAD models, simulations, and prototypes.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/services">
                  <Button size="lg" className="gap-2 px-8" data-testid="button-explore-services">
                    Explore Services <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="gap-2 px-8" data-testid="button-upload-project">
                    <Upload size={18} /> Submit Project
                  </Button>
                </Link>
              </div>
            </div>

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

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path 
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
              className="fill-primary"
            />
          </svg>
        </div>
      </section>

      <section className="bg-primary py-8">
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

          <div>
            <ScrollAnimation>
              <h2 className="text-4xl font-heading font-bold text-foreground text-center mb-12">
                Our <span className="text-primary">Services</span>
              </h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollAnimation key={service.title} delay={index * 100}>
                  <ServiceCard {...service} />
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-4xl font-heading font-bold text-foreground text-center mb-4">
              Technology <span className="text-primary">Stack</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Industry-leading tools and software we use
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <TechnologyCarousel />
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-4xl font-heading font-bold text-foreground text-center mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Explore our recent engineering successes
            </p>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimation key={project.title} delay={index * 150}>
                <ProjectCard
                  {...project}
                  onClick={() => setSelectedProject(index)}
                />
              </ScrollAnimation>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button variant="outline" data-testid="button-view-all">
                View All Projects
              </Button>
            </Link>
          </div>
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
