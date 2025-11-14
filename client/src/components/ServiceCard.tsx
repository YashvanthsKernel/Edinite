import { Link } from "wouter";
import { LucideIcon } from "lucide-react";
import GlassPanel from "./GlassPanel";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  return (
    <Link href={href}>
      <a data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <GlassPanel className="p-8 hover-elevate transition-all duration-300 hover:scale-105">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center mb-6">
            <Icon size={32} className="text-white" />
          </div>
          <h3 className="text-xl font-subheading font-semibold text-foreground mb-3">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </GlassPanel>
      </a>
    </Link>
  );
}
