import { z } from "zod/v4";
import { image, video, file } from "@/lib/schemas/shared";
import { eventPreview, eventDetail, getEventsData, getEventData } from "@/lib/schemas/events";
// When importing files, use named imports for treeshaking

export const schemas = {
  document,
  video,
  file,
  image,
  eventPreview,
  eventDetail,
  getEventsData,
  getEventData,
};

export type Schema<Key extends keyof typeof schemas> = z.infer<
  (typeof schemas)[Key]
>;
