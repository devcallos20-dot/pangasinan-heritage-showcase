import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

/**
 * ATOM — Button
 * The single interactive call-to-action used across the site.
 * It is POLYMORPHIC: given an `href` it renders a Next.js <Link> (client-side
 * navigation, no full reload); without one it renders a native <button>
 * (in-page actions such as submitting the search form). Every call site
 * imports one component instead of choosing between a link and a button by
 * hand.
 *
 * Accessibility: intrinsic padding keeps a ≥44×44px tap target (WCAG 2.5.5);
 * focus-visible ring is inherited from globals.css.
 */

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  // Gold is the one bold color — reserved for the primary action.
  primary:
    "bg-gold text-ink hover:bg-gold-deep active:bg-gold-deep font-semibold",
  // Quiet outline for the alternative action.
  secondary:
    "bg-transparent text-sand border border-sand/40 hover:border-gold hover:text-gold",
  ghost: "bg-transparent text-mist hover:text-sand",
};

const SIZES: Record<Size, string> = {
  md: "px-5 py-3 text-sm", // py-3 => ≥44px tall on touch
  lg: "px-7 py-3.5 text-base",
};

type SharedProps = {
  variant?: Variant;
  size?: Size;
  /** optional trailing icon (e.g. "arrow") */
  icon?: IconName;
  children: ReactNode;
};

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

function classes(variant: Variant, size: Size) {
  return [
    "inline-flex items-center justify-center gap-2 rounded-pill",
    "font-body leading-none transition-colors duration-200",
    "disabled:opacity-50 disabled:pointer-events-none select-none",
    VARIANTS[variant],
    SIZES[size],
  ].join(" ");
}

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", icon, children } = props;
  const className = classes(variant, size);
  const inner = (
    <>
      {children}
      {icon ? <Icon name={icon} size={18} /> : null}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, variant: _v, size: _s, icon: _i, children: _c, ...rest } = props;
    return (
      <Link href={href} className={className} {...rest}>
        {inner}
      </Link>
    );
  }

  const { variant: _v, size: _s, icon: _i, children: _c, href: _h, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={className} {...rest}>
      {inner}
    </button>
  );
}
