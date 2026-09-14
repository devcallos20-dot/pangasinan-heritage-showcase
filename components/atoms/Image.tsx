import NextImage from "next/image";

/**
 * ATOM — Image
 * A thin wrapper over next/image that bakes in the project defaults:
 *  - `alt` is REQUIRED (TypeScript won't let you forget it) — accessibility.
 *  - lazy-loaded and quality-capped for the 3G/4G budget ("lightning fast").
 *  - a fixed aspect ratio box so the layout never shifts while loading (CLS).
 * Photos are local files served from /public/images, so `src` is just a
 * root-relative path (e.g. "/images/hundred-islands.jpg").
 */

type Ratio = "16/9" | "4/3" | "1/1" | "3/2";

const RATIO_CLASS: Record<Ratio, string> = {
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "3/2": "aspect-[3/2]",
};

type ImageProps = {
  src: string;
  alt: string;
  ratio?: Ratio;
  priority?: boolean;
  sizes?: string;
  className?: string;
  rounded?: boolean;
};

export function Image({
  src,
  alt,
  ratio = "3/2",
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  className = "",
  rounded = true,
}: ImageProps) {
  return (
    <div
      className={`relative overflow-hidden bg-pine ${RATIO_CLASS[ratio]} ${
        rounded ? "rounded-2xl" : ""
      } ${className}`}
    >
      <NextImage
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={70}
        className="object-cover"
      />
    </div>
  );
}
