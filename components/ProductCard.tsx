import Image from "next/image";
import { Product } from "@/data/site";
import { ButtonLink } from "@/components/ButtonLink";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-ink/8 bg-white shadow-soft transition duration-300 hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden bg-cloud">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-4 p-6">
        <span className="inline-flex rounded-full bg-sky/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-ink">
          {product.category}
        </span>
        <h3 className="text-2xl font-semibold text-ink">{product.title}</h3>
        <p className="text-sm leading-6 text-slateText/80">{product.description}</p>
        <ButtonLink href="/inquiry" variant="secondary">
          Send Inquiry
        </ButtonLink>
      </div>
    </article>
  );
}
