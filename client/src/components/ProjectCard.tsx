import { ArrowUpRight, Layers, Thermometer, Cpu, Code, Gauge, Wind } from "lucide-react";
import { useState, useEffect } from "react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string | string[];
  tools: string[];
  metrics?: { label: string; value: string }[];
  onClick: () => void;
}

const categoryConfig: Record<string, { color: string; gradient: string; icon: any }> = {
  "Mechanical Design": { 
    color: "text-orange-400", 
    gradient: "from-orange-500/20 to-amber-500/5",
    icon: Layers
  },
  "Thermal Engineering": { 
    color: "text-cyan-400", 
    gradient: "from-cyan-500/20 to-blue-500/5",
    icon: Thermometer
  },
  "Electrical": { 
    color: "text-yellow-400", 
    gradient: "from-yellow-500/20 to-orange-500/5",
    icon: Cpu
  },
  "AI/Software": { 
    color: "text-purple-400", 
    gradient: "from-purple-500/20 to-pink-500/5",
    icon: Code
  },
  "Space Robotics": { 
    color: "text-indigo-400", 
    gradient: "from-indigo-500/20 to-violet-500/5",
    icon: Cpu
  },
  "Sustainable Design": { 
    color: "text-emerald-400", 
    gradient: "from-emerald-500/20 to-teal-500/5",
    icon: Wind
  },
  "Automotive Aerodynamics": { 
    color: "text-blue-400", 
    gradient: "from-blue-500/20 to-indigo-500/5",
    icon: Gauge
  }
};

export default function ProjectCard({ title, category, description, image, tools, metrics, onClick }: ProjectCardProps) {
  const images = Array.isArray(image) ? image : [image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [images.length]);

  const config = categoryConfig[category] || { 
    color: "text-primary", 
    gradient: "from-primary/20 to-purple-600/5",
    icon: Layers 
  };
  const CategoryIcon = config.icon;

  return (
    <div 
      onClick={onClick} 
      className="cursor-pointer group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.01] backdrop-blur-md transition-all duration-500 hover:bg-white/[0.03] hover:border-primary/40 hover:shadow-[0_0_40px_-15px_rgba(114,38,255,0.4)] flex flex-col md:flex-row gap-0" 
      data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Subtle Glow Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

      {/* Image Container */}
      <div className="relative w-full md:w-44 lg:w-52 shrink-0 aspect-[16/10] md:aspect-auto overflow-hidden">
        {images.map((img, idx) => (
          <img 
            key={idx}
            src={img} 
            alt={`${title} - image ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 transform ${idx === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
          />
        ))}
        {/* Glass Wash on Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent opacity-60" />
        
        {images.length > 1 && (
          <div className="absolute bottom-2 left-3 flex gap-1">
            {images.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-0.5 rounded-full transition-all duration-500 ${idx === currentImageIndex ? 'bg-primary w-4' : 'bg-white/20 w-1.5'}`} 
              />
            ))}
          </div>
        )}

        <div className="absolute top-2 left-2">
          <div className="px-2 py-1 rounded bg-black/40 backdrop-blur-xl border border-white/5 flex items-center gap-1.5 shadow-2xl">
            <CategoryIcon className={`w-3 h-3 ${config.color}`} />
            <span className="text-[7px] font-bold text-white/80 uppercase tracking-[0.2em]">{category}</span>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 p-5 md:p-6 min-w-0 relative z-10">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-base md:text-lg font-heading font-bold text-white/90 group-hover:text-white transition-colors duration-300 line-clamp-1 tracking-tight">
            {title}
          </h3>
          <div className="flex items-center gap-1 bg-white/[0.03] px-1.5 py-0.5 rounded-sm border border-white/5 shadow-inner">
            <svg className="w-2.5 h-2.5 fill-yellow-500/60" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-[8px] font-bold text-white/30">4.8</span>
          </div>
        </div>

        <p className="text-[11px] text-white/50 leading-relaxed mb-4 line-clamp-2 font-light">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {tools.slice(0, 4).map((tool) => (
            <span 
              key={tool} 
              className="px-2 py-0.5 bg-white/[0.02] text-white/60 text-[9px] font-medium rounded border border-white/5 group-hover:border-primary/20 transition-all duration-500"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.05]">
          <div className="flex items-center gap-4">
            {metrics?.slice(0, 2).map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[7px] uppercase tracking-[0.15em] text-white/30 font-bold mb-0.5">{metric.label}</span>
                <div className="flex items-center gap-1.5">
                  <div className="p-1 rounded-sm bg-primary/5">
                    <Gauge className="w-2.5 h-2.5 text-primary/70" />
                  </div>
                  <span className="text-[10px] font-bold text-white/80 tabular-nums">{metric.value}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-primary/80 font-bold group-hover:translate-x-1 group-hover:text-primary transition-all duration-300">
            <span className="text-[9px] tracking-widest uppercase font-black">Analyze</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
