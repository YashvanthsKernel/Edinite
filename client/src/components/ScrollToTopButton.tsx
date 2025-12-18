import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 group relative inline-flex"
        data-testid="button-scroll-to-top"
        aria-label="Scroll to top"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-cyan-400 rounded-full opacity-0 group-hover:opacity-70 blur-lg transition-all duration-500" />
        <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-primary/10 via-purple-500/10 to-cyan-400/10 border border-primary/30 group-hover:border-primary/50 flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
          <ArrowUp size={20} className="text-foreground group-hover:text-white group-hover:-translate-y-0.5 transition-all" />
        </div>
      </button>
    )
  );
}
