import { X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

interface ScrollPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScrollPopup({ isOpen, onClose }: ScrollPopupProps) {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={onClose}
        data-testid="popup-overlay"
      />
      <div 
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
        data-testid="popup-modal"
      >
        <div className="bg-card border border-primary/20 rounded-2xl shadow-2xl p-8 space-y-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            data-testid="button-close-popup"
          >
            <X size={24} />
          </button>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Zap size={20} className="text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Get Your Project Started
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Don't wait! Get expert engineering solutions tailored to your needs. Our team is ready to transform your ideas into reality.
            </p>
          </div>

          <div className="space-y-3">
            <Link href="/contact">
              <Button size="lg" className="w-full" onClick={onClose} data-testid="button-popup-quote">
                Request a Quote
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full" 
              onClick={onClose}
              data-testid="button-popup-close"
            >
              Continue Browsing
            </Button>
          </div>

          <div className="pt-4 border-t border-primary/10">
            <p className="text-xs text-muted-foreground text-center">
              Limited slots available this month. Respond today!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
