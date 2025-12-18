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
        className="fixed bottom-8 right-8 z-40 group"
        data-testid="button-scroll-to-top"
        aria-label="Scroll to top"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-cyan-400 rounded-lg opacity-0 group-hover:opacity-75 blur-lg transition-all duration-500" />
        <div className="relative px-6 py-4 rounded-lg bg-gradient-to-br from-primary/90 to-purple-600/90 border border-primary/60 group-hover:border-cyan-400/60 flex items-center justify-center gap-3 transition-all duration-300 backdrop-blur-md shadow-xl shadow-primary/40 group-hover:shadow-cyan-500/50 group-hover:scale-105">
          <span className="text-sm font-semibold text-white">Back to Top</span>
          <ArrowUp size={18} className="text-white group-hover:translate-y-0 translate-y-0.5 transition-transform" />
        </div>
      </button>
    )
  );
}
