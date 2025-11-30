import { Box, Wind, Printer, Microchip, Code, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import GlassPanel from "@/components/GlassPanel";
import heroImage from '@assets/generated_images/Homepage_hero_engineering_montage_d31f5047.png';
import cadImage from '@assets/generated_images/CAD_design_service_background_19e6e5df.png';
import feaImage from '@assets/generated_images/FEA_CFD_simulation_background_275ed2b3.png';

interface ServiceDetail {
  icon: any;
  title: string;
  description: string;
  features: string[];
  tools: string[];
  image: string;
}

export default function Services() {
  const servicesDetails: ServiceDetail[] = [
    {
      icon: Box,
      title: "Mechanical CAD Design",
      description: "Professional 3D CAD modeling and mechanical design services using industry-leading software like SolidWorks, CATIA, and Fusion 360",
      features: [
        "3D parametric modeling and assembly design",
        "Detailed engineering drawings and documentation",
        "Design for manufacturability (DFM) analysis",
        "Reverse engineering from physical parts",
        "Product visualization and rendering"
      ],
      tools: ["SolidWorks", "CATIA V5/V6", "Fusion 360", "AutoCAD", "Inventor"],
      image: cadImage
    },
    {
      icon: Wind,
      title: "FEA/CFD Simulation",
      description: "Advanced finite element analysis and computational fluid dynamics simulations for structural and thermal optimization",
      features: [
        "Structural analysis and stress optimization",
        "Thermal analysis and heat transfer studies",
        "Fluid dynamics and flow simulation",
        "Modal analysis and vibration studies",
        "Optimization for performance and cost"
      ],
      tools: ["ANSYS Workbench", "ANSYS Fluent", "CFX", "Abaqus", "COMSOL"],
      image: feaImage
    },
    {
      icon: Printer,
      title: "3D Printing Services",
      description: "Rapid prototyping and additive manufacturing solutions with FDM, SLA, and SLS technologies for functional parts",
      features: [
        "FDM 3D printing for prototypes",
        "SLA resin printing for precision",
        "SLS powder printing for functional parts",
        "Material selection and optimization",
        "Post-processing and finishing"
      ],
      tools: ["CAD to STL conversion", "Cura", "Formlabs Software", "EOS Software", "Slicing algorithms"],
      image: cadImage
    },
    {
      icon: Microchip,
      title: "PCB Design & Development",
      description: "Custom printed circuit board design, layout, and development using Altium Designer for electronic product innovation",
      features: [
        "Schematic design and circuit analysis",
        "PCB layout and routing optimization",
        "High-speed signal integrity analysis",
        "Thermal management design",
        "Manufacturing coordination and support"
      ],
      tools: ["Altium Designer", "KiCad", "Eagle", "OrCAD", "LTspice"],
      image: feaImage
    },
    {
      icon: Code,
      title: "MATLAB-Based Simulation Projects",
      description: "Control systems design, data analysis, and dynamic system modeling using MATLAB and Simulink for complex engineering challenges",
      features: [
        "Control systems design and tuning",
        "Data analysis and visualization",
        "Dynamic system modeling",
        "Real-time simulation and testing",
        "Algorithm development and optimization"
      ],
      tools: ["MATLAB", "Simulink", "Control System Toolbox", "Signal Processing", "Machine Learning Toolbox"],
      image: cadImage
    },
    {
      icon: Zap,
      title: "Product Optimization",
      description: "Performance enhancement through advanced engineering analysis and iterative design improvements",
      features: [
        "Multi-objective optimization",
        "Performance bottleneck identification",
        "Cost reduction strategies",
        "Reliability and failure analysis",
        "Compliance and safety verification"
      ],
      tools: ["ANSYS OptiSLang", "Design Explorer", "Machine Learning", "Statistical Analysis", "Trade-off studies"],
      image: heroImage
    }
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
        <div className="max-w-7xl mx-auto space-y-20">
          {servicesDetails.map((service, index) => (
            <div key={service.title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {index % 2 === 0 ? (
                <>
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <service.icon size={32} className="text-white" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-8">
                      {service.description}
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-subheading font-semibold text-foreground mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-subheading font-semibold text-foreground mb-4">Software & Tools</h3>
                      <div className="flex flex-wrap gap-3">
                        {service.tools.map((tool, idx) => (
                          <span 
                            key={idx}
                            className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-foreground text-sm"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Link href="/contact">
                        <Button size="lg" data-testid={`button-quote-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          Get a Quote
                        </Button>
                      </Link>
                      <Link href="/portfolio">
                        <Button variant="outline" size="lg" data-testid={`button-portfolio-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          View Portfolio
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <GlassPanel className="overflow-hidden">
                      <img src={service.image} alt={service.title} className="w-full h-80 object-cover rounded-lg" />
                    </GlassPanel>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <GlassPanel className="overflow-hidden">
                      <img src={service.image} alt={service.title} className="w-full h-80 object-cover rounded-lg" />
                    </GlassPanel>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <service.icon size={32} className="text-white" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-8">
                      {service.description}
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-subheading font-semibold text-foreground mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-subheading font-semibold text-foreground mb-4">Software & Tools</h3>
                      <div className="flex flex-wrap gap-3">
                        {service.tools.map((tool, idx) => (
                          <span 
                            key={idx}
                            className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-foreground text-sm"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Link href="/contact">
                        <Button size="lg" data-testid={`button-quote-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          Get a Quote
                        </Button>
                      </Link>
                      <Link href="/portfolio">
                        <Button variant="outline" size="lg" data-testid={`button-portfolio-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          View Portfolio
                        </Button>
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
