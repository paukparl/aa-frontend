import { z } from "zod/v4";
import { dtaPersonDetail, dtaPersonPreview } from "@/lib/schemas/dta";
import {
  eventDetail,
  eventPreview,
  getEventRes,
  getEventsRes,
} from "@/lib/schemas/events";
import {
  document,
  file,
  getManyRes,
  getOneRes,
  image,
  media,
  seo,
  video,
} from "@/lib/schemas/shared";

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
  getEventsRes,
  getEventRes,
  getOneRes,
  getManyRes,
  dtaPersonPreview,
  dtaPersonDetail,
};

export type Schema<
  Key extends Exclude<keyof typeof schemas, "getOneRes" | "getManyRes">,
> = z.infer<(typeof schemas)[Key]>;
