import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, User, ArrowRight } from "lucide-react";
import { useState } from "react";
import logoImage from '@assets/Edinite Logo PNG_1764532314215.png';
import logoNameImage from '@assets/Edinite Logo name_1764532314216.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio (Under Development)" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-primary/20">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={logoImage} alt="Edinite Logo" className="h-12 w-auto" />
              <img src={logoNameImage} alt="Edinite Name" className="h-12 w-auto" />
            </div>
          </Link>

          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link key={link.href} href={link.href}>
                    <span className={`transition-colors cursor-pointer ${isActive ? 'font-bold text-primary' : 'text-foreground/80 hover:text-foreground'}`} data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Link href="/edutech">
                <div className="group relative inline-flex">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-cyan-400 rounded-full opacity-0 group-hover:opacity-70 blur-lg transition-all duration-500" />
                  <div className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-purple-500/10 to-cyan-400/10 border border-primary/30 group-hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                    <span className="text-sm font-semibold text-foreground group-hover:text-white transition-colors">More</span>
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
              <Link href="/login">
                <Button size="icon" variant="ghost" className="text-foreground/80 hover:text-foreground" data-testid="button-user-login">
                  <User className="h-7 w-7" />
                </Button>
              </Link>
            </div>

            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 backdrop-blur-xl bg-card/95 rounded-xl border border-primary/20 p-6">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link key={link.href} href={link.href}>
                    <span 
                      className={`transition-colors py-2 cursor-pointer block ${isActive ? 'font-bold text-primary' : 'text-foreground/80 hover:text-foreground'}`}
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
              <Link href="/edutech">
                <div className="group relative inline-flex w-full mt-2" onClick={() => setMobileMenuOpen(false)}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-cyan-400 rounded-full opacity-0 group-hover:opacity-70 blur-lg transition-all duration-500" />
                  <div className="relative w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-purple-500/10 to-cyan-400/10 border border-primary/30 group-hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                    <span className="text-sm font-semibold text-foreground group-hover:text-white transition-colors">More (Edutech)</span>
                  </div>
                </div>
              </Link>
              <Link href="/login">
                <div 
                  className="group relative inline-flex w-full mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-cyan-400 rounded-full opacity-0 group-hover:opacity-70 blur-lg transition-all duration-500" />
                  <div className="relative w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-purple-500/10 to-cyan-400/10 border border-primary/30 group-hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                    <User className="h-4 w-4" />
                    <span className="text-sm font-semibold text-foreground group-hover:text-white transition-colors">Login / Sign Up</span>
                  </div>
                </div>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
