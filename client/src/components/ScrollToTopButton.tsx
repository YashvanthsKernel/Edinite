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
        className="fixed bottom-12 left-8 z-40 group relative inline-flex"
        data-testid="button-scroll-to-top"
        aria-label="Scroll to top"
      >
        <div className="absolute -inset-2 bg-gradient-to-r from-primary via-purple-500 to-cyan-400 rounded-full opacity-70 group-hover:opacity-100 blur-lg transition-all duration-500" />
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-r from-primary/20 via-purple-500/20 to-cyan-400/20 border border-primary/50 group-hover:border-primary/70 flex items-center justify-center transition-all duration-300 backdrop-blur-sm shadow-lg shadow-primary/30">
          <ArrowUp size={24} className="text-primary group-hover:text-white group-hover:-translate-y-1 transition-all font-bold" />
        </div>
      </button>
    )
  );
}
