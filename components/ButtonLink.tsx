import { ReactNode } from "react";
import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300";
  const variants = {
    primary:
      "bg-ink text-white shadow-soft hover:-translate-y-0.5 hover:bg-ocean",
    secondary:
      "border border-ink/15 bg-white text-ink hover:-translate-y-0.5 hover:border-ocean hover:text-ocean",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
