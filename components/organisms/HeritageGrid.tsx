"use client";

import { useMemo, useState } from "react";
import { HeritageCard } from "../molecules/HeritageCard";
import { SearchForm } from "../molecules/SearchForm";
import type { HeritageSite } from "@/lib/heritage-data";

/**
 * ORGANISM — Heritage Grid
 * The showcase's centrepiece: a responsive grid of Heritage Card molecules
 * with a Search Form and category chips wired to filter it live. Composition
 * only — the grid owns filter state and hands each site to a card.
 *
 * Responsive: 1 column on mobile, 2 on tablet (sm), 3 on desktop (lg).
 */
type HeritageGridProps = {
  sites: HeritageSite[];
};

export function HeritageGrid({ sites }: HeritageGridProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(sites.map((s) => s.category)))],
    [sites],
  );

  const visible = useMemo(() => {
    const q = query.toLowerCase();
    return sites.filter((s) => {
      const matchesCategory = category === "All" || s.category === category;
      const matchesQuery =
        q === "" ||
        s.name.toLowerCase().includes(q) ||
        s.town.toLowerCase().includes(q) ||
        s.tagline.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [sites, query, category]);

  return (
    <div>
      <div className="mx-auto mb-8 max-w-xl">
        <SearchForm onSearch={setQuery} />
      </div>

      {/* Category chips */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((c) => {
          const active = c === category;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={active}
              className={[
                "rounded-pill border px-4 py-2 font-body text-sm transition-colors",
                active
                  ? "border-gold bg-gold text-ink"
                  : "border-hairline text-sand/80 hover:border-gold/60 hover:text-sand",
              ].join(" ")}
            >
              {c}
            </button>
          );
        })}
      </div>

      {visible.length > 0 ? (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((site, i) => (
            <li key={site.slug}>
              <HeritageCard site={site} priority={i === 0} />
            </li>
          ))}
        </ul>
      ) : (
        // Empty state as direction, not an apology.
        <p className="py-16 text-center font-body text-mist">
          No sites match “{query}”. Try a town like <em>Bolinao</em> or a
          category above.
        </p>
      )}
    </div>
  );
}
