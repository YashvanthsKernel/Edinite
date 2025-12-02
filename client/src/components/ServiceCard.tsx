import { Link } from "wouter";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  backgroundImage: string;
}

export default function ServiceCard({ icon: Icon, title, description, href, backgroundImage }: ServiceCardProps) {
  return (
    <Link href={href}>
      <div className="cursor-pointer group" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <div 
          className="relative h-72 rounded-2xl overflow-hidden border border-primary/20 shadow-[0_8px_32px_0_rgba(114,38,255,0.2)] transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_12px_40px_0_rgba(114,38,255,0.3)]"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div className="w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <Icon size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-subheading font-bold text-white mb-2 drop-shadow-lg">{title}</h3>
            <p className="text-white/90 text-sm leading-relaxed drop-shadow-md">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
