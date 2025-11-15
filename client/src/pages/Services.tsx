import { Box, Wind, Printer, Microchip, Code, Zap, GraduationCap, PenTool } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroImage from '@assets/generated_images/Homepage_hero_engineering_montage_d31f5047.png';

export default function Services() {
  const customPrintingServices = [
    { 
      icon: Printer, 
      title: "Custom 3D Printing", 
      description: "Rapid prototyping and low-volume production with FDM, SLA, and SLS technologies for functional parts and prototypes", 
      href: "/services/printing" 
    },
    { 
      icon: Box, 
      title: "Custom CAD Design", 
      description: "Tailored mechanical design solutions using SolidWorks, CATIA, and Fusion 360 for your specific product requirements", 
      href: "/services/cad" 
    },
    { 
      icon: Microchip, 
      title: "Custom PCB Solutions", 
      description: "Bespoke printed circuit board design and layout using Altium Designer for unique electronic product development", 
      href: "/services/pcb" 
    },
  ];

  const academicServices = [
    { 
      icon: GraduationCap, 
      title: "Academic Projects", 
      description: "Support for engineering students with CAD modeling, simulations, and technical documentation for academic projects", 
      href: "/services/academic" 
    },
    { 
      icon: Wind, 
      title: "Research Simulations", 
      description: "FEA/CFD analysis and simulations for research papers, thesis projects, and academic publications", 
      href: "/services/fea" 
    },
    { 
      icon: Code, 
      title: "MATLAB Support", 
      description: "Control system design, data analysis, and simulation modeling assistance for academic coursework", 
      href: "/services/matlab" 
    },
  ];

  const designServices = [
    { 
      icon: PenTool, 
      title: "Design Request", 
      description: "Complete design consultation from concept to final product, tailored to your specific needs and requirements", 
      href: "/contact" 
    },
    { 
      icon: Zap, 
      title: "Product Optimization", 
      description: "Multi-disciplinary optimization studies to enhance performance, reduce costs, and improve efficiency", 
      href: "/services/optimization" 
    },
    { 
      icon: Box, 
      title: "Full-Service CAD", 
      description: "End-to-end mechanical design services from initial sketches to manufacturing-ready models", 
      href: "/services/cad" 
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <section 
        className="relative py-32"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(1,0,48,0.8), rgba(1,0,48,0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive engineering solutions for your product development needs
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="custom" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 h-auto">
              <TabsTrigger 
                value="custom" 
                className="text-base py-3"
                data-testid="tab-custom-printing"
              >
                Custom 3D Printing
              </TabsTrigger>
              <TabsTrigger 
                value="academic" 
                className="text-base py-3"
                data-testid="tab-academic"
              >
                Academic Project
              </TabsTrigger>
              <TabsTrigger 
                value="design" 
                className="text-base py-3"
                data-testid="tab-design-request"
              >
                Design Request
              </TabsTrigger>
            </TabsList>

            <TabsContent value="custom" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {customPrintingServices.map((service) => (
                  <ServiceCard key={service.title} {...service} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="academic" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {academicServices.map((service) => (
                  <ServiceCard key={service.title} {...service} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="design" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {designServices.map((service) => (
                  <ServiceCard key={service.title} {...service} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
