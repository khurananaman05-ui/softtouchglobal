"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-white/95 backdrop-blur-xl">
      <Container className="flex min-h-[88px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-4" aria-label="Soft Touch Global">
          <div className="relative h-20 w-48">
           <Image
            src="/images/logo/logo.png"
            alt="Soft Touch Global Logo"
            fill
            className="object-contain"
            priority
           />
          </div>

          <div>
            <p className="font-display text-2xl leading-none text-ink">
              Soft Touch Global
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-cloud text-ink"
                    : "text-slateText hover:bg-cloud/70 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/inquiry">Send Inquiry</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-ink/10 text-ink lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="h-5 w-5"
          >
            {isOpen ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6 6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </Container>

      {isOpen ? (
        <div className="border-t border-ink/5 bg-white lg:hidden">
          <Container className="flex flex-col gap-2 py-4">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-cloud text-ink"
                      : "text-slateText hover:bg-cloud/70 hover:text-ink"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <ButtonLink href="/inquiry" className="mt-2 w-full">
              Send Inquiry
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}