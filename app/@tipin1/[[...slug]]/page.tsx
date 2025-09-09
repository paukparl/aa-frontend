import { DTACollectionsPage } from "@/components/dta/pages/DTACollectionsPage";
import { DTAGenericPage } from "@/components/dta/pages/DTAGenericPage";
import { DTAInstitutionsPage } from "@/components/dta/pages/DTAInstitutionsPage";
import { DTAPeoplePage } from "@/components/dta/pages/DTAPeoplePage";
import { DTAPracticesPage } from "@/components/dta/pages/DTAPracticesPage";
import { SchoolApplyEntryPage } from "@/components/school/pages/SchoolApplyEntryPage";
import { SchoolFacilityPage } from "@/components/school/pages/SchoolFacilityPage";
import { SchoolPersonPage } from "@/components/school/pages/SchoolPersonPage";
import { SchoolProgrammePage } from "@/components/school/pages/SchoolProgrammePage";
import { parseRoute } from "@/lib/routes";
import { SearchParams } from "@/lib/types";
import { slugToPathname } from "@/lib/urlUtils";

export default async function Tipin1OptionalCatchAllPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug?: string[] }>;
  searchParams: SearchParams;
}) {
  const { slug } = await params;
  const pathname = slugToPathname(slug);
  const route = parseRoute(pathname);

  if (route?.ground === "schoolProgrammes" && route.tipin1) {
    return <SchoolProgrammePage slug={route.tipin1} />;
  }
  if (route?.ground === "schoolApply" && route.tipin1) {
    return <SchoolApplyEntryPage slug={route.tipin1} />;
  }
  if (route?.ground === "schoolFacilities" && route.tipin1) {
    return <SchoolFacilityPage slug={route.tipin1} />;
  }
  if (route?.ground === "schoolPeople" && route.tipin1) {
    return <SchoolPersonPage slug={route.tipin1} />;
  }
  if (route?.ground === "dta" && route.tipin1 === "people") {
    return <DTAPeoplePage searchParams={searchParams} />;
  }
  if (route?.ground === "dta" && route.tipin1 === "practices") {
    return <DTAPracticesPage searchParams={searchParams} />;
  }
  if (route?.ground === "dta" && route.tipin1 === "institutions") {
    return <DTAInstitutionsPage searchParams={searchParams} />;
  }
  if (route?.ground === "dta" && route.tipin1 === "collections") {
    return <DTACollectionsPage searchParams={searchParams} />;
  }
  if (route?.ground === "dta" && route.tipin1) {
    return <DTAGenericPage slug={route.tipin1} />;
  }

  return null;
}
