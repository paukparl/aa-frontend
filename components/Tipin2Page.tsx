import { notFound } from "next/navigation";
import { DTAInstitutionPage } from "@/components/dta/pages/DTAInstitutionPage";
import { DTAObjectPage } from "@/components/dta/pages/DTAObjectPage";
import { DTAPersonPage } from "@/components/dta/pages/DTAPersonPage";
import { DTAPracticePage } from "@/components/dta/pages/DTAPracticePage";
import { SchoolUnitPage } from "@/components/school/pages/SchoolUnitPage";
import { SchoolVisitingSchoolCoursePage } from "@/components/school/pages/SchoolVisitingSchoolCoursePage";

export default async function Tipin2Page({
  params,
}: {
  params: Promise<{ ground: string; tipin1: string; tipin2: string }>;
}) {
  const { ground, tipin1, tipin2 } = await params;

  if (ground === "school-programmes") {
    if (tipin1 === "aa-visiting-school") {
      return <SchoolVisitingSchoolCoursePage slug={tipin2} />;
    } else {
      return <SchoolUnitPage programmeSlug={tipin1} slug={tipin2} />;
    }
  }
  if (ground === "hooke-park") {
    return null;
    // return <HookeParkPage />;
  }
  if (ground === "dta") {
    if (tipin1 === "people") {
      return <DTAPersonPage slug={tipin2} />;
    }
    if (tipin1 === "practices") {
      return <DTAPracticePage slug={tipin2} />;
    }
    if (tipin1 === "institutions") {
      return <DTAInstitutionPage slug={tipin2} />;
    }
    if (tipin1 === "collections") {
      return <DTAObjectPage slug={tipin2} />;
    }
  }
  if (ground === "roam") {
    return null;
    // return <RoamPage />;
  }

  notFound();
}
