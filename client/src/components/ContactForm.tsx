import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import GlassPanel from "./GlassPanel";
import { Upload, X } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission API call
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
          <div
            className="mt-2 border-2 border-dashed border-primary/30 rounded-xl p-8 text-center hover:border-primary/50 cursor-pointer transition-all"
            onClick={() => fileInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            data-testid="dropzone-file-upload"
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".step,.stp,.stl,.pdf"
              onChange={handleFileChange}
              className="hidden"
              data-testid="input-file"
            />
            <Upload size={32} className="mx-auto text-primary mb-2" />
            <p className="text-muted-foreground text-sm">
              Drop files here or click to upload
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              STEP, STL, PDF files accepted
            </p>
          </div>
          {files.length > 0 && (
            <div className="mt-3 space-y-2">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 bg-primary/10 rounded-lg"
                  data-testid={`file-item-${index}`}
                >
                  <span className="text-sm text-foreground truncate">{file.name}</span>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="p-1 hover:bg-primary/20 rounded"
                    data-testid={`button-remove-file-${index}`}
                  >
                    <X size={16} className="text-muted-foreground" />
                  </button>
                </div>
              ))}
            </div>
          )}
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
