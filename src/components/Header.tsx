import { useState, useEffect } from "react";
import { Menu, X, MapPin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#productos", label: "Productos" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 py-3 shadow-lg backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="Detelaymadera" className="h-12 w-12 rounded-full object-cover" />
          <span className="hidden font-serif text-xl font-semibold text-foreground sm:block">
            Detelaymadera
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative font-medium text-foreground/80 transition-colors hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://instagram.com/detelaymadera"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 transition-colors hover:text-primary"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Ranchos</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-[72px] bg-background/98 backdrop-blur-lg transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="container mx-auto flex flex-col gap-4 px-4 py-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-4 pt-4 border-t border-border">
            <a
              href="https://instagram.com/detelaymadera"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/70"
            >
              <Instagram className="h-5 w-5" />
              <span>@detelaymadera</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
