import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/atoms/Button";
import { Image } from "@/components/atoms/Image";
import { Icon } from "@/components/atoms/Icon";
import { Heading, Text, Eyebrow } from "@/components/atoms/Typography";
import { HERITAGE_SITES, getSiteBySlug } from "@/lib/heritage-data";

type Params = { params: { slug: string } };

/** Pre-render every site at build time → static, JAMstack-deployable. */
export function generateStaticParams() {
  return HERITAGE_SITES.map((site) => ({ slug: site.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const site = getSiteBySlug(params.slug);
  if (!site) return { title: "Site not found — Pangasinan Heritage" };
  return {
    title: `${site.name} — Pangasinan Heritage`,
    description: site.summary,
  };
}

export default function SitePage({ params }: Params) {
  const site = getSiteBySlug(params.slug);
  if (!site) notFound();

  return (
    <article>
      {/* Header with cover */}
      <div className="relative">
        <Image
          src={site.cover}
          alt={`${site.name}, ${site.town}`}
          ratio="16/9"
          rounded={false}
          priority
          sizes="100vw"
          className="max-h-[60vh]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-shell px-4 md:px-6">
        <div className="-mt-20 relative">
          <Eyebrow>{site.category}</Eyebrow>
          <Heading level={1} as="h1" className="mt-3">
            {site.name}
          </Heading>
          <p className="mt-3 flex items-center gap-2 font-body text-mist">
            <Icon name="pin" size={18} />
            {site.town}, Pangasinan
          </p>
        </div>

        <div className="mt-8 grid gap-10 md:grid-cols-[1.6fr_1fr]">
          <div>
            <Text size="lg">{site.summary}</Text>
            <p className="mt-6 inline-flex items-center gap-2 rounded-pill border border-hairline bg-pine px-4 py-2 font-body text-sm text-sand">
              <span className="text-gold">Best time</span> {site.bestTime}
            </p>
          </div>
          <aside className="rounded-2xl border border-hairline bg-pine p-6">
            <Heading level={4} as="h2">
              Getting there
            </Heading>
            <Text tone="muted" size="sm" className="mt-2">
              Reachable by land from Manila via the TPLEX toward Pangasinan.
              Confirm boat and resort schedules with the local tourism desk.
            </Text>
            <div className="mt-5">
              <Button href="/#sites" variant="secondary" icon="arrow">
                Back to all sites
              </Button>
            </div>
          </aside>
        </div>

        {/* ── 5-PHOTO GALLERY ──────────────────────────────── */}
        <section aria-labelledby="gallery-heading" className="mt-16">
          <Heading level={3} as="h2" id="gallery-heading">
            Gallery
          </Heading>
          <Text tone="muted" size="sm" className="mt-1">
            A look at {site.name}.
          </Text>
          <ul className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
            {site.gallery.map((src, i) => (
              <li
                key={src}
                className={i === 0 ? "col-span-2 row-span-2 md:col-span-2" : ""}
              >
                <Image
                  src={src}
                  alt={`${site.name} — photo ${i + 1} of ${site.gallery.length}`}
                  ratio={i === 0 ? "4/3" : "1/1"}
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
