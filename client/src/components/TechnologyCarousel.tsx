import image1 from "@assets/image_1765168512747.png";
import image2 from "@assets/image_1765168528456.png";
import image3 from "@assets/image_1765168738660.png";
import image4 from "@assets/image_1765168901726.png";
import image5 from "@assets/image_1765169488975.png";
import image6 from "@assets/image_1765169673555.png";
import image7 from "@assets/image_1765169953978.png";
import image8 from "@assets/image_1765190753226.png";

const galleryImages = [
  { id: 1, src: image1, alt: "3D Print Project 1" },
  { id: 2, src: image2, alt: "3D Print Project 2" },
  { id: 3, src: image3, alt: "3D Print Project 3" },
  { id: 4, src: image4, alt: "3D Print Project 4" },
  { id: 5, src: image5, alt: "3D Print Project 5" },
  { id: 6, src: image6, alt: "3D Print Project 6" },
  { id: 7, src: image7, alt: "3D Print Project 7" },
  { id: 8, src: image8, alt: "3D Print Project 8" },
];

export default function TechnologyCarousel() {
  const duplicatedImages = [...galleryImages, ...galleryImages];

  return (
    <div className="relative overflow-hidden py-8">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
      
      <div 
        className="flex gap-4 animate-marquee"
        style={{ width: 'fit-content' }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={`${image.id}-${index}`}
            className="group relative flex-shrink-0"
            data-testid={`gallery-image-${image.id}-${index}`}
          >
            <div className="relative w-[200px] h-[180px] rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-105">
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
    </div>
  );
}
