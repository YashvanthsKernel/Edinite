import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Box, Wind, Printer, Microchip, Code, Zap } from "lucide-react";
import { useState } from "react";
import GlassPanel from "@/components/GlassPanel";
import ServiceCard from "@/components/ServiceCard";
import StatsCard from "@/components/StatsCard";
import ProjectCard from "@/components/ProjectCard";
import TechnologyCarousel from "@/components/TechnologyCarousel";
import CompanyCarousel from "@/components/CompanyCarousel";
import ProjectModal from "@/components/ProjectModal";
import heroImage from '@assets/generated_images/Homepage_hero_engineering_montage_d31f5047.png';
import cadImage from '@assets/generated_images/CAD_design_service_background_19e6e5df.png';
import feaImage from '@assets/generated_images/FEA_CFD_simulation_background_275ed2b3.png';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const services = [
    { icon: Box, title: "3D CAD Design", description: "Professional mechanical design services using industry-leading CAD software", href: "/services/cad" },
    { icon: Wind, title: "FEA/CFD Simulation", description: "Advanced structural and fluid dynamics analysis for optimal performance", href: "/services/fea" },
    { icon: Printer, title: "3D Printing", description: "Rapid prototyping and additive manufacturing solutions", href: "/services/printing" },
    { icon: Microchip, title: "PCB Design", description: "Custom circuit board design and layout for electronic systems", href: "/services/pcb" },
    { icon: Code, title: "MATLAB & Simulink", description: "Control systems, data analysis, and simulation modeling", href: "/services/matlab" },
    { icon: Zap, title: "Product Optimization", description: "Performance enhancement through advanced engineering analysis", href: "/services/optimization" },
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
      <section 
        className="relative min-h-[90vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(1,0,48,0.7), rgba(1,0,48,0.3)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center z-10">
          <GlassPanel className="p-12">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Transforming Concepts Into{" "}
              <span className="text-primary">Real-World Engineering Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Expert engineering design and simulation services for innovative product development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button size="lg" data-testid="button-explore-services">
                  Explore Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="backdrop-blur-md bg-white/10"
                  data-testid="button-request-quote-hero"
                >
                  Request Quote
                </Button>
              </Link>
            </div>
          </GlassPanel>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                About <span className="text-primary">Edinite DesignWorks</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                We bridge the gap between concept and reality through cutting-edge design, simulation, and prototyping technologies. Our team of expert engineers delivers end-to-end solutions for your most challenging projects.
              </p>
              <p className="text-muted-foreground">
                From initial concept to final production, we provide comprehensive engineering services that ensure your projects meet the highest standards of quality and innovation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <StatsCard value="50+" label="Successful Projects" />
              <StatsCard value="10+" label="Industries Served" />
              <StatsCard value="100%" label="On-Time Delivery" />
              <StatsCard value="24/7" label="Support Available" />
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-heading font-bold text-foreground text-center mb-12">
              Our <span className="text-primary">Services</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-foreground text-center mb-4">
            Technology <span className="text-primary">Stack</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Industry-leading tools and software we use
          </p>
          <TechnologyCarousel />
          
          <div className="mt-16">
            <h3 className="text-3xl font-heading font-bold text-foreground text-center mb-4">
              Our <span className="text-primary">Commitment</span>
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              What sets us apart in engineering excellence
            </p>
            <CompanyCarousel />
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-foreground text-center mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Explore our recent engineering successes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                onClick={() => setSelectedProject(index)}
              />
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
