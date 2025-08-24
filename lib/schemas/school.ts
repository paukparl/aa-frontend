import z from "zod/v4";
import { sanitize } from "@/lib/sanitize";
import { dtaLocation } from "@/lib/schemas/dta";
import { document, event, file, img } from "@/lib/schemas/shared";

export const schoolProgrammePreview = document.extend({
  slug: z.string(),
  programmeTitle: z.string().nullable(),
  representativeImage: img.nullable(),
  degreeAwarded: z.string().nullable(),
  studyMode: z.enum(["full-time", "part-time"]).nullable(),
  durationValue: z.number().nullable(),
  durationText: z.string().nullable(),
  rightAlign: z.boolean().nullable(),
  shortDescription: z
    .string()
    .nullable()
    .transform((val) => (val ? sanitize(val) : null)),
  schoolApply: z
    .object({
      slug: z.string(),
    })
    .nullable(),
});

export const schoolUnitPreview = document.extend({
  slug: z.string().nullable(),
  unitTitle: z.string().nullable(),
  term: z.string().nullable(),
  requirementText: z.string().nullable(),
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
  designUnitInfoText: z
    .string()
    .nullable()
    .transform((val) => (val ? sanitize(val) : null)),
  shortDescription: z
    .string()
    .nullable()
    .transform((val) => (val ? sanitize(val) : null)),
  aboutText: z
    .string()
    .nullable()
    .transform((val) => (val ? sanitize(val) : null)),
  programmeDynamicZone: z.array(
    z.union([
      z.object({
        id: z.number(),
        __component: z.literal("dynamic-zone.subhead-module"),
        text: z.string().nullable(),
      }),
      z.object({
        id: z.number(),
        __component: z.literal("dynamic-zone.text-module"),
        bodyText: z
          .string()
          .nullable()
          .transform((v) => (v ? sanitize(v) : null)),
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
      link: z.string().nullable(),
    }),
  ),
  brief: z
    .string()
    .nullable()
    .transform((val) => (val ? sanitize(val) : null)),
  unitDynamicZone: z.array(
    z.union([
      z.object({
        id: z.number(),
        __component: z.literal("dynamic-zone.subhead-module"),
        text: z.string().nullable(),
      }),
      z.object({
        id: z.number(),
        __component: z.literal("dynamic-zone.text-module"),
        bodyText: z
          .string()
          .nullable()
          .transform((v) => (v ? sanitize(v) : null)),
      }),
      z.object({
        id: z.number(),
        __component: z.literal("dynamic-zone.image-carousel-module"),
        imageCarouselItem: z.array(img).nullable(),
      }),
    ]),
  ),
});

export const schoolFacilityPreview = document.extend({
  slug: z.string().nullable(),
  name: z.string().nullable(),
  representativeImage: img.nullable(),
  publicFacility: z.boolean().nullable(),
  hookeParkFacility: z.boolean().nullable(),
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

export const schoolVisitingSchoolCoursePreview = document.extend({
  slug: z.string().nullable(),
  title: z.string().nullable(),
  onlineCourse: z.boolean().nullable(),
  dta_locations: z.array(dtaLocation),
  dateTextOverride: z.string().nullable(),
  representativeImage: img.nullable(),
});

export const schoolFacilityDetail = schoolFacilityPreview.extend({
  hours: z.string().nullable(),
  contact: z.string().nullable(),
  description: z
    .string()
    .nullable()
    .transform((val) => (val ? sanitize(val) : null)),
  aaEvents: z.array(event),
});

export const schoolVisitingSchoolCourseDetail =
  schoolVisitingSchoolCoursePreview.extend({
    theme: z.string().nullable(),
    startDate: z.string().nullable(),
    endDate: z.string().nullable(),
    synopsis: z
      .string()
      .nullable()
      .transform((val) => (val ? sanitize(val) : null)),
    visitingSchoolDynamicZone: z.array(
      z.union([
        z.object({
          id: z.number(),
          __component: z.literal("dynamic-zone.subhead-module"),
          text: z.string().nullable(),
        }),
        z.object({
          id: z.number(),
          __component: z.literal("dynamic-zone.text-module"),
          bodyText: z
            .string()
            .nullable()
            .transform((v) => (v ? sanitize(v) : null)),
        }),
        z.object({
          id: z.number(),
          __component: z.literal("dynamic-zone.image-carousel-module"),
          imageCarouselItem: z.array(img).nullable(),
        }),
        z.object({
          id: z.number(),
          __component: z.literal("dynamic-zone.cta"),
          ctas: z.array(
            z.object({
              id: z.number(),
              text: z.string().nullable(),
              url: z.string().nullable(),
              ctaStyle: z.string().nullable(),
            }),
          ),
        }),
      ]),
    ),
  });

export const schoolSnippet = document.extend({
  applyLandingDescription: z.string().nullable(),
  applyLandingFinancialAssistanceLink: z.string().nullable(),
  applyLandingTuitionFees: z.string().nullable(),
  facilityLandingPageText: z.string().nullable(),
  programOrdering: z.array(
    z.object({
      titleReference: z.string().nullable(),
      school_programme: schoolProgrammePreview.nullable(),
    }),
  ),
});

export const schoolApplyEntryPreview = document.extend({
  slug: z.string().nullable(),
  schoolProgramme: schoolProgrammePreview.nullable(),
});

export const schoolApplyEntryDetail = schoolApplyEntryPreview.extend({
  howToApplyRichText: z.string().nullable(),
  startApplicationLink: z.string().nullable(),
  discoverTheProgramLink: z.string().nullable(),
  enquireToStudyLink: z.string().nullable(),
});

export const schoolPersonPreview = document.extend({
  slug: z.string().nullable(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  title: z.string().nullable(),
  representativeImage: img.nullable(),
});

export const schoolPersonDetail = schoolPersonPreview.extend({
  websiteLink: z.string().nullable(),
  linkedInLink: z.string().nullable(),
  instagramLink: z.string().nullable(),
  // bio: z.string().nullable(),
});
