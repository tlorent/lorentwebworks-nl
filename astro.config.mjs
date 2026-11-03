// @ts-check
import { readdirSync, readFileSync } from "node:fs";
import { unified } from "@astrojs/markdown-remark";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import rehypeGuide from "./src/lib/rehype-guide.mjs";

const site = "https://www.lorentwebworks.nl";

// lastmod voor de sitemap: de datum "updated" uit de frontmatter van elke gids.
const guidesDir = new URL("./src/content/gids/", import.meta.url);
const lastmod = new Map(
  readdirSync(guidesDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const source = readFileSync(new URL(file, guidesDir), "utf8");
      const slug = source.match(/^slug:\s*"?([^"\n]+)"?$/m)?.[1];
      const updated = source.match(/^updated:\s*(\S+)$/m)?.[1];
      return [`${site}/gids/${slug}/`, updated];
    }),
);

export default defineConfig({
  site,
  trailingSlash: "always",
  build: { format: "directory", inlineStylesheets: "always" },
  security: {
    // Content-Security-Policy als <meta>, met hashes van alle inline scripts en styles.
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self' https://formspree.io",
        "form-action https://formspree.io",
        "base-uri 'self'",
        "object-src 'none'",
      ],
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404") && !page.includes("/og/"),
      serialize: (item) => {
        const date = lastmod.get(item.url);
        return date ? { ...item, lastmod: new Date(date).toISOString() } : item;
      },
    }),
  ],
  markdown: {
    syntaxHighlight: false,
    processor: unified({ smartypants: false, rehypePlugins: [rehypeGuide] }),
  },
  vite: { plugins: [tailwindcss()] },
});
