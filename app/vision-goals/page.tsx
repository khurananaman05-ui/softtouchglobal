import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Vision & Goals",
  description:
    "Understand Soft Touch Global's vision, business goals, quality commitment, customer relationship priorities, and future expansion direction.",
};

const goalSections = [
  {
    title: "Vision Statement",
    description:
      "To grow Soft Touch Global into a trusted textile business identity that international buyers recognize for professionalism, product clarity, and dependable communication.",
  },
  {
    title: "Business Goals",
    description:
      "Build a strong company presence that supports wholesale, sourcing, and export-led inquiries while reflecting serious long-term commercial intent.",
  },
  {
    title: "Quality Commitment",
    description:
      "Maintain a brand impression centered on textile quality, absorbency, cotton feel, presentation standards, and careful product positioning.",
  },
  {
    title: "Customer Relationship Goals",
    description:
      "Develop buyer relationships through trust, timely responses, professional interactions, and a clear willingness to understand product requirements.",
  },
  {
    title: "Future Expansion Goals",
    description:
      "Extend our product communication, export readiness, and textile category coverage while keeping a refined, premium business image at the center.",
  },
];

export default function VisionGoalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Vision & Goals"
        title="A long-term textile outlook built on credibility, quality, and steady growth."
        description="This page highlights the business direction behind Soft Touch Global and reinforces the seriousness of our commitment to buyers and future opportunities."
      />

      <section className="py-20">
        <Container className="space-y-12">
          <SectionHeading
            eyebrow="Strategic Direction"
            title="What we are working toward"
            description="Our goals are framed to make Soft Touch Global feel dependable, growth-minded, and aligned with the expectations of modern textile buyers."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {goalSections.map((item) => (
              <div
                key={item.title}
                className="rounded-[30px] border border-ink/8 bg-white p-8 shadow-soft"
              >
                <h2 className="font-display text-3xl text-ink">{item.title}</h2>
                <p className="mt-4 text-base leading-8 text-slateText/80">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
