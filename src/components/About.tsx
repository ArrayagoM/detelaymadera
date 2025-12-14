import { Heart, Truck, CreditCard, Award } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Hecho con Amor",
    description: "Cada pieza está creada con dedicación y atención al detalle.",
  },
  {
    icon: Truck,
    title: "Envíos",
    description: "Realizamos envíos a toda la zona y alrededores.",
  },
  {
    icon: CreditCard,
    title: "3 Cuotas Sin Interés",
    description: "Financiá tu compra de la manera más cómoda.",
  },
  {
    icon: Award,
    title: "Calidad Artesanal",
    description: "Materiales seleccionados y terminaciones impecables.",
  },
];

const About = () => {
  return (
    <section id="nosotros" className="bg-secondary/50 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <span className="mb-3 inline-block font-medium uppercase tracking-widest text-primary opacity-0 animate-slide-right" style={{ animationFillMode: 'forwards' }}>
              Sobre Nosotros
            </span>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground opacity-0 animate-slide-right md:text-4xl lg:text-5xl" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              Diseño, Calidez y <span className="text-gradient">Naturaleza</span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground opacity-0 animate-slide-right" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              En <strong>Detelaymadera</strong> creamos muebles de madera y piezas textiles que transforman tu hogar en un espacio acogedor y lleno de carácter. Desde Ranchos, llevamos el estilo natural y artesanal a cada rincón.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground opacity-0 animate-slide-right" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              Combinamos la calidez de la madera con textiles cuidadosamente seleccionados para que encuentres exactamente lo que tu espacio necesita.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group rounded-2xl bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg opacity-0 animate-scale-in"
                style={{ animationDelay: `${400 + index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
