import type { SVGProps } from "react";

/**
 * ATOM — Icon
 * A tiny inline-SVG set. Icons ship as code (no icon font, no network
 * request) which keeps the "lightning fast" budget intact. Decorative by
 * default (aria-hidden); pass a `title` to make an icon meaningful to
 * screen readers.
 */
export type IconName =
  | "search"
  | "arrow"
  | "pin"
  | "menu"
  | "close"
  | "beam";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  /** px size for width & height. Default 20. */
  size?: number;
  /** If set, the icon is announced to assistive tech with this label. */
  title?: string;
};

const PATHS: Record<IconName, JSX.Element> = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  pin: (
    <>
      <path d="M12 21s7-6.3 7-11a7 7 0 0 0-14 0c0 4.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  beam: (
    <>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
    </>
  ),
};

export function Icon({ name, size = 20, title, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {PATHS[name]}
    </svg>
  );
}
