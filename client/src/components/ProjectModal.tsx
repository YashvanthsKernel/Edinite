import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    description: string;
    image: string | string[];
    tools: string[];
    details: string[];
  };
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const images = Array.isArray(project.image) ? project.image : [project.image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1 || !isOpen) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [images.length, isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-[#010030]/95 backdrop-blur-2xl border-white/10 text-white overflow-hidden p-0">
        <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-auto bg-black flex items-center justify-center overflow-hidden">
            {images.map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt={`${project.title} - ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${idx === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
            
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                {images.map((_, idx) => (
                  <button 
                    key={idx} 
                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-primary w-6' : 'bg-white/20 hover:bg-white/40'}`} 
                  />
                ))}
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="flex-1 p-6 md:p-8 overflow-y-auto custom-scrollbar">
            <DialogHeader className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded bg-primary/20 border border-primary/30 text-[10px] font-bold text-primary uppercase tracking-widest">
                  {project.category}
                </span>
              </div>
              <DialogTitle className="text-2xl md:text-3xl font-heading font-bold text-white leading-tight">
                {project.title}
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-8">
              <div className="prose prose-invert prose-sm max-w-none">
                <p className="text-white/70 leading-relaxed whitespace-pre-line text-base">
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div>
                  <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {project.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-white/80">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_10px_rgba(114,38,255,0.8)]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Technical Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span 
                        key={tool} 
                        className="px-3 py-1.5 bg-white/5 text-white/90 text-xs font-medium rounded-lg border border-white/10"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
