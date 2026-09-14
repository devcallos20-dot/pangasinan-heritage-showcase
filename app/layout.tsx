import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { HeaderNavigation } from "@/components/organisms/HeaderNavigation";

/**
 * Typography loaded with next/font so the CSS variables the Tailwind theme
 * references (--font-display / --font-body) are self-hosted and render-blocking
 * free. Space Grotesk carries the "technological" character; Inter keeps body
 * copy legible at small sizes on mobile.
 */
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pangasinan Heritage — Digital Showcase",
  description:
    "Discover Pangasinan's iconic heritage sites: the Hundred Islands, Cape Bolinao Lighthouse, Balungao Springs, and more. Built mobile-first for fast browsing on any connection.",
  openGraph: {
    title: "Pangasinan Heritage — Digital Showcase",
    description:
      "Discover Pangasinan's iconic heritage sites, built mobile-first for any connection.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        {/* Skip link — first focusable element (WCAG 2.4.1) */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:font-body focus:text-ink"
        >
          Skip to content
        </a>
        <HeaderNavigation />
        <main id="main">{children}</main>
        <footer className="mt-24 border-t border-hairline bg-pine">
          <div className="mx-auto flex max-w-shell flex-col gap-2 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
            <p className="font-display text-sm text-sand">
              Pangasinan<span className="text-gold">Heritage</span>
            </p>
            <p className="font-body text-xs text-mist">
              A digital initiative of the Pangasinan Provincial Tourism Office.
              Photos are placeholders pending licensed imagery.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
