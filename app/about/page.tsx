import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Soft Touch Global, our home textile sourcing support, product coordination, and export solutions for domestic and international buyers.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO SECTION */}
      <PageHero
        eyebrow="About Soft Touch Global"
        title="Trusted Home Textile Sourcing & Export Support For Modern Buyers"
        description="Soft Touch Global helps businesses source premium-quality towels and home textile products through trusted manufacturing partnerships, smooth coordination, and customer-focused service."
      />

      {/* ABOUT SECTION */}
      <section className="py-20">
        <Container className="grid gap-14 lg:grid-cols-[1fr_0.82fr] lg:items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-10">

            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-ocean/80 sm:text-base">
                Who We Are
              </p>

              <h2 className="max-w-[680px] font-display text-[26px] leading-[1.12] tracking-[-0.02em] text-ink font-semibold sm:text-[36px] lg:text-[44px]">
                Building long-term home textile partnerships through quality,
                trust, and professional sourcing support.
              </h2>

              <p className="max-w-[760px] text-[17px] leading-[1.9] text-slateText/85">
                Soft Touch Global works closely with trusted manufacturing
                partners to provide smooth and professional sourcing support for
                buyers looking for quality towels and home textile products.
              </p>

              <p className="max-w-[760px] text-[17px] leading-[1.9] text-slateText/85">
                From sourcing and production coordination to packaging and
                dispatch management, we help businesses simplify the home
                textile procurement process while maintaining quality,
                timelines, and buyer satisfaction at every stage.
              </p>
            </div>

            {/* OUR STORY */}
            <div className="rounded-[32px] border border-ink/8 bg-cloud/40 p-8 sm:p-10">

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-ocean/80 sm:text-base">
                Our Story
              </p>

              <h3 className="mt-4 max-w-[620px] font-display text-[28px] leading-[1.18] text-ink sm:text-[36px]">
                Created to make home textile sourcing more transparent,
                professional, and buyer-focused.
              </h3>

              <p className="mt-5 max-w-[760px] text-[17px] leading-[1.9] text-slateText/85">
                Soft Touch Global was established to help businesses source
                quality home textile products without the complexity and
                uncertainty often involved in the market.
              </p>

              <p className="mt-5 max-w-[760px] text-[17px] leading-[1.9] text-slateText/85">
                We support domestic and international buyers with quality towel
                and home textile sourcing solutions through trusted production
                partners, smooth coordination, and professional communication.
              </p>

              <p className="mt-5 max-w-[760px] text-[17px] leading-[1.9] text-slateText/85">
                Whether serving hospitality businesses, retailers,
                wholesalers, or export buyers, our focus is to provide
                efficient, transparent, and customer-focused sourcing support.
              </p>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="h-fit rounded-[32px] border border-ink/8 bg-white p-8 shadow-soft">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-ocean/80 sm:text-base">
              Why Buyers Choose Us
            </p>

            <h3 className="mt-4 font-display text-[28px] leading-[1.18] text-ink sm:text-[34px]">
              Professional sourcing support built around quality and trust.
            </h3>

            <div className="mt-8 space-y-4">

              {[
                "✔ Trusted home textile sourcing network",
                "✔ Smooth export & order coordination",
                "✔ Quality-focused product selection",
                "✔ Clear communication & professional service",
                "✔ Support for domestic & international buyers",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-ink/10 bg-cloud/40 p-5 text-[17px] font-medium text-ink"
                >
                  {item}
                </div>
              ))}

            </div>
          </div>

        </Container>
      </section>
    </>
  );
}