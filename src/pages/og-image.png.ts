// Deelafbeelding van de homepage (1200x630), gegenereerd tijdens de build. Volgt het ontwerp van de site.

import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import type { APIRoute } from "astro";
import satori from "satori";
import sharp from "sharp";

const require = createRequire(import.meta.url);
const font = (weight: 600 | 800) =>
  readFile(
    require.resolve(
      `@fontsource/figtree/files/figtree-latin-${weight}-normal.woff`,
    ),
  );

// Kleuren uit global.css (lichte thema).
const colors = {
  bg: "#ffffff",
  text: "#0c1024",
  muted: "#50556b",
  accent: "#14226e",
  mark: "#c3cefb",
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

export const GET: APIRoute = async () => {
  const [semibold, extrabold] = await Promise.all([font(600), font(800)]);

  const svg = await satori(
    h(
      "div",
      {
        // Satori rekent met content-box: breedte en hoogte zijn exclusief padding.
        width: 1200 - 2 * 80,
        height: 630 - 2 * 80,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        backgroundColor: colors.bg,
        color: colors.text,
        fontFamily: "Figtree",
      },
      [
        h(
          "div",
          {
            display: "flex",
            fontSize: 30,
            fontWeight: 600,
            color: colors.muted,
          },
          "Voor zzp, mkb en goede doelen",
        ),
        h(
          "div",
          {
            display: "flex",
            flexDirection: "column",
            fontSize: 108,
            fontWeight: 800,
            lineHeight: 1.02,
          },
          [
            h("div", { display: "flex" }, "Websites die"),
            h("div", { display: "flex", alignItems: "center", gap: 22 }, [
              h(
                "div",
                {
                  display: "flex",
                  backgroundColor: colors.mark,
                  color: colors.accent,
                  padding: "0 22px",
                  borderRadius: 14,
                },
                "klanten",
              ),
              h("div", { display: "flex" }, "opleveren"),
            ]),
          ],
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
            h("div", {
              display: "flex",
              width: 18,
              height: 18,
              backgroundColor: colors.brand,
            }),
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
