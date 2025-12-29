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
      className="cursor-pointer group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(114,38,255,0.3)] flex flex-col md:flex-row gap-4 md:gap-0" 
      data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Decorative Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

      {/* Image Container */}
      <div className="relative w-full md:w-80 lg:w-96 shrink-0 aspect-[16/10] md:aspect-auto overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20" />
        <div className="absolute top-3 left-3">
          <div className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1.5 shadow-lg">
            <CategoryIcon className={`w-3.5 h-3.5 ${config.color}`} />
            <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest">{category}</span>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 p-6 md:p-8 min-w-0 relative">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-white group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <div className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded-md border border-white/10">
            <div className="flex text-yellow-500/80">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[10px] font-bold text-white/40">4.8</span>
          </div>
        </div>

        <p className="text-base text-white/60 leading-relaxed mb-6 line-clamp-2 md:line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {tools.map((tool) => (
            <span 
              key={tool} 
              className="px-3 py-1 bg-white/5 text-white/80 text-[11px] font-medium rounded-full border border-white/10 group-hover:border-primary/30 transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
          <div className="flex flex-wrap gap-6">
            {metrics?.slice(0, 2).map((metric, idx) => (
              <div key={idx} className="flex flex-col gap-0.5">
                <span className="text-[10px] uppercase tracking-wider text-white/40 font-bold">{metric.label}</span>
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-white/90">{metric.value}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-primary font-bold group-hover:translate-x-1 transition-transform duration-300">
            <span className="text-sm tracking-wide uppercase">View Case Study</span>
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
