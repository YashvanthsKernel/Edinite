import image1 from "@assets/3D-Printing-Services-3_1765612582309.jpg";
import image2 from "@assets/3d-printing-services-miami-01b_(1)_1765612582310.jpg";
import image3 from "@assets/1000_F_539188436_WYHqq4PKFjGoDlZfFKSoaeabLQMfcYHd_1765612582311.jpg";
import image4 from "@assets/model-based-design-wp-landing-page-thumbnail_1765612582312.jpg";
import image5 from "@assets/pcb-design-basics-zuken-us_1765612582318.webp";
import image6 from "@assets/Rapid-Prototyping-printing_1765612582320.jpg";
import image7 from "@assets/Untitled-design-54-1-1-1024x683_1765612582321.jpg";

const galleryImages = [
  { id: 1, src: image1, alt: "3D Printing Services" },
  { id: 2, src: image2, alt: "3D Printing Process" },
  { id: 3, src: image3, alt: "CAD Design & Modeling" },
  { id: 4, src: image4, alt: "Model-Based Design" },
  { id: 5, src: image5, alt: "PCB Design" },
  { id: 6, src: image6, alt: "Rapid Prototyping" },
  { id: 7, src: image7, alt: "PCB Manufacturing" },
];

export default function TechnologyCarousel() {
  const duplicatedImages = [...galleryImages, ...galleryImages];

  const renderCarousel = (animationClass: string) => (
    <div 
      className={`flex gap-2 ${animationClass}`}
      style={{ width: 'fit-content' }}
    >
      {duplicatedImages.map((image, index) => (
        <div
          key={`${image.id}-${index}`}
          className="group relative flex-shrink-0"
          data-testid={`gallery-image-${image.id}-${index}`}
        >
          <div className="relative w-[260px] h-[200px] rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105">
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-2">
      <div className="relative overflow-hidden py-2">
        {renderCarousel('animate-marquee')}
      </div>

      <div className="relative overflow-hidden py-2">
        {renderCarousel('animate-marquee-reverse')}
      </div>
    </div>
  );
}
