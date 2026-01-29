import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const businessHours = [
    { day: "Monday - Friday", hours: "8 AM - 5 PM" },
    { day: "Saturday", hours: "8 AM - 1 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="NTH Bricks" className="h-16 w-auto mb-4" />
            <p className="text-primary-foreground/80 text-sm">
              A reliable brick manufacturing company specializing in high-quality, durable bricks for residential, commercial, and industrial construction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Products</Link></li>
              <li><Link to="/gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                <span className="text-primary-foreground/80">Kofi, Koffi Annan Rd, Maseru</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                <a href="tel:27002907" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  2700 2907
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
            <ul className="space-y-2">
              {businessHours.map((item) => (
                <li key={item.day} className="flex items-start gap-3">
                  <Clock className="h-5 w-5 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-primary-foreground/80">{item.day}</span>
                    <span className="text-sm text-primary-foreground/60">{item.hours}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} NTH Bricks Pty Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
