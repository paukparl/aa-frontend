import { notFound } from "next/navigation";
import { DTACollectionsPage } from "@/components/dta/pages/DTACollectionsPage";
import { DTAGenericPage } from "@/components/dta/pages/DTAGenericPage";
import { DTAInstitutionsPage } from "@/components/dta/pages/DTAInstitutionsPage";
import { DTAPeoplePage } from "@/components/dta/pages/DTAPeoplePage";
import { DTAPracticesPage } from "@/components/dta/pages/DTAPracticesPage";
import { SchoolApplyEntryPage } from "@/components/school/pages/SchoolApplyEntryPage";
import { SchoolFacilityPage } from "@/components/school/pages/SchoolFacilityPage";
import { SchoolPersonPage } from "@/components/school/pages/SchoolPersonPage";
import { SchoolProgrammePage } from "@/components/school/pages/SchoolProgrammePage";
import { SchoolTPPage } from "@/components/school/pages/SchoolTPPage";
import { SchoolVisitingSchoolPage } from "@/components/school/pages/SchoolVisitingSchoolPage";
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
      return <SchoolVisitingSchoolPage />;
    } else if (tipin1 === "taught-postgraduate") {
      return <SchoolTPPage />;
    } else {
      return <SchoolProgrammePage slug={tipin1} />;
    }
  }
  if (ground === "school-apply") {
    return <SchoolApplyEntryPage slug={tipin1} />;
  }
  if (ground === "school-facilities") {
    return <SchoolFacilityPage slug={tipin1} />;
  }
  if (ground === "school-people") {
    return <SchoolPersonPage slug={tipin1} />;
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
