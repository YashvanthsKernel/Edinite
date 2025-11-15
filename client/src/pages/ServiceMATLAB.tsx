import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, ArrowRight, Code } from "lucide-react";
import GlassPanel from "@/components/GlassPanel";
import heroImage from '@assets/generated_images/MATLAB_Simulink_background_26512f57.png';

export default function ServiceMATLAB() {
  const features = [
    "Control systems design and analysis",
    "Data analysis and visualization",
    "Dynamic system modeling with Simulink",
    "Algorithm development and optimization",
    "Signal processing and filtering"
  ];

  const applications = [
    "Control Systems",
    "Signal Processing",
    "Machine Learning",
    "Optimization",
    "Simulation"
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
                <Code size={32} className="text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                MATLAB-Based <span className="text-primary">Simulation Projects</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Control systems design, data analysis, and dynamic system modeling using MATLAB and Simulink for complex engineering challenges
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
                <h3 className="text-lg font-subheading font-semibold text-foreground mb-4">Application Areas</h3>
                <div className="flex flex-wrap gap-3">
                  {applications.map((app, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-foreground"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" data-testid="button-get-quote-matlab">
                <Link href="/request-quote">
                  Get a Quote <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" data-testid="button-view-portfolio-matlab">
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
