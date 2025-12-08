import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import ScrollAnimation from "@/components/ScrollAnimation";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, MapPin, Clock, Phone, CheckCircle2, Send, MessageCircle, AlertCircle
} from "lucide-react";

const helpOptions = [
  { value: "consultation", label: "Design & simulation consultation" },
  { value: "validation", label: "Validating an existing design" },
  { value: "analysis", label: "Performance / failure analysis" },
  { value: "partnership", label: "Long-term engineering partnership" },
  { value: "other", label: "Something else" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    helpType: "",
    message: "",
    timeline: "",
    budget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setHasError(false);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message received!",
        description: "Thanks for reaching out to Edinite. An engineer will review your details and respond within 1-2 business days.",
      });
      setFormData({ 
        name: "", 
        email: "", 
        company: "", 
        helpType: "", 
        message: "", 
        timeline: "", 
        budget: "" 
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-transparent pointer-events-none" />

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                Let's Build Something That <span className="text-primary">Actually Works</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We help teams turn rough ideas into reliable designs through engineering simulations and validation.
                Tell us what you're working on, and we'll get back to you within 1-2 business days.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-6">
              <ScrollAnimation delay={100}>
                <Card className="p-6 md:p-8 border-border/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">Prefer talking to a person?</h2>
                  </div>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Whether you're exploring a new product, debugging a design, or just want a second opinion on your simulation workflow, we're happy to listen first and suggest next steps — no hard sell.
                  </p>

                  <div className="space-y-5">
                    <a 
                      href="mailto:edinite.official@gmail.com" 
                      className="flex items-center gap-4 group"
                      data-testid="link-contact-email"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Email</p>
                        <p className="font-medium text-foreground">edinite.official@gmail.com</p>
                      </div>
                    </a>

                    <a 
                      href="https://wa.me/919876543210" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                      data-testid="link-contact-phone"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Phone / WhatsApp</p>
                        <p className="font-medium text-foreground">+91-98XXX-XXXXX</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Hours</p>
                        <p className="font-medium text-foreground">Mon-Fri · 9:00 AM - 6:00 PM IST</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Location</p>
                        <p className="font-medium text-foreground">India · Working with teams worldwide</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollAnimation>
            </div>

            <div className="lg:col-span-3">
              <ScrollAnimation delay={200}>
                <Card className="p-6 md:p-8 border-border/50">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-foreground mb-2">Share your project details</h2>
                    <p className="text-muted-foreground text-sm">
                      A few lines about your project help us route your message to the right engineer.
                    </p>
                  </div>

                  {isSubmitted && (
                    <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Message received!</p>
                        <p className="text-sm text-muted-foreground">
                          Thanks for reaching out to Edinite. An engineer will review your details and respond within 1-2 business days.
                        </p>
                      </div>
                    </div>
                  )}

                  {hasError && (
                    <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/20 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Something went wrong.</p>
                        <p className="text-sm text-muted-foreground">
                          Please check the form and try again. If the issue persists, email us at edinite.official@gmail.com
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="mt-1.5"
                          data-testid="input-name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-foreground font-medium">Work email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="mt-1.5"
                          data-testid="input-email"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-foreground font-medium">
                        Company / Organization <span className="text-muted-foreground font-normal">(optional)</span>
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company or team name"
                        className="mt-1.5"
                        data-testid="input-company"
                      />
                    </div>

                    <div>
                      <Label htmlFor="helpType" className="text-foreground font-medium">What do you need help with?</Label>
                      <Select 
                        value={formData.helpType} 
                        onValueChange={(value) => setFormData(prev => ({ ...prev, helpType: value }))}
                      >
                        <SelectTrigger className="mt-1.5" data-testid="select-help-type">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          {helpOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value} data-testid={`option-${option.value}`}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-foreground font-medium">Project / message details</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your product, constraints, timelines, and any files or tools you're already using."
                        rows={4}
                        className="mt-1.5 resize-none"
                        data-testid="input-message"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="timeline" className="text-foreground font-medium">
                          Timeline <span className="text-muted-foreground font-normal">(optional)</span>
                        </Label>
                        <Input
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          placeholder="Example: Prototype in 3 months"
                          className="mt-1.5"
                          data-testid="input-timeline"
                        />
                      </div>
                      <div>
                        <Label htmlFor="budget" className="text-foreground font-medium">
                          Budget range <span className="text-muted-foreground font-normal">(optional)</span>
                        </Label>
                        <Input
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          placeholder="e.g. 1-2L, 5-10L, etc."
                          className="mt-1.5"
                          data-testid="input-budget"
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full mt-2"
                      disabled={isSubmitting}
                      data-testid="button-submit"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send to Edinite
                        </span>
                      )}
                    </Button>
                  </form>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
