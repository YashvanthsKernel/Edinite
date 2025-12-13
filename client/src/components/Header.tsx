import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, UserCircle } from "lucide-react";
import { useState } from "react";
import logoImage from '@assets/Edinite Logo PNG_1764532314215.png';
import logoNameImage from '@assets/Edinite Logo name_1764532314216.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="text-foreground/80 hover:text-foreground transition-colors cursor-pointer" data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Button data-testid="button-request-quote">More</Button>
              <Link href="/login">
                <Button size="icon" variant="ghost" className="text-foreground/80 hover:text-foreground" data-testid="button-user-login">
                  <UserCircle className="h-5 w-5" />
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
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span 
                    className="text-foreground/80 hover:text-foreground transition-colors py-2 cursor-pointer block"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <Button className="mt-2" data-testid="button-mobile-quote">Request Quote</Button>
              <Link href="/login">
                <Button 
                  variant="outline" 
                  className="mt-2 w-full"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="button-mobile-login"
                >
                  <UserCircle className="h-4 w-4 mr-2" />
                  Login / Sign Up
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
