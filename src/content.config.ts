import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const gids = defineCollection({
  loader: glob({
    pattern: "*.md",
    base: "./src/content/gids",
    generateId: ({ data }) => String(data.slug),
  }),
  schema: z.object({
    title: z.string(),
    cardTitle: z.string(),
    crumb: z.string(),
    seoTitle: z.string(),
    description: z.string(),
    teaser: z.string(),
    intro: z.string(),
    slug: z.string(),
    readingTime: z.number().int().positive(),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    order: z.number().int(),
    cta: z.object({
      title: z.string(),
      text: z.string(),
      button: z.string(),
      href: z.string().optional(),
      secondary: z.object({ text: z.string(), href: z.string() }).optional(),
    }),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { gids };
