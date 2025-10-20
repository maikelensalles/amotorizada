import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  title: string;
  discount: string;
  link: string;
}

export const ProductCard = ({ image, title, discount, link }: ProductCardProps) => {
  return (
    <article
      className="group relative bg-card rounded-2xl overflow-hidden border border-border
                 hover:border-primary transition-all duration-300 hover:shadow-2xl"
    >
      {/* Desconto */}
      <div className="absolute top-3 right-3 z-10">
        <Badge className="bg-accent text-accent-foreground font-bold text-xs sm:text-sm px-2 py-1 shadow">
          {discount}
        </Badge>
      </div>

      {/* Imagem (ratio estável + cover) */}
      <div className="overflow-hidden bg-secondary/20">
        {/* 4:3 no mobile para respirar, quadrado do sm pra cima */}
        <div className="aspect-[4/3] sm:aspect-square w-full">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover will-change-transform
                       transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-4 space-y-3">
        <h3
          className="font-montserrat font-bold text-black/90 text-base sm:text-lg leading-snug
                     line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]"
          title={title}
        >
          {title}
        </h3>

        <Button asChild variant="hero" size="lg" className="w-full whitespace-nowrap">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Comprar agora 🔥
          </a>
        </Button>
      </div>
    </article>
  );
};
