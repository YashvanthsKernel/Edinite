import { useEffect, useRef } from "react";

const technologies = [
  "SolidWorks",
  "ANSYS",
  "AutoCAD",
  "MATLAB",
  "Altium Designer",
  "CATIA",
  "Fusion 360",
  "Simulink",
];

export default function TechnologyCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scroll = () => {
      scrollPosition += 1;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={`${tech}-${index}`}
            className="flex-shrink-0 px-8 py-6 backdrop-blur-xl bg-white/5 border border-primary/20 rounded-xl hover-elevate"
          >
            <span className="text-lg font-subheading font-medium text-foreground whitespace-nowrap">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
