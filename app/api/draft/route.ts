import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { getDTAPerson, getDTAPractice } from "@/api";
import { getDTAInstitution } from "@/api/getDTAInstitution";
import { getDTAObject } from "@/api/getDTAObject";
import { getDTAPage } from "@/api/getDTAPage";
import { getSchoolProgramme } from "@/api/getSchoolProgramme";
import { getSchoolUnit } from "@/api/getSchoolUnit";
import { getSchoolVisitingSchoolCourse } from "@/api/getSchoolVisitingSchoolCourse";
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
  if (!slug || !uid || !status)
    return new Response("Bad request", { status: 400 });

  // Enable/disable draft mode
  const draft = await draftMode();
  if (status === "published") draft.disable();
  else draft.enable();

  let path;
  if (uid === "api::dta-collection.dta-collection") {
    path = routes.tipin1("dta", "collections");
  } else if (uid === "api::dta-institution.dta-institution") {
    const institution = await getDTAInstitution(slug);
    if (institution)
      path = routes.tipin2("dta", "institutions", institution.documentId);
  } else if (uid === "api::dta-object.dta-object") {
    const object = await getDTAObject(slug);
    if (object) path = routes.tipin2("dta", "collections", object.documentId);
  } else if (uid === "api::dta-page.dta-page") {
    const page = await getDTAPage(slug);
    if (page) path = routes.tipin2("dta", "pages", page.documentId);
  } else if (uid === "api::dta-person.dta-person") {
    const person = await getDTAPerson(slug);
    if (person) path = routes.tipin2("dta", "people", person.documentId);
  } else if (uid === "api::dta-practice.dta-practice") {
    const practice = await getDTAPractice(slug);
    if (practice) path = routes.tipin2("dta", "practices", practice.documentId);
  } else if (uid === "api::school-programme.school-programme") {
    const programme = await getSchoolProgramme(slug);
    if (programme)
      path = routes.tipin1("school-programmes", programme.documentId);
  } else if (uid === "api::school-unit.school-unit") {
    const unit = await getSchoolUnit(slug);
    const firstProgramme = unit?.school_programmes[0];
    if (unit && firstProgramme)
      path = routes.tipin2(
        "school-programmes",
        firstProgramme.documentId,
        unit.documentId,
      );
  } else if (uid === "api::school-visiting-school.school-visiting-school") {
    const visitingSchool = await getSchoolVisitingSchoolCourse(slug);
    if (visitingSchool)
      path = routes.tipin2(
        "school-programmes",
        "aa-visiting-school",
        visitingSchool.documentId,
      );
  } else if (uid === "api::dta-map.dta-map") {
    path = routes.ground("dta");
  } else if (uid === "api::dta-snippet.dta-snippet") {
    path = routes.ground("dta");
  } else if (uid === "api::visiting-school-snippet.visiting-school-snippet") {
    path = routes.tipin1("school-programmes", "aa-visiting-school");
  }

  if (!path) return new Response("Not found", { status: 404 });

  // Redirect to the path from the fetched post
  // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
  redirect(path);
}
