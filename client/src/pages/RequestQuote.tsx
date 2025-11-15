import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import GlassPanel from "@/components/GlassPanel";
import { FileText, CheckCircle, Clock, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import heroImage from '@assets/generated_images/CAD_design_service_background_19e6e5df.png';

const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  timeline: z.string().optional(),
  budget: z.string().optional(),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export default function RequestQuote() {
  const { toast } = useToast();
  
  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      timeline: "",
      budget: "",
      description: "",
    },
  });

  const onSubmit = (data: QuoteFormValues) => {
    console.log('Quote request submitted:', data);
    
    toast({
      title: "Quote Request Submitted!",
      description: "We'll review your request and get back to you within 24 hours.",
    });

    form.reset();
  };

  return (
    <div className="min-h-screen pt-24">
      <section 
        className="relative py-20"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(1,0,48,0.85), rgba(1,0,48,0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-heading font-bold text-foreground mb-6" data-testid="text-page-title">
            Request a <span className="text-primary">Quote</span>
          </h1>
          <p className="text-xl text-muted-foreground" data-testid="text-page-subtitle">
            Tell us about your project and receive a detailed quote within 24 hours
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <GlassPanel className="p-6" data-testid="card-feature-detailed-proposal">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <FileText size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-subheading font-semibold text-foreground mb-2" data-testid="text-feature-title-proposal">
                  Detailed Proposal
                </h3>
                <p className="text-muted-foreground text-sm" data-testid="text-feature-desc-proposal">
                  Receive a comprehensive breakdown of costs, timeline, and deliverables
                </p>
              </div>
            </GlassPanel>

            <GlassPanel className="p-6" data-testid="card-feature-quick-response">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Clock size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-subheading font-semibold text-foreground mb-2" data-testid="text-feature-title-response">
                  Quick Response
                </h3>
                <p className="text-muted-foreground text-sm" data-testid="text-feature-desc-response">
                  Get your custom quote within 24 hours of submission
                </p>
              </div>
            </GlassPanel>

            <GlassPanel className="p-6" data-testid="card-feature-expert-consultation">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Users size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-subheading font-semibold text-foreground mb-2" data-testid="text-feature-title-consultation">
                  Expert Consultation
                </h3>
                <p className="text-muted-foreground text-sm" data-testid="text-feature-desc-consultation">
                  Free initial consultation to discuss your project requirements
                </p>
              </div>
            </GlassPanel>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <GlassPanel className="p-8">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6" data-testid="text-form-title">
                Quote Request Form
              </h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Full Name *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="John Doe"
                              className="mt-2 bg-background/50 border-primary/20 text-foreground"
                              data-testid="input-quote-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Email *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="john@example.com"
                              className="mt-2 bg-background/50 border-primary/20 text-foreground"
                              data-testid="input-quote-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Company</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Your Company"
                              className="mt-2 bg-background/50 border-primary/20 text-foreground"
                              data-testid="input-quote-company"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Phone</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="tel"
                              placeholder="+1 (234) 567-890"
                              className="mt-2 bg-background/50 border-primary/20 text-foreground"
                              data-testid="input-quote-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Service Required *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="mt-2 bg-background/50 border-primary/20 text-foreground" data-testid="select-quote-service">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="cad" data-testid="option-service-cad">3D CAD Design</SelectItem>
                            <SelectItem value="fea-cfd" data-testid="option-service-fea">FEA/CFD Simulation</SelectItem>
                            <SelectItem value="3d-printing" data-testid="option-service-3d">3D Printing</SelectItem>
                            <SelectItem value="pcb" data-testid="option-service-pcb">PCB Design</SelectItem>
                            <SelectItem value="matlab" data-testid="option-service-matlab">MATLAB & Simulink</SelectItem>
                            <SelectItem value="multiple" data-testid="option-service-multiple">Multiple Services</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="timeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Project Timeline</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="mt-2 bg-background/50 border-primary/20 text-foreground" data-testid="select-quote-timeline">
                                <SelectValue placeholder="Select timeline" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="urgent" data-testid="option-timeline-urgent">Urgent (1-2 weeks)</SelectItem>
                              <SelectItem value="standard" data-testid="option-timeline-standard">Standard (2-4 weeks)</SelectItem>
                              <SelectItem value="flexible" data-testid="option-timeline-flexible">Flexible (1-2 months)</SelectItem>
                              <SelectItem value="long-term" data-testid="option-timeline-long">Long-term (2+ months)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Budget Range</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="mt-2 bg-background/50 border-primary/20 text-foreground" data-testid="select-quote-budget">
                                <SelectValue placeholder="Select budget" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1000" data-testid="option-budget-1k">Under $1,000</SelectItem>
                              <SelectItem value="5000" data-testid="option-budget-5k">$1,000 - $5,000</SelectItem>
                              <SelectItem value="10000" data-testid="option-budget-10k">$5,000 - $10,000</SelectItem>
                              <SelectItem value="10000+" data-testid="option-budget-plus">$10,000+</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Project Description *</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Describe your project in detail, including objectives, requirements, and any specific technical specifications..."
                            rows={6}
                            className="mt-2 bg-background/50 border-primary/20 text-foreground resize-none"
                            data-testid="input-quote-description"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full"
                    data-testid="button-submit-quote"
                  >
                    Submit Quote Request
                  </Button>
                </form>
              </Form>
            </GlassPanel>

            <div className="space-y-6">
              <GlassPanel className="p-8">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6" data-testid="text-process-title">
                  What Happens Next?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-subheading font-semibold text-foreground mb-1" data-testid="text-step-1-title">1. Initial Review</h3>
                      <p className="text-muted-foreground text-sm" data-testid="text-step-1-desc">
                        Our team reviews your requirements and project scope within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-subheading font-semibold text-foreground mb-1" data-testid="text-step-2-title">2. Free Consultation</h3>
                      <p className="text-muted-foreground text-sm" data-testid="text-step-2-desc">
                        Schedule a call to discuss technical details and clarify requirements
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-subheading font-semibold text-foreground mb-1" data-testid="text-step-3-title">3. Detailed Proposal</h3>
                      <p className="text-muted-foreground text-sm" data-testid="text-step-3-desc">
                        Receive a comprehensive quote with timeline, deliverables, and costs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-subheading font-semibold text-foreground mb-1" data-testid="text-step-4-title">4. Project Kickoff</h3>
                      <p className="text-muted-foreground text-sm" data-testid="text-step-4-desc">
                        Once approved, we start working on your project with regular updates
                      </p>
                    </div>
                  </div>
                </div>
              </GlassPanel>

              <GlassPanel className="p-8">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4" data-testid="text-help-title">
                  Need Help?
                </h2>
                <p className="text-muted-foreground mb-4" data-testid="text-help-desc">
                  Not sure which service you need or have questions about the process? Contact us directly.
                </p>
                <Button variant="outline" className="w-full" asChild data-testid="button-contact-us">
                  <a href="/contact">Contact Us</a>
                </Button>
              </GlassPanel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
