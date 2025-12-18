import { Box, Wind, Printer, Microchip, Code, CheckCircle, ArrowRight, Zap, Sparkles, Lightbulb, Play, Pause, Star, Shield, FileText, Headphones, ChevronRight, Target, TrendingUp, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { motion } from "framer-motion";
import cadImage from '@assets/generated_images/CAD_design_service_background_19e6e5df.png';
import feaImage from '@assets/generated_images/FEA_CFD_simulation_background_275ed2b3.png';
import heroImage from '@assets/generated_images/Homepage_hero_engineering_montage_d31f5047.png';

interface ServiceDetail {
  id: string;
  icon: any;
  title: string;
  shortTitle: string;
  description: string;
  tagline: string;
  features: string[];
  tools: string[];
  image: string;
  badge: string;
  color: string;
  stat: string;
  statLabel: string;
}

const servicesDetails: ServiceDetail[] = [
  {
    id: "mechanical-cad",
    icon: Box,
    title: "Mechanical CAD Design",
    shortTitle: "CAD Design",
    description: "Professional 3D CAD modeling and mechanical design services using industry-leading software like SolidWorks, CATIA, and Fusion 360",
    tagline: "From concept to production-ready designs",
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
    color: "from-primary to-purple-600",
    stat: "200+",
    statLabel: "Models Delivered"
  },
  {
    id: "fea-cfd",
    icon: Wind,
    title: "FEA/CFD Simulation",
    shortTitle: "Simulation",
    description: "Advanced finite element analysis and computational fluid dynamics simulations for structural and thermal optimization",
    tagline: "Validate before you fabricate",
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
    color: "from-cyan-500 to-blue-600",
    stat: "98%",
    statLabel: "Accuracy Rate"
  },
  {
    id: "3d-printing",
    icon: Printer,
    title: "3D Printing Services",
    shortTitle: "3D Printing",
    description: "Rapid prototyping and additive manufacturing solutions with FDM, SLA, and SLS technologies for functional parts",
    tagline: "Prototype in days, not months",
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
    color: "from-orange-500 to-red-500",
    stat: "48h",
    statLabel: "Avg. Turnaround"
  },
  {
    id: "pcb-design",
    icon: Microchip,
    title: "PCB Design & Development",
    shortTitle: "PCB Design",
    description: "Custom printed circuit board design, layout, and development using Altium Designer for electronic product innovation",
    tagline: "Powering your electronic innovations",
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
    color: "from-green-500 to-emerald-600",
    stat: "6-Layer",
    statLabel: "Max Complexity"
  },
  {
    id: "matlab",
    icon: Code,
    title: "MATLAB-Based Simulation",
    shortTitle: "MATLAB",
    description: "Control systems design, data analysis, and dynamic system modeling using MATLAB and Simulink for complex engineering challenges",
    tagline: "Smart systems, smarter solutions",
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
    color: "from-pink-500 to-rose-600",
    stat: "15+",
    statLabel: "Toolboxes Used"
  }
];

const metrics = [
  { value: "46+", label: "Projects Completed", icon: Target },
  { value: "17+", label: "Happy Clients", icon: Users },
  { value: "98%", label: "Success Rate", icon: TrendingUp },
  { value: "5★", label: "Client Rating", icon: Award }
];

const deliverables = [
  { icon: Shield, title: "Quality Assurance", desc: "Industry-standard testing and validation" },
  { icon: FileText, title: "Full Documentation", desc: "Comprehensive technical specifications" },
  { icon: Headphones, title: "Dedicated Support", desc: "Expert guidance from start to finish" }
];

export default function Services() {
  const [location, setLocation] = useLocation();
  const [autoRotate, setAutoRotate] = useState(true);
  const [isHovered, setIsHovered] = useState<string | null>(null);
  
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
    sessionStorage.setItem('servicesScrollY', String(window.scrollY));
    setLocation(`/services/${serviceId}`);
  };

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    return () => {
      window.history.scrollRestoration = 'auto';
    };
  }, []);

  useEffect(() => {
    const scrollY = sessionStorage.getItem('servicesScrollY');
    if (scrollY !== null) {
      window.scrollTo(0, parseInt(scrollY));
      sessionStorage.removeItem('servicesScrollY');
    }
  }, [activeServiceId]);

  useEffect(() => {
    if (!autoRotate) return;

    const timer = setInterval(() => {
      const nextIndex = (activeIndex + 1) % servicesDetails.length;
      sessionStorage.setItem('servicesScrollY', String(window.scrollY));
      setLocation(`/services/${servicesDetails[nextIndex].id}`);
    }, 12000);

    return () => clearInterval(timer);
  }, [activeIndex, autoRotate, setLocation]);

  return (
    <div className="relative min-h-screen pt-20 overflow-hidden bg-background">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 opacity-20"
        style={{ backgroundImage: `url(${activeService.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background" />
      
      <div className="absolute top-10 left-[5%] w-[600px] h-[600px] bg-primary/15 rounded-full blur-[200px] animate-pulse pointer-events-none" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-10 right-[5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[180px] animate-pulse pointer-events-none" style={{ animationDuration: '15s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full pointer-events-none" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-pulse"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDuration: `${2 + i * 0.5}s`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      <section className="relative z-10 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/[0.05] border border-white/10 mb-6">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Engineering Excellence</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4">
                Our <span className="bg-gradient-to-r from-primary via-purple-500 to-cyan-400 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                End-to-end engineering solutions that transform ideas into validated, production-ready designs
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <motion.div className="relative mb-10">
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-purple-500/20 to-cyan-400/20 rounded-3xl blur-2xl opacity-60 animate-pulse" 
                style={{ animationDuration: '4s' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-cyan-500/5 rounded-2xl" />
              
              <div className="relative backdrop-blur-2xl bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                
                <motion.div 
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-conic from-primary/10 via-transparent to-transparent animate-spin" style={{ animationDuration: '20s' }} />
                </motion.div>
                
                <div className="relative grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
                  {metrics.map((metric, idx) => (
                    <motion.div 
                      key={idx}
                      className="relative group p-6 md:p-8 transition-all duration-500 hover:bg-white/[0.03]"
                      data-testid={`metric-${metric.label.toLowerCase().replace(/\s+/g, '-')}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.15 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="relative flex flex-col items-center text-center gap-4">
                        
                        <motion.div 
                          className="space-y-1"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: idx * 0.15 + 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_100%] bg-clip-text text-transparent group-hover:animate-pulse" style={{ animationDuration: '2s' }}>
                            {metric.value}
                          </div>
                          <div className="text-xs md:text-sm text-muted-foreground font-medium tracking-wide uppercase">
                            {metric.label}
                          </div>
                        </motion.div>
                      </div>
                      
                      <motion.div 
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-gradient-to-r from-primary/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        whileHover={{ width: 80 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 xl:col-span-3">
              <ScrollAnimation delay={150}>
                <div className="sticky top-24">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-b from-primary/20 via-purple-500/10 to-cyan-400/20 rounded-3xl blur-2xl opacity-40" />
                    
                    <div className="relative backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-5">
                          <h3 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider">Services</h3>
                          <button
                            onClick={() => setAutoRotate(!autoRotate)}
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-xs text-foreground/60"
                            data-testid="button-toggle-autorotate"
                          >
                            {autoRotate ? <Play size={10} className="text-primary" /> : <Pause size={10} />}
                            <span>{autoRotate ? "Auto" : "Paused"}</span>
                          </button>
                        </div>

                        <div className="space-y-2">
                          {servicesDetails.map((service, idx) => {
                            const isActive = service.id === activeServiceId;
                            const isItemHovered = isHovered === service.id;
                            
                            return (
                              <button
                                key={service.id}
                                onClick={() => handleServiceClick(service.id)}
                                onMouseEnter={() => setIsHovered(service.id)}
                                onMouseLeave={() => setIsHovered(null)}
                                className="w-full group relative"
                                data-testid={`button-service-${service.id}`}
                              >
                                <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                                  isActive 
                                    ? `bg-gradient-to-r ${service.color} opacity-100` 
                                    : 'bg-white/[0.02] opacity-100'
                                }`} />
                                
                                {isActive && (
                                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-white/40 via-white/20 to-transparent" />
                                  </div>
                                )}
                                
                                <div className="relative flex items-center gap-3 p-4">
                                  <div className={`relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                    isActive 
                                      ? 'bg-white/20 shadow-lg scale-105' 
                                      : 'bg-white/5 group-hover:bg-white/10'
                                  }`}>
                                    <service.icon className={`w-5 h-5 transition-colors ${
                                      isActive ? 'text-white' : 'text-foreground/50 group-hover:text-foreground'
                                    }`} />
                                    {isActive && (
                                      <div className="absolute inset-0 rounded-xl border border-white/30 animate-pulse" style={{ animationDuration: '2s' }} />
                                    )}
                                  </div>
                                  
                                  <div className="flex-1 text-left min-w-0">
                                    <div className={`font-semibold text-sm truncate transition-colors ${
                                      isActive ? 'text-white' : 'text-foreground/70 group-hover:text-foreground'
                                    }`}>
                                      {service.title}
                                    </div>
                                    <div className={`text-xs mt-0.5 truncate ${
                                      isActive ? 'text-white/70' : 'text-foreground/40'
                                    }`}>
                                      {isActive ? (
                                        <span className="flex items-center gap-1">
                                          <Lightbulb size={10} />
                                          Viewing now
                                        </span>
                                      ) : service.tagline}
                                    </div>
                                  </div>
                                  
                                  <ChevronRight className={`w-4 h-4 transition-all ${
                                    isActive 
                                      ? 'text-white/80 translate-x-0' 
                                      : 'text-foreground/20 -translate-x-1 group-hover:translate-x-0 group-hover:text-foreground/40'
                                  }`} />
                                </div>

                                {(isItemHovered && !isActive) && (
                                  <div className="absolute left-full top-0 ml-3 z-50 w-48 p-3 backdrop-blur-xl bg-background/95 border border-white/10 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden lg:block">
                                    <div className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                                      {service.stat}
                                    </div>
                                    <div className="text-xs text-muted-foreground">{service.statLabel}</div>
                                    <div className="mt-2 text-xs text-foreground/60 line-clamp-2">{service.tagline}</div>
                                  </div>
                                )}
                              </button>
                            );
                          })}
                        </div>

                        <div className="mt-5 pt-4 border-t border-white/10">
                          <div className="flex items-center justify-between text-xs text-foreground/40 mb-2">
                            <span>Progress</span>
                            <span>{activeIndex + 1} of {servicesDetails.length}</span>
                          </div>
                          <div className="flex gap-1">
                            {servicesDetails.map((service, idx) => (
                              <button
                                key={service.id}
                                onClick={() => handleServiceClick(service.id)}
                                className={`h-1.5 rounded-full transition-all duration-500 ${
                                  idx <= activeIndex 
                                    ? `bg-gradient-to-r ${activeService.color}` 
                                    : 'bg-white/10'
                                }`}
                                style={{ flex: service.id === activeServiceId ? 2 : 1 }}
                                data-testid={`indicator-${service.id}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <div className="lg:col-span-8 xl:col-span-9">
              <ScrollAnimation delay={200}>
                <div key={activeServiceId} className="animate-in fade-in slide-in-from-right-5 duration-500">
                  <div className="relative mb-6">
                    <div className={`absolute -inset-3 bg-gradient-to-r ${activeService.color} rounded-3xl blur-3xl opacity-40`} />
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-purple-500/20 to-cyan-400/20 rounded-3xl blur-2xl opacity-50" />
                    
                    <div className="relative backdrop-blur-3xl bg-background border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                      
                      <div className="p-6 md:p-10 lg:p-12">
                        <div className="flex flex-col md:flex-row md:items-start gap-8 mb-10">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-4 mb-4">
                              <h1 className="text-4xl lg:text-5xl font-heading font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                                {activeService.title}
                              </h1>
                              <Badge className={`bg-gradient-to-r ${activeService.color} text-white border-0 shadow-lg text-xs font-bold px-4 py-1.5`}>
                                {activeService.badge}
                              </Badge>
                            </div>
                            
                            <p className="text-lg text-foreground/70 leading-relaxed mb-5">
                              {activeService.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-8">
                              <div className="flex items-center gap-2 bg-white/[0.03] px-4 py-2 rounded-xl border border-white/10">
                                <div className={`text-3xl font-bold bg-gradient-to-r ${activeService.color} bg-clip-text text-transparent`}>
                                  {activeService.stat}
                                </div>
                                <div className="text-xs text-foreground/60 font-medium">{activeService.statLabel}</div>
                              </div>
                              <div className="flex items-center gap-2.5 text-foreground/70">
                                <Sparkles className="w-5 h-5 text-primary" />
                                <span className="font-medium">{activeService.tagline}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-8">
                          <div className="relative group">
                            <div className="absolute -inset-1.5 bg-gradient-to-br from-primary/25 to-purple-500/25 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                            <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/15 rounded-2xl p-7 h-full shadow-lg hover:shadow-2xl transition-shadow duration-300">
                              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                              
                              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-3">
                                <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${activeService.color} flex items-center justify-center shadow-lg border border-white/20`}>
                                  <CheckCircle className="w-6 h-6 text-white" />
                                </div>
                                <span>Key Features</span>
                              </h3>
                              
                              <ul className="space-y-3.5">
                                {activeService.features.map((feature, idx) => (
                                  <li 
                                    key={idx} 
                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/[0.06] transition-all group/item hover-elevate"
                                  >
                                    <div className="flex-shrink-0 w-5 h-5 rounded-md bg-primary/20 flex items-center justify-center mt-0.5 border border-primary/40">
                                      <CheckCircle className="w-3 h-3 text-primary" />
                                    </div>
                                    <span className="text-sm text-foreground/75 group-hover/item:text-foreground transition-colors leading-relaxed">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="relative group">
                            <div className="absolute -inset-1.5 bg-gradient-to-br from-purple-500/25 to-cyan-500/25 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                            <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/15 rounded-2xl p-7 h-full shadow-lg hover:shadow-2xl transition-shadow duration-300">
                              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />
                              
                              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-3">
                                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg border border-white/20">
                                  <Code className="w-6 h-6 text-white" />
                                </div>
                                <span>Software & Tools</span>
                              </h3>
                              
                              <div className="flex flex-wrap gap-2">
                                {activeService.tools.map((tool, idx) => (
                                  <span 
                                    key={idx}
                                    className="px-4 py-2.5 rounded-lg text-sm font-medium backdrop-blur-sm bg-white/[0.05] border border-white/15 text-foreground/75 hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default shadow-sm hover:shadow-md hover-elevate"
                                  >
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="relative">
                          <div className={`absolute inset-0 bg-gradient-to-r ${activeService.color} rounded-xl blur-2xl opacity-40`} />
                          <Link href="/contact">
                            <Button 
                              size="lg" 
                              className={`relative w-full group bg-gradient-to-r ${activeService.color} hover:shadow-2xl transition-all duration-300 border-0 h-16 text-base font-bold rounded-xl shadow-xl`}
                              data-testid="button-get-quote"
                            >
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                              <div className="absolute inset-0 rounded-xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <span className="relative flex items-center justify-center gap-3">
                                <Zap className="w-5 h-5 group-hover:rotate-12 group-hover:scale-125 transition-all" />
                                Start Your {activeService.shortTitle} Project
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                              </span>
                            </Button>
                          </Link>
                        </div>
                      </div>
                      
                      <div className={`h-1.5 bg-gradient-to-r ${activeService.color}`} />
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40">
        <div className="relative">
          <div className="absolute inset-0 backdrop-blur-2xl bg-background/90" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <div className="relative p-3">
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
                    <span>{service.shortTitle}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
