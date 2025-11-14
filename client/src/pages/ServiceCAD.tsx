import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, ArrowRight } from "lucide-react";
import GlassPanel from "@/components/GlassPanel";
import cadImage from '@assets/generated_images/CAD_design_service_background_19e6e5df.png';

export default function ServiceCAD() {
  const features = [
    "3D parametric modeling and assembly design",
    "Detailed engineering drawings and documentation",
    "Design for manufacturability (DFM) analysis",
    "Reverse engineering from physical parts",
    "Product visualization and rendering"
  ];

  const processSteps = [
    { title: "Consultation", description: "Understand your requirements and project scope" },
    { title: "Concept Design", description: "Initial design concepts and iterations" },
    { title: "Detailed Design", description: "Complete 3D models with specifications" },
    { title: "Delivery", description: "Final CAD files and documentation" }
  ];

  return (
    <div className="min-h-screen pt-24">
      <section 
        className="relative py-32"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(1,0,48,0.8), rgba(1,0,48,0.6)), url(${cadImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <GlassPanel className="p-12">
            <h1 className="text-5xl font-heading font-bold text-foreground mb-6">
              3D <span className="text-primary">CAD Design</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Professional mechanical design services using industry-leading CAD software for precise, manufacturable products
            </p>
            <Link href="/contact">
              <Button size="lg" data-testid="button-start-project">
                Start Your Project <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </GlassPanel>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                What We Offer
              </h2>
              <p className="text-muted-foreground mb-6">
                Our CAD design services cover the complete product development lifecycle, from initial concept to production-ready designs. We use SolidWorks, CATIA, and Fusion 360 to deliver high-quality 3D models.
              </p>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <GlassPanel className="p-8">
              <h3 className="text-2xl font-subheading font-semibold text-foreground mb-6">
                Tools & Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {["SolidWorks", "CATIA V5", "Fusion 360", "AutoCAD", "Inventor", "Creo"].map((tool) => (
                  <div key={tool} className="p-4 bg-primary/5 border border-primary/20 rounded-xl text-center">
                    <span className="text-foreground font-medium">{tool}</span>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <GlassPanel key={step.title} className="p-6 relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-subheading font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </GlassPanel>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
