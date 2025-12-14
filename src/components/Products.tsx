import ProductCard from "./ProductCard";
import productAlfombra from "@/assets/product-alfombra.png";
import productReloj from "@/assets/product-reloj.png";
import productRack from "@/assets/product-rack.png";
import productMuebles from "@/assets/product-muebles.png";
import productMesa from "@/assets/product-mesa.png";
import productManta from "@/assets/product-manta.png";
import productAlmohadones from "@/assets/product-almohadones.png";

const products = [
  {
    image: productAlfombra,
    name: "Alfombra Hola",
    description: "Felpudo de fibra natural",
  },
  {
    image: productReloj,
    name: "Reloj de Pared",
    description: "Marco de madera natural",
  },
  {
    image: productRack,
    name: "Rack TV",
    description: "170 x 70 x 30 cm",
  },
  {
    image: productMuebles,
    name: "Muebles de Guardado",
    description: "Madera y blanco",
  },
  {
    image: productMesa,
    name: "Mesa de Comedor",
    description: "Madera maciza con patas cruzadas",
  },
  {
    image: productManta,
    name: "Manta Rayada",
    description: "Textil suave con flecos",
  },
  {
    image: productAlmohadones,
    name: "Almohadones Decorativos",
    description: "Variedad de colores y texturas",
  },
];

const Products = () => {
  return (
    <section id="productos" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-3 inline-block font-medium uppercase tracking-widest text-primary opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
            Catálogo
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground opacity-0 animate-fade-up md:text-4xl lg:text-5xl" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            Nuestros Productos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground opacity-0 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Cada pieza está hecha con amor y dedicación. Descubrí la calidez de lo natural en tu hogar.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard
              key={product.name}
              {...product}
              delay={300 + index * 100}
            />
          ))}
        </div>

        {/* More Products CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://instagram.com/detelaymadera"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80"
          >
            Ver más en Instagram
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
