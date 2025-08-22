import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { getDTAInstitution } from "@/api/getDTAInstitution";
import { getSchoolUnit } from "@/api/getSchoolUnit";
import { routes } from "@/lib/routes";
import serverEnv from "@/lib/serverEnv";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");
  const uid = searchParams.get("uid");
  const status = searchParams.get("status");

  if (secret !== serverEnv.PREVIEW_SECRET)
    return new Response("Invalid token", { status: 401 });
  if (!uid || !status) return new Response("Bad request", { status: 400 });

  // Enable/disable draft mode
  const draft = await draftMode();
  if (status === "published") draft.disable();
  else draft.enable();

  let path;
  if (uid === "api::dta-collection.dta-collection") {
    path = routes.tipin1("dta", "collections");
  } else if (uid === "api::dta-institution.dta-institution" && slug) {
    const institution = await getDTAInstitution(slug);
    if (institution)
      path = routes.tipin2("dta", "institutions", institution.slug ?? "-");
  } else if (uid === "api::dta-object.dta-object" && slug) {
    path = routes.tipin2("dta", "collections", slug);
  } else if (uid === "api::dta-page.dta-page" && slug) {
    path = routes.tipin2("dta", "pages", slug);
  } else if (uid === "api::dta-person.dta-person" && slug) {
    path = routes.tipin2("dta", "people", slug);
  } else if (uid === "api::dta-practice.dta-practice" && slug) {
    path = routes.tipin2("dta", "practices", slug);
  } else if (uid === "api::school-apply.school-apply" && slug) {
    path = routes.tipin1("school-apply", slug);
  } else if (uid === "api::school-facility.school-facility" && slug) {
    path = routes.tipin1("school-facilities", slug);
  } else if (uid === "api::school-programme.school-programme" && slug) {
    path = routes.tipin1("school-programmes", slug);
  } else if (uid === "api::school-unit.school-unit" && slug) {
    const unit = await getSchoolUnit(slug);
    const firstProgramme = unit?.school_programmes[0] ?? null;
    if (unit && firstProgramme)
      path = routes.tipin2(
        "school-programmes",
        firstProgramme.slug ?? "-",
        unit.slug ?? "-",
      );
  } else if (
    uid === "api::school-visiting-school.school-visiting-school" &&
    slug
  ) {
    path = routes.tipin2("school-programmes", "aa-visiting-school", slug);
  } else if (uid === "api::dta-map.dta-map") {
    path = routes.ground("dta");
  } else if (uid === "api::dta-nav.dta-nav") {
    path = routes.ground("dta");
  } else if (uid === "api::dta-snippet.dta-snippet") {
    path = routes.ground("dta");
  } else if (uid === "api::taught-postgraduate.taught-postgraduate") {
    path = routes.tipin1("school-programmes", "taught-postgraduate");
  } else if (uid === "api::visiting-school-snippet.visiting-school-snippet") {
    path = routes.tipin1("school-programmes", "aa-visiting-school");
  }

  if (!path) return new Response("Not found", { status: 404 });

  // Redirect to the path from the fetched post
  // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
  redirect(path);
}
