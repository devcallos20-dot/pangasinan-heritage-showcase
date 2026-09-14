import type { ElementType, ReactNode } from "react";

/**
 * ATOM — Typography
 * One place that owns the type scale so headings and body never drift.
 * `Heading` sets size by visual `level` but keeps the semantic tag separate
 * (`as`) — you can render an <h2> that looks like a display without breaking
 * the document outline (accessibility).
 */

type HeadingProps = {
  level?: 1 | 2 | 3 | 4;
  as?: ElementType;
  className?: string;
  /** optional anchor id so a heading can label a section (aria-labelledby) */
  id?: string;
  children: ReactNode;
};

const HEADING_SIZES: Record<NonNullable<HeadingProps["level"]>, string> = {
  1: "text-display font-display font-semibold tracking-tight",
  2: "text-3xl md:text-4xl font-display font-semibold tracking-tight",
  3: "text-xl md:text-2xl font-display font-medium",
  4: "text-lg font-display font-medium",
};

export function Heading({
  level = 2,
  as,
  className = "",
  id,
  children,
}: HeadingProps) {
  const Tag = (as ?? (`h${level}` as ElementType)) as ElementType;
  return (
    <Tag id={id} className={`${HEADING_SIZES[level]} text-sand ${className}`}>
      {children}
    </Tag>
  );
}

type TextProps = {
  tone?: "default" | "muted";
  size?: "sm" | "base" | "lg";
  className?: string;
  children: ReactNode;
};

const TEXT_SIZES = { sm: "text-sm", base: "text-base", lg: "text-lg" };

export function Text({
  tone = "default",
  size = "base",
  className = "",
  children,
}: TextProps) {
  const color = tone === "muted" ? "text-mist" : "text-sand/90";
  return (
    <p className={`font-body leading-relaxed ${TEXT_SIZES[size]} ${color} ${className}`}>
      {children}
    </p>
  );
}

/**
 * Eyebrow: a small kicker above a heading. Sentence case (not ALL CAPS) with
 * a gold tick, so it signals section context without the generic tracked-out
 * caps label.
 */
export function Eyebrow({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-body text-eyebrow text-gold ${className}`}
    >
      <span aria-hidden className="h-px w-6 bg-gold" />
      {children}
    </span>
  );
}
