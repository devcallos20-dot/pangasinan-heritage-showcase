import Link from "next/link";
import { Image } from "../atoms/Image";
import { Icon } from "../atoms/Icon";
import { Heading, Text } from "../atoms/Typography";
import type { HeritageSite } from "@/lib/heritage-data";

/**
 * MOLECULE — Heritage Card
 * Used exclusively to preview a single tourist site inside a responsive
 * heritage-site grid. Composes the Image, Typography and Icon atoms. The whole
 * card is one link (a "card link" pattern): the heading anchor spans the card
 * via an ::after overlay, so the tap target is the entire card without nesting
 * interactive elements.
 */
type HeritageCardProps = {
  site: HeritageSite;
  /** first card in a grid can eagerly load its image for a faster LCP */
  priority?: boolean;
};

export function HeritageCard({ site, priority = false }: HeritageCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-hairline bg-pine transition-colors duration-200 hover:border-gold/50">
      <Image
        src={site.cover}
        alt={`${site.name} in ${site.town}, Pangasinan`}
        ratio="3/2"
        rounded={false}
        priority={priority}
      />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="font-body text-eyebrow text-gold">
          {site.category}
        </span>
        <Heading level={4} as="h3">
          {/* stretched link: makes the whole card clickable */}
          <Link
            href={`/sites/${site.slug}`}
            className="after:absolute after:inset-0 after:content-[''] focus:outline-none"
          >
            {site.name}
          </Link>
        </Heading>
        <p className="flex items-center gap-1.5 font-body text-sm text-mist">
          <Icon name="pin" size={15} />
          {site.town}
        </p>
        <Text tone="muted" size="sm" className="mt-1 line-clamp-2">
          {site.tagline}
        </Text>
        <span className="mt-auto inline-flex items-center gap-1 pt-3 font-body text-sm text-gold transition-transform duration-200 group-hover:translate-x-1">
          Explore <Icon name="arrow" size={16} />
        </span>
      </div>
    </article>
  );
}
