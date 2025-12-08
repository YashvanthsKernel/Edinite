import { useState } from "react";
import { Mail, MapPin, Clock, Palette, Waves, Cpu, GraduationCap, CheckCircle2, ArrowRight, Sparkles, Users, Award, TrendingUp } from "lucide-react";
import GlassPanel from "@/components/GlassPanel";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    id: "cad",
    title: "3D CAD Design",
    description: "Professional modeling & rendering",
    icon: Palette,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: "simulation",
    title: "CFD & FEA",
    description: "Simulation & analysis",
    icon: Waves,
    gradient: "from-cyan-500 to-teal-500"
  },
  {
    id: "pcb",
    title: "Electronics & PCB",
    description: "Circuit & PCB design",
    icon: Cpu,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: "training",
    title: "Edu-Tech",
    description: "Training & workshops",
    icon: GraduationCap,
    gradient: "from-orange-500 to-amber-500"
  }
];

const stats = [
  { value: "50+", label: "Projects Delivered", icon: TrendingUp },
  { value: "24h", label: "Response Time", icon: Clock },
  { value: "100%", label: "Client Satisfaction", icon: Award },
];

const trustPoints = [
  "Industry-expert design and simulation standards",
  "Perfect your product in the virtual world first",
  "Professional documentation and reports",
  "Accessible for students, startups & enterprises"
];

export default function Contact() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form submitted:', { ...formData, service: selectedService });
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-600/5 pointer-events-none" />
      <div className="absolute top-40 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] animate-pulse pointer-events-none" style={{ animationDuration: '12s' }} />

      <section className="py-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Let's Build Together</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
                Start Your <span className="text-primary">Project</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Select your service, tell us about your vision, and let's create something extraordinary
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <GlassPanel key={index} className="p-4 text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    <IconComponent className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </GlassPanel>
                );
              })}
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <ScrollAnimation delay={150}>
                <GlassPanel className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <Label className="text-foreground text-lg font-semibold mb-4 block">
                        1. Select Your Service
                      </Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {services.map((service) => {
                          const IconComponent = service.icon;
                          const isSelected = selectedService === service.id;
                          return (
                            <button
                              key={service.id}
                              type="button"
                              onClick={() => setSelectedService(service.id)}
                              className={`relative p-4 rounded-xl border-2 transition-all duration-300 text-left group ${
                                isSelected 
                                  ? 'border-primary bg-primary/10 scale-[1.02]' 
                                  : 'border-primary/20 hover:border-primary/40 bg-background/50'
                              }`}
                              data-testid={`service-card-${service.id}`}
                            >
                              {isSelected && (
                                <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                                  <CheckCircle2 className="w-3 h-3 text-white" />
                                </div>
                              )}
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                                <IconComponent className="w-5 h-5 text-white" />
                              </div>
                              <h3 className="font-semibold text-foreground text-sm">{service.title}</h3>
                              <p className="text-xs text-muted-foreground mt-1">{service.description}</p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-foreground">2. Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="mt-2 bg-background/50 border-primary/20"
                          data-testid="input-name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-foreground">3. Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="mt-2 bg-background/50 border-primary/20"
                          data-testid="input-email"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-foreground">4. Tell Us About Your Project</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your project requirements, goals, and timeline..."
                        rows={5}
                        className="mt-2 bg-background/50 border-primary/20 resize-none"
                        data-testid="input-message"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full group"
                      disabled={isSubmitting || !selectedService}
                      data-testid="button-submit"
                    >
                      {isSubmitting ? "Sending..." : "Submit Your Request"}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    {!selectedService && (
                      <p className="text-center text-sm text-muted-foreground">
                        Please select a service to continue
                      </p>
                    )}
                  </form>
                </GlassPanel>
              </ScrollAnimation>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <ScrollAnimation delay={200}>
                <GlassPanel className="p-6 relative overflow-visible">
                  <div className="absolute -top-3 -right-3">
                    <Badge className="bg-gradient-to-r from-primary to-purple-600 text-white border-0">
                      Quick Response
                    </Badge>
                  </div>
                  <h2 className="text-xl font-heading font-bold text-foreground mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-5">
                    <a 
                      href="mailto:edinite.official@gmail.com" 
                      className="flex items-center gap-4 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors group"
                      data-testid="link-contact-email"
                    >
                      <div className="w-11 h-11 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Mail size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm">Email Us</h3>
                        <p className="text-muted-foreground text-sm">edinite.official@gmail.com</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-3 rounded-xl bg-primary/5">
                      <div className="w-11 h-11 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm">Location</h3>
                        <p className="text-muted-foreground text-sm">India</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-3 rounded-xl bg-primary/5">
                      <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm">Response Time</h3>
                        <p className="text-muted-foreground text-sm">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </GlassPanel>
              </ScrollAnimation>

              <ScrollAnimation delay={300}>
                <GlassPanel className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-heading font-bold text-foreground">
                      Why Edinite?
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {trustPoints.map((point, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </GlassPanel>
              </ScrollAnimation>

              <ScrollAnimation delay={400}>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-600/20 border border-primary/30 text-center">
                  <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Have an urgent project?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Mention "Urgent" in your message for priority response
                  </p>
                  <a href="mailto:edinite.official@gmail.com?subject=Urgent%20Project%20Inquiry">
                    <Button variant="outline" size="sm" data-testid="button-urgent-email">
                      Send Urgent Request
                    </Button>
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
