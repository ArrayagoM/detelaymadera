import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-secondary to-background"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-sage/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center opacity-0 animate-scale-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          <img
            src={logo}
            alt="Detelaymadera Logo"
            className="h-40 w-40 rounded-full object-cover shadow-2xl ring-4 ring-primary/20 md:h-52 md:w-52"
          />
        </div>

        {/* Title */}
        <h1 className="mb-4 font-serif text-4xl font-bold text-foreground opacity-0 animate-fade-up md:text-6xl lg:text-7xl" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
          <span className="text-gradient">Detelaymadera</span>
        </h1>

        {/* Tagline */}
        <p className="mb-6 text-xl text-muted-foreground opacity-0 animate-fade-up md:text-2xl" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          Muebles y Deco Textil
        </p>

        {/* Location & Benefits */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium shadow-sm">
            📌 Ranchos
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            💳 3 cuotas sin interés
          </span>
        </div>

        {/* CTA */}
        <a
          href="#productos"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl opacity-0 animate-fade-up"
          style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}
        >
          Ver Productos
        </a>
      </div>

      {/* Scroll indicator */}
      <a
        href="#productos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
