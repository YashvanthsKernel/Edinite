import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Github, Youtube } from "lucide-react";
import logoImage from '@assets/generated_images/edinite_logo_with_e_symbol_and_bold_text.png';

export default function Footer() {
  return (
    <footer className="relative bg-card/50 border-t border-primary/20 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="Edinite Logo" className="h-8 w-auto" />
            </div>
            <p className="text-muted-foreground text-sm">
              Bridge between classroom learning and industry-grade product development
            </p>
          </div>

          <div>
            <h3 className="font-subheading font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`}>
                    <span className="text-muted-foreground hover:text-foreground transition-colors text-sm cursor-pointer" data-testid={`link-footer-${item.toLowerCase()}`}>
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-subheading font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {["CAD Design", "FEA/CFD Simulation", "3D Printing", "PCB Design", "MATLAB Solutions"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-subheading font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail size={16} className="text-primary" />
                <a href="mailto:edinite.official@gmail.com" data-testid="link-footer-email">edinite.official@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary" />
                <span>India</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-linkedin">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-github">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Edinite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
