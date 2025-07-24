import { z } from "zod/v4";
import clientEnv from "@/lib/clientEnv";

export const document = z.object({
  // There seem to be multiple ids per documentId.
  // Use documentId to fetch the document.
  id: z.number(),
  documentId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string().nullable(),
});

export const documentFields = [
  "id",
  "documentId",
  "createdAt",
  "updatedAt",
  "publishedAt",
] as const satisfies (keyof z.infer<typeof document>)[];

const mediaBase = document.extend({
  url: z
    .string()
    .transform((val) =>
      val.startsWith("/") ? `${clientEnv.NEXT_PUBLIC_IMAGE_HOST}${val}` : val,
    ),
  alternativeText: z.string().nullable(),
  caption: z.string().nullable(),
  mime: z.string(),
});

// TODO: Video and file have the same structure.
// Maybe we should differentiate them client-side
// at validation by picking up mime type?

export const video = mediaBase;

export const file = mediaBase;

const imageFormat = z.object({
  url: z
    .string()
    .transform((val) =>
      val.startsWith("/") ? `${clientEnv.NEXT_PUBLIC_IMAGE_HOST}${val}` : val,
    ),
  width: z.number(),
  height: z.number(),
  mime: z.string(),
});

export const image = mediaBase.extend({
  width: z.number(),
  height: z.number(),
  formats: z
    .object({
      thumbnail: imageFormat.optional(),
      small: imageFormat.optional(),
      medium: imageFormat.optional(),
      large: imageFormat.optional(),
    })
    .nullable(),
});

export const media = z.union([image, video, file]);

export const getOneRes = <T extends z.ZodType>(schema: T) =>
  z.object({ data: schema.nullable() });

export const getManyRes = <T extends z.ZodType>(schema: T) =>
  z.object({
    data: z.array(schema),
    meta: z.object({
      pagination: z.object({
        page: z.number(),
        pageSize: z.number(),
        pageCount: z.number(),
        total: z.number(),
      }),
    }),
  });

export const seo = z.object({
  metaTitle: z.string(),
  metaDescription: z.string(),
  metaImage: media.nullable(),
  metaRobots: z.string().nullable(),
  metaViewport: z.string().nullable(),
  canonicalURL: z.string().nullable(),
  keywords: z.string().nullable(),
  structuredData: z.object({}).loose(),
});
