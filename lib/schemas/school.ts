import z from "zod/v4";
import { sanitize } from "@/lib/sanitize";
import { dtaLocation } from "@/lib/schemas/dta";
import { document, file, img } from "@/lib/schemas/shared";

export const schoolProgrammePreview = document.extend({
  slug: z.string().nullable(),
  programmeTitle: z.string().nullable(),
  representativeImage: img.nullable(),
  degreeAwarded: z.string().nullable(),
  studyMode: z.enum(["full-time", "part-time"]).nullable(),
  durationValue: z.number().nullable(),
  durationText: z.string().nullable(),
  rightAlign: z.boolean().nullable(),
  applyLink: z.string().nullable(),
});

export const schoolUnitPreview = document.extend({
  slug: z.string().nullable(),
  unitTitle: z.string().nullable(),
  term: z.string().nullable(),
  representativeImage: img.nullable(),
  projectReviewLink: z.string().nullable(),
  school_people: z.array(
    document.extend({
      firstName: z.string().nullable(),
      lastName: z.string().nullable(),
    }),
  ),
  school_programmes: z.array(schoolProgrammePreview),
});

export const schoolProgrammeDetail = schoolProgrammePreview.extend({
  hexValue: z.string().nullable(),
  contactLink: z.string().nullable(),
  school_units: z.array(schoolUnitPreview),
  designUnitInfoText: z.string().nullable().transform((val) => (val ? sanitize(val) : null)),
  shortDescription: z.string().nullable(),
  aboutText: z.string().nullable(),
});

export const schoolUnitDetail = schoolUnitPreview.extend({
  projectReviewLink: z.string().nullable(),
  extendedBriefFile: file.nullable(),
  studentWorkItem: z.array(
    z.object({
      id: z.number(),
      studentWorkItemTitle: z.string().nullable(),
      studentFirstLastName: z.string().nullable(),
      studentWorkItemImage: img.nullable(),
    }),
  ),
  brief: z
    .string()
    .nullable()
    .transform((val) => (val ? sanitize(val) : null)),
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

export const schoolVisitingSchoolSnippet = document.extend({
  contactLink: z.string().nullable(),
  newsletterLink: z.string().nullable(),
  mapHeadline: z.string().nullable(),
  descriptionLandingPage: z
    .string()
    .nullable()
    .transform((val) => (val ? sanitize(val) : null)),
});

export const schoolVisitingSchoolPreview = document.extend({
  slug: z.string().nullable(),
  title: z.string().nullable(),
  onlineCourse: z.boolean().nullable(),
  dta_locations: z.array(dtaLocation),
  dateTextOverride: z.string().nullable(),
  representativeImage: img.nullable(),
});

export const schoolVisitingSchoolDetail = schoolVisitingSchoolPreview.extend({
  theme: z.string().nullable(),
  startDate: z.string().nullable(),
  endDate: z.string().nullable(),
  synopsis: z
    .string()
    .nullable()
    .transform((val) => (val ? sanitize(val) : null)),
});

export const schoolSnippet = document.extend({});
