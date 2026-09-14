/**
 * ─────────────────────────────────────────────────────────────────────────
 *  HERITAGE CONTENT — single source of truth
 * ─────────────────────────────────────────────────────────────────────────
 *  All copy AND all photo paths live here so a non-developer can update the
 *  showcase without touching a single component (the "Maintainable" brief
 *  requirement: modular + decoupled content).
 *
 *  Photos are local files shipped in /public/images — no external hosts,
 *  no placeholder services. To swap a photo, drop a new .jpg into
 *  /public/images and update the path below. No component code needs to
 *  change.
 * ─────────────────────────────────────────────────────────────────────────
 */

import { assetPath } from "./asset-path";

export type HeritageSite = {
  slug: string;
  name: string;
  town: string;
  category: "Islands" | "Coast" | "Springs" | "Pilgrimage";
  tagline: string;
  summary: string;
  bestTime: string;
  /** 1200px landscape hero used on cards + detail header */
  cover: string;
  /** local photo(s) shown in the detail-page gallery */
  gallery: string[];
};

export const HERITAGE_SITES: HeritageSite[] = [
  {
    slug: "hundred-islands",
    name: "Hundred Islands National Park",
    town: "Alaminos City",
    category: "Islands",
    tagline: "123 islets scattered across the Lingayen Gulf.",
    summary:
      "The province's flagship natural landmark: a cluster of limestone islets you can island-hop by boat. Governor's, Quezon, and Children's islands anchor the route, with viewdecks, coves, and snorkelling stops between them.",
    bestTime: "November – May (dry season, calm crossings)",
    cover: assetPath("/images/hundred-islands.jpg"),
    gallery: [assetPath("/images/hundred-islands.jpg")],
  },
  {
    slug: "bolinao-lighthouse",
    name: "Cape Bolinao Lighthouse",
    town: "Bolinao",
    category: "Coast",
    tagline: "A 19th-century beacon over the West Philippine Sea.",
    summary:
      "Standing on Punta Piedra Point, this stone lighthouse has guided vessels since the Spanish era. The climb rewards you with an open horizon of sea and sky — the gold-hour view that gives the showcase its palette.",
    bestTime: "Late afternoon for sunset",
    cover: assetPath("/images/bolinao-lighthouse.jpg"),
    gallery: [assetPath("/images/bolinao-lighthouse.jpg")],
  },
  {
    slug: "balungao-hot-spring",
    name: "Balungao Hot & Cold Springs",
    town: "Balungao",
    category: "Springs",
    tagline: "Mineral springs at the foot of Mount Balungao.",
    summary:
      "A highland resort complex fed by natural hot and cold springs, with pools, a zipline, and a mud-spa. A restorative counterpoint to the coast, tucked against the slopes of Mount Balungao.",
    bestTime: "Year-round; cooler mornings",
    cover: assetPath("/images/balungao-hot-spring.jpg"),
    gallery: [assetPath("/images/balungao-hot-spring.jpg")],
  },
  {
    slug: "patar-beach",
    name: "Patar White Sand Beach",
    town: "Bolinao",
    category: "Coast",
    tagline: "Creamy sand and open surf on the Bolinao coast.",
    summary:
      "A long stretch of pale sand facing the open sea, paired with rock formations and nearby caves. Often visited on the same day trip as the Cape Bolinao Lighthouse.",
    bestTime: "November – May",
    cover: assetPath("/images/patar-beach.jpg"),
    gallery: [assetPath("/images/patar-beach.jpg")],
  },
  {
    slug: "manaoag-church",
    name: "Minor Basilica of Our Lady of Manaoag",
    town: "Manaoag",
    category: "Pilgrimage",
    tagline: "A centuries-old Marian pilgrimage site.",
    summary:
      "One of the most visited churches in Northern Luzon, drawing pilgrims year-round to the shrine of Our Lady of the Rosary of Manaoag. A cornerstone of the province's living cultural heritage.",
    bestTime: "Weekday mornings (fewer crowds)",
    cover: assetPath("/images/manaoag-church.jpg"),
    gallery: [assetPath("/images/manaoag-church.jpg")],
  },
];

/** Lookup helper used by the dynamic site route. */
export function getSiteBySlug(slug: string): HeritageSite | undefined {
  return HERITAGE_SITES.find((site) => site.slug === slug);
}