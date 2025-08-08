import { z } from "zod/v4";

export default z
  .object({
    NEXT_PUBLIC_IMAGE_HOST: z.url(),
  })
  .parse({
    // Redefine variables here b/c Next.js only inlines variables that are used.
    NEXT_PUBLIC_IMAGE_HOST: process.env.NEXT_PUBLIC_IMAGE_HOST,
  });
