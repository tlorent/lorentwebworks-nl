// Knopstijlen, gedeeld door Button.astro, het formulier en de CTA in de gidsen (rehype).
/** @typedef {"primary" | "secondary" | "on-block" | "inverse"} ButtonVariant */
/** @typedef {"sm" | "compact" | "md" | "lg"} ButtonSize */

const base =
  "group inline-flex min-h-11 items-center rounded-full font-semibold transition-colors duration-150 focus-ring-wide motion-reduce:transition-none";

/** @type {Record<ButtonVariant, string>} */
const variants = {
  primary: "bg-accent text-on-accent hover:bg-accent-hover",
  secondary: "bg-surface text-text hover:bg-border",
  "on-block": "bg-on-block text-on-block-ink hover:bg-on-block-muted",
  inverse: "bg-inverse-text text-inverse-bg hover:opacity-90",
};

/** @type {Record<ButtonSize, string>} */
const sizes = {
  sm: "gap-1.5 px-4 py-2.5 text-label",
  compact: "gap-2.5 px-7 py-3.5 text-base",
  md: "gap-2.5 px-7 py-4.5 text-base",
  lg: "gap-2.5 px-7.5 py-4.75 text-lg",
};

/**
 * @param {ButtonVariant} [variant]
 * @param {ButtonSize} [size]
 */
export const buttonClass = (variant = "primary", size = "md") =>
  `${base} ${variants[variant]} ${sizes[size]}`;

/** @param {ButtonSize} [size] */
export const buttonIconClass = (size = "md") =>
  `${size === "sm" ? "size-4" : "size-4.5"} shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none`;
