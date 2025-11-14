import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import GlassPanel from "./GlassPanel";
import { Upload } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <GlassPanel className="p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-foreground">Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="mt-2 bg-background/50 border-primary/20 text-foreground"
            data-testid="input-name"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-foreground">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className="mt-2 bg-background/50 border-primary/20 text-foreground"
            data-testid="input-email"
          />
        </div>

        <div>
          <Label htmlFor="service" className="text-foreground">Service Interest</Label>
          <Input
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            placeholder="e.g., CAD Design, FEA/CFD"
            className="mt-2 bg-background/50 border-primary/20 text-foreground"
            data-testid="input-service"
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-foreground">Project Description</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            rows={4}
            className="mt-2 bg-background/50 border-primary/20 text-foreground resize-none"
            data-testid="input-message"
          />
        </div>

        <div>
          <Label className="text-foreground">File Upload</Label>
          <div className="mt-2 border-2 border-dashed border-primary/30 rounded-xl p-8 text-center hover-elevate cursor-pointer transition-all">
            <Upload size={32} className="mx-auto text-primary mb-2" />
            <p className="text-muted-foreground text-sm">
              Drop files here or click to upload
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              STEP, STL, PDF files accepted
            </p>
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full"
          data-testid="button-submit"
        >
          Submit Request
        </Button>
      </form>
    </GlassPanel>
  );
}
