import z from "zod/v4";
import { getManyRes, getOneRes, image } from "@/lib/schemas/shared";

export const eventPreview = z.object({
  title: z.string().nullable(),
  short_description: z.string().nullable(),
  image: image.nullable(),
  date_time: z.string().nullable(),
});

export const eventDetail = eventPreview
  .extend({
    location: z.string().nullable(),
    description: z.string().nullable(),
  })
  .nullable();

export const getEventsData = getManyRes(eventPreview);

export const getEventData = getOneRes(eventDetail);
