import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import ScrollAnimation from "@/components/ScrollAnimation";
import simulinkImg from "@assets/Simulink_Result_of_CFD_1766989433000.png";
import velocityImg from "@assets/Velocity_Magnitude_1766989433001.png";
import fabricationImg from "@assets/Wind_Tunnel_Testing_Fabrication_Design_1766989433003.png";
import dragCoeffImg from "@assets/Drag_Co-efficient_of_Our_Car_Design_1766989447148.png";
import pathflowImg from "@assets/Pathflow_Simulation_in_Ansys_CFD_Fluent_1766989447149.png";
import pressureImg from "@assets/Pressure_Magnitude_1766989447150.png";
import blueprintImg from "@assets/Aether_Blueprint_1766989469508.png";
import aetherCarImg from "@assets/Aether_GT-26_1766989469509.jpg";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Reduction of Drag Coefficient in Electric Car Using CFD Analysis",
      category: "Automotive Aerodynamics",
      description: `Aerodynamic drag plays a critical role in determining the range, efficiency, and performance of electric vehicles. This project focuses on the reduction of drag coefficient (Cd) through systematic aerodynamic optimization using Computational Fluid Dynamics (CFD).

Proud to showcase AETHER GT -26 = An Aerodynamically Optimized Electric Sedan, designed in Fusion 360 and rendered in Blender for a realistic visualization.

Objective: Reduction of drag coefficient (Cd) using advanced Computational Fluid Dynamics (CFD) analysis to enhance EV efficiency.

Design Approach:
🔸 Optimized skateboard chassis for weight distribution
🔸 Streamlined body contours for minimal aerodynamic drag
🔸 CFD-driven airflow optimisation to enhance performance`,
      image: [aetherCarImg, blueprintImg, velocityImg, pathflowImg, pressureImg, dragCoeffImg, simulinkImg, fabricationImg],
      tools: ["ANSYS (CFD)", "Fusion 360", "Blender", "MATLAB", "Simulink"],
      metrics: [
        { label: "Drag Coefficient (Cd)", value: "0.243961" },
        { label: "Pressure Coefficient (Cp)", value: "0.21964" },
        { label: "Design Tools", value: "Fusion 360" }
      ],
      details: [
        "Aerodynamically Optimized Electric Sedan Design",
        "Systematic reduction of Cd through iterative CFD loops",
        "Optimized skateboard chassis for ideal weight distribution",
        "High-fidelity rendering in Blender for visualization",
        "Simulink results for overall vehicle system dynamics"
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

          <div className="grid grid-cols-1 gap-12">
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
