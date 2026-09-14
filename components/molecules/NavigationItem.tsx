"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * MOLECULE — Navigation Item
 * A single nav link that knows whether it is the current page. It combines
 * the Link primitive with active-state logic and exposes that state to
 * assistive tech via `aria-current` — so the highlight is not colour-only.
 */
type NavigationItemProps = {
  href: string;
  children: ReactNode;
  /** when true, also match nested routes (e.g. /sites/anything) */
  matchNested?: boolean;
  onNavigate?: () => void;
};

export function NavigationItem({
  href,
  children,
  matchNested = false,
  onNavigate,
}: NavigationItemProps) {
  const pathname = usePathname();
  const isActive = matchNested
    ? pathname === href || pathname.startsWith(`${href}/`)
    : pathname === href;

  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className={[
        "relative font-body text-sm transition-colors duration-200 py-2",
        isActive ? "text-gold" : "text-sand/80 hover:text-sand",
      ].join(" ")}
    >
      {children}
      {/* underline doubles as a non-colour active cue */}
      <span
        aria-hidden
        className={[
          "absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-200",
          isActive ? "w-full" : "w-0",
        ].join(" ")}
      />
    </Link>
  );
}
