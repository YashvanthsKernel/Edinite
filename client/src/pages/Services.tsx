import { Box, Wind, Printer, Microchip, Code, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import GlassPanel from "@/components/GlassPanel";
import cadImage from '@assets/generated_images/CAD_design_service_background_19e6e5df.png';
import feaImage from '@assets/generated_images/FEA_CFD_simulation_background_275ed2b3.png';
import heroImage from '@assets/generated_images/Homepage_hero_engineering_montage_d31f5047.png';

interface ServiceDetail {
  id: string;
  icon: any;
  title: string;
  description: string;
  features: string[];
  tools: string[];
  image: string;
}

const servicesDetails: ServiceDetail[] = [
  {
    id: "mechanical-cad",
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
    id: "fea-cfd",
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
    id: "3d-printing",
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
    id: "pcb-design",
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
    id: "matlab",
    icon: Code,
    title: "MATLAB-Based Simulation",
    description: "Control systems design, data analysis, and dynamic system modeling using MATLAB and Simulink for complex engineering challenges",
    features: [
      "Control systems design and tuning",
      "Data analysis and visualization",
      "Dynamic system modeling",
      "Real-time simulation and testing",
      "Algorithm development and optimization"
    ],
    tools: ["MATLAB", "Simulink", "Control System Toolbox", "Signal Processing", "Machine Learning Toolbox"],
    image: heroImage
  }
];

export default function Services() {
  const [location, setLocation] = useLocation();
  
  const getActiveServiceId = () => {
    const path = location;
    if (path.startsWith("/services/")) {
      return path.replace("/services/", "");
    }
    return "mechanical-cad";
  };

  const activeServiceId = getActiveServiceId();
  const activeService = servicesDetails.find(s => s.id === activeServiceId) || servicesDetails[0];

  const handleServiceClick = (serviceId: string) => {
    setLocation(`/services/${serviceId}`);
  };

  return (
    <div 
      className="relative min-h-screen pt-24 flex items-center justify-center px-6"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(1,0,48,0.75), rgba(114,38,255,0.15)), url(${activeService.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Fixed Services Navigation - Desktop */}
      <div className="hidden lg:block fixed left-6 top-32 z-30 w-72">
        <GlassPanel className="p-6">
          <nav className="space-y-2">
            {servicesDetails.map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => handleServiceClick(service.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                    isActive 
                      ? "bg-primary text-primary-foreground" 
                      : "text-foreground/70 hover:bg-accent hover:text-foreground"
                  }`}
                  data-testid={`button-service-${service.id}`}
                >
                  <service.icon size={20} className="flex-shrink-0" />
                  <span className="text-sm font-medium">{service.title}</span>
                </button>
              );
            })}
          </nav>
        </GlassPanel>
      </div>

      {/* Fixed Services Navigation - Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-t border-primary/20 p-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {servicesDetails.map((service) => {
            const isActive = service.id === activeServiceId;
            return (
              <button
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  isActive 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-accent text-foreground/70"
                }`}
                data-testid={`button-mobile-service-${service.id}`}
              >
                <service.icon size={16} />
                <span className="text-sm font-medium">{service.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content - Centered Glass Panel */}
      <GlassPanel className="w-full max-w-3xl mb-32 lg:mb-0">
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <activeService.icon size={32} className="text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              {activeService.title}
            </h1>
          </div>

          <p className="text-lg text-muted-foreground mb-8">
            {activeService.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-subheading font-bold text-foreground mb-4">Key Features</h3>
              <ul className="space-y-3">
                {activeService.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-subheading font-bold text-foreground mb-4">Software & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {activeService.tools.map((tool, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-lg text-foreground text-xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" data-testid="button-get-quote">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </GlassPanel>
    </div>
  );
}
