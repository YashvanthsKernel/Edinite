import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  backgroundImage: string;
  featured?: boolean;
}

export default function ServiceCard({ title, description, href, backgroundImage, featured = false }: ServiceCardProps) {
  return (
    <Link href={href}>
      <div 
        className={`cursor-pointer group relative ${featured ? 'md:col-span-2 md:row-span-2' : ''}`} 
        data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />
        
        <div className="absolute -inset-px bg-gradient-to-r from-primary/50 via-purple-500/50 to-primary/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
        
        <div 
          className={`relative ${featured ? 'h-[500px] md:h-full min-h-[400px]' : 'h-80'} rounded-2xl overflow-hidden border border-primary/30 transition-all duration-500 group-hover:border-transparent`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
          
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-[200%] transition-all duration-1000 ease-out" />
          </div>
          
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
            <ArrowRight className="w-5 h-5 text-white" />
          </div>
          
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full group-hover:w-12 transition-all duration-300" />
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDuration: '2s' }} />
              </div>
              <h3 className={`${featured ? 'text-3xl' : 'text-xl'} font-heading font-bold text-white mb-3 drop-shadow-lg`}>
                {title}
              </h3>
              <p className={`text-white/90 ${featured ? 'text-base' : 'text-sm'} leading-relaxed drop-shadow-md max-w-md`}>
                {description}
              </p>
              
              <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                <span className="text-primary text-sm font-medium">Explore Service</span>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
      </div>
    </Link>
  );
}
