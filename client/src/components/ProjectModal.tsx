import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    description: string;
    image: string;
    tools: string[];
    details: string[];
  };
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-card/95 backdrop-blur-xl border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-bold text-foreground">
            {project.title}
          </DialogTitle>
          <div className="text-sm text-primary">{project.category}</div>
        </DialogHeader>
        
        <div className="space-y-6">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-cover rounded-xl"
          />
          
          <div>
            <h3 className="font-subheading font-semibold text-foreground mb-2">Description</h3>
            <p className="text-muted-foreground">{project.description}</p>
          </div>

          <div>
            <h3 className="font-subheading font-semibold text-foreground mb-2">Tools Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span 
                  key={tool} 
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-subheading font-semibold text-foreground mb-2">Key Features</h3>
            <ul className="space-y-2">
              {project.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
