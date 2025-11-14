import { useState } from 'react';
import ProjectModal from '../ProjectModal';
import { Button } from '@/components/ui/button';
import heroImage from '@assets/generated_images/Homepage_hero_engineering_montage_d31f5047.png';

export default function ProjectModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  const project = {
    title: "Automotive Suspension Design",
    category: "Mechanical Design",
    description: "Complete suspension system design and optimization for high-performance vehicle applications.",
    image: heroImage,
    tools: ["SolidWorks", "ANSYS", "MATLAB"],
    details: [
      "Detailed 3D CAD modeling of suspension components",
      "Finite Element Analysis for stress optimization",
      "Dynamic simulation and kinematics analysis",
      "Manufacturing drawings and BOM generation"
    ]
  };

  return (
    <div className="p-8 bg-background">
      <Button onClick={() => setIsOpen(true)} data-testid="button-open-modal">
        Open Project
      </Button>
      <ProjectModal 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        project={project}
      />
    </div>
  );
}
