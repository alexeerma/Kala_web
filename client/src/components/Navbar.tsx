import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

const NAV_LINKS = [
  { name: "Minust", href: "/minust", isAnchor: false },
  { name: "Hinnakiri", href: "/hinnakiri", isAnchor: false },
  { name: "Kontakt", href: "/kontakt", isAnchor: false },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavClick = (e: React.MouseEvent, link: typeof NAV_LINKS[0]) => {
    if (link.isAnchor) {
      e.preventDefault();
      if (location !== "/") {
        window.location.href = "/" + link.href;
      } else {
        scrollToSection(link.href);
      }
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  const handleContactClick = () => {
    window.location.href = "/kontakt";
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <span 
            className="text-xl font-semibold text-white tracking-tight cursor-pointer"
            data-testid="link-logo"
          >
            RasmusKala
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            link.isAnchor ? (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-full"
                data-testid={`link-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ) : (
              <Link key={link.name} href={link.href}>
                <span
                  className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-full cursor-pointer"
                  data-testid={`link-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </span>
              </Link>
            )
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button 
            className="bg-white text-black hover:bg-gray-100 rounded-full px-5 font-medium"
            onClick={handleContactClick}
            data-testid="button-signup"
          >
            Alusta kohe
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
            link.isAnchor ? (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="text-base text-gray-300 hover:text-white py-3 border-b border-white/5 transition-colors"
                data-testid={`link-mobile-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ) : (
              <Link key={link.name} href={link.href}>
                <span
                  className="block text-base text-gray-300 hover:text-white py-3 border-b border-white/5 transition-colors cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </span>
              </Link>
            )
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Button 
              className="w-full bg-white text-black hover:bg-gray-100 rounded-full font-medium"
              onClick={handleContactClick}
              data-testid="button-mobile-signup"
            >
              Alusta kohe
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
