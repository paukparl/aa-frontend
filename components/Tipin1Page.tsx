import { notFound } from "next/navigation";
import { DTACollectionsPage } from "@/components/dta/pages/DTACollectionsPage";
import { DTAGenericPage } from "@/components/dta/pages/DTAGenericPage";
import { DTAInstitutionsPage } from "@/components/dta/pages/DTAInstitutionsPage";
import { DTAPeoplePage } from "@/components/dta/pages/DTAPeoplePage";
import { DTAPracticesPage } from "@/components/dta/pages/DTAPracticesPage";
import { SchoolProgrammePage } from "@/components/school/pages/SchoolProgrammePage";
import { SchoolVisitingSchoolsPage } from "@/components/school/pages/SchoolVisitingSchoolsPage";
import { SearchParams } from "@/lib/types";

export default async function Tipin1Page({
  params,
  searchParams,
}: {
  params: Promise<{ ground: string; tipin1: string }>;
  searchParams: SearchParams;
}) {
  const { ground, tipin1 } = await params;
  if (ground === "school-programmes") {
    if (tipin1 === "aa-visiting-school") {
      return <SchoolVisitingSchoolsPage />;
    } else {
      return <SchoolProgrammePage slug={tipin1} />;
    }
  }
  if (ground === "dta") {
    if (tipin1 === "people") {
      return <DTAPeoplePage searchParams={searchParams} />;
    }
    if (tipin1 === "practices") {
      return <DTAPracticesPage searchParams={searchParams} />;
    }
    if (tipin1 === "institutions") {
      return <DTAInstitutionsPage searchParams={searchParams} />;
    }
    if (tipin1 === "collections") {
      return <DTACollectionsPage searchParams={searchParams} />;
    }
    return <DTAGenericPage slug={tipin1} />;
  }

  notFound();
}
