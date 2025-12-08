import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import ScrollAnimation from "@/components/ScrollAnimation";
import { 
  Palette, Waves, Cpu, GraduationCap, Mail, MapPin, Clock, 
  CheckCircle2, ArrowRight, Upload, X, Users, Quote, Star,
  Briefcase, Target, Zap
} from "lucide-react";

const services = [
  {
    id: "cad",
    title: "3D CAD Design",
    description: "We turn rough sketches into fully engineered 3D CAD models, ready for manufacturing.",
    icon: Palette,
  },
  {
    id: "simulation",
    title: "CFD & FEA",
    description: "Advanced structural and thermal simulations to optimize your product before production.",
    icon: Waves,
  },
  {
    id: "pcb",
    title: "Electronics & PCB",
    description: "Custom PCB design and layout for electronic products that work flawlessly.",
    icon: Cpu,
  },
  {
    id: "training",
    title: "Edu-Tech",
    description: "Workshops and training to upskill your team in CAD, simulation, and design.",
    icon: GraduationCap,
  }
];

const testimonials = [
  {
    quote: "Edinite delivered our suspension design ahead of schedule with incredible precision. Truly professional work.",
    author: "Mechanical Engineer",
    company: "Automotive Startup",
    rating: 5
  },
  {
    quote: "The CFD analysis helped us optimize our heat exchanger efficiency by 27%. Highly recommended.",
    author: "Product Manager",
    company: "Energy Solutions",
    rating: 5
  }
];

const trustStats = [
  { value: "46+", label: "Projects Completed", icon: Briefcase },
  { value: "17+", label: "Engineering Clients", icon: Users },
  { value: "24h", label: "Average Response", icon: Clock },
];

export default function Contact() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form submitted:', { ...formData, service: selectedService, files });
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      <section className="py-12 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">Let's Build Together</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                Start Your <span className="text-primary">Project</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Tell us about your engineering challenge. We'll help you bring it to life with precision and expertise.
              </p>
            </div>
          </ScrollAnimation>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {trustStats.map((stat, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="flex items-center gap-3 px-6 py-3 bg-card/50 border border-border rounded-xl">
                  <stat.icon className="w-5 h-5 text-primary" />
                  <div>
                    <span className="text-xl font-bold text-foreground">{stat.value}</span>
                    <span className="text-sm text-muted-foreground ml-2">{stat.label}</span>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <ScrollAnimation delay={150}>
                <div className="bg-card/50 border border-border rounded-2xl p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">Step 1</p>
                      <Label className="text-foreground text-lg font-bold mb-2 block">
                        What can we help you with?
                      </Label>
                      <p className="text-sm text-muted-foreground mb-4">
                        Select the service that best matches your project needs.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {services.map((service) => {
                          const IconComponent = service.icon;
                          const isSelected = selectedService === service.id;
                          return (
                            <button
                              key={service.id}
                              type="button"
                              onClick={() => setSelectedService(service.id)}
                              className={`relative p-5 rounded-xl border-2 transition-all duration-300 text-left group ${
                                isSelected 
                                  ? 'border-primary bg-primary/5' 
                                  : 'border-border hover:border-primary/40 bg-background/50'
                              }`}
                              data-testid={`service-card-${service.id}`}
                            >
                              {isSelected && (
                                <div className="absolute top-3 right-3">
                                  <CheckCircle2 className="w-5 h-5 text-primary" />
                                </div>
                              )}
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors ${
                                isSelected ? 'bg-primary text-white' : 'bg-muted text-foreground'
                              }`}>
                                <IconComponent className="w-5 h-5" />
                              </div>
                              <h3 className="font-bold text-foreground mb-1">{service.title}</h3>
                              <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">Step 2</p>
                        <Label htmlFor="name" className="text-foreground font-bold">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="eg: Pranav Suresh"
                          className="mt-2 bg-background border-border h-12"
                          data-testid="input-name"
                          required
                        />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">Step 3</p>
                        <Label htmlFor="email" className="text-foreground font-bold">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="eg: pranav@company.com"
                          className="mt-2 bg-background border-border h-12"
                          data-testid="input-email"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">Step 4</p>
                      <Label htmlFor="message" className="text-foreground font-bold">Tell us about your project</Label>
                      <p className="text-sm text-muted-foreground mt-1 mb-3">
                        What are you building? What challenges are you facing? Any timeline in mind?
                      </p>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="eg: We're developing a new heat exchanger and need CFD analysis to optimize the flow rate and reduce pressure drop. Target completion in 3 weeks."
                        rows={5}
                        className="bg-background border-border resize-none"
                        data-testid="input-message"
                        required
                      />
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">Step 5 (Optional)</p>
                      <Label className="text-foreground font-bold">Upload Reference Files</Label>
                      <p className="text-sm text-muted-foreground mt-1 mb-3">
                        Share sketches, CAD files, or any reference documents.
                      </p>
                      <div 
                        className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 cursor-pointer transition-all bg-background/50"
                        onClick={() => fileInputRef.current?.click()}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        data-testid="dropzone-file-upload"
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          multiple
                          accept=".step,.stp,.stl,.pdf,.iges,.igs,.jpg,.jpeg,.png"
                          onChange={handleFileChange}
                          className="hidden"
                          data-testid="input-file"
                        />
                        <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                        <p className="text-foreground font-medium">
                          Drop files here or click to browse
                        </p>
                        <p className="text-muted-foreground text-xs mt-1">
                          STEP, STL, IGES, PDF, JPG, PNG accepted
                        </p>
                      </div>
                      {files.length > 0 && (
                        <div className="mt-3 space-y-2">
                          {files.map((file, index) => (
                            <div 
                              key={index} 
                              className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border"
                              data-testid={`file-item-${index}`}
                            >
                              <span className="text-sm text-foreground truncate">{file.name}</span>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="p-1 hover:bg-muted rounded ml-2"
                                data-testid={`button-remove-file-${index}`}
                              >
                                <X className="w-4 h-4 text-muted-foreground" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full h-14 text-base font-bold group"
                      disabled={isSubmitting || !selectedService}
                      data-testid="button-submit"
                    >
                      {isSubmitting ? "Sending your request..." : "Submit Project Request"}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    <p className="text-center text-xs text-muted-foreground">
                      We typically respond within 24 hours. Your information is kept confidential.
                    </p>
                  </form>
                </div>
              </ScrollAnimation>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <ScrollAnimation delay={200}>
                <div className="bg-card/50 border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Badge variant="outline" className="text-xs uppercase tracking-wider">Quick Response</Badge>
                  </div>
                  <h2 className="text-lg font-bold text-foreground mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <a 
                      href="mailto:edinite.official@gmail.com" 
                      className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border hover:border-primary/30 transition-all group"
                      data-testid="link-contact-email"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Email Us</p>
                        <p className="font-medium text-foreground text-sm">edinite.official@gmail.com</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border">
                      <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-cyan-500" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Location</p>
                        <p className="font-medium text-foreground text-sm">India</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border">
                      <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Response Time</p>
                        <p className="font-medium text-foreground text-sm">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={300}>
                <div className="bg-card/50 border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="w-5 h-5 text-primary" />
                    <h2 className="text-lg font-bold text-foreground">
                      Why Work With Us?
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Industry-standard design & simulation expertise",
                      "Perfect your product virtually before production",
                      "Comprehensive documentation & reports",
                      "Trusted by students, startups & enterprises"
                    ].map((point, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={400}>
                <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/20 rounded-2xl p-6">
                  <Quote className="w-6 h-6 text-primary mb-4" />
                  <p className="text-sm text-foreground leading-relaxed mb-4 italic">
                    "{testimonials[0].quote}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{testimonials[0].author}</p>
                      <p className="text-xs text-muted-foreground">{testimonials[0].company}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mt-3">
                    {[...Array(testimonials[0].rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={500}>
                <div className="bg-card/50 border border-border rounded-2xl p-6 text-center">
                  <Zap className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-2">Urgent Project?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Add "Urgent" in your message for priority handling
                  </p>
                  <a href="mailto:edinite.official@gmail.com?subject=Urgent%20Project%20Inquiry">
                    <Button variant="outline" size="sm" className="w-full" data-testid="button-urgent-email">
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
