type InquiryFormProps = {
  title?: string;
  description?: string;
  compact?: boolean;
};

export function InquiryForm({
  title = "Start Your Textile Inquiry",
  description = "Share your product interest, expected quantity, and business details so we can continue the conversation professionally.",
  compact = false,
}: InquiryFormProps) {
  return (
    <div className="rounded-[32px] border border-ink/8 bg-white p-6 shadow-soft sm:p-8">
      <div className="max-w-2xl">
        <h3 className="font-display text-3xl text-ink">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slateText/80">{description}</p>
      </div>

      <form className="mt-8 grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-ink">
          Name
          <input
            type="text"
            placeholder="Your full name"
            className="h-12 rounded-2xl border border-ink/10 bg-cloud/50 px-4 text-slateText outline-none transition focus:border-ocean focus:bg-white"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-ink">
          Company Name
          <input
            type="text"
            placeholder="Your company"
            className="h-12 rounded-2xl border border-ink/10 bg-cloud/50 px-4 text-slateText outline-none transition focus:border-ocean focus:bg-white"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-ink">
          Email
          <input
            type="email"
            placeholder="you@company.com"
            className="h-12 rounded-2xl border border-ink/10 bg-cloud/50 px-4 text-slateText outline-none transition focus:border-ocean focus:bg-white"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-ink">
          Phone
          <input
            type="tel"
            placeholder="+91 00000 00000"
            className="h-12 rounded-2xl border border-ink/10 bg-cloud/50 px-4 text-slateText outline-none transition focus:border-ocean focus:bg-white"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-ink">
          Product Interest
          <input
            type="text"
            placeholder="Bath Towels, Terry Towels..."
            className="h-12 rounded-2xl border border-ink/10 bg-cloud/50 px-4 text-slateText outline-none transition focus:border-ocean focus:bg-white"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-ink">
          Quantity
          <input
            type="text"
            placeholder="Approximate order volume"
            className="h-12 rounded-2xl border border-ink/10 bg-cloud/50 px-4 text-slateText outline-none transition focus:border-ocean focus:bg-white"
          />
        </label>

        <label className={`grid gap-2 text-sm font-medium text-ink ${compact ? "md:col-span-2" : "md:col-span-2"}`}>
          Message
          <textarea
            rows={compact ? 5 : 7}
            placeholder="Tell us about your product, quality, or sourcing requirements."
            className="rounded-[24px] border border-ink/10 bg-cloud/50 px-4 py-3 text-slateText outline-none transition focus:border-ocean focus:bg-white"
          />
        </label>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-ocean"
          >
            Send Inquiry
          </button>
        </div>
      </form>
    </div>
  );
}
