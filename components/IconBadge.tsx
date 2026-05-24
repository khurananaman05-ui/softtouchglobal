type IconBadgeProps = {
  title: string;
  description: string;
  index: number;
};

const icons = [
  <path key="1" d="M5 12.5 9.2 17 19 7.5" />,
  <path key="2" d="M12 4v16M4 12h16" />,
  <path key="3" d="M6 19.5h12m-9-15h6l4 5v10H5v-10l4-5Z" />,
  <path key="4" d="M12 20c4-2.3 7-5.5 7-10V5l-7-2-7 2v5c0 4.5 3 7.7 7 10Z" />,
];

export function IconBadge({ title, description, index }: IconBadgeProps) {
  return (
    <div className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-soft backdrop-blur">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky text-ink">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          {icons[index % icons.length]}
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slateText/80">{description}</p>
    </div>
  );
}
