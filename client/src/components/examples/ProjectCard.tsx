import ProjectCard from '../ProjectCard';
import heroImage from '@assets/generated_images/Homepage_hero_engineering_montage_d31f5047.png';

export default function ProjectCardExample() {
  return (
    <div className="p-8 bg-background">
      <div className="max-w-md">
        <ProjectCard
          title="Automotive Suspension Design"
          category="Mechanical Design"
          image={heroImage}
          tools={["SolidWorks", "ANSYS", "MATLAB"]}
          onClick={() => console.log('Project clicked')}
        />
      </div>
    </div>
  );
}
