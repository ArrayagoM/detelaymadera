import WhatsAppButton from "./WhatsAppButton";

interface ProductCardProps {
  image: string;
  name: string;
  description?: string;
  price?: string;
  delay?: number;
}

const ProductCard = ({ image, name, description, price, delay = 0 }: ProductCardProps) => {
  return (
    <article 
      className="group card-hover overflow-hidden rounded-2xl bg-card opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <WhatsAppButton productName={name} />
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl font-medium text-foreground">{name}</h3>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
        {price && (
          <p className="mt-2 text-lg font-semibold text-primary">{price}</p>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
