import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import GlassPanel from "@/components/GlassPanel";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Contact() {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-heading font-bold text-foreground mb-6">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your engineering project to life? Contact us today for a consultation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollAnimation>
              <ContactForm />
            </ScrollAnimation>

            <div className="space-y-6">
              <ScrollAnimation delay={100}>
                <GlassPanel className="p-8">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-subheading font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:edinite.official@gmail.com" className="text-muted-foreground hover:text-primary" data-testid="link-contact-email">
                        edinite.official@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-subheading font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-subheading font-semibold text-foreground mb-1">Response Time</h3>
                      <p className="text-muted-foreground">
                        We typically respond within 24 hours<br />
                        For urgent inquiries, mention "Urgent" in subject
                      </p>
                    </div>
                  </div>
                </div>
              </GlassPanel>
              </ScrollAnimation>

              <ScrollAnimation delay={200}>
                <GlassPanel className="p-8">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Why Choose Edinite?
                </h2>
                <ul className="space-y-3">
                  {[
                    "No manufacturing - pure design, simulation, and optimization",
                    "Industry-expert design and simulation standards",
                    "Perfect your product in the virtual world first",
                    "Professional documentation and comprehensive reports",
                    "Accessible services for students, startups, and innovators"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassPanel>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
