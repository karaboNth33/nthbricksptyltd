import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="NTH Bricks" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
                activeClassName="text-primary"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:27002907" className="flex items-center gap-2 text-primary font-semibold">
              <Phone className="h-4 w-4" />
              2700 2907
            </a>
            <Button asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                  activeClassName="text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <a href="tel:27002907" className="flex items-center gap-2 text-primary font-semibold py-2">
                <Phone className="h-4 w-4" />
                2700 2907
              </a>
              <Button asChild className="mt-2">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Get a Quote</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
