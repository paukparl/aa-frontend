import { createFetchOptions } from "@/lib/fetchData";
import { eventFetchOptions } from "@/lib/fetchOptions/shared";

export const schoolPersonPreviewFetchOptions = createFetchOptions({
  populate: { representativeImage: true },
});

export const schoolProgrammePreviewFetchOptions = createFetchOptions({
  populate: { representativeImage: true },
});

export const schoolUnitPreviewFetchOptions = createFetchOptions({
  populate: {
    representativeImage: true,
    school_people: true,
    school_programmes: {
      populate: schoolProgrammePreviewFetchOptions.populate,
    },
  },
});

export const schoolPersonDetailFetchOptions = createFetchOptions({
  populate: { ...schoolPersonPreviewFetchOptions.populate },
});

export const schoolProgrammeDetailFetchOptions = createFetchOptions({
  populate: {
    ...schoolProgrammePreviewFetchOptions.populate,
    school_units: schoolUnitPreviewFetchOptions,
    programmeDynamicZone: {
      on: {
        "dynamic-zone.subhead-module": true,
        "dynamic-zone.text-module": true,
        "dynamic-zone.image-carousel-module": {
          populate: { imageCarouselItem: true },
        },
        "dynamic-zone.text-image-module": {
          populate: {
            image: true,
          },
        },
      },
    },
  },
});

export const schoolUnitDetailFetchOptions = createFetchOptions({
  populate: {
    ...schoolUnitPreviewFetchOptions.populate,
    extendedBriefFile: true,
    studentWorkItem: {
      populate: {
        studentWorkItemImage: true,
      },
    },
    unitDynamicZone: {
      on: {
        "dynamic-zone.subhead-module": true,
        "dynamic-zone.text-module": true,
        "dynamic-zone.image-carousel-module": {
          populate: {
            imageCarouselItem: true,
          },
        },
      },
    },
  },
});

export const schoolVisitingSchoolCoursePreviewFetchOptions = createFetchOptions(
  {
    populate: {
      dta_locations: true,
      representativeImage: true,
    },
  },
);

export const schoolVisitingSchoolCourseDetailFetchOptions = createFetchOptions({
  populate: {
    ...schoolVisitingSchoolCoursePreviewFetchOptions.populate,
    visitingSchoolDynamicZone: {
      on: {
        "dynamic-zone.subhead-module": true,
        "dynamic-zone.text-module": true,
        "dynamic-zone.image-carousel-module": {
          populate: { imageCarouselItem: true },
        },
        "dynamic-zone.cta": {
          populate: { ctas: true },
        },
      },
    },
  },
});

export const schoolSnippetFetchOptions = createFetchOptions({
  populate: {
    programOrdering: {
      populate: {
        school_programme: schoolProgrammePreviewFetchOptions,
      },
    },
  },
});

export const schoolApplyEntryPreviewFetchOptions = createFetchOptions({
  populate: {
    schoolProgramme: schoolProgrammePreviewFetchOptions,
  },
});

export const schoolApplyEntryDetailFetchOptions = createFetchOptions({
  populate: {
    ...schoolApplyEntryPreviewFetchOptions.populate,
  },
});

export const schoolFacilityPreviewFetchOptions = createFetchOptions({
  populate: { representativeImage: true },
});

export const schoolFacilityDetailFetchOptions = createFetchOptions({
  populate: {
    ...schoolFacilityPreviewFetchOptions.populate,
    aaEvents: eventFetchOptions,
  },
});
