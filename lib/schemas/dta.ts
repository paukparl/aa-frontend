import z from "zod/v4";
import { document, img } from "@/lib/schemas/shared";

export const dtaPersonPreview = document.extend({
  slug: z.string().nullable(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  displayStudyYear: z.string().nullable(),
  headshot: img.nullable(),
});

export const dtaLocationPreview = document.extend({
  longitude: z.number().nullable(),
  latitude: z.number().nullable(),
  city: z.string().nullable(),
  country: z.string().nullable(),
});

export const dtaPracticePreview = document.extend({
  slug: z.string().nullable(),
  name: z.string().nullable(),
  dta_locationNew: dtaLocationPreview.nullable(),
});

export const dtaInstitutionPreview = document.extend({
  slug: z.string().nullable(),
  Name: z.string().nullable(),
  Display: img.nullable(),
});

export const dtaObjectPreview = document.extend({
  slug: z.string().nullable(),
  title: z.string().nullable(),
  // image: img.nullable(),
  image: z.array(img),
});

export const dtaPersonDetail = dtaPersonPreview.extend({
  bio: z.string().nullable(),
  studyYear: z.number().nullable(),
  dateBirth: z.string().nullable(),
  dateDeath: z.string().nullable(),
  placeOfBirth: z.string().nullable(),
  Eduction: z.array(
    z.object({
      id: z.number(),
      institution: z.string().nullable(),
      country: z.string().nullable(),
      dateRange: z.string().nullable(),
      courseName: z.string().nullable(),
    }),
  ),
  Career: z.array(
    z.object({
      id: z.number(),
      institution: z.string().nullable(),
      country: z.string().nullable(),
      dateRange: z.string().nullable(),
      jobRole: z.string().nullable(),
    }),
  ),
});

export const dtaPracticeDetail = dtaPracticePreview.extend({
  description: z.string().nullable(),
  dta_locationNew: dtaLocationPreview.nullable(),
  dta_peopleNew: z.array(dtaPersonPreview),
  dta_institutionsNew: z.array(dtaInstitutionPreview),
  dta_objects: z.array(dtaObjectPreview),
});

export const dtaInstitutionDetail = dtaInstitutionPreview.extend({
  Description: z.string().nullable(),
  dtaPeople: z.array(dtaPersonPreview),
  dta_objects: z.array(dtaObjectPreview),
  dta_practices: z.array(dtaPracticePreview),
});

export const dtaObjectDetail = dtaObjectPreview.extend({
  additionalDescription: z.string().nullable(),
  dta_peopleNew: z.array(dtaPersonPreview),
  dta_institutionsNew: z.array(dtaInstitutionPreview),
  dta_practicesNew: z.array(dtaPracticePreview),
});

export const dtaPage = document.extend({
  slug: z.string().nullable(),
  pageTitle: z.string().nullable(),
});
