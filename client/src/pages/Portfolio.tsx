import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import ScrollAnimation from "@/components/ScrollAnimation";
import cadImage from '@assets/generated_images/CAD_design_service_background_19e6e5df.png';
import feaImage from '@assets/generated_images/FEA_CFD_simulation_background_275ed2b3.png';
import printingImage from '@assets/generated_images/3D_printing_service_background_5fcbe0f4.png';
import pcbImage from '@assets/generated_images/PCB_design_service_background_f2880d46.png';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Automotive Suspension Design",
      category: "Mechanical Design",
      description: "Complete suspension system design and optimization for high-performance vehicle applications with advanced kinematics analysis.",
      image: cadImage,
      tools: ["SolidWorks", "ANSYS", "MATLAB"],
      details: [
        "Detailed 3D CAD modeling of suspension components",
        "Finite Element Analysis for stress optimization",
        "Dynamic simulation and kinematics analysis",
        "Manufacturing drawings and BOM generation"
      ]
    },
    {
      title: "Heat Exchanger CFD Analysis",
      category: "Thermal Engineering",
      description: "Computational fluid dynamics study for optimizing heat transfer efficiency in industrial heat exchangers.",
      image: feaImage,
      tools: ["ANSYS Fluent", "SolidWorks"],
      details: [
        "3D flow simulation and thermal analysis",
        "Pressure drop optimization",
        "Heat transfer coefficient calculations",
        "Design iteration and performance comparison"
      ]
    },
    {
      title: "Industrial Robot Gripper",
      category: "Rapid Printing",
      description: "Custom end-effector design with rapid prototyping for industrial automation applications.",
      image: printingImage,
      tools: ["Fusion 360", "Ultimaker Cura"],
      details: [
        "Lightweight topology-optimized design",
        "FDM 3D printing with carbon fiber reinforcement",
        "Functional testing and iteration",
        "Integration with robotic arm system"
      ]
    },
    {
      title: "IoT Sensor PCB Development",
      category: "Electronics",
      description: "Multi-layer PCB design for wireless environmental monitoring system with low power consumption.",
      image: pcbImage,
      tools: ["Altium Designer", "MATLAB"],
      details: [
        "4-layer PCB layout with impedance control",
        "Signal integrity and EMI analysis",
        "Component selection and BOM optimization",
        "Firmware integration support"
      ]
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-heading font-bold text-foreground mb-6">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our engineering projects across mechanical design, simulation, and manufacturing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimation key={project.title} delay={index * 100}>
                <ProjectCard
                  {...project}
                  onClick={() => setSelectedProject(index)}
                />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {selectedProject !== null && (
        <ProjectModal
          isOpen={true}
          onClose={() => setSelectedProject(null)}
          project={projects[selectedProject]}
        />
      )}
    </div>
  );
}
