import Image from "next/image";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Soft Touch Global homepage with premium textile sourcing and export support.",
};

export default function HomePage() {
  return (
    <>
      {/* HERO BANNER */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(233,241,247,0.65)_0%,rgba(255,255,255,0.95)_45%,rgba(249,245,239,0.55)_100%)]" />

        <Container className="relative py-10 sm:py-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-ocean/25 bg-white px-6 py-2.5 text-base font-bold uppercase tracking-[0.35em] text-ocean shadow-sm">
                Home Textile Company
              </span>

              <h1 className="max-w-3xl font-display text-5xl leading-none text-ink sm:text-6xl xl:text-7xl">
                Soft Touch Global
              </h1>

              <p className="max-w-[850px] text-[18px] leading-[1.9] text-slateText/85 text-justify font-normal">
                Soft Touch Global works closely with trusted textile production
                partners to deliver export-quality towels and home textile
                products to buyers across different markets. From product
                sourcing and quality coordination to packaging and dispatch
                management, we ensure every order is handled with
                professionalism, consistency, and attention to buyer
                requirements.
              </p>

              <div className="flex flex-wrap gap-4">
                <ButtonLink href="/products">
                  Explore Products
                </ButtonLink>

                <ButtonLink href="/contact" variant="secondary">
                  Contact Us
                </ButtonLink>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="overflow-hidden rounded-[32px] border border-ink/8 bg-white shadow-soft">
              <div className="relative h-[340px] sm:h-[420px] lg:h-[500px]">
                <Image
                  src="/images/home/hero.jpg"
                  alt="Soft Touch Global Towels"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}