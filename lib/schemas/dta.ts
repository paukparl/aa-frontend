import z from "zod/v4";
import { document, img } from "@/lib/schemas/shared";

export const dtaPersonPreview = document.extend({
  slug: z.string().nullable(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  displayStudyYear: z.string().nullable(),
  headshot: img.nullable(),
});

export const dtaLocation = document.extend({
  // longitude: z.number().nullable(),
  // latitude: z.number().nullable(),
  longitude: z.coerce.number().nullable(),
  latitude: z.coerce.number().nullable(),
  city: z.string().nullable(),
  country: z.string().nullable(),
});

export const dtaPracticePreview = document.extend({
  slug: z.string().nullable(),
  name: z.string().nullable(),
  dta_location_news: z.array(dtaLocation),
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
  image: z.array(img).nullable(),
});

export const dtaPersonDetail = dtaPersonPreview.extend({
  bio: z.string().nullable(),
  studyYear: z.number().nullable(),
  dateBirth: z.string().nullable(),
  dateDeath: z.string().nullable(),
  placeOfBirth: z.string().nullable(),
  Eduction: z
    .array(
      z.object({
        id: z.number(),
        institution: z.string().nullable(),
        country: z.string().nullable(),
        dateRange: z.string().nullable(),
        courseName: z.string().nullable(),
      }),
    )
    .nullable(),
  Career: z
    .array(
      z.object({
        id: z.number(),
        institution: z.string().nullable(),
        country: z.string().nullable(),
        dateRange: z.string().nullable(),
        jobRole: z.string().nullable(),
      }),
    )
    .nullable(),
  dta_practicesNew: z.array(dtaPracticePreview),
  dtaInstitutionsNew: z.array(dtaInstitutionPreview),
  dta_objects: z.array(dtaObjectPreview),
  dtaLocation: dtaLocation.nullable(),
});

export const dtaPracticeDetail = dtaPracticePreview.extend({
  description: z.string().nullable(),
  dta_peopleNew: z.array(dtaPersonPreview),
  dta_institutionsNew: z.array(dtaInstitutionPreview),
  dta_objects: z.array(dtaObjectPreview),
  dta_location_news: z.array(dtaLocation),
});

export const dtaInstitutionDetail = dtaInstitutionPreview.extend({
  Description: z.string().nullable(),
  dtaPeople: z.array(dtaPersonPreview),
  dta_objects: z.array(dtaObjectPreview),
  dta_practices: z.array(dtaPracticePreview),
  dta_locationsNew: z.array(dtaLocation),
});

export const dtaObjectDetail = dtaObjectPreview.extend({
  additionalDescription: z.string().nullable(),
  dta_peopleNew: z.array(dtaPersonPreview),
  dta_institutionsNew: z.array(dtaInstitutionPreview),
  dta_practicesNew: z.array(dtaPracticePreview),
});

export const dtaPage = document
  .extend({
    slug: z.string().nullable(),
    pageTitle: z.string().nullable(),
    dynamicZone: z.array(
      z.union([
        z.object({
          id: z.number(),
          __component: z.literal("dynamic-zone.subhead-module"),
          text: z.string().nullable(),
        }),
        z.object({
          id: z.number(),
          __component: z.literal("dynamic-zone.text-module"),
          // text: z.string().nullable(),
        }),
        z.object({
          id: z.number(),
          __component: z.literal("dynamic-zone.image-carousel-module"),
          imageCarouselItem: z.array(img).nullable(),
        }),
        z.object({
          id: z.number(),
          __component: z.literal("dynamic-zone.text-image-module"),
          // text: z.string().nullable(),
          image: img.nullable(),
          // imageCaptionOverride: z.string().nullable(),
          ctaText: z.string().nullable(),
          ctaLink: z.string().nullable(),
          ctaSide: z.string().nullable(),
        }),
      ]),
    ),
  })
  .loose();

export const dtaSnippet = document.extend({
  peopleLandingDescription: z.string().nullable(),
  practicesLandingDescription: z.string().nullable(),
  institutionsLandingDescription: z.string().nullable(),
  collectionsLandingDescription: z.string().nullable(),
  dtaHomepageDescription: z.string().nullable(),
});

export const dtaEvent = document.extend({
  beginYear: z.coerce.number().nullable(),
  endYear: z.coerce.number().nullable(),
  dtaLocation: dtaLocation.nullable(),
  image: z.array(img).nullable(),
  dta_peopleNew: z.array(dtaPersonPreview),
  dta_institutionsNew: z.array(dtaInstitutionPreview),
  dta_practicesNew: z.array(dtaPracticePreview),
  dta_objectsNew: z.array(dtaObjectPreview),
});

export const dtaMap = document.extend({
  Description: z.string().nullable(),
  dta_event_types: z.array(
    document.extend({
      description: z.string().nullable(),
      shortTitle: z.string().nullable(),
    }),
  ),
});
