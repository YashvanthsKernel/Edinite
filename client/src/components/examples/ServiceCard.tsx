import ServiceCard from '../ServiceCard';
import cadImage from '@assets/generated_images/CAD_design_service_background_19e6e5df.png';

export default function ServiceCardExample() {
  return (
    <div className="p-8 bg-background">
      <div className="max-w-sm">
        <ServiceCard
          title="3D CAD Design"
          description="Professional mechanical design services using industry-leading CAD software"
          href="/services/mechanical-cad"
          backgroundImage={cadImage}
        />
      </div>
    </div>
  );
}
