import ServiceCard from '../ServiceCard';
import { Box } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="p-8 bg-background">
      <div className="max-w-sm">
        <ServiceCard
          icon={Box}
          title="3D CAD Design"
          description="Professional mechanical design services using industry-leading CAD software"
          href="/services/cad"
        />
      </div>
    </div>
  );
}
