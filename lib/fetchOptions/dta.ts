import { createFetchOptions } from "@/lib/fetchData";
import { documentFields, imgFetchOptions } from "@/lib/fetchOptions/shared";

export const dtaLocationPreviewFetchOptions = createFetchOptions({
  fields: [...documentFields, "longitude", "latitude", "city", "country"],
});

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

export const dtaPracticePreviewFetchOptions = createFetchOptions({
  fields: [...documentFields, "slug", "name"],
  populate: {
    dta_location_news: dtaLocationPreviewFetchOptions,
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
    dta_practicesNew: dtaPracticePreviewFetchOptions,
    dtaInstitutionsNew: dtaInstitutionPreviewFetchOptions,
    dta_objects: dtaObjectPreviewFetchOptions,
  },
});

export const dtaPracticeDetailFetchOptions = createFetchOptions({
  fields: [...dtaPracticePreviewFetchOptions.fields, "description"],
  populate: {
    ...dtaPracticePreviewFetchOptions.populate,
    dta_peopleNew: dtaPersonPreviewFetchOptions,
    dta_institutionsNew: dtaInstitutionPreviewFetchOptions,
    dta_objects: dtaObjectPreviewFetchOptions,
  },
});

export const dtaInstitutionDetailFetchOptions = createFetchOptions({
  fields: [...dtaInstitutionPreviewFetchOptions.fields, "Description"], // Wrong casing in Strapi
  populate: {
    ...dtaInstitutionPreviewFetchOptions.populate,
    dtaPeople: dtaPersonPreviewFetchOptions,
    dta_practices: dtaPracticePreviewFetchOptions,
    dta_objects: dtaObjectPreviewFetchOptions,
  },
});

export const dtaObjectDetailFetchOptions = createFetchOptions({
  fields: [...dtaObjectPreviewFetchOptions.fields, "additionalDescription"],
  populate: {
    ...dtaObjectPreviewFetchOptions.populate,
    dta_peopleNew: dtaPersonPreviewFetchOptions,
    dta_practicesNew: dtaPracticePreviewFetchOptions,
    dta_institutionsNew: dtaInstitutionPreviewFetchOptions,
  },
});

export const dtaPageFetchOptions = createFetchOptions({
  fields: [...documentFields, "slug", "pageTitle"],
  populate: {
    dynamicZone: {
      on: {
        "dynamic-zone.subhead-module": {
          fields: ["subhead"],
        },
        "dynamic-zone.text-module": {
          fields: ["text"],
        },
        "dynamic-zone.image-carousel-module": {
          populate: {
            carouselImages: imgFetchOptions,
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

export const dtaSnippetsFetchOptions = createFetchOptions({
  fields: [
    ...documentFields,
    "peopleLandingDescription",
    "practicesLandingDescription",
    "institutionsLandingDescription",
    "collectionsLandingDescription",
    "dtaHomepageDescription",
  ],
});
