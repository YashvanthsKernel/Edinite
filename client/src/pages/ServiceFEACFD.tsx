import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, ArrowRight, Wind } from "lucide-react";
import GlassPanel from "@/components/GlassPanel";
import heroImage from '@assets/generated_images/FEA_CFD_simulation_background_275ed2b3.png';

export default function ServiceFEACFD() {
  const features = [
    "Structural finite element analysis (FEA)",
    "Computational fluid dynamics (CFD) simulations",
    "Thermal and heat transfer analysis",
    "Modal and vibration analysis",
    "Multi-physics coupling and optimization"
  ];

  const tools = [
    "ANSYS Mechanical",
    "ANSYS Fluent",
    "COMSOL Multiphysics",
    "Abaqus",
    "CFX"
  ];

  return (
    <div className="min-h-screen pt-24">
      <section 
        className="relative min-h-[90vh] flex items-center justify-center py-20"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(1,0,48,0.85), rgba(1,0,48,0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-5xl mx-auto px-6 w-full">
          <GlassPanel className="p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center">
                <Wind size={32} className="text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                FEA/CFD <span className="text-primary">Simulation</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Advanced finite element analysis and computational fluid dynamics simulations for structural and thermal optimization
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-subheading font-semibold text-foreground mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-subheading font-semibold text-foreground mb-4">Software We Use</h3>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button asChild size="lg" data-testid="button-get-quote-fea-cfd">
                <Link href="/contact">
                  Get a Quote <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" data-testid="button-view-portfolio-fea-cfd">
                <Link href="/portfolio">
                  View Portfolio
                </Link>
              </Button>
            </div>
          </GlassPanel>
        </div>
      </section>
    </div>
  );
}
