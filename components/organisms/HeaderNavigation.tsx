"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "../atoms/Icon";
import { NavigationItem } from "../molecules/NavigationItem";

/**
 * ORGANISM — Header Navigation
 * The site's primary wayfinding. Composes the wordmark, a set of Navigation
 * Item molecules, and a mobile disclosure menu. Mobile-first: links collapse
 * behind a toggle under `md`, and the panel is a labelled region that the
 * toggle controls via `aria-expanded` / `aria-controls`.
 */

const LINKS = [
  { href: "/", label: "Home", matchNested: false },
  { href: "/sites/hundred-islands", label: "Sites", matchNested: false },
  { href: "/#plan", label: "Plan a visit", matchNested: false },
  { href: "/#story", label: "The story", matchNested: false },
];

function Wordmark() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-sand"
    >
      <span className="beam text-gold">
        <Icon name="beam" size={22} title="Pangasinan Heritage" />
      </span>
      Pangasinan<span className="text-gold">Heritage</span>
    </Link>
  );
}

export function HeaderNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-forest/85 backdrop-blur">
      <div className="mx-auto flex max-w-shell items-center justify-between px-4 py-3 md:px-6">
        <Wordmark />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <NavigationItem key={l.href} href={l.href} matchNested={l.matchNested}>
              {l.label}
            </NavigationItem>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-sand md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={24} title={open ? "Close menu" : "Open menu"} />
        </button>
      </div>

      {/* Mobile panel */}
      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Primary"
          className="border-t border-hairline bg-pine px-4 py-3 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <NavigationItem
                  href={l.href}
                  matchNested={l.matchNested}
                  onNavigate={() => setOpen(false)}
                >
                  {l.label}
                </NavigationItem>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
