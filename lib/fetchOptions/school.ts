import { createFetchOptions } from "@/lib/fetchData";
import { dtaLocationFetchOptions } from "@/lib/fetchOptions/dta";
import {
  documentFields,
  fileFetchOptions,
  imgFetchOptions,
} from "@/lib/fetchOptions/shared";

export const schoolProgrammePreviewFetchOptions = createFetchOptions({
  fields: [
    ...documentFields,
    "slug",
    "programmeTitle",
    "degreeAwarded",
    "studyMode",
    "durationValue",
    "durationText",
    "rightAlign",
    "applyLink",
  ],
  populate: {
    representativeImage: imgFetchOptions,
  },
});

export const schoolUnitPreviewFetchOptions = createFetchOptions({
  fields: [...documentFields, "slug", "unitTitle", "term", "projectReviewLink"],
  populate: {
    representativeImage: imgFetchOptions,
    school_people: {
      fields: [...documentFields, "firstName", "lastName"],
    },
    school_programmes: {
      fields: schoolProgrammePreviewFetchOptions.fields,
      populate: schoolProgrammePreviewFetchOptions.populate,
    },
  },
});

export const schoolProgrammeDetailFetchOptions = createFetchOptions({
  fields: [
    ...schoolProgrammePreviewFetchOptions.fields,
    "hexValue",
    "contactLink",
  ],
  populate: {
    ...schoolProgrammePreviewFetchOptions.populate,
    school_units: schoolUnitPreviewFetchOptions,
    programmeDynamicZone: {
      on: {
        "dynamic-zone.subhead-module": {
          fields: ["text"],
        },
        "dynamic-zone.text-module": {
          fields: ["text"],
        },
        "dynamic-zone.image-carousel-module": {
          populate: {
            imageCarouselItem: imgFetchOptions,
          },
        },
        "dynamic-zone.text-image-module": {
          fields: [
            "text",
            "imageCaptionOverride",
            "ctaText",
            "ctaLink",
            "ctaSide",
          ],
          populate: {
            image: imgFetchOptions,
          },
        },
      },
    },
  },
});

export const schoolUnitDetailFetchOptions = createFetchOptions({
  fields: [...schoolUnitPreviewFetchOptions.fields, "projectReviewLink"],
  populate: {
    ...schoolUnitPreviewFetchOptions.populate,
    extendedBriefFile: fileFetchOptions,
    studentWorkItem: {
      fields: ["id", "studentWorkItemTitle", "studentFirstLastName"],
      populate: {
        studentWorkItemImage: imgFetchOptions,
      },
    },
    unitDynamicZone: {
      on: {
        "dynamic-zone.subhead-module": {
          fields: ["text"],
        },
        "dynamic-zone.text-module": {
          fields: ["text"],
        },
        "dynamic-zone.image-carousel-module": {
          populate: {
            imageCarouselItem: imgFetchOptions,
          },
        },
      },
    },
  },
});

export const schoolVisitingSchoolSnippetFetchOptions = createFetchOptions({
  fields: [...documentFields, "contactLink", "newsletterLink", "mapHeadline"],
});

export const schoolVisitingSchoolPreviewFetchOptions = createFetchOptions({
  fields: [
    ...documentFields,
    "slug",
    "title",
    "onlineCourse",
    "dateTextOverride",
    "theme",
  ],
  populate: {
    dta_locations: dtaLocationFetchOptions,
    representativeImage: imgFetchOptions,
  },
});

export const schoolVisitingSchoolDetailFetchOptions = createFetchOptions({
  fields: [
    ...schoolVisitingSchoolPreviewFetchOptions.fields,
    "startDate",
    "endDate",
  ],
  populate: {
    ...schoolVisitingSchoolPreviewFetchOptions.populate,
    visitingSchoolDynamicZone: {
      on: {
        "dynamic-zone.subhead-module": {
          fields: ["text"],
        },
        "dynamic-zone.text-module": {
          fields: ["text"],
        },
        "dynamic-zone.image-carousel-module": {
          populate: {
            imageCarouselItem: imgFetchOptions,
          },
        },
        "dynamic-zone.cta": {
          populate: {
            ctas: {
              fields: ["text", "url", "ctaStyle"],
            },
          },
        },
      },
    },
  },
});

export const schoolSnippetFetchOptions = createFetchOptions({
  fields: [...documentFields],
});
