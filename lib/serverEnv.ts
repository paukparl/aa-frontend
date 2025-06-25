import { z } from 'zod/v4';

export default z
  .object({
    PORT: z.number(),
    BACKEND_API_URL: z.url(),
    BACKEND_API_TOKEN: z.string(),
  })
  .parse({
    // Redefine variables here b/c Next.js only inlines variables that are used.
    PORT: process.env.PORT,
    BACKEND_API_URL: process.env.BACKEND_API_URL,
    BACKEND_API_TOKEN: process.env.BACKEND_API_TOKEN,
  });
