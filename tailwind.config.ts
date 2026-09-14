import type { Config } from "tailwindcss";

/**
 * Design tokens for The Pangasinan Heritage Digital Showcase.
 * Gold = lighthouse beam + West Philippine Sea sunset.
 * Green = the province's islands, coves, and landscapes.
 * The palette is exposed both as Tailwind colors AND as CSS variables
 * (see app/globals.css) so tokens stay the single source of truth.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#0C1B14", // deepest background (near-black warm green)
        pine: "#12261C", // raised surface
        moss: "#1E6B4F", // primary interactive green
        fern: "#3E9E76", // hover / lighter green
        gold: "#E4B84A", // accent — the single bold color
        "gold-deep": "#C99A2E", // pressed / gradient stop
        sand: "#F3EFE4", // warm off-white text on dark
        ink: "#0F1A14", // text on light surfaces
        mist: "#9DB3A6", // muted secondary text
        hairline: "#22392C", // subtle borders on dark
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Type scale (major third, 1.25) tuned mobile-first.
        eyebrow: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.12em" }],
        display: ["clamp(2.25rem, 6vw, 3.75rem)", { lineHeight: "1.05" }],
      },
      borderRadius: {
        pill: "999px",
      },
      boxShadow: {
        beam: "0 0 0 1px rgba(228,184,74,0.25), 0 18px 40px -18px rgba(228,184,74,0.35)",
        raise: "0 12px 30px -16px rgba(0,0,0,0.55)",
      },
      maxWidth: {
        shell: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
