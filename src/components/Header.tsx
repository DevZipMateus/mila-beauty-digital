import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavigation = (id: string, isLink?: boolean) => {
    if (isLink) {
      navigate(`/${id}`);
      setIsMobileMenuOpen(false);
    } else {
      if (window.location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection(id), 100);
      } else {
        scrollToSection(id);
      }
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };
  const menuItems = [{
    id: "inicio",
    label: "Início"
  }, {
    id: "sobre",
    label: "Sobre"
  }, {
    id: "galeria",
    label: "Galeria"
  }, {
    id: "contato",
    label: "Contato"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background/80 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => handleNavigation("inicio")} className="flex items-center gap-3 group" aria-label="Ir para início">
            <img src="/logo.png" alt="Logo Mila Beauty Cosméticos" className="h-24 w-auto transition-transform duration-300 group-hover:scale-105" />
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map(item => <button key={item.id} onClick={() => handleNavigation(item.id)} className="text-foreground/80 hover:text-primary font-medium transition-colors duration-300 relative group">
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>)}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            {menuItems.map(item => <button key={item.id} onClick={() => handleNavigation(item.id)} className="block w-full text-left px-4 py-3 text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors duration-200">
                {item.label}
              </button>)}
          </nav>}
      </div>
    </header>;
};
export default Header;