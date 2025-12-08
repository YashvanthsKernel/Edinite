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
      className="cursor-pointer group perspective-1000" 
      data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="relative transform-gpu transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2">
        <div className={`absolute -inset-1 bg-gradient-to-r ${config.gradient} rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500`} />
        <div className={`absolute -inset-px bg-gradient-to-r ${config.gradient} rounded-2xl opacity-0 group-hover:opacity-60 transition-all duration-300`} />
        
        <div className="relative backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="relative aspect-[16/10] overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
            <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay`} />
            
            <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[200%] transition-all duration-1000 ease-out" />
            
            <div className="absolute top-4 right-4 flex gap-2">
              <div className={`px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2`}>
                <CategoryIcon className={`w-3.5 h-3.5 ${config.color}`} />
                <span className={`text-xs font-bold ${config.color}`}>{category}</span>
              </div>
            </div>
            
            {metrics && metrics.length > 0 && (
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {metrics.map((metric, idx) => (
                  <div key={idx} className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2">
                    <Gauge className="w-3 h-3 text-green-400" />
                    <span className="text-xs text-white/90">{metric.label}: <span className="font-bold text-green-400">{metric.value}</span></span>
                  </div>
                ))}
              </div>
            )}
            
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex gap-1 mb-3">
                <div className={`w-10 h-1 bg-gradient-to-r ${config.gradient} rounded-full`} />
                <div className="w-3 h-1 bg-white/30 rounded-full group-hover:animate-pulse" />
                <div className="w-1.5 h-1 bg-white/20 rounded-full" />
              </div>
              
              <h3 className="text-xl lg:text-2xl font-heading font-bold text-white mb-2 drop-shadow-lg">
                {title}
              </h3>
              
              <p className="text-sm text-white/70 leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 line-clamp-2">
                {description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {tools.map((tool) => (
                  <span 
                    key={tool} 
                    className={`px-3 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 text-white/90 text-xs rounded-lg flex items-center gap-1.5 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300`}
                  >
                    <span className={`${config.color} text-[10px]`}>{getToolIcon(tool)}</span>
                    {tool}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                <span className={`text-sm font-semibold ${config.color}`}>View Case Study</span>
                <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${config.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </div>
          </div>
          
          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${config.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
        </div>
      </div>
    </div>
  );
}
