import GlassPanel from "./GlassPanel";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  tools: string[];
  onClick: () => void;
}

export default function ProjectCard({ title, category, image, tools, onClick }: ProjectCardProps) {
  return (
    <div onClick={onClick} className="cursor-pointer" data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <GlassPanel className="overflow-hidden hover-elevate transition-all duration-300 hover:scale-105">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
          <div className="flex items-center justify-between w-full">
            <div>
              <div className="text-xs text-primary font-medium mb-1">{category}</div>
              <h3 className="text-lg font-subheading font-semibold text-foreground">{title}</h3>
            </div>
            <ExternalLink size={20} className="text-foreground/50" />
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span 
            key={tool} 
            className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
          >
            {tool}
          </span>
        ))}
      </div>
    </GlassPanel>
    </div>
  );
}
