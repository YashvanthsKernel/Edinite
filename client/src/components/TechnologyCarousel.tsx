import { 
  Zap, 
  Layers, 
  Box, 
  Binary, 
  CircuitBoard, 
  Workflow, 
  PenTool,
  Cpu
} from "lucide-react";

const technologies = [
  { name: "ANSYS", icon: Zap, description: "Simulation" },
  { name: "AutoCAD", icon: PenTool, description: "2D/3D Design" },
  { name: "MATLAB", icon: Binary, description: "Computing" },
  { name: "Altium Designer", icon: CircuitBoard, description: "PCB Design" },
  { name: "CATIA", icon: Layers, description: "3D Modeling" },
  { name: "Fusion 360", icon: Box, description: "CAD/CAM" },
  { name: "SolidWorks", icon: Cpu, description: "Mechanical" },
  { name: "Simulink", icon: Workflow, description: "Systems" },
];

export default function TechnologyCarousel() {
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <div className="relative overflow-hidden py-8">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
      
      <div 
        className="flex gap-6 animate-marquee"
        style={{ width: 'fit-content' }}
      >
        {duplicatedTechnologies.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="group relative flex-shrink-0"
            data-testid={`tech-card-${tech.name.toLowerCase().replace(/\s+/g, '-')}-${index}`}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-2xl opacity-0 group-hover:opacity-50 blur-sm transition-all duration-500" />
            
            <div className="absolute -inset-px bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
            
            <div className="relative w-[160px] h-[140px] backdrop-blur-xl bg-card/80 dark:bg-white/[0.03] border border-primary/20 dark:border-white/10 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-card dark:group-hover:bg-white/[0.06]">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-purple-500/10 dark:from-primary/20 dark:to-purple-500/20 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-300">
                  <tech.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              
              <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
