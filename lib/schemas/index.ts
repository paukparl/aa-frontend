import { z } from "zod/v4";
import {
  eventDetail,
  eventPreview,
  getEventData,
  getEventsData,
} from "@/lib/schemas/events";
import { file, image, media, seo, video } from "@/lib/schemas/shared";

// When importing files, use named imports for treeshaking

export const schemas = {
  document,
  video,
  file,
  image,
  media,
  seo,
  eventPreview,
  eventDetail,
  getEventsData,
  getEventData,
};

export type Schema<Key extends keyof typeof schemas> = z.infer<
  (typeof schemas)[Key]
>;
