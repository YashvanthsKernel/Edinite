import { useState, useEffect } from 'react';

export function useScrollPopup(threshold: number = 0.5) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / scrollHeight;

      if (scrolled > threshold && !showPopup) {
        setShowPopup(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showPopup, threshold]);

  return { showPopup, setShowPopup };
}
