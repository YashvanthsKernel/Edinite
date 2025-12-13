import cadImage from '@assets/generated_images/CAD_design_service_background_19e6e5df.png';
import feaImage from '@assets/generated_images/FEA_CFD_simulation_background_275ed2b3.png';
import printingImage from '@assets/generated_images/3D_printing_service_background_5fcbe0f4.png';
import pcbImage from '@assets/generated_images/PCB_design_service_background_f2880d46.png';
import matlabImage from '@assets/generated_images/MATLAB_Simulink_background_26512f57.png';
import optimizationImage from '@assets/generated_images/Product_optimization_background_2334833a.png';
import heroImage from '@assets/generated_images/Homepage_hero_engineering_montage_d31f5047.png';
import heroGearImage from '@assets/generated_images/dynamic_3d_mechanical_engineering_assembly.png';

const images = [
  cadImage,
  feaImage,
  printingImage,
  pcbImage,
  matlabImage,
  optimizationImage,
  heroImage,
  heroGearImage,
];

function ScrollingRow({ direction, rowIndex }: { direction: 'left' | 'right'; rowIndex: number }) {
  const duplicatedImages = [...images, ...images, ...images];
  const animationClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';
  
  return (
    <div className="flex gap-6 overflow-hidden">
      <div className={`flex gap-6 ${animationClass}`} style={{ animationDelay: `${rowIndex * 0.5}s` }}>
        {duplicatedImages.map((img, idx) => (
          <div
            key={`${rowIndex}-${idx}`}
            className="flex-shrink-0 w-96 h-64 rounded-lg overflow-hidden opacity-60"
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ScrollingImageBackground() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/60 to-secondary/10 z-10" />
      <div className="flex flex-col gap-8">
        {[0, 1, 2, 3].map((rowIndex) => (
          <ScrollingRow
            key={rowIndex}
            direction={rowIndex % 2 === 0 ? 'left' : 'right'}
            rowIndex={rowIndex}
          />
        ))}
      </div>
    </div>
  );
}
