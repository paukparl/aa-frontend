import { NextRequest } from "next/server";
import { z } from "zod/v4";
import {
  arrayHasItems,
  resolveSlug,
  resolveSlugs,
  revalidateTag,
  // revalidateByResolvedTag,
  revalidateWith,
  tags,
} from "@/lib/cacheUtils";
import { schemas } from "@/lib/schemas";

const requestBodySchema = z.object({
  event: z.enum([
    "entry.create",
    "entry.update",
    "entry.delete",
    "entry.publish",
    "entry.unpublish",
  ]),
  createdAt: z.string(),
  model: z.string(),
  entry: schemas.document.loose(),
});

export async function POST(request: NextRequest) {
  const body = requestBodySchema.parse(await request.json());

  // ================================
  // DTA
  // ================================

  // DTA Collection
  if (body.model === "dta-collection") {
    revalidateTag(tags.dtaCollections);
    // DTA Filter
    revalidateTag(tags.dtaFilter);
  }

  // DTA Event
  else if (body.model === "dta-event") {
    revalidateTag(tags.dtaEvents);
  }

  // DTA Event Type
  else if (body.model === "dta-event-type") {
    revalidateTag(tags.dtaEventType);
  }

  // DTA Institution
  else if (body.model === "dta-institution") {
    revalidateWith(body.entry, resolveSlug, tags.dtaInstitution);
    // DTA Events
    if (arrayHasItems(body.entry.dta_events)) revalidateTag(tags.dtaEvents);
    // DTA Objects
    revalidateWith(body.entry.dta_objects, resolveSlugs, tags.dtaObject);
    // DTA People
    revalidateWith(body.entry.dtaPeople, resolveSlugs, tags.dtaPerson);
    // DTA Practices
    revalidateWith(body.entry.dta_practices, resolveSlugs, tags.dtaPractice);
  }

  // DTA Institution Type
  else if (body.model === "dta-institution-type") {
    revalidateTag(tags.dtaInstitutionType);
    // DTA Filter
    revalidateTag(tags.dtaFilter);
  }

  // DTA Location
  else if (body.model === "dta-location") {
    // DTA Events
    if (arrayHasItems(body.entry.dtaEvents)) revalidateTag(tags.dtaEvents);
    // DTA Institutions
    revalidateWith(
      body.entry.dta_institutions,
      resolveSlugs,
      tags.dtaInstitution,
    );
    // DTA People
    revalidateWith(body.entry.dtaPeople, resolveSlugs, tags.dtaPerson);
    // DTA Practices
    revalidateWith(body.entry.dta_practices, resolveSlugs, tags.dtaPractice);
    // TODO: AA Events
    // TODO: School Visiting School Courses
  }

  // DTA Object
  else if (body.model === "dta-object") {
    revalidateWith(body.entry, resolveSlug, tags.dtaObject);
    // DTA Events
    if (arrayHasItems(body.entry.dta_events)) revalidateTag(tags.dtaEvents);
    // DTA Institutions
    revalidateWith(
      body.entry.dta_institutionsNew,
      resolveSlugs,
      tags.dtaInstitution,
    );
    // DTA People
    revalidateWith(body.entry.dta_peopleNew, resolveSlugs, tags.dtaPerson);
    // DTA Practices
    revalidateWith(body.entry.dta_practicesNew, resolveSlugs, tags.dtaPractice);
    // TODO: DTA Otto Career Phases
  }

  // DTA Otto Career Phase
  else if (body.model === "dta-koenigsberger-career-phase") {
    revalidateTag(tags.dtaOttoCareerPhase);
  }

  // DTA Page
  else if (body.model === "dta-page") {
    revalidateWith(body.entry, resolveSlug, tags.dtaPage);
    // DTA Nav
    revalidateTag(tags.dtaNav);
  }

  // DTA Person
  else if (body.model === "dta-person") {
    revalidateWith(body.entry, resolveSlug, tags.dtaPerson);
    // DTA Events
    if (arrayHasItems(body.entry.dta_events)) revalidateTag(tags.dtaEvents);
    // DTA Institutions
    revalidateWith(
      body.entry.dtaInstitutionsNew,
      resolveSlugs,
      tags.dtaInstitution,
    );
    // DTA Object
    revalidateWith(body.entry.dta_objects, resolveSlugs, tags.dtaObject);
    // DTA Practices
    revalidateWith(body.entry.dta_practicesNew, resolveSlugs, tags.dtaPractice);
  }

  // DTA Practice
  else if (body.model === "dta-practice") {
    revalidateWith(body.entry, resolveSlug, tags.dtaPractice);
    // DTA Events
    if (arrayHasItems(body.entry.dta_events)) revalidateTag(tags.dtaEvents);
    // DTA Institutions
    revalidateWith(
      body.entry.dta_institutionsNew,
      resolveSlugs,
      tags.dtaInstitution,
    );
    // DTA Objects
    revalidateWith(body.entry.dta_objects, resolveSlugs, tags.dtaObject);
    // DTA People
    revalidateWith(body.entry.dta_peopleNew, resolveSlugs, tags.dtaPerson);
  }

  // DTA Filter
  else if (body.model === "dta-filter") {
    revalidateTag(tags.dtaFilter);
  }

  // DTA Map
  else if (body.model === "dta-map") {
    revalidateTag(tags.dtaMap);
  }

  // DTA Nav
  else if (body.model === "dta-nav") {
    revalidateTag(tags.dtaNav);
  }

  // DTA Snippet
  else if (body.model === "dta-snippet") {
    revalidateTag(tags.dtaSnippet);
  }

  // ================================
  // School
  // ================================

  // School Apply Entry
  else if (body.model === "school-apply") {
    revalidateTag(tags.schoolApplyEntries);
    revalidateWith(body.entry, resolveSlug, tags.schoolApplyEntry);
  }

  // School Facility
  else if (body.model === "school-facility") {
    revalidateWith(body.entry, resolveSlug, tags.schoolFacility);
    // TODO: AA Events?
  }

  // School Page
  else if (body.model === "school-page") {
    revalidateWith(body.entry, resolveSlug, tags.schoolPage);
    // School Nav
    revalidateTag(tags.schoolNav);
  }

  // School Person
  else if (body.model === "school-person") {
    revalidateWith(body.entry, resolveSlug, tags.schoolPerson);
    // School Units
    revalidateWith(body.entry.school_units, resolveSlugs, tags.schoolUnit);
  }

  // School Person Type
  // TODO: maybe change to school-person-type
  else if (body.model === "person-type") {
    revalidateTag(tags.schoolPersonTypes);
  }

  // School Programme
  else if (body.model === "school-programme") {
    revalidateWith(body.entry, resolveSlug, tags.schoolProgramme);
    // School Apply Entries
    revalidateWith(body.entry.schoolApply, resolveSlugs, tags.schoolApplyEntry);
    // School Units
    revalidateWith(body.entry.school_units, resolveSlugs, tags.schoolUnit);
    // School Snippet
    revalidateTag(tags.schoolSnippet);
  }

  // School Unit
  else if (body.model === "school-unit") {
    revalidateWith(body.entry, resolveSlug, tags.schoolUnit);
    // School People
    revalidateWith(body.entry.school_people, resolveSlugs, tags.schoolPerson);
    // School Programmes
    revalidateWith(
      body.entry.school_programmes,
      resolveSlugs,
      tags.schoolProgramme,
    );
  }

  // School Visiting School Course
  else if (body.model === "school-visiting-school") {
    revalidateWith(body.entry, resolveSlug, tags.schoolVisitingSchoolCourse);
  }

  // School Nav
  else if (body.model === "school-nav") {
    revalidateTag(tags.schoolNav);
  }

  // School Snippet
  else if (body.model === "school-snippet") {
    revalidateTag(tags.schoolSnippet);
  }

  // School Visiting School Snippet
  // TODO: maybe change to school-visiting-school-snippet
  else if (body.model === "visiting-school-snippet") {
    revalidateTag(tags.schoolVisitingSchoolSnippet);
  }

  return new Response("OK");
}
