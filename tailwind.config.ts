import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slateText: "#2A3642",
        cloud: "#F4F7F8",
        mist: "#E4EBED",
        sky: "#D7E8F0",
        ocean: "#6D91A5",
        sand: "#E9DED1",
        flax: "#C9B6A6",
        ink: "#163042",
      },
      boxShadow: {
        soft: "0 18px 40px -24px rgba(22, 48, 66, 0.35)",
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at top, rgba(255,255,255,0.7), rgba(255,255,255,0)), linear-gradient(135deg, rgba(215,232,240,0.55), rgba(233,222,209,0.45))",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-cormorant)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
