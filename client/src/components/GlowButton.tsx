import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  "data-testid"?: string;
}

export function GlowButton({ children, onClick, disabled = false, className = "", "data-testid": testId }: GlowButtonProps) {
  return (
    <div className="group relative cursor-pointer inline-flex">
      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-cyan-400 rounded-full opacity-0 group-hover:opacity-70 blur-lg transition-all duration-500" />
      <button
        onClick={onClick}
        disabled={disabled}
        data-testid={testId}
        className={`relative inline-flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-primary/10 via-purple-500/10 to-cyan-400/10 border border-primary/30 group-hover:border-primary/50 transition-all duration-300 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      >
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </div>
        <span className="text-lg font-semibold text-foreground group-hover:text-white transition-colors relative z-10">
          {children}
        </span>
      </button>
    </div>
  );
}
