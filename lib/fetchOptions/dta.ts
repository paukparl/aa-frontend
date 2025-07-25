import { createFetchOptions } from "@/lib/fetchData";
import { documentFields, imgFetchOptions } from "@/lib/fetchOptions/shared";

export const dtaPersonPreviewFetchOptions = createFetchOptions({
  fields: [
    ...documentFields,
    "slug",
    "firstName",
    "lastName",
    "displayStudyYear",
  ],
  populate: {
    headshot: imgFetchOptions,
  },
});

export const dtaPersonDetailFetchOptions = createFetchOptions({
  fields: [
    ...dtaPersonPreviewFetchOptions.fields,
    "bio",
    "studyYear",
    "dateBirth",
    "dateDeath",
    "placeOfBirth",
  ],
  populate: {
    ...dtaPersonPreviewFetchOptions.populate,
    // Typo
    Eduction: {
      fields: ["id", "institution", "country", "dateRange", "courseName"],
    },
    Career: {
      fields: ["id", "institution", "country", "dateRange", "jobRole"],
    },
  },
});

export const dtaLocationPreviewFetchOptions = createFetchOptions({
  fields: [...documentFields, "longitude", "latitude", "city", "country"],
});

export const dtaPracticePreviewFetchOptions = createFetchOptions({
  fields: [...documentFields, "slug", "name"],
  populate: {
    dta_locationNew: dtaLocationPreviewFetchOptions,
  },
});

export const dtaInstitutionPreviewFetchOptions = createFetchOptions({
  fields: [...documentFields, "slug", "Name"], // Wrong casing in Strapi
  populate: {
    Display: imgFetchOptions, // Wrong casing in Strapi
  },
});

export const dtaObjectPreviewFetchOptions = createFetchOptions({
  fields: [...documentFields, "slug", "title"],
  populate: {
    image: imgFetchOptions,
  },
});

export const dtaPracticeDetailFetchOptions = createFetchOptions({
  fields: [...dtaPracticePreviewFetchOptions.fields, "description"],
  populate: {
    ...dtaPracticePreviewFetchOptions.populate,
    dta_peopleNew: {
      ...dtaPersonPreviewFetchOptions,
    },
    dta_institutionsNew: {
      ...dtaInstitutionPreviewFetchOptions,
    },
    dta_objects: {
      ...dtaObjectPreviewFetchOptions,
    },
  },
});

export const dtaInstitutionDetailFetchOptions = createFetchOptions({
  fields: [...dtaInstitutionPreviewFetchOptions.fields, "Description"], // Wrong casing in Strapi
  populate: {
    ...dtaInstitutionPreviewFetchOptions.populate,
    dtaPeople: {
      ...dtaPersonPreviewFetchOptions,
    },
    dta_practices: {
      ...dtaPracticePreviewFetchOptions,
    },
    dta_objects: {
      ...dtaObjectPreviewFetchOptions,
    },
  },
});

export const dtaObjectDetailFetchOptions = createFetchOptions({
  fields: [...dtaObjectPreviewFetchOptions.fields, "additionalDescription"],
  populate: {
    ...dtaObjectPreviewFetchOptions.populate,
    dta_peopleNew: {
      ...dtaPersonPreviewFetchOptions,
    },
    dta_institutionsNew: {
      ...dtaInstitutionPreviewFetchOptions,
    },
    dta_practicesNew: {
      ...dtaPracticePreviewFetchOptions,
    },
  },
});

export const dtaPageFetchOptions = createFetchOptions({
  fields: [...documentFields, "slug", "pageTitle"],
});
