import { createFetchOptions } from "@/lib/fetchData";

export const dtaPersonPreviewFetchOptions = createFetchOptions({
  populate: { headshot: true },
});

export const dtaPracticePreviewFetchOptions = createFetchOptions({
  populate: {
    dta_location_news: true,
  },
});

export const dtaInstitutionPreviewFetchOptions = createFetchOptions({
  populate: { Display: true },
});

export const dtaObjectPreviewFetchOptions = createFetchOptions({
  populate: { image: true },
});

export const dtaPersonDetailFetchOptions = createFetchOptions({
  populate: {
    ...dtaPersonPreviewFetchOptions.populate,
    Eduction: true,
    Career: true,
    dta_practicesNew: dtaPracticePreviewFetchOptions,
    dtaInstitutionsNew: dtaInstitutionPreviewFetchOptions,
    dta_objects: dtaObjectPreviewFetchOptions,
    dtaLocation: true,
  },
});

export const dtaPracticeDetailFetchOptions = createFetchOptions({
  populate: {
    ...dtaPracticePreviewFetchOptions.populate,
    dta_peopleNew: dtaPersonPreviewFetchOptions,
    dta_institutionsNew: dtaInstitutionPreviewFetchOptions,
    dta_objects: dtaObjectPreviewFetchOptions,
    dta_location_news: true,
  },
});

export const dtaInstitutionDetailFetchOptions = createFetchOptions({
  populate: {
    ...dtaInstitutionPreviewFetchOptions.populate,
    dtaPeople: dtaPersonPreviewFetchOptions,
    dta_practices: dtaPracticePreviewFetchOptions,
    dta_objects: dtaObjectPreviewFetchOptions,
    dta_locationsNew: true,
  },
});

export const dtaObjectDetailFetchOptions = createFetchOptions({
  populate: {
    ...dtaObjectPreviewFetchOptions.populate,
    dta_peopleNew: dtaPersonPreviewFetchOptions,
    dta_practicesNew: dtaPracticePreviewFetchOptions,
    dta_institutionsNew: dtaInstitutionPreviewFetchOptions,
  },
});

export const dtaPageFetchOptions = createFetchOptions({
  populate: {
    dynamicZone: {
      on: {
        "dynamic-zone.subhead-module": true,
        "dynamic-zone.text-module": true,
        "dynamic-zone.image-carousel-module": {
          populate: { imageCarouselItem: true },
        },
        "dynamic-zone.text-image-module": {
          populate: { image: true },
        },
      },
    },
  },
});

export const dtaEventFetchOptions = createFetchOptions({
  populate: {
    dtaLocation: true,
    image: true,
    dta_peopleNew: dtaPersonPreviewFetchOptions,
    dta_institutionsNew: dtaInstitutionPreviewFetchOptions,
    dta_practicesNew: dtaPracticePreviewFetchOptions,
    dta_objectsNew: dtaObjectPreviewFetchOptions,
  },
});

export const dtaMapFetchOptions = createFetchOptions({
  populate: {
    dta_event_types: {
      populate: { dta_events: dtaEventFetchOptions },
    },
  },
});
