// Gidsen: maakt tabellen toegankelijk (bijschrift, scrollbare regio), voegt halverwege
// (vóór de middelste H2) een CTA-blok in, en stuurt kennismakingslinks naar de boekingslink.
import { bookingLink } from "../data/booking.mjs";
import { buttonClass, buttonIconClass } from "./button.mjs";
import { ctaClass, defaultCta } from "./guide-cta.mjs";
import { icons } from "./icons.mjs";

/**
 * @typedef {{ type: string; tagName?: string; value?: string; properties?: Record<string, unknown>; children?: Node[] }} Node
 */

/**
 * @param {string} tagName
 * @param {string} className
 * @param {Node[]} [children]
 * @param {Record<string, unknown>} [extra]
 * @returns {Node}
 */
const el = (tagName, className, children = [], extra = {}) => ({
  type: "element",
  tagName,
  properties: { className: className ? className.split(" ") : [], ...extra },
  children,
});
/** @param {string} value @returns {Node} */
const text = (value) => ({ type: "text", value });
/** @param {Node} node @returns {string} */
const textOf = (node) =>
  node.type === "text"
    ? (node.value ?? "")
    : (node.children ?? []).map(textOf).join("");
/** @param {Node} node @param {...string} tags */
const isEl = (node, ...tags) =>
  node.type === "element" && tags.includes(node.tagName ?? "");

const arrowIcon = () =>
  el(
    "svg",
    buttonIconClass(),
    [...icons.arrow.matchAll(/d="([^"]+)"/g)].map(([, d]) =>
      el("path", "", [], { d }),
    ),
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ariaHidden: "true",
      focusable: "false",
    },
  );

// Externe boekingslink: opent in een nieuw tabblad, en dat staat ook in de tekst voor schermlezers.
/** @param {{ href: string, external: boolean }} link */
const linkAttributes = (link) =>
  link.external ? { target: "_blank", rel: "noopener" } : {};
/** @param {{ href: string, external: boolean }} link @returns {Node[]} */
const newTabNote = (link) =>
  link.external
    ? [el("span", "sr-only", [text(" (opent in een nieuw tabblad)")])]
    : [];

/** @returns {Node} */
const guideCta = () => {
  const link = bookingLink("/");
  return el(
    "aside",
    `my-12 ${ctaClass.box}`,
    [
      el("p", ctaClass.title, [text(defaultCta.title)], {
        id: "gids-cta-midden",
      }),
      el("p", ctaClass.text, [text(defaultCta.text)]),
      el(
        "a",
        `mt-6 ${buttonClass("on-block")}`,
        [text(defaultCta.button), ...newTabNote(link), arrowIcon()],
        { href: link.href, ...linkAttributes(link) },
      ),
    ],
    { ariaLabelledby: "gids-cta-midden" },
  );
};

// Links naar "/#contact" in de gidsen gaan naar de boekingslink, zodat er maar één plek is om te wijzigen.
/** @param {Node} node */
const fixBookingLinks = (node) => {
  if (isEl(node, "a") && node.properties?.href === "/#contact") {
    const link = bookingLink("/");
    node.properties.href = link.href;
    Object.assign(node.properties, linkAttributes(link));
    if (link.external)
      node.children = [...(node.children ?? []), ...newTabNote(link)];
  }
  for (const child of node.children ?? []) fixBookingLinks(child);
};

// Elke tabel krijgt een (visueel verborgen) bijschrift met de tekst van de kop erboven,
// en een scrollbare regio die naar dat bijschrift verwijst.
/** @param {Node} tree */
const fixTables = (tree) => {
  let heading = "";
  let count = 0;
  tree.children = (tree.children ?? []).map((node) => {
    if (isEl(node, "h2", "h3")) heading = textOf(node).trim();
    if (!isEl(node, "table")) return node;

    count += 1;
    const captionId = `tabel-${count}`;
    /** @param {Node} n */
    const walk = (n) => {
      if (isEl(n, "th") && !textOf(n).trim()) {
        n.children = [el("span", "sr-only", [text("Onderwerp")])];
      }
      for (const c of n.children ?? []) walk(c);
    };
    walk(node);
    node.children = [
      el("caption", "sr-only", [text(heading || `Tabel ${count}`)], {
        id: captionId,
      }),
      ...(node.children ?? []),
    ];

    return el(
      "div",
      "max-w-full overflow-x-auto rounded-md focus-ring-wide",
      [node],
      { tabIndex: 0, role: "region", ariaLabelledby: captionId },
    );
  });
};

export default function rehypeGuide() {
  /** @param {Node} tree @param {{ history?: string[]; path?: string }} file */
  return (tree, file) => {
    const path = String(file.history?.[0] ?? file.path ?? "");
    if (!path.includes("/content/gids/")) return;
    fixBookingLinks(tree);
    fixTables(tree);
    const children = tree.children ?? [];
    const h2Indexes = children.flatMap((node, i) =>
      isEl(node, "h2") ? [i] : [],
    );
    if (h2Indexes.length < 2) return;
    const at = h2Indexes[Math.floor(h2Indexes.length / 2)];
    children.splice(at, 0, guideCta());
  };
}
