import { Box, Wind, Printer, Microchip, Code, CheckCircle, ArrowRight, Zap, Sparkles, Lightbulb, Play, Pause, Star, Shield, FileText, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
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
  color: string;
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
    badge: "CORE",
    color: "from-primary to-purple-600"
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
    badge: "ADVANCED",
    color: "from-cyan-500 to-blue-600"
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
    badge: "RAPID",
    color: "from-orange-500 to-red-500"
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
    badge: "PRECISION",
    color: "from-green-500 to-emerald-600"
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
    badge: "SMART",
    color: "from-pink-500 to-rose-600"
  }
];

const deliverables = [
  { icon: Shield, title: "Quality Assurance", desc: "Industry-standard testing and validation protocols" },
  { icon: FileText, title: "Documentation", desc: "Comprehensive technical specs and guides" },
  { icon: Headphones, title: "Support", desc: "Expert guidance throughout the project" }
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
    <div className="relative min-h-screen pt-20 overflow-hidden bg-background">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 opacity-30"
        style={{ backgroundImage: `url(${activeService.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
      
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '12s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-full blur-[200px]" />
      
      <div className="absolute top-32 left-[30%] w-2 h-2 bg-primary/60 rounded-full animate-pulse hidden lg:block" style={{ animationDuration: '3s' }} />
      <div className="absolute top-48 right-[25%] w-1.5 h-1.5 bg-purple-500/60 rounded-full animate-pulse hidden lg:block" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
      <div className="absolute bottom-40 left-[20%] w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse hidden lg:block" style={{ animationDuration: '2s', animationDelay: '1s' }} />
      <div className="absolute bottom-60 right-[15%] w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse hidden lg:block" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }} />

      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-30">
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-b from-primary/20 via-purple-500/10 to-primary/20 rounded-3xl blur-xl" />
          
          <div className="relative backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-3xl p-5 shadow-2xl">
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>
            
            <div className="relative space-y-2 w-72">
              {servicesDetails.map((service, idx) => {
                const isActive = service.id === activeServiceId;
                return (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service.id)}
                    className={`w-full group relative overflow-hidden rounded-xl transition-all duration-500 ${
                      isActive ? 'scale-[1.02]' : 'hover:scale-[1.01]'
                    }`}
                    data-testid={`button-service-${service.id}`}
                  >
                    {isActive && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-90`} />
                    )}
                    {!isActive && (
                      <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-white/[0.05] transition-colors" />
                    )}
                    
                    {isActive && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                      </>
                    )}
                    
                    <div className="relative flex items-center gap-4 px-4 py-4">
                      <div className={`relative flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                        isActive 
                          ? 'bg-white/20 shadow-lg' 
                          : 'bg-white/5 group-hover:bg-white/10'
                      }`}>
                        {isActive && (
                          <div className="absolute inset-0 rounded-xl animate-pulse bg-white/10" style={{ animationDuration: '2s' }} />
                        )}
                        <service.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-foreground/60 group-hover:text-foreground'}`} />
                      </div>
                      
                      <div className="text-left flex-1 min-w-0">
                        <div className={`font-semibold text-sm truncate transition-colors ${
                          isActive ? 'text-white' : 'text-foreground/70 group-hover:text-foreground'
                        }`}>
                          {service.title}
                        </div>
                        <div className={`text-xs mt-0.5 flex items-center gap-1 ${
                          isActive ? 'text-white/70' : 'text-foreground/40'
                        }`}>
                          {isActive ? (
                            <>
                              <Lightbulb size={10} />
                              <span>Active</span>
                            </>
                          ) : (
                            <span>Click to explore</span>
                          )}
                        </div>
                      </div>
                      
                      {isActive && (
                        <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 transition-transform" />
                      )}
                    </div>
                    
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white/0 via-white/50 to-white/0" />
                    )}
                  </button>
                );
              })}
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/10">
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs text-foreground/60 hover:text-foreground"
                data-testid="button-toggle-autorotate"
              >
                {autoRotate ? <Pause size={12} /> : <Play size={12} />}
                {autoRotate ? "Auto-rotating" : "Paused"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40">
        <div className="relative">
          <div className="absolute inset-0 backdrop-blur-2xl bg-background/80" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <div className="relative p-4">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {servicesDetails.map((service) => {
                const isActive = service.id === activeServiceId;
                return (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service.id)}
                    className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl whitespace-nowrap transition-all text-xs font-medium ${
                      isActive 
                        ? `bg-gradient-to-r ${service.color} text-white shadow-lg` 
                        : 'bg-white/5 text-foreground/70 hover:bg-white/10'
                    }`}
                    data-testid={`button-mobile-service-${service.id}`}
                  >
                    <service.icon size={14} />
                    <span className="max-w-20 truncate">{service.title.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 pb-32 lg:pb-12 lg:pl-[360px] relative z-20">
        <div className="max-w-5xl mx-auto">
          <ScrollAnimation>
            <div key={activeServiceId} className={`transition-all duration-700 ${
              slideDirection === 'left' ? 'animate-in slide-in-from-right fade-in' : 'animate-in slide-in-from-left fade-in'
            }`}>
              <div className="relative mb-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 rounded-3xl blur-2xl opacity-50" />
                
                <div className="relative backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  
                  <div className="p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-10">
                      <div className="relative flex-shrink-0">
                        <div className={`absolute inset-0 bg-gradient-to-br ${activeService.color} rounded-2xl blur-xl opacity-50 animate-pulse`} style={{ animationDuration: '3s' }} />
                        <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${activeService.color} flex items-center justify-center shadow-2xl`}>
                          <activeService.icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <Star className="w-2.5 h-2.5 text-primary fill-primary" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                            {activeService.title}
                          </h1>
                          <span className={`px-3 py-1 bg-gradient-to-r ${activeService.color} rounded-full text-xs font-bold text-white shadow-lg`}>
                            {activeService.badge}
                          </span>
                        </div>
                        
                        <div className="flex gap-1 mb-4">
                          <div className={`w-16 h-1 bg-gradient-to-r ${activeService.color} rounded-full`} />
                          <div className="w-4 h-1 bg-primary/50 rounded-full animate-pulse" />
                          <div className="w-2 h-1 bg-purple-500/50 rounded-full" />
                        </div>
                        
                        <p className="text-lg text-foreground/80 leading-relaxed flex items-start gap-3">
                          <Sparkles className="text-primary flex-shrink-0 mt-1 animate-pulse w-5 h-5" style={{ animationDuration: '2s' }} />
                          {activeService.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl blur-lg opacity-50" />
                        <div className="relative backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                          
                          <h3 className="text-lg font-bold text-foreground mb-5 flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${activeService.color} flex items-center justify-center`}>
                              <CheckCircle className="w-5 h-5 text-white" />
                            </div>
                            Key Features
                          </h3>
                          
                          <ul className="space-y-3">
                            {activeService.features.map((feature, idx) => (
                              <li key={idx} className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition-all cursor-default">
                                <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                  <CheckCircle className="w-3.5 h-3.5 text-primary" />
                                </div>
                                <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl blur-lg opacity-50" />
                        <div className="relative backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
                          
                          <h3 className="text-lg font-bold text-foreground mb-5 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                              <Code className="w-5 h-5 text-white" />
                            </div>
                            Software & Tools
                          </h3>
                          
                          <div className="flex flex-wrap gap-2">
                            {activeService.tools.map((tool, idx) => (
                              <span 
                                key={idx}
                                className="group relative px-4 py-2.5 rounded-xl text-sm font-medium cursor-default transition-all hover:scale-105"
                              >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl group-hover:border-primary/30 group-hover:bg-primary/10 transition-all" />
                                <span className="relative text-foreground/70 group-hover:text-foreground transition-colors">{tool}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative mb-8">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/5 via-purple-500/10 to-primary/5 rounded-2xl blur-lg" />
                      <div className="relative backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {deliverables.map((item, idx) => (
                            <div key={idx} className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/[0.03] transition-all">
                              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <item.icon className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-bold text-foreground mb-1 flex items-center gap-2">
                                  {item.title}
                                </h4>
                                <p className="text-xs text-foreground/60">{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl blur-xl" />
                      <Link href="/contact">
                        <Button 
                          size="lg" 
                          className={`relative w-full group bg-gradient-to-r ${activeService.color} hover:shadow-2xl transition-all duration-300 border-0 h-14 text-base font-bold`}
                          data-testid="button-get-quote"
                        >
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span className="relative flex items-center justify-center gap-3">
                            <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            Start Your {activeService.title.split(' ')[0]} Project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {servicesDetails.map((service, idx) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service.id)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      service.id === activeServiceId 
                        ? `w-8 bg-gradient-to-r ${service.color}` 
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                    data-testid={`indicator-${service.id}`}
                  />
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
