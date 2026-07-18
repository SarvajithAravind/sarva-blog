import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.enum(['Cricket', 'History']),
    subcategories: z.array(z.object({
      name: z.string(),
      slug: z.string(),
    })).optional(),
    comments: z.array(z.object({
      author: z.string(),
      date: z.string(),
      content: z.string(),
    })).optional(),
  }),
});

export const collections = { posts };
