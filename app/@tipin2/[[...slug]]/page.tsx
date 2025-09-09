import { DTAInstitutionPage } from "@/components/dta/pages/DTAInstitutionPage";
import { DTAObjectPage } from "@/components/dta/pages/DTAObjectPage";
import { DTAPersonPage } from "@/components/dta/pages/DTAPersonPage";
import { DTAPracticePage } from "@/components/dta/pages/DTAPracticePage";
import { SchoolUnitPage } from "@/components/school/pages/SchoolUnitPage";
import { parseRoute } from "@/lib/routes";
import { slugToPathname } from "@/lib/urlUtils";

export default async function Tipin2OptionalCatchAllPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const pathname = slugToPathname(slug);
  const route = parseRoute(pathname);

  if (route?.ground === "schoolProgrammes" && route.tipin1 && route.tipin2) {
    return <SchoolUnitPage parentSlug={route.tipin1} slug={route.tipin2} />;
  }
  if (route?.ground === "dta" && route.tipin1 === "people" && route.tipin2) {
    return <DTAPersonPage slug={route.tipin2} />;
  }
  if (route?.ground === "dta" && route.tipin1 === "practices" && route.tipin2) {
    return <DTAPracticePage slug={route.tipin2} />;
  }
  if (
    route?.ground === "dta" &&
    route.tipin1 === "institutions" &&
    route.tipin2
  ) {
    return <DTAInstitutionPage slug={route.tipin2} />;
  }
  if (
    route?.ground === "dta" &&
    route.tipin1 === "collections" &&
    route.tipin2
  ) {
    return <DTAObjectPage slug={route.tipin2} />;
  }

  return null;
}
