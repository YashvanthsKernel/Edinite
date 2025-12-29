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
