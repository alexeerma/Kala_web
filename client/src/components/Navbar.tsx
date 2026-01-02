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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-black/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, "#hero")} 
          className="text-2xl font-display font-bold tracking-tighter text-white"
        >
          IRON<span className="text-gray-500">FORGE</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="bg-white text-black hover:bg-gray-200 rounded-none font-bold uppercase tracking-wider"
            onClick={(e) => {
              // Cast to unknown first to avoid type mismatch, then to generic React.MouseEvent
              scrollToSection(e as unknown as React.MouseEvent<HTMLAnchorElement>, "#contact");
            }}
          >
            Start Training
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-lg font-bold text-white/80 hover:text-white py-2 border-b border-white/5 uppercase"
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="w-full bg-white text-black hover:bg-gray-200 rounded-none font-bold uppercase mt-4"
            onClick={(e) => {
              scrollToSection(e as unknown as React.MouseEvent<HTMLAnchorElement>, "#contact");
            }}
          >
            Start Training
          </Button>
        </div>
      )}
    </nav>
  );
}
