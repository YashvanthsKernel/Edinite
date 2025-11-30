import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from '@assets/Edinite Logo PNG_1764532314215.png';
import logoNameImage from '@assets/Edinite Logo name_1764532314216.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio (Under Development)" },
    { href: "/contact", label: "Contact" },
  ];

  const serviceLinks = [
    { href: "/services/mechanical-cad", label: "Mechanical CAD Design" },
    { href: "/services/fea-cfd", label: "FEA/CFD Simulation" },
    { href: "/services/3d-printing", label: "3D Printing Services" },
    { href: "/services/pcb-design", label: "PCB Design & Development" },
    { href: "/services/matlab", label: "MATLAB-Based Simulation Projects" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src={logoImage} alt="Edinite Logo" className="h-16 w-auto" />
              <img src={logoNameImage} alt="Edinite Name" className="h-12 w-auto" />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className="text-foreground/80 hover:text-foreground transition-colors cursor-pointer" data-testid={`link-${link.label.toLowerCase()}`}>
                  {link.label}
                </span>
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-foreground/80 hover:text-foreground transition-colors cursor-pointer bg-transparent border-none text-base font-normal p-0" data-testid="link-services">
                  Services
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {serviceLinks.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link href={service.href}>
                      <span className="w-full cursor-pointer" data-testid={`link-service-${service.label.toLowerCase().replace(/\s+/g, '-')}`}>
                        {service.label}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button data-testid="button-request-quote">Request Quote</Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 backdrop-blur-xl bg-card/95 rounded-xl border border-primary/20 p-6">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span 
                    className="text-foreground/80 hover:text-foreground transition-colors py-2 cursor-pointer block"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="border-t border-primary/20 pt-4 mt-2">
                <span className="text-sm font-semibold text-muted-foreground mb-2 block">Services</span>
                {serviceLinks.map((service) => (
                  <Link key={service.href} href={service.href}>
                    <span 
                      className="text-foreground/80 hover:text-foreground transition-colors py-2 cursor-pointer block pl-4"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid={`link-mobile-service-${service.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {service.label}
                    </span>
                  </Link>
                ))}
              </div>
              <Button className="mt-2" data-testid="button-mobile-quote">Request Quote</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
