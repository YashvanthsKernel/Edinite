import { cn } from "@/lib/utils";

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <div 
      className={cn(
        "backdrop-blur-xl bg-white/5 border border-primary/20 rounded-2xl",
        "shadow-[0_8px_32px_0_rgba(114,38,255,0.2)]",
        className
      )}
    >
      {children}
    </div>
  );
}
