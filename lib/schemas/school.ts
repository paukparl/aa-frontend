import z from "zod/v4";
import { dtaLocationPreview } from "@/lib/schemas/dta";
import { document, img } from "@/lib/schemas/shared";

export const schoolProgrammePreview = document.extend({
  slug: z.string().nullable(),
  programmeTitle: z.string().nullable(),
  representativeImage: img.nullable(),
});

export const schoolFacilityPreview = document.extend({
  slug: z.string().nullable(),
  tempFacilityTitle: z.string().nullable(),
  tempRepresentativeImage: img.nullable(),
});

export const schoolEventPreview = document.extend({
  slug: z.string().nullable(),
  tempEventTitle: z.string().nullable(),
  tempRepresentativeImage: img.nullable(),
  tempDate: z.string().nullable(),
});

export const schoolVisitingSchoolPreview = document.extend({
  slug: z.string().nullable(),
  tempVisitingSchoolTitle: z.string().nullable(),
  tempRepresentativeImage: img.nullable(),
  tempDtaLocation: dtaLocationPreview.nullable(),
  tempDate: z.string().nullable(),
});
