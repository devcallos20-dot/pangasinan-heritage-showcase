/**
 * ATOM — Color Tokens
 * The palette as data, plus a <ColorTokens /> preview that renders the
 * swatches. Every other component pulls its colour from these tokens (via the
 * Tailwind theme, which mirrors them), so this list is the one place a brand
 * colour is ever defined.
 */

export type ColorToken = {
  name: string;
  varName: string;
  hex: string;
  role: string;
  /** true when white text should sit on the swatch (dark background) */
  onDark?: boolean;
};

export const COLOR_TOKENS: ColorToken[] = [
  { name: "Forest", varName: "--color-forest", hex: "#0C1B14", role: "App background", onDark: true },
  { name: "Pine", varName: "--color-pine", hex: "#12261C", role: "Raised surface", onDark: true },
  { name: "Moss", varName: "--color-moss", hex: "#1E6B4F", role: "Primary green", onDark: true },
  { name: "Fern", varName: "--color-fern", hex: "#3E9E76", role: "Hover green" },
  { name: "Gold", varName: "--color-gold", hex: "#E4B84A", role: "Accent / CTA" },
  { name: "Gold Deep", varName: "--color-gold-deep", hex: "#C99A2E", role: "Pressed / gradient" },
  { name: "Sand", varName: "--color-sand", hex: "#F3EFE4", role: "Text on dark" },
  { name: "Ink", varName: "--color-ink", hex: "#0F1A14", role: "Text on light", onDark: true },
  { name: "Mist", varName: "--color-mist", hex: "#9DB3A6", role: "Muted text" },
];

export function ColorTokens() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {COLOR_TOKENS.map((t) => (
        <li
          key={t.varName}
          className="overflow-hidden rounded-xl border border-hairline bg-pine"
        >
          <div
            className="flex h-16 items-end justify-end p-2"
            style={{ backgroundColor: t.hex }}
          >
            <span
              className={`font-body text-[11px] ${
                t.onDark ? "text-sand/80" : "text-ink/70"
              }`}
            >
              {t.hex}
            </span>
          </div>
          <div className="p-3">
            <p className="font-display text-sm text-sand">{t.name}</p>
            <p className="font-body text-xs text-mist">{t.role}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
