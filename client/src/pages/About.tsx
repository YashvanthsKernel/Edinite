import { 
  Palette, Waves, Cpu, GraduationCap, Target, Lightbulb, 
  Users, Award, ArrowRight, ChevronRight, ChevronLeft, Sparkles,
  TrendingUp, Shield, Clock, CheckCircle2, Mail, Layers, Pen
} from "lucide-react";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import GlassPanel from "@/components/GlassPanel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollAnimation from "@/components/ScrollAnimation";
import { useState, useEffect, useRef } from "react";
import karthikeyanImage from "@assets/Karthikeyan_Image_1765222199201.png";
import shrivatsavImage from "@assets/Shrivatsav_Image_1765222427299.jpg";
import prasanthImage from "@assets/Prasanth_Image_1765222789557.jpg";
import dhinesshImage from "@assets/Gemini_Generated_Image_s5ca9xs5ca9xs5ca_1765222998494.png";
import ediniteLogoCenter from "@assets/Edinite_Logo_PNG_1764532314215_1765223217301.png";

function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${target}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [target, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(target * easeOut));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <span id={`counter-${target}`} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

function HexagonGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <polygon 
              points="25,0 50,14.4 50,43.4 25,57.7 0,43.4 0,14.4" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  );
}

function TimelineConnector() {
  return (
    <div className="hidden lg:block absolute top-[6px] left-0 right-0 h-16 pointer-events-none">
      <svg 
        className="w-full h-full" 
        viewBox="0 0 1000 60" 
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="25%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
            <stop offset="75%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
          </linearGradient>
          
          <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="40%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="60%" stopColor="#a855f7" stopOpacity="1" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
          
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <path
          d="M 125 30 
             C 200 30, 220 8, 290 8
             L 375 8
             C 420 8, 440 30, 500 30
             C 560 30, 580 52, 625 52
             L 710 52
             C 780 52, 800 30, 875 30"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          filter="url(#glow)"
        />
        
        <path
          d="M 125 30 
             C 200 30, 220 8, 290 8
             L 375 8
             C 420 8, 440 30, 500 30
             C 560 30, 580 52, 625 52
             L 710 52
             C 780 52, 800 30, 875 30"
          stroke="url(#pulseGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          filter="url(#strongGlow)"
          strokeDasharray="80 920"
          className="animate-timeline-pulse"
        />
        
        <circle cx="125" cy="30" r="6" fill="hsl(var(--primary))" filter="url(#strongGlow)" className="animate-pulse" style={{ animationDuration: '2s' }} />
        <circle cx="125" cy="30" r="3" fill="white" />
        
        <circle cx="375" cy="8" r="6" fill="hsl(var(--primary))" filter="url(#strongGlow)" className="animate-pulse" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
        <circle cx="375" cy="8" r="3" fill="white" />
        
        <circle cx="625" cy="52" r="6" fill="#a855f7" filter="url(#strongGlow)" className="animate-pulse" style={{ animationDuration: '2s', animationDelay: '1s' }} />
        <circle cx="625" cy="52" r="3" fill="white" />
        
        <circle cx="875" cy="30" r="6" fill="hsl(var(--primary))" filter="url(#strongGlow)" className="animate-pulse" style={{ animationDuration: '2s', animationDelay: '1.5s' }} />
        <circle cx="875" cy="30" r="3" fill="white" />
      </svg>
    </div>
  );
}

interface RoadmapValue {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

function RoadmapSection({ values }: { values: RoadmapValue[] }) {
  const [activeStep, setActiveStep] = useState(0);
  const [detailOpen, setDetailOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setActiveStep(prev => Math.max(0, prev - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveStep(prev => Math.min(values.length - 1, prev + 1));
      } else if (e.key === 'Enter') {
        setDetailOpen(true);
      } else if (e.key === 'Escape') {
        setDetailOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [values.length]);

  const stepDetails = [
    {
      deliverables: ["Initial concept sketches", "Requirements analysis", "Feasibility study"],
      timeframe: "1-2 weeks",
      image: "Concept development phase"
    },
    {
      deliverables: ["Detailed CAD models", "Technical specifications", "Quality validation"],
      timeframe: "2-4 weeks",
      image: "Precision engineering"
    },
    {
      deliverables: ["Weekly progress reviews", "Design iterations", "Client feedback integration"],
      timeframe: "Ongoing",
      image: "Team collaboration"
    },
    {
      deliverables: ["Production-ready files", "Documentation package", "Manufacturing support"],
      timeframe: "1-2 weeks",
      image: "Final delivery"
    }
  ];

  return (
    <div className="mt-16" ref={sectionRef}>
      <ScrollAnimation>
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4">Our Core Values</Badge>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
            The Roadmap to <span className="text-primary">Excellence</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Four predictable stages — one reliable delivery. See how we take an idea to production-ready CAD.
          </p>
        </div>
      </ScrollAnimation>

      <div className="relative max-w-5xl mx-auto px-4">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-b from-[#6B3DF2] via-[#a855f7] to-[#00D4FF] opacity-30 rounded-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#6B3DF2] via-[#a855f7] to-[#00D4FF] opacity-60 rounded-full blur-sm" />
          
          <svg 
            className="absolute inset-0 w-full h-full overflow-visible" 
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="particleGlowCenter" x="-200%" y="-10%" width="500%" height="120%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {[0, 1, 2, 3].map((i) => (
              <circle 
                key={`particle-center-${i}`} 
                cx="2" 
                r="5" 
                fill="#00D4FF" 
                filter="url(#particleGlowCenter)"
              >
                <animate
                  attributeName="cy"
                  values="0%;100%"
                  dur="5s"
                  repeatCount="indefinite"
                  begin={`${i * 1.25}s`}
                />
                <animate 
                  attributeName="opacity" 
                  values="0;0.8;1;0.8;0" 
                  dur="5s" 
                  repeatCount="indefinite" 
                  begin={`${i * 1.25}s`} 
                />
                <animate 
                  attributeName="r" 
                  values="3;6;5;6;3" 
                  dur="5s" 
                  repeatCount="indefinite" 
                  begin={`${i * 1.25}s`} 
                />
              </circle>
            ))}
          </svg>
        </div>

        <div className="relative space-y-6 md:space-y-0">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            const isActive = index === activeStep;
            const valueId = value.title.toLowerCase().replace(/\s+/g, '-');
            const isLeft = index % 2 === 0;
            
            const CardContent = () => (
              <div 
                className={`
                  cursor-pointer transition-all duration-500 ease-out
                  ${isActive ? 'scale-[1.02]' : 'hover:scale-[1.01]'}
                `}
                onClick={() => {
                  setActiveStep(index);
                  setDetailOpen(true);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setDetailOpen(true)}
                data-testid={`card-value-${valueId}`}
              >
                <div 
                  className={`
                    relative p-6 rounded-[18px] backdrop-blur-lg transition-all duration-500
                    ${isActive 
                      ? 'shadow-[0_8px_40px_rgba(107,61,242,0.35)]' 
                      : 'shadow-[0_8px_30px_rgba(10,0,30,0.6)] hover:shadow-[0_12px_35px_rgba(10,0,30,0.7)]'
                    }
                  `}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
                    border: isActive 
                      ? '1px solid rgba(160,80,255,0.35)' 
                      : '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  {isActive && (
                    <div 
                      className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full"
                      style={{ background: 'linear-gradient(90deg, #6B3DF2, #00D4FF)' }}
                    />
                  )}
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <div 
                      className={`
                        w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300
                        ${isActive 
                          ? 'bg-gradient-to-br from-[#6B3DF2] to-[#00D4FF] shadow-lg shadow-purple-500/30' 
                          : 'bg-white/5 border border-white/10'
                        }
                      `}
                    >
                      <IconComponent className={`w-6 h-6 ${isActive ? 'text-white' : 'text-[#B9A9FF]'}`} />
                    </div>
                    {isActive && <Sparkles className="w-5 h-5 text-[#00D4FF] animate-pulse" style={{ animationDuration: '1.5s' }} />}
                  </div>
                  <span className="inline-block text-xs font-semibold uppercase tracking-[1.5px] mb-2" style={{ color: '#B9A9FF' }}>
                    Step {index + 1}
                  </span>
                  <h4 className="text-xl font-bold transition-colors mb-2" style={{ color: isActive ? '#fff' : '#D7D3F6' }} data-testid={`text-value-title-${valueId}`}>
                    {value.title}
                  </h4>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#D7D3F6' }} data-testid={`text-value-desc-${valueId}`}>
                    {value.description}
                  </p>
                  <button
                    className="text-sm font-medium text-[#B9A9FF] hover:text-white transition-colors group/link flex items-center gap-1"
                    onClick={(e) => { e.stopPropagation(); setActiveStep(index); setDetailOpen(true); }}
                    data-testid={`button-readmore-${valueId}`}
                  >
                    Read more <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </button>
                </div>
              </div>
            );
            
            return (
              <div
                key={index}
                className={`
                  relative transition-all duration-700 ease-out md:py-6
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                `}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-4 md:gap-0">
                  <div className="hidden md:block flex-1 pr-10">
                    {isLeft && <CardContent />}
                  </div>
                  
                  <div className="absolute left-4 md:relative md:left-auto md:flex-shrink-0 z-20">
                    <div 
                      className={`
                        relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-lg
                        transition-all duration-500 cursor-pointer
                        ${isActive 
                          ? 'text-white scale-110' 
                          : 'text-[#B9A9FF] border-2 border-[#6B3DF2]/40 hover:scale-105'
                        }
                      `}
                      style={{
                        background: isActive 
                          ? 'linear-gradient(135deg, #6B3DF2, #a855f7)' 
                          : 'rgba(11, 7, 16, 0.95)'
                      }}
                      onClick={() => setActiveStep(index)}
                    >
                      {isActive && (
                        <div 
                          className="absolute inset-[-5px] rounded-full animate-pulse"
                          style={{ 
                            background: 'linear-gradient(135deg, #6B3DF2, #00D4FF)',
                            filter: 'blur(12px)',
                            opacity: 0.8,
                            animationDuration: '2s'
                          }}
                        />
                      )}
                      <span className="relative z-10">{index + 1}</span>
                    </div>
                  </div>

                  <div className="hidden md:block flex-1 pl-10">
                    {!isLeft && <CardContent />}
                  </div>

                  <div 
                    className={`
                      flex-1 ml-16 md:hidden cursor-pointer transition-all duration-500 ease-out
                      ${isActive ? 'scale-[1.02]' : 'hover:scale-[1.01]'}
                    `}
                    onClick={() => { setActiveStep(index); setDetailOpen(true); }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setDetailOpen(true)}
                    data-testid={`card-value-mobile-${valueId}`}
                  >
                    <div 
                      className={`
                        relative p-5 rounded-[18px] backdrop-blur-lg transition-all duration-500
                        ${isActive 
                          ? 'shadow-[0_8px_40px_rgba(107,61,242,0.35)]' 
                          : 'shadow-[0_8px_30px_rgba(10,0,30,0.6)]'
                        }
                      `}
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
                        border: isActive 
                          ? '1px solid rgba(160,80,255,0.35)' 
                          : '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div 
                          className={`
                            w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300
                            ${isActive 
                              ? 'bg-gradient-to-br from-[#6B3DF2] to-[#00D4FF]' 
                              : 'bg-white/5 border border-white/10'
                            }
                          `}
                        >
                          <IconComponent className={`w-5 h-5 ${isActive ? 'text-white' : 'text-[#B9A9FF]'}`} />
                        </div>
                        <div className="flex-1">
                          <span className="text-[10px] font-semibold uppercase tracking-[1px]" style={{ color: '#B9A9FF' }}>Step {index + 1}</span>
                          <h4 className="text-base font-bold" style={{ color: isActive ? '#fff' : '#D7D3F6' }}>{value.title}</h4>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: '#D7D3F6' }}>{value.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
            className={`
              w-12 h-12 rounded-xl flex items-center justify-center
              transition-all duration-300 backdrop-blur-sm
              ${activeStep === 0 
                ? 'bg-white/5 border border-white/10 text-white/30 cursor-not-allowed' 
                : 'bg-white/10 border border-[#6B3DF2]/40 text-white hover:bg-[#6B3DF2]/30 hover:border-[#6B3DF2]/60 hover:shadow-lg hover:shadow-purple-500/20'
              }
            `}
            aria-label="Previous step"
            data-testid="button-prev-step"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-3 bg-white/5 rounded-full px-5 py-2.5 backdrop-blur-sm border border-white/10">
            <span className="text-sm text-[#B9A9FF]">Step</span>
            <span className="text-xl font-bold text-white">{activeStep + 1}</span>
            <span className="text-sm text-[#B9A9FF]">/ {values.length}</span>
          </div>

          <div className="flex gap-1.5">
            {values.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`
                  h-2.5 rounded-full transition-all duration-300
                  ${index === activeStep 
                    ? 'w-10 bg-gradient-to-r from-[#6B3DF2] to-[#00D4FF] shadow-lg shadow-purple-500/30' 
                    : 'w-2.5 bg-white/20 hover:bg-white/40'
                  }
                `}
                aria-label={`Go to step ${index + 1}`}
                data-testid={`button-progress-${index}`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveStep(prev => Math.min(values.length - 1, prev + 1))}
            disabled={activeStep === values.length - 1}
            className={`
              w-12 h-12 rounded-xl flex items-center justify-center
              transition-all duration-300 backdrop-blur-sm
              ${activeStep === values.length - 1 
                ? 'bg-white/5 border border-white/10 text-white/30 cursor-not-allowed' 
                : 'bg-white/10 border border-[#6B3DF2]/40 text-white hover:bg-[#6B3DF2]/30 hover:border-[#6B3DF2]/60 hover:shadow-lg hover:shadow-purple-500/20'
              }
            `}
            aria-label="Next step"
            data-testid="button-next-step"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="hidden px-4">
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6B3DF2] via-[#a855f7] to-[#00D4FF] opacity-30" />
          
          <div className="space-y-4">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              const isActive = index === activeStep;
              const valueId = value.title.toLowerCase().replace(/\s+/g, '-');
              
              return (
                <div
                  key={index}
                  className={`
                    relative pl-12 transition-all duration-500 ease-out
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
                  `}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div 
                    className={`
                      absolute left-4 w-5 h-5 rounded-full flex items-center justify-center
                      transition-all duration-300 z-10
                      ${isActive 
                        ? 'bg-gradient-to-br from-[#6B3DF2] to-[#00D4FF] shadow-lg shadow-purple-500/40 scale-125' 
                        : 'bg-white/10 border border-white/20'
                      }
                    `}
                    style={{ top: '28px' }}
                  >
                    <span className="text-[10px] font-bold text-white">{index + 1}</span>
                  </div>

                  <button
                    onClick={() => setActiveStep(isActive ? -1 : index)}
                    className={`
                      w-full text-left p-5 rounded-2xl backdrop-blur-lg
                      transition-all duration-300
                      ${isActive 
                        ? 'shadow-[0_8px_30px_rgba(107,61,242,0.3)]' 
                        : 'shadow-[0_4px_20px_rgba(10,0,30,0.4)]'
                      }
                    `}
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
                      border: isActive 
                        ? '1px solid rgba(160,80,255,0.35)' 
                        : '1px solid rgba(255,255,255,0.06)',
                    }}
                    data-testid={`card-value-mobile-${valueId}`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div 
                        className={`
                          w-10 h-10 rounded-xl flex items-center justify-center
                          ${isActive 
                            ? 'bg-gradient-to-br from-[#6B3DF2] to-[#00D4FF]' 
                            : 'bg-white/5 border border-white/10'
                          }
                        `}
                      >
                        <IconComponent className={`w-5 h-5 ${isActive ? 'text-white' : 'text-[#B9A9FF]'}`} />
                      </div>
                      <div className="flex-1">
                        <span className="text-[10px] font-semibold uppercase tracking-[1px] text-[#B9A9FF]">
                          Step {index + 1}
                        </span>
                        <h4 className="text-base font-semibold text-white">{value.title}</h4>
                      </div>
                      <ChevronRight 
                        className={`w-5 h-5 text-[#B9A9FF] transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`}
                      />
                    </div>
                    
                    {isActive && (
                      <div className="mt-3 pt-3 border-t border-white/10 space-y-3">
                        <p className="text-sm text-[#D7D3F6] leading-relaxed">{value.description}</p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setDetailOpen(true);
                          }}
                          className="text-sm font-medium text-[#00D4FF] flex items-center gap-1"
                          data-testid={`button-details-mobile-${valueId}`}
                        >
                          View details <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {detailOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4"
          onClick={() => setDetailOpen(false)}
        >
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            style={{ animation: 'fadeIn 320ms ease-out' }}
          />
          <div 
            className="relative w-full max-w-lg bg-gradient-to-br from-[#0b0710] to-[#1a1025] rounded-t-3xl md:rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'slideUp 320ms ease-out' }}
          >
            <div 
              className="absolute top-0 left-0 right-0 h-1"
              style={{ background: 'linear-gradient(90deg, #6B3DF2, #a855f7, #00D4FF)' }}
            />
            
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6B3DF2] to-[#00D4FF] flex items-center justify-center">
                    {(() => {
                      const IconComponent = values[activeStep].icon;
                      return <IconComponent className="w-6 h-6 text-white" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[1px] text-[#B9A9FF]">
                      Step {activeStep + 1}
                    </span>
                    <h3 className="text-xl font-bold text-white">{values[activeStep].title}</h3>
                  </div>
                </div>
                <button
                  onClick={() => setDetailOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors"
                  data-testid="button-close-detail"
                >
                  <span className="sr-only">Close</span>
                  <span aria-hidden>×</span>
                </button>
              </div>

              <p className="text-[#D7D3F6] mb-6">{values[activeStep].description}</p>

              <div className="space-y-4 mb-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#B9A9FF]">Deliverables</h4>
                <ul className="space-y-2">
                  {stepDetails[activeStep].deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#D7D3F6]">
                      <CheckCircle2 className="w-4 h-4 text-[#00D4FF] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4 mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
                <Clock className="w-5 h-5 text-[#B9A9FF]" />
                <div>
                  <span className="text-xs text-[#B9A9FF]">Timeframe</span>
                  <p className="text-sm font-medium text-white">{stepDetails[activeStep].timeframe}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  className="flex-1 bg-gradient-to-r from-[#6B3DF2] to-[#a855f7] hover:from-[#7c4ff5] hover:to-[#b366f9] text-white border-0"
                  data-testid="button-talk-engineer"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Talk to an engineer
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 border-white/20 text-white hover:bg-white/10"
                  data-testid="button-see-samples"
                >
                  See Samples
                </Button>
              </div>

              <p className="text-center text-xs text-[#B9A9FF] mt-4">
                We reply within 1 business day
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default function About() {
  const leadership = [
    {
      name: "Karthikeyan R",
      position: "Founder & CEO",
      description: "Mechanical engineering innovator dedicated to making advanced design accessible",
      specialties: ["CAD Design", "ISRO Projects", "EV Systems"],
      initials: "KR",
      email: "rkarthikeyan135@gmail.com",
      linkedin: "https://www.linkedin.com/in/karthikeyan-r-6414a9258/",
      instagram: "https://www.instagram.com/karthik_designer26/",
      image: karthikeyanImage
    },
    {
      name: "Shrivatsav Tamil Kumaran",
      position: "COO & CSO",
      description: "Product design expert with strong passion for engineering solutions",
      specialties: ["Product Design", "Leadership", "Strategy"],
      initials: "ST",
      email: "shrivatsavt2906@gmail.com",
      linkedin: "https://www.linkedin.com/in/shrivatsav-t-160a0a257/",
      instagram: "https://www.instagram.com/captain7_vatsav_",
      image: shrivatsavImage
    },
    {
      name: "Prasanth Kannan",
      position: "CFO & Sales Director",
      description: "Driving financial vision and bridging technical needs with business solutions",
      specialties: ["Financial Planning", "Client Strategy", "Business Growth"],
      initials: "PK",
      email: "prasanthkannan0921@gmail.com",
      linkedin: "https://www.linkedin.com/in/prasanthkanna03/",
      instagram: "https://www.instagram.com/prasanth__kannan03?igsh=MXQwNmw5YTJ3eWY2ag==",
      image: prasanthImage
    },
    {
      name: "Dhinessh Raj S",
      position: "Engineering Director",
      description: "FEA, prototyping, and CAD expert transforming complex ideas into solutions",
      specialties: ["FEA Analysis", "Prototyping", "CAD Expertise"],
      initials: "DR",
      email: "dhinesshraj10@gmail.com",
      linkedin: "https://www.linkedin.com/in/dhinessh-raj-07271323b/",
      instagram: "https://www.instagram.com/dhinesshraj_sundar?igsh=MXFuenRxbGZ3c2ZuNA==",
      image: dhinesshImage
    }
  ];

  const services = [
    {
      title: "3D CAD Design & Rendering",
      description: "Professional CAD modeling and photorealistic visualization that brings your concepts to life",
      icon: Palette,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "CFD & FEA Simulation",
      description: "Advanced structural and thermal analysis for optimization and validation",
      icon: Waves,
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      title: "Electronics & PCB Design",
      description: "Complete circuit design and PCB layout for sophisticated electronic systems",
      icon: Cpu,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Edu-Tech Training",
      description: "Comprehensive engineering education, workshops, and skill development programs",
      icon: GraduationCap,
      gradient: "from-orange-500 to-amber-500"
    }
  ];

  const stats = [
    { value: 50, suffix: "+", label: "Projects Delivered", icon: CheckCircle2 },
    { value: 10, suffix: "+", label: "Industries Served", icon: TrendingUp },
    { value: 100, suffix: "%", label: "Client Satisfaction", icon: Shield },
    { value: 24, suffix: "/7", label: "Support Available", icon: Clock }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Cutting-edge tools and methodologies for breakthrough engineering solutions"
    },
    {
      icon: Target,
      title: "Precision Driven",
      description: "Industry-standard processes ensuring accuracy in every deliverable"
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Working alongside clients to transform their vision into reality"
    },
    {
      icon: Award,
      title: "Excellence Standard",
      description: "Committed to delivering exceptional quality in every project"
    }
  ];

  const timeline = [
    { year: "Vision", title: "The Beginning", description: "Founded with a mission to democratize engineering excellence" },
    { year: "Growth", title: "Expanding Horizons", description: "Extended services across CAD, simulation, and PCB design" },
    { year: "Impact", title: "Industry Recognition", description: "Trusted partner for students, startups, and enterprises" },
    { year: "Future", title: "Scaling Innovation", description: "Building India's premier digital engineering ecosystem" }
  ];

  return (
    <div className="min-h-screen pt-20 overflow-hidden">
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-600/5" />
        <HexagonGrid />
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px] animate-pulse" 
             style={{ animationDuration: '12s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <ScrollAnimation>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mt-[21px] mb-[21px]">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Edinite</span>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={100}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-foreground mb-8 leading-tight">
              Transforming Ideas Into
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Where engineering precision meets innovation. We craft validated designs, 
              simulations, and prototypes that set the foundation for tomorrow's products.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="group" data-testid="button-start-your-journey">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" data-testid="button-view-our-work">
                  View Our Work
                </Button>
              </Link>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={400}>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => {
                const statId = stat.label.toLowerCase().replace(/\s+/g, '-');
                return (
                  <div key={index} className="group" data-testid={`card-stat-${statId}`}>
                    <GlassPanel className="p-6 text-center hover-elevate transition-all duration-300">
                      <p className="text-3xl md:text-4xl font-bold text-foreground mb-1" data-testid={`text-counter-${statId}`}>
                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                      </p>
                      <p className="text-sm text-muted-foreground" data-testid={`text-label-${statId}`}>{stat.label}</p>
                    </GlassPanel>
                  </div>
                );
              })}
            </div>
          </ScrollAnimation>
        </div>

      </section>
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation>
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="outline" className="w-fit">Who We Are</Badge>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
                    Engineering Excellence
                    <span className="block text-primary">Meets Innovation</span>
                  </h2>
                </div>
                
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    <span className="text-foreground font-semibold">Edinite</span> is a digital engineering studio 
                    dedicated to converting bold ideas into research-backed designs, CAD models, and validated 
                    simulations — without the constraints of physical fabrication.
                  </p>
                  <p>
                    We believe innovation begins on the computer. Our mission is to help students, startups, 
                    and visionary innovators ensure their products achieve perfection in the virtual world 
                    before any investment in production.
                  </p>
                </div>

                <div className="pt-4">
                  <Link href="/services">
                    <Button size="lg" className="group" data-testid="button-explore-our-services">
                      Explore Our Services
                      <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={150}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-3xl blur-2xl opacity-50" />
                
                <GlassPanel className="relative p-8">
                  <div className="absolute top-0 left-0 w-20 h-20 bg-primary/10 rounded-br-3xl" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-purple-500/10 rounded-tl-3xl" />
                  
                  <div className="relative space-y-6">
                    <div className="p-5 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/10">
                      <p className="text-lg text-foreground font-medium italic">
                        "Perfect designs before fabrication"
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">— Our Philosophy</p>
                    </div>

                    <div className="grid gap-3">
                      {[
                        "Professional engineering standards",
                        "Industry-grade simulation tools",
                        "Comprehensive technical documentation",
                        "Client-focused collaboration"
                      ].map((item, index) => (
                        <div 
                          key={index} 
                          className="flex items-center gap-3 p-3 bg-background/50 rounded-lg group hover:bg-background transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassPanel>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 relative overflow-hidden">
        <HexagonGrid />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <ScrollAnimation>
              <Badge variant="outline" className="mb-4">Our Journey</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Vision & <span className="text-primary">Mission</span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Guiding principles that drive every decision and innovation at Edinite
              </p>
            </ScrollAnimation>
          </div>

          <div className="relative max-w-6xl mx-auto mb-20">
            <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
              <ScrollAnimation>
                <div className="relative group lg:w-[400px]" data-testid="card-vision">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-card/90 to-card/50 border border-primary/20 backdrop-blur-sm">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
                    
                    <div className="relative">
                      <div className="relative inline-flex mb-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-2xl blur-lg opacity-60 animate-pulse" style={{ animationDuration: '3s' }} />
                        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/40">
                          <Target className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                      </div>
                      
                      <h3 className="text-3xl font-heading font-bold text-foreground mb-4" data-testid="text-vision-title">
                        Our Vision
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-vision-description">
                        To become India's leading digital engineering studio, where ideas evolve into 
                        validated designs with industry-standard precision, setting new benchmarks for 
                        engineering excellence across the nation.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">Innovation</span>
                        <span className="px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium border border-purple-500/20">Excellence</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <div className="relative lg:mx-8 flex items-center justify-center">
                <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: '20s' }} />
                  <div className="absolute inset-2 rounded-full border-2 border-dashed border-purple-500/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                  <div className="absolute inset-4 rounded-full border border-primary/20" />
                  
                  <div className="absolute inset-0">
                    <div className="absolute left-0 top-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 animate-pulse" style={{ animationDuration: '2s', animationDelay: '0.5s', transform: 'translateX(-50%) translateY(-50%)' }} />
                    <div className="absolute right-0 top-1/2 w-3 h-3 bg-pink-500 rounded-full shadow-lg shadow-pink-500/50 animate-pulse" style={{ animationDuration: '2s', animationDelay: '1.5s', transform: 'translateX(50%) translateY(-50%)' }} />
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-primary/20 via-purple-500/20 to-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '4s' }} />
                    <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-primary via-purple-500 to-primary flex items-center justify-center shadow-2xl shadow-primary/50 overflow-hidden">
                      <img 
                        src={ediniteLogoCenter} 
                        alt="Edinite Logo" 
                        className="w-[60%] h-[60%] object-contain"
                        style={{ margin: 'auto' }}
                      />
                    </div>
                  </div>
                  
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 160">
                    <defs>
                      <linearGradient id="arcGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                        <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                        <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <circle cx="80" cy="80" r="75" fill="none" stroke="url(#arcGradient1)" strokeWidth="2" strokeDasharray="100 370" className="animate-spin origin-center" style={{ animationDuration: '8s' }} />
                  </svg>
                </div>
                
                <div className="hidden lg:block absolute left-full top-1/2 w-16 h-px">
                  <div className="w-full h-full bg-gradient-to-r from-purple-500 to-transparent" />
                  <div className="absolute top-0 left-0 w-4 h-px bg-purple-500 animate-pulse" style={{ animationDuration: '1s' }} />
                </div>
                <div className="hidden lg:block absolute right-full top-1/2 w-16 h-px">
                  <div className="w-full h-full bg-gradient-to-l from-primary to-transparent" />
                  <div className="absolute top-0 right-0 w-4 h-px bg-primary animate-pulse" style={{ animationDuration: '1s' }} />
                </div>
              </div>

              <ScrollAnimation delay={150}>
                <div className="relative group lg:w-[400px]" data-testid="card-mission">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-card/90 to-card/50 border border-purple-500/20 backdrop-blur-sm">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl" />
                    
                    <div className="relative">
                      <div className="relative inline-flex mb-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-cyan-400 rounded-2xl blur-lg opacity-60 animate-pulse" style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
                        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/40">
                          <Lightbulb className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '1s' }} />
                      </div>
                      
                      <h3 className="text-3xl font-heading font-bold text-foreground mb-4" data-testid="text-mission-title">
                        Our Mission
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-mission-description">
                        Make advanced design, simulation, and engineering R&D accessible to all — 
                        enabling students, startups, and innovators to build smarter, optimized 
                        solutions that shape the future of technology.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20">Accessible</span>
                        <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">Empowering</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            
            <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary/60 rounded-full animate-pulse hidden lg:block" style={{ animationDuration: '3s' }} />
            <div className="absolute top-3/4 left-20 w-1.5 h-1.5 bg-purple-500/60 rounded-full animate-pulse hidden lg:block" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
            <div className="absolute top-1/3 right-16 w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse hidden lg:block" style={{ animationDuration: '2s', animationDelay: '1s' }} />
            <div className="absolute bottom-1/4 right-8 w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse hidden lg:block" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }} />
          </div>

          <div className="relative py-12">
            <TimelineConnector />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:pt-16">
              {timeline.map((item, index) => {
                const timelineId = item.year.toLowerCase();
                return (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <div className="relative" data-testid={`card-timeline-${timelineId}`}>
                      <div className="text-center">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3" data-testid={`badge-timeline-${timelineId}`}>
                          {item.year}
                        </span>
                        <h4 className="text-lg font-bold text-foreground mb-2" data-testid={`text-timeline-title-${timelineId}`}>{item.title}</h4>
                        <p className="text-sm text-muted-foreground" data-testid={`text-timeline-desc-${timelineId}`}>{item.description}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                );
              })}
            </div>
          </div>

          <RoadmapSection values={values} />
        </div>
      </section>
      <section className="py-24 px-6 bg-gradient-to-b from-card/30 via-card/50 to-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 pt-8">
              <ScrollAnimation>
                <div className="inline-block">
                  <span className="text-primary font-medium border-l-2 border-primary pl-3">Our Expertise</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight mt-4">
                  What We <span className="text-primary">Specialize In</span>
                </h2>
              </ScrollAnimation>
              <ScrollAnimation delay={100}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  End-to-end digital engineering solutions tailored to your unique needs. From concept to implementation, we deliver cutting-edge technology and expert guidance.
                </p>
              </ScrollAnimation>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <ScrollAnimation delay={100}>
                <div className="group relative overflow-hidden rounded-2xl cursor-pointer h-56 border border-primary/30" data-testid="card-service-0">
                  <div className="absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 [backface-visibility:hidden]">
                      <div className="w-full h-full bg-cover bg-center rounded-2xl flex flex-col items-center justify-between p-6" style={{backgroundImage: 'linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(139, 92, 246, 0.4)), url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><pattern id="dots" x="20" y="20" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="3" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="400" height="300" fill="url(%23dots)"/><path d="M100,150 Q200,100 300,150" stroke="rgba(255,255,255,0.1)" stroke-width="2" fill="none"/></svg>\')'}}>
                        <div className="text-center">
                          <h3 className="text-2xl font-bold text-white mb-2">3D CAD Design</h3>
                        </div>
                        <Cpu className="w-12 h-12 text-white opacity-80" />
                      </div>
                    </div>
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex flex-col items-center justify-center p-6 gap-4">
                      <h4 className="text-white text-lg font-bold text-center">3D CAD Design</h4>
                      <p className="text-white text-sm text-center leading-relaxed">Professional CAD modeling and photorealistic visualization that brings your concepts to life with precision and detail.</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={200}>
                <div className="group relative overflow-hidden rounded-2xl cursor-pointer h-56 border border-primary/30" data-testid="card-service-1">
                  <div className="absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 [backface-visibility:hidden]">
                      <div className="w-full h-full bg-cover bg-center rounded-2xl flex flex-col items-center justify-between p-6" style={{backgroundImage: 'linear-gradient(135deg, rgba(34, 197, 94, 0.4), rgba(59, 130, 246, 0.4)), url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><pattern id="cubes" x="40" y="40" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M20,20 L40,10 L60,20 L40,30Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)"/></pattern></defs><rect width="400" height="300" fill="url(%23cubes)"/></svg>\')'}}>
                        <h3 className="text-xl font-bold text-white">CFD & FEA Simulation</h3>
                        <Layers className="w-10 h-10 text-white opacity-80" />
                      </div>
                    </div>
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex flex-col items-center justify-center p-6 gap-4">
                      <h4 className="text-white text-lg font-bold text-center">CFD & FEA Simulation</h4>
                      <p className="text-white text-sm text-center">Advanced structural and thermal analysis for optimization and validation of your designs</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={300}>
                <div className="group relative overflow-hidden rounded-2xl cursor-pointer h-56 border border-primary/30" data-testid="card-service-2">
                  <div className="absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 [backface-visibility:hidden]">
                      <div className="w-full h-full bg-cover bg-center rounded-2xl flex flex-col items-center justify-between p-6" style={{backgroundImage: 'linear-gradient(135deg, rgba(139, 92, 246, 0.5), rgba(59, 130, 246, 0.5)), url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><pattern id="books" x="50" y="50" width="100" height="100" patternUnits="userSpaceOnUse"><rect x="20" y="20" width="15" height="60" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)"/><rect x="40" y="25" width="15" height="60" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.2)"/><rect x="60" y="30" width="15" height="60" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)"/></pattern></defs><rect width="400" height="300" fill="url(%23books)"/></svg>\')'}}>
                        <h3 className="text-xl font-bold text-white">Electronics & PCB</h3>
                        <GraduationCap className="w-10 h-10 text-white opacity-80" />
                      </div>
                    </div>
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex flex-col items-center justify-center p-6 gap-4">
                      <h4 className="text-white text-lg font-bold text-center">Electronics & PCB</h4>
                      <p className="text-white text-sm text-center">Complete circuit design and PCB layout for electronics projects and prototypes</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={400}>
                <div className="group relative overflow-hidden rounded-2xl cursor-pointer h-56 border border-primary/30" data-testid="card-service-3">
                  <div className="absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 [backface-visibility:hidden]">
                      <div className="w-full h-full bg-cover bg-center rounded-2xl flex flex-col items-center justify-between p-6" style={{backgroundImage: 'linear-gradient(135deg, rgba(249, 115, 22, 0.4), rgba(139, 92, 246, 0.4)), url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><pattern id="sketches" x="40" y="40" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M30,30 Q40,20 50,30 T70,30" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/><circle cx="50" cy="50" r="8" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/></pattern></defs><rect width="400" height="300" fill="url(%23sketches)"/></svg>\')'}}>
                        <h3 className="text-xl font-bold text-white">Software Development</h3>
                        <Pen className="w-10 h-10 text-white opacity-80" />
                      </div>
                    </div>
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex flex-col items-center justify-center p-6 gap-4">
                      <h4 className="text-white text-lg font-bold text-center">Software Development</h4>
                      <p className="text-white text-sm text-center">Custom software development tailored to solve complex engineering problems and streamline workflows</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <ScrollAnimation>
              <Badge variant="outline" className="mb-4">Our Team</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Meet Our <span className="text-primary">Leadership</span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Visionary experts driving innovation in digital engineering
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {leadership.map((leader, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="group relative" data-testid={`card-leader-${index}`}>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                  <GlassPanel className="relative p-8 hover:border-primary/40 transition-colors overflow-hidden">
                    <div className="flex flex-col-reverse md:flex-row items-stretch gap-8">
                      <div className="flex-1 space-y-4 py-4">
                        <div className="space-y-3">
                          <h3 className="text-5xl font-heading font-bold text-foreground leading-tight" data-testid={`text-leader-name-${index}`}>
                            {leader.name}
                          </h3>
                          <p className="text-primary font-semibold text-xl" data-testid={`text-leader-position-${index}`}>
                            {leader.position}
                          </p>
                        </div>
                        
                        <p className="text-lg text-muted-foreground leading-relaxed" data-testid={`text-leader-description-${index}`}>
                          {leader.description}
                        </p>

                        {(leader.linkedin || leader.instagram || leader.email) && (
                          <div className="flex items-center gap-3 pt-2">
                            {leader.email && (
                              <a
                                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${leader.email}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                                data-testid={`link-leader-email-${index}`}
                                aria-label="Email"
                              >
                                <Mail className="w-5 h-5 text-primary" />
                              </a>
                            )}
                            {leader.linkedin && (
                              <a
                                href={leader.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                                data-testid={`link-leader-linkedin-${index}`}
                                aria-label="LinkedIn"
                              >
                                <SiLinkedin className="w-5 h-5 text-primary" />
                              </a>
                            )}
                            {leader.instagram && (
                              <a
                                href={leader.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                                data-testid={`link-leader-instagram-${index}`}
                                aria-label="Instagram"
                              >
                                <SiInstagram className="w-5 h-5 text-primary" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="w-full md:w-56 h-48 md:h-56 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-600/20 border border-primary/30 flex items-center justify-center flex-shrink-0 overflow-hidden" data-testid={`photo-column-leader-${index}`}>
                        {leader.image ? (
                          <img 
                            src={leader.image} 
                            alt={leader.name}
                            className="w-full h-full object-cover object-top"
                            style={{ objectPosition: '50% 15%' }}
                            data-testid={`img-leader-${index}`}
                          />
                        ) : (
                          <div className="text-center">
                            <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white">
                              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                              </svg>
                            </div>
                            <p className="text-sm text-muted-foreground mt-4">Professional Photo</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </GlassPanel>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-6 relative overflow-hidden" data-testid="section-cta">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollAnimation>
            <GlassPanel className="p-12 md:p-16 text-center relative overflow-visible" data-testid="card-cta">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 mt-4" data-testid="text-cta-title">
                Ready to <span className="text-primary">Collaborate?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed" data-testid="text-cta-description">
                Transform your engineering ideas into reality with our expert team of digital 
                engineers and innovators. Let's build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="group" data-testid="button-start-project">
                    Start Your Project
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a 
                  href="mailto:edinite.official@gmail.com" 
                  className="inline-flex items-center justify-center"
                >
                  <Button size="lg" variant="outline" data-testid="link-email-button">
                    Get In Touch
                  </Button>
                </a>
              </div>
            </GlassPanel>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
