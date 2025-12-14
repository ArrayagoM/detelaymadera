import { Instagram, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-foreground py-16 text-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src={logo} alt="Detelaymadera" className="h-12 w-12 rounded-full object-cover" />
              <span className="font-serif text-xl font-semibold">Detelaymadera</span>
            </div>
            <p className="text-background/70">
              Muebles de madera y decoración textil artesanal. Transformamos espacios con calidez y estilo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-background/70 transition-colors hover:text-primary">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#productos" className="text-background/70 transition-colors hover:text-primary">
                  Productos
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-background/70 transition-colors hover:text-primary">
                  Nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com/detelaymadera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-background/70 transition-colors hover:text-primary"
                >
                  <Instagram className="h-5 w-5" />
                  @detelaymadera
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5491112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-background/70 transition-colors hover:text-primary"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <MapPin className="h-5 w-5" />
                Ranchos, Buenos Aires
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-background/10 pt-8 text-center text-sm text-background/50">
          <p>© {currentYear} Detelaymadera. Todos los derechos reservados.</p>
          <p className="mt-2">💳 3 cuotas sin interés disponibles</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
