import { Box, Wind, Printer, Microchip, Code } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import heroImage from '@assets/generated_images/Homepage_hero_engineering_montage_d31f5047.png';

export default function Services() {
  const services = [
    { 
      icon: Box, 
      title: "Mechanical CAD Design", 
      description: "Professional 3D CAD modeling and mechanical design services using industry-leading software like SolidWorks, CATIA, and Fusion 360", 
      href: "/services/mechanical-cad" 
    },
    { 
      icon: Wind, 
      title: "FEA/CFD Simulation", 
      description: "Advanced finite element analysis and computational fluid dynamics simulations for structural and thermal optimization", 
      href: "/services/fea-cfd" 
    },
    { 
      icon: Printer, 
      title: "3D Printing Services", 
      description: "Rapid prototyping and additive manufacturing solutions with FDM, SLA, and SLS technologies for functional parts", 
      href: "/services/3d-printing" 
    },
    { 
      icon: Microchip, 
      title: "PCB Design & Development", 
      description: "Custom printed circuit board design, layout, and development using Altium Designer for electronic product innovation", 
      href: "/services/pcb-design" 
    },
    { 
      icon: Code, 
      title: "MATLAB-Based Simulation Projects", 
      description: "Control systems design, data analysis, and dynamic system modeling using MATLAB and Simulink for complex engineering challenges", 
      href: "/services/matlab" 
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
