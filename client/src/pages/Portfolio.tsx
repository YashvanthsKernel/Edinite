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
import blueprintNew from "@assets/Aether_Blueprint_1766991280411.png";
import carNew from "@assets/Aether_GT-26_1766991348103.jpg";
import sliderImg from "@assets/Camera_Slider_1766991398844.jpg";
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
      title: "ISRO Satellite Component Design & Structural Analysis",
      category: "Mechanical Design",
      description: "Precision engineering of high-strength aerospace components designed for satellite deployment systems. Focused on weight reduction and structural integrity under extreme conditions.",
      image: [isroImg, blueprintNew],
      tools: ["NX CAD", "ANSYS", "HyperMesh"],
      metrics: [
        { label: "Weight Reduction", value: "18%" },
        { label: "Factor of Safety", value: "2.5" }
      ],
      details: [
        "Topology optimization for mass reduction",
        "Modal analysis for vibration control during launch",
        "Thermal stress assessment in vacuum environments",
        "Precision machining tolerance specifications"
      ]
    },
    {
      title: "Automated Precision Camera Slider for Cinematic Motion",
      category: "AI/Software",
      description: "A multi-axis motion control system integrating stepper motors and custom firmware for perfectly repeatable camera movements.",
      image: [sliderImg, actuatorImg],
      tools: ["Arduino", "Python", "Fusion 360", "C++"],
      metrics: [
        { label: "Precision", value: "0.01mm" },
        { label: "Payload Capacity", value: "15kg" }
      ],
      details: [
        "Real-time PID control for smooth acceleration",
        "Custom PCB design for motor drivers",
        "Wireless control via mobile application",
        "Carbon fiber rail integration for lightweight stability"
      ]
    },
    {
      title: "High-Stability Gyroscopic Stabilization System",
      category: "Thermal Engineering",
      description: "Advanced gyroscopic system designed for stabilizing maritime observation equipment. Includes active thermal management for high-speed bearings.",
      image: [gyroImg, sihImg],
      tools: ["SolidWorks", "ANSYS Fluent", "MATLAB"],
      metrics: [
        { label: "Max RPM", value: "12,000" },
        { label: "Angular Stability", value: "0.001°" }
      ],
      details: [
        "Active cooling system for bearing temperature control",
        "Dynamic balancing for vibration-free operation",
        "High-precision encoder feedback integration",
        "Material selection for thermal expansion compensation"
      ]
    },
    {
      title: "SIH Smart Industrial Cart Automation",
      category: "Mechanical Design",
      description: "Award-winning industrial automation solution for smart warehouses. Features omni-directional movement and automated load sensing.",
      image: [sihImg, actuatorImg],
      tools: ["Fusion 360", "ROS", "OpenCV"],
      metrics: [
        { label: "Autonomy Level", value: "Level 4" },
        { label: "Battery Life", value: "12 Hours" }
      ],
      details: [
        "Lidar-based SLAM for mapping and navigation",
        "Obstacle avoidance using computer vision",
        "Scalable fleet management software",
        "Mechanum wheel assembly for zero-turn radius"
      ]
    },
    {
      title: "Heavy-Duty Precision Linear Actuator System",
      category: "Mechanical Design",
      description: "Custom-built linear actuation system for large-scale industrial presses. Engineered for million-cycle durability and sub-micron repeatability.",
      image: [actuatorImg, sliderImg],
      tools: ["SolidWorks", "FEA", "Simulink"],
      metrics: [
        { label: "Peak Force", value: "50kN" },
        { label: "Repeatability", value: "±2μm" }
      ],
      details: [
        "Ball screw selection for high efficiency",
        "Stress distribution analysis in housing",
        "Wear-resistant coating technology",
        "Integrated force sensing for process monitoring"
      ]
    },
    {
      title: "Thermal Management Solution for Power Electronics",
      category: "Thermal Engineering",
      description: "Optimization of heat sinks and airflow patterns for high-power EV inverters to ensure reliability during peak loads.",
      image: [pressureImg, velocityImg],
      tools: ["ANSYS Icepack", "Star-CCM+", "FloTHERM"],
      metrics: [
        { label: "Temp Reduction", value: "15°C" },
        { label: "Power Density", value: "2.5 kW/L" }
      ],
      details: [
        "Liquid-cooled cold plate optimization",
        "Phase-change material integration for peak buffering",
        "CFD-driven fin geometry design",
        "Experimental validation with thermal imaging"
      ]
    },
    {
      title: "Aether GT-26 Chassis Structural Optimization",
      category: "Automotive Aerodynamics",
      description: "In-depth FEA analysis of the Aether GT-26 chassis to achieve maximum torsional stiffness with minimal weight.",
      image: [carNew, blueprintImg],
      tools: ["OptiStruct", "Altair Inspire", "Abaqus"],
      metrics: [
        { label: "Torsional Stiffness", value: "45 kNm/deg" },
        { label: "Chassis Weight", value: "185 kg" }
      ],
      details: [
        "Multi-material optimization (Steel/Aluminum/CFRP)",
        "Impact analysis and crashworthiness simulation",
        "Suspension hardpoint optimization",
        "Weight distribution for 50/50 balance"
      ]
    },
    {
      title: "PCB Design for High-Frequency Signal Processing",
      category: "Electrical",
      description: "Complex 12-layer PCB design for high-speed data acquisition systems used in industrial sensing.",
      image: [fabricationImg, sihImg],
      tools: ["Altium Designer", "Allegro", "HyperLynx"],
      metrics: [
        { label: "Signal Integrity", value: "98.5%" },
        { label: "Layer Count", value: "12 Layers" }
      ],
      details: [
        "Impedance matching for high-speed differential pairs",
        "EMI/EMC shielding design techniques",
        "Rigid-flex PCB integration for compact housing",
        "Thermal via arrays for power dissipation"
      ]
    },
    {
      title: "Smart Warehouse Path Optimization Engine",
      category: "AI/Software",
      description: "Custom AI algorithm for optimizing pathfinding in large-scale logistics centers with hundreds of active AGVs.",
      image: [sliderImg, sihImg],
      tools: ["Python", "TensorFlow", "C++"],
      metrics: [
        { label: "Efficiency Gain", value: "32%" },
        { label: "Compute Latency", value: "<5ms" }
      ],
      details: [
        "Deep reinforcement learning for collision avoidance",
        "Real-time rerouting based on traffic density",
        "Integration with existing ERP systems",
        "Simulation-first development approach"
      ]
    },
    {
      title: "Battery Thermal Runaway Prevention System",
      category: "Thermal Engineering",
      description: "Advanced simulation and hardware design to prevent thermal propagation in multi-cell battery packs for electric aircraft.",
      image: [pressureImg, sihImg],
      tools: ["COMSOL Multiphysics", "MATLAB"],
      metrics: [
        { label: "Propagation Delay", value: "Infinity" },
        { label: "Cooling Power", value: "450W" }
      ],
      details: [
        "Aerogel insulation layer optimization",
        "Active fire suppression triggers",
        "Multi-sensor fusion for early detection",
        "Weight-optimized fireproofing materials"
      ]
    },
    {
      title: "Electric Powertrain System Integration",
      category: "Electrical",
      description: "Full-system design of an electric powertrain for high-performance motorcycles, including battery pack and BMS.",
      image: [sihImg, fabricationImg],
      tools: ["MATLAB", "Simulink", "Altium"],
      metrics: [
        { label: "System Voltage", value: "400V" },
        { label: "Peak Power", value: "120kW" }
      ],
      details: [
        "Custom BMS with cell balancing and state tracking",
        "CAN bus communication architecture",
        "Drivetrain efficiency optimization",
        "High-voltage safety disconnect systems"
      ]
    },
    {
      title: "Precision Mold Design for Injection Molding",
      category: "Mechanical Design",
      description: "Engineering of complex multi-cavity injection molds for high-precision medical components.",
      image: [gyroImg, sihImg],
      tools: ["NX Mold Design", "Moldflow"],
      metrics: [
        { label: "Cycle Time", value: "8s" },
        { label: "Cavity Count", value: "32" }
      ],
      details: [
        "Cooling channel design using conformal cooling",
        "Gating system optimization for minimal waste",
        "Material flow analysis to prevent defects",
        "Durability testing for million-shot life"
      ]
    },
    {
      title: "Aerodynamic Optimization of Wind Turbine Blades",
      category: "Automotive Aerodynamics",
      description: "CFD analysis and redesign of wind turbine blade profiles to increase power extraction in low-wind conditions.",
      image: [pathflowImg, velocityImg],
      tools: ["OpenFOAM", "ANSYS CFX"],
      metrics: [
        { label: "Power Increase", value: "14%" },
        { label: "Noise Reduction", value: "8dB" }
      ],
      details: [
        "Bio-inspired tubercle leading edge design",
        "Tip vortex mitigation techniques",
        "Composite layup optimization for aeroelasticity",
        "Field-testing validation with LIDAR"
      ]
    }
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
              <ScrollAnimation key={project.title} delay={index * 50}>
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
          project={projects[selectedProject] as any}
        />
      )}
    </div>
  );
}
