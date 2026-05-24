import type { Metadata } from "next";
import { ReactNode } from "react";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.softtouchglobal.com"),
  title: {
    default: "Soft Touch Global | Trusted Textile Partner",
    template: "%s | Soft Touch Global",
  },
  description:
    "Soft Touch Global is a professional textile company website presenting towel and cotton-based product categories, business values, and inquiry-ready contact points for global buyers.",
  keywords: [
    "textile company",
    "bath towels",
    "hand towels",
    "terry towels",
    "cotton towels",
    "textile products",
    "textile exporter",
    "Soft Touch Global",
  ],
  openGraph: {
    title: "Soft Touch Global | Trusted Textile Partner",
    description:
      "Professional textile presentation for buyers seeking dependable towel and cotton-based sourcing conversations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${cormorant.variable} bg-white text-slateText antialiased`}
      >
        <div className="relative min-h-screen overflow-x-clip bg-[linear-gradient(180deg,#ffffff_0%,#f9fbfb_42%,#ffffff_100%)]">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
