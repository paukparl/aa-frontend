import { DTAMapPage } from "@/components/dta/pages/DTAMapPage";
import { HookeParkPage } from "@/components/hooke-park/HookeParkPage";
import PublicPage from "@/components/public/PublicPage";
import { RoamPage } from "@/components/roam/RoamPage";
import SchoolApplyPage from "@/components/school/pages/SchoolApplyPage";
import SchoolFacilitiesPage from "@/components/school/pages/SchoolFacilitiesPage";
import SchoolPage from "@/components/school/pages/SchoolPage";
import SchoolPeoplePage from "@/components/school/pages/SchoolPeoplePage";
import SchoolProgrammesPage from "@/components/school/pages/SchoolProgrammesPage";
import { parseRoute } from "@/lib/routes";
import { slugToPathname } from "@/lib/urlUtils";

export default async function GroundOptionalCatchAllPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const pathname = slugToPathname(slug);
  const route = parseRoute(pathname);

  console.log("----------", slug, pathname, route);

  if (route?.ground === "school") {
    return <SchoolPage />;
  }
  if (route?.ground === "schoolProgrammes") {
    return <SchoolProgrammesPage />;
  }
  if (route?.ground === "schoolApply") {
    return <SchoolApplyPage />;
  }
  if (route?.ground === "schoolFacilities") {
    return <SchoolFacilitiesPage />;
  }
  if (route?.ground === "schoolPeople") {
    return <SchoolPeoplePage />;
  }
  if (route?.ground === "hookePark") {
    return <HookeParkPage />;
  }
  if (route?.ground === "public") {
    return <PublicPage />;
  }
  if (route?.ground === "dta") {
    return <DTAMapPage />;
  }
  if (route?.ground === "roam") {
    return <RoamPage />;
  }

  // notFound();
  return null;
}
