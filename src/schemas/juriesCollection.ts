import { z, defineCollection } from 'astro:content';

const juriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    position: z.string(),
    background: z.string(),
    foreground: z.string().nullable(),
    link: z.string(),
  }),
});

export default juriesCollection;
