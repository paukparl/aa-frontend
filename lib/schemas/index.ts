import { z } from "zod/v4";
import clientEnv from "@/lib/clientEnv";

// TODO: Split into separate files if this one gets too big
// If importing from separate files, use named imports for treeshaking

const document = z.object({
  // There seem to be multiple ids per documentId.
  // Use documentId for consistency.
  id: z.number(), 
  documentId: z.string(),
});

const mediaBase = document.extend({
  url: z.string().transform((val) => val.startsWith('/') ? `${clientEnv.NEXT_PUBLIC_IMAGE_HOST}${val}` : val),
  alternativeText: z.string().nullable(),
  caption: z.string().nullable(),
  mime: z.string(),
});

// TODO: Video and file have the same structure.
// Maybe we should differentiate them client-side
// at validation by picking up mime type?

const video = mediaBase;

const file = mediaBase;

const imageFormat = z.object({
  url: z.string().transform((val) => val.startsWith('/') ? `${clientEnv.NEXT_PUBLIC_IMAGE_HOST}${val}` : val),
  width: z.number(),
  height: z.number(),
  mime: z.string(),
});

const image = mediaBase.extend({
  width: z.number(),
  height: z.number(),
  formats: z.object({
    small: imageFormat,
    medium: imageFormat,
    large: imageFormat,
    thumbnail: imageFormat,
  }).nullable(),
});

const getOneRes = <T extends z.ZodType>(schema: T) => 
  z.object({
    data: document.and(schema),
    // meta: z.object({ }),
  });

const getManyRes = <T extends z.ZodType>(schema: T) =>
  z.object({
    data: z.array(document.and(schema)),
    meta: z.object({
      pagination: z.object({
        page: z.number(),
        pageSize: z.number(),
        pageCount: z.number(),
        total: z.number(),
      }),
    }),
  });

const eventPreview = z.object({
  title: z.string().nullable(),
  short_description: z.string().nullable(),
  image: image.nullable(),
  date_time: z.string().nullable(),
});

const eventDetail = eventPreview.extend({
  location: z.string().nullable(),
  description: z.string().nullable(),
}).nullable();

const getEventsRes = getManyRes(
  z.object({
    title: z.string().nullable(),
    description: z.string().nullable(),
    image: image.nullable(),
  })
);

const getEventRes = getOneRes(eventDetail);

export const schemas = {
  document,
  video,
  file,
  imageFormat,
  image,
  getEventsRes,
  getEventRes,
};

export type Schema<Key extends keyof typeof schemas> = z.infer<
  (typeof schemas)[Key]
>;
