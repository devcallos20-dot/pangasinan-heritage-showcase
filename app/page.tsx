import { Button } from "@/components/atoms/Button";
import { Image } from "@/components/atoms/Image";
import { Heading, Text, Eyebrow } from "@/components/atoms/Typography";
import { HeritageGrid } from "@/components/organisms/HeritageGrid";
import { HERITAGE_SITES } from "@/lib/heritage-data";

export default function HomePage() {
  const hero = HERITAGE_SITES[0];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Full-bleed cover photo, dimmed toward the text side */}
        <div className="absolute inset-0">
          <Image
            src={hero.cover}
            alt=""
            ratio="16/9"
            rounded={false}
            priority
            sizes="100vw"
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/85 to-forest/40" />
          {/* the one bold moment: a slow gold lighthouse beam */}
          <div
            aria-hidden
            className="beam absolute -right-32 top-0 h-full w-1/2 bg-gradient-to-l from-gold/25 to-transparent blur-2xl"
          />
        </div>

        <div className="relative mx-auto max-w-shell px-4 py-24 md:px-6 md:py-32">
          <div className="max-w-2xl">
            <Eyebrow>Pangasinan Provincial Tourism Office</Eyebrow>
            <Heading level={1} as="h1" className="mt-4">
              A hundred islands, one gold horizon.
            </Heading>
            <Text size="lg" className="mt-5 max-w-xl">
              Explore the province's iconic heritage sites — from the limestone
              islets of Alaminos to the beacon at Cape Bolinao — on a platform
              built to load fast, even on mobile data.
            </Text>
            <div className="mt-8 flex flex-wrap gap-3">
              {/* Polymorphic Button: href → renders a Next link */}
              <Button href="#sites" size="lg" icon="arrow">
                Discover the sites
              </Button>
              <Button href="#story" size="lg" variant="secondary">
                Read the story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERITAGE GRID ────────────────────────────────────── */}
      <section id="sites" className="mx-auto max-w-shell px-4 py-20 md:px-6">
        <div className="mb-10 text-center">
          <Eyebrow>Featured destinations</Eyebrow>
          <Heading level={2} className="mt-3">
            Where to go in Pangasinan
          </Heading>
        </div>
        <HeritageGrid sites={HERITAGE_SITES} />
      </section>

      {/* ── PLAN A VISIT ─────────────────────────────────────── */}
      <section
        id="plan"
        className="mx-auto grid max-w-shell gap-10 px-4 py-16 md:grid-cols-2 md:px-6"
      >
        <div>
          <Eyebrow>Plan a visit</Eyebrow>
          <Heading level={2} className="mt-3">
            Built for the road, and the data plan
          </Heading>
          <Text tone="muted" className="mt-4">
            Every page ships as mostly static HTML with lazy-loaded photography,
            so the showcase stays quick on 3G and 4G. Browse offline-friendly
            site guides, check the best time to go, and map your route before
            you leave signal behind.
          </Text>
        </div>
        <ul className="grid grid-cols-3 gap-4 self-center">
          {[
            { k: "5", v: "Heritage sites" },
            { k: "5", v: "Local photos" },
            { k: "AA", v: "WCAG 2.1 target" },
          ].map((stat) => (
            <li
              key={stat.v}
              className="rounded-2xl border border-hairline bg-pine p-5 text-center"
            >
              <p className="font-display text-3xl text-gold">{stat.k}</p>
              <p className="mt-1 font-body text-xs text-mist">{stat.v}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── STORY ────────────────────────────────────────────── */}
      <section id="story" className="mx-auto max-w-shell px-4 py-16 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>The story</Eyebrow>
          <Heading level={2} className="mt-3">
            Heritage worth carrying forward
          </Heading>
          <Text tone="muted" className="mt-4">
            Pangasinan means “place of salt” — a coast shaped by tides, faith,
            and trade. This showcase gathers its landmarks into one place so the
            next generation, and every traveller, can find them easily.
          </Text>
          <div className="mt-8">
            <Button href="/sites/hundred-islands" variant="secondary" icon="arrow">
              Start with the Hundred Islands
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
