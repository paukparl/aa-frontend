import { z } from "zod";

export const MediaFormatSchema = z.object({
  url: z.string(),
  width: z.number(),
  height: z.number(),
});
export type MediaFormat = z.infer<typeof MediaFormatSchema>;

export const MediaSchema = z.object({
  data: z
    .object({
      id: z.number(),
      attributes: z.object({
        url: z.string(),
        alternativeText: z.string().nullable().optional(),
        caption: z.string().nullable().optional(),
        width: z.number().optional(),
        height: z.number().optional(),
        formats: z.object({
          small: MediaFormatSchema.optional(),
          medium: MediaFormatSchema.optional(),
          large: MediaFormatSchema.optional(),
          thumbnail: MediaFormatSchema.optional(),
        }),
      }),
    })
    .nullable(),
});
export type Media = z.infer<typeof MediaSchema>;

export const RecordResponseSchema = <T extends z.ZodTypeAny>(schema: T) =>
  z.object({
    data: z.object({
      id: z.number(),
      attributes: schema,
    }),
  });

export const PaginatedResponseSchema = <T extends z.ZodTypeAny>(schema: T) =>
  z.object({
    data: z.array(
      z.object({
        id: z.number(),
        attributes: schema,
      })
    ),
    meta: z.any().optional(),
  });

