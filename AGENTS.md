# lorentwebworks.nl

Statische site in **Astro 7** met **Tailwind CSS 4**. Lees bij twijfel de docs in `node_modules/astro/` en let op deprecation-meldingen.

- Design tokens en utilities staan in `src/styles/global.css`. Gebruik in markup geen arbitrary values (`text-[15px]`, `bg-[#...]`); voeg een token of utility toe.
- Knopstijlen, iconen en CTA-tekst staan in `src/lib/*.mjs` en worden ook door de rehype-plugin van de gidsen gebruikt.
- Geen em of en dashes in copy (`pnpm lint:copy`).
- Draai `pnpm verify` voor je klaar bent.
