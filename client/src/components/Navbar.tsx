import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, "#hero")} 
          className="text-xl font-semibold text-white tracking-tight"
          data-testid="link-logo"
        >
          FitPro
        </a>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-full"
              data-testid={`link-nav-${link.name.toLowerCase()}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button 
            className="bg-white text-black hover:bg-gray-100 rounded-full px-5 font-medium"
            onClick={(e) => {
              scrollToSection(e as unknown as React.MouseEvent<HTMLAnchorElement>, "#contact");
            }}
            data-testid="button-signup"
          >
            Get Started
          </Button>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/5 p-6 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-base text-gray-300 hover:text-white py-3 border-b border-white/5 transition-colors"
              data-testid={`link-mobile-${link.name.toLowerCase()}`}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Button 
              className="w-full bg-white text-black hover:bg-gray-100 rounded-full font-medium"
              onClick={(e) => {
                scrollToSection(e as unknown as React.MouseEvent<HTMLAnchorElement>, "#contact");
              }}
              data-testid="button-mobile-signup"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
