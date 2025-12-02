import { Box, Wind, Printer, Microchip, Code, CheckCircle, ArrowRight, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import GlassPanel from "@/components/GlassPanel";
import ScrollAnimation from "@/components/ScrollAnimation";
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
      className="relative min-h-screen pt-24 flex overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(1,0,48,0.85), rgba(114,38,255,0.25)), url(${activeService.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Animated Background Orbs */}
      <div className="absolute left-0 top-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute right-10 bottom-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Services Navigation - Fixed Left Side */}
      <div className="hidden lg:flex fixed left-0 top-24 bottom-0 w-96 border-r border-primary/20 bg-background/50 backdrop-blur-xl z-30 overflow-y-auto">
        <div className="w-full p-6">
          <GlassPanel className="p-6 space-y-3">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="text-primary" size={20} />
                <h2 className="text-lg font-heading font-bold text-foreground">Services</h2>
              </div>
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-purple-600 rounded-full" />
            </div>

            {servicesDetails.map((service, idx) => {
              const isActive = service.id === activeServiceId;
              return (
                <ScrollAnimation key={service.id} delay={idx * 50}>
                  <button
                    onClick={() => handleServiceClick(service.id)}
                    className={`w-full flex items-start gap-4 px-4 py-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                      isActive 
                        ? "bg-gradient-to-r from-primary via-primary to-purple-600 text-primary-foreground shadow-lg" 
                        : "text-foreground/70 hover:text-foreground hover:bg-white/5"
                    }`}
                    data-testid={`button-service-${service.id}`}
                  >
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                    
                    <div className={`p-3 rounded-lg transition-all flex-shrink-0 ${
                      isActive 
                        ? "bg-white/20 group-hover:bg-white/30" 
                        : "bg-primary/10 group-hover:bg-primary/20"
                    }`}>
                      <service.icon size={20} className="flex-shrink-0" />
                    </div>
                    
                    <div className="text-left flex-1 relative z-10">
                      <div className="font-subheading font-semibold text-sm leading-tight">{service.title}</div>
                      <div className={`text-xs mt-1 transition-all ${
                        isActive ? "text-white/80" : "text-foreground/50 group-hover:text-foreground/70"
                      }`}>
                        {activeServiceId === service.id && <Zap size={12} className="inline mr-1" />}
                        Click to explore
                      </div>
                    </div>

                    {isActive && (
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </button>
                </ScrollAnimation>
              );
            })}
          </GlassPanel>
        </div>
      </div>

      {/* Services Navigation - Mobile Bottom */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-background via-background/95 to-transparent border-t border-primary/20 p-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {servicesDetails.map((service) => {
            const isActive = service.id === activeServiceId;
            return (
              <button
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap transition-all text-xs font-medium ${
                  isActive 
                    ? "bg-gradient-to-r from-primary to-purple-600 text-primary-foreground" 
                    : "bg-white/5 text-foreground/70 hover:bg-primary/20"
                }`}
                data-testid={`button-mobile-service-${service.id}`}
              >
                <service.icon size={14} />
                {service.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="flex-1 lg:ml-96 flex items-center justify-center px-6 pb-32 lg:pb-0 relative z-20">
        <ScrollAnimation>
          <div className="w-full max-w-2xl">
            <GlassPanel className="backdrop-blur-xl bg-white/5 border border-primary/30 shadow-2xl overflow-hidden">
              {/* Header with gradient background */}
              <div className="relative h-32 bg-gradient-to-br from-primary/20 to-purple-600/20 overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/30 rounded-full blur-3xl" />
                </div>
              </div>

              <div className="p-8 md:p-12 relative -mt-16">
                {/* Icon and Title */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="relative flex-shrink-0 z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="relative w-24 h-24 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <activeService.icon size={48} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1 pt-4">
                    <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
                      {activeService.title}
                    </h1>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary via-purple-600 to-primary rounded-full" />
                  </div>
                </div>

                {/* Description with icon */}
                <div className="mb-10">
                  <p className="text-lg text-muted-foreground leading-relaxed flex items-start gap-3">
                    <Sparkles className="text-primary flex-shrink-0 mt-1" size={20} />
                    {activeService.description}
                  </p>
                </div>

                {/* Content Grid with enhanced styling */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                  {/* Key Features */}
                  <div className="group">
                    <h3 className="text-lg font-subheading font-bold text-foreground mb-5 flex items-center gap-2">
                      <div className="w-1.5 h-6 bg-gradient-to-b from-primary to-purple-600 rounded-full" />
                      Key Features
                    </h3>
                    <ul className="space-y-4">
                      {activeService.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 mt-1 p-1.5 bg-primary/10 rounded-lg group-hover/item:bg-primary/20 transition-all">
                            <CheckCircle className="text-primary" size={16} />
                          </div>
                          <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Software & Tools */}
                  <div className="group">
                    <h3 className="text-lg font-subheading font-bold text-foreground mb-5 flex items-center gap-2">
                      <div className="w-1.5 h-6 bg-gradient-to-b from-primary to-purple-600 rounded-full" />
                      Software & Tools
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {activeService.tools.map((tool, idx) => (
                        <span 
                          key={idx}
                          className="px-4 py-2 bg-gradient-to-br from-primary/10 to-purple-600/10 border border-primary/20 rounded-xl text-foreground text-xs font-medium hover:border-primary/50 hover:bg-primary/15 hover:shadow-lg transition-all"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6 border-t border-primary/20">
                  <Link href="/contact">
                    <Button size="lg" className="w-full group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90" data-testid="button-get-quote">
                      <span className="flex items-center justify-center gap-2">
                        Start Your Project
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </GlassPanel>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
