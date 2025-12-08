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
  Briefcase, Target, Zap, Sparkles, Send, MessageSquare
} from "lucide-react";

const services = [
  {
    id: "cad",
    title: "3D CAD Design",
    description: "Turn sketches into production-ready 3D models",
    icon: Palette,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: "simulation",
    title: "CFD & FEA",
    description: "Optimize with advanced simulations",
    icon: Waves,
    gradient: "from-cyan-500 to-teal-500"
  },
  {
    id: "pcb",
    title: "Electronics & PCB",
    description: "Custom circuit board design & layout",
    icon: Cpu,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: "training",
    title: "Edu-Tech",
    description: "Training workshops for your team",
    icon: GraduationCap,
    gradient: "from-orange-500 to-amber-500"
  }
];

const testimonials = [
  {
    quote: "Edinite delivered our suspension design ahead of schedule. The attention to detail was exceptional.",
    author: "Senior Engineer",
    company: "Automotive Startup",
    rating: 5
  }
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
    <div className="min-h-screen pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-600/5 pointer-events-none" />
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[180px] animate-pulse pointer-events-none" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-20 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[200px] animate-pulse pointer-events-none" style={{ animationDuration: '15s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-cyan-500/5 rounded-full blur-[250px] pointer-events-none" />

      <section className="py-12 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/30 mb-6">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-primary">Let's Build Together</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6">
                Start Your <span className="bg-gradient-to-r from-primary via-purple-500 to-cyan-400 bg-clip-text text-transparent">Project</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Select your service, share your vision, and let's create something extraordinary together
              </p>
              <div className="flex justify-center mt-6 gap-1">
                <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-purple-500 rounded-full" />
                <div className="w-4 h-1.5 bg-purple-500 rounded-full animate-pulse" />
                <div className="w-2 h-1.5 bg-cyan-400 rounded-full" />
              </div>
            </div>
          </ScrollAnimation>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { value: "46+", label: "Projects", icon: Briefcase, gradient: "from-primary to-purple-600" },
              { value: "17+", label: "Clients", icon: Users, gradient: "from-cyan-500 to-blue-500" },
              { value: "24h", label: "Response", icon: Clock, gradient: "from-orange-500 to-amber-500" },
            ].map((stat, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="group relative">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-50 blur transition-all duration-300`} />
                  <div className="relative flex items-center gap-4 px-6 py-4 backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-2xl">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}>
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <ScrollAnimation delay={150}>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-cyan-400/20 rounded-3xl blur-xl opacity-50" />
                  <div className="relative backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    
                    <div className="p-8 md:p-10">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/30">
                          <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-foreground">Project Request Form</h2>
                          <p className="text-sm text-muted-foreground">Fill out the details below</p>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-8">
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
                              <span className="text-xs font-bold text-primary">1</span>
                            </div>
                            <Label className="text-foreground text-lg font-bold">Select Your Service</Label>
                          </div>
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {services.map((service) => {
                              const IconComponent = service.icon;
                              const isSelected = selectedService === service.id;
                              return (
                                <button
                                  key={service.id}
                                  type="button"
                                  onClick={() => setSelectedService(service.id)}
                                  className="group relative"
                                  data-testid={`service-card-${service.id}`}
                                >
                                  {isSelected && (
                                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-100`} />
                                  )}
                                  <div className={`relative p-5 rounded-xl border-2 transition-all duration-300 text-center h-full ${
                                    isSelected 
                                      ? 'border-transparent bg-background/80 scale-[1.02]' 
                                      : 'border-white/10 hover:border-primary/40 bg-white/[0.02] hover:bg-white/[0.05]'
                                  }`}>
                                    {isSelected && (
                                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-lg">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                      </div>
                                    )}
                                    <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                                      <IconComponent className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="font-bold text-foreground text-sm mb-1">{service.title}</h3>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="relative">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
                                <span className="text-xs font-bold text-primary">2</span>
                              </div>
                              <Label htmlFor="name" className="text-foreground font-bold">Your Name</Label>
                            </div>
                            <div className="relative group">
                              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-xl opacity-0 group-focus-within:opacity-100 blur transition-all duration-300" />
                              <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="eg: Pranav Suresh"
                                className="relative bg-white/[0.03] border-white/10 h-14 text-base focus:border-primary/50"
                                data-testid="input-name"
                                required
                              />
                            </div>
                          </div>
                          <div className="relative">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
                                <span className="text-xs font-bold text-primary">3</span>
                              </div>
                              <Label htmlFor="email" className="text-foreground font-bold">Email Address</Label>
                            </div>
                            <div className="relative group">
                              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-xl opacity-0 group-focus-within:opacity-100 blur transition-all duration-300" />
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="eg: pranav@company.com"
                                className="relative bg-white/[0.03] border-white/10 h-14 text-base focus:border-primary/50"
                                data-testid="input-email"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
                              <span className="text-xs font-bold text-primary">4</span>
                            </div>
                            <Label htmlFor="message" className="text-foreground font-bold">Tell us about your project</Label>
                          </div>
                          <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-xl opacity-0 group-focus-within:opacity-100 blur transition-all duration-300" />
                            <Textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="eg: We're developing a new heat exchanger and need CFD analysis to optimize the flow rate..."
                              rows={5}
                              className="relative bg-white/[0.03] border-white/10 resize-none text-base focus:border-primary/50"
                              data-testid="input-message"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
                              <span className="text-xs font-bold text-primary">5</span>
                            </div>
                            <Label className="text-foreground font-bold">Upload Files <span className="text-muted-foreground font-normal">(Optional)</span></Label>
                          </div>
                          <div 
                            className="relative group cursor-pointer"
                            onClick={() => fileInputRef.current?.click()}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            data-testid="dropzone-file-upload"
                          >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                            <div className="relative border-2 border-dashed border-white/20 rounded-xl p-8 text-center bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                              <input
                                ref={fileInputRef}
                                type="file"
                                multiple
                                accept=".step,.stp,.stl,.pdf,.iges,.igs,.jpg,.jpeg,.png"
                                onChange={handleFileChange}
                                className="hidden"
                                data-testid="input-file"
                              />
                              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-4">
                                <Upload className="w-6 h-6 text-primary" />
                              </div>
                              <p className="text-foreground font-medium mb-1">
                                Drop files here or click to browse
                              </p>
                              <p className="text-muted-foreground text-sm">
                                STEP, STL, IGES, PDF, Images accepted
                              </p>
                            </div>
                          </div>
                          {files.length > 0 && (
                            <div className="mt-4 space-y-2">
                              {files.map((file, index) => (
                                <div 
                                  key={index} 
                                  className="flex items-center justify-between p-3 bg-primary/10 rounded-xl border border-primary/20"
                                  data-testid={`file-item-${index}`}
                                >
                                  <span className="text-sm text-foreground truncate">{file.name}</span>
                                  <button
                                    type="button"
                                    onClick={() => removeFile(index)}
                                    className="p-1 hover:bg-primary/20 rounded-lg transition-colors"
                                    data-testid={`button-remove-file-${index}`}
                                  >
                                    <X className="w-4 h-4 text-muted-foreground" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="relative">
                          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-cyan-400 rounded-2xl opacity-70 blur-lg group-hover:opacity-100 transition-all" />
                          <Button 
                            type="submit" 
                            size="lg"
                            className="relative w-full h-16 text-lg font-bold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 border-0 group"
                            disabled={isSubmitting || !selectedService}
                            data-testid="button-submit"
                          >
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative flex items-center justify-center gap-3">
                              {isSubmitting ? (
                                <>Sending your request...</>
                              ) : (
                                <>
                                  <Send className="w-5 h-5" />
                                  Submit Project Request
                                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                              )}
                            </span>
                          </Button>
                        </div>
                      </form>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-cyan-400" />
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <ScrollAnimation delay={200}>
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-2xl blur opacity-50" />
                  <div className="relative backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-2xl p-6 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    
                    <Badge className="mb-4 bg-gradient-to-r from-primary to-purple-600 text-white border-0">
                      Quick Response
                    </Badge>
                    <h2 className="text-xl font-bold text-foreground mb-6">
                      Contact Information
                    </h2>
                    <div className="space-y-4">
                      <a 
                        href="mailto:edinite.official@gmail.com" 
                        className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-primary/30 transition-all"
                        data-testid="link-contact-email"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                          <Mail className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Email Us</p>
                          <p className="font-semibold text-foreground text-sm">edinite.official@gmail.com</p>
                        </div>
                      </a>

                      <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/10">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Location</p>
                          <p className="font-semibold text-foreground text-sm">India</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/10">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                          <Clock className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Response Time</p>
                          <p className="font-semibold text-foreground text-sm">Within 24 hours</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={300}>
                <div className="relative backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <Target className="w-5 h-5 text-primary" />
                    <h2 className="text-lg font-bold text-foreground">Why Work With Us?</h2>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Industry-standard design & simulation",
                      "Perfect virtually before production",
                      "Comprehensive documentation",
                      "Trusted by startups & enterprises"
                    ].map((point, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={400}>
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-cyan-400/20 rounded-2xl" />
                  <div className="relative backdrop-blur-xl border border-primary/30 rounded-2xl p-6">
                    <Quote className="w-8 h-8 text-primary mb-4" />
                    <p className="text-foreground leading-relaxed mb-5 italic">
                      "{testimonials[0].quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{testimonials[0].author}</p>
                        <p className="text-xs text-muted-foreground">{testimonials[0].company}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mt-4">
                      {[...Array(testimonials[0].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={500}>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl opacity-0 group-hover:opacity-50 blur transition-all duration-300" />
                  <div className="relative backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">Urgent Project?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Add "Urgent" in your message for priority handling
                    </p>
                    <a href="mailto:edinite.official@gmail.com?subject=Urgent%20Project%20Inquiry">
                      <Button variant="outline" className="w-full border-orange-500/30 hover:bg-orange-500/10" data-testid="button-urgent-email">
                        <Zap className="w-4 h-4 mr-2 text-orange-500" />
                        Send Urgent Request
                      </Button>
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
