import { createFetchOptions } from "@/lib/fetchData";

export const documentFields = [
  "id",
  "documentId",
  "createdAt",
  "updatedAt",
  "publishedAt",
];

export const imgFetchOptions = createFetchOptions({
  fields: [
    ...documentFields,
    "url",
    "alternativeText",
    "caption",
    "mime",
    "width",
    "height",
    "formats",
  ],
});

export const fileFetchOptions = createFetchOptions({
  fields: [...documentFields, "url", "name", "mime"],
});
