import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Inquiry",
  description:
    "Send your towel and home textile sourcing inquiries to Soft Touch Global for domestic, wholesale, and export requirements.",
};

const inquiryReasons = [
  "Product Inquiry",
  "Wholesale Requirement",
  "Export Requirement",
  "Custom Order",
  "Business Partnership",
];

export default function InquiryPage() {
  return (
    <>
      {/* HERO SECTION */}
      <PageHero
        eyebrow="Inquiry"
        title="Connect With Us For Home Textile & Towel Requirements"
        description="Share your sourcing, wholesale, export, or custom product requirements with Soft Touch Global. Our team will help you with professional support and smooth communication."
      />

      {/* INQUIRY SECTION */}
      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-start">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            <SectionHeading
              eyebrow="Get In Touch"
              title="Professional support for towel & home textile buyers"
              description="Whether you are looking for wholesale towel sourcing, export support, hospitality textile products, or custom business requirements, we are here to assist you with smooth communication and quality-focused service."
            />

            <div className="rounded-[32px] border border-ink/8 bg-cloud/40 p-8">

              <h3 className="font-display text-[28px] text-ink">
                Inquiry Categories
              </h3>

              <div className="mt-6 space-y-4">
                {inquiryReasons.map((item) => (
                  <div
                    key={item}
                    className="rounded-[20px] border border-ink/10 bg-white p-4 text-[17px] font-medium text-ink"
                  >
                    ✔ {item}
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="rounded-[32px] border border-ink/8 bg-white p-8 shadow-soft">
            <InquiryForm />
          </div>

        </Container>
      </section>
    </>
  );
}