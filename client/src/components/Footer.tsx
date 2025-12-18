import { Link } from "wouter";
import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import logoImage from '@assets/Edinite Logo PNG_1764532314215.png';

export default function Footer() {
  return (
    <footer className="relative bg-background/50 backdrop-blur-xl border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Logo and Description */}
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
                className="h-10 w-auto mb-4 cursor-pointer hover:opacity-80 transition-opacity"
                data-testid="img-footer-logo"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Bridge between classroom learning and industry-grade product development
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-5 text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contact", href: "/contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200 group"
                    data-testid={`link-footer-quick-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-5 text-sm">Services</h4>
            <ul className="space-y-3">
              {[
                { label: "CAD Design", href: "/services/mechanical-cad" },
                { label: "FEA/CFD Simulation", href: "/services/fea-cfd" },
                { label: "Rapid Printing", href: "/services/3d-printing" },
                { label: "PCB Design", href: "/services/pcb-design" },
                { label: "MATLAB Solutions", href: "/services/matlab" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200"
                    data-testid={`link-footer-services-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-5 text-sm">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@edinite.com"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200 flex items-center gap-3"
                  data-testid="link-footer-contact-email"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>edison.official@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200 flex items-center gap-3"
                  data-testid="link-footer-contact-location"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>India</span>
                </a>
              </li>
              <li className="pt-2">
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    title="LinkedIn"
                    data-testid="link-footer-social-linkedin"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    title="Twitter"
                    data-testid="link-footer-social-twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7-2.25 2-5.4 2.559-7.5 2.559z"/></svg>
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    title="Instagram"
                    data-testid="link-footer-social-instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M12 7a5 5 0 110 10 5 5 0 010-10z" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/5"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ originX: 0 }}
        >
          <p className="text-xs text-muted-foreground text-center">
            © 2025 Edinite. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
