import z from "zod/v4";
import { document, image } from "@/lib/schemas/shared";

export const dtaPersonPreview = document.extend({
  slug: z.string(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  displayStudyYear: z.string().nullable(),
  headshot: image.nullable(),
});

export const dtaPersonDetail = dtaPersonPreview.extend({
  bio: z.string().nullable(),
  studyYear: z.number().nullable(),
  dateBirth: z.string().nullable(),
  dateDeath: z.string().nullable(),
  placeOfBirth: z.string().nullable(),
});
