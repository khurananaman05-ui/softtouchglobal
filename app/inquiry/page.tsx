import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";

const inquiryReasons = [
  "Product Inquiry",
  "Wholesale Requirement",
  "Export Requirement",
  "Custom Order",
  "Business Partnership",
];

export const metadata: Metadata = {
  title: "Inquiry",
  description:
    "Send your business inquiry to Soft Touch Global for terry towels, bath towels, cotton towels, and other home textile product requirements.",
};

export default function InquiryPage() {
  return (
    <>
      <PageHero
        eyebrow="Business Inquiry"
        title="Send Us Your Home Textile Requirement"
        description="Use this page to share your product interest, quantity requirement, and business details. Our team will review your inquiry and respond with the right sourcing support."
      />

      <section className="py-20">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          
          <InquiryForm />

          <aside className="rounded-[32px] border border-ink/8 bg-ink p-8 text-white shadow-soft">
            <p className="text-lg font-semibold uppercase tracking-[0.35em] text-sky">
              Why Send an Inquiry
            </p>

            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Start your business discussion with the right product details.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/80">
              Whether you are looking for terry towels, bath towels, cotton towels,
              or other home textile products, this inquiry form helps us understand
              your requirement clearly and respond with the right information.
            </p>

            <div className="mt-8 space-y-4">
              {inquiryReasons.map((reason) => (
                <div
                  key={reason}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-5 text-lg font-medium leading-8 text-white/80"
                >
                  {reason}
                </div>
              ))}
            </div>
          </aside>

        </Container>
      </section>
    </>
  );
}