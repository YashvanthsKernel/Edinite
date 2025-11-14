import { Box, Wind, Printer, Microchip, Code, Zap } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import heroImage from '@assets/generated_images/Homepage_hero_engineering_montage_d31f5047.png';

export default function Services() {
  const services = [
    { 
      icon: Box, 
      title: "3D CAD Design", 
      description: "Complete mechanical design solutions using SolidWorks, CATIA, and Fusion 360 for product development and manufacturing", 
      href: "/services/cad" 
    },
    { 
      icon: Wind, 
      title: "FEA/CFD Simulation", 
      description: "Structural analysis and fluid dynamics simulations using ANSYS for performance optimization and validation", 
      href: "/services/fea" 
    },
    { 
      icon: Printer, 
      title: "3D Printing", 
      description: "Rapid prototyping and low-volume production with FDM, SLA, and SLS technologies for functional parts", 
      href: "/services/printing" 
    },
    { 
      icon: Microchip, 
      title: "PCB Design", 
      description: "Custom printed circuit board design and layout using Altium Designer for electronic product development", 
      href: "/services/pcb" 
    },
    { 
      icon: Code, 
      title: "MATLAB & Simulink", 
      description: "Control system design, data analysis, and dynamic system modeling for complex engineering challenges", 
      href: "/services/matlab" 
    },
    { 
      icon: Zap, 
      title: "Product Optimization", 
      description: "Multi-disciplinary optimization studies to enhance performance, reduce costs, and improve efficiency", 
      href: "/services/optimization" 
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
