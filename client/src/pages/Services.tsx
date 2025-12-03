import { Box, Wind, Printer, Microchip, Code, CheckCircle, ArrowRight, Zap, Sparkles, Lightbulb, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
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
  badge: string;
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
    image: cadImage,
    badge: "CORE"
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
    image: feaImage,
    badge: "ADVANCED"
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
    image: cadImage,
    badge: "RAPID"
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
    image: feaImage,
    badge: "PRECISION"
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
    image: heroImage,
    badge: "SMART"
  }
];

export default function Services() {
  const [location, setLocation] = useLocation();
  const [autoRotate, setAutoRotate] = useState(true);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('left');
  
  const getActiveServiceId = () => {
    const path = location;
    if (path.startsWith("/services/")) {
      return path.replace("/services/", "");
    }
    return "mechanical-cad";
  };

  const activeServiceId = getActiveServiceId();
  const activeService = servicesDetails.find(s => s.id === activeServiceId) || servicesDetails[0];
  const activeIndex = servicesDetails.findIndex(s => s.id === activeServiceId);

  const handleServiceClick = (serviceId: string) => {
    const newIndex = servicesDetails.findIndex(s => s.id === serviceId);
    setSlideDirection(newIndex > activeIndex ? 'left' : 'right');
    setLocation(`/services/${serviceId}`);
  };

  // Auto-rotate services every 15 seconds
  useEffect(() => {
    if (!autoRotate) return;

    const timer = setInterval(() => {
      const nextIndex = (activeIndex + 1) % servicesDetails.length;
      setSlideDirection('left');
      setLocation(`/services/${servicesDetails[nextIndex].id}`);
    }, 15000);

    return () => clearInterval(timer);
  }, [activeIndex, autoRotate, setLocation]);

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

      {/* Services Navigation - Left Corner */}
      <div className="hidden lg:flex fixed left-6 top-32 z-30">
        <div className="w-80">
          <GlassPanel className="p-6 space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
            {/* Header */}
            <div className="mb-6 pb-4 border-b border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 bg-gradient-to-br from-primary to-purple-600 rounded-lg">
                  <Sparkles className="text-white" size={18} />
                </div>
                <div>
                  <h2 className="text-lg font-heading font-bold text-foreground">Services</h2>
                  <p className="text-xs text-muted-foreground mt-1">Select a service to explore</p>
                </div>
              </div>
            </div>

            {/* Service Items */}
            {servicesDetails.map((service, idx) => {
              const isActive = service.id === activeServiceId;
              return (
                <ScrollAnimation key={service.id} delay={idx * 50}>
                  <button
                    onClick={() => handleServiceClick(service.id)}
                    className={`w-full flex items-start gap-4 px-4 py-4 rounded-xl transition-all duration-300 group relative overflow-hidden transform hover:scale-105 ${
                      isActive 
                        ? "bg-gradient-to-r from-primary via-primary to-purple-600 text-primary-foreground shadow-xl scale-105" 
                        : "text-foreground/70 hover:text-foreground hover:bg-white/5 hover:shadow-md"
                    }`}
                    data-testid={`button-service-${service.id}`}
                  >
                    {/* Active indicator line */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/50" />
                    )}

                    {/* Shine effect on hover */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                    
                    {/* Icon with background */}
                    <div className={`p-3 rounded-lg transition-all flex-shrink-0 ${
                      isActive 
                        ? "bg-white/20 group-hover:bg-white/30" 
                        : "bg-primary/10 group-hover:bg-primary/20"
                    }`}>
                      <service.icon size={20} className="flex-shrink-0" />
                    </div>
                    
                    {/* Text content */}
                    <div className="text-left flex-1 relative z-10 min-w-0">
                      <div className="flex items-center gap-2">
                        <div className="font-subheading font-semibold text-sm leading-tight truncate">{service.title}</div>
                        {isActive && (
                          <span className="text-xs px-2 py-0.5 bg-white/20 rounded-full whitespace-nowrap">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <div className={`text-xs mt-1 transition-all ${
                        isActive ? "text-white/80" : "text-foreground/50 group-hover:text-foreground/70"
                      }`}>
                        {activeServiceId === service.id && <Lightbulb size={12} className="inline mr-1" />}
                        {activeServiceId === service.id ? "Active" : "Click to explore"}
                      </div>
                    </div>

                    {/* Chevron indicator */}
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
                className={`flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap transition-all text-xs font-medium transform hover:scale-105 ${
                  isActive 
                    ? "bg-gradient-to-r from-primary to-purple-600 text-primary-foreground shadow-lg scale-105" 
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

      {/* Main Content - Centered with Slide Animation */}
      <div className="flex-1 flex items-center justify-center px-6 pb-32 lg:pb-0 relative z-20">
        <ScrollAnimation>
          <div key={activeServiceId} className={`w-full max-w-2xl transition-all duration-700 ${
            slideDirection === 'left' ? 'animate-in slide-in-from-right fade-in' : 'animate-in slide-in-from-left fade-in'
          }`}>
            <GlassPanel className="backdrop-blur-xl bg-white/5 border border-primary/30 shadow-2xl overflow-hidden">
              <div className="p-8 md:p-12">
                {/* Title Section */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                      {activeService.title}
                    </h1>
                    <span className="px-3 py-1 bg-gradient-to-r from-primary/20 to-purple-600/20 border border-primary/30 rounded-full text-xs font-semibold text-primary">
                      {activeService.badge}
                    </span>
                  </div>
                  <div className="h-1.5 w-24 bg-gradient-to-r from-primary via-purple-600 to-primary rounded-full" />
                </div>

                {/* Description with enhanced styling */}
                <div className="mb-10 p-5 bg-gradient-to-r from-primary/5 to-purple-600/5 border border-primary/10 rounded-xl">
                  <p className="text-lg text-muted-foreground leading-relaxed flex items-start gap-3">
                    <Sparkles className="text-primary flex-shrink-0 mt-1 animate-pulse" size={20} />
                    {activeService.description}
                  </p>
                </div>

                {/* Content Grid with enhanced styling */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                  {/* Key Features */}
                  <div className="group">
                    <h3 className="text-lg font-subheading font-bold text-foreground mb-5 flex items-center gap-2">
                      <div className="w-2 h-7 bg-gradient-to-b from-primary to-purple-600 rounded-full" />
                      Key Features
                    </h3>
                    <ul className="space-y-4">
                      {activeService.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 group/item transform transition-transform hover:translate-x-1">
                          <div className="flex-shrink-0 mt-1 p-2 bg-primary/10 rounded-lg group-hover/item:bg-primary/20 transition-all">
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
                      <div className="w-2 h-7 bg-gradient-to-b from-primary to-purple-600 rounded-full" />
                      Software & Tools
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {activeService.tools.map((tool, idx) => (
                        <span 
                          key={idx}
                          className="px-4 py-2 bg-gradient-to-br from-primary/10 to-purple-600/10 border border-primary/20 rounded-xl text-foreground text-xs font-medium hover:border-primary/50 hover:bg-primary/20 hover:shadow-lg transition-all transform hover:scale-105 cursor-default"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Button with enhanced styling */}
                <div className="pt-6 border-t border-primary/20">
                  <Link href="/contact">
                    <Button size="lg" className="w-full group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transform transition-all hover:shadow-lg hover:scale-105" data-testid="button-get-quote">
                      <span className="flex items-center justify-center gap-2">
                        <Zap size={18} className="group-hover:rotate-12 transition-transform" />
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
