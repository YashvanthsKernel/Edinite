import { useEffect, useRef } from "react";
import { Award, Target, Rocket, Shield, Users, Globe, CheckCircle, TrendingUp } from "lucide-react";

const companyHighlights = [
  { name: "Quality Assured", icon: Award },
  { name: "Precision Engineering", icon: Target },
  { name: "Rapid Delivery", icon: Rocket },
  { name: "Trusted Partner", icon: Shield },
  { name: "Expert Team", icon: Users },
  { name: "Global Reach", icon: Globe },
  { name: "100% Satisfaction", icon: CheckCircle },
  { name: "Growth Focused", icon: TrendingUp },
];

export default function CompanyCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scroll = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden py-4">
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {[...companyHighlights, ...companyHighlights, ...companyHighlights].map((highlight, index) => (
          <div
            key={`${highlight.name}-${index}`}
            className="flex-shrink-0 px-10 py-8 backdrop-blur-xl bg-gradient-to-br from-primary/10 to-purple-600/10 border border-primary/30 rounded-xl hover-elevate flex flex-col items-center gap-4"
            data-testid={`company-card-${highlight.name.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <highlight.icon className="w-12 h-12 text-primary" />
            <span className="text-base font-subheading font-medium text-foreground whitespace-nowrap">
              {highlight.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
