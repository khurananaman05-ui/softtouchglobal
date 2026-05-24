import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { productCategories } from "@/data/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Soft Touch Global product categories including terry towels, bath towels, hand towels, cotton towels, and premium home textile products for domestic and export markets.",
};

export default function ProductsPage() {
  return (
    <>
      {/* HERO SECTION */}
      <PageHero
        eyebrow="Our Products"
        title="Premium Towels & Home Textile Products for Domestic and Export Markets"
        description="Soft Touch Global offers premium-quality terry towels, bath towels, hand towels, cotton towels, and home textile products crafted for hospitality, wholesale, retail, and international buyers seeking quality, comfort, and professional sourcing support."
      />

      {/* PRODUCTS SECTION */}
      <section className="py-20">
        <Container className="space-y-12">

          <SectionHeading
            eyebrow="Product Range"
            title="Explore Our Premium Towel & Home Textile Collection"
            description="Discover premium towel and home textile categories designed for hospitality businesses, retailers, wholesalers, and export buyers looking for comfort, clean finishing, modern quality standards, and professional sourcing support."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>

        </Container>
      </section>
    </>
  );
}