// Deelafbeelding (1200x630) per gids, gegenereerd tijdens de build.

import { getCollection } from "astro:content";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import type { APIRoute, GetStaticPaths } from "astro";
import satori from "satori";
import sharp from "sharp";

const require = createRequire(import.meta.url);
const font = (weight: 600 | 800) =>
  readFile(
    require.resolve(
      `@fontsource/figtree/files/figtree-latin-${weight}-normal.woff`,
    ),
  );

// Merkkleuren uit global.css (lichte thema): --block, --chip-bg, --brand.
const colors = {
  block: "#0e1a55",
  chip: "#c3cefb",
  white: "#ffffff",
  brand: "#f44728",
};

type El = { type: string; props: Record<string, unknown> };
const h = (
  type: string,
  style: Record<string, unknown>,
  children?: unknown,
): El => ({
  type,
  props: { style, children },
});

export const getStaticPaths = (async () => {
  const guides = await getCollection("gids");
  return guides.map((guide) => ({
    params: { slug: guide.data.slug },
    props: { guide },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const { data } = props.guide;
  const [semibold, extrabold] = await Promise.all([font(600), font(800)]);

  const svg = await satori(
    h(
      "div",
      {
        // Satori rekent met content-box: breedte en hoogte zijn exclusief padding.
        width: 1200 - 2 * 72,
        height: 630 - 2 * 72,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        backgroundColor: colors.block,
        color: colors.white,
        fontFamily: "Figtree",
      },
      [
        h(
          "div",
          {
            display: "flex",
            fontSize: 30,
            fontWeight: 600,
            color: colors.chip,
          },
          `Gids · ${data.readingTime} min lezen`,
        ),
        h(
          "div",
          {
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
            maxWidth: 1000,
          },
          data.title,
        ),
        h(
          "div",
          {
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 34,
            fontWeight: 800,
          },
          [
            h("div", { width: 18, height: 18, backgroundColor: colors.brand }),
            h("div", { display: "flex" }, "lorentwebworks.nl"),
          ],
        ),
      ],
    ) as unknown as Parameters<typeof satori>[0],
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Figtree", data: semibold, weight: 600, style: "normal" },
        { name: "Figtree", data: extrabold, weight: 800, style: "normal" },
      ],
    },
  );

  const png = await sharp(Buffer.from(svg))
    .png({ compressionLevel: 9 })
    .toBuffer();
  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png" },
  });
};
