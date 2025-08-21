import { revalidateTag as _revalidateTag } from "next/cache";

export const tags = {
  dtaCollections: "dta-collection" as const,
  dtaEvents: "dta-event" as const,
  dtaEventType: "dta-event-type" as const,
  dtaInstitutions: "dta-institution" as const,
  dtaInstitution: (slug: string) => `dta-institution:${slug}` as const,
  dtaInstitutionType: "dta-institution-type" as const,
  dtaObjects: "dta-object" as const,
  dtaObject: (slug: string) => `dta-object:${slug}` as const,
  dtaOttoCareerPhase: "dta-koenigsberger-career-phase" as const,
  dtaPage: (slug: string) => `dta-page:${slug}` as const,
  dtaPeople: "dta-person" as const,
  dtaPerson: (slug: string) => `dta-person:${slug}` as const,
  dtaPractices: "dta-practice" as const,
  dtaPractice: (slug: string) => `dta-practice:${slug}` as const,
  dtaFilter: "dta-filter" as const,
  dtaMap: "dta-map" as const,
  dtaNav: "dta-nav" as const,
  dtaSnippet: "dta-snippet" as const,
  schoolApplyEntries: "school-apply" as const,
  schoolApplyEntry: (slug: string) => `school-apply:${slug}` as const,
  schoolFacilities: "school-facility" as const,
  schoolFacility: (slug: string) => `school-facility:${slug}` as const,
  schoolPage: (slug: string) => `school-page:${slug}` as const,
  schoolPeople: "school-person" as const,
  schoolPerson: (slug: string) => `school-person:${slug}` as const,
  schoolPersonTypes: "school-person-type" as const,
  schoolProgrammes: "school-programme" as const,
  schoolProgramme: (slug: string) => `school-programme:${slug}` as const,
  schoolUnits: "school-unit" as const,
  schoolUnit: (slug: string) => `school-unit:${slug}` as const,
  schoolVisitingSchoolCourses: "school-visiting-school" as const,
  schoolVisitingSchoolCourse: (slug: string) =>
    `school-visiting-school:${slug}` as const,
  schoolVisitingSchoolSnippet: "school-visiting-school-snippet" as const,
  schoolNav: "school-nav" as const,
  schoolSnippet: "school-snippet" as const,
};

export function revalidateTag(tag: string) {
  console.log("revalidating:", tag);
  _revalidateTag(tag);
}

// value if string, otherwise return type of function
type Tag = {
  [K in keyof typeof tags]: (typeof tags)[K] extends (
    ...args: never[]
  ) => string
    ? ReturnType<(typeof tags)[K]>
    : (typeof tags)[K];
}[keyof typeof tags];

export function arrayHasItems(input: unknown): boolean {
  return Array.isArray(input) && input.length > 0;
}

export function resolveSlug(input: unknown): string | undefined {
  if (
    typeof input === "object" &&
    input !== null &&
    "slug" in input &&
    typeof input.slug === "string"
  ) {
    return input.slug;
  }
  return undefined;
}

export function resolveSlugs(input: unknown): string[] | undefined {
  if (Array.isArray(input)) {
    return input
      .map(resolveSlug)
      .filter((slug): slug is string => slug !== undefined);
  }
  return undefined;
}

export function resolveArray(document: unknown): string[] | undefined {
  if (Array.isArray(document)) {
    return document
      .map(resolveSlug)
      .filter((slug): slug is string => slug !== undefined);
  }
  return undefined;
}

export function revalidateWith(
  input: unknown,
  resolveValue: (input: unknown) => string | string[] | undefined,
  tag: (value: string) => Tag,
) {
  const value = resolveValue(input);
  if (value) {
    if (Array.isArray(value)) {
      for (const v of value) {
        console.log("revalidating:", tag(v));
        revalidateTag(tag(v));
      }
    } else {
      console.log("revalidating:", tag(value));
      revalidateTag(tag(value));
    }
  }
}
