import { defineCollection, z } from "astro:content";
const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    draft: z.boolean().optional(),
    image: z.string().optional(),
    author: z.string().default("Anonymous"),
    language: z.enum(["en", "es"]),
    category: z.string().default("uncategorized"),
    tags: z.array(z.string()).default(["uncategorized"]),
  }),
});

const diary = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    draft: z.boolean().optional(),
    image: z.string().optional(),
    author: z.string().default("Anonymous"),
    language: z.enum(["en", "es"]),
  }),
});
export const collections = {
  blog,
  diary,
};
