import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import logoImage from '@assets/Edinite Logo PNG_1764532314215.png';

const footerSections = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Contact", href: "/contact" },
      { label: "My account", href: "/login" },
      { label: "Wishlist", href: "/" },
    ]
  },
  {
    title: "Shop",
    links: [
      { label: "Academic Project", href: "/" },
      { label: "Request Design", href: "/contact" },
      { label: "Custom 3d print", href: "/services/3d-printing" },
      { label: "Custom Gifts", href: "/" },
    ]
  },
  {
    title: "Contact",
    links: [
      { label: "contact@edinite.com", href: "mailto:contact@edinite.com", icon: Mail },
      { label: "Edinite Labs", href: "/", social: true },
      { label: "+1 (555) 123-4567", href: "tel:+15551234567", icon: Phone },
    ]
  }
];

export default function Footer() {
  return (
    <footer className="relative">
      {/* CTA Section */}
      <section className="relative py-16 px-6 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                GOT A PROJECT IN MIND? LET'S TALK!
              </h2>
              <p className="text-muted-foreground text-lg">
                Whether it's a prototype, gift, or academic project we're ready to bring your ideas to life.
              </p>
            </div>
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 whitespace-nowrap flex items-center gap-2 group"
                data-testid="button-footer-contact"
              >
                Contact us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-background via-primary to-background" />

      {/* Footer Content */}
      <section className="bg-background/50 backdrop-blur-xl border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/">
                <img 
                  src={logoImage} 
                  alt="Edinite Logo" 
                  className="h-12 w-auto mb-4 cursor-pointer hover:opacity-80 transition-opacity"
                  data-testid="img-footer-logo"
                />
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Edinite Labs turns ideas into reality with quality 3D printing, custom designs, and creative products.
              </p>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (idx + 1) * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.links.map((link, linkIdx) => {
                    const Icon = (link as any).icon;
                    const isSocial = (link as any).social;
                    
                    return (
                      <li key={linkIdx}>
                        <a
                          href={link.href}
                          className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                          data-testid={`link-footer-${section.title.toLowerCase()}-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {Icon && !isSocial && <Icon className="w-4 h-4 flex-shrink-0" />}
                          <span className="group-hover:translate-x-0.5 transition-transform">{link.label}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Border */}
          <motion.div
            className="pt-8 border-t border-white/5"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ originX: 0 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
              <p>&copy; 2025 Edinite Labs. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </footer>
  );
}
