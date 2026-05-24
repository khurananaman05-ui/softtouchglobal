import Link from "next/link";
import { company } from "@/data/site";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_1fr]">

        {/* LEFT SECTION */}
        <div className="space-y-4">
          <p className="font-display text-3xl">{company.name}</p>

          <p className="max-w-md text-sm leading-7 text-white/75">
            Soft Touch Global is a home textile sourcing and export-focused
            company helping domestic and international buyers discover
            premium-quality towels and textile products through professional
            coordination, smooth communication, and buyer-focused service.
          </p>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky">
              Business Identity
            </p>

            <p className="mt-2 text-sm leading-6 text-white/75">
              Built to create a strong and professional business presence,
              supporting buyer trust, sourcing discussions, wholesale
              opportunities, and long-term business relationships.
            </p>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky">
            Quick Links
          </p>

          <div className="mt-5 grid gap-3">

            <Link href="/" className="text-sm text-white/75 hover:text-white">
              Home
            </Link>

            <Link
              href="/about"
              className="text-sm text-white/75 hover:text-white"
            >
              About Us
            </Link>

            <Link
              href="/products"
              className="text-sm text-white/75 hover:text-white"
            >
              Products
            </Link>

            <Link
              href="/contact"
              className="text-sm text-white/75 hover:text-white"
            >
              Contact Us
            </Link>

            <Link
              href="/inquiry"
              className="text-sm text-white/75 hover:text-white"
            >
              Send Inquiry
            </Link>

          </div>
        </div>

        {/* CONTACT DETAILS */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky">
            Contact Details
          </p>

          <div className="mt-5 space-y-4 text-sm text-white/75">

            <p>{company.address}</p>

            <p>
              Email:{" "}
              <a
                href={`mailto:${company.email}`}
                className="hover:text-white"
              >
                {company.email}
              </a>
            </p>

            <p>
              Phone:{" "}
              <a
                href={`tel:${company.phone}`}
                className="hover:text-white"
              >
                {company.phone}
              </a>
            </p>

            <p>
              WhatsApp:{" "}
              <a
                href={`https://wa.me/${company.phone}`}
                className="hover:text-white"
              >
                {company.whatsapp}
              </a>
            </p>

          </div>
        </div>

      </Container>

      {/* BOTTOM */}
      <Container className="border-t border-white/10 py-6 text-sm text-white/55">
        <p>
          © 2026 Soft Touch Global. Premium towel & home textile sourcing
          solutions for domestic and international buyers.
        </p>
      </Container>
    </footer>
  );
}