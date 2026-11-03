# lorentwebworks.nl

Statische site voor Lorent Webworks. Gebouwd met Astro 7 en Tailwind CSS 4.

```sh
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # statische output in dist/
pnpm preview
pnpm check        # astro check (types)
pnpm lint         # biome
pnpm lint:copy    # faalt bij em of en dashes in src/
pnpm verify       # alles hierboven plus build, zoals in CI
```

- Copy en instellingen: `src/data/*.ts`
- Gidsen: `src/content/gids/*.md`
- Design tokens en utilities: `src/styles/global.css`
- Omgevingsvariabelen: zie `.env.example`
- Keuzes, afwijkingen en open punten: `NOTES.md`

Hosting op Vercel; redirects en cache headers staan in `vercel.json`.
