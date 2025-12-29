import image1 from "@assets/Aether_Blueprint_1766991280411.png";
import image2 from "@assets/Isometric_View_1766991301982.png";
import image3 from "@assets/Isometric_View_1766991317959.png";
import image4 from "@assets/NX_Cad_ISRO_Design_1766991335735.png";
import image5 from "@assets/Aether_GT-26_1766991348103.jpg";
import image6 from "@assets/Rendered_Image_of_SIH_Project_1766991362475.png";
import image7 from "@assets/Gyro_Transparent_View_1766991378999.png";
import image8 from "@assets/Camera_Slider_1766991398844.JPG";
import image9 from "@assets/Isometric_View_1766991418351.png";
import image10 from "@assets/Isometric_View_1766991439522.png";
import image11 from "@assets/44ebb6c6-a51f-482e-8882-9ab73c55d926_1766991442800.jpg";
import image12 from "@assets/Isometric_View_1766991457308.png";
import image13 from "@assets/Isometric_View_1766991480170.png";

const galleryImages = [
  { id: 1, src: image1, alt: "Aether GT-26 Blueprint" },
  { id: 2, src: image2, alt: "Isometric Design View" },
  { id: 3, src: image3, alt: "Technical Assembly" },
  { id: 4, src: image4, alt: "NX CAD ISRO Design" },
  { id: 5, src: image5, alt: "Aether GT-26 Render" },
  { id: 6, src: image6, alt: "SIH Project Render" },
  { id: 7, src: image7, alt: "Gyroscope Transparent View" },
  { id: 8, src: image8, alt: "Automated Camera Slider" },
  { id: 9, src: image9, alt: "Technical Component Isometric" },
  { id: 10, src: image10, alt: "Mechanical Assembly View" },
  { id: 11, src: image11, alt: "Precision Linear Actuator" },
  { id: 12, src: image12, alt: "CAD Model Overview" },
  { id: 13, src: image13, alt: "Final Product Rendering" },
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
          <div className="relative w-[380px] h-[280px] rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105">
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
    <div className="space-y-2 w-screen relative left-1/2 -translate-x-1/2">
      <div className="relative overflow-hidden py-2">
        {renderCarousel('animate-marquee')}
      </div>

      <div className="relative overflow-hidden py-2">
        {renderCarousel('animate-marquee-reverse')}
      </div>
    </div>
  );
}
