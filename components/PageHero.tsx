import { ReactNode } from "react";
import { Container } from "@/components/Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

export function PageHero({ eyebrow, title, description, aside }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-grain py-20 sm:py-24">
      <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-sky/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-sand/55 blur-3xl" />
      <Container className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-ocean/15 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ocean">
            {eyebrow}
          </span>
          <h1 className="max-w-4xl font-display text-5xl leading-none text-ink sm:text-6xl">
            {title}
          </h1>
          <p className="max-w-3xl text-base leading-8 text-slateText/80 sm:text-lg">
            {description}
          </p>
        </div>
        {aside ? <div>{aside}</div> : null}
      </Container>
    </section>
  );
}
