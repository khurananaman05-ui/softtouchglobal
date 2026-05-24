type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow ? (
        <span className="inline-flex rounded-full border border-ocean/20 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ocean">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-base leading-7 text-slateText/80 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
