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
    "studyModeText",
    "durationText",
    "rightAlign",
    "applyLink",
  ],
  populate: {
    representativeImage: imgFetchOptions,
  },
});

export const schoolUnitPreviewFetchOptions = createFetchOptions({
  fields: [...documentFields, "slug", "unitTitle", "projectReviewLink"],
  populate: {
    representativeImage: imgFetchOptions,
    school_people: {
      fields: [...documentFields, "firstName", "lastName"],
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
  },
});

export const schoolUnitDetailFetchOptions = createFetchOptions({
  fields: [
    ...schoolUnitPreviewFetchOptions.fields,
    "term",
    "projectReviewLink",
  ],
  populate: {
    ...schoolUnitPreviewFetchOptions.populate,
    extendedBriefFile: fileFetchOptions,
    studentWorkItem: {
      fields: ["id", "studentWorkItemTitle", "studentFirstLastName"],
      populate: {
        studentWorkItemImage: imgFetchOptions,
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
  ],
  populate: {
    dta_locations: dtaLocationFetchOptions,
    representativeImage: imgFetchOptions,
  },
});

export const schoolVisitingSchoolDetailFetchOptions = createFetchOptions({
  fields: [
    ...schoolVisitingSchoolPreviewFetchOptions.fields,
    "theme",
    "startDate",
    "endDate",
  ],
  populate: {
    ...schoolVisitingSchoolPreviewFetchOptions.populate,
  },
});
