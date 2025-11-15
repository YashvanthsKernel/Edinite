import { useEffect, useRef } from "react";
import { Cpu, Layers, Box, Workflow, Cuboid, Binary, Zap, CircuitBoard } from "lucide-react";

const technologies = [
  { name: "SolidWorks", icon: Cuboid },
  { name: "ANSYS", icon: Zap },
  { name: "AutoCAD", icon: Box },
  { name: "MATLAB", icon: Binary },
  { name: "Altium Designer", icon: CircuitBoard },
  { name: "CATIA", icon: Layers },
  { name: "Fusion 360", icon: Box },
  { name: "Simulink", icon: Workflow },
];

export default function TechnologyCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scroll = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden py-4">
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {[...technologies, ...technologies, ...technologies].map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex-shrink-0 px-10 py-8 backdrop-blur-xl bg-white/5 border border-primary/20 rounded-xl hover-elevate flex flex-col items-center gap-4"
            data-testid={`tech-card-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <tech.icon className="text-5xl text-primary" />
            <span className="text-base font-subheading font-medium text-foreground whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
