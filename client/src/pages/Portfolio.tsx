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

// Additional Assets
import isroImg from "@assets/NX_Cad_ISRO_Design_1766991335735.png";
import sihImg from "@assets/Rendered_Image_of_SIH_Project_1766991362475.png";
import gyroImg from "@assets/Gyro_Transparent_View_1766991378999.png";
import actuatorImg from "@assets/44ebb6c6-a51f-482e-8882-9ab73c55d926_1766991442800.jpg";
import sihRailImg from "@assets/Design_of_Railway_Crack_Detection_System_1766992391804.png";
import sihFabricationImg from "@assets/Fabrication_of_SIH_Project_1766992391805.jpg";
import sihRenderImg from "@assets/Rendered_Image_of_SIH_Project_1766992391805.png";
import sihRoughImg from "@assets/SIH_ICF_Bogie_Original_Rough_Design__1766992391806.jpg";

// ISRO Rover Assets
import roverFabricationImg from "@assets/Fabrication_Image_1766992786226.jpg";
import roverIsometricImg from "@assets/Isometric_View_1766992786226.png";
import roverNxDesignImg from "@assets/NX_Cad_ISRO_Design_1766992786227.png";
import roverTopViewImg from "@assets/Top_View_1766992786228.jpg";

// Universal Fixture Assets
import fixtureFrontImg from "@assets/Front_View_1766993306289.png";
import fixtureIsometricImg from "@assets/Isometric_View_1766993306291.png";
import fixturePocImg from "@assets/POC_1766993306291.png";

// Garbage Collector Assets
import garbageCollectorImg from "@assets/Isometric_View_1766993949594.png";

// Wearable Sensor Assets
import wearableBlueprintImg from "@assets/Blue_Print_of_Concept_1766994866347.png";
import wearableDisassembledImg from "@assets/Disassembled_Position_Image_1766994859109.png";
import wearableIsometricImg from "@assets/Isometric_View_1766994859110.png";
import wearableTorsoImg from "@assets/Product_with_Torso_Body_1766994859111.png";
import wearableTransparentImg from "@assets/Transparent_View_of_Product_1766994859111.png";

// Cargo Cycle Assets
import cargoCycleFrontImg from "@assets/Front_View_1766995252259.png";
import cargoCycleIsometricImg from "@assets/Isometric_View_1766995252260.png";

// Patient Shifter Assets
import patientShifterDisassembleImg from "@assets/Disassemble_View_1766995721757.png";
import patientShifterIsometricImg from "@assets/Isometric_View_1766995721758.png";
import patientShifterRenderImg from "@assets/Render_Image_of_Project_1766995721759.jpg";

// Water Tank Cleaner Assets
import waterTankIsometricImg from "@assets/Isometric_View_1766996502502.png";
import waterTankSectionedImg from "@assets/Sectioned_View_1766996502503.png";
import waterTankGyroImg from "@assets/Gyro_Mechanism_1766996502501.png";
import waterTankGyroTransparentImg from "@assets/Gyro_Transparent_View_1766996502502.png";

// Camera Slider Assets
import cameraSliderImg from "@assets/Camera_Slider_1766996697363.jpg";

// Seeding Bot Assets
import seedingBotIsometricImg from "@assets/Isometric_View_1766997034772.png";
import seedingBotRearImg from "@assets/Rear_View_1766997034773.png";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Reduction of Drag Coefficient in Electric Car Using CFD Analysis",
      category: "Automotive Aerodynamics",
      description: "Aerodynamic drag plays a critical role in determining the range, efficiency, and performance of electric vehicles. This project focuses on the reduction of drag coefficient (Cd) through systematic aerodynamic optimization using Computational Fluid Dynamics (CFD).",
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
    {
      title: "AI Based Acoustic Wave Monitoring System of Rail Defects",
      category: "AI/Software",
      description: "This Smart India Hackathon (SIH) project proposes an AI-based acoustic wave monitoring system capable of detecting rail defects by analyzing acoustic signals generated during train movement, enabling predictive and condition-based maintenance. Focused on early detection of structural defects such as cracks, fractures, and wear.",
      image: [sihRenderImg, sihRailImg, sihFabricationImg, sihRoughImg],
      tools: ["AI/ML", "Acoustic Sensors", "Python", "Signal Processing"],
      metrics: [
        { label: "Project Type", value: "SIH Innovation" },
        { label: "Category", value: "Infrastructure" }
      ],
      details: [
        "Real-time acoustic signal acquisition during train movement",
        "Deep learning models for defect classification and localization",
        "Predictive maintenance scheduling based on defect severity",
        "Integration with railway monitoring infrastructure"
      ]
    },
    {
      title: "ISRO ROVERT ROVER (IROC-U 2024)",
      category: "Space Robotics",
      description: "Planetary exploration rover developed for the ISRO Robotics Challenge (IROC-U 2024). Features a robust suspension system and lightweight rigid frame optimized for extreme terrain navigation.",
      image: [roverIsometricImg, roverNxDesignImg, roverFabricationImg, roverTopViewImg],
      tools: ["NX CAD", "Rapid Prototyping", "Python", "ROS"],
      metrics: [
        { label: "Competition", value: "IROC-U 2024" },
        { label: "Organization", value: "ISRO" }
      ],
      details: [
        "Lightweight rigid chassis optimized for off-road mobility",
        "Rocker-bogie suspension for handling uneven terrain",
        "Integration of multi-axis robotic arm and sensor suite",
        "Structural analysis under simulated planetary gravity"
      ]
    },
    {
      title: "Universal Fixture of Steering System",
      category: "Mechanical Design",
      description: "Industrial solution designed to eliminate the need for multiple dedicated fixtures in steering system assembly. This single-platform platform accommodates various steering configurations, significantly reducing changeover time and tooling costs.",
      image: [fixtureIsometricImg, fixtureFrontImg, fixturePocImg],
      tools: ["SolidWorks", "Fixture Design", "Industrial Problem-Solving"],
      metrics: [
        { label: "Changeover Time", value: "-65%" },
        { label: "Tooling Cost", value: "-40%" }
      ],
      details: [
        "Single fixture platform for multiple steering variants",
        "Adjustable support plates for varying component lengths",
        "Highly repeatable positioning for manufacturing precision",
        "Modular design for easy integration into existing assembly lines"
      ]
    },
    {
      title: "Water Body Garbage Collector",
      category: "Sustainable Design",
      description: "Award-winning sustainable engineering solution for removing floating waste from urban water bodies. Designed for India Design Week 2024, this system enables autonomous garbage collection using low-energy principles.",
      image: [garbageCollectorImg],
      tools: ["Product Design", "Concept Engineering", "Sustainability Analysis"],
      metrics: [
        { label: "India Design Week", value: "Best Design" },
        { label: "Award Year", value: "2024" }
      ],
      details: [
        "Autonomous floating waste collection system",
        "Eco-friendly, low-energy design for long-term deployment",
        "Scalable architecture for various water body sizes",
        "Passive filtration mechanism for micro-plastic removal"
      ]
    },
    {
      title: "Wearable AI Fall Detection System",
      category: "AI/Software",
      description: "AI-powered wearable device designed for the elderly to prevent falls through real-time monitoring and predictive alerts. Integrates high-precision sensors with deep learning models to enhance user safety and independence.",
      image: [wearableBlueprintImg, wearableTransparentImg, wearableTorsoImg, wearableDisassembledImg, wearableIsometricImg],
      tools: ["AI/ML", "Wearable Tech", "Python", "Mechanical Design"],
      metrics: [
        { label: "Alert Accuracy", value: "96.4%" },
        { label: "Response Time", value: "<200ms" }
      ],
      details: [
        "Real-time fall risk assessment using multi-sensor fusion",
        "Deep learning model for gesture and posture classification",
        "Compact mechanical design for long-term comfort",
        "Cloud-integrated monitoring for healthcare providers"
      ]
    },
    {
      title: "Cargo Cycle Design for Urban Logistics",
      category: "Sustainable Mobility",
      description: "Concept design of a low-cost, zero-emission cargo cycle intended for last-mile delivery. Focused on load stability, rider ergonomics, and urban usability to reduce dependence on fuel-based delivery vehicles.",
      image: [cargoCycleIsometricImg, cargoCycleFrontImg],
      tools: ["Fusion 360", "Mechanical Design", "Sustainable Mobility"],
      metrics: [
        { label: "Emission Reduction", value: "100%" },
        { label: "Load Capacity", value: "80kg" }
      ],
      details: [
        "Low-center-of-gravity frame design for cargo stability",
        "Ergonomic rider positioning for long-distance urban use",
        "Modular cargo box attachment system",
        "Structural layout optimized for urban terrain navigation"
      ]
    },
    {
      title: "Patient Shifter Scoop",
      category: "Assistive Engineering",
      description: "Assistive medical device designed for safe and comfortable patient transfer between beds, stretchers, or wheelchairs. Minimizes physical strain on caregivers through an ergonomic mechanical scoop mechanism.",
      image: [patientShifterRenderImg, patientShifterIsometricImg, patientShifterDisassembleImg],
      tools: ["SolidWorks", "Product Design", "Assistive Engineering"],
      metrics: [
        { label: "Transfer Safety", value: "High" },
        { label: "Caregiver Strain", value: "-50%" }
      ],
      details: [
        "Ergonomic scoop design for minimal patient discomfort",
        "Lightweight yet high-strength structural frame",
        "Easy-to-clean surfaces for hospital hygiene standards",
        "Simple manual operation for emergency reliability"
      ]
    },
    {
      title: "Smart IOT Integrated Water Tank Cleaner",
      category: "Mechanical Automation",
      description: "Automatic water tank cleaning system featuring a gyro-based 360° rotation mechanism. Designed to improve hygiene and reduce manual labor in domestic and industrial water storage.",
      image: [waterTankSectionedImg, waterTankIsometricImg, waterTankGyroImg, waterTankGyroTransparentImg],
      tools: ["SolidWorks", "Mechanical Automation", "IOT Integration"],
      metrics: [
        { label: "Cleaning Coverage", value: "360°" },
        { label: "Labor Reduction", value: "90%" }
      ],
      details: [
        "Gyro-inspired rotating unit for full surface coverage",
        "Automated cleaning cycle for consistent hygiene",
        "Integrated IOT monitoring for tank status and alerts",
        "Scalable design for various tank sizes and shapes"
      ]
    },
    {
      title: "Smart Sliding Camera with IOT",
      category: "Robotics & IoT",
      description: "Precise and automated camera movement system integrated with Arduino. Designed to enhance professional cinematography through programmable sliding motions and IOT-based remote control.",
      image: [cameraSliderImg],
      tools: ["Arduino", "Mechanical Design", "IOT Integration"],
      metrics: [
        { label: "Precision", value: "Sub-mm" },
        { label: "Movement", value: "Smooth" }
      ],
      details: [
        "Programmable sliding speed and distance via Arduino",
        "Integrated IOT control for remote operation",
        "Smooth, vibration-free movement for high-quality cinematography",
        "Lightweight and portable aluminum extrusion frame"
      ]
    },
    {
      title: "Sow Seeding Bot Design & Fabrication",
      category: "Agricultural Robotics",
      description: "Automated mobile agricultural robot designed for precise seed sowing. Features a robust mechanical mechanism for consistent seed spacing and efficient modular fabrication for small-scale farming.",
      image: [seedingBotIsometricImg, seedingBotRearImg],
      tools: ["SolidWorks", "Robotics", "Mechanical Design"],
      metrics: [
        { label: "Sowing Accuracy", value: "95%" },
        { label: "Labor Efficiency", value: "+70%" }
      ],
      details: [
        "Modular mechanical system for diverse seed types",
        "Autonomous mobile platform for field navigation",
        "Precisely timed seed release mechanism",
        "Robust design for real-field durability"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <ScrollAnimation>
              <h1 className="text-5xl font-heading font-bold text-foreground mb-6">
                Our <span className="text-primary">Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Showcasing our precision engineering and simulation expertise across various industries.
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
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
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          project={projects[selectedProject]}
        />
      )}
    </div>
  );
}
