import { z, defineCollection } from 'astro:content';

const categoriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    isNew: z.boolean(),
    registrationLink: z.string().optional(),
    order: z.number(),
  }),
});

export default categoriesCollection;
