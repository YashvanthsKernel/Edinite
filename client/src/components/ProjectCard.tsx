import { ArrowUpRight, Layers, Thermometer, Cpu, Code, Gauge } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  tools: string[];
  metrics?: { label: string; value: string }[];
  onClick: () => void;
}

const categoryConfig: Record<string, { color: string; gradient: string; icon: any }> = {
  "Mechanical Design": { 
    color: "text-orange-400", 
    gradient: "from-orange-500 to-amber-500",
    icon: Layers
  },
  "Thermal Engineering": { 
    color: "text-cyan-400", 
    gradient: "from-cyan-500 to-blue-500",
    icon: Thermometer
  },
  "Electrical": { 
    color: "text-yellow-400", 
    gradient: "from-yellow-500 to-orange-500",
    icon: Cpu
  },
  "AI/Software": { 
    color: "text-purple-400", 
    gradient: "from-purple-500 to-pink-500",
    icon: Code
  },
};

const getToolIcon = (tool: string) => {
  const icons: Record<string, string> = {
    "SolidWorks": "◆",
    "ANSYS": "◇",
    "ANSYS Fluent": "◇",
    "MATLAB": "▣",
    "CATIA": "◈",
    "Fusion 360": "◉",
    "AutoCAD": "□",
    "Altium": "⬡",
    "KiCad": "⬢",
    "Python": "◐",
    "Simulink": "◑",
  };
  return icons[tool] || "•";
};

export default function ProjectCard({ title, category, description, image, tools, metrics, onClick }: ProjectCardProps) {
  const config = categoryConfig[category] || { 
    color: "text-primary", 
    gradient: "from-primary to-purple-600",
    icon: Layers 
  };
  const CategoryIcon = config.icon;

  return (
    <div 
      onClick={onClick} 
      className="cursor-pointer group bg-card hover:bg-accent/5 transition-colors border-b md:border md:rounded-lg overflow-hidden flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6" 
      data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Image Container */}
      <div className="relative w-full md:w-72 lg:w-80 shrink-0 aspect-[4/3] md:aspect-square bg-muted rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        <div className="absolute top-2 right-2">
          <div className="px-2 py-1 rounded bg-black/60 backdrop-blur-sm border border-white/10 flex items-center gap-1.5">
            <CategoryIcon className={`w-3 h-3 ${config.color}`} />
            <span className="text-[10px] font-bold text-white uppercase tracking-wider">{category}</span>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 min-w-0">
        <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">4.8 (124)</span>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tools.map((tool) => (
            <span 
              key={tool} 
              className="px-2 py-1 bg-secondary text-secondary-foreground text-[10px] font-medium rounded border border-border"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
          <div className="flex flex-wrap gap-3">
            {metrics?.slice(0, 2).map((metric, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <Gauge className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium">{metric.label}: {metric.value}</span>
              </div>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-1 text-primary text-sm font-semibold">
            Details
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
