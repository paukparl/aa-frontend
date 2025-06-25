import { z } from 'zod/v4';

export default z
  .object({
    NEXT_PUBLIC_IMAGE_HOST: z.url(),
    NEXT_PUBLIC_PREVIEW_SECRET: z.string(),
  })
  .parse({
    // Redefine variables here b/c Next.js only inlines variables that are used.
    NEXT_PUBLIC_IMAGE_HOST: process.env.NEXT_PUBLIC_IMAGE_HOST,
    NEXT_PUBLIC_PREVIEW_SECRET: process.env.NEXT_PUBLIC_PREVIEW_SECRET,
  });
