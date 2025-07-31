import { z } from "zod/v4";
import {
  dtaInstitutionDetail,
  dtaInstitutionPreview,
  dtaLocationPreview,
  dtaObjectDetail,
  dtaObjectPreview,
  dtaPage,
  dtaPersonDetail,
  dtaPersonPreview,
  dtaPracticeDetail,
  dtaPracticePreview,
  dtaSnippets,
} from "@/lib/schemas/dta";
import {
  document,
  file,
  getManyRes,
  getOneRes,
  img,
  media,
  pagination,
  seo,
  video,
} from "@/lib/schemas/shared";

// When importing files, use named imports for treeshaking

export const schemas = {
  document,
  video,
  file,
  img,
  media,
  seo,
  pagination,
  getOneRes,
  getManyRes,
  dtaPersonPreview,
  dtaPersonDetail,
  dtaPracticePreview,
  dtaPracticeDetail,
  dtaInstitutionPreview,
  dtaInstitutionDetail,
  dtaObjectPreview,
  dtaObjectDetail,
  dtaLocationPreview,
  dtaPage,
  dtaSnippets,
};

export type Schema<
  Key extends Exclude<keyof typeof schemas, "getOneRes" | "getManyRes">,
> = z.infer<(typeof schemas)[Key]>;
