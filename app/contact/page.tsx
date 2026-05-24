import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Soft Touch Global for product inquiries, wholesale requirements, export discussions, and home textile sourcing support.",
};

const contactCards = [
  {
    label: "Office Address",
    value: company.address,
    href: undefined,
  },
  {
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    label: "Phone",
    value: company.phone,
    href: `tel:${company.phone}`,
  },
  {
    label: "WhatsApp",
    value: company.whatsapp,
    href: `https://wa.me/${company.whatsapp}`,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO SECTION */}
      <PageHero
        eyebrow="Contact Us"
        title="Let’s Connect For Home Textile & Towel Requirements"
        description="Reach out to Soft Touch Global for product inquiries, wholesale sourcing, export discussions, and professional support for towel and home textile requirements."
      />

      {/* CONTACT SECTION */}
      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* INTRO CARD */}
            <div className="rounded-[32px] border border-ink/8 bg-cloud/40 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-ocean/80">
                Business Communication
              </p>

              <h2 className="mt-4 font-display text-[34px] leading-[1.15] text-ink">
                Professional support for buyers, sourcing discussions, and business inquiries.
              </h2>

              <p className="mt-4 text-[17px] leading-[1.9] text-slateText/85">
                Whether you are looking for wholesale towel sourcing,
                export coordination, hospitality textile products, or
                general business discussions, our team is here to assist
                you with smooth communication and buyer-focused support.
              </p>
            </div>

            {/* CONTACT CARDS */}
            {contactCards.map((item) => (
              <div
                key={item.label}
                className="rounded-[28px] border border-ink/8 bg-white p-6 shadow-soft"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ocean/80">
                  {item.label}
                </p>

                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-3 block text-[17px] leading-8 text-slateText/85 transition hover:text-ocean"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-3 text-[17px] leading-8 text-slateText/85">
                    {item.value}
                  </p>
                )}
              </div>
            ))}

          </div>

          {/* RIGHT SIDE */}
          <div className="rounded-[32px] border border-ink/8 bg-white p-2 shadow-soft">
            <InquiryForm
              compact
              title="Send Us a Message"
              description="Use this form for product inquiries, quotation requests, export discussions, wholesale requirements, or any general business communication."
            />
          </div>

        </Container>
      </section>
    </>
  );
}