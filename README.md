# Pangasinan Heritage — Digital Showcase

A fast, mobile-first, accessible heritage-tourism platform for the Pangasinan
Provincial Tourism Office, built with **Next.js 14 (App Router)**, **React 18**,
**TypeScript**, and **Tailwind CSS**, and organised as an **Atomic Design**
component library.

> Activity 1.1 — Deliverable 1.1 (Framework Selection) + Deliverable 1.2
> (Atomic Design System). See the `docs/` folder for the written reports.

## Quick start

```bash
npm install        # Node 18.18+ or 20+
npm run dev        # http://localhost:3000
npm run build      # statically pre-renders every route
npm start          # serve the production build
```

The project typechecks clean (`npx tsc --noEmit`) and `next build` statically
generates all routes (home, 404, and five heritage-site pages).

## Design language

Gold + green, simple and technological. Gold is the West Philippine Sea sunset
and the lighthouse beam (reserved for the single primary action); green is the
province's islands and landscapes. Type pairs **Space Grotesk** (display) with
**Inter** (body). All colours are defined once in `tailwind.config.ts` and
mirrored as CSS variables in `app/globals.css`.

## Project structure (Atomic Design)

```
app/                       Next.js App Router (routes = folders)
  layout.tsx               fonts, metadata, skip link, header, footer
  page.tsx                 home: hero + heritage grid + sections
  globals.css              design tokens + base / a11y styles
  not-found.tsx            404 empty state
  sites/[slug]/page.tsx    dynamic site page + photo gallery (SSG)
components/
  atoms/                   Button, Typography, ColorTokens, Icon, Image
  molecules/               HeritageCard, SearchForm, NavigationItem
  organisms/               HeaderNavigation, HeritageGrid
lib/heritage-data.ts       ALL content + photo paths (single source of truth)
public/images/             real, local .jpg photos for every heritage site
docs/                      Framework Selection Report, Atomic Design Manual,
                           Source Code Report, and screenshot assets
```

## Photos are local files

Every heritage photo (one cover + gallery image per site) is a real `.jpg`
shipped in `public/images/` and referenced by a root-relative path (e.g.
`/images/hundred-islands.jpg`) in `lib/heritage-data.ts`. Nothing is fetched
from an external host or placeholder service, so no `images.remotePatterns`
whitelist is needed in `next.config.mjs`. To swap a photo, replace the file
in `public/images/` and update the path string — no component code changes.

## How the platform requirements are met

| Requirement    | How |
|----------------|-----|
| Lightning fast | Server Components ship static HTML with ~0 client JS; measured **104 kB** First-Load JS on home; lazy, quality-capped images. |
| Mobile-first   | Single-column by default, columns added at `sm`/`lg`; header collapses to a disclosure menu; ≥44px tap targets. |
| Maintainable   | Strict atoms → molecules → organisms; content + photos in one data file; colours in one token file. |
| Accessible     | Skip link, visible focus ring, `aria-current`/`aria-expanded`, required image `alt`, reduced-motion support, AA contrast. |
| Deployable     | `generateStaticParams()` pre-renders every route to static HTML — deployable to any CDN / static host (JAMstack). |

## Notes

- Replace `[Your Name]` / `[Your Section]` in the `docs/` reports before submitting.
- `node_modules` and `.next` are excluded via `.gitignore`; run `npm install` to restore.
